import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PlayerData, CharacterProgress, Goal, CampaignProgress, CharacterId } from '../domain';
import { CURRENT_SCHEMA_VERSION, findCharacterById, getGoalsForCharacter as selectGoalsForCharacter } from '../domain';
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
  getCharacterById: (id: CharacterId) => CharacterProgress | undefined;
  getGoalsForCharacter: (characterId: CharacterId) => Goal[];
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
      getCharacterById: (id) => findCharacterById(getCharactersValues(get().data.characters), id),
      getGoalsForCharacter: (characterId) => getGoalsForCharacterValues(get().data.goals, characterId),
    }),
    {
      name: 'tacticus-player-data',
      version: CURRENT_SCHEMA_VERSION,
    },
  ),
);

export { ImportValidationError };
