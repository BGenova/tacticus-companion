import { usePlayerStore } from '../../stores/player-store';
import { getRarityLabel, getInitials, getGoalTypeLabel } from '../../domain';
import { getCharacterInfo, type Alliance } from '../../data/static/characters';
import { StatCard } from '../ui/StatCard';
import { Tag } from '../ui/Tag';

/** Props du composant {@link CharacterDetailScreen}. */
export interface CharacterDetailScreenProps {
  /** Identifiant du personnage à afficher. */
  characterId: string;
  /** Retour au roster. */
  onBack: () => void;
  /** Navigation vers le Farm Planner. */
  onGoToFarm: () => void;
}

const RARITY_TAG_VARIANT: Record<number, 'tag-accent' | 'tag-accent-2' | 'tag-outline' | 'tag-neutral'> = {
  0: 'tag-neutral',
  1: 'tag-outline',
  2: 'tag-accent-2',
  3: 'tag-accent',
  4: 'tag-accent',
  5: 'tag-accent',
};

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button type="button" className="btn btn-ghost" onClick={onBack} style={{ marginBottom: 'var(--space-4)' }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 6l-6 6 6 6" />
      </svg>
      Retour au roster
    </button>
  );
}

/**
 * Fiche détaillée d'un personnage, connectée au store : progression, équipement,
 * compétences et objectifs liés.
 */
export function CharacterDetailScreen({ characterId, onBack, onGoToFarm }: CharacterDetailScreenProps) {
  const character = usePlayerStore((s) => s.getCharacterById(characterId));
  const goals = usePlayerStore((s) => s.getGoalsForCharacter(characterId));

  if (!character) {
    return (
      <div>
        <BackButton onBack={onBack} />
        <div className="card elev-sm" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
          <div className="card-title">Personnage introuvable</div>
          <p className="card-body">Ce personnage n'a pas encore été importé dans votre roster.</p>
        </div>
      </div>
    );
  }

  const info = getCharacterInfo(character.characterId);
  const name = info?.name ?? character.characterId;
  const faction = info?.faction ?? 'Unknown';
  const alliance: Alliance = info?.alliance ?? 'imperial';

  return (
    <div>
      <BackButton onBack={onBack} />

      <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
        <div
          style={{
            width: 88, height: 88, flex: 'none', borderRadius: 'var(--radius-md)',
            background: 'var(--color-accent-900)', color: 'var(--color-accent-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-heading)', fontSize: 26,
          }}
        >
          {getInitials(name)}
        </div>
        <div>
          <h2 style={{ marginBottom: 6 }}>{name}</h2>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 4 }}>
            <Tag variant="tag-outline">{alliance}</Tag>
            <Tag variant={RARITY_TAG_VARIANT[character.rarity] ?? 'tag-neutral'}>{getRarityLabel(character.rarity)}</Tag>
            <Tag variant="tag-neutral">Rang {character.rank}</Tag>
          </div>
          <div className="card-meta">{faction} · Niveau {character.level} · ★{character.stars}</div>
        </div>
      </div>

      <h3 style={{ marginBottom: 'var(--space-3)' }}>Progression</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
        <StatCard label="Niveau" value={String(character.level)} />
        <StatCard label="XP" value={String(character.xp)} />
        <StatCard label="Shards" value={String(character.shards)} />
        <StatCard label="Mythic Shards" value={String(character.mythicShards)} />
        <StatCard label="Compétence active" value={`Niv. ${character.abilities.active}`} />
        <StatCard label="Compétence passive" value={`Niv. ${character.abilities.passive}`} />
      </div>

      <h3 style={{ marginBottom: 'var(--space-3)' }}>Équipement</h3>
      {character.equipment.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
          {character.equipment.map((eq) => (
            <div key={eq.slot} className="card elev-sm">
              <div className="card-kicker">{eq.slot}</div>
              <div className="card-title" style={{ fontSize: 14 }}>{eq.name}</div>
              <Tag variant="tag-neutral" style={{ marginTop: 2 }}>{eq.rarity}</Tag>
            </div>
          ))}
        </div>
      ) : (
        <p className="card-body" style={{ marginBottom: 'var(--space-6)' }}>Aucun équipement équipé.</p>
      )}

      <h3 style={{ marginBottom: 'var(--space-3)' }}>Améliorations</h3>
      {character.upgrades.length > 0 ? (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
          {character.upgrades.map((upgradeId) => (
            <Tag key={upgradeId} variant="tag-outline">{upgradeId}</Tag>
          ))}
        </div>
      ) : (
        <p className="card-body" style={{ marginBottom: 'var(--space-6)' }}>Aucune amélioration appliquée.</p>
      )}

      <h3 style={{ marginBottom: 'var(--space-3)' }}>Objectifs liés</h3>
      {goals.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
          {goals.map((goal) => (
            <div key={goal.id} className="card elev-sm" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
              <div>
                <div style={{ fontSize: 14 }}>{getGoalTypeLabel(goal.type)} → {goal.target}</div>
                <Tag variant="tag-neutral" style={{ marginTop: 2 }}>{goal.status}</Tag>
              </div>
              <div className="card-meta">Priorité {goal.priority}</div>
            </div>
          ))}
          <button type="button" className="btn btn-primary" style={{ alignSelf: 'flex-start' }} onClick={onGoToFarm}>
            Voir dans le planificateur
          </button>
        </div>
      ) : (
        <div className="card elev-sm" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
          <div className="card-title">Aucun objectif actif pour ce personnage</div>
          <p className="card-body">Créez un objectif depuis l'écran Objectifs.</p>
        </div>
      )}
    </div>
  );
}
