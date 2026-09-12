import { useEffect, useState } from 'react';
import { usePlayerStore } from '../../stores/player-store';
import { getAllSnapshots, getCompletedGoals } from '../../adapters/history-db';
import { diffRosterSnapshots, calculateProgressionStats, getGoalTypeLabel } from '../../domain';
import type { RosterSnapshot, CompletedGoalEntry } from '../../domain';
import { getCharacterInfo } from '../../data/static/characters';
import { Tag } from '../ui/Tag';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString('fr-FR');
}

function characterName(characterId: string): string {
  return getCharacterInfo(characterId)?.name ?? characterId;
}

/**
 * Écran « History » : snapshots de roster (créés automatiquement à chaque
 * import), diff entre un snapshot et l'état actuel, objectifs terminés, et
 * statistiques de progression globales.
 */
export function HistoryScreen() {
  const currentData = usePlayerStore((s) => s.data);
  const [snapshots, setSnapshots] = useState<RosterSnapshot[]>([]);
  const [completedGoals, setCompletedGoals] = useState<CompletedGoalEntry[]>([]);
  const [selectedSnapshotId, setSelectedSnapshotId] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise.all([getAllSnapshots(), getCompletedGoals()]).then(([s, g]) => {
      setSnapshots(s);
      setCompletedGoals(g);
      setLoaded(true);
    });
  }, [currentData]);

  if (!loaded) {
    return (
      <div>
        <h1 style={{ marginBottom: 2 }}>History</h1>
        <p className="card-body">Chargement…</p>
      </div>
    );
  }

  const stats = calculateProgressionStats(snapshots);
  const selected = snapshots.find((s) => s.id === selectedSnapshotId) ?? snapshots[snapshots.length - 1];
  const diff = selected ? diffRosterSnapshots(selected.data, currentData) : null;

  return (
    <div>
      <h1 style={{ marginBottom: 2 }}>History</h1>
      <p style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)', marginBottom: 'var(--space-6)' }}>
        Snapshots de roster (créés automatiquement à chaque import), et objectifs terminés.
      </p>

      <div className="card elev-sm" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card-kicker">Statistiques de progression</div>
        {stats.snapshotCount === 0 ? (
          <p className="card-body">Pas encore assez d'historique — réimportez vos données plus tard pour voir votre progression.</p>
        ) : (
          <p className="card-body">
            {stats.snapshotCount} snapshot(s) · du {formatDate(stats.oldestSnapshotAt!)} au {formatDate(stats.newestSnapshotAt!)} · {stats.totalRankUps} montée(s) de rang cumulées
          </p>
        )}
      </div>

      {snapshots.length === 0 ? (
        <div className="card elev-sm" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
          <div className="card-title">Aucun snapshot</div>
          <p className="card-body">Un snapshot est créé automatiquement à chaque nouvel import (à partir du 2e).</p>
        </div>
      ) : (
        <>
          <h3 style={{ marginBottom: 'var(--space-3)' }}>Comparer avec l'état actuel</h3>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
            {snapshots.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`btn ${selected?.id === s.id ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setSelectedSnapshotId(s.id)}
              >
                {formatDate(s.takenAt)}
              </button>
            ))}
          </div>

          {diff && (diff.newCharacters.length > 0 || diff.changedCharacters.length > 0) ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
              {diff.newCharacters.map((id) => (
                <div key={id} className="card elev-sm" style={{ flexDirection: 'row', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <Tag variant="tag-accent">Nouveau</Tag>
                  <span>{characterName(id)}</span>
                </div>
              ))}
              {diff.changedCharacters.map((c) => (
                <div key={c.characterId} className="card elev-sm" style={{ flexDirection: 'row', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <span style={{ minWidth: 120 }}>{characterName(c.characterId)}</span>
                  {c.rankBefore !== c.rankAfter && <span className="card-meta">Rang {c.rankBefore} → {c.rankAfter}</span>}
                  {c.rarityBefore !== c.rarityAfter && <span className="card-meta">Rareté {c.rarityBefore} → {c.rarityAfter}</span>}
                  {c.levelBefore !== c.levelAfter && <span className="card-meta">Niveau {c.levelBefore} → {c.levelAfter}</span>}
                  {c.shardsBefore !== c.shardsAfter && <span className="card-meta">Shards {c.shardsBefore} → {c.shardsAfter}</span>}
                </div>
              ))}
            </div>
          ) : (
            <p className="card-body" style={{ marginBottom: 'var(--space-6)' }}>Aucun changement détecté depuis ce snapshot.</p>
          )}
        </>
      )}

      <h3 style={{ marginBottom: 'var(--space-3)' }}>Objectifs terminés</h3>
      {completedGoals.length === 0 ? (
        <p className="card-body">Aucun objectif terminé pour le moment.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          {completedGoals.map((g) => (
            <div key={g.goalId} className="card elev-sm" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
              <span>{characterName(g.characterId)} — {getGoalTypeLabel(g.type)} → {g.target}</span>
              <span className="card-meta">{formatDate(g.completedAt)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
