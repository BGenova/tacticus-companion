import { describe, it, expect } from 'vitest';
import { calculateCampaignProgress, getCampaignTypeLabel, groupCampaignsByName } from './campaign';
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

describe('groupCampaignsByName', () => {
  it('should group campaign progress entries sharing the same name', () => {
    const campaigns: CampaignProgress[] = [
      { campaignId: 'c1', name: 'Fall of Cadia', type: 'Standard', completedBattle: 10, totalBattles: 75 },
      { campaignId: 'c2', name: 'Fall of Cadia', type: 'Elite', completedBattle: 2, totalBattles: 50 },
      { campaignId: 'c3', name: 'Indomitus', type: 'Standard', completedBattle: 5, totalBattles: 75 },
    ];
    const groups = groupCampaignsByName(campaigns);
    expect(groups).toHaveLength(2);
    const cadia = groups.find((g) => g.name === 'Fall of Cadia');
    expect(cadia?.variants).toHaveLength(2);
    expect(cadia?.variants.map((v) => v.type).sort()).toEqual(['Elite', 'Standard']);
  });

  it('should fall back to campaignId when name is unknown', () => {
    const campaigns: CampaignProgress[] = [{ campaignId: 'raw-id', completedBattle: 1 }];
    const groups = groupCampaignsByName(campaigns);
    expect(groups[0].name).toBe('raw-id');
  });

  it('should default missing type to Standard', () => {
    const campaigns: CampaignProgress[] = [{ campaignId: 'c1', name: 'X', completedBattle: 1 }];
    const groups = groupCampaignsByName(campaigns);
    expect(groups[0].variants[0].type).toBe('Standard');
  });

  it('should include computed pct per variant', () => {
    const campaigns: CampaignProgress[] = [{ campaignId: 'c1', name: 'X', completedBattle: 30, totalBattles: 75 }];
    const groups = groupCampaignsByName(campaigns);
    expect(groups[0].variants[0].pct).toBe(40);
  });

  it('should return an empty array for no campaigns', () => {
    expect(groupCampaignsByName([])).toEqual([]);
  });
});
