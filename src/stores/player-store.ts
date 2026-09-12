import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PlayerData, CharacterProgress, Goal, GoalType, GoalStatus, CampaignProgress, CharacterId } from '../domain';
import {
  CURRENT_SCHEMA_VERSION,
  findCharacterById,
  getGoalsForCharacter as selectGoalsForCharacter,
  sortGoalsByPriority,
} from '../domain';
import { importPlayerData, ImportValidationError } from '../adapters/planner-import';
import { saveSnapshot, saveCompletedGoal } from '../adapters/history-db';

/**
 * Cache Object.values() results keyed by the source record reference, so repeated
 * selector calls (e.g. Zustand's useSyncExternalStore) return a stable array
 * identity instead of a new one each render, which would otherwise cause an
 * infinite re-render loop.
 */
function memoizedValues<T extends object>(): (record: Record<string, T>) => T[] {
  let lastRecord: Record<string, T> | null = null;
  let lastValues: T[] = [];
  return (record) => {
    if (record !== lastRecord) {
      lastRecord = record;
      lastValues = Object.values(record);
    }
    return lastValues;
  };
}

const getCharactersValues = memoizedValues<CharacterProgress>();
const getCampaignsValues = memoizedValues<CampaignProgress>();

/**
 * Same referential-stability concern as {@link memoizedValues}, but keyed on both
 * the source array reference and the characterId, since the derived result comes
 * from Array.filter() rather than a plain Object.values() lookup.
 */
function memoizedGoalsForCharacter(): (goals: Goal[], characterId: CharacterId) => Goal[] {
  let lastGoals: Goal[] | null = null;
  let lastCharacterId: CharacterId | null = null;
  let lastResult: Goal[] = [];
  return (goals, characterId) => {
    if (goals !== lastGoals || characterId !== lastCharacterId) {
      lastGoals = goals;
      lastCharacterId = characterId;
      lastResult = selectGoalsForCharacter(goals, characterId);
    }
    return lastResult;
  };
}

const getGoalsForCharacterValues = memoizedGoalsForCharacter();

const getSortedGoalsValues = (() => {
  let lastGoals: Goal[] | null = null;
  let lastResult: Goal[] = [];
  return (goals: Goal[]) => {
    if (goals !== lastGoals) {
      lastGoals = goals;
      lastResult = sortGoalsByPriority(goals);
    }
    return lastResult;
  };
})();

function createEmptyPlayerData(): PlayerData {
  return {
    schemaVersion: CURRENT_SCHEMA_VERSION,
    profile: {},
    characters: {},
    inventory: { items: {} },
    campaigns: {},
    goals: [],
    updatedAt: new Date().toISOString(),
  };
}

export interface PlayerStore {
  data: PlayerData;
  importFromJson: (raw: string) => void;
  reset: () => void;
  exportJson: () => string;
  addGoal: (input: { characterId: CharacterId; type: GoalType; target: number }) => void;
  updateGoalStatus: (id: string, status: GoalStatus) => void;
  removeGoal: (id: string) => void;
  /** Reassigns priorities (1-based) to match the given id order. */
  reorderGoals: (orderedIds: string[]) => void;

  // Selectors
  getCharacters: () => CharacterProgress[];
  getGoals: () => Goal[];
  getCampaigns: () => CampaignProgress[];
  getCharacterById: (id: CharacterId) => CharacterProgress | undefined;
  getGoalsForCharacter: (characterId: CharacterId) => Goal[];
  getSortedGoals: () => Goal[];
}

export const usePlayerStore = create<PlayerStore>()(
  persist(
    (set, get) => ({
      data: createEmptyPlayerData(),

      importFromJson: (raw: string) => {
        const previousData = get().data;
        const playerData = importPlayerData(raw);
        set({ data: playerData });

        // History is best-effort: a snapshot only makes sense once there was
        // something to preserve, and a failed write must not break the import.
        if (Object.keys(previousData.characters).length > 0) {
          saveSnapshot({ id: crypto.randomUUID(), takenAt: new Date().toISOString(), data: previousData }).catch(() => {});
        }
      },

      reset: () => {
        set({ data: createEmptyPlayerData() });
      },

      exportJson: () => {
        return JSON.stringify(get().data, null, 2);
      },

      addGoal: ({ characterId, type, target }) => {
        const goals = get().data.goals;
        const nextPriority = goals.length > 0 ? Math.max(...goals.map((g) => g.priority)) + 1 : 1;
        const newGoal: Goal = {
          id: crypto.randomUUID(),
          characterId,
          type,
          target,
          priority: nextPriority,
          status: 'active',
        };
        set((state) => ({ data: { ...state.data, goals: [...state.data.goals, newGoal] } }));
      },

      updateGoalStatus: (id, status) => {
        const goal = get().data.goals.find((g) => g.id === id);
        set((state) => ({
          data: {
            ...state.data,
            goals: state.data.goals.map((g) => (g.id === id ? { ...g, status } : g)),
          },
        }));

        if (goal && status === 'done' && goal.status !== 'done') {
          saveCompletedGoal({
            goalId: goal.id,
            characterId: goal.characterId,
            type: goal.type,
            target: goal.target,
            completedAt: new Date().toISOString(),
          }).catch(() => {});
        }
      },

      removeGoal: (id) => {
        set((state) => ({
          data: { ...state.data, goals: state.data.goals.filter((g) => g.id !== id) },
        }));
      },

      reorderGoals: (orderedIds) => {
        set((state) => ({
          data: {
            ...state.data,
            goals: state.data.goals.map((g) => {
              const index = orderedIds.indexOf(g.id);
              return index === -1 ? g : { ...g, priority: index + 1 };
            }),
          },
        }));
      },

      getCharacters: () => getCharactersValues(get().data.characters),
      getGoals: () => get().data.goals,
      getCampaigns: () => getCampaignsValues(get().data.campaigns),
      getCharacterById: (id) => findCharacterById(getCharactersValues(get().data.characters), id),
      getGoalsForCharacter: (characterId) => getGoalsForCharacterValues(get().data.goals, characterId),
      getSortedGoals: () => getSortedGoalsValues(get().data.goals),
    }),
    {
      name: 'tacticus-player-data',
      version: CURRENT_SCHEMA_VERSION,
    },
  ),
);

export { ImportValidationError };
