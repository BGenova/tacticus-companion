/**
 * Source: svehera/tacticusplanner (https://github.com/svehera/tacticusplanner),
 * no explicit license declared on the repo. Vendored for personal, local-only
 * use in this project (never published/distributed) per user decision —
 * see Tacticus_Planner_Documentation_Base/13_FARMING_DATA_SOURCE.md.
 * Extracted 2026-09-12.
 */

export interface CampaignTypeConfig {
  energyCost: number;
  dailyBattleCount: number;
  dropRate: { common: number; uncommon: number; rare: number; epic: number; legendary: number; shard: number };
}

export const CAMPAIGN_TYPES: Record<string, CampaignTypeConfig> = {
  "SuperEarly": {
    "energyCost": 3,
    "dailyBattleCount": 3,
    "dropRate": {
      "common": 0.0,
      "uncommon": 0.0,
      "rare": 0.0,
      "epic": 0.0,
      "legendary": 0.0,
      "shard": 0.0
    }
  },
  "Early": {
    "energyCost": 5,
    "dailyBattleCount": 10,
    "dropRate": {
      "common": 0.8517,
      "uncommon": 0.666,
      "rare": 0.4,
      "epic": 0.167,
      "legendary": 0.1,
      "shard": 0.333
    }
  },
  "EarlyChars": {
    "energyCost": 5,
    "dailyBattleCount": 7,
    "dropRate": {
      "common": 0.8517,
      "uncommon": 0.666,
      "rare": 0.4,
      "epic": 0.167,
      "legendary": 0.1,
      "shard": 0.333
    }
  },
  "EarlyMirrorChars": {
    "energyCost": 6,
    "dailyBattleCount": 3,
    "dropRate": {
      "common": 0.9,
      "uncommon": 0.75,
      "rare": 0.5,
      "epic": 0.25,
      "legendary": 0.111,
      "shard": 0.3333
    }
  },
  "Normal": {
    "energyCost": 6,
    "dailyBattleCount": 10,
    "dropRate": {
      "common": 0.857,
      "uncommon": 0.666,
      "rare": 0.4,
      "epic": 0.167,
      "legendary": 0.1,
      "shard": 0.333
    }
  },
  "Mirror": {
    "energyCost": 6,
    "dailyBattleCount": 10,
    "dropRate": {
      "common": 0.9,
      "uncommon": 0.75,
      "rare": 0.5,
      "epic": 0.25,
      "legendary": 0.111,
      "shard": 0.3333
    }
  },
  "Elite": {
    "energyCost": 10,
    "dailyBattleCount": 6,
    "dropRate": {
      "common": 1.5,
      "uncommon": 1.25,
      "rare": 1.083,
      "epic": 0.667,
      "legendary": 0.33,
      "shard": 1.08
    }
  },
  "Onslaught": {
    "energyCost": 0,
    "dailyBattleCount": 3,
    "dropRate": {
      "common": 0,
      "uncommon": 0,
      "rare": 0,
      "epic": 0,
      "legendary": 0,
      "shard": 0
    }
  },
  "Standard": {
    "energyCost": 6,
    "dailyBattleCount": 10,
    "dropRate": {
      "common": 0.9,
      "uncommon": 0.75,
      "rare": 0.5,
      "epic": 0.25,
      "legendary": 0.111,
      "shard": 0.3333
    }
  },
  "Extremis": {
    "energyCost": 6,
    "dailyBattleCount": 10,
    "dropRate": {
      "common": 0.9375,
      "uncommon": 0.8,
      "rare": 0.666,
      "epic": 0.333,
      "legendary": 0.142,
      "mythic": 0.12,
      "shard": 0.615,
      "mythicShard": 214
    }
  }
};
