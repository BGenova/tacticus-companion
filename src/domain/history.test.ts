import { describe, it, expect } from 'vitest';
import { diffRosterSnapshots, calculateProgressionStats } from './history';
import type { RosterSnapshot } from './history';
import type { PlayerData } from './player-data';
import type { CharacterProgress } from './character';
import { CURRENT_SCHEMA_VERSION } from './constants';

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

function makePlayerData(characters: Record<string, CharacterProgress>): PlayerData {
  return {
    schemaVersion: CURRENT_SCHEMA_VERSION,
    profile: {},
    characters,
    inventory: { items: {} },
    campaigns: {},
    goals: [],
    updatedAt: '2026-01-01T00:00:00.000Z',
  };
}

describe('diffRosterSnapshots', () => {
  it('should detect a newly added character', () => {
    const before = makePlayerData({});
    const after = makePlayerData({ bellator: makeCharacter() });
    const diff = diffRosterSnapshots(before, after);
    expect(diff.newCharacters).toEqual(['bellator']);
    expect(diff.changedCharacters).toEqual([]);
  });

  it('should detect a rank/level/shards change for an existing character', () => {
    const before = makePlayerData({ bellator: makeCharacter({ rank: 3, level: 25, shards: 45 }) });
    const after = makePlayerData({ bellator: makeCharacter({ rank: 5, level: 30, shards: 60 }) });
    const diff = diffRosterSnapshots(before, after);
    expect(diff.changedCharacters).toEqual([
      {
        characterId: 'bellator',
        rankBefore: 3, rankAfter: 5,
        rarityBefore: 2, rarityAfter: 2,
        levelBefore: 25, levelAfter: 30,
        shardsBefore: 45, shardsAfter: 60,
      },
    ]);
  });

  it('should not report a character with no changes', () => {
    const character = makeCharacter();
    const before = makePlayerData({ bellator: character });
    const after = makePlayerData({ bellator: { ...character } });
    const diff = diffRosterSnapshots(before, after);
    expect(diff.changedCharacters).toEqual([]);
    expect(diff.newCharacters).toEqual([]);
  });

  it('should handle both snapshots being empty', () => {
    const diff = diffRosterSnapshots(makePlayerData({}), makePlayerData({}));
    expect(diff).toEqual({ newCharacters: [], changedCharacters: [] });
  });

  it('should ignore characters removed between snapshots (not reported as changed or new)', () => {
    const before = makePlayerData({ bellator: makeCharacter() });
    const after = makePlayerData({});
    const diff = diffRosterSnapshots(before, after);
    expect(diff).toEqual({ newCharacters: [], changedCharacters: [] });
  });
});

describe('calculateProgressionStats', () => {
  function makeSnapshot(takenAt: string, characters: Record<string, CharacterProgress>): RosterSnapshot {
    return { id: takenAt, takenAt, data: makePlayerData(characters) };
  }

  it('should return zeroed stats for no snapshots', () => {
    expect(calculateProgressionStats([])).toEqual({
      snapshotCount: 0,
      oldestSnapshotAt: null,
      newestSnapshotAt: null,
      totalRankUps: 0,
    });
  });

  it('should compute total rank-ups between the oldest and newest snapshot', () => {
    const snapshots = [
      makeSnapshot('2026-01-01T00:00:00.000Z', { bellator: makeCharacter({ rank: 1 }), certus: makeCharacter({ characterId: 'certus', rank: 2 }) }),
      makeSnapshot('2026-02-01T00:00:00.000Z', { bellator: makeCharacter({ rank: 4 }), certus: makeCharacter({ characterId: 'certus', rank: 2 }) }),
    ];
    const stats = calculateProgressionStats(snapshots);
    expect(stats.snapshotCount).toBe(2);
    expect(stats.oldestSnapshotAt).toBe('2026-01-01T00:00:00.000Z');
    expect(stats.newestSnapshotAt).toBe('2026-02-01T00:00:00.000Z');
    expect(stats.totalRankUps).toBe(3);
  });

  it('should sort snapshots by date regardless of input order', () => {
    const snapshots = [
      makeSnapshot('2026-02-01T00:00:00.000Z', { bellator: makeCharacter({ rank: 5 }) }),
      makeSnapshot('2026-01-01T00:00:00.000Z', { bellator: makeCharacter({ rank: 1 }) }),
    ];
    const stats = calculateProgressionStats(snapshots);
    expect(stats.oldestSnapshotAt).toBe('2026-01-01T00:00:00.000Z');
    expect(stats.totalRankUps).toBe(4);
  });

  it('should not count rank decreases as negative progress', () => {
    const snapshots = [
      makeSnapshot('2026-01-01T00:00:00.000Z', { bellator: makeCharacter({ rank: 5 }) }),
      makeSnapshot('2026-02-01T00:00:00.000Z', { bellator: makeCharacter({ rank: 2 }) }),
    ];
    expect(calculateProgressionStats(snapshots).totalRankUps).toBe(0);
  });

  it('should handle a single snapshot (no change to measure)', () => {
    const snapshots = [makeSnapshot('2026-01-01T00:00:00.000Z', { bellator: makeCharacter() })];
    const stats = calculateProgressionStats(snapshots);
    expect(stats.snapshotCount).toBe(1);
    expect(stats.totalRankUps).toBe(0);
  });
});
