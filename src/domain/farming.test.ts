import { describe, it, expect } from 'vitest';
import {
  getUpgradesForRankRange,
  calculateMissingUpgrades,
  findFarmNodesForUpgrade,
  calculateShoppingList,
  findCampaignOpportunities,
  buildRankGoalInputs,
  recommendFarmNodes,
} from './farming';
import type { FarmNodeInfo, RankGoalInput } from './farming';
import type { CampaignProgress } from './campaign';
import type { Goal } from './goal';
import type { CharacterProgress } from './character';

const TIER_NAMES = ['Stone I', 'Stone II', 'Stone III', 'Iron I', 'Iron II'] as const;

const RANK_UPGRADES: Record<string, string[]> = {
  'Stone I': ['upgA', 'upgB'],
  'Stone II': ['upgA', 'upgC'],
  'Stone III': ['upgD'],
  'Iron I': ['upgE', 'upgF'],
  'Iron II': ['upgG'],
};

describe('getUpgradesForRankRange', () => {
  it('should return upgrades for ranks strictly above fromRank up to toRank', () => {
    const result = getUpgradesForRankRange(TIER_NAMES, RANK_UPGRADES, 0, 2);
    expect(result).toEqual(['upgA', 'upgC', 'upgD']);
  });

  it('should return an empty array when fromRank equals toRank', () => {
    expect(getUpgradesForRankRange(TIER_NAMES, RANK_UPGRADES, 1, 1)).toEqual([]);
  });

  it('should include upgrades for rank 0 when starting from -1 (unranked)', () => {
    const result = getUpgradesForRankRange(TIER_NAMES, RANK_UPGRADES, -1, 0);
    expect(result).toEqual(['upgA', 'upgB']);
  });

  it('should skip ranks with no tier name (out of bounds)', () => {
    const result = getUpgradesForRankRange(TIER_NAMES, RANK_UPGRADES, 3, 10);
    expect(result).toEqual(['upgG']);
  });

  it('should skip tiers with no upgrade data', () => {
    const result = getUpgradesForRankRange(TIER_NAMES, {}, 0, 2);
    expect(result).toEqual([]);
  });
});

describe('calculateMissingUpgrades', () => {
  it('should tally needed quantities per upgrade id', () => {
    const result = calculateMissingUpgrades(['upgA', 'upgA', 'upgB'], {});
    expect(result).toEqual([
      { upgradeId: 'upgA', needed: 2, have: 0, missing: 2 },
      { upgradeId: 'upgB', needed: 1, have: 0, missing: 1 },
    ]);
  });

  it('should subtract inventory stock from what is needed', () => {
    const result = calculateMissingUpgrades(['upgA', 'upgA'], { 'upgrade:upgA': 1 });
    expect(result).toEqual([{ upgradeId: 'upgA', needed: 2, have: 1, missing: 1 }]);
  });

  it('should clamp missing to 0 when stock exceeds what is needed', () => {
    const result = calculateMissingUpgrades(['upgA'], { 'upgrade:upgA': 5 });
    expect(result).toEqual([{ upgradeId: 'upgA', needed: 1, have: 5, missing: 0 }]);
  });

  it('should return an empty array for an empty needs list', () => {
    expect(calculateMissingUpgrades([], {})).toEqual([]);
  });
});

describe('findFarmNodesForUpgrade', () => {
  const farmNodes: Record<string, FarmNodeInfo> = {
    node1: { campaign: 'Indomitus', nodeNumber: 3, energyCost: 6, guaranteed: [{ id: 'upgA' }], potential: [] },
    node2: { campaign: 'Indomitus', nodeNumber: 5, energyCost: 8, guaranteed: [], potential: [{ id: 'upgA', effectiveRate: 0.2 }] },
    node3: { campaign: 'Cadia', nodeNumber: 1, energyCost: 5, guaranteed: [], potential: [{ id: 'upgZ', effectiveRate: 0.1 }] },
  };

  it('should find nodes where the upgrade drops guaranteed or potential', () => {
    const result = findFarmNodesForUpgrade('upgA', farmNodes);
    expect(result.map((r) => r.nodeId).sort()).toEqual(['node1', 'node2']);
  });

  it('should mark whether the drop is guaranteed', () => {
    const result = findFarmNodesForUpgrade('upgA', farmNodes);
    expect(result.find((r) => r.nodeId === 'node1')?.guaranteed).toBe(true);
    expect(result.find((r) => r.nodeId === 'node2')?.guaranteed).toBe(false);
  });

  it('should sort results by energy cost ascending', () => {
    const result = findFarmNodesForUpgrade('upgA', farmNodes);
    expect(result.map((r) => r.energyCost)).toEqual([6, 8]);
  });

  it('should return an empty array when no node drops the upgrade', () => {
    expect(findFarmNodesForUpgrade('unknown', farmNodes)).toEqual([]);
  });
});

describe('calculateShoppingList', () => {
  const rankUpgradesByCharacter: Record<string, Record<string, string[]>> = {
    bellator: { 'Stone II': ['upgA', 'upgB'] },
    certus: { 'Stone II': ['upgA'] },
  };

  it('should combine needs across goals before subtracting shared inventory stock', () => {
    const goals: RankGoalInput[] = [
      { characterId: 'bellator', currentRank: 0, targetRank: 1 },
      { characterId: 'certus', currentRank: 0, targetRank: 1 },
    ];
    // Both characters need 1x upgA at Stone II -> 2 total needed, only 1 in stock.
    const result = calculateShoppingList(goals, TIER_NAMES, rankUpgradesByCharacter, { 'upgrade:upgA': 1 });
    const upgA = result.find((u) => u.upgradeId === 'upgA');
    expect(upgA).toEqual({ upgradeId: 'upgA', needed: 2, have: 1, missing: 1 });
  });

  it('should exclude upgrades that are already fully covered by inventory', () => {
    const goals: RankGoalInput[] = [{ characterId: 'bellator', currentRank: 0, targetRank: 1 }];
    const result = calculateShoppingList(goals, TIER_NAMES, rankUpgradesByCharacter, {
      'upgrade:upgA': 10,
      'upgrade:upgB': 10,
    });
    expect(result).toEqual([]);
  });

  it('should return an empty list when there are no goals', () => {
    expect(calculateShoppingList([], TIER_NAMES, rankUpgradesByCharacter, {})).toEqual([]);
  });

  it('should treat a character with no known rank-up data as needing nothing', () => {
    const goals: RankGoalInput[] = [{ characterId: 'unknown-char', currentRank: 0, targetRank: 1 }];
    expect(calculateShoppingList(goals, TIER_NAMES, rankUpgradesByCharacter, {})).toEqual([]);
  });
});

describe('findCampaignOpportunities', () => {
  const farmNodes: Record<string, FarmNodeInfo> = {
    node10: { campaign: 'Indomitus', nodeNumber: 10, energyCost: 6, guaranteed: [{ id: 'upgA' }], potential: [] },
    node20: { campaign: 'Indomitus', nodeNumber: 20, energyCost: 6, guaranteed: [{ id: 'upgZ' }], potential: [] },
    node5: { campaign: 'Indomitus', nodeNumber: 5, energyCost: 6, guaranteed: [{ id: 'upgA' }], potential: [] },
    nodeOther: { campaign: 'Cadia', nodeNumber: 3, energyCost: 5, guaranteed: [{ id: 'upgA' }], potential: [] },
  };

  it('should flag a campaign with an unreached node dropping a needed upgrade', () => {
    const campaigns: CampaignProgress[] = [
      { campaignId: 'c1', name: 'Indomitus', completedBattle: 8, totalBattles: 75 },
    ];
    const result = findCampaignOpportunities(campaigns, ['upgA'], farmNodes);
    expect(result).toEqual([{ campaignName: 'Indomitus', nextNodeNumber: 10, upgradeIds: ['upgA'] }]);
  });

  it('should ignore nodes already reached (nodeNumber <= completedBattle)', () => {
    const campaigns: CampaignProgress[] = [
      { campaignId: 'c1', name: 'Indomitus', completedBattle: 15, totalBattles: 75 },
    ];
    // node10 and node5 are both behind progress 15; only node20 (upgZ) is ahead, but upgZ isn't needed.
    const result = findCampaignOpportunities(campaigns, ['upgA'], farmNodes);
    expect(result).toEqual([]);
  });

  it('should skip campaigns that are already fully completed', () => {
    const campaigns: CampaignProgress[] = [
      { campaignId: 'c1', name: 'Indomitus', completedBattle: 75, totalBattles: 75 },
    ];
    expect(findCampaignOpportunities(campaigns, ['upgA'], farmNodes)).toEqual([]);
  });

  it('should skip campaigns with unknown totalBattles (cannot tell what is left to unlock)', () => {
    const campaigns: CampaignProgress[] = [{ campaignId: 'c1', name: 'Indomitus', completedBattle: 8 }];
    expect(findCampaignOpportunities(campaigns, ['upgA'], farmNodes)).toEqual([]);
  });

  it('should return an empty array when nothing is needed', () => {
    const campaigns: CampaignProgress[] = [
      { campaignId: 'c1', name: 'Indomitus', completedBattle: 8, totalBattles: 75 },
    ];
    expect(findCampaignOpportunities(campaigns, [], farmNodes)).toEqual([]);
  });
});

describe('buildRankGoalInputs', () => {
  function makeCharacter(overrides: Partial<CharacterProgress> = {}): CharacterProgress {
    return {
      characterId: 'bellator', rank: 3, rarity: 2, stars: 3, level: 25, xp: 1200,
      shards: 45, mythicShards: 0, abilities: { active: 3, passive: 2 }, upgrades: [], equipment: [],
      ...overrides,
    };
  }
  function makeGoal(overrides: Partial<Goal> = {}): Goal {
    return { id: 'g1', characterId: 'bellator', type: 'rank', target: 5, priority: 1, status: 'active', ...overrides };
  }

  it('should build an input for each active rank goal with a known character', () => {
    const characters = [makeCharacter({ rank: 3 })];
    const result = buildRankGoalInputs([makeGoal({ target: 5 })], characters);
    expect(result).toEqual([{ characterId: 'bellator', currentRank: 3, targetRank: 5 }]);
  });

  it('should skip paused or done goals', () => {
    const characters = [makeCharacter()];
    const result = buildRankGoalInputs(
      [makeGoal({ status: 'paused' }), makeGoal({ id: 'g2', status: 'done' })],
      characters,
    );
    expect(result).toEqual([]);
  });

  it('should skip goals of a type other than rank', () => {
    const characters = [makeCharacter()];
    expect(buildRankGoalInputs([makeGoal({ type: 'rarity' })], characters)).toEqual([]);
  });

  it('should skip goals for a character not present in the roster', () => {
    expect(buildRankGoalInputs([makeGoal()], [])).toEqual([]);
  });
});

describe('recommendFarmNodes', () => {
  const farmNodes: Record<string, FarmNodeInfo> = {
    node1: { campaign: 'Indomitus', nodeNumber: 3, energyCost: 6, guaranteed: [{ id: 'upgA' }], potential: [] },
    node2: { campaign: 'Indomitus', nodeNumber: 5, energyCost: 8, guaranteed: [{ id: 'upgB' }], potential: [] },
  };

  it('should group needed upgrades by their cheapest node', () => {
    const result = recommendFarmNodes(['upgA', 'upgB'], farmNodes);
    expect(result).toHaveLength(2);
  });

  it('should combine upgrades that share the same best node', () => {
    const sharedNodes: Record<string, FarmNodeInfo> = {
      node1: { campaign: 'Indomitus', nodeNumber: 3, energyCost: 6, guaranteed: [{ id: 'upgA' }, { id: 'upgB' }], potential: [] },
    };
    const result = recommendFarmNodes(['upgA', 'upgB'], sharedNodes);
    expect(result).toHaveLength(1);
    expect(result[0].upgradeIds.sort()).toEqual(['upgA', 'upgB']);
  });

  it('should skip upgrades with no matching node', () => {
    expect(recommendFarmNodes(['unknown'], farmNodes)).toEqual([]);
  });

  it('should return an empty array for no needed upgrades', () => {
    expect(recommendFarmNodes([], farmNodes)).toEqual([]);
  });
});
