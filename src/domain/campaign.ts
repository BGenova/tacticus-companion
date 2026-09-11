/** Progression d'une campagne du joueur. */
export interface CampaignProgress {
  campaignId: string;
  completedBattle: number;
  medals?: number;
}
