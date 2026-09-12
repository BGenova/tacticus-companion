import { z } from 'zod';

/**
 * Zod schemas mirroring the subset of the official Tacticus API response
 * (https://api.tacticusgame.com/api-docs, endpoint GET /api/v1/player) that we
 * actually consume. Unused branches of the real response (arena, guildRaid,
 * onslaught, salvageRun…) are intentionally omitted — Zod object schemas
 * strip unknown keys by default, so they simply pass through unvalidated
 * instead of causing an error. legendaryEvents is consumed, but only its
 * progress fields — battleConfigs (objective definitions, very verbose) is
 * intentionally not modeled, same stripping behavior.
 */

export const tacticusAbilitySchema = z.object({
  id: z.string(),
  level: z.number(),
});

export const tacticusUnitItemSchema = z.object({
  slotId: z.string(),
  id: z.string(),
  name: z.string().optional(),
  rarity: z.string().optional(),
  level: z.number().optional(),
});

export const tacticusUnitSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  faction: z.string().optional(),
  grandAlliance: z.string().optional(),
  progressionIndex: z.number(),
  xp: z.number(),
  xpLevel: z.number(),
  rank: z.number(),
  abilities: z.array(tacticusAbilitySchema),
  upgrades: z.array(z.number()),
  items: z.array(tacticusUnitItemSchema),
  shards: z.number(),
  mythicShards: z.number(),
});

export const tacticusCampaignLevelSchema = z.object({
  battleIndex: z.number(),
  attemptsLeft: z.number(),
  attemptsUsed: z.number(),
});

export const tacticusCampaignProgressSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  battles: z.array(tacticusCampaignLevelSchema),
});

const amountEntrySchema = z.object({ id: z.string(), name: z.string().optional(), amount: z.number() });
const rarityEntrySchema = z.object({ name: z.string().optional(), rarity: z.string(), amount: z.number() });

export const tacticusInventorySchema = z.object({
  items: z.array(z.object({ id: z.string(), name: z.string().optional(), level: z.number().optional(), amount: z.number() })),
  upgrades: z.array(amountEntrySchema),
  shards: z.array(amountEntrySchema),
  mythicShards: z.array(amountEntrySchema),
  xpBooks: z.array(z.object({ id: z.string(), rarity: z.string(), amount: z.number() })),
  components: z.array(z.object({ name: z.string(), grandAlliance: z.string(), amount: z.number() })),
  forgeBadges: z.array(rarityEntrySchema),
  abilityBadges: z.record(z.string(), z.array(rarityEntrySchema)).optional(),
  orbs: z.record(z.string(), z.array(rarityEntrySchema)).optional(),
  resetStones: z.number().optional(),
});

export const tacticusPlayerDetailsSchema = z.object({
  name: z.string(),
  powerLevel: z.number(),
});

const tacticusLaneBattleProgressSchema = z.object({
  objectivesCleared: z.array(z.number()),
  highScore: z.number(),
  encounterPoints: z.number(),
});

const tacticusLaneSchema = z.object({
  id: z.number(),
  name: z.string(),
  progress: z.array(tacticusLaneBattleProgressSchema),
});

export const tacticusLegendaryEventSchema = z.object({
  /** Id of the character this Legendary Event is tied to. */
  id: z.string(),
  lanes: z.array(tacticusLaneSchema),
  currentPoints: z.number().optional(),
  currentCurrency: z.number(),
  currentShards: z.number(),
  currentClaimedChestIndex: z.number(),
});

export const tacticusPlayerSchema = z.object({
  details: tacticusPlayerDetailsSchema,
  units: z.array(tacticusUnitSchema),
  inventory: tacticusInventorySchema,
  progress: z.object({
    campaigns: z.array(tacticusCampaignProgressSchema),
    legendaryEvents: z.array(tacticusLegendaryEventSchema),
  }),
});

export const tacticusMetaDataSchema = z.object({
  /**
   * Unix timestamp (seconds) of when Snowprint's server last updated this
   * player's data — the API caches responses, so this can be meaningfully
   * older than "now". See 12_TACTICUS_API.md.
   */
  lastUpdatedOn: z.number().optional(),
});

export const tacticusPlayerResponseSchema = z.object({
  player: tacticusPlayerSchema,
  metaData: tacticusMetaDataSchema.optional(),
});

export type TacticusUnit = z.infer<typeof tacticusUnitSchema>;
export type TacticusCampaignProgress = z.infer<typeof tacticusCampaignProgressSchema>;
export type TacticusInventory = z.infer<typeof tacticusInventorySchema>;
export type TacticusLegendaryEvent = z.infer<typeof tacticusLegendaryEventSchema>;
export type TacticusPlayerResponse = z.infer<typeof tacticusPlayerResponseSchema>;
