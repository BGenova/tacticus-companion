import type { CampaignProgress } from './campaign';
import type { Goal } from './goal';
import type { CharacterProgress } from './character';
import { findCharacterById } from './roster';

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

export interface RankGoalInput {
  characterId: string;
  currentRank: number;
  targetRank: number;
}

/**
 * Build shopping-list inputs from active rank goals, resolving each goal's
 * character against the roster. Paused/done goals, non-rank goals, and goals
 * for a character not present in the roster are skipped.
 */
export function buildRankGoalInputs(goals: Goal[], characters: CharacterProgress[]): RankGoalInput[] {
  const inputs: RankGoalInput[] = [];
  for (const goal of goals) {
    if (goal.status !== 'active' || goal.type !== 'rank') continue;
    const character = findCharacterById(characters, goal.characterId);
    if (!character) continue;
    inputs.push({ characterId: goal.characterId, currentRank: character.rank, targetRank: goal.target });
  }
  return inputs;
}

/**
 * Combine upgrade needs across several rank goals *before* subtracting
 * inventory stock, since that stock is shared: computing each goal's missing
 * amount independently against the same inventory would double-count what's
 * available and under-report the real shortage. Fully-covered upgrades
 * (missing === 0) are excluded from the result.
 */
export function calculateShoppingList(
  goals: RankGoalInput[],
  rankTierNames: readonly string[],
  rankUpgradesByCharacter: Record<string, Record<string, string[]>>,
  inventoryItems: Record<string, number>,
): MissingUpgrade[] {
  const allNeeded = goals.flatMap((g) =>
    getUpgradesForRankRange(rankTierNames, rankUpgradesByCharacter[g.characterId] ?? {}, g.currentRank, g.targetRank),
  );
  return calculateMissingUpgrades(allNeeded, inventoryItems).filter((u) => u.missing > 0);
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

export interface CampaignOpportunity {
  campaignName: string;
  /** Nearest not-yet-reached node number that drops a needed upgrade. */
  nextNodeNumber: number;
  /** Which needed upgrades that node (or nodes at/after it) can drop. */
  upgradeIds: string[];
}

/**
 * Identify in-progress campaigns worth pushing further: ones with an
 * unreached node (nodeNumber > completedBattle) that drops something on the
 * shopping list. Campaigns already fully cleared, or with an unknown
 * totalBattles (so we can't tell what's left to unlock), are skipped.
 */
export function findCampaignOpportunities(
  campaigns: CampaignProgress[],
  neededUpgradeIds: string[],
  farmNodes: Record<string, FarmNodeInfo>,
): CampaignOpportunity[] {
  const neededSet = new Set(neededUpgradeIds);
  const byCampaignName = new Map<string, { nextNodeNumber: number; upgradeIds: Set<string> }>();

  for (const campaign of campaigns) {
    if (!campaign.name || !campaign.totalBattles) continue;
    if (campaign.completedBattle >= campaign.totalBattles) continue;

    for (const node of Object.values(farmNodes)) {
      if (node.campaign !== campaign.name || node.nodeNumber <= campaign.completedBattle) continue;

      const drops = [...node.guaranteed.map((r) => r.id), ...node.potential.map((r) => r.id)].filter((id) => neededSet.has(id));
      if (drops.length === 0) continue;

      const entry = byCampaignName.get(campaign.name) ?? { nextNodeNumber: Infinity, upgradeIds: new Set<string>() };
      entry.nextNodeNumber = Math.min(entry.nextNodeNumber, node.nodeNumber);
      for (const id of drops) entry.upgradeIds.add(id);
      byCampaignName.set(campaign.name, entry);
    }
  }

  return Array.from(byCampaignName.entries()).map(([campaignName, v]) => ({
    campaignName,
    nextNodeNumber: v.nextNodeNumber,
    upgradeIds: Array.from(v.upgradeIds),
  }));
}

export interface RecommendedFarmNode {
  nodeId: string;
  campaign: string;
  nodeNumber: number;
  energyCost: number;
  upgradeIds: string[];
}

/**
 * Group needed upgrades by their cheapest farm node, so a player farming
 * that node once covers every upgrade grouped under it.
 */
export function recommendFarmNodes(
  upgradeIds: string[],
  farmNodes: Record<string, FarmNodeInfo>,
): RecommendedFarmNode[] {
  const byNode = new Map<string, RecommendedFarmNode>();
  for (const upgradeId of upgradeIds) {
    const best = findFarmNodesForUpgrade(upgradeId, farmNodes)[0];
    if (!best) continue;

    const existing = byNode.get(best.nodeId);
    if (existing) {
      existing.upgradeIds.push(upgradeId);
    } else {
      byNode.set(best.nodeId, {
        nodeId: best.nodeId,
        campaign: best.campaign,
        nodeNumber: best.nodeNumber,
        energyCost: best.energyCost,
        upgradeIds: [upgradeId],
      });
    }
  }
  return Array.from(byNode.values());
}
