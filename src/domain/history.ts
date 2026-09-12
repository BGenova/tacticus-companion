import type { PlayerData } from './player-data';
import type { CharacterId } from './character';
import type { GoalType } from './goal';

/** A full snapshot of PlayerData taken at a point in time. */
export interface RosterSnapshot {
  id: string;
  /** ISO 8601. */
  takenAt: string;
  data: PlayerData;
}

/** A goal that reached status "done", logged for history purposes. */
export interface CompletedGoalEntry {
  goalId: string;
  characterId: CharacterId;
  type: GoalType;
  target: number;
  /** ISO 8601. */
  completedAt: string;
}

export interface CharacterDiff {
  characterId: CharacterId;
  rankBefore: number;
  rankAfter: number;
  rarityBefore: number;
  rarityAfter: number;
  levelBefore: number;
  levelAfter: number;
  shardsBefore: number;
  shardsAfter: number;
}

export interface RosterDiff {
  newCharacters: CharacterId[];
  changedCharacters: CharacterDiff[];
}

/**
 * Compare two PlayerData snapshots and report newly added characters and
 * characters whose rank/rarity/level/shards changed. Characters removed
 * between snapshots (shouldn't normally happen) are silently ignored — there
 * is nothing meaningful to report about a character no longer present.
 */
export function diffRosterSnapshots(before: PlayerData, after: PlayerData): RosterDiff {
  const newCharacters: CharacterId[] = [];
  const changedCharacters: CharacterDiff[] = [];

  for (const [id, afterChar] of Object.entries(after.characters)) {
    const beforeChar = before.characters[id];
    if (!beforeChar) {
      newCharacters.push(id);
      continue;
    }
    if (
      beforeChar.rank !== afterChar.rank ||
      beforeChar.rarity !== afterChar.rarity ||
      beforeChar.level !== afterChar.level ||
      beforeChar.shards !== afterChar.shards
    ) {
      changedCharacters.push({
        characterId: id,
        rankBefore: beforeChar.rank,
        rankAfter: afterChar.rank,
        rarityBefore: beforeChar.rarity,
        rarityAfter: afterChar.rarity,
        levelBefore: beforeChar.level,
        levelAfter: afterChar.level,
        shardsBefore: beforeChar.shards,
        shardsAfter: afterChar.shards,
      });
    }
  }

  return { newCharacters, changedCharacters };
}

export interface ProgressionStats {
  snapshotCount: number;
  oldestSnapshotAt: string | null;
  newestSnapshotAt: string | null;
  /** Sum of positive rank deltas between the oldest and newest snapshot. */
  totalRankUps: number;
}

/**
 * Summarize progression across all snapshots: how many were taken, the date
 * range, and total rank-ups accrued from the oldest to the newest one.
 */
export function calculateProgressionStats(snapshots: RosterSnapshot[]): ProgressionStats {
  if (snapshots.length === 0) {
    return { snapshotCount: 0, oldestSnapshotAt: null, newestSnapshotAt: null, totalRankUps: 0 };
  }

  const sorted = [...snapshots].sort((a, b) => a.takenAt.localeCompare(b.takenAt));
  const oldest = sorted[0];
  const newest = sorted[sorted.length - 1];
  const diff = diffRosterSnapshots(oldest.data, newest.data);
  const totalRankUps = diff.changedCharacters.reduce((sum, c) => sum + Math.max(0, c.rankAfter - c.rankBefore), 0);

  return {
    snapshotCount: snapshots.length,
    oldestSnapshotAt: oldest.takenAt,
    newestSnapshotAt: newest.takenAt,
    totalRankUps,
  };
}
