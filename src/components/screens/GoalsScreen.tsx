import type { Goal } from '../../types';
import { ProgressBar } from '../ui/ProgressBar';
import { Tag } from '../ui/Tag';

/** Props du composant {@link GoalsScreen}. */
export interface GoalsScreenProps {
  /** Liste ordonnée des objectifs. */
  goals: Goal[];
}

/**
 * Écran « Goals » affichant les priorités du joueur avec leur progression.
 *
 * @param props - {@link GoalsScreenProps}
 */
export function GoalsScreen({ goals }: GoalsScreenProps) {
  return (
    <div>
      <h1 style={{ marginBottom: 2 }}>Goals</h1>
      <p style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)', marginBottom: 'var(--space-6)' }}>
        Vos priorités, dans l'ordre où vous comptez les traiter.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {goals.map((g) => (
          <div key={g.priority} className="card elev-sm" style={{ flexDirection: 'row', alignItems: 'center', gap: 'var(--space-4)' }}>
            {/* Drag handle */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.4, flex: 'none', cursor: 'grab' }}>
              <circle cx="9" cy="6" r="1.4" /><circle cx="15" cy="6" r="1.4" />
              <circle cx="9" cy="12" r="1.4" /><circle cx="15" cy="12" r="1.4" />
              <circle cx="9" cy="18" r="1.4" /><circle cx="15" cy="18" r="1.4" />
            </svg>

            <div
              style={{
                width: 26, height: 26, flex: 'none', borderRadius: '50%',
                border: '1px solid var(--color-divider)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12,
              }}
            >
              {g.priority}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14 }}>{g.title}</div>
              <div className="card-meta">{g.linked}</div>
            </div>

            <Tag variant={g.statusClass} style={{ flex: 'none' }}>{g.statusLabel}</Tag>

            <div style={{ width: 110, flex: 'none' }}>
              <ProgressBar pct={g.pct} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
