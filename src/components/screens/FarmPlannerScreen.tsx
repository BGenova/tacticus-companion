import { usePlayerStore } from '../../stores/player-store';
import { calculateShoppingList, findFarmNodesForUpgrade, findCharacterById } from '../../domain';
import type { RankGoalInput } from '../../domain';
import { RANK_TIER_NAMES, RANK_UP_UPGRADES } from '../../data/static/rank-up-upgrades';
import { UPGRADE_MATERIALS } from '../../data/static/upgrade-materials';
import { FARM_NODES } from '../../data/static/farm-nodes';
import { ProgressBar } from '../ui/ProgressBar';
import { Tag } from '../ui/Tag';

interface RecommendedNode {
  campaign: string;
  nodeNumber: number;
  energyCost: number;
  upgradeNames: string[];
}

/**
 * Écran « Farm Planner » : liste de courses (upgrades manquants pour les
 * objectifs de rang actifs) et nœuds recommandés pour les obtenir.
 *
 * Ne couvre que les objectifs de type "rank" pour le moment — voir
 * 10_IMPLEMENTATION_PLAN.md pour les objectifs rareté/compétences.
 */
export function FarmPlannerScreen() {
  const goals = usePlayerStore((s) => s.getSortedGoals());
  const characters = usePlayerStore((s) => s.getCharacters());
  const inventoryItems = usePlayerStore((s) => s.data.inventory.items);

  const rankGoalInputs: RankGoalInput[] = [];
  for (const goal of goals) {
    if (goal.status !== 'active' || goal.type !== 'rank') continue;
    const character = findCharacterById(characters, goal.characterId);
    if (!character) continue;
    rankGoalInputs.push({ characterId: goal.characterId, currentRank: character.rank, targetRank: goal.target });
  }

  const shoppingList = calculateShoppingList(rankGoalInputs, RANK_TIER_NAMES, RANK_UP_UPGRADES, inventoryItems);

  const nodesByCampaign = new Map<string, RecommendedNode>();
  for (const item of shoppingList) {
    const best = findFarmNodesForUpgrade(item.upgradeId, FARM_NODES)[0];
    if (!best) continue;
    const key = `${best.campaign}-${best.nodeNumber}`;
    const materialName = UPGRADE_MATERIALS[item.upgradeId]?.material ?? item.upgradeId;
    const existing = nodesByCampaign.get(key);
    if (existing) {
      existing.upgradeNames.push(materialName);
    } else {
      nodesByCampaign.set(key, { campaign: best.campaign, nodeNumber: best.nodeNumber, energyCost: best.energyCost, upgradeNames: [materialName] });
    }
  }
  const recommendedNodes = Array.from(nodesByCampaign.values());
  const totalEnergy = recommendedNodes.reduce((sum, n) => sum + n.energyCost, 0);

  return (
    <div>
      <h1 style={{ marginBottom: 2 }}>Farm Planner</h1>
      <p style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)', marginBottom: 'var(--space-2)' }}>
        La liste de courses du jour, et où l'obtenir — objectifs de rang actifs uniquement pour le moment.
      </p>
      <p className="card-meta" style={{ marginBottom: 'var(--space-6)' }}>
        Ne fonctionne que pour les personnages importés depuis l'API Tacticus (IDs réels du jeu) — les personnages du petit catalogue de démonstration ne sont pas reconnus.
      </p>

      {rankGoalInputs.length === 0 ? (
        <div className="card elev-sm" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
          <div className="card-title">Aucun objectif de rang actif</div>
          <p className="card-body">Créez-en un depuis l'écran Goals pour générer une liste de courses.</p>
        </div>
      ) : (
        <>
          <h3 style={{ marginBottom: 'var(--space-3)' }}>Liste de courses</h3>
          {shoppingList.length === 0 ? (
            <p className="card-body" style={{ marginBottom: 'var(--space-6)' }}>Rien à farmer — vous avez déjà tout en stock (ou les personnages ne sont pas reconnus dans la base de farming).</p>
          ) : (
            <table className="table" style={{ marginBottom: 'var(--space-6)' }}>
              <thead>
                <tr><th>Composant</th><th>Rareté</th><th>Progression</th></tr>
              </thead>
              <tbody>
                {shoppingList.map((item) => {
                  const material = UPGRADE_MATERIALS[item.upgradeId];
                  const pct = item.needed > 0 ? Math.round((item.have / item.needed) * 100) : 100;
                  return (
                    <tr key={item.upgradeId}>
                      <td>{material?.material ?? item.upgradeId}</td>
                      <td className="text-muted">{material?.rarity ?? '—'}</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <ProgressBar pct={pct} style={{ width: 90 }} />
                          <span className="text-muted" style={{ fontSize: 12 }}>{item.have} / {item.needed}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          {recommendedNodes.length > 0 && (
            <>
              <h3 style={{ marginBottom: 'var(--space-3)' }}>
                Nœuds recommandés <span className="card-meta" style={{ fontWeight: 400 }}>· ~{totalEnergy} énergie (1 visite par nœud)</span>
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'var(--space-4)' }}>
                {recommendedNodes.map((n) => (
                  <div key={`${n.campaign}-${n.nodeNumber}`} className="card elev-sm">
                    <div className="card-kicker">{n.campaign}</div>
                    <div className="card-title" style={{ fontSize: 16 }}>Nœud {n.nodeNumber}</div>
                    <div className="card-meta">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
                      </svg>
                      <span>{n.energyCost} énergie</span>
                    </div>
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 2 }}>
                      {n.upgradeNames.map((name) => (
                        <Tag key={name} variant="tag-neutral">{name}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
