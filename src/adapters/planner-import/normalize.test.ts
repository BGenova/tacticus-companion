import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import {
  normalizeImport,
  parseImportJson,
  importPlayerData,
  ImportValidationError,
} from './normalize';

function loadFixture(name: string): unknown {
  const raw = readFileSync(
    resolve(__dirname, '../../data/fixtures', name),
    'utf-8',
  );
  return JSON.parse(raw);
}

function loadFixtureRaw(name: string): string {
  return readFileSync(
    resolve(__dirname, '../../data/fixtures', name),
    'utf-8',
  );
}

describe('parseImportJson', () => {
  it('should parse valid JSON string', () => {
    const result = parseImportJson('{"a":1}');
    expect(result).toEqual({ a: 1 });
  });

  it('should throw ImportValidationError for invalid JSON', () => {
    expect(() => parseImportJson('not json')).toThrow(ImportValidationError);
    expect(() => parseImportJson('not json')).toThrow('Invalid JSON');
  });

  it('should throw ImportValidationError for empty string', () => {
    expect(() => parseImportJson('')).toThrow(ImportValidationError);
  });
});

describe('normalizeImport', () => {
  it('should return PlayerData from valid minimal fixture', () => {
    const input = loadFixture('minimal-player.json');
    const result = normalizeImport(input);

    expect(result.schemaVersion).toBe(1);
    expect(result.profile.username).toBe('TestUser');
    expect(result.profile.level).toBe(47);
    expect(Object.keys(result.characters)).toHaveLength(2);
    expect(result.characters['bellator'].rank).toBe(3);
    expect(result.characters['certus'].rarity).toBe(4);
    expect(result.goals).toHaveLength(2);
    expect(result.goals[0].type).toBe('rank');
    expect(result.inventory.gold).toBe(50000);
    expect(Object.keys(result.campaigns)).toHaveLength(2);
  });

  it('should return PlayerData from empty fixture', () => {
    const input = loadFixture('empty-player.json');
    const result = normalizeImport(input);

    expect(result.schemaVersion).toBe(1);
    expect(Object.keys(result.characters)).toHaveLength(0);
    expect(result.goals).toEqual([]);
    expect(Object.keys(result.campaigns)).toHaveLength(0);
  });

  it('should throw ImportValidationError for invalid data', () => {
    const input = loadFixture('invalid-player.json');
    expect(() => normalizeImport(input)).toThrow(ImportValidationError);
  });

  it('should throw with descriptive issues for invalid data', () => {
    const input = loadFixture('invalid-player.json');
    try {
      normalizeImport(input);
      expect.fail('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(ImportValidationError);
      const err = e as ImportValidationError;
      expect(err.issues.length).toBeGreaterThan(0);
      expect(err.issues.some((i) => i.includes('schemaVersion'))).toBe(true);
    }
  });

  it('should throw for null input', () => {
    expect(() => normalizeImport(null)).toThrow(ImportValidationError);
  });

  it('should throw for undefined input', () => {
    expect(() => normalizeImport(undefined)).toThrow(ImportValidationError);
  });

  it('should throw for non-object input', () => {
    expect(() => normalizeImport('string')).toThrow(ImportValidationError);
    expect(() => normalizeImport(42)).toThrow(ImportValidationError);
  });

  it('should throw for missing required fields', () => {
    expect(() => normalizeImport({ schemaVersion: 1 })).toThrow(
      ImportValidationError,
    );
  });

  it('should throw for invalid goal type', () => {
    const input = loadFixture('minimal-player.json') as Record<string, unknown>;
    const modified = {
      ...input,
      goals: [{ id: 'g1', characterId: 'x', type: 'invalid', target: 1, priority: 1, status: 'active' }],
    };
    expect(() => normalizeImport(modified)).toThrow(ImportValidationError);
  });

  it('should accept and preserve optional campaign name/totalBattles/type fields', () => {
    const input = loadFixture('minimal-player.json') as Record<string, unknown>;
    const modified = {
      ...input,
      campaigns: {
        indomitus: { campaignId: 'indomitus', completedBattle: 42, medals: 85, name: 'Indomitus', totalBattles: 75, type: 'Standard' },
      },
    };
    const result = normalizeImport(modified);
    expect(result.campaigns['indomitus']).toMatchObject({ name: 'Indomitus', totalBattles: 75, type: 'Standard' });
  });

  it('should accept campaigns without the optional name/totalBattles/type fields', () => {
    const input = loadFixture('minimal-player.json');
    const result = normalizeImport(input);
    expect(result.campaigns['indomitus'].name).toBeUndefined();
    expect(result.campaigns['indomitus'].totalBattles).toBeUndefined();
  });

  it('should throw for invalid goal status', () => {
    const input = loadFixture('minimal-player.json') as Record<string, unknown>;
    const modified = {
      ...input,
      goals: [{ id: 'g1', characterId: 'x', type: 'rank', target: 1, priority: 1, status: 'invalid' }],
    };
    expect(() => normalizeImport(modified)).toThrow(ImportValidationError);
  });
});

describe('importPlayerData', () => {
  it('should parse and validate a raw JSON string', () => {
    const raw = loadFixtureRaw('minimal-player.json');
    const result = importPlayerData(raw);

    expect(result.profile.username).toBe('TestUser');
    expect(Object.keys(result.characters)).toHaveLength(2);
  });

  it('should throw for invalid JSON string', () => {
    expect(() => importPlayerData('{')).toThrow(ImportValidationError);
  });

  it('should throw for valid JSON but invalid schema', () => {
    expect(() => importPlayerData('{"foo":"bar"}')).toThrow(
      ImportValidationError,
    );
  });
});
