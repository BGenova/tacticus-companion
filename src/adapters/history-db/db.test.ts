import 'fake-indexeddb/auto';
import { describe, it, expect, afterEach } from 'vitest';
import {
  saveSnapshot,
  getAllSnapshots,
  deleteSnapshot,
  saveCompletedGoal,
  getCompletedGoals,
  deleteCompletedGoal,
} from './db';
import type { RosterSnapshot, CompletedGoalEntry } from '../../domain';
import { CURRENT_SCHEMA_VERSION } from '../../domain';

// fake-indexeddb is the standard way to test IndexedDB-backed code: it's a
// real (in-memory) implementation of the browser API, not a hand-rolled mock.

function makeSnapshot(id: string, takenAt: string): RosterSnapshot {
  return {
    id,
    takenAt,
    data: {
      schemaVersion: CURRENT_SCHEMA_VERSION,
      profile: {},
      characters: {},
      inventory: { items: {} },
      campaigns: {},
      goals: [],
      updatedAt: takenAt,
    },
  };
}

afterEach(async () => {
  const snapshots = await getAllSnapshots();
  for (const s of snapshots) await deleteSnapshot(s.id);
  const goals = await getCompletedGoals();
  for (const g of goals) await deleteCompletedGoal(g.goalId);
});

describe('saveSnapshot / getAllSnapshots', () => {
  it('should save and retrieve a snapshot', async () => {
    await saveSnapshot(makeSnapshot('s1', '2026-01-01T00:00:00.000Z'));
    const all = await getAllSnapshots();
    expect(all).toHaveLength(1);
    expect(all[0].id).toBe('s1');
  });

  it('should return snapshots ordered by takenAt ascending', async () => {
    await saveSnapshot(makeSnapshot('s2', '2026-02-01T00:00:00.000Z'));
    await saveSnapshot(makeSnapshot('s1', '2026-01-01T00:00:00.000Z'));
    const all = await getAllSnapshots();
    expect(all.map((s) => s.id)).toEqual(['s1', 's2']);
  });

  it('should return an empty array when there are no snapshots', async () => {
    expect(await getAllSnapshots()).toEqual([]);
  });

  it('should overwrite a snapshot saved with the same id', async () => {
    await saveSnapshot(makeSnapshot('s1', '2026-01-01T00:00:00.000Z'));
    await saveSnapshot(makeSnapshot('s1', '2026-03-01T00:00:00.000Z'));
    const all = await getAllSnapshots();
    expect(all).toHaveLength(1);
    expect(all[0].takenAt).toBe('2026-03-01T00:00:00.000Z');
  });
});

describe('deleteSnapshot', () => {
  it('should remove the matching snapshot', async () => {
    await saveSnapshot(makeSnapshot('s1', '2026-01-01T00:00:00.000Z'));
    await saveSnapshot(makeSnapshot('s2', '2026-02-01T00:00:00.000Z'));
    await deleteSnapshot('s1');
    const all = await getAllSnapshots();
    expect(all.map((s) => s.id)).toEqual(['s2']);
  });
});

describe('saveCompletedGoal / getCompletedGoals', () => {
  const entry: CompletedGoalEntry = {
    goalId: 'g1',
    characterId: 'bellator',
    type: 'rank',
    target: 5,
    completedAt: '2026-01-01T00:00:00.000Z',
  };

  it('should save and retrieve a completed goal entry', async () => {
    await saveCompletedGoal(entry);
    const all = await getCompletedGoals();
    expect(all).toEqual([entry]);
  });

  it('should return completed goals ordered by completedAt ascending', async () => {
    await saveCompletedGoal({ ...entry, goalId: 'g2', completedAt: '2026-03-01T00:00:00.000Z' });
    await saveCompletedGoal({ ...entry, goalId: 'g1', completedAt: '2026-01-01T00:00:00.000Z' });
    const all = await getCompletedGoals();
    expect(all.map((e) => e.goalId)).toEqual(['g1', 'g2']);
  });

  it('should return an empty array when there are no completed goals', async () => {
    expect(await getCompletedGoals()).toEqual([]);
  });
});
