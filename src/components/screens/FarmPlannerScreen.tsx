import type { FarmComponent, FarmNode } from '../../types';
import { ProgressBar } from '../ui/ProgressBar';
import { Tag } from '../ui/Tag';

/** Props du composant {@link FarmPlannerScreen}. */
export interface FarmPlannerScreenProps {
  /** Composants à farmer. */
  components: FarmComponent[];
  /** Nœuds de campagne recommandés. */
  nodes: FarmNode[];
}

/**
 * Écran « Farm Planner » : liste de courses et nœuds recommandés.
 *
 * @param props - {@link FarmPlannerScreenProps}
 */
export function FarmPlannerScreen({ components, nodes }: FarmPlannerScreenProps) {
  return (
    <div>
      <h1 style={{ marginBottom: 2 }}>Farm Planner</h1>
      <p style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)', marginBottom: 'var(--space-6)' }}>
        La liste de courses du jour, et où l'obtenir.
      </p>

      <h3 style={{ marginBottom: 'var(--space-3)' }}>Liste de courses</h3>
      <table className="table" style={{ marginBottom: 'var(--space-6)' }}>
        <thead>
          <tr><th>Composant</th><th>Progression</th><th>Source</th></tr>
        </thead>
        <tbody>
          {components.map((fc) => (
            <tr key={fc.name}>
              <td>{fc.name}</td>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ProgressBar pct={fc.pct} style={{ width: 90 }} />
                  <span className="text-muted" style={{ fontSize: 12 }}>{fc.have} / {fc.need}</span>
                </div>
              </td>
              <td className="text-muted">{fc.source}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ marginBottom: 'var(--space-3)' }}>Nœuds recommandés</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'var(--space-4)' }}>
        {nodes.map((n) => (
          <div key={n.node} className="card elev-sm">
            <div className="card-kicker">{n.campaign}</div>
            <div className="card-title" style={{ fontSize: 16 }}>{n.node}</div>
            <div className="card-meta">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
              </svg>
              <span>{n.energy} énergie · goutte {n.dropRate}</span>
            </div>
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 2 }}>
              {n.who.map((w) => (
                <Tag key={w} variant="tag-neutral">{w}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
