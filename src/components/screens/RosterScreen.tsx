import { useState } from 'react';
import type { Alliance, Character } from '../../types';
import { Tag } from '../ui/Tag';

/** Props du composant {@link RosterScreen}. */
export interface RosterScreenProps {
  /** Liste complète des personnages. */
  roster: Character[];
  /** Callback de sélection d'un personnage. */
  onSelectCharacter: (id: string) => void;
}

/** Filtre d'alliance disponible. */
type AllianceFilter = 'all' | Alliance;

const ALLIANCE_FILTERS: { value: AllianceFilter; label: string }[] = [
  { value: 'all', label: 'Toutes' },
  { value: 'imperial', label: 'Imperial' },
  { value: 'chaos', label: 'Chaos' },
  { value: 'xenos', label: 'Xenos' },
];

/**
 * Écran « Roster » avec recherche textuelle et filtrage par alliance.
 *
 * @param props - {@link RosterScreenProps}
 */
export function RosterScreen({ roster, onSelectCharacter }: RosterScreenProps) {
  const [query, setQuery] = useState('');
  const [allianceFilter, setAllianceFilter] = useState<AllianceFilter>('all');

  const q = query.trim().toLowerCase();
  const filtered = roster.filter((c) => {
    const matchesQ = !q || c.name.toLowerCase().includes(q) || c.faction.toLowerCase().includes(q);
    const matchesA = allianceFilter === 'all' || c.alliance === allianceFilter;
    return matchesQ && matchesA;
  });

  return (
    <div>
      <h1 style={{ marginBottom: 2 }}>Roster</h1>
      <p style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)', marginBottom: 'var(--space-4)' }}>
        {filtered.length} personnage(s)
      </p>

      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-5)', alignItems: 'center' }}>
        <input
          className="input"
          style={{ maxWidth: 260 }}
          placeholder="Rechercher un nom ou une faction…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div style={{ display: 'flex', gap: 'var(--space-1)', flexWrap: 'wrap' }}>
          {ALLIANCE_FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              className={`btn ${allianceFilter === f.value ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setAllianceFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 'var(--space-4)' }}>
          {filtered.map((ch) => (
            <div
              key={ch.id}
              className="card elev-sm"
              style={{ cursor: 'pointer' }}
              onClick={() => onSelectCharacter(ch.id)}
            >
              <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                <div
                  style={{
                    width: 52, height: 52, flex: 'none', borderRadius: 'var(--radius-md)',
                    background: 'var(--color-accent-900)', color: 'var(--color-accent-200)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-heading)', fontSize: 15,
                  }}
                >
                  {ch.initials}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div className="card-title" style={{ fontSize: 15 }}>{ch.name}</div>
                  <div className="card-meta">{ch.faction}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 2 }}>
                <Tag variant="tag-outline">{ch.allianceLabel}</Tag>
                <Tag variant={ch.rarityClass}>{ch.rarityLabel}</Tag>
              </div>
              <div className="card-meta" style={{ marginTop: 2 }}>
                Rang {ch.rank} · Niveau {ch.level}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card elev-sm" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
          <div className="card-title">Aucun personnage ne correspond</div>
          <p className="card-body">Essayez un autre nom, ou changez de filtre d'alliance.</p>
        </div>
      )}
    </div>
  );
}
