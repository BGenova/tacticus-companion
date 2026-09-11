import { z } from 'zod';

export const equipmentSchema = z.object({
  slot: z.string(),
  name: z.string(),
  rarity: z.string(),
  level: z.number().optional(),
});

export const abilitiesSchema = z.object({
  active: z.number(),
  passive: z.number(),
});

export const characterProgressSchema = z.object({
  characterId: z.string(),
  rank: z.number(),
  rarity: z.number(),
  stars: z.number(),
  level: z.number(),
  xp: z.number(),
  shards: z.number(),
  mythicShards: z.number(),
  abilities: abilitiesSchema,
  upgrades: z.array(z.string()),
  equipment: z.array(equipmentSchema),
});

export const goalSchema = z.object({
  id: z.string(),
  characterId: z.string(),
  type: z.enum(['rank', 'rarity', 'active', 'passive']),
  target: z.number(),
  priority: z.number(),
  status: z.enum(['active', 'paused', 'done']),
});

export const campaignProgressSchema = z.object({
  campaignId: z.string(),
  completedBattle: z.number(),
  medals: z.number().optional(),
  name: z.string().optional(),
  totalBattles: z.number().optional(),
  type: z.string().optional(),
});

export const playerProfileSchema = z.object({
  username: z.string().optional(),
  level: z.number().optional(),
  powerRating: z.number().optional(),
});

export const inventorySchema = z.object({
  gold: z.number().optional(),
  blackstone: z.number().optional(),
  energy: z.number().optional(),
  items: z.record(z.string(), z.number()),
});

export const playerDataSchema = z.object({
  schemaVersion: z.number(),
  profile: playerProfileSchema,
  characters: z.record(z.string(), characterProgressSchema),
  inventory: inventorySchema,
  campaigns: z.record(z.string(), campaignProgressSchema),
  goals: z.array(goalSchema),
  updatedAt: z.string(),
});
