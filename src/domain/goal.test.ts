import { describe, it, expect } from 'vitest';
import { calculateGoalProgress, sortGoalsByPriority } from './goal';
import type { Goal } from './goal';
import type { CharacterProgress } from './character';

function makeCharacter(overrides: Partial<CharacterProgress> = {}): CharacterProgress {
  return {
    characterId: 'bellator',
    rank: 3,
    rarity: 2,
    stars: 3,
    level: 25,
    xp: 1200,
    shards: 45,
    mythicShards: 0,
    abilities: { active: 3, passive: 2 },
    upgrades: [],
    equipment: [],
    ...overrides,
  };
}

function makeGoal(overrides: Partial<Goal> = {}): Goal {
  return {
    id: 'goal-1',
    characterId: 'bellator',
    type: 'rank',
    target: 5,
    priority: 1,
    status: 'active',
    ...overrides,
  };
}

describe('calculateGoalProgress', () => {
  it('should compute progress for a rank goal', () => {
    const result = calculateGoalProgress(makeCharacter({ rank: 3 }), makeGoal({ type: 'rank', target: 5 }));
    expect(result).toEqual({ current: 3, target: 5, pct: 60 });
  });

  it('should compute progress for a rarity goal', () => {
    const result = calculateGoalProgress(makeCharacter({ rarity: 2 }), makeGoal({ type: 'rarity', target: 4 }));
    expect(result).toEqual({ current: 2, target: 4, pct: 50 });
  });

  it('should compute progress for an active ability goal', () => {
    const result = calculateGoalProgress(
      makeCharacter({ abilities: { active: 4, passive: 1 } }),
      makeGoal({ type: 'active', target: 10 }),
    );
    expect(result).toEqual({ current: 4, target: 10, pct: 40 });
  });

  it('should compute progress for a passive ability goal', () => {
    const result = calculateGoalProgress(
      makeCharacter({ abilities: { active: 1, passive: 6 } }),
      makeGoal({ type: 'passive', target: 12 }),
    );
    expect(result).toEqual({ current: 6, target: 12, pct: 50 });
  });

  it('should clamp pct to 100 when current exceeds target', () => {
    const result = calculateGoalProgress(makeCharacter({ rank: 8 }), makeGoal({ type: 'rank', target: 5 }));
    expect(result.pct).toBe(100);
  });

  it('should clamp pct to 0 when current is negative (defensive)', () => {
    const result = calculateGoalProgress(makeCharacter({ rank: -1 }), makeGoal({ type: 'rank', target: 5 }));
    expect(result.pct).toBe(0);
  });

  it('should treat a target of 0 as already complete (avoid division by zero)', () => {
    const result = calculateGoalProgress(makeCharacter({ rank: 0 }), makeGoal({ type: 'rank', target: 0 }));
    expect(result.pct).toBe(100);
  });
});

describe('sortGoalsByPriority', () => {
  it('should sort goals ascending by priority', () => {
    const goals = [makeGoal({ id: 'b', priority: 3 }), makeGoal({ id: 'a', priority: 1 })];
    const sorted = sortGoalsByPriority(goals);
    expect(sorted.map((g) => g.id)).toEqual(['a', 'b']);
  });

  it('should not mutate the original array', () => {
    const goals = [makeGoal({ id: 'b', priority: 3 }), makeGoal({ id: 'a', priority: 1 })];
    sortGoalsByPriority(goals);
    expect(goals[0].id).toBe('b');
  });

  it('should handle an empty array', () => {
    expect(sortGoalsByPriority([])).toEqual([]);
  });
});
