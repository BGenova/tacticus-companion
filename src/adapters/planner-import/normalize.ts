import type { PlayerData } from '../../domain';
import { playerDataSchema } from './schema';

export class ImportValidationError extends Error {
  public readonly issues: string[];

  constructor(issues: string[]) {
    super(`Import validation failed: ${issues.join('; ')}`);
    this.name = 'ImportValidationError';
    this.issues = issues;
  }
}

/**
 * Parse raw JSON string into a validated PlayerData object.
 * Throws ImportValidationError if the data is invalid.
 */
export function parseImportJson(raw: string): unknown {
  try {
    return JSON.parse(raw) as unknown;
  } catch {
    throw new ImportValidationError(['Invalid JSON']);
  }
}

/**
 * Validate and normalize an unknown object into PlayerData.
 * Throws ImportValidationError if validation fails.
 */
export function normalizeImport(data: unknown): PlayerData {
  const result = playerDataSchema.safeParse(data);

  if (!result.success) {
    const issues = result.error.issues.map(
      (i) => `${i.path.join('.')}: ${i.message}`,
    );
    throw new ImportValidationError(issues);
  }

  return result.data as PlayerData;
}

/**
 * Full import pipeline: parse JSON string → validate → return PlayerData.
 */
export function importPlayerData(raw: string): PlayerData {
  const parsed = parseImportJson(raw);
  return normalizeImport(parsed);
}
