import type { CharacterId, CharacterProgress } from './character';

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

/** Progression courante d'un personnage vers un objectif. */
export interface GoalProgress {
  current: number;
  target: number;
  pct: number;
}

function currentValueForGoal(character: CharacterProgress, type: GoalType): number {
  switch (type) {
    case 'rank':
      return character.rank;
    case 'rarity':
      return character.rarity;
    case 'active':
      return character.abilities.active;
    case 'passive':
      return character.abilities.passive;
  }
}

/**
 * Compute a character's progress towards a goal (current value, target, and
 * percentage clamped to [0, 100]). A target of 0 is treated as already
 * complete to avoid dividing by zero.
 */
export function calculateGoalProgress(character: CharacterProgress, goal: Goal): GoalProgress {
  const current = currentValueForGoal(character, goal.type);
  const pct = goal.target > 0 ? Math.min(100, Math.max(0, Math.round((current / goal.target) * 100))) : 100;
  return { current, target: goal.target, pct };
}

/**
 * Sort goals ascending by priority (1 = highest priority, shown first).
 */
export function sortGoalsByPriority(goals: Goal[]): Goal[] {
  return [...goals].sort((a, b) => a.priority - b.priority);
}
