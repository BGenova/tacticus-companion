import type { Character } from '../../types';
import { ProgressBar } from '../ui/ProgressBar';
import { StatCard } from '../ui/StatCard';
import { Tag } from '../ui/Tag';

/** Props du composant {@link CharacterDetailScreen}. */
export interface CharacterDetailScreenProps {
  /** Personnage à afficher. */
  character: Character;
  /** Retour au roster. */
  onBack: () => void;
  /** Navigation vers le Farm Planner. */
  onGoToFarm: () => void;
}

/**
 * Fiche détaillée d'un personnage : stats, équipement, compétences et objectif en cours.
 *
 * @param props - {@link CharacterDetailScreenProps}
 */
export function CharacterDetailScreen({ character: ch, onBack, onGoToFarm }: CharacterDetailScreenProps) {
  return (
    <div>
      <button type="button" className="btn btn-ghost" onClick={onBack} style={{ marginBottom: 'var(--space-4)' }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 6l-6 6 6 6" />
        </svg>
        Retour au roster
      </button>

      {/* En-tête */}
      <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
        <div
          style={{
            width: 88, height: 88, flex: 'none', borderRadius: 'var(--radius-md)',
            background: 'var(--color-accent-900)', color: 'var(--color-accent-200)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-heading)', fontSize: 26,
          }}
        >
          {ch.initials}
        </div>
        <div>
          <h2 style={{ marginBottom: 6 }}>{ch.name}</h2>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 4 }}>
            <Tag variant="tag-outline">{ch.allianceLabel}</Tag>
            <Tag variant={ch.rarityClass}>{ch.rarityLabel}</Tag>
            <Tag variant="tag-neutral">Rang {ch.rank}</Tag>
          </div>
          <div className="card-meta">{ch.faction} · Niveau {ch.level}</div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
        <StatCard label="Attaque" value={ch.atk} />
        <StatCard label="Vie" value={ch.hp} />
        <StatCard label="Armure" value={ch.armor} />
        <StatCard label="Critique" value={ch.crit} />
      </div>

      {/* Équipement */}
      <h3 style={{ marginBottom: 'var(--space-3)' }}>Équipement</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
        {ch.equipment.map((eq) => (
          <div key={eq.slot} className="card elev-sm">
            <div className="card-kicker">{eq.slot}</div>
            <div className="card-title" style={{ fontSize: 14 }}>{eq.name}</div>
            <Tag variant={eq.rarityClass} style={{ marginTop: 2 }}>{eq.rarityLabel}</Tag>
          </div>
        ))}
      </div>

      {/* Compétences */}
      <h3 style={{ marginBottom: 'var(--space-3)' }}>Compétences</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
        {ch.skills.map((sk) => (
          <div key={sk.name} className="card elev-sm" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
            <div>
              <div style={{ fontSize: 14 }}>{sk.name}</div>
              <Tag variant="tag-neutral" style={{ marginTop: 2 }}>{sk.type}</Tag>
            </div>
            <div style={{ width: 140 }}>
              <ProgressBar pct={sk.pct} />
              <div className="card-meta" style={{ marginTop: 3, textAlign: 'right' }}>{sk.levelLabel}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Objectif en cours */}
      <h3 style={{ marginBottom: 'var(--space-3)' }}>Objectif en cours</h3>
      <div className="card elev-md">
        <div className="card-kicker">Prochain palier</div>
        <div className="card-title">{ch.goal.title}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
          {ch.goal.costs.map((c) => (
            <div key={c.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 3 }}>
                <span>{c.label}</span>
                <span className="card-meta">{c.have} / {c.need}</span>
              </div>
              <ProgressBar pct={c.pct} />
            </div>
          ))}
        </div>
        <button type="button" className="btn btn-primary" style={{ marginTop: 'var(--space-3)', alignSelf: 'flex-start' }} onClick={onGoToFarm}>
          Voir dans le planificateur
        </button>
      </div>
    </div>
  );
}
