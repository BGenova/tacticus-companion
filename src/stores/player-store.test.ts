import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { usePlayerStore } from './player-store';
import { ImportValidationError } from '../adapters/planner-import';
import { CURRENT_SCHEMA_VERSION } from '../domain';

function loadFixtureRaw(name: string): string {
  return readFileSync(
    resolve(__dirname, '../data/fixtures', name),
    'utf-8',
  );
}

beforeEach(() => {
  usePlayerStore.getState().reset();
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
