import { usePlayerStore } from '../../stores/player-store';
import {
  groupCampaignsByName,
  getCampaignTypeLabel,
  calculateShoppingList,
  findCampaignOpportunities,
  buildRankGoalInputs,
} from '../../domain';
import { RANK_TIER_NAMES, RANK_UP_UPGRADES } from '../../data/static/rank-up-upgrades';
import { UPGRADE_MATERIALS } from '../../data/static/upgrade-materials';
import { FARM_NODES } from '../../data/static/farm-nodes';
import { ProgressBar } from '../ui/ProgressBar';
import { Tag } from '../ui/Tag';

/**
 * Écran « Campaigns » : progression par campagne (toutes variantes
 * Standard/Mirror/Elite/EliteMirror côte à côte), et mise en avant des
 * campagnes qu'il est rentable de pousser pour débloquer un upgrade manquant.
 */
export function CampaignsScreen() {
  const campaigns = usePlayerStore((s) => s.getCampaigns());
  const goals = usePlayerStore((s) => s.getSortedGoals());
  const characters = usePlayerStore((s) => s.getCharacters());
  const inventoryItems = usePlayerStore((s) => s.data.inventory.items);

  const groups = groupCampaignsByName(campaigns);

  const rankGoalInputs = buildRankGoalInputs(goals, characters);

  const shoppingList = calculateShoppingList(rankGoalInputs, RANK_TIER_NAMES, RANK_UP_UPGRADES, inventoryItems);
  const opportunities = findCampaignOpportunities(campaigns, shoppingList.map((u) => u.upgradeId), FARM_NODES);
  const opportunityByCampaign = new Map(opportunities.map((o) => [o.campaignName, o]));

  return (
    <div>
      <h1 style={{ marginBottom: 2 }}>Campaigns</h1>
      <p style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)', marginBottom: 'var(--space-6)' }}>
        Progression par campagne, et celles qu'il vaut la peine de pousser pour vos objectifs de rang actifs.
      </p>

      {groups.length === 0 ? (
        <div className="card elev-sm" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
          <div className="card-title">Aucune campagne importée</div>
          <p className="card-body">Importez vos données depuis Settings pour voir votre progression.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {groups.map((group) => {
            const opportunity = opportunityByCampaign.get(group.name);
            return (
              <div key={group.name} className="card elev-sm">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <div className="card-title" style={{ fontSize: 18 }}>{group.name}</div>
                  {opportunity && (
                    <Tag variant="tag-accent">
                      Rentable à pousser → palier {opportunity.nextNodeNumber}
                    </Tag>
                  )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
                  {group.variants.map((variant) => (
                    <div key={variant.type}>
                      <div className="card-kicker">{getCampaignTypeLabel(variant.type)}</div>
                      {variant.pct !== null ? (
                        <>
                          <ProgressBar pct={variant.pct} style={{ marginTop: 4 }} />
                          <div className="card-meta">{variant.pct}% · palier {variant.progress.completedBattle}/{variant.progress.totalBattles}</div>
                        </>
                      ) : (
                        <div className="card-meta">Palier {variant.progress.completedBattle}</div>
                      )}
                    </div>
                  ))}
                </div>

                {opportunity && (
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 'var(--space-3)' }}>
                    {opportunity.upgradeIds.map((id) => (
                      <Tag key={id} variant="tag-outline">{UPGRADE_MATERIALS[id]?.material ?? id}</Tag>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
