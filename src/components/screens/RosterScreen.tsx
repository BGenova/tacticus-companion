import { useState, useMemo } from 'react';
import { usePlayerStore } from '../../stores/player-store';
import { getRarityLabel, getInitials, sortByPower } from '../../domain';
import { getCharacterInfo, type Alliance } from '../../data/static/characters';
import { Tag } from '../ui/Tag';
import { CharacterAvatar } from '../ui/CharacterAvatar';

/** Props du composant {@link RosterScreen}. */
export interface RosterScreenProps {
  onSelectCharacter?: (id: string) => void;
}

type AllianceFilter = 'all' | Alliance;

const ALLIANCE_FILTERS: { value: AllianceFilter; label: string }[] = [
  { value: 'all', label: 'Toutes' },
  { value: 'imperial', label: 'Imperial' },
  { value: 'chaos', label: 'Chaos' },
  { value: 'xenos', label: 'Xenos' },
];

const RARITY_TAG_VARIANT: Record<number, 'tag-accent' | 'tag-accent-2' | 'tag-outline' | 'tag-neutral'> = {
  0: 'tag-neutral',
  1: 'tag-outline',
  2: 'tag-accent-2',
  3: 'tag-accent',
  4: 'tag-accent',
  5: 'tag-accent',
};

/**
 * Écran « Roster » connecté au store Zustand.
 * Affiche les personnages du joueur avec recherche et filtrage par alliance.
 */
export function RosterScreen({ onSelectCharacter }: RosterScreenProps) {
  const characters = usePlayerStore((s) => s.getCharacters());
  const [query, setQuery] = useState('');
  const [allianceFilter, setAllianceFilter] = useState<AllianceFilter>('all');
  const [sortBy, setSortBy] = useState<'power' | 'name' | 'level'>('power');

  const enriched = useMemo(() => {
    return characters.map((cp) => {
      const info = getCharacterInfo(cp.characterId);
      return {
        ...cp,
        name: info?.name ?? cp.characterId,
        faction: info?.faction ?? 'Unknown',
        alliance: info?.alliance ?? ('imperial' as Alliance),
        initials: getInitials(info?.name ?? cp.characterId),
        rarityLabel: getRarityLabel(cp.rarity),
      };
    });
  }, [characters]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let result = enriched.filter((c) => {
      const matchesQ = !q || c.name.toLowerCase().includes(q) || c.faction.toLowerCase().includes(q);
      const matchesA = allianceFilter === 'all' || c.alliance === allianceFilter;
      return matchesQ && matchesA;
    });

    if (sortBy === 'power') {
      result = sortByPower(result) as typeof result;
    } else if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'level') {
      result = [...result].sort((a, b) => b.level - a.level);
    }

    return result;
  }, [enriched, query, allianceFilter, sortBy]);

  if (characters.length === 0) {
    return (
      <div>
        <h1 style={{ marginBottom: 2 }}>Roster</h1>
        <div className="card elev-sm" style={{ textAlign: 'center', padding: 'var(--space-8)', marginTop: 'var(--space-6)' }}>
          <div className="card-title">Aucun personnage importé</div>
          <p className="card-body">Importez vos données depuis l'écran Settings pour voir votre roster.</p>
        </div>
      </div>
    );
  }

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
        <select
          className="input"
          style={{ maxWidth: 140 }}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
        >
          <option value="power">Puissance</option>
          <option value="name">Nom</option>
          <option value="level">Niveau</option>
        </select>
      </div>
      {filtered.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 'var(--space-4)' }}>
          {filtered.map((ch) => (
            <div
              key={ch.characterId}
              className="card elev-sm"
              style={{ cursor: onSelectCharacter ? 'pointer' : 'default' }}
              onClick={() => onSelectCharacter?.(ch.characterId)}
            >
              <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                <CharacterAvatar characterId={ch.characterId} initials={ch.initials} />
                <div style={{ minWidth: 0 }}>
                  <div className="card-title" style={{ fontSize: 15 }}>{ch.name}</div>
                  <div className="card-meta">{ch.faction}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 2 }}>
                <Tag variant="tag-outline">{ch.alliance}</Tag>
                <Tag variant={RARITY_TAG_VARIANT[ch.rarity] ?? 'tag-neutral'}>{ch.rarityLabel}</Tag>
              </div>
              <div className="card-meta" style={{ marginTop: 2 }}>
                Rang {ch.rank} · Niveau {ch.level} · ★{ch.stars}
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
