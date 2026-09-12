import { ProgressBar } from '../ui/ProgressBar';
import { Tag } from '../ui/Tag';
import { usePlayerStore } from '../../stores/player-store';
import {
  calculateGoalProgress,
  getGoalTypeLabel,
  findCharacterById,
  calculateCampaignProgress,
  getCampaignTypeLabel,
  buildRankGoalInputs,
  calculateShoppingList,
  recommendFarmNodes,
  findCampaignOpportunities,
} from '../../domain';
import { getCharacterInfo } from '../../data/static/characters';
import { RANK_TIER_NAMES, RANK_UP_UPGRADES } from '../../data/static/rank-up-upgrades';
import { UPGRADE_MATERIALS } from '../../data/static/upgrade-materials';
import { FARM_NODES } from '../../data/static/farm-nodes';

const NEXT_GOALS_LIMIT = 3;
const DASHBOARD_ITEM_LIMIT = 2;

/**
 * Écran principal « Tableau de bord » : progression du compte, prochains
 * objectifs, blocages, farm du jour et campagnes rentables — tout dérivé des
 * données réelles du store (objectifs de rang uniquement pour les blocages/
 * farm/actions, voir 10_IMPLEMENTATION_PLAN.md).
 */
export function DashboardScreen() {
  const characters = usePlayerStore((s) => s.getCharacters());
  const goals = usePlayerStore((s) => s.getSortedGoals());
  const profile = usePlayerStore((s) => s.data.profile);
  const campaigns = usePlayerStore((s) => s.getCampaigns());
  const inventoryItems = usePlayerStore((s) => s.data.inventory.items);

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

  const rankGoalInputs = buildRankGoalInputs(goals, characters);
  const shoppingList = calculateShoppingList(rankGoalInputs, RANK_TIER_NAMES, RANK_UP_UPGRADES, inventoryItems);
  const topBlockers = [...shoppingList].sort((a, b) => b.missing - a.missing).slice(0, DASHBOARD_ITEM_LIMIT);
  const nodesToFarm = recommendFarmNodes(shoppingList.map((u) => u.upgradeId), FARM_NODES).slice(0, DASHBOARD_ITEM_LIMIT);
  const opportunities = findCampaignOpportunities(campaigns, shoppingList.map((u) => u.upgradeId), FARM_NODES).slice(0, DASHBOARD_ITEM_LIMIT);

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
          {topBlockers.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-1)' }}>
              {topBlockers.map((item) => (
                <div key={item.upgradeId} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
                  <div>
                    <div style={{ fontSize: 14 }}>{UPGRADE_MATERIALS[item.upgradeId]?.material ?? item.upgradeId}</div>
                    <div className="card-meta">Manque {item.missing} pour vos objectifs de rang</div>
                  </div>
                  <span className="tag tag-outline">Bloquant</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="card-body">Rien ne bloque vos objectifs de rang actifs.</p>
          )}
        </div>

        <div className="card elev-sm">
          <div className="card-kicker">À farmer aujourd'hui</div>
          {nodesToFarm.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-1)' }}>
              {nodesToFarm.map((n) => (
                <div key={n.nodeId} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
                  <div>
                    <div style={{ fontSize: 14 }}>Nœud {n.nodeNumber} — {n.campaign}</div>
                    <div className="card-meta">{n.energyCost} énergie</div>
                  </div>
                  <span className="tag tag-neutral">{n.upgradeIds.length} composant(s)</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="card-body">Rien à farmer aujourd'hui pour vos objectifs actifs.</p>
          )}
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
      {opportunities.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'var(--space-4)' }}>
          {opportunities.map((o) => (
            <div key={o.campaignName} className="card elev-sm">
              <div className="card-kicker">Campagne rentable</div>
              <div className="card-title" style={{ fontSize: 16 }}>{o.campaignName}</div>
              <p className="card-body">
                Débloque {o.upgradeIds.map((id) => UPGRADE_MATERIALS[id]?.material ?? id).join(', ')}
              </p>
              <div className="card-meta">Palier {o.nextNodeNumber}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="card-body">Aucune action recommandée pour le moment.</p>
      )}
    </div>
  );
}
