import type { CharacterId } from './character';

/** Type d'objectif de progression. */
export type GoalType = 'rank' | 'rarity' | 'active' | 'passive';

/** Statut d'un objectif. */
export type GoalStatus = 'active' | 'paused' | 'done';

/** Objectif de progression défini par le joueur. */
export interface Goal {
  id: string;
  characterId: CharacterId;
  type: GoalType;
  /** Valeur cible (ex : rang 5, rareté 3, niveau de compétence 4). */
  target: number;
  /** Ordre de priorité (1 = plus haute). */
  priority: number;
  status: GoalStatus;
}
