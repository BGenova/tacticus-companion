/** A single lane battle's raw progress, as reported by the Tacticus API. */
export interface RawLaneBattleProgress {
  objectivesCleared: number[];
  highScore: number;
  encounterPoints: number;
}

export interface LaneProgressSummary {
  encounterPoints: number;
  objectivesClearedCount: number;
  battlesTracked: number;
}

/**
 * Aggregate a lane's per-battle progress into totals: encounter points
 * (drives event currency/points), how many individual objectives have been
 * cleared across all its battles, and how many battles have progress data.
 */
export function summarizeLaneProgress(battles: RawLaneBattleProgress[]): LaneProgressSummary {
  return {
    encounterPoints: battles.reduce((sum, b) => sum + b.encounterPoints, 0),
    objectivesClearedCount: battles.reduce((sum, b) => sum + b.objectivesCleared.length, 0),
    battlesTracked: battles.length,
  };
}

export interface LegendaryEventLaneProgress {
  laneId: number;
  laneName: string;
  encounterPoints: number;
  objectivesClearedCount: number;
  battlesTracked: number;
}

/** A player's progress in one Legendary Event (identified by the character it's tied to). */
export interface LegendaryEventProgress {
  characterId: string;
  currentPoints: number;
  currentCurrency: number;
  currentShards: number;
  currentClaimedChestIndex: number;
  lanes: LegendaryEventLaneProgress[];
}
