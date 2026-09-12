import 'fake-indexeddb/auto';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { usePlayerStore } from './player-store';
import { ImportValidationError } from '../adapters/planner-import';
import { CURRENT_SCHEMA_VERSION } from '../domain';
import { getAllSnapshots, deleteSnapshot, getCompletedGoals, deleteCompletedGoal } from '../adapters/history-db';

function loadFixtureRaw(name: string): string {
  return readFileSync(
    resolve(__dirname, '../data/fixtures', name),
    'utf-8',
  );
}

/** Fire-and-forget history writes settle on the next macrotask. */
function flushHistoryWrites(): Promise<void> {
  return new Promise((r) => setTimeout(r, 0));
}

beforeEach(() => {
  usePlayerStore.getState().reset();
});

afterEach(async () => {
  const snapshots = await getAllSnapshots();
  for (const s of snapshots) await deleteSnapshot(s.id);
  const goals = await getCompletedGoals();
  for (const g of goals) await deleteCompletedGoal(g.goalId);
});

describe('player-store initial state', () => {
  it('should have empty player data by default', () => {
    const { data } = usePlayerStore.getState();
    expect(data.schemaVersion).toBe(CURRENT_SCHEMA_VERSION);
    expect(Object.keys(data.characters)).toHaveLength(0);
    expect(data.goals).toEqual([]);
    expect(Object.keys(data.campaigns)).toHaveLength(0);
  });
});

describe('importFromJson', () => {
  it('should import valid JSON and update state', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    const { data } = usePlayerStore.getState();
    expect(data.profile.username).toBe('TestUser');
    expect(Object.keys(data.characters)).toHaveLength(2);
    expect(data.goals).toHaveLength(2);
  });

  it('should throw ImportValidationError for invalid JSON', () => {
    expect(() => usePlayerStore.getState().importFromJson('bad'))
      .toThrow(ImportValidationError);
  });

  it('should throw ImportValidationError for invalid schema', () => {
    expect(() => usePlayerStore.getState().importFromJson('{"foo":1}'))
      .toThrow(ImportValidationError);
  });

  it('should not modify state on failed import', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    try {
      usePlayerStore.getState().importFromJson('bad');
    } catch {
      // expected
    }

    const { data } = usePlayerStore.getState();
    expect(data.profile.username).toBe('TestUser');
  });
});

describe('addGoal', () => {
  it('should add a goal with priority 1 when the goal list is empty', () => {
    usePlayerStore.getState().addGoal({ characterId: 'bellator', type: 'rank', target: 5 });

    const goals = usePlayerStore.getState().getGoals();
    expect(goals).toHaveLength(1);
    expect(goals[0]).toMatchObject({ characterId: 'bellator', type: 'rank', target: 5, priority: 1, status: 'active' });
    expect(typeof goals[0].id).toBe('string');
    expect(goals[0].id.length).toBeGreaterThan(0);
  });

  it('should assign the next priority after existing goals', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    usePlayerStore.getState().addGoal({ characterId: 'bellator', type: 'rarity', target: 3 });

    const goals = usePlayerStore.getState().getGoals();
    const maxExistingPriority = Math.max(...goals.filter((g) => g.type !== 'rarity').map((g) => g.priority));
    const newGoal = goals.find((g) => g.type === 'rarity');
    expect(newGoal?.priority).toBe(maxExistingPriority + 1);
  });

  it('should generate unique ids for each goal', () => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().addGoal({ characterId: 'bellator', type: 'rank', target: 5 });
    usePlayerStore.getState().addGoal({ characterId: 'certus', type: 'rank', target: 5 });

    const [a, b] = usePlayerStore.getState().getGoals();
    expect(a.id).not.toBe(b.id);
  });
});

describe('updateGoalStatus', () => {
  it('should update the status of the matching goal only', () => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().addGoal({ characterId: 'bellator', type: 'rank', target: 5 });
    usePlayerStore.getState().addGoal({ characterId: 'certus', type: 'rank', target: 5 });
    const [first, second] = usePlayerStore.getState().getGoals();

    usePlayerStore.getState().updateGoalStatus(first.id, 'paused');

    const goals = usePlayerStore.getState().getGoals();
    expect(goals.find((g) => g.id === first.id)?.status).toBe('paused');
    expect(goals.find((g) => g.id === second.id)?.status).toBe('active');
  });

  it('should be a no-op for an unknown goal id', () => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().addGoal({ characterId: 'bellator', type: 'rank', target: 5 });

    usePlayerStore.getState().updateGoalStatus('unknown-id', 'done');

    expect(usePlayerStore.getState().getGoals()[0].status).toBe('active');
  });
});

describe('removeGoal', () => {
  it('should remove the matching goal and keep the others', () => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().addGoal({ characterId: 'bellator', type: 'rank', target: 5 });
    usePlayerStore.getState().addGoal({ characterId: 'certus', type: 'rank', target: 5 });
    const [first, second] = usePlayerStore.getState().getGoals();

    usePlayerStore.getState().removeGoal(first.id);

    const goals = usePlayerStore.getState().getGoals();
    expect(goals).toHaveLength(1);
    expect(goals[0].id).toBe(second.id);
  });
});

describe('reorderGoals', () => {
  it('should reassign priorities based on the given id order', () => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().addGoal({ characterId: 'bellator', type: 'rank', target: 5 });
    usePlayerStore.getState().addGoal({ characterId: 'certus', type: 'rank', target: 5 });
    const [first, second] = usePlayerStore.getState().getGoals();

    usePlayerStore.getState().reorderGoals([second.id, first.id]);

    const goals = usePlayerStore.getState().getGoals();
    expect(goals.find((g) => g.id === second.id)?.priority).toBe(1);
    expect(goals.find((g) => g.id === first.id)?.priority).toBe(2);
  });
});

describe('getSortedGoals', () => {
  it('should return goals ordered by priority ascending', () => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().addGoal({ characterId: 'bellator', type: 'rank', target: 5 });
    usePlayerStore.getState().addGoal({ characterId: 'certus', type: 'rank', target: 5 });
    const [first, second] = usePlayerStore.getState().getGoals();
    usePlayerStore.getState().reorderGoals([second.id, first.id]);

    const sorted = usePlayerStore.getState().getSortedGoals();
    expect(sorted.map((g) => g.id)).toEqual([second.id, first.id]);
  });

  it('should return the same array reference across calls when state has not changed', () => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().addGoal({ characterId: 'bellator', type: 'rank', target: 5 });

    const a = usePlayerStore.getState().getSortedGoals();
    const b = usePlayerStore.getState().getSortedGoals();
    expect(a).toBe(b);
  });
});

describe('importFromJson history snapshots', () => {
  it('should not create a snapshot on the first-ever import (nothing to preserve)', async () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);
    await flushHistoryWrites();

    expect(await getAllSnapshots()).toEqual([]);
  });

  it('should snapshot the previous state before a subsequent import overwrites it', async () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);
    usePlayerStore.getState().importFromJson(raw);
    await flushHistoryWrites();

    const snapshots = await getAllSnapshots();
    expect(snapshots).toHaveLength(1);
    expect(snapshots[0].data.profile.username).toBe('TestUser');
  });
});

describe('updateGoalStatus completed-goal history', () => {
  it('should log a completed-goal entry when a goal is marked done', async () => {
    usePlayerStore.getState().addGoal({ characterId: 'bellator', type: 'rank', target: 5 });
    const goal = usePlayerStore.getState().getGoals()[0];

    usePlayerStore.getState().updateGoalStatus(goal.id, 'done');
    await flushHistoryWrites();

    const entries = await getCompletedGoals();
    expect(entries).toHaveLength(1);
    expect(entries[0]).toMatchObject({ goalId: goal.id, characterId: 'bellator', type: 'rank', target: 5 });
  });

  it('should not log an entry for transitions other than -> done', async () => {
    usePlayerStore.getState().addGoal({ characterId: 'bellator', type: 'rank', target: 5 });
    const goal = usePlayerStore.getState().getGoals()[0];

    usePlayerStore.getState().updateGoalStatus(goal.id, 'paused');
    await flushHistoryWrites();

    expect(await getCompletedGoals()).toEqual([]);
  });

  it('should not log a duplicate entry when a goal already done is marked done again', async () => {
    usePlayerStore.getState().addGoal({ characterId: 'bellator', type: 'rank', target: 5 });
    const goal = usePlayerStore.getState().getGoals()[0];

    usePlayerStore.getState().updateGoalStatus(goal.id, 'done');
    await flushHistoryWrites();
    usePlayerStore.getState().updateGoalStatus(goal.id, 'done');
    await flushHistoryWrites();

    expect(await getCompletedGoals()).toHaveLength(1);
  });
});

describe('reset', () => {
  it('should reset to empty state', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);
    usePlayerStore.getState().reset();

    const { data } = usePlayerStore.getState();
    expect(Object.keys(data.characters)).toHaveLength(0);
    expect(data.goals).toEqual([]);
  });
});

describe('exportJson', () => {
  it('should export current state as JSON string', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    const exported = usePlayerStore.getState().exportJson();
    const parsed = JSON.parse(exported);
    expect(parsed.profile.username).toBe('TestUser');
    expect(Object.keys(parsed.characters)).toHaveLength(2);
  });

  it('should produce valid JSON that can be re-imported', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    const exported = usePlayerStore.getState().exportJson();
    usePlayerStore.getState().reset();
    usePlayerStore.getState().importFromJson(exported);

    const { data } = usePlayerStore.getState();
    expect(data.profile.username).toBe('TestUser');
  });
});

describe('selectors', () => {
  it('getCharacters should return array of characters', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    const chars = usePlayerStore.getState().getCharacters();
    expect(chars).toHaveLength(2);
    expect(chars.some((c) => c.characterId === 'bellator')).toBe(true);
  });

  it('getGoals should return goals array', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    const goals = usePlayerStore.getState().getGoals();
    expect(goals).toHaveLength(2);
  });

  it('getLegendaryEvents should return an empty array when absent (e.g. JSON import)', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    expect(usePlayerStore.getState().getLegendaryEvents()).toEqual([]);
  });

  it('getLegendaryEvents should return the same array reference across calls when state has not changed', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    const a = usePlayerStore.getState().getLegendaryEvents();
    const b = usePlayerStore.getState().getLegendaryEvents();
    expect(a).toBe(b);
  });

  it('getCharacterById should return the matching character', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    const character = usePlayerStore.getState().getCharacterById('bellator');
    expect(character?.characterId).toBe('bellator');
  });

  it('getCharacterById should return undefined for an unknown id', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    expect(usePlayerStore.getState().getCharacterById('unknown')).toBeUndefined();
  });

  it('getGoalsForCharacter should return only goals for the given character', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    const allGoals = usePlayerStore.getState().getGoals();
    const characterId = allGoals[0].characterId;

    const result = usePlayerStore.getState().getGoalsForCharacter(characterId);
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((g) => g.characterId === characterId)).toBe(true);
  });

  it('getGoalsForCharacter should return an empty array when no goal matches', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    expect(usePlayerStore.getState().getGoalsForCharacter('unknown')).toEqual([]);
  });

  it('getGoalsForCharacter should return the same array reference across calls when state has not changed', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    const first = usePlayerStore.getState().getGoalsForCharacter('bellator');
    const second = usePlayerStore.getState().getGoalsForCharacter('bellator');

    expect(first).toBe(second);
  });

  it('getCampaigns should return array of campaigns', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    const campaigns = usePlayerStore.getState().getCampaigns();
    expect(campaigns).toHaveLength(2);
  });

  it('selectors should return empty arrays on empty state', () => {
    expect(usePlayerStore.getState().getCharacters()).toEqual([]);
    expect(usePlayerStore.getState().getGoals()).toEqual([]);
    expect(usePlayerStore.getState().getCampaigns()).toEqual([]);
  });
});

describe('selector referential stability', () => {
  it('getCharacters should return the same array reference across calls when state has not changed', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    const first = usePlayerStore.getState().getCharacters();
    const second = usePlayerStore.getState().getCharacters();

    expect(first).toBe(second);
  });

  it('getCharacters should return a new array reference after re-importing data', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);
    const first = usePlayerStore.getState().getCharacters();

    usePlayerStore.getState().importFromJson(raw);
    const second = usePlayerStore.getState().getCharacters();

    expect(first).not.toBe(second);
  });

  it('getCampaigns should return the same array reference across calls when state has not changed', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    usePlayerStore.getState().importFromJson(raw);

    const first = usePlayerStore.getState().getCampaigns();
    const second = usePlayerStore.getState().getCampaigns();

    expect(first).toBe(second);
  });
});
