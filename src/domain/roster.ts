import type { CharacterProgress } from './character';

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
