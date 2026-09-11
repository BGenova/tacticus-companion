import { useState, type FormEvent } from 'react';
import { usePlayerStore } from '../../stores/player-store';
import { calculateGoalProgress, getGoalTypeLabel, findCharacterById, type GoalType, type GoalStatus } from '../../domain';
import { getCharacterInfo } from '../../data/static/characters';
import { ProgressBar } from '../ui/ProgressBar';
import { Tag } from '../ui/Tag';

const GOAL_TYPES: GoalType[] = ['rank', 'rarity', 'active', 'passive'];

const STATUS_LABELS: Record<GoalStatus, string> = {
  active: 'Actif',
  paused: 'En pause',
  done: 'Terminé',
};

const STATUS_TAG_VARIANT: Record<GoalStatus, 'tag-accent' | 'tag-neutral' | 'tag-outline'> = {
  active: 'tag-accent',
  paused: 'tag-neutral',
  done: 'tag-outline',
};

/**
 * Écran « Goals » : CRUD des objectifs, réordonnancement par priorité,
 * progression calculée depuis les données réelles du roster.
 */
export function GoalsScreen() {
  const characters = usePlayerStore((s) => s.getCharacters());
  const goals = usePlayerStore((s) => s.getSortedGoals());
  const addGoal = usePlayerStore((s) => s.addGoal);
  const updateGoalStatus = usePlayerStore((s) => s.updateGoalStatus);
  const removeGoal = usePlayerStore((s) => s.removeGoal);
  const reorderGoals = usePlayerStore((s) => s.reorderGoals);

  const [characterId, setCharacterId] = useState('');
  const [type, setType] = useState<GoalType>('rank');
  const [target, setTarget] = useState('');

  const handleAddGoal = (e: FormEvent) => {
    e.preventDefault();
    const parsedTarget = Number(target);
    if (!characterId || !Number.isFinite(parsedTarget) || parsedTarget <= 0) return;

    addGoal({ characterId, type, target: parsedTarget });
    setTarget('');
  };

  const handleMove = (index: number, direction: -1 | 1) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= goals.length) return;

    const orderedIds = goals.map((g) => g.id);
    [orderedIds[index], orderedIds[targetIndex]] = [orderedIds[targetIndex], orderedIds[index]];
    reorderGoals(orderedIds);
  };

  return (
    <div>
      <h1 style={{ marginBottom: 2 }}>Goals</h1>
      <p style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)', marginBottom: 'var(--space-6)' }}>
        Vos priorités, dans l'ordre où vous comptez les traiter.
      </p>

      <div className="card elev-sm" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card-kicker">Nouvel objectif</div>
        {characters.length === 0 ? (
          <p className="card-body">Importez votre roster depuis Settings avant de créer un objectif.</p>
        ) : (
          <form
            onSubmit={handleAddGoal}
            style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', alignItems: 'center', marginTop: 'var(--space-1)' }}
          >
            <select aria-label="Personnage" className="input" value={characterId} onChange={(e) => setCharacterId(e.target.value)} style={{ maxWidth: 200 }}>
              <option value="" disabled>Personnage…</option>
              {characters.map((c) => (
                <option key={c.characterId} value={c.characterId}>
                  {getCharacterInfo(c.characterId)?.name ?? c.characterId}
                </option>
              ))}
            </select>
            <select aria-label="Type d'objectif" className="input" value={type} onChange={(e) => setType(e.target.value as GoalType)} style={{ maxWidth: 160 }}>
              {GOAL_TYPES.map((t) => (
                <option key={t} value={t}>{getGoalTypeLabel(t)}</option>
              ))}
            </select>
            <input
              className="input"
              type="number"
              min={1}
              placeholder="Cible"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              style={{ maxWidth: 100 }}
            />
            <button type="submit" className="btn btn-primary" disabled={!characterId || !target}>
              Ajouter
            </button>
          </form>
        )}
      </div>

      {goals.length === 0 ? (
        <div className="card elev-sm" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
          <div className="card-title">Aucun objectif</div>
          <p className="card-body">Créez votre premier objectif ci-dessus.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {goals.map((goal, index) => {
            const character = findCharacterById(characters, goal.characterId);
            const info = getCharacterInfo(goal.characterId);
            const progress = character ? calculateGoalProgress(character, goal) : { current: 0, target: goal.target, pct: 0 };

            return (
              <div key={goal.id} className="card elev-sm" style={{ flexDirection: 'row', alignItems: 'center', gap: 'var(--space-4)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 'none' }}>
                  <button type="button" className="btn btn-ghost" disabled={index === 0} onClick={() => handleMove(index, -1)} aria-label="Monter">▲</button>
                  <button type="button" className="btn btn-ghost" disabled={index === goals.length - 1} onClick={() => handleMove(index, 1)} aria-label="Descendre">▼</button>
                </div>

                <div
                  style={{
                    width: 26, height: 26, flex: 'none', borderRadius: '50%',
                    border: '1px solid var(--color-divider)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12,
                  }}
                >
                  {goal.priority}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14 }}>
                    {info?.name ?? goal.characterId} — {getGoalTypeLabel(goal.type)} → {goal.target}
                  </div>
                  <div className="card-meta">{info?.faction ?? 'Personnage non importé'}</div>
                </div>

                <Tag variant={STATUS_TAG_VARIANT[goal.status]} style={{ flex: 'none' }}>{STATUS_LABELS[goal.status]}</Tag>

                <div style={{ width: 110, flex: 'none' }}>
                  <ProgressBar pct={progress.pct} />
                </div>

                <div style={{ display: 'flex', gap: 6, flex: 'none' }}>
                  {goal.status !== 'done' && (
                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={() => updateGoalStatus(goal.id, goal.status === 'paused' ? 'active' : 'paused')}
                    >
                      {goal.status === 'paused' ? 'Reprendre' : 'Pause'}
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => updateGoalStatus(goal.id, goal.status === 'done' ? 'active' : 'done')}
                  >
                    {goal.status === 'done' ? 'Rouvrir' : 'Terminé'}
                  </button>
                  <button type="button" className="btn btn-ghost" onClick={() => removeGoal(goal.id)}>
                    Supprimer
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
