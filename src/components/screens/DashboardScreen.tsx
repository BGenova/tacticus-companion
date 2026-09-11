import type { RecommendedAction } from '../../types';
import { ProgressBar } from '../ui/ProgressBar';
import { Tag } from '../ui/Tag';
import { usePlayerStore } from '../../stores/player-store';
import { calculateGoalProgress, getGoalTypeLabel, findCharacterById, calculateCampaignProgress, getCampaignTypeLabel } from '../../domain';
import { getCharacterInfo } from '../../data/static/characters';

/** Props du composant {@link DashboardScreen}. */
export interface DashboardScreenProps {
  /** Actions recommandées. */
  actions: RecommendedAction[];
}

const NEXT_GOALS_LIMIT = 3;

/**
 * Écran principal « Tableau de bord » affichant la progression du compte,
 * les blocages, le farm du jour, les campagnes et les actions recommandées.
 *
 * @param props - {@link DashboardScreenProps}
 */
export function DashboardScreen({ actions }: DashboardScreenProps) {
  const characters = usePlayerStore((s) => s.getCharacters());
  const goals = usePlayerStore((s) => s.getSortedGoals());
  const profile = usePlayerStore((s) => s.data.profile);
  const campaigns = usePlayerStore((s) => s.getCampaigns());

  const nextGoals = goals
    .filter((g) => g.status === 'active')
    .slice(0, NEXT_GOALS_LIMIT)
    .map((goal) => {
      const character = findCharacterById(characters, goal.characterId);
      const info = getCharacterInfo(goal.characterId);
      const progress = character ? calculateGoalProgress(character, goal) : { current: 0, target: goal.target, pct: 0 };
      return {
        id: goal.id,
        name: info?.name ?? goal.characterId,
        label: `${getGoalTypeLabel(goal.type)} → ${goal.target}`,
        pct: progress.pct,
      };
    });

  return (
    <div>
      <h1 style={{ marginBottom: 2 }}>Tableau de bord</h1>
      <p style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)', marginBottom: 'var(--space-6)' }}>
        Ce qui bloque votre progression, et ce qu'il reste à faire aujourd'hui.
      </p>

      {/* Prochains objectifs */}
      <h3 style={{ marginBottom: 'var(--space-3)' }}>Prochains objectifs</h3>
      {nextGoals.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
          {nextGoals.map((g) => (
            <div key={g.id} className="card elev-sm" style={{ flexDirection: 'row', alignItems: 'center', gap: 'var(--space-4)' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14 }}>{g.name}</div>
                <div className="card-meta">{g.label}</div>
              </div>
              <Tag variant="tag-accent" style={{ flex: 'none' }}>{g.pct}%</Tag>
              <div style={{ width: 110, flex: 'none' }}>
                <ProgressBar pct={g.pct} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="card-body" style={{ marginBottom: 'var(--space-6)' }}>Aucun objectif actif — créez-en un depuis l'écran Goals.</p>
      )}

      {/* Profil joueur */}
      <div className="card elev-sm" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card-kicker">Profil</div>
        {profile.username ? (
          <>
            <div className="card-title" style={{ fontSize: 26 }}>{profile.username}</div>
            <div className="card-meta">
              {[
                profile.level !== undefined ? `Niveau ${profile.level}` : null,
                profile.powerRating !== undefined ? `Puissance ${profile.powerRating.toLocaleString('fr-FR')}` : null,
              ].filter(Boolean).join(' · ')}
            </div>
          </>
        ) : (
          <p className="card-body">Importez vos données depuis Settings pour voir votre profil.</p>
        )}
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
      {campaigns.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
          {campaigns.map((camp) => {
            const pct = calculateCampaignProgress(camp);
            return (
              <div key={camp.campaignId} className="card elev-sm">
                <div className="card-kicker">{getCampaignTypeLabel(camp.type)}</div>
                <div className="card-title" style={{ fontSize: 16 }}>{camp.name ?? camp.campaignId}</div>
                {pct !== null ? (
                  <>
                    <ProgressBar pct={pct} style={{ marginTop: 'var(--space-1)' }} />
                    <div className="card-meta">{pct}% complétée · palier {camp.completedBattle}/{camp.totalBattles}</div>
                  </>
                ) : (
                  <div className="card-meta">Palier {camp.completedBattle}</div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="card-body" style={{ marginBottom: 'var(--space-6)' }}>Aucune campagne importée.</p>
      )}

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
