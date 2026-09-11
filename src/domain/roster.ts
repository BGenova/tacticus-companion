import type { CharacterId, CharacterProgress } from './character';
import type { Goal, GoalType } from './goal';

const RARITY_LABELS: Record<number, string> = {
  0: 'Common',
  1: 'Uncommon',
  2: 'Rare',
  3: 'Epic',
  4: 'Legendary',
  5: 'Mythic',
};

/**
 * Get a human-readable rarity label from a numeric rarity value.
 */
export function getRarityLabel(rarity: number): string {
  return RARITY_LABELS[rarity] ?? `Rarity ${rarity}`;
}

/**
 * Generate initials from a character name (first letter of first two words).
 */
export function getInitials(name: string): string {
  const trimmed = name.trim();
  if (trimmed.length === 0) return '??';
  const words = trimmed.split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

/**
 * Sort characters by rank (desc), then rarity (desc), then level (desc).
 */
export function sortByPower(characters: CharacterProgress[]): CharacterProgress[] {
  return [...characters].sort((a, b) => {
    if (b.rank !== a.rank) return b.rank - a.rank;
    if (b.rarity !== a.rarity) return b.rarity - a.rarity;
    return b.level - a.level;
  });
}

/**
 * Find a character's progress by its id.
 */
export function findCharacterById(
  characters: CharacterProgress[],
  id: CharacterId,
): CharacterProgress | undefined {
  return characters.find((c) => c.characterId === id);
}

/**
 * Filter goals belonging to a given character.
 */
export function getGoalsForCharacter(goals: Goal[], characterId: CharacterId): Goal[] {
  return goals.filter((g) => g.characterId === characterId);
}

const GOAL_TYPE_LABELS: Record<GoalType, string> = {
  rank: 'Rang',
  rarity: 'Rareté',
  active: 'Compétence active',
  passive: 'Compétence passive',
};

/**
 * Get a human-readable French label for a goal type.
 */
export function getGoalTypeLabel(type: GoalType): string {
  return GOAL_TYPE_LABELS[type];
}
