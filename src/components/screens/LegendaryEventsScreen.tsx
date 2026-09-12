import { usePlayerStore } from '../../stores/player-store';
import { getCharacterInfo } from '../../data/static/characters';
import { Tag } from '../ui/Tag';

/**
 * Écran « Legendary Events » : progression par événement (points, monnaie,
 * shards, prochain coffre) et par voie (lane), depuis les données réelles de
 * l'API Tacticus. Ne couvre que la progression — pas les objectifs de score
 * par combat (`battleConfigs`, non modélisés, voir 12_TACTICUS_API.md).
 */
export function LegendaryEventsScreen() {
  const legendaryEvents = usePlayerStore((s) => s.getLegendaryEvents());

  return (
    <div>
      <h1 style={{ marginBottom: 2 }}>Legendary Events</h1>
      <p style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)', marginBottom: 'var(--space-6)' }}>
        Progression par événement et par voie — disponible uniquement via l'import API Tacticus.
      </p>

      {legendaryEvents.length === 0 ? (
        <div className="card elev-sm" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
          <div className="card-title">Aucun Legendary Event</div>
          <p className="card-body">Importez vos données depuis l'API Tacticus (Settings) pour voir votre progression.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {legendaryEvents.map((event) => {
            const info = getCharacterInfo(event.characterId);
            return (
              <div key={event.characterId} className="card elev-sm">
                <div className="card-title" style={{ fontSize: 18, marginBottom: 'var(--space-1)' }}>
                  {info?.name ?? event.characterId}
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 'var(--space-3)' }}>
                  <Tag variant="tag-accent">{event.currentPoints} points</Tag>
                  <Tag variant="tag-neutral">{event.currentCurrency} monnaie</Tag>
                  <Tag variant="tag-outline">{event.currentShards} shards</Tag>
                  <Tag variant="tag-outline">Coffre {event.currentClaimedChestIndex}</Tag>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 'var(--space-3)' }}>
                  {event.lanes.map((lane) => (
                    <div key={lane.laneId} className="card elev-sm">
                      <div className="card-kicker">Voie {lane.laneName}</div>
                      <div className="card-title" style={{ fontSize: 15 }}>{lane.encounterPoints} pts</div>
                      <div className="card-meta">{lane.objectivesClearedCount} objectif(s) · {lane.battlesTracked} combat(s)</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
