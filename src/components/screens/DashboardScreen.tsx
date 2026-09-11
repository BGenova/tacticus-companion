import type { Campaign, RecommendedAction } from '../../types';
import { ProgressBar } from '../ui/ProgressBar';

/** Props du composant {@link DashboardScreen}. */
export interface DashboardScreenProps {
  /** Liste des campagnes en cours. */
  campaigns: Campaign[];
  /** Actions recommandées. */
  actions: RecommendedAction[];
}

/**
 * Écran principal « Tableau de bord » affichant la progression du compte,
 * les blocages, le farm du jour, les campagnes et les actions recommandées.
 *
 * @param props - {@link DashboardScreenProps}
 */
export function DashboardScreen({ campaigns, actions }: DashboardScreenProps) {
  return (
    <div>
      <h1 style={{ marginBottom: 2 }}>Tableau de bord</h1>
      <p style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)', marginBottom: 'var(--space-6)' }}>
        Ce qui bloque votre progression, et ce qu'il reste à faire aujourd'hui.
      </p>

      {/* Progression du compte */}
      <div className="card elev-sm" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card-kicker">Progression du compte</div>
        <div className="card-title" style={{ fontSize: 26 }}>Niveau 47</div>
        <ProgressBar pct={68} height={8} style={{ marginTop: 'var(--space-2)' }} />
        <div className="card-meta">68% jusqu'au niveau 48 · 12 400 / 18 200 XP</div>
      </div>

      {/* Blocages + Farm du jour */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
        <div className="card elev-sm">
          <div className="card-kicker">Ce qui bloque</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
              <div>
                <div style={{ fontSize: 14 }}>Shards violet — Kael Ironvow</div>
                <div className="card-meta">Manque 64 pour le prochain palier</div>
              </div>
              <span className="tag tag-outline">Bloquant</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
              <div>
                <div style={{ fontSize: 14 }}>Or insuffisant</div>
                <div className="card-meta">Manque 15 000 pour la montée de rang</div>
              </div>
              <span className="tag tag-outline">Bloquant</span>
            </div>
          </div>
        </div>

        <div className="card elev-sm">
          <div className="card-kicker">À farmer aujourd'hui</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
              <div>
                <div style={{ fontSize: 14 }}>Nœud 9-3 — Campagne Écarlate</div>
                <div className="card-meta">6 énergie · goutte élevée</div>
              </div>
              <span className="tag tag-neutral">3 essais</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
              <div>
                <div style={{ fontSize: 14 }}>Nœud 6-1 — Culte du Vide</div>
                <div className="card-meta">5 énergie · goutte élevée</div>
              </div>
              <span className="tag tag-neutral">2 essais</span>
            </div>
          </div>
        </div>
      </div>

      {/* Campagnes */}
      <h3 style={{ marginBottom: 'var(--space-3)' }}>Campagnes</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
        {campaigns.map((camp) => (
          <div key={camp.name} className="card elev-sm">
            <div className="card-kicker">{camp.difficulty}</div>
            <div className="card-title" style={{ fontSize: 16 }}>{camp.name}</div>
            <ProgressBar pct={camp.pct} style={{ marginTop: 'var(--space-1)' }} />
            <div className="card-meta">{camp.pctLabel}</div>
          </div>
        ))}
      </div>

      {/* Actions recommandées */}
      <h3 style={{ marginBottom: 'var(--space-3)' }}>Actions recommandées</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'var(--space-4)' }}>
        {actions.map((act) => (
          <div key={act.title} className="card elev-sm">
            <div className="card-kicker">{act.impact}</div>
            <div className="card-title" style={{ fontSize: 16 }}>{act.title}</div>
            <p className="card-body">{act.reason}</p>
            <div className="card-meta">Coût : {act.cost}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
