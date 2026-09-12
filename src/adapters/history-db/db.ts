import { openDB, type DBSchema, type IDBPDatabase } from 'idb';
import type { RosterSnapshot, CompletedGoalEntry } from '../../domain';

interface HistoryDBSchema extends DBSchema {
  snapshots: {
    key: string;
    value: RosterSnapshot;
    indexes: { takenAt: string };
  };
  completedGoals: {
    key: string;
    value: CompletedGoalEntry;
    indexes: { completedAt: string };
  };
}

const DB_NAME = 'tacticus-history';
const DB_VERSION = 1;

let dbPromise: Promise<IDBPDatabase<HistoryDBSchema>> | null = null;

function getDb(): Promise<IDBPDatabase<HistoryDBSchema>> {
  if (!dbPromise) {
    dbPromise = openDB<HistoryDBSchema>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        const snapshotStore = db.createObjectStore('snapshots', { keyPath: 'id' });
        snapshotStore.createIndex('takenAt', 'takenAt');
        const goalsStore = db.createObjectStore('completedGoals', { keyPath: 'goalId' });
        goalsStore.createIndex('completedAt', 'completedAt');
      },
    });
  }
  return dbPromise;
}

/** Save (or overwrite, by id) a roster snapshot. */
export async function saveSnapshot(snapshot: RosterSnapshot): Promise<void> {
  const db = await getDb();
  await db.put('snapshots', snapshot);
}

/** All roster snapshots, oldest first. */
export async function getAllSnapshots(): Promise<RosterSnapshot[]> {
  const db = await getDb();
  return db.getAllFromIndex('snapshots', 'takenAt');
}

export async function deleteSnapshot(id: string): Promise<void> {
  const db = await getDb();
  await db.delete('snapshots', id);
}

/** Save (or overwrite, by goalId) a completed-goal history entry. */
export async function saveCompletedGoal(entry: CompletedGoalEntry): Promise<void> {
  const db = await getDb();
  await db.put('completedGoals', entry);
}

/** All completed-goal entries, oldest first. */
export async function getCompletedGoals(): Promise<CompletedGoalEntry[]> {
  const db = await getDb();
  return db.getAllFromIndex('completedGoals', 'completedAt');
}

export async function deleteCompletedGoal(goalId: string): Promise<void> {
  const db = await getDb();
  await db.delete('completedGoals', goalId);
}
