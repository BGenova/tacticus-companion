import { describe, it, expect } from 'vitest';
import {
  TacticusImportValidationError,
  validateTacticusResponse,
  normalizeTacticusPlayer,
  importTacticusPlayerData,
} from './normalize';

function makeApiResponse(overrides: Record<string, unknown> = {}) {
  return {
    player: {
      details: { name: 'player123', powerLevel: 12345 },
      units: [
        {
          id: 'ultraEliminatorSgt',
          name: 'Certus',
          faction: 'Ultramarines',
          grandAlliance: 'Imperial',
          progressionIndex: 10,
          xp: 4552,
          xpLevel: 6,
          rank: 10,
          abilities: [
            { id: 'MortisRound', level: 35 },
            { id: 'TacticalAwareness', level: 20 },
          ],
          upgrades: [0, 4],
          items: [
            { slotId: 'Slot1', id: 'I_Crit_R002', name: 'Sanctified Bolt Pistol', rarity: 'Rare', level: 2 },
          ],
          shards: 100,
          mythicShards: 5,
        },
      ],
      inventory: {
        items: [{ id: 'I_Crit_U008', name: 'Aspect Shuriken Pistol', amount: 6 }],
        upgrades: [{ id: 'upgDmgC008', name: 'Otherworldly Energy', amount: 2 }],
        shards: [{ id: 'ultraEliminatorSgt', name: 'Certus Shards', amount: 162 }],
        mythicShards: [],
        xpBooks: [{ id: 'xpUncommon', rarity: 'Uncommon', amount: 164 }],
        components: [{ name: 'Xenos Components', grandAlliance: 'Xenos', amount: 60 }],
        forgeBadges: [{ name: 'Uncommon Forge Badges', rarity: 'Uncommon', amount: 10 }],
        abilityBadges: { Imperial: [{ name: 'Epic Imperial Badges', rarity: 'Epic', amount: 10 }] },
        orbs: { Xenos: [{ rarity: 'Uncommon', amount: 3 }] },
        resetStones: 1,
      },
      progress: {
        campaigns: [
          {
            id: 'campaign2',
            name: 'Fall of Cadia',
            type: 'Standard',
            battles: [
              { battleIndex: 0, attemptsLeft: 0, attemptsUsed: 3 },
              { battleIndex: 1, attemptsLeft: 3, attemptsUsed: 0 },
            ],
          },
        ],
      },
    },
    ...overrides,
  };
}

describe('validateTacticusResponse', () => {
  it('should accept a well-formed API response', () => {
    expect(() => validateTacticusResponse(makeApiResponse())).not.toThrow();
  });

  it('should throw TacticusImportValidationError for missing required fields', () => {
    expect(() => validateTacticusResponse({ player: { details: {} } })).toThrow(TacticusImportValidationError);
  });

  it('should throw TacticusImportValidationError for non-object input', () => {
    expect(() => validateTacticusResponse('not an object')).toThrow(TacticusImportValidationError);
  });
});

describe('normalizeTacticusPlayer', () => {
  it('should map player details to profile username and powerRating', () => {
    const result = normalizeTacticusPlayer(validateTacticusResponse(makeApiResponse()));
    expect(result.profile.username).toBe('player123');
    expect(result.profile.powerRating).toBe(12345);
  });

  it('should derive rarity and stars from progressionIndex', () => {
    const result = normalizeTacticusPlayer(validateTacticusResponse(makeApiResponse()));
    const certus = result.characters['ultraEliminatorSgt'];
    // progressionIndex 10 -> floor(10/3) = 3 (Epic), 10 % 3 + 1 = 2 stars
    expect(certus.rarity).toBe(3);
    expect(certus.stars).toBe(2);
  });

  it('should map the first two abilities to active/passive levels', () => {
    const result = normalizeTacticusPlayer(validateTacticusResponse(makeApiResponse()));
    const certus = result.characters['ultraEliminatorSgt'];
    expect(certus.abilities).toEqual({ active: 35, passive: 20 });
  });

  it('should default missing abilities to level 0', () => {
    const response = makeApiResponse();
    (response.player.units[0] as { abilities: unknown[] }).abilities = [];
    const result = normalizeTacticusPlayer(validateTacticusResponse(response));
    expect(result.characters['ultraEliminatorSgt'].abilities).toEqual({ active: 0, passive: 0 });
  });

  it('should always leave upgrades empty (API only exposes slot positions, not upgrade identities)', () => {
    const result = normalizeTacticusPlayer(validateTacticusResponse(makeApiResponse()));
    expect(result.characters['ultraEliminatorSgt'].upgrades).toEqual([]);
  });

  it('should map equipped items to domain Equipment', () => {
    const result = normalizeTacticusPlayer(validateTacticusResponse(makeApiResponse()));
    expect(result.characters['ultraEliminatorSgt'].equipment).toEqual([
      { slot: 'Slot1', name: 'Sanctified Bolt Pistol', rarity: 'Rare', level: 2 },
    ]);
  });

  it('should use the number of battle entries returned as completedBattle', () => {
    // attemptsUsed is a daily counter, not a lifetime completion flag — the
    // API only returns entries for stages unlocked so far, so the array
    // length itself is the progress signal. makeApiResponse's campaign2 has
    // 2 battle entries.
    const result = normalizeTacticusPlayer(validateTacticusResponse(makeApiResponse()));
    expect(result.campaigns['campaign2'].completedBattle).toBe(2);
  });

  it('should capture the campaign name/type, and use the vendored total battle count (not the live array length)', () => {
    const result = normalizeTacticusPlayer(validateTacticusResponse(makeApiResponse()));
    expect(result.campaigns['campaign2']).toMatchObject({
      name: 'Fall of Cadia',
      type: 'Standard',
      totalBattles: 75, // real value from src/data/static/farm-nodes.ts, unrelated to the 2-entry mock response
    });
  });

  it('should fall back to the live battle count when the campaign is not in the vendored dataset', () => {
    const response = makeApiResponse();
    response.player.progress.campaigns[0].name = 'Some Unknown Event Campaign';
    const result = normalizeTacticusPlayer(validateTacticusResponse(response));
    expect(result.campaigns['campaign2'].totalBattles).toBe(2);
  });

  it('should cap completedBattle at totalBattles (the sentinel "no actual battle" stage can push the live count past the real total)', () => {
    const response = makeApiResponse();
    response.player.progress.campaigns[0].battles = Array.from({ length: 80 }, (_, i) => ({
      battleIndex: i,
      attemptsLeft: 0,
      attemptsUsed: 0,
    }));
    const result = normalizeTacticusPlayer(validateTacticusResponse(response));
    // Fall of Cadia's real total (vendored) is 75.
    expect(result.campaigns['campaign2'].completedBattle).toBe(75);
  });

  it('should resolve known campaign name mismatches between the API and the vendored dataset', () => {
    // Confirmed on a real account (2026-09-12): the API returns "Saim-Hainn",
    // the vendored dataset (sourced separately) spells it "Saim-Hann".
    const response = makeApiResponse();
    response.player.progress.campaigns[0].name = 'Saim-Hainn';
    const result = normalizeTacticusPlayer(validateTacticusResponse(response));
    expect(result.campaigns['campaign2'].totalBattles).toBe(75);
  });

  it('should flatten the categorized inventory into prefixed keys', () => {
    const result = normalizeTacticusPlayer(validateTacticusResponse(makeApiResponse()));
    expect(result.inventory.items).toEqual({
      'item:I_Crit_U008': 6,
      'upgrade:upgDmgC008': 2,
      'shard:ultraEliminatorSgt': 162,
      'xpBook:xpUncommon': 164,
      'component:Xenos': 60,
      'forgeBadge:Uncommon': 10,
      'abilityBadge:Imperial:Epic': 10,
      'orb:Xenos:Uncommon': 3,
      'resetStones': 1,
    });
  });

  it('should always produce an empty goals array (goals are not part of the Tacticus API)', () => {
    const result = normalizeTacticusPlayer(validateTacticusResponse(makeApiResponse()));
    expect(result.goals).toEqual([]);
  });

  it('should handle a player with no units', () => {
    const response = makeApiResponse();
    response.player.units = [];
    const result = normalizeTacticusPlayer(validateTacticusResponse(response));
    expect(result.characters).toEqual({});
  });

  it('should use metaData.lastUpdatedOn as updatedAt (server-side cache freshness, not import time)', () => {
    const response = makeApiResponse({ metaData: { lastUpdatedOn: 1_700_000_000 } });
    const result = normalizeTacticusPlayer(validateTacticusResponse(response));
    expect(result.updatedAt).toBe(new Date(1_700_000_000 * 1000).toISOString());
  });

  it('should fall back to the current time when metaData.lastUpdatedOn is absent', () => {
    const before = Date.now();
    const result = normalizeTacticusPlayer(validateTacticusResponse(makeApiResponse()));
    const parsed = new Date(result.updatedAt).getTime();
    expect(parsed).toBeGreaterThanOrEqual(before);
    expect(parsed).toBeLessThanOrEqual(Date.now());
  });
});

describe('importTacticusPlayerData', () => {
  it('should validate and normalize in one call', () => {
    const result = importTacticusPlayerData(makeApiResponse());
    expect(result.profile.username).toBe('player123');
    expect(Object.keys(result.characters)).toHaveLength(1);
  });

  it('should throw TacticusImportValidationError for invalid input', () => {
    expect(() => importTacticusPlayerData({ foo: 'bar' })).toThrow(TacticusImportValidationError);
  });
});
