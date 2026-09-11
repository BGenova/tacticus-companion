import { describe, it, expect } from 'vitest';
import { getRarityLabel, getInitials, sortByPower } from './roster';
import type { CharacterProgress } from './character';

describe('getRarityLabel', () => {
  it('should return Common for 0', () => {
    expect(getRarityLabel(0)).toBe('Common');
  });

  it('should return Legendary for 4', () => {
    expect(getRarityLabel(4)).toBe('Legendary');
  });

  it('should return fallback for unknown rarity', () => {
    expect(getRarityLabel(99)).toBe('Rarity 99');
  });
});

describe('getInitials', () => {
  it('should return first letters of two words', () => {
    expect(getInitials('Marneus Calgar')).toBe('MC');
  });

  it('should return first two chars for single word', () => {
    expect(getInitials('Bellator')).toBe('BE');
  });

  it('should handle empty string', () => {
    expect(getInitials('')).toBe('??');
  });

  it('should handle extra whitespace', () => {
    expect(getInitials('  Varro  Tigurius  ')).toBe('VT');
  });
});

describe('sortByPower', () => {
  const makeChar = (id: string, rank: number, rarity: number, level: number): CharacterProgress => ({
    characterId: id,
    rank,
    rarity,
    stars: 1,
    level,
    xp: 0,
    shards: 0,
    mythicShards: 0,
    abilities: { active: 1, passive: 1 },
    upgrades: [],
    equipment: [],
  });

  it('should sort by rank descending', () => {
    const chars = [makeChar('a', 1, 0, 1), makeChar('b', 5, 0, 1)];
    const sorted = sortByPower(chars);
    expect(sorted[0].characterId).toBe('b');
  });

  it('should sort by rarity when rank is equal', () => {
    const chars = [makeChar('a', 3, 1, 1), makeChar('b', 3, 4, 1)];
    const sorted = sortByPower(chars);
    expect(sorted[0].characterId).toBe('b');
  });

  it('should sort by level when rank and rarity are equal', () => {
    const chars = [makeChar('a', 3, 2, 10), makeChar('b', 3, 2, 40)];
    const sorted = sortByPower(chars);
    expect(sorted[0].characterId).toBe('b');
  });

  it('should not mutate original array', () => {
    const chars = [makeChar('a', 1, 0, 1), makeChar('b', 5, 0, 1)];
    sortByPower(chars);
    expect(chars[0].characterId).toBe('a');
  });

  it('should handle empty array', () => {
    expect(sortByPower([])).toEqual([]);
  });
});
