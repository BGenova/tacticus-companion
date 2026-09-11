import { describe, it, expect } from 'vitest';
import { getRarityLabel, getInitials, sortByPower, findCharacterById, getGoalsForCharacter, getGoalTypeLabel } from './roster';
import type { CharacterProgress } from './character';
import type { Goal } from './goal';

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

describe('findCharacterById', () => {
  const makeChar = (id: string): CharacterProgress => ({
    characterId: id,
    rank: 1,
    rarity: 0,
    stars: 1,
    level: 1,
    xp: 0,
    shards: 0,
    mythicShards: 0,
    abilities: { active: 1, passive: 1 },
    upgrades: [],
    equipment: [],
  });

  it('should return the character matching the given id', () => {
    const characters = [makeChar('bellator'), makeChar('certus')];
    expect(findCharacterById(characters, 'certus')?.characterId).toBe('certus');
  });

  it('should return undefined when no character matches', () => {
    const characters = [makeChar('bellator')];
    expect(findCharacterById(characters, 'unknown')).toBeUndefined();
  });

  it('should return undefined for an empty array', () => {
    expect(findCharacterById([], 'bellator')).toBeUndefined();
  });
});

describe('getGoalsForCharacter', () => {
  const makeGoal = (id: string, characterId: string): Goal => ({
    id,
    characterId,
    type: 'rank',
    target: 5,
    priority: 1,
    status: 'active',
  });

  it('should return only goals matching the given character id', () => {
    const goals = [makeGoal('g1', 'bellator'), makeGoal('g2', 'certus'), makeGoal('g3', 'bellator')];
    const result = getGoalsForCharacter(goals, 'bellator');
    expect(result).toHaveLength(2);
    expect(result.every((g) => g.characterId === 'bellator')).toBe(true);
  });

  it('should return an empty array when no goal matches', () => {
    const goals = [makeGoal('g1', 'certus')];
    expect(getGoalsForCharacter(goals, 'bellator')).toEqual([]);
  });

  it('should return an empty array when goals list is empty', () => {
    expect(getGoalsForCharacter([], 'bellator')).toEqual([]);
  });
});

describe('getGoalTypeLabel', () => {
  it('should return French label for rank', () => {
    expect(getGoalTypeLabel('rank')).toBe('Rang');
  });

  it('should return French label for rarity', () => {
    expect(getGoalTypeLabel('rarity')).toBe('Rareté');
  });

  it('should return French label for active ability', () => {
    expect(getGoalTypeLabel('active')).toBe('Compétence active');
  });

  it('should return French label for passive ability', () => {
    expect(getGoalTypeLabel('passive')).toBe('Compétence passive');
  });
});
