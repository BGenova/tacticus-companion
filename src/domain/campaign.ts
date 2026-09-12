/** Progression d'une campagne du joueur. */
export interface CampaignProgress {
  campaignId: string;
  completedBattle: number;
  medals?: number;
  /** Human-readable campaign name, when known (from API or JSON import). */
  name?: string;
  /** Total number of battle stages, when known — enables a real % completion. */
  totalBattles?: number;
  /** Campaign difficulty/variant (e.g. Standard, Elite), when known. */
  type?: string;
}

/**
 * Compute % completion for a campaign, clamped to [0, 100]. Returns null when
 * totalBattles is unknown (can't compute a meaningful percentage).
 */
export function calculateCampaignProgress(campaign: CampaignProgress): number | null {
  if (!campaign.totalBattles || campaign.totalBattles <= 0) return null;
  return Math.min(100, Math.max(0, Math.round((campaign.completedBattle / campaign.totalBattles) * 100)));
}

const CAMPAIGN_TYPE_LABELS: Record<string, string> = {
  Standard: 'Normale',
  Mirror: 'Miroir',
  Elite: 'Élite',
  EliteMirror: 'Élite Miroir',
};

/**
 * Get a human-readable French label for a campaign type/variant. Falls back
 * to the raw value for types we don't recognize (rather than hiding data),
 * and to a generic label when the type is unknown entirely.
 */
export function getCampaignTypeLabel(type: string | undefined): string {
  if (!type) return 'Campagne';
  return CAMPAIGN_TYPE_LABELS[type] ?? type;
}

/** A single variant's (Standard/Elite/Mirror/EliteMirror) progress within a campaign group. */
export interface CampaignVariantProgress {
  type: string;
  progress: CampaignProgress;
  pct: number | null;
}

/** All known variants of one campaign, grouped by human-readable name. */
export interface CampaignGroup {
  name: string;
  variants: CampaignVariantProgress[];
}

/**
 * Group campaign progress entries by name so Standard/Mirror/Elite/EliteMirror
 * variants of the same campaign can be shown side by side.
 */
export function groupCampaignsByName(campaigns: CampaignProgress[]): CampaignGroup[] {
  const groups = new Map<string, CampaignVariantProgress[]>();
  for (const campaign of campaigns) {
    const name = campaign.name ?? campaign.campaignId;
    const variant: CampaignVariantProgress = {
      type: campaign.type ?? 'Standard',
      progress: campaign,
      pct: calculateCampaignProgress(campaign),
    };
    const existing = groups.get(name);
    if (existing) {
      existing.push(variant);
    } else {
      groups.set(name, [variant]);
    }
  }
  return Array.from(groups.entries()).map(([name, variants]) => ({ name, variants }));
}
