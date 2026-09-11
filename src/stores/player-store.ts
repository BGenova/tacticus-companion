import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PlayerData, CharacterProgress, Goal, CampaignProgress } from '../domain';
import { CURRENT_SCHEMA_VERSION } from '../domain';
import { importPlayerData, ImportValidationError } from '../adapters/planner-import';

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

  // Selectors
  getCharacters: () => CharacterProgress[];
  getGoals: () => Goal[];
  getCampaigns: () => CampaignProgress[];
}

export const usePlayerStore = create<PlayerStore>()(
  persist(
    (set, get) => ({
      data: createEmptyPlayerData(),

      importFromJson: (raw: string) => {
        const playerData = importPlayerData(raw);
        set({ data: playerData });
      },

      reset: () => {
        set({ data: createEmptyPlayerData() });
      },

      exportJson: () => {
        return JSON.stringify(get().data, null, 2);
      },

      getCharacters: () => getCharactersValues(get().data.characters),
      getGoals: () => get().data.goals,
      getCampaigns: () => getCampaignsValues(get().data.campaigns),
    }),
    {
      name: 'tacticus-player-data',
      version: CURRENT_SCHEMA_VERSION,
    },
  ),
);

export { ImportValidationError };
