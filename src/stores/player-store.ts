import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PlayerData, CharacterProgress, Goal, CampaignProgress } from '../domain';
import { CURRENT_SCHEMA_VERSION } from '../domain';
import { importPlayerData, ImportValidationError } from '../adapters/planner-import';

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

      getCharacters: () => Object.values(get().data.characters),
      getGoals: () => get().data.goals,
      getCampaigns: () => Object.values(get().data.campaigns),
    }),
    {
      name: 'tacticus-player-data',
      version: CURRENT_SCHEMA_VERSION,
    },
  ),
);

export { ImportValidationError };
