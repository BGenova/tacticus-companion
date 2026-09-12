import type { CharacterId, CharacterProgress } from './character';
import type { CampaignProgress } from './campaign';
import type { Goal } from './goal';
import type { LegendaryEventProgress } from './legendary-event';

/** Profil du joueur. */
export interface PlayerProfile {
  username?: string;
  level?: number;
  powerRating?: number;
}

/** Inventaire global du joueur. */
export interface Inventory {
  gold?: number;
  blackstone?: number;
  energy?: number;
  /** Ressources génériques : clé = ID ressource, valeur = quantité. */
  items: Record<string, number>;
}

/** Racine du modèle de données joueur. */
export interface PlayerData {
  schemaVersion: number;
  profile: PlayerProfile;
  characters: Record<CharacterId, CharacterProgress>;
  inventory: Inventory;
  campaigns: Record<string, CampaignProgress>;
  goals: Goal[];
  /** Only populated by API imports — not part of the JSON planner format. */
  legendaryEvents?: LegendaryEventProgress[];
  /** ISO 8601. */
  updatedAt: string;
}
