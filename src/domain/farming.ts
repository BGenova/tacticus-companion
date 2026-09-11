/** A single upgrade material still needed to reach a goal, tallied against inventory stock. */
export interface MissingUpgrade {
  upgradeId: string;
  needed: number;
  have: number;
  missing: number;
}

/**
 * Collect the (possibly duplicated) upgrade material ids required to go from
 * one rank to another. A character at fromRank has already cleared tiers
 * 0..fromRank, so tiers (fromRank, toRank] are what's still needed. Tiers
 * without a known name (out of bounds) or without upgrade data are skipped.
 */
export function getUpgradesForRankRange(
  rankTierNames: readonly string[],
  rankUpgrades: Record<string, string[]>,
  fromRank: number,
  toRank: number,
): string[] {
  const upgrades: string[] = [];
  for (let rank = fromRank + 1; rank <= toRank; rank++) {
    const tierName = rankTierNames[rank];
    if (!tierName) continue;
    const tierUpgrades = rankUpgrades[tierName];
    if (tierUpgrades) upgrades.push(...tierUpgrades);
  }
  return upgrades;
}

/**
 * Tally how many of each required upgrade the player still needs, given
 * inventory stock (flattened items, keyed "upgrade:<id>" — see
 * tacticus-api/normalize.ts and the planner-import Inventory.items shape).
 */
export function calculateMissingUpgrades(
  neededUpgradeIds: string[],
  inventoryItems: Record<string, number>,
): MissingUpgrade[] {
  const counts = new Map<string, number>();
  for (const id of neededUpgradeIds) {
    counts.set(id, (counts.get(id) ?? 0) + 1);
  }
  return Array.from(counts.entries()).map(([upgradeId, needed]) => {
    const have = inventoryItems[`upgrade:${upgradeId}`] ?? 0;
    return { upgradeId, needed, have, missing: Math.max(0, needed - have) };
  });
}

export interface FarmNodeInfo {
  campaign: string;
  nodeNumber: number;
  energyCost: number;
  guaranteed: { id: string }[];
  potential: { id: string; effectiveRate: number }[];
}

export interface FarmNodeMatch {
  nodeId: string;
  campaign: string;
  nodeNumber: number;
  energyCost: number;
  /** Whether the upgrade is a guaranteed drop on this node (vs. a chance). */
  guaranteed: boolean;
}

/**
 * Find farm nodes that can drop the given upgrade, cheapest energy cost first.
 */
export function findFarmNodesForUpgrade(
  upgradeId: string,
  farmNodes: Record<string, FarmNodeInfo>,
): FarmNodeMatch[] {
  const matches: FarmNodeMatch[] = [];
  for (const [nodeId, node] of Object.entries(farmNodes)) {
    const guaranteed = node.guaranteed.some((r) => r.id === upgradeId);
    const potential = node.potential.some((r) => r.id === upgradeId);
    if (guaranteed || potential) {
      matches.push({ nodeId, campaign: node.campaign, nodeNumber: node.nodeNumber, energyCost: node.energyCost, guaranteed });
    }
  }
  return matches.sort((a, b) => a.energyCost - b.energyCost);
}
