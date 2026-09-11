import type { PlayerData, CharacterProgress, CampaignProgress, Equipment } from '../../domain';
import { CURRENT_SCHEMA_VERSION } from '../../domain';
import {
  tacticusPlayerResponseSchema,
  type TacticusPlayerResponse,
  type TacticusUnit,
  type TacticusCampaignProgress,
  type TacticusInventory,
} from './schema';

export class TacticusImportValidationError extends Error {
  public readonly issues: string[];

  constructor(issues: string[]) {
    super(`Tacticus API import validation failed: ${issues.join('; ')}`);
    this.name = 'TacticusImportValidationError';
    this.issues = issues;
  }
}

/**
 * Validate an unknown value against the Tacticus API response shape.
 * Throws TacticusImportValidationError if validation fails.
 */
export function validateTacticusResponse(data: unknown): TacticusPlayerResponse {
  const result = tacticusPlayerResponseSchema.safeParse(data);

  if (!result.success) {
    const issues = result.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`);
    throw new TacticusImportValidationError(issues);
  }

  return result.data;
}

/**
 * Rarity and star level are not separate fields in the Tacticus API: a single
 * progressionIndex (0-15) encodes both, in steps of 3 (0=Common, 3=Uncommon,
 * 6=Rare, 9=Epic, 12=Legendary, 15=Mythic — confirmed by the OpenAPI spec
 * description). The star-within-rarity breakdown (progressionIndex % 3) is
 * inferred from that same stepping and not explicitly documented; verify
 * against a real account if displayed values look off.
 */
function deriveRarity(progressionIndex: number): number {
  return Math.min(Math.floor(progressionIndex / 3), 5);
}

function deriveStars(progressionIndex: number): number {
  return (progressionIndex % 3) + 1;
}

/**
 * The API's abilities array has no active/passive tag, only { id, level }.
 * We assume index 0 = active, index 1 = passive (the conventional order for
 * Tacticus characters), defaulting to level 0 when missing. Unverified
 * against a real multi-ability account.
 */
function normalizeUnit(unit: TacticusUnit): CharacterProgress {
  const equipment: Equipment[] = unit.items.map((item) => ({
    slot: item.slotId,
    name: item.name ?? item.id,
    rarity: item.rarity ?? 'Common',
    level: item.level,
  }));

  return {
    characterId: unit.id,
    rank: unit.rank,
    rarity: deriveRarity(unit.progressionIndex),
    stars: deriveStars(unit.progressionIndex),
    level: unit.xpLevel,
    xp: unit.xp,
    shards: unit.shards,
    mythicShards: unit.mythicShards,
    abilities: {
      active: unit.abilities[0]?.level ?? 0,
      passive: unit.abilities[1]?.level ?? 0,
    },
    // The API only exposes which upgrade *slots* are filled (position
    // indices), not the identity of the upgrade applied to each slot, so we
    // cannot populate "IDs des upgrades appliquées" faithfully.
    upgrades: [],
    equipment,
  };
}

/**
 * The API doesn't expose an explicit "completed" flag per battle, only
 * attemptsLeft/attemptsUsed. We treat a battle as cleared once the player has
 * engaged it (attemptsUsed > 0), and count those as the completed-battle
 * total. Campaigns are sequential in-game, so this should track furthest
 * progress; unverified against a real account with partial campaign gaps.
 */
function normalizeCampaign(campaign: TacticusCampaignProgress): CampaignProgress {
  return {
    campaignId: campaign.id,
    name: campaign.name,
    type: campaign.type,
    // The API returns one entry per stage the campaign has, so the array
    // length is a real total — not a guess or a hardcoded catalog value.
    totalBattles: campaign.battles.length,
    completedBattle: campaign.battles.filter((b) => b.attemptsUsed > 0).length,
  };
}

function flattenInventory(inventory: TacticusInventory): Record<string, number> {
  const items: Record<string, number> = {};

  for (const i of inventory.items) items[`item:${i.id}`] = i.amount;
  for (const u of inventory.upgrades) items[`upgrade:${u.id}`] = u.amount;
  for (const s of inventory.shards) items[`shard:${s.id}`] = s.amount;
  for (const s of inventory.mythicShards) items[`mythicShard:${s.id}`] = s.amount;
  for (const x of inventory.xpBooks) items[`xpBook:${x.id}`] = x.amount;
  for (const c of inventory.components) items[`component:${c.grandAlliance}`] = c.amount;
  for (const f of inventory.forgeBadges) items[`forgeBadge:${f.rarity}`] = f.amount;
  for (const [alliance, badges] of Object.entries(inventory.abilityBadges ?? {})) {
    for (const b of badges) items[`abilityBadge:${alliance}:${b.rarity}`] = b.amount;
  }
  for (const [alliance, orbs] of Object.entries(inventory.orbs ?? {})) {
    for (const o of orbs) items[`orb:${alliance}:${o.rarity}`] = o.amount;
  }
  if (inventory.resetStones !== undefined) items.resetStones = inventory.resetStones;

  return items;
}

/**
 * Transform a validated Tacticus API player response into our normalized
 * PlayerData — the same shape produced by the planner-import JSON adapter.
 * Goals are always empty: they're a Tacticus Companion concept (player-created
 * planning), not something the game API exposes.
 */
export function normalizeTacticusPlayer(response: TacticusPlayerResponse): PlayerData {
  const { player } = response;

  const characters: Record<string, CharacterProgress> = {};
  for (const unit of player.units) {
    characters[unit.id] = normalizeUnit(unit);
  }

  const campaigns: Record<string, CampaignProgress> = {};
  for (const campaign of player.progress.campaigns) {
    campaigns[campaign.id] = normalizeCampaign(campaign);
  }

  return {
    schemaVersion: CURRENT_SCHEMA_VERSION,
    profile: {
      username: player.details.name,
      powerRating: player.details.powerLevel,
    },
    characters,
    inventory: { items: flattenInventory(player.inventory) },
    campaigns,
    goals: [],
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Full import pipeline: validate raw API response → normalize → PlayerData.
 */
export function importTacticusPlayerData(raw: unknown): PlayerData {
  const validated = validateTacticusResponse(raw);
  return normalizeTacticusPlayer(validated);
}
