import { describe, it, expect } from 'vitest';
import { summarizeLaneProgress } from './legendary-event';
import type { RawLaneBattleProgress } from './legendary-event';

describe('summarizeLaneProgress', () => {
  it('should sum encounterPoints across battles', () => {
    const battles: RawLaneBattleProgress[] = [
      { objectivesCleared: [0], highScore: 32, encounterPoints: 32 },
      { objectivesCleared: [0], highScore: 28, encounterPoints: 28 },
    ];
    expect(summarizeLaneProgress(battles).encounterPoints).toBe(60);
  });

  it('should count total objectives cleared across battles', () => {
    const battles: RawLaneBattleProgress[] = [
      { objectivesCleared: [0, 1], highScore: 32, encounterPoints: 32 },
      { objectivesCleared: [], highScore: 10, encounterPoints: 10 },
    ];
    expect(summarizeLaneProgress(battles).objectivesClearedCount).toBe(2);
  });

  it('should report how many battles were tracked', () => {
    const battles: RawLaneBattleProgress[] = [
      { objectivesCleared: [], highScore: 0, encounterPoints: 0 },
      { objectivesCleared: [], highScore: 0, encounterPoints: 0 },
      { objectivesCleared: [], highScore: 0, encounterPoints: 0 },
    ];
    expect(summarizeLaneProgress(battles).battlesTracked).toBe(3);
  });

  it('should handle an empty battle list', () => {
    expect(summarizeLaneProgress([])).toEqual({ encounterPoints: 0, objectivesClearedCount: 0, battlesTracked: 0 });
  });
});
