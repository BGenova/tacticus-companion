import { describe, it, expect } from 'vitest';
import { calculateCampaignProgress, getCampaignTypeLabel } from './campaign';
import type { CampaignProgress } from './campaign';

function makeCampaign(overrides: Partial<CampaignProgress> = {}): CampaignProgress {
  return {
    campaignId: 'campaign2',
    completedBattle: 0,
    ...overrides,
  };
}

describe('calculateCampaignProgress', () => {
  it('should compute a percentage when totalBattles is known', () => {
    const pct = calculateCampaignProgress(makeCampaign({ completedBattle: 30, totalBattles: 75 }));
    expect(pct).toBe(40);
  });

  it('should return null when totalBattles is unknown', () => {
    const pct = calculateCampaignProgress(makeCampaign({ completedBattle: 30 }));
    expect(pct).toBeNull();
  });

  it('should return null when totalBattles is 0', () => {
    const pct = calculateCampaignProgress(makeCampaign({ completedBattle: 0, totalBattles: 0 }));
    expect(pct).toBeNull();
  });

  it('should clamp to 100 when completedBattle exceeds totalBattles', () => {
    const pct = calculateCampaignProgress(makeCampaign({ completedBattle: 80, totalBattles: 75 }));
    expect(pct).toBe(100);
  });
});

describe('getCampaignTypeLabel', () => {
  it('should return French label for Standard', () => {
    expect(getCampaignTypeLabel('Standard')).toBe('Normale');
  });

  it('should return French label for Elite', () => {
    expect(getCampaignTypeLabel('Elite')).toBe('Élite');
  });

  it('should return French label for Mirror', () => {
    expect(getCampaignTypeLabel('Mirror')).toBe('Miroir');
  });

  it('should return French label for EliteMirror', () => {
    expect(getCampaignTypeLabel('EliteMirror')).toBe('Élite Miroir');
  });

  it('should fall back to the raw value for an unrecognized type', () => {
    expect(getCampaignTypeLabel('SomethingNew')).toBe('SomethingNew');
  });

  it('should return a generic fallback when type is undefined', () => {
    expect(getCampaignTypeLabel(undefined)).toBe('Campagne');
  });
});
