/**
 * Source: svehera/tacticusplanner (https://github.com/svehera/tacticusplanner),
 * no explicit license declared on the repo. Vendored for personal, local-only
 * use in this project (never published/distributed) per user decision —
 * see Tacticus_Planner_Documentation_Base/13_FARMING_DATA_SOURCE.md.
 * Extracted 2026-09-12.
 */

export interface FarmReward {
  id: string;
}
export interface FarmNodeGuaranteedReward extends FarmReward {
  min: number;
  max: number;
}
export interface FarmNodePotentialReward extends FarmReward {
  effectiveRate: number;
}
export interface FarmNode {
  campaign: string;
  campaignType: string;
  nodeNumber: number;
  energyCost: number;
  /** Rewards always granted on completion. */
  guaranteed: FarmNodeGuaranteedReward[];
  /** Rewards with a chance to drop (effectiveRate is the probability, 0-1). */
  potential: FarmNodePotentialReward[];
}

/** Trimmed from the source's per-node battle data — enemy composition and
 * other non-farming fields are dropped, keeping only what's needed to know
 * where to farm a given material/shard and at what energy cost. */
export const FARM_NODES: Record<string, FarmNode> = {
  "I01": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 1,
    "energyCost": 0,
    "guaranteed": [
      {
        "id": "shards_ultraInceptorSgt",
        "min": 15,
        "max": 15
      }
    ],
    "potential": []
  },
  "I02": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 2,
    "energyCost": 0,
    "guaranteed": [
      {
        "id": "shards_ultraInceptorSgt",
        "min": 25,
        "max": 25
      }
    ],
    "potential": []
  },
  "I03": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 3,
    "energyCost": 0,
    "guaranteed": [
      {
        "id": "shards_ultraEliminatorSgt",
        "min": 15,
        "max": 15
      }
    ],
    "potential": []
  },
  "I04": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 4,
    "energyCost": 0,
    "guaranteed": [
      {
        "id": "shards_ultraEliminatorSgt",
        "min": 25,
        "max": 25
      }
    ],
    "potential": []
  },
  "I05": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 5,
    "energyCost": 0,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 10
      }
    ],
    "potential": []
  },
  "I06": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 6,
    "energyCost": 3,
    "guaranteed": [
      {
        "id": "gold",
        "min": 5,
        "max": 10
      }
    ],
    "potential": []
  },
  "I07": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 7,
    "energyCost": 3,
    "guaranteed": [
      {
        "id": "gold",
        "min": 5,
        "max": 10
      }
    ],
    "potential": []
  },
  "I08": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 8,
    "energyCost": 3,
    "guaranteed": [
      {
        "id": "gold",
        "min": 5,
        "max": 10
      }
    ],
    "potential": []
  },
  "I09": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 9,
    "energyCost": 3,
    "guaranteed": [
      {
        "id": "gold",
        "min": 5,
        "max": 10
      }
    ],
    "potential": []
  },
  "I10": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 10,
    "energyCost": 3,
    "guaranteed": [
      {
        "id": "gold",
        "min": 5,
        "max": 10
      }
    ],
    "potential": []
  },
  "I11": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 11,
    "energyCost": 3,
    "guaranteed": [
      {
        "id": "gold",
        "min": 5,
        "max": 10
      }
    ],
    "potential": []
  },
  "I12": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 12,
    "energyCost": 3,
    "guaranteed": [
      {
        "id": "gold",
        "min": 5,
        "max": 10
      }
    ],
    "potential": []
  },
  "I13": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 13,
    "energyCost": 3,
    "guaranteed": [
      {
        "id": "gold",
        "min": 5,
        "max": 10
      }
    ],
    "potential": []
  },
  "I14": {
    "campaign": "Indomitus",
    "campaignType": "SuperEarly",
    "nodeNumber": 14,
    "energyCost": 3,
    "guaranteed": [
      {
        "id": "gold",
        "min": 5,
        "max": 10
      }
    ],
    "potential": []
  },
  "I15": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 15,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "shards_necroWarden",
        "effectiveRate": 0.429
      }
    ]
  },
  "I16": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 16,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "upgHpC004",
        "effectiveRate": 0.875
      }
    ]
  },
  "I17": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 17,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "upgDmgC002",
        "effectiveRate": 0.875
      }
    ]
  },
  "I18": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 18,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "shards_ultraTigurius",
        "effectiveRate": 0.429
      }
    ]
  },
  "I19": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 19,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "upgArmC001",
        "effectiveRate": 0.875
      }
    ]
  },
  "I20": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 20,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "upgHpU001",
        "effectiveRate": 0.714
      }
    ]
  },
  "I21": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 21,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "shards_ultraEliminatorSgt",
        "effectiveRate": 0.429
      }
    ]
  },
  "I22": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 22,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "upgDmgC009",
        "effectiveRate": 0.875
      }
    ]
  },
  "I23": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 23,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "upgHpU006",
        "effectiveRate": 0.714
      }
    ]
  },
  "I24": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 24,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "shards_ultraInceptorSgt",
        "effectiveRate": 0.429
      }
    ]
  },
  "I25": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 25,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "upgDmgU004",
        "effectiveRate": 0.714
      }
    ]
  },
  "I26": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 26,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "upgArmU005",
        "effectiveRate": 0.714
      }
    ]
  },
  "I27": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 27,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "shards_ultraApothecary",
        "effectiveRate": 0.429
      }
    ]
  },
  "I28": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 28,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "upgArmC003",
        "effectiveRate": 0.875
      }
    ]
  },
  "I29": {
    "campaign": "Indomitus",
    "campaignType": "Early",
    "nodeNumber": 29,
    "energyCost": 5,
    "guaranteed": [
      {
        "id": "gold",
        "min": 10,
        "max": 15
      }
    ],
    "potential": [
      {
        "id": "shards_adeptRetributor",
        "effectiveRate": 0.429
      }
    ]
  },
  "I30": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "shards_necroDestroyer",
        "effectiveRate": 0.429
      }
    ]
  },
  "I31": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 31,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgArmU002",
        "effectiveRate": 0.714
      }
    ]
  },
  "I32": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 32,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgArmC002",
        "effectiveRate": 0.875
      }
    ]
  },
  "I33": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 33,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgHpC003",
        "effectiveRate": 0.875
      }
    ]
  },
  "I34": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 34,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgHpU003",
        "effectiveRate": 0.714
      }
    ]
  },
  "I35": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 35,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgDmgU006",
        "effectiveRate": 0.714
      }
    ]
  },
  "I36": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 36,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgDmgU012",
        "effectiveRate": 0.714
      }
    ]
  },
  "I37": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 37,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgHpC001",
        "effectiveRate": 0.875
      }
    ]
  },
  "I38": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 38,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgDmgC001",
        "effectiveRate": 0.875
      }
    ]
  },
  "I39": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 39,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgHpC006",
        "effectiveRate": 0.875
      }
    ]
  },
  "I40": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 40,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgArmU001",
        "effectiveRate": 0.714
      }
    ]
  },
  "I41": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 41,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgDmgU005",
        "effectiveRate": 0.714
      }
    ]
  },
  "I42": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 42,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgDmgU009",
        "effectiveRate": 0.714
      }
    ]
  },
  "I43": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 43,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgDmgU010",
        "effectiveRate": 0.714
      }
    ]
  },
  "I44": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 44,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 12,
        "max": 18
      }
    ],
    "potential": [
      {
        "id": "upgHpC014",
        "effectiveRate": 0.875
      }
    ]
  },
  "I45": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 45,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "shards_necroSpyder",
        "effectiveRate": 0.429
      }
    ]
  },
  "I46": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 46,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgDmgC003",
        "effectiveRate": 0.875
      }
    ]
  },
  "I47": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 47,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgDmgC005",
        "effectiveRate": 0.875
      }
    ]
  },
  "I48": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 48,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgArmC004",
        "effectiveRate": 0.875
      }
    ]
  },
  "I49": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 49,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgHpC002",
        "effectiveRate": 0.875
      }
    ]
  },
  "I50": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 50,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgDmgC004",
        "effectiveRate": 0.875
      }
    ]
  },
  "I51": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 51,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgDmgC006",
        "effectiveRate": 0.875
      }
    ]
  },
  "I52": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 52,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgDmgC011",
        "effectiveRate": 0.875
      }
    ]
  },
  "I53": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 53,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgHpC007",
        "effectiveRate": 0.875
      }
    ]
  },
  "I54": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 54,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgDmgU003",
        "effectiveRate": 0.714
      }
    ]
  },
  "I55": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 55,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgDmgC007",
        "effectiveRate": 0.875
      }
    ]
  },
  "I56": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 56,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgDmgC008",
        "effectiveRate": 0.875
      }
    ]
  },
  "I57": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 57,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgArmC005",
        "effectiveRate": 0.875
      }
    ]
  },
  "I58": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 58,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgHpU002",
        "effectiveRate": 0.714
      }
    ]
  },
  "I59": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 59,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 14,
        "max": 21
      }
    ],
    "potential": [
      {
        "id": "upgHpC008",
        "effectiveRate": 0.875
      }
    ]
  },
  "I60": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 60,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "shards_necroPlasmancer",
        "effectiveRate": 0.429
      }
    ]
  },
  "I61": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 61,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgHpU007",
        "effectiveRate": 0.714
      }
    ]
  },
  "I62": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 62,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgDmgR003",
        "effectiveRate": 0.5
      }
    ]
  },
  "I63": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 63,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgHpR011",
        "effectiveRate": 0.5
      }
    ]
  },
  "I64": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 64,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgArmC007",
        "effectiveRate": 0.875
      }
    ]
  },
  "I65": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 65,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgHpU009",
        "effectiveRate": 0.714
      }
    ]
  },
  "I66": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 66,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgArmU007",
        "effectiveRate": 0.714
      }
    ]
  },
  "I67": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 67,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgHpC009",
        "effectiveRate": 0.875
      }
    ]
  },
  "I68": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 68,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgArmU008",
        "effectiveRate": 0.714
      }
    ]
  },
  "I69": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 69,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgHpU008",
        "effectiveRate": 0.714
      }
    ]
  },
  "I70": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 70,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgDmgR002",
        "effectiveRate": 0.5
      }
    ]
  },
  "I71": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 71,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgHpR002",
        "effectiveRate": 0.5
      }
    ]
  },
  "I72": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 72,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgDmgC015",
        "effectiveRate": 0.875
      }
    ]
  },
  "I73": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 73,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgArmE013",
        "effectiveRate": 0.286
      }
    ]
  },
  "I74": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 74,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 16,
        "max": 24
      }
    ],
    "potential": [
      {
        "id": "upgArmR030",
        "effectiveRate": 0.5
      }
    ]
  },
  "I75": {
    "campaign": "Indomitus",
    "campaignType": "Normal",
    "nodeNumber": 75,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 20,
        "max": 30
      }
    ],
    "potential": [
      {
        "id": "shards_necroOverlord",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoC01": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC010",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC02": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC014",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC03": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC014",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC04": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpU015",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC05": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC015",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC06": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC013",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC07": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC013",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC08": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC013",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC09": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC007",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC10": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC002",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC11": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmR006",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC12": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC006",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC13": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC012",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC14": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC004",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC15": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "shards_astraBullgryn",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoC16": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmC003",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC17": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpR018",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC18": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC007",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC19": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC010",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC20": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC001",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC21": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC015",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC22": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpR019",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC23": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmU009",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC24": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC003",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC25": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC016",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC26": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmC012",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC27": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC003",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC28": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmU002",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC29": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC002",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC30": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "shards_astraPrimarisPsy",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoC31": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 31,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU010",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC32": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 32,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgC009",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC33": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 33,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU003",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC34": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 34,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU009",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC35": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 35,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU004",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC36": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 36,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU009",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC37": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 37,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU013",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC38": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 38,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU013",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC39": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 39,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU007",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC40": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 40,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU014",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC41": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 41,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU012",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC42": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 42,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU016",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC43": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 43,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU017",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC44": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 44,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgC011",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC45": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 45,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "shards_astraOrdnance",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoC46": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 46,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmC001",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC47": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 47,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgC004",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC48": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 48,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmC011",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC49": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 49,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpC005",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC50": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 50,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpC001",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC51": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 51,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR031",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC52": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 52,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpC017",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC53": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 53,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR025",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC54": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 54,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR023",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC55": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 55,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgC005",
        "effectiveRate": 0.875
      }
    ]
  },
  "FoC56": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 56,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR023",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC57": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 57,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR022",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC58": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 58,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU014",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC59": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 59,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR009",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC60": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 60,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "shards_adeptCelestine",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoC61": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 61,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpE017",
        "effectiveRate": 0.286
      }
    ]
  },
  "FoC62": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 62,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgR005",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC63": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 63,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmU006",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoC64": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 64,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR005",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC65": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 65,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR023",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC66": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 66,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR001",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC67": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 67,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR007",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC68": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 68,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR024",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC69": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 69,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgR006",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC70": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 70,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR025",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC71": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 71,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR043",
        "effectiveRate": 0.5
      }
    ]
  },
  "FoC72": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 72,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpE012",
        "effectiveRate": 0.286
      }
    ]
  },
  "FoC73": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 73,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgE003",
        "effectiveRate": 0.286
      }
    ]
  },
  "FoC74": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 74,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmE009",
        "effectiveRate": 0.286
      }
    ]
  },
  "FoC75": {
    "campaign": "Fall of Cadia",
    "campaignType": "Normal",
    "nodeNumber": 75,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_astraCreed",
        "effectiveRate": 0.429
      }
    ]
  },
  "O01": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC015",
        "effectiveRate": 0.875
      }
    ]
  },
  "O02": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC014",
        "effectiveRate": 0.875
      }
    ]
  },
  "O03": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC013",
        "effectiveRate": 0.875
      }
    ]
  },
  "O04": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC014",
        "effectiveRate": 0.875
      }
    ]
  },
  "O05": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC011",
        "effectiveRate": 0.875
      }
    ]
  },
  "O06": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC012",
        "effectiveRate": 0.875
      }
    ]
  },
  "O07": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC008",
        "effectiveRate": 0.875
      }
    ]
  },
  "O08": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC012",
        "effectiveRate": 0.875
      }
    ]
  },
  "O09": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgU014",
        "effectiveRate": 0.714
      }
    ]
  },
  "O10": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmU013",
        "effectiveRate": 0.714
      }
    ]
  },
  "O11": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC013",
        "effectiveRate": 0.875
      }
    ]
  },
  "O12": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmU012",
        "effectiveRate": 0.714
      }
    ]
  },
  "O13": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC017",
        "effectiveRate": 0.875
      }
    ]
  },
  "O14": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC013",
        "effectiveRate": 0.875
      }
    ]
  },
  "O15": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "shards_templAggressor",
        "effectiveRate": 0.429
      }
    ]
  },
  "O16": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC016",
        "effectiveRate": 0.875
      }
    ]
  },
  "O17": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmC006",
        "effectiveRate": 0.875
      }
    ]
  },
  "O18": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpU015",
        "effectiveRate": 0.714
      }
    ]
  },
  "O19": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgU019",
        "effectiveRate": 0.714
      }
    ]
  },
  "O20": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmU005",
        "effectiveRate": 0.714
      }
    ]
  },
  "O21": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpU002",
        "effectiveRate": 0.714
      }
    ]
  },
  "O22": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgR007",
        "effectiveRate": 0.5
      }
    ]
  },
  "O23": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmU014",
        "effectiveRate": 0.714
      }
    ]
  },
  "O24": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpU016",
        "effectiveRate": 0.714
      }
    ]
  },
  "O25": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpU017",
        "effectiveRate": 0.714
      }
    ]
  },
  "O26": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmU001",
        "effectiveRate": 0.714
      }
    ]
  },
  "O27": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpU014",
        "effectiveRate": 0.714
      }
    ]
  },
  "O28": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpU006",
        "effectiveRate": 0.714
      }
    ]
  },
  "O29": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmR015",
        "effectiveRate": 0.5
      }
    ]
  },
  "O30": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "shards_templSwordBrother",
        "effectiveRate": 0.429
      }
    ]
  },
  "O31": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 31,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU012",
        "effectiveRate": 0.714
      }
    ]
  },
  "O32": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 32,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR014",
        "effectiveRate": 0.5
      }
    ]
  },
  "O33": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 33,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU008",
        "effectiveRate": 0.714
      }
    ]
  },
  "O34": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 34,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR018",
        "effectiveRate": 0.5
      }
    ]
  },
  "O35": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 35,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR026",
        "effectiveRate": 0.5
      }
    ]
  },
  "O36": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 36,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR036",
        "effectiveRate": 0.5
      }
    ]
  },
  "O37": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 37,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmR005",
        "effectiveRate": 0.5
      }
    ]
  },
  "O38": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 38,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR024",
        "effectiveRate": 0.5
      }
    ]
  },
  "O39": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 39,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR002",
        "effectiveRate": 0.5
      }
    ]
  },
  "O40": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 40,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgE001",
        "effectiveRate": 0.286
      }
    ]
  },
  "O41": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 41,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR021",
        "effectiveRate": 0.5
      }
    ]
  },
  "O42": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 42,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpE003",
        "effectiveRate": 0.286
      }
    ]
  },
  "O43": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 43,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgE004",
        "effectiveRate": 0.286
      }
    ]
  },
  "O44": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 44,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR033",
        "effectiveRate": 0.5
      }
    ]
  },
  "O45": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 45,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "shards_templAncient",
        "effectiveRate": 0.429
      }
    ]
  },
  "O46": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 46,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR010",
        "effectiveRate": 0.5
      }
    ]
  },
  "O47": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 47,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR021",
        "effectiveRate": 0.5
      }
    ]
  },
  "O48": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 48,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR022",
        "effectiveRate": 0.5
      }
    ]
  },
  "O49": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 49,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR008",
        "effectiveRate": 0.5
      }
    ]
  },
  "O50": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 50,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR022",
        "effectiveRate": 0.5
      }
    ]
  },
  "O51": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 51,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR026",
        "effectiveRate": 0.5
      }
    ]
  },
  "O52": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 52,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR033",
        "effectiveRate": 0.5
      }
    ]
  },
  "O53": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 53,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR036",
        "effectiveRate": 0.5
      }
    ]
  },
  "O54": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 54,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR021",
        "effectiveRate": 0.5
      }
    ]
  },
  "O55": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 55,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU009",
        "effectiveRate": 0.714
      }
    ]
  },
  "O56": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 56,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU003",
        "effectiveRate": 0.714
      }
    ]
  },
  "O57": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 57,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmC003",
        "effectiveRate": 0.875
      }
    ]
  },
  "O58": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 58,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmU002",
        "effectiveRate": 0.714
      }
    ]
  },
  "O59": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 59,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpC006",
        "effectiveRate": 0.875
      }
    ]
  },
  "O60": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 60,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "shards_templChampion",
        "effectiveRate": 0.429
      }
    ]
  },
  "O61": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 61,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR036",
        "effectiveRate": 0.5
      }
    ]
  },
  "O62": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 62,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC002",
        "effectiveRate": 0.875
      }
    ]
  },
  "O63": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 63,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC005",
        "effectiveRate": 0.875
      }
    ]
  },
  "O64": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 64,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC010",
        "effectiveRate": 0.875
      }
    ]
  },
  "O65": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 65,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC011",
        "effectiveRate": 0.875
      }
    ]
  },
  "O66": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 66,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC009",
        "effectiveRate": 0.875
      }
    ]
  },
  "O67": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 67,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpE015",
        "effectiveRate": 0.286
      }
    ]
  },
  "O68": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 68,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC007",
        "effectiveRate": 0.875
      }
    ]
  },
  "O69": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 69,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgU010",
        "effectiveRate": 0.714
      }
    ]
  },
  "O70": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 70,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgU004",
        "effectiveRate": 0.714
      }
    ]
  },
  "O71": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 71,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC004",
        "effectiveRate": 0.875
      }
    ]
  },
  "O72": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 72,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR002",
        "effectiveRate": 0.5
      }
    ]
  },
  "O73": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 73,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmE010",
        "effectiveRate": 0.286
      }
    ]
  },
  "O74": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 74,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR019",
        "effectiveRate": 0.5
      }
    ]
  },
  "O75": {
    "campaign": "Octarius",
    "campaignType": "Normal",
    "nodeNumber": 75,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_templHelbrecht",
        "effectiveRate": 0.429
      }
    ]
  },
  "SH01": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC008",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH02": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC016",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH03": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC015",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH04": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC013",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH05": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC013",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH06": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC005",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH07": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC010",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH08": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC015",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH09": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC014",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH10": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC004",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH11": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC007",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH12": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC004",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH13": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC017",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH14": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpU017",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH15": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "shards_thousTerminator",
        "effectiveRate": 0.429
      }
    ]
  },
  "SH16": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgU012",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH17": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmU002",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH18": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpU007",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH19": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC003",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH20": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmU014",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH21": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC011",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH22": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmU013",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH23": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgU010",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH24": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpU016",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH25": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmC002",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH26": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpU009",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH27": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpU015",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH28": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgU009",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH29": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpR018",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH30": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "shards_thousInfernalMaster",
        "effectiveRate": 0.429
      }
    ]
  },
  "SH31": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 31,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmR029",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH32": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 32,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR028",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH33": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 33,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmR006",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH34": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 34,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU002",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH35": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 35,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU009",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH36": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 36,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU013",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH37": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 37,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR032",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH38": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 38,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR031",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH39": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 39,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR014",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH40": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 40,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR001",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH41": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 41,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR029",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH42": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 42,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR005",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH43": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 43,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU005",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH44": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 44,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR028",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH45": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 45,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "shards_thousTzaangor",
        "effectiveRate": 0.429
      }
    ]
  },
  "SH46": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 46,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR032",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH47": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 47,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpC001",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH48": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 48,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR006",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH49": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 49,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpC007",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH50": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 50,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR031",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH51": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 51,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgC008",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH52": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 52,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR007",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH53": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 53,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU019",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH54": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 54,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR005",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH55": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 55,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU001",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH56": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 56,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR032",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH57": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 57,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR029",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH58": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 58,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR028",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH59": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 59,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmE008",
        "effectiveRate": 0.286
      }
    ]
  },
  "SH60": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 60,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "shards_thousSorcerer",
        "effectiveRate": 0.429
      }
    ]
  },
  "SH61": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 61,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC009",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH62": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 62,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR031",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH63": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 63,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR037",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH64": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 64,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgR037",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH65": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 65,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmU006",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH66": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 66,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC006",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH67": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 67,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgE010",
        "effectiveRate": 0.286
      }
    ]
  },
  "SH68": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 68,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpU001",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH69": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 69,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC001",
        "effectiveRate": 0.875
      }
    ]
  },
  "SH70": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 70,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR037",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH71": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 71,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR008",
        "effectiveRate": 0.5
      }
    ]
  },
  "SH72": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 72,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmU007",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH73": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 73,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpE012",
        "effectiveRate": 0.286
      }
    ]
  },
  "SH74": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 74,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmU008",
        "effectiveRate": 0.714
      }
    ]
  },
  "SH75": {
    "campaign": "Saim-Hann",
    "campaignType": "Normal",
    "nodeNumber": 75,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_thousAhriman",
        "effectiveRate": 0.429
      }
    ]
  },
  "IM01": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC006",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM02": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC012",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM03": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC010",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM04": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC014",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM05": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpU012",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM06": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgU014",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM07": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpU014",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM08": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmU012",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM09": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmU006",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM10": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmU009",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM11": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpU013",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM12": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmR006",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM13": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM14": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpR018",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM15": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "shards_adeptRetributor",
        "effectiveRate": 0.429
      }
    ]
  },
  "IM16": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpR007",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM17": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpR008",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM18": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM19": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgR006",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM20": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM21": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC009",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM22": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgR009",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM23": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpR014",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM24": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC013",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM25": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmR030",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM26": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgE003",
        "effectiveRate": 0.4
      }
    ]
  },
  "IM27": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC006",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM28": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgE001",
        "effectiveRate": 0.4
      }
    ]
  },
  "IM29": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC015",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM30": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "shards_ultraInceptorSgt",
        "effectiveRate": 0.429
      }
    ]
  },
  "IM31": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 31,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpE003",
        "effectiveRate": 0.4
      }
    ]
  },
  "IM32": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 32,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR040",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM33": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 33,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR022",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM34": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 34,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR034",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM35": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 35,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR002",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM36": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 36,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR035",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM37": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 37,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU019",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM38": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 38,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR027",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM39": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 39,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR027",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM40": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 40,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU007",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM41": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 41,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU002",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM42": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 42,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmC007",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM43": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 43,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR011",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM44": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 44,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR003",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM45": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 45,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "shards_ultraEliminatorSgt",
        "effectiveRate": 0.429
      }
    ]
  },
  "IM46": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 46,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU007",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM47": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 47,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpC008",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM48": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 48,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR035",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM49": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 49,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmC005",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM50": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 50,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgC008",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM51": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 51,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgC007",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM52": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 52,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU003",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM53": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 53,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpC007",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM54": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 54,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR015",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM55": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 55,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR022",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM56": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 56,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgC004",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM57": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 57,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpC002",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM58": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 58,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmC004",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM59": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 59,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgC010",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM60": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 60,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "shards_ultraTigurius",
        "effectiveRate": 0.429
      }
    ]
  },
  "IM61": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 61,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR035",
        "effectiveRate": 0.571
      }
    ]
  },
  "IM62": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 62,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmU001",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM63": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 63,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgU011",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM64": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 64,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgU010",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM65": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 65,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgU009",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM66": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 66,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC005",
        "effectiveRate": 0.929
      }
    ]
  },
  "IM67": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 67,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgU005",
        "effectiveRate": 0.8
      }
    ]
  },
  "IM68": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 68,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL115",
        "effectiveRate": 0.2
      }
    ]
  },
  "IM69": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 69,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL114",
        "effectiveRate": 0.2
      }
    ]
  },
  "IM70": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 70,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL100",
        "effectiveRate": 0.2
      }
    ]
  },
  "IM71": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 71,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL117",
        "effectiveRate": 0.2
      }
    ]
  },
  "IM72": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 72,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL112",
        "effectiveRate": 0.2
      }
    ]
  },
  "IM73": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 73,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL010",
        "effectiveRate": 0.2
      }
    ]
  },
  "IM74": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 74,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmE008",
        "effectiveRate": 0.4
      }
    ]
  },
  "IM75": {
    "campaign": "Indomitus Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 75,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_ultraCalgar",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCM01": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC001",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM02": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC001",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM03": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgU012",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM04": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgU019",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM05": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmU007",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM06": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM07": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC002",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM08": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmU002",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM09": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM10": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmU005",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM11": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgU004",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM12": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpU006",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM13": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC016",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM14": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpU001",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM15": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "shards_blackTerminator",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCM16": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmC001",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM17": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC002",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM18": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC004",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM19": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC009",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM20": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC015",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM21": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC014",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM22": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmC006",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM23": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC012",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM24": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC010",
        "effectiveRate": 0.929
      }
    ]
  },
  "FoCM25": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgE010",
        "effectiveRate": 0.4
      }
    ]
  },
  "FoCM26": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmE010",
        "effectiveRate": 0.4
      }
    ]
  },
  "FoCM27": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpE012",
        "effectiveRate": 0.4
      }
    ]
  },
  "FoCM28": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgE011",
        "effectiveRate": 0.4
      }
    ]
  },
  "FoCM29": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgE004",
        "effectiveRate": 0.4
      }
    ]
  },
  "FoCM30": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "shards_blackPossession",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCM31": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 31,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpE003",
        "effectiveRate": 0.4
      }
    ]
  },
  "FoCM32": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 32,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR006",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM33": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 33,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR040",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM34": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 34,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU017",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM35": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 35,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU014",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM36": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 36,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgE001",
        "effectiveRate": 0.4
      }
    ]
  },
  "FoCM37": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 37,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmR034",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM38": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 38,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmR010",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM39": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 39,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU015",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM40": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 40,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmR006",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM41": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 41,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM42": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 42,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR019",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM43": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 43,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR007",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM44": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 44,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR023",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM45": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 45,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "shards_blackObliterator",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCM46": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 46,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR008",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM47": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 47,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM48": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 48,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR040",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM49": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 49,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM50": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 50,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR027",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM51": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 51,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR009",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM52": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 52,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR014",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM53": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 53,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR009",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM54": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 54,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU012",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM55": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 55,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR023",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM56": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 56,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU014",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM57": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 57,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU014",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM58": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 58,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmU012",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM59": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 59,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR025",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM60": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 60,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "shards_blackHaarken",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCM61": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 61,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmU006",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM62": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 62,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL107",
        "effectiveRate": 0.2
      }
    ]
  },
  "FoCM63": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 63,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpU013",
        "effectiveRate": 0.8
      }
    ]
  },
  "FoCM64": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 64,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgR024",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM65": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 65,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR023",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM66": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 66,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL105",
        "effectiveRate": 0.2
      }
    ]
  },
  "FoCM67": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 67,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR022",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM68": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 68,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL116",
        "effectiveRate": 0.2
      }
    ]
  },
  "FoCM69": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 69,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL102",
        "effectiveRate": 0.2
      }
    ]
  },
  "FoCM70": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 70,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR025",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCM71": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 71,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL103",
        "effectiveRate": 0.2
      }
    ]
  },
  "FoCM72": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 72,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL104",
        "effectiveRate": 0.2
      }
    ]
  },
  "FoCM73": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 73,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpE015",
        "effectiveRate": 0.4
      }
    ]
  },
  "FoCM74": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 74,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpE017",
        "effectiveRate": 0.4
      }
    ]
  },
  "FoCM75": {
    "campaign": "Fall of Cadia Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 75,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_blackAbaddon",
        "effectiveRate": 0.429
      }
    ]
  },
  "OM01": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC001",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM02": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM03": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC012",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM04": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC002",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM05": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC006",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM06": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC007",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM07": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC006",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM08": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC014",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM09": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC007",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM10": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC011",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM11": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC002",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM12": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC017",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM13": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC015",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM14": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC009",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM15": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "shards_orksKillaKan",
        "effectiveRate": 0.429
      }
    ]
  },
  "OM16": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC013",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM17": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC001",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM18": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM19": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC010",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM20": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM21": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC013",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM22": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmC013",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM23": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmU014",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM24": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmU009",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM25": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmU012",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM26": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC001",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM27": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmC004",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM28": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgU003",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM29": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgU010",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM30": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "shards_orksBigMek",
        "effectiveRate": 0.429
      }
    ]
  },
  "OM31": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 31,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmC002",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM32": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 32,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgC004",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM33": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 33,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU016",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM34": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 34,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU013",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM35": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 35,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmC012",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM36": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 36,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU009",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM37": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 37,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM38": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 38,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR018",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM39": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 39,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU005",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM40": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 40,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU001",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM41": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 41,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR007",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM42": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 42,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU015",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM43": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 43,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU012",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM44": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 44,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU002",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM45": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 45,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "shards_orksRuntherd",
        "effectiveRate": 0.429
      }
    ]
  },
  "OM46": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 46,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgC005",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM47": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 47,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU017",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM48": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 48,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR003",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM49": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 49,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM50": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 50,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM51": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 51,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU006",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM52": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 52,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR002",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM53": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 53,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR026",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM54": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 54,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR031",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM55": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 55,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR002",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM56": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 56,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR033",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM57": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 57,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR019",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM58": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 58,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU007",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM59": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 59,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR021",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM60": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 60,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "shards_orksNob",
        "effectiveRate": 0.429
      }
    ]
  },
  "OM61": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 61,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR010",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM62": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 62,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpU001",
        "effectiveRate": 0.8
      }
    ]
  },
  "OM63": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 63,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR021",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM64": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 64,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgR031",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM65": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 65,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC015",
        "effectiveRate": 0.929
      }
    ]
  },
  "OM66": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 66,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR021",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM67": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 67,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR024",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM68": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 68,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL113",
        "effectiveRate": 0.2
      }
    ]
  },
  "OM69": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 69,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR026",
        "effectiveRate": 0.571
      }
    ]
  },
  "OM70": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 70,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL101",
        "effectiveRate": 0.2
      }
    ]
  },
  "OM71": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 71,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL111",
        "effectiveRate": 0.2
      }
    ]
  },
  "OM72": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 72,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL106",
        "effectiveRate": 0.2
      }
    ]
  },
  "OM73": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 73,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmE013",
        "effectiveRate": 0.4
      }
    ]
  },
  "OM74": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 74,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL099",
        "effectiveRate": 0.2
      }
    ]
  },
  "OM75": {
    "campaign": "Octarius Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 75,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_orksWarboss",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHM01": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC010",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM02": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC014",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM03": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC005",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM04": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC004",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM05": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC013",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM06": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC016",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM07": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC017",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM08": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC008",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM09": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC011",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM10": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC015",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM11": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC007",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM12": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC004",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM13": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpU009",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM14": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpR008",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM15": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "shards_eldarRanger",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHM16": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM17": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC011",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM18": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC013",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM19": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC004",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM20": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgU003",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM21": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmC012",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM22": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC001",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM23": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpC009",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM24": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgC002",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM25": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmU005",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM26": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpU014",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM27": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgArmU009",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM28": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgDmgU019",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM29": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 44,
        "max": 74
      }
    ],
    "potential": [
      {
        "id": "upgHpR014",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM30": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "shards_eldarAutarch",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHM31": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 31,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmR028",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM32": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 32,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR029",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM33": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 33,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmC007",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM34": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 34,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpC005",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM35": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 35,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM36": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 36,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgC005",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM37": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 37,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM38": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 38,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR039",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM39": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 39,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmC006",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM40": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 40,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpR038",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM41": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 41,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU012",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM42": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 42,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM43": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 43,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR028",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM44": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 44,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR029",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM45": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 45,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "shards_eldarFarseer",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHM46": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 46,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR007",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM47": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 47,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmU002",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM48": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 48,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpC006",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM49": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 49,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU006",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM50": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 50,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR039",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM51": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 51,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU014",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM52": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 52,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgR038",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM53": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 53,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmU001",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM54": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 54,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR010",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM55": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 55,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU012",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM56": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 56,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmC001",
        "effectiveRate": 0.929
      }
    ]
  },
  "SHM57": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 57,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpR028",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM58": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 58,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR029",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM59": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 59,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmE009",
        "effectiveRate": 0.4
      }
    ]
  },
  "SHM60": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 60,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "shards_eldarJainZar",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHM61": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 61,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpU015",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM62": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 62,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR039",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM63": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 63,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR038",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM64": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 64,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL118",
        "effectiveRate": 0.2
      }
    ]
  },
  "SHM65": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 65,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgU011",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM66": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 66,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR019",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHM67": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 67,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpU002",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM68": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 68,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpU008",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM69": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 69,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgE003",
        "effectiveRate": 0.4
      }
    ]
  },
  "SHM70": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 70,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpU003",
        "effectiveRate": 0.8
      }
    ]
  },
  "SHM71": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 71,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL119",
        "effectiveRate": 0.2
      }
    ]
  },
  "SHM72": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 72,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL108",
        "effectiveRate": 0.2
      }
    ]
  },
  "SHM73": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 73,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpE017",
        "effectiveRate": 0.4
      }
    ]
  },
  "SHM74": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 74,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL109",
        "effectiveRate": 0.2
      }
    ]
  },
  "SHM75": {
    "campaign": "Saim-Hann Mirror",
    "campaignType": "Mirror",
    "nodeNumber": 75,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_eldarMauganRa",
        "effectiveRate": 0.429
      }
    ]
  },
  "IE01": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 1,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgDmgU010",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgU010",
        "effectiveRate": 0.333
      }
    ]
  },
  "IE02": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 2,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgDmgC011",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC011",
        "effectiveRate": 0.571
      }
    ]
  },
  "IE03": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 3,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpR043",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR043",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE04": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 4,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgDmgR007",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR007",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE05": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 5,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgArmC001",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmC001",
        "effectiveRate": 0.571
      }
    ]
  },
  "IE06": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 6,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgHpL100",
        "effectiveRate": 0.429
      }
    ]
  },
  "IE07": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 7,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpR002",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR002",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE08": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 8,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "shards_necroWarden",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_necroWarden",
        "effectiveRate": 0.08
      }
    ]
  },
  "IE09": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 9,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgArmU001",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmU001",
        "effectiveRate": 0.333
      }
    ]
  },
  "IE10": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 10,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR022",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR022",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE11": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 11,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR027",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR027",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE12": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 12,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR040",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR040",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE13": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 13,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR001",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR001",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE14": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 14,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgU011",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgU011",
        "effectiveRate": 0.333
      }
    ]
  },
  "IE15": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 15,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgR002",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR002",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE16": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 16,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "shards_necroDestroyer",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_necroDestroyer",
        "effectiveRate": 0.08
      }
    ]
  },
  "IE17": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 17,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgR022",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR022",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE18": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 18,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR027",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR027",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE19": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 19,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR040",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR040",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE20": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 20,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR034",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR034",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE21": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 21,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgHpU002",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpU002",
        "effectiveRate": 0.333
      }
    ]
  },
  "IE22": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 22,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR022",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR022",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE23": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 23,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR027",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR027",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE24": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 24,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "shards_necroSpyder",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_necroSpyder",
        "effectiveRate": 0.08
      }
    ]
  },
  "IE25": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 25,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmC011",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmC011",
        "effectiveRate": 0.571
      }
    ]
  },
  "IE26": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 26,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmR034",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR034",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE27": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 27,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgArmE013",
        "effectiveRate": 0.714
      }
    ]
  },
  "IE28": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 28,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL102",
        "effectiveRate": 0.429
      }
    ]
  },
  "IE29": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 29,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL107",
        "effectiveRate": 0.429
      }
    ]
  },
  "IE30": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 30,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL099",
        "effectiveRate": 0.429
      }
    ]
  },
  "IE31": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 31,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL114",
        "effectiveRate": 0.429
      }
    ]
  },
  "IE32": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 32,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "shards_necroPlasmancer",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_necroPlasmancer",
        "effectiveRate": 0.08
      }
    ]
  },
  "IE33": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 33,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmU005",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmU005",
        "effectiveRate": 0.333
      }
    ]
  },
  "IE34": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 34,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgHpR005",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR005",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE35": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 35,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmR015",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR015",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE36": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 36,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgHpR011",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR011",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE37": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 37,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmR040",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR040",
        "effectiveRate": 0.154
      }
    ]
  },
  "IE38": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 38,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgHpC007",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC007",
        "effectiveRate": 0.571
      }
    ]
  },
  "IE39": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 39,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgHpL010",
        "effectiveRate": 0.429
      }
    ]
  },
  "IE40": {
    "campaign": "Indomitus Elite",
    "campaignType": "Elite",
    "nodeNumber": 40,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 225
      },
      {
        "id": "shards_necroOverlord",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_necroOverlord",
        "effectiveRate": 0.08
      }
    ]
  },
  "FoCE01": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 1,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgDmgU003",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgU003",
        "effectiveRate": 0.333
      }
    ]
  },
  "FoCE02": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 2,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpR023",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR023",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE03": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 3,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgDmgR023",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR023",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE04": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 4,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgArmR023",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR023",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE05": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 5,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpU009",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpU009",
        "effectiveRate": 0.333
      }
    ]
  },
  "FoCE06": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 6,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgHpL103",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCE07": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 7,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpR018",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR018",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE08": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 8,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "shards_astraBullgryn",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_astraBullgryn",
        "effectiveRate": 0.08
      }
    ]
  },
  "FoCE09": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 9,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgArmU007",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmU007",
        "effectiveRate": 0.333
      }
    ]
  },
  "FoCE10": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 10,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR024",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR024",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE11": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 11,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR038",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR038",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE12": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 12,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgArmC004",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmC004",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCE13": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 13,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgC010",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC010",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCE14": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 14,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgU019",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgU019",
        "effectiveRate": 0.333
      }
    ]
  },
  "FoCE15": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 15,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgR003",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR003",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE16": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 16,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "shards_astraPrimarisPsy",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_astraPrimarisPsy",
        "effectiveRate": 0.08
      }
    ]
  },
  "FoCE17": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 17,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgR024",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR024",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE18": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 18,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR038",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR038",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE19": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 19,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgC013",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC013",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCE20": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 20,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgHpC008",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC008",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCE21": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 21,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgHpU017",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpU017",
        "effectiveRate": 0.333
      }
    ]
  },
  "FoCE22": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 22,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR009",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR009",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE23": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 23,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR038",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR038",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE24": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 24,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "shards_astraOrdnance",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_astraOrdnance",
        "effectiveRate": 0.08
      }
    ]
  },
  "FoCE25": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 25,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmC003",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmC003",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCE26": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 26,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgHpC009",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC009",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCE27": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 27,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgArmE009",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoCE28": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 28,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL104",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCE29": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 29,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL118",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCE30": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 30,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgHpC001",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC001",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCE31": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 31,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgHpU016",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpU016",
        "effectiveRate": 0.333
      }
    ]
  },
  "FoCE32": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 32,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "shards_adeptCelestine",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_adeptCelestine",
        "effectiveRate": 0.08
      }
    ]
  },
  "FoCE33": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 33,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmU008",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmU008",
        "effectiveRate": 0.333
      }
    ]
  },
  "FoCE34": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 34,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgHpR008",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR008",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE35": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 35,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmR005",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR005",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE36": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 36,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgHpR007",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR007",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE37": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 37,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgDmgR025",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR025",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE38": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 38,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmR025",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR025",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCE39": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 39,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgHpL105",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCE40": {
    "campaign": "Fall of Cadia Elite",
    "campaignType": "Elite",
    "nodeNumber": 40,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 225
      },
      {
        "id": "shards_astraCreed",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_astraCreed",
        "effectiveRate": 0.08
      }
    ]
  },
  "OE01": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 1,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgDmgU014",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgU014",
        "effectiveRate": 0.333
      }
    ]
  },
  "OE02": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 2,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpR010",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR010",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE03": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 3,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgDmgR026",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR026",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE04": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 4,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgArmR026",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR026",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE05": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 5,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpU012",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpU012",
        "effectiveRate": 0.333
      }
    ]
  },
  "OE06": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 6,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgHpL106",
        "effectiveRate": 0.429
      }
    ]
  },
  "OE07": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 7,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpR019",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR019",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE08": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 8,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "shards_templAggressor",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_templAggressor",
        "effectiveRate": 0.08
      }
    ]
  },
  "OE09": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 9,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgArmU002",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmU002",
        "effectiveRate": 0.333
      }
    ]
  },
  "OE10": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 10,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR032",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR032",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE11": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 11,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR036",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR036",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE12": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 12,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR035",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR035",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE13": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 13,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR033",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR033",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE14": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 14,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgU012",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgU012",
        "effectiveRate": 0.333
      }
    ]
  },
  "OE15": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 15,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgR006",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR006",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE16": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 16,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "shards_templSwordBrother",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_templSwordBrother",
        "effectiveRate": 0.08
      }
    ]
  },
  "OE17": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 17,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgR032",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR032",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE18": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 18,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR036",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR036",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE19": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 19,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR035",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR035",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE20": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 20,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR033",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR033",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE21": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 21,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgHpU014",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpU014",
        "effectiveRate": 0.333
      }
    ]
  },
  "OE22": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 22,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR032",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR032",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE23": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 23,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR036",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR036",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE24": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 24,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "shards_templAncient",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_templAncient",
        "effectiveRate": 0.08
      }
    ]
  },
  "OE25": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 25,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmR035",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR035",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE26": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 26,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmR033",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR033",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE27": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 27,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgArmE010",
        "effectiveRate": 0.714
      }
    ]
  },
  "OE28": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 28,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL112",
        "effectiveRate": 0.429
      }
    ]
  },
  "OE29": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 29,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL116",
        "effectiveRate": 0.429
      }
    ]
  },
  "OE30": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 30,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL115",
        "effectiveRate": 0.429
      }
    ]
  },
  "OE31": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 31,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL113",
        "effectiveRate": 0.429
      }
    ]
  },
  "OE32": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 32,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "shards_templChampion",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_templChampion",
        "effectiveRate": 0.08
      }
    ]
  },
  "OE33": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 33,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmU009",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmU009",
        "effectiveRate": 0.333
      }
    ]
  },
  "OE34": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 34,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgHpU001",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpU001",
        "effectiveRate": 0.333
      }
    ]
  },
  "OE35": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 35,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmR006",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR006",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE36": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 36,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgHpR021",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR021",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE37": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 37,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgDmgR021",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR021",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE38": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 38,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmR021",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR021",
        "effectiveRate": 0.154
      }
    ]
  },
  "OE39": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 39,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgHpL101",
        "effectiveRate": 0.429
      }
    ]
  },
  "OE40": {
    "campaign": "Octarius Elite",
    "campaignType": "Elite",
    "nodeNumber": 40,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 225
      },
      {
        "id": "shards_templHelbrecht",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_templHelbrecht",
        "effectiveRate": 0.08
      }
    ]
  },
  "SHE01": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 1,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgDmgU009",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgU009",
        "effectiveRate": 0.333
      }
    ]
  },
  "SHE02": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 2,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpR028",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR028",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE03": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 3,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgDmgR028",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR028",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE04": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 4,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgArmR028",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR028",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE05": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 5,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpU007",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpU007",
        "effectiveRate": 0.333
      }
    ]
  },
  "SHE06": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 6,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgHpL108",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHE07": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 7,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpR014",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR014",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE08": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 8,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "shards_thousTerminator",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_thousTerminator",
        "effectiveRate": 0.08
      }
    ]
  },
  "SHE09": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 9,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgArmU014",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmU014",
        "effectiveRate": 0.333
      }
    ]
  },
  "SHE10": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 10,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpC016",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC016",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHE11": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 11,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR037",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR037",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE12": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 12,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR031",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR031",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE13": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 13,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR039",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR039",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE14": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 14,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgU004",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgU004",
        "effectiveRate": 0.333
      }
    ]
  },
  "SHE15": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 15,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgR005",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR005",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE16": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 16,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "shards_thousInfernalMaster",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_thousInfernalMaster",
        "effectiveRate": 0.08
      }
    ]
  },
  "SHE17": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 17,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgC005",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC005",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHE18": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 18,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR037",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR037",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE19": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 19,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR031",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR031",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE20": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 20,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR039",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR039",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE21": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 21,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgHpU016",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpU016",
        "effectiveRate": 0.333
      }
    ]
  },
  "SHE22": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 22,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgHpC014",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC014",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHE23": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 23,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR037",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR037",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE24": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 24,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "shards_thousTzaangor",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_thousTzaangor",
        "effectiveRate": 0.08
      }
    ]
  },
  "SHE25": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 25,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmR031",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR031",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE26": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 26,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmR039",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR039",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE27": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 27,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgArmE008",
        "effectiveRate": 0.714
      }
    ]
  },
  "SHE28": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 28,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgDmgC001",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC001",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHE29": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 29,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL117",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHE30": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 30,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL111",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHE31": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 31,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL119",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHE32": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 32,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "shards_thousSorcerer",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_thousSorcerer",
        "effectiveRate": 0.08
      }
    ]
  },
  "SHE33": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 33,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmU013",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmU013",
        "effectiveRate": 0.333
      }
    ]
  },
  "SHE34": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 34,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmU006",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmU006",
        "effectiveRate": 0.333
      }
    ]
  },
  "SHE35": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 35,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmR010",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR010",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE36": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 36,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgHpR029",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR029",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE37": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 37,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgDmgR029",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR029",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE38": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 38,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmR029",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR029",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHE39": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 39,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgHpL109",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHE40": {
    "campaign": "Saim-Hann Elite",
    "campaignType": "Elite",
    "nodeNumber": 40,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 225
      },
      {
        "id": "shards_thousAhriman",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_thousAhriman",
        "effectiveRate": 0.08
      }
    ]
  },
  "IME01": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 1,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgArmC005",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmC005",
        "effectiveRate": 0.571
      }
    ]
  },
  "IME02": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 2,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpR011",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR011",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME03": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 3,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgDmgR009",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR009",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME04": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 4,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgArmR030",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR030",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME05": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 5,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgDmgE004",
        "effectiveRate": 0.714
      }
    ]
  },
  "IME06": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 6,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgHpL010",
        "effectiveRate": 0.429
      }
    ]
  },
  "IME07": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 7,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgArmL203",
        "effectiveRate": 0.429
      }
    ]
  },
  "IME08": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 8,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "shards_adeptRetributor",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_adeptRetributor",
        "effectiveRate": 0.08
      }
    ]
  },
  "IME09": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 9,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgC015",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC015",
        "effectiveRate": 0.571
      }
    ]
  },
  "IME10": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 10,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR001",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR001",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME11": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 11,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR035",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR035",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME12": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 12,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR037",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR037",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME13": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 13,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR027",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR027",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME14": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 14,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      }
    ],
    "potential": [
      {
        "id": "upgHpE017",
        "effectiveRate": 0.714
      }
    ]
  },
  "IME15": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 15,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      }
    ],
    "potential": [
      {
        "id": "upgDmgL001",
        "effectiveRate": 0.429
      }
    ]
  },
  "IME16": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 16,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "shards_ultraInceptorSgt",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_ultraInceptorSgt",
        "effectiveRate": 0.08
      }
    ]
  },
  "IME17": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 17,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgR034",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR034",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME18": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 18,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR035",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR035",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME19": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 19,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR037",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR037",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME20": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 20,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR027",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR027",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME21": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 21,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgHpC002",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC002",
        "effectiveRate": 0.571
      }
    ]
  },
  "IME22": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 22,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR034",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR034",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME23": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 23,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR035",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR035",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME24": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 24,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "shards_ultraEliminatorSgt",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_ultraEliminatorSgt",
        "effectiveRate": 0.08
      }
    ]
  },
  "IME25": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 25,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmR037",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR037",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME26": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 26,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmR027",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR027",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME27": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 27,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgDmgC009",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC009",
        "effectiveRate": 0.571
      }
    ]
  },
  "IME28": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 28,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL114",
        "effectiveRate": 0.429
      }
    ]
  },
  "IME29": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 29,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL115",
        "effectiveRate": 0.429
      }
    ]
  },
  "IME30": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 30,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL117",
        "effectiveRate": 0.429
      }
    ]
  },
  "IME31": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 31,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL107",
        "effectiveRate": 0.429
      }
    ]
  },
  "IME32": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 32,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "shards_ultraTigurius",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_ultraTigurius",
        "effectiveRate": 0.08
      }
    ]
  },
  "IME33": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 33,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmR006",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR006",
        "effectiveRate": 0.154
      }
    ]
  },
  "IME34": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 34,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgHpC006",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC006",
        "effectiveRate": 0.571
      }
    ]
  },
  "IME35": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 35,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgDmgU010",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgU010",
        "effectiveRate": 0.333
      }
    ]
  },
  "IME36": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 36,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgHpE003",
        "effectiveRate": 0.714
      }
    ]
  },
  "IME37": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 37,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgHpL100",
        "effectiveRate": 0.429
      }
    ]
  },
  "IME38": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 38,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgArmL203",
        "effectiveRate": 0.429
      }
    ]
  },
  "IME39": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 39,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgDmgL001",
        "effectiveRate": 0.429
      }
    ]
  },
  "IME40": {
    "campaign": "Indomitus Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 40,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 225
      },
      {
        "id": "shards_ultraCalgar",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_ultraCalgar",
        "effectiveRate": 0.08
      }
    ]
  },
  "FoCME01": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 1,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgArmC003",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmC003",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCME02": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 2,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpR007",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR007",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME03": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 3,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgDmgR025",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR025",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME04": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 4,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgArmR025",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR025",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME05": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 5,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgDmgE003",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoCME06": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 6,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgHpL105",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCME07": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 7,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgArmL202",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCME08": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 8,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "shards_blackTerminator",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_blackTerminator",
        "effectiveRate": 0.08
      }
    ]
  },
  "FoCME09": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 9,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgC012",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC012",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCME10": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 10,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR022",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR022",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME11": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 11,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR032",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR032",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME12": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 12,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR036",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR036",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME13": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 13,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR024",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR024",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME14": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 14,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      }
    ],
    "potential": [
      {
        "id": "upgHpE012",
        "effectiveRate": 0.714
      }
    ]
  },
  "FoCME15": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 15,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      }
    ],
    "potential": [
      {
        "id": "upgDmgL204",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCME16": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 16,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "shards_blackPossession",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_blackPossession",
        "effectiveRate": 0.08
      }
    ]
  },
  "FoCME17": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 17,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgR022",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR022",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME18": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 18,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR032",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR032",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME19": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 19,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR036",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR036",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME20": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 20,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR024",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR024",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME21": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 21,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgHpC003",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC003",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCME22": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 22,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR022",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR022",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME23": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 23,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR032",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR032",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME24": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 24,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "shards_blackObliterator",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_blackObliterator",
        "effectiveRate": 0.08
      }
    ]
  },
  "FoCME25": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 25,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmR036",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR036",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME26": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 26,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmR009",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR009",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME27": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 27,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgDmgC007",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC007",
        "effectiveRate": 0.571
      }
    ]
  },
  "FoCME28": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 28,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL102",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCME29": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 29,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL112",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCME30": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 30,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL116",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCME31": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 31,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL104",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCME32": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 32,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "shards_blackHaarken",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_blackHaarken",
        "effectiveRate": 0.08
      }
    ]
  },
  "FoCME33": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 33,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgDmgR005",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR005",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME34": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 34,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgHpR023",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR023",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME35": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 35,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgDmgR023",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR023",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME36": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 36,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmR023",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR023",
        "effectiveRate": 0.154
      }
    ]
  },
  "FoCME37": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 37,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgHpL103",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCME38": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 38,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgArmL202",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCME39": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 39,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgDmgL204",
        "effectiveRate": 0.429
      }
    ]
  },
  "FoCME40": {
    "campaign": "Fall of Cadia Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 40,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 225
      },
      {
        "id": "shards_blackAbaddon",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_blackAbaddon",
        "effectiveRate": 0.08
      }
    ]
  },
  "OME01": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 1,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgArmC002",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmC002",
        "effectiveRate": 0.571
      }
    ]
  },
  "OME02": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 2,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpR021",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR021",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME03": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 3,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgDmgR021",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR021",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME04": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 4,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgArmR021",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR021",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME05": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 5,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgDmgE001",
        "effectiveRate": 0.714
      }
    ]
  },
  "OME06": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 6,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgHpL101",
        "effectiveRate": 0.429
      }
    ]
  },
  "OME07": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 7,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgArmL001",
        "effectiveRate": 0.429
      }
    ]
  },
  "OME08": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 8,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "shards_orksKillaKan",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_orksKillaKan",
        "effectiveRate": 0.08
      }
    ]
  },
  "OME09": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 9,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgC011",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC011",
        "effectiveRate": 0.571
      }
    ]
  },
  "OME10": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 10,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR033",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR033",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME11": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 11,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR031",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR031",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME12": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 12,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR040",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR040",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME13": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 13,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpC016",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC016",
        "effectiveRate": 0.571
      }
    ]
  },
  "OME14": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 14,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      }
    ],
    "potential": [
      {
        "id": "upgDmgE011",
        "effectiveRate": 0.714
      }
    ]
  },
  "OME15": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 15,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      }
    ],
    "potential": [
      {
        "id": "upgDmgL003",
        "effectiveRate": 0.429
      }
    ]
  },
  "OME16": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 16,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "shards_orksBigMek",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_orksBigMek",
        "effectiveRate": 0.08
      }
    ]
  },
  "OME17": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 17,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgR033",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR033",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME18": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 18,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR031",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR031",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME19": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 19,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgHpU012",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpU012",
        "effectiveRate": 0.333
      }
    ]
  },
  "OME20": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 20,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmC006",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmC006",
        "effectiveRate": 0.571
      }
    ]
  },
  "OME21": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 21,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgHpC013",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC013",
        "effectiveRate": 0.571
      }
    ]
  },
  "OME22": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 22,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR033",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR033",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME23": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 23,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR031",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR031",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME24": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 24,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "shards_orksRuntherd",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_orksRuntherd",
        "effectiveRate": 0.08
      }
    ]
  },
  "OME25": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 25,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmR040",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR040",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME26": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 26,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgHpC015",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC015",
        "effectiveRate": 0.571
      }
    ]
  },
  "OME27": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 27,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmC012",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmC012",
        "effectiveRate": 0.571
      }
    ]
  },
  "OME28": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 28,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL113",
        "effectiveRate": 0.429
      }
    ]
  },
  "OME29": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 29,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL111",
        "effectiveRate": 0.429
      }
    ]
  },
  "OME30": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 30,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL099",
        "effectiveRate": 0.429
      }
    ]
  },
  "OME31": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 31,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgHpC017",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC017",
        "effectiveRate": 0.571
      }
    ]
  },
  "OME32": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 32,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "shards_orksNob",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_orksNob",
        "effectiveRate": 0.08
      }
    ]
  },
  "OME33": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 33,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgHpR002",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR002",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME34": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 34,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgHpR010",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR010",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME35": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 35,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgDmgR026",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR026",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME36": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 36,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmR026",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR026",
        "effectiveRate": 0.154
      }
    ]
  },
  "OME37": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 37,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgHpL106",
        "effectiveRate": 0.429
      }
    ]
  },
  "OME38": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 38,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgArmL001",
        "effectiveRate": 0.429
      }
    ]
  },
  "OME39": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 39,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgDmgL003",
        "effectiveRate": 0.429
      }
    ]
  },
  "OME40": {
    "campaign": "Octarius Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 40,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 225
      },
      {
        "id": "shards_orksWarboss",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_orksWarboss",
        "effectiveRate": 0.08
      }
    ]
  },
  "SHME01": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 1,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgArmC004",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmC004",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHME02": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 2,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgHpR029",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR029",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME03": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 3,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgDmgR029",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR029",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME04": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 4,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "upgArmR029",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR029",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME05": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 5,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgDmgE010",
        "effectiveRate": 0.714
      }
    ]
  },
  "SHME06": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 6,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgHpL109",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHME07": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 7,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      }
    ],
    "potential": [
      {
        "id": "upgArmL204",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHME08": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 8,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 160
      },
      {
        "id": "shards_eldarRanger",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_eldarRanger",
        "effectiveRate": 0.08
      }
    ]
  },
  "SHME09": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 9,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgC014",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC014",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHME10": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 10,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgC008",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC008",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHME11": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 11,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR039",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR039",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME12": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 12,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgArmC013",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmC013",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHME13": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 13,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgHpR038",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR038",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME14": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 14,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      }
    ],
    "potential": [
      {
        "id": "upgHpE015",
        "effectiveRate": 0.714
      }
    ]
  },
  "SHME15": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 15,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      }
    ],
    "potential": [
      {
        "id": "upgDmgL202",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHME16": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 16,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "shards_eldarAutarch",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_eldarAutarch",
        "effectiveRate": 0.08
      }
    ]
  },
  "SHME17": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 17,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 109,
        "max": 165
      },
      {
        "id": "upgDmgR040",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR040",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME18": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 18,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR039",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR039",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME19": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 19,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgC010",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC010",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHME20": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 20,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgDmgR038",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR038",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME21": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 21,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgHpC010",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpC010",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHME22": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 22,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmC001",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmC001",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHME23": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 23,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "upgArmR039",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR039",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME24": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 24,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 123,
        "max": 180
      },
      {
        "id": "shards_eldarFarseer",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_eldarFarseer",
        "effectiveRate": 0.08
      }
    ]
  },
  "SHME25": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 25,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmC007",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmC007",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHME26": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 26,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmR038",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR038",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME27": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 27,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgDmgC003",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgC003",
        "effectiveRate": 0.571
      }
    ]
  },
  "SHME28": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 28,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      },
      {
        "id": "upgArmU001",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmU001",
        "effectiveRate": 0.333
      }
    ]
  },
  "SHME29": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 29,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL119",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHME30": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 30,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgDmgE011",
        "effectiveRate": 0.714
      }
    ]
  },
  "SHME31": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 31,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 131,
        "max": 195
      }
    ],
    "potential": [
      {
        "id": "upgHpL118",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHME32": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 32,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "shards_eldarJainZar",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_eldarJainZar",
        "effectiveRate": 0.08
      }
    ]
  },
  "SHME33": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 33,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgDmgR003",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR003",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME34": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 34,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgHpR028",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgHpR028",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME35": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 35,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgDmgR028",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgDmgR028",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME36": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 36,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      },
      {
        "id": "upgArmR028",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "upgArmR028",
        "effectiveRate": 0.154
      }
    ]
  },
  "SHME37": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 37,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgHpL108",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHME38": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 38,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgArmL204",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHME39": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 39,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 210
      }
    ],
    "potential": [
      {
        "id": "upgDmgL202",
        "effectiveRate": 0.429
      }
    ]
  },
  "SHME40": {
    "campaign": "Saim-Hann Mirror Elite",
    "campaignType": "Elite",
    "nodeNumber": 40,
    "energyCost": 10,
    "guaranteed": [
      {
        "id": "gold",
        "min": 140,
        "max": 225
      },
      {
        "id": "shards_eldarMauganRa",
        "min": 1,
        "max": 1
      }
    ],
    "potential": [
      {
        "id": "shards_eldarMauganRa",
        "effectiveRate": 0.08
      }
    ]
  },
  "AMS01": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC015",
        "effectiveRate": 0.929
      }
    ]
  },
  "AMS02": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC009",
        "effectiveRate": 0.929
      }
    ]
  },
  "AMS03": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC004",
        "effectiveRate": 0.929
      }
    ]
  },
  "AMSC03B": {
    "campaign": "Adeptus Mechanicus Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgHpR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "AMS04": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC014",
        "effectiveRate": 0.929
      }
    ]
  },
  "AMS05": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC010",
        "effectiveRate": 0.929
      }
    ]
  },
  "AMS06": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "shards_admecMarshall",
        "effectiveRate": 0.429
      }
    ]
  },
  "AMS07": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgArmC001",
        "effectiveRate": 0.929
      }
    ]
  },
  "AMS08": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgHpC002",
        "effectiveRate": 0.929
      }
    ]
  },
  "AMS09": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgDmgC013",
        "effectiveRate": 0.929
      }
    ]
  },
  "AMS10": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgHpR001",
        "effectiveRate": 0.571
      }
    ]
  },
  "AMS11": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "shards_admecRuststalker",
        "effectiveRate": 0.429
      }
    ]
  },
  "AMS12": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmC006",
        "effectiveRate": 0.929
      }
    ]
  },
  "AMS13": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU014",
        "effectiveRate": 0.8
      }
    ]
  },
  "AMSC13B": {
    "campaign": "Adeptus Mechanicus Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgHpE012",
        "effectiveRate": 0.4
      }
    ]
  },
  "AMS14": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU009",
        "effectiveRate": 0.8
      }
    ]
  },
  "AMS15": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU001",
        "effectiveRate": 0.8
      }
    ]
  },
  "AMS16": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR034",
        "effectiveRate": 0.571
      }
    ]
  },
  "AMS17": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "shards_admecManipulus",
        "effectiveRate": 0.429
      }
    ]
  },
  "AMS18": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU010",
        "effectiveRate": 0.8
      }
    ]
  },
  "AMS19": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU006",
        "effectiveRate": 0.8
      }
    ]
  },
  "AMS20": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmU013",
        "effectiveRate": 0.8
      }
    ]
  },
  "AMS21": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR034",
        "effectiveRate": 0.571
      }
    ]
  },
  "AMS22": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "shards_admecDominus",
        "effectiveRate": 0.429
      }
    ]
  },
  "AMS23": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpU016",
        "effectiveRate": 0.8
      }
    ]
  },
  "AMS24": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgU011",
        "effectiveRate": 0.8
      }
    ]
  },
  "AMS25": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmU006",
        "effectiveRate": 0.8
      }
    ]
  },
  "AMSC25B": {
    "campaign": "Adeptus Mechanicus Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgDmgE004",
        "effectiveRate": 0.4
      }
    ]
  },
  "AMS26": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR002",
        "effectiveRate": 0.571
      }
    ]
  },
  "AMS27": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgR006",
        "effectiveRate": 0.571
      }
    ]
  },
  "AMS28": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR006",
        "effectiveRate": 0.571
      }
    ]
  },
  "AMS29": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL114",
        "effectiveRate": 0.2
      }
    ]
  },
  "AMS30": {
    "campaign": "Adeptus Mechanicus Standard",
    "campaignType": "Standard",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_admecDestroyer",
        "effectiveRate": 0.429
      }
    ]
  },
  "AME01": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC015",
        "effectiveRate": 0.941
      }
    ]
  },
  "AME02": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC009",
        "effectiveRate": 0.941
      }
    ]
  },
  "AME03": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC004",
        "effectiveRate": 0.941
      }
    ]
  },
  "AMEC03B": {
    "campaign": "Adeptus Mechanicus Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgArmE010",
        "effectiveRate": 0.429
      }
    ]
  },
  "AME04": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC014",
        "effectiveRate": 0.941
      }
    ]
  },
  "AME05": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC010",
        "effectiveRate": 0.941
      }
    ]
  },
  "AME06": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_admecMarshall",
        "effectiveRate": 0.643
      }
    ]
  },
  "AME07": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC001",
        "effectiveRate": 0.941
      }
    ]
  },
  "AME08": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC002",
        "effectiveRate": 0.941
      }
    ]
  },
  "AME09": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC013",
        "effectiveRate": 0.941
      }
    ]
  },
  "AME10": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC006",
        "effectiveRate": 0.941
      }
    ]
  },
  "AME11": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_admecRuststalker",
        "effectiveRate": 0.643
      }
    ]
  },
  "AME12": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmU013",
        "effectiveRate": 0.833
      }
    ]
  },
  "AME13": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpU014",
        "effectiveRate": 0.833
      }
    ]
  },
  "AMEC13B": {
    "campaign": "Adeptus Mechanicus Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgArmL203",
        "effectiveRate": 0.25
      }
    ]
  },
  "AME14": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgU009",
        "effectiveRate": 0.833
      }
    ]
  },
  "AME15": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpR002",
        "effectiveRate": 0.692
      }
    ]
  },
  "AME16": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgR006",
        "effectiveRate": 0.692
      }
    ]
  },
  "AME17": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_admecManipulus",
        "effectiveRate": 0.643
      }
    ]
  },
  "AME18": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmR006",
        "effectiveRate": 0.692
      }
    ]
  },
  "AME19": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpR001",
        "effectiveRate": 0.692
      }
    ]
  },
  "AME20": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgR034",
        "effectiveRate": 0.692
      }
    ]
  },
  "AME21": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmR034",
        "effectiveRate": 0.692
      }
    ]
  },
  "AME22": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_admecDominus",
        "effectiveRate": 0.643
      }
    ]
  },
  "AME23": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "upgHpL114",
        "effectiveRate": 0.25
      }
    ]
  },
  "AME24": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "shards_admecDestroyer",
        "effectiveRate": 0.643
      }
    ]
  },
  "AME25": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_admecMarshall",
        "effectiveRate": 0.267
      }
    ]
  },
  "AMEC25B": {
    "campaign": "Adeptus Mechanicus Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 90,
        "max": 155
      }
    ],
    "potential": [
      {
        "id": "upgDmgL003",
        "effectiveRate": 0.25
      }
    ]
  },
  "AME26": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_admecRuststalker",
        "effectiveRate": 0.267
      }
    ]
  },
  "AME27": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_admecManipulus",
        "effectiveRate": 0.267
      }
    ]
  },
  "AME28": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_admecDominus",
        "effectiveRate": 0.267
      }
    ]
  },
  "AME29": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_admecDestroyer",
        "effectiveRate": 0.267
      }
    ]
  },
  "AME30": {
    "campaign": "Adeptus Mechanicus Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 90,
        "max": 155
      }
    ],
    "potential": [
      {
        "id": "upgHpM001",
        "effectiveRate": 0.154
      }
    ]
  },
  "TS01": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC009",
        "effectiveRate": 0.929
      }
    ]
  },
  "TS02": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "TS03": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC005",
        "effectiveRate": 0.929
      }
    ]
  },
  "TSC03B": {
    "campaign": "Tyranids Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgHpR008",
        "effectiveRate": 0.571
      }
    ]
  },
  "TS04": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC010",
        "effectiveRate": 0.929
      }
    ]
  },
  "TS05": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC008",
        "effectiveRate": 0.929
      }
    ]
  },
  "TS06": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "shards_tyranDeathleaper",
        "effectiveRate": 0.429
      }
    ]
  },
  "TS07": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgArmC007",
        "effectiveRate": 0.929
      }
    ]
  },
  "TS08": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgHpC001",
        "effectiveRate": 0.929
      }
    ]
  },
  "TS09": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgDmgC014",
        "effectiveRate": 0.929
      }
    ]
  },
  "TS10": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgHpR033",
        "effectiveRate": 0.571
      }
    ]
  },
  "TS11": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "shards_tyranWingedPrime",
        "effectiveRate": 0.429
      }
    ]
  },
  "TS12": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "TS13": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU001",
        "effectiveRate": 0.8
      }
    ]
  },
  "TSC13B": {
    "campaign": "Tyranids Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgHpE015",
        "effectiveRate": 0.4
      }
    ]
  },
  "TS14": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU014",
        "effectiveRate": 0.8
      }
    ]
  },
  "TS15": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU007",
        "effectiveRate": 0.8
      }
    ]
  },
  "TS16": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR033",
        "effectiveRate": 0.571
      }
    ]
  },
  "TS17": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "shards_tyranNeurothrope",
        "effectiveRate": 0.429
      }
    ]
  },
  "TS18": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU019",
        "effectiveRate": 0.8
      }
    ]
  },
  "TS19": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU017",
        "effectiveRate": 0.8
      }
    ]
  },
  "TS20": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmU006",
        "effectiveRate": 0.8
      }
    ]
  },
  "TS21": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR033",
        "effectiveRate": 0.571
      }
    ]
  },
  "TS22": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "shards_tyranParasite",
        "effectiveRate": 0.429
      }
    ]
  },
  "TS23": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpU009",
        "effectiveRate": 0.8
      }
    ]
  },
  "TS24": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgU003",
        "effectiveRate": 0.8
      }
    ]
  },
  "TS25": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmU002",
        "effectiveRate": 0.8
      }
    ]
  },
  "TSC25B": {
    "campaign": "Tyranids Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgDmgE010",
        "effectiveRate": 0.4
      }
    ]
  },
  "TS26": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR019",
        "effectiveRate": 0.571
      }
    ]
  },
  "TS27": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "TS28": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR015",
        "effectiveRate": 0.571
      }
    ]
  },
  "TS29": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL113",
        "effectiveRate": 0.2
      }
    ]
  },
  "TS30": {
    "campaign": "Tyranids Standard",
    "campaignType": "Standard",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_tyranTyrantGuard",
        "effectiveRate": 0.429
      }
    ]
  },
  "TE01": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC009",
        "effectiveRate": 0.941
      }
    ]
  },
  "TE02": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC003",
        "effectiveRate": 0.941
      }
    ]
  },
  "TE03": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC005",
        "effectiveRate": 0.941
      }
    ]
  },
  "TEC03B": {
    "campaign": "Tyranids Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgArmE013",
        "effectiveRate": 0.429
      }
    ]
  },
  "TE04": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC010",
        "effectiveRate": 0.941
      }
    ]
  },
  "TE05": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC008",
        "effectiveRate": 0.941
      }
    ]
  },
  "TE06": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_tyranDeathleaper",
        "effectiveRate": 0.643
      }
    ]
  },
  "TE07": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC007",
        "effectiveRate": 0.941
      }
    ]
  },
  "TE08": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC001",
        "effectiveRate": 0.941
      }
    ]
  },
  "TE09": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC014",
        "effectiveRate": 0.941
      }
    ]
  },
  "TE10": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC003",
        "effectiveRate": 0.941
      }
    ]
  },
  "TE11": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_tyranWingedPrime",
        "effectiveRate": 0.643
      }
    ]
  },
  "TE12": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmU006",
        "effectiveRate": 0.833
      }
    ]
  },
  "TE13": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpU001",
        "effectiveRate": 0.833
      }
    ]
  },
  "TEC13B": {
    "campaign": "Tyranids Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgArmL202",
        "effectiveRate": 0.25
      }
    ]
  },
  "TE14": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgU014",
        "effectiveRate": 0.833
      }
    ]
  },
  "TE15": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpR019",
        "effectiveRate": 0.692
      }
    ]
  },
  "TE16": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgR005",
        "effectiveRate": 0.692
      }
    ]
  },
  "TE17": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_tyranNeurothrope",
        "effectiveRate": 0.643
      }
    ]
  },
  "TE18": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmR015",
        "effectiveRate": 0.692
      }
    ]
  },
  "TE19": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpR033",
        "effectiveRate": 0.692
      }
    ]
  },
  "TE20": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgR033",
        "effectiveRate": 0.692
      }
    ]
  },
  "TE21": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmR033",
        "effectiveRate": 0.692
      }
    ]
  },
  "TE22": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_tyranParasite",
        "effectiveRate": 0.643
      }
    ]
  },
  "TE23": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "upgHpL113",
        "effectiveRate": 0.25
      }
    ]
  },
  "TE24": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "shards_tyranTyrantGuard",
        "effectiveRate": 0.643
      }
    ]
  },
  "TE25": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_tyranDeathleaper",
        "effectiveRate": 0.267
      }
    ]
  },
  "TEC25B": {
    "campaign": "Tyranids Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 90,
        "max": 155
      }
    ],
    "potential": [
      {
        "id": "upgDmgL202",
        "effectiveRate": 0.25
      }
    ]
  },
  "TE26": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_tyranWingedPrime",
        "effectiveRate": 0.267
      }
    ]
  },
  "TE27": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_tyranNeurothrope",
        "effectiveRate": 0.267
      }
    ]
  },
  "TE28": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_tyranParasite",
        "effectiveRate": 0.267
      }
    ]
  },
  "TE29": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_tyranTyrantGuard",
        "effectiveRate": 0.267
      }
    ]
  },
  "TE30": {
    "campaign": "Tyranids Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 90,
        "max": 155
      }
    ],
    "potential": [
      {
        "id": "upgHpM002",
        "effectiveRate": 0.154
      }
    ]
  },
  "TAS01": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC017",
        "effectiveRate": 0.929
      }
    ]
  },
  "TAS02": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC015",
        "effectiveRate": 0.929
      }
    ]
  },
  "TAS03": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC012",
        "effectiveRate": 0.929
      }
    ]
  },
  "TASC03B": {
    "campaign": "T'au Empire Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgHpR014",
        "effectiveRate": 0.571
      }
    ]
  },
  "TAS04": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC014",
        "effectiveRate": 0.929
      }
    ]
  },
  "TAS05": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC009",
        "effectiveRate": 0.929
      }
    ]
  },
  "TAS06": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "shards_tauCrisis",
        "effectiveRate": 0.429
      }
    ]
  },
  "TAS07": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgArmC005",
        "effectiveRate": 0.929
      }
    ]
  },
  "TAS08": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgHpC008",
        "effectiveRate": 0.929
      }
    ]
  },
  "TAS09": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgDmgC007",
        "effectiveRate": 0.929
      }
    ]
  },
  "TAS10": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgHpR027",
        "effectiveRate": 0.571
      }
    ]
  },
  "TAS11": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "shards_tauMarksman",
        "effectiveRate": 0.429
      }
    ]
  },
  "TAS12": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmC004",
        "effectiveRate": 0.929
      }
    ]
  },
  "TAS13": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU017",
        "effectiveRate": 0.8
      }
    ]
  },
  "TASC13B": {
    "campaign": "T'au Empire Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgHpE017",
        "effectiveRate": 0.4
      }
    ]
  },
  "TAS14": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU004",
        "effectiveRate": 0.8
      }
    ]
  },
  "TAS15": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU002",
        "effectiveRate": 0.8
      }
    ]
  },
  "TAS16": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR027",
        "effectiveRate": 0.571
      }
    ]
  },
  "TAS17": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "shards_tauDarkstrider",
        "effectiveRate": 0.429
      }
    ]
  },
  "TAS18": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU012",
        "effectiveRate": 0.8
      }
    ]
  },
  "TAS19": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU013",
        "effectiveRate": 0.8
      }
    ]
  },
  "TAS20": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmU014",
        "effectiveRate": 0.8
      }
    ]
  },
  "TAS21": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR027",
        "effectiveRate": 0.571
      }
    ]
  },
  "TAS22": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "shards_tauShadowsun",
        "effectiveRate": 0.429
      }
    ]
  },
  "TAS23": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpU007",
        "effectiveRate": 0.8
      }
    ]
  },
  "TAS24": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgU003",
        "effectiveRate": 0.8
      }
    ]
  },
  "TAS25": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmU006",
        "effectiveRate": 0.8
      }
    ]
  },
  "TASC25B": {
    "campaign": "T'au Empire Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgDmgE004",
        "effectiveRate": 0.4
      }
    ]
  },
  "TAS26": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR018",
        "effectiveRate": 0.571
      }
    ]
  },
  "TAS27": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgR003",
        "effectiveRate": 0.571
      }
    ]
  },
  "TAS28": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR010",
        "effectiveRate": 0.571
      }
    ]
  },
  "TAS29": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL107",
        "effectiveRate": 0.2
      }
    ]
  },
  "TAS30": {
    "campaign": "T'au Empire Standard",
    "campaignType": "Standard",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_tauAunShi",
        "effectiveRate": 0.429
      }
    ]
  },
  "TAE01": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC017",
        "effectiveRate": 0.941
      }
    ]
  },
  "TAE02": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC015",
        "effectiveRate": 0.941
      }
    ]
  },
  "TAE03": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC012",
        "effectiveRate": 0.941
      }
    ]
  },
  "TAEC03B": {
    "campaign": "T'au Empire Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgArmE009",
        "effectiveRate": 0.429
      }
    ]
  },
  "TAE04": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC014",
        "effectiveRate": 0.941
      }
    ]
  },
  "TAE05": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC009",
        "effectiveRate": 0.941
      }
    ]
  },
  "TAE06": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_tauCrisis",
        "effectiveRate": 0.643
      }
    ]
  },
  "TAE07": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC005",
        "effectiveRate": 0.941
      }
    ]
  },
  "TAE08": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC008",
        "effectiveRate": 0.941
      }
    ]
  },
  "TAE09": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC007",
        "effectiveRate": 0.941
      }
    ]
  },
  "TAE10": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC004",
        "effectiveRate": 0.941
      }
    ]
  },
  "TAE11": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_tauMarksman",
        "effectiveRate": 0.643
      }
    ]
  },
  "TAE12": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmU014",
        "effectiveRate": 0.833
      }
    ]
  },
  "TAE13": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpU017",
        "effectiveRate": 0.833
      }
    ]
  },
  "TAEC13B": {
    "campaign": "T'au Empire Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgArmL203",
        "effectiveRate": 0.25
      }
    ]
  },
  "TAE14": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgU004",
        "effectiveRate": 0.833
      }
    ]
  },
  "TAE15": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpR018",
        "effectiveRate": 0.692
      }
    ]
  },
  "TAE16": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgR003",
        "effectiveRate": 0.692
      }
    ]
  },
  "TAE17": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_tauDarkstrider",
        "effectiveRate": 0.643
      }
    ]
  },
  "TAE18": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmR010",
        "effectiveRate": 0.692
      }
    ]
  },
  "TAE19": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpR027",
        "effectiveRate": 0.692
      }
    ]
  },
  "TAE20": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgR027",
        "effectiveRate": 0.692
      }
    ]
  },
  "TAE21": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmR027",
        "effectiveRate": 0.692
      }
    ]
  },
  "TAE22": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_tauShadowsun",
        "effectiveRate": 0.643
      }
    ]
  },
  "TAE23": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "upgHpL107",
        "effectiveRate": 0.25
      }
    ]
  },
  "TAE24": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "shards_tauAunShi",
        "effectiveRate": 0.643
      }
    ]
  },
  "TAE25": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_tauCrisis",
        "effectiveRate": 0.267
      }
    ]
  },
  "TAEC25B": {
    "campaign": "T'au Empire Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 90,
        "max": 155
      }
    ],
    "potential": [
      {
        "id": "upgDmgL001",
        "effectiveRate": 0.25
      }
    ]
  },
  "TAE26": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_tauMarksman",
        "effectiveRate": 0.267
      }
    ]
  },
  "TAE27": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_tauDarkstrider",
        "effectiveRate": 0.267
      }
    ]
  },
  "TAE28": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_tauShadowsun",
        "effectiveRate": 0.267
      }
    ]
  },
  "TAE29": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_tauAunShi",
        "effectiveRate": 0.267
      }
    ]
  },
  "TAE30": {
    "campaign": "T'au Empire Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 90,
        "max": 155
      }
    ],
    "potential": [
      {
        "id": "upgHpM003",
        "effectiveRate": 0.154
      }
    ]
  },
  "DGS01": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC013",
        "effectiveRate": 0.929
      }
    ]
  },
  "DGS02": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC013",
        "effectiveRate": 0.929
      }
    ]
  },
  "DGS03": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC013",
        "effectiveRate": 0.929
      }
    ]
  },
  "DGSC03B": {
    "campaign": "Death Guard Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgHpR008",
        "effectiveRate": 0.571
      }
    ]
  },
  "DGS04": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC006",
        "effectiveRate": 0.929
      }
    ]
  },
  "DGS05": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC012",
        "effectiveRate": 0.929
      }
    ]
  },
  "DGS06": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "shards_deathBlightlord",
        "effectiveRate": 0.429
      }
    ]
  },
  "DGS07": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgArmC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "DGS08": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgHpC010",
        "effectiveRate": 0.929
      }
    ]
  },
  "DGS09": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgDmgC014",
        "effectiveRate": 0.929
      }
    ]
  },
  "DGS10": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgHpR024",
        "effectiveRate": 0.571
      }
    ]
  },
  "DGS11": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "shards_deathPutrifier",
        "effectiveRate": 0.429
      }
    ]
  },
  "DGS12": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmC007",
        "effectiveRate": 0.929
      }
    ]
  },
  "DGS13": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU016",
        "effectiveRate": 0.8
      }
    ]
  },
  "DGSC13B": {
    "campaign": "Death Guard Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgHpE015",
        "effectiveRate": 0.4
      }
    ]
  },
  "DGS14": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU011",
        "effectiveRate": 0.8
      }
    ]
  },
  "DGS15": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU002",
        "effectiveRate": 0.8
      }
    ]
  },
  "DGS16": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR024",
        "effectiveRate": 0.571
      }
    ]
  },
  "DGS17": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "shards_deathBlightbringer",
        "effectiveRate": 0.429
      }
    ]
  },
  "DGS18": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU009",
        "effectiveRate": 0.8
      }
    ]
  },
  "DGS19": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU012",
        "effectiveRate": 0.8
      }
    ]
  },
  "DGS20": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmU008",
        "effectiveRate": 0.8
      }
    ]
  },
  "DGS21": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR009",
        "effectiveRate": 0.571
      }
    ]
  },
  "DGS22": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "shards_deathTyphus",
        "effectiveRate": 0.429
      }
    ]
  },
  "DGS23": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpU009",
        "effectiveRate": 0.8
      }
    ]
  },
  "DGS24": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgU019",
        "effectiveRate": 0.8
      }
    ]
  },
  "DGS25": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmU007",
        "effectiveRate": 0.8
      }
    ]
  },
  "DGSC25B": {
    "campaign": "Death Guard Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgDmgE003",
        "effectiveRate": 0.4
      }
    ]
  },
  "DGS26": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR019",
        "effectiveRate": 0.571
      }
    ]
  },
  "DGS27": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgR003",
        "effectiveRate": 0.571
      }
    ]
  },
  "DGS28": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR006",
        "effectiveRate": 0.571
      }
    ]
  },
  "DGS29": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL104",
        "effectiveRate": 0.2
      }
    ]
  },
  "DGS30": {
    "campaign": "Death Guard Standard",
    "campaignType": "Standard",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_deathRotbone",
        "effectiveRate": 0.429
      }
    ]
  },
  "DGE01": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC013",
        "effectiveRate": 0.941
      }
    ]
  },
  "DGE02": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC013",
        "effectiveRate": 0.941
      }
    ]
  },
  "DGE03": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC013",
        "effectiveRate": 0.941
      }
    ]
  },
  "DGEC03B": {
    "campaign": "Death Guard Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgArmE010",
        "effectiveRate": 0.429
      }
    ]
  },
  "DGE04": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC006",
        "effectiveRate": 0.941
      }
    ]
  },
  "DGE05": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC012",
        "effectiveRate": 0.941
      }
    ]
  },
  "DGE06": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_deathBlightlord",
        "effectiveRate": 0.643
      }
    ]
  },
  "DGE07": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC003",
        "effectiveRate": 0.941
      }
    ]
  },
  "DGE08": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC010",
        "effectiveRate": 0.941
      }
    ]
  },
  "DGE09": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC014",
        "effectiveRate": 0.941
      }
    ]
  },
  "DGE10": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC007",
        "effectiveRate": 0.941
      }
    ]
  },
  "DGE11": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_deathPutrifier",
        "effectiveRate": 0.643
      }
    ]
  },
  "DGE12": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmU008",
        "effectiveRate": 0.833
      }
    ]
  },
  "DGE13": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpU016",
        "effectiveRate": 0.833
      }
    ]
  },
  "DGEC13B": {
    "campaign": "Death Guard Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgArmL203",
        "effectiveRate": 0.25
      }
    ]
  },
  "DGE14": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgU011",
        "effectiveRate": 0.833
      }
    ]
  },
  "DGE15": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpR019",
        "effectiveRate": 0.692
      }
    ]
  },
  "DGE16": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgR003",
        "effectiveRate": 0.692
      }
    ]
  },
  "DGE17": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_deathBlightbringer",
        "effectiveRate": 0.643
      }
    ]
  },
  "DGE18": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmR006",
        "effectiveRate": 0.692
      }
    ]
  },
  "DGE19": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpR024",
        "effectiveRate": 0.692
      }
    ]
  },
  "DGE20": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgR024",
        "effectiveRate": 0.692
      }
    ]
  },
  "DGE21": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmR009",
        "effectiveRate": 0.692
      }
    ]
  },
  "DGE22": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_deathTyphus",
        "effectiveRate": 0.643
      }
    ]
  },
  "DGE23": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "upgHpL104",
        "effectiveRate": 0.25
      }
    ]
  },
  "DGE24": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "shards_deathRotbone",
        "effectiveRate": 0.643
      }
    ]
  },
  "DGE25": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_deathBlightlord",
        "effectiveRate": 0.267
      }
    ]
  },
  "DGEC25B": {
    "campaign": "Death Guard Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 90,
        "max": 155
      }
    ],
    "potential": [
      {
        "id": "upgDmgL003",
        "effectiveRate": 0.25
      }
    ]
  },
  "DGE26": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_deathPutrifier",
        "effectiveRate": 0.267
      }
    ]
  },
  "DGE27": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_deathBlightbringer",
        "effectiveRate": 0.267
      }
    ]
  },
  "DGE28": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_deathTyphus",
        "effectiveRate": 0.267
      }
    ]
  },
  "DGE29": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_deathRotbone",
        "effectiveRate": 0.267
      }
    ]
  },
  "DGE30": {
    "campaign": "Death Guard Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 90,
        "max": 155
      }
    ],
    "potential": [
      {
        "id": "upgHpM004",
        "effectiveRate": 0.154
      }
    ]
  },
  "ASS01": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC016",
        "effectiveRate": 0.929
      }
    ]
  },
  "ASS02": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "ASS03": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC001",
        "effectiveRate": 0.929
      }
    ]
  },
  "ASSC03B": {
    "campaign": "Adepta Sororitas Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgHpR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "ASS04": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC007",
        "effectiveRate": 0.929
      }
    ]
  },
  "ASS05": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC011",
        "effectiveRate": 0.929
      }
    ]
  },
  "ASS06": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "shards_adeptRetributor",
        "effectiveRate": 0.429
      }
    ]
  },
  "ASS07": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgArmC006",
        "effectiveRate": 0.929
      }
    ]
  },
  "ASS08": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgHpC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "ASS09": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgDmgC010",
        "effectiveRate": 0.929
      }
    ]
  },
  "ASS10": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgHpR022",
        "effectiveRate": 0.571
      }
    ]
  },
  "ASS11": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "shards_adeptCanoness",
        "effectiveRate": 0.429
      }
    ]
  },
  "ASS12": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmC002",
        "effectiveRate": 0.929
      }
    ]
  },
  "ASS13": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU007",
        "effectiveRate": 0.8
      }
    ]
  },
  "ASSC13B": {
    "campaign": "Adepta Sororitas Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgHpE012",
        "effectiveRate": 0.4
      }
    ]
  },
  "ASS14": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU003",
        "effectiveRate": 0.8
      }
    ]
  },
  "ASS15": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU005",
        "effectiveRate": 0.8
      }
    ]
  },
  "ASS16": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR022",
        "effectiveRate": 0.571
      }
    ]
  },
  "ASS17": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "shards_adeptHospitaller",
        "effectiveRate": 0.429
      }
    ]
  },
  "ASS18": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU014",
        "effectiveRate": 0.8
      }
    ]
  },
  "ASS19": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU016",
        "effectiveRate": 0.8
      }
    ]
  },
  "ASS20": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmU001",
        "effectiveRate": 0.8
      }
    ]
  },
  "ASS21": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR022",
        "effectiveRate": 0.571
      }
    ]
  },
  "ASS22": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "shards_adeptMorvenn",
        "effectiveRate": 0.429
      }
    ]
  },
  "ASS23": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpU002",
        "effectiveRate": 0.8
      }
    ]
  },
  "ASS24": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgU012",
        "effectiveRate": 0.8
      }
    ]
  },
  "ASS25": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmU013",
        "effectiveRate": 0.8
      }
    ]
  },
  "ASSC25B": {
    "campaign": "Adepta Sororitas Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgDmgE003",
        "effectiveRate": 0.4
      }
    ]
  },
  "ASS26": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR002",
        "effectiveRate": 0.571
      }
    ]
  },
  "ASS27": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgR006",
        "effectiveRate": 0.571
      }
    ]
  },
  "ASS28": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "ASS29": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL102",
        "effectiveRate": 0.2
      }
    ]
  },
  "ASS30": {
    "campaign": "Adepta Sororitas Standard",
    "campaignType": "Standard",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_adeptCelestine",
        "effectiveRate": 0.429
      }
    ]
  },
  "ASE01": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC016",
        "effectiveRate": 0.941
      }
    ]
  },
  "ASE02": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC003",
        "effectiveRate": 0.941
      }
    ]
  },
  "ASE03": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC001",
        "effectiveRate": 0.941
      }
    ]
  },
  "ASEC03B": {
    "campaign": "Adepta Sororitas Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgArmE010",
        "effectiveRate": 0.429
      }
    ]
  },
  "ASE04": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC007",
        "effectiveRate": 0.941
      }
    ]
  },
  "ASE05": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC011",
        "effectiveRate": 0.941
      }
    ]
  },
  "ASE06": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_adeptRetributor",
        "effectiveRate": 0.643
      }
    ]
  },
  "ASE07": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC006",
        "effectiveRate": 0.941
      }
    ]
  },
  "ASE08": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC003",
        "effectiveRate": 0.941
      }
    ]
  },
  "ASE09": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC010",
        "effectiveRate": 0.941
      }
    ]
  },
  "ASE10": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC002",
        "effectiveRate": 0.941
      }
    ]
  },
  "ASE11": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_adeptCanoness",
        "effectiveRate": 0.643
      }
    ]
  },
  "ASE12": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmU001",
        "effectiveRate": 0.833
      }
    ]
  },
  "ASE13": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpU007",
        "effectiveRate": 0.833
      }
    ]
  },
  "ASEC13B": {
    "campaign": "Adepta Sororitas Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgArmL001",
        "effectiveRate": 0.25
      }
    ]
  },
  "ASE14": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgU003",
        "effectiveRate": 0.833
      }
    ]
  },
  "ASE15": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpR002",
        "effectiveRate": 0.692
      }
    ]
  },
  "ASE16": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgR006",
        "effectiveRate": 0.692
      }
    ]
  },
  "ASE17": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_adeptHospitaller",
        "effectiveRate": 0.643
      }
    ]
  },
  "ASE18": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmR005",
        "effectiveRate": 0.692
      }
    ]
  },
  "ASE19": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpR022",
        "effectiveRate": 0.692
      }
    ]
  },
  "ASE20": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgR022",
        "effectiveRate": 0.692
      }
    ]
  },
  "ASE21": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmR022",
        "effectiveRate": 0.692
      }
    ]
  },
  "ASE22": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_adeptMorvenn",
        "effectiveRate": 0.643
      }
    ]
  },
  "ASE23": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "upgHpL102",
        "effectiveRate": 0.25
      }
    ]
  },
  "ASE24": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "shards_adeptCelestine",
        "effectiveRate": 0.643
      }
    ]
  },
  "ASE25": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_adeptRetributor",
        "effectiveRate": 0.267
      }
    ]
  },
  "ASEC25B": {
    "campaign": "Adepta Sororitas Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 90,
        "max": 155
      }
    ],
    "potential": [
      {
        "id": "upgDmgL001",
        "effectiveRate": 0.25
      }
    ]
  },
  "ASE26": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_adeptCanoness",
        "effectiveRate": 0.267
      }
    ]
  },
  "ASE27": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_adeptHospitaller",
        "effectiveRate": 0.267
      }
    ]
  },
  "ASE28": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_adeptMorvenn",
        "effectiveRate": 0.267
      }
    ]
  },
  "ASE29": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_adeptCelestine",
        "effectiveRate": 0.267
      }
    ]
  },
  "ASE30": {
    "campaign": "Adepta Sororitas Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 90,
        "max": 155
      }
    ],
    "potential": [
      {
        "id": "upgHpM001",
        "effectiveRate": 0.154
      }
    ]
  },
  "DAS01": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC002",
        "effectiveRate": 0.929
      }
    ]
  },
  "DAS02": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC012",
        "effectiveRate": 0.929
      }
    ]
  },
  "DAS03": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgArmC002",
        "effectiveRate": 0.929
      }
    ]
  },
  "DASC03B": {
    "campaign": "Dark Angels Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgHpR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "DAS04": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgHpC017",
        "effectiveRate": 0.929
      }
    ]
  },
  "DAS05": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 40,
        "max": 66
      }
    ],
    "potential": [
      {
        "id": "upgDmgC003",
        "effectiveRate": 0.929
      }
    ]
  },
  "DAS06": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "shards_darkaHellblaster",
        "effectiveRate": 0.429
      }
    ]
  },
  "DAS07": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgArmC013",
        "effectiveRate": 0.929
      }
    ]
  },
  "DAS08": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgHpC015",
        "effectiveRate": 0.929
      }
    ]
  },
  "DAS09": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgDmgC002",
        "effectiveRate": 0.929
      }
    ]
  },
  "DAS10": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 45,
        "max": 75
      }
    ],
    "potential": [
      {
        "id": "upgHpR032",
        "effectiveRate": 0.571
      }
    ]
  },
  "DAS11": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "shards_darkaTerminator",
        "effectiveRate": 0.429
      }
    ]
  },
  "DAS12": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmC006",
        "effectiveRate": 0.929
      }
    ]
  },
  "DAS13": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgHpU002",
        "effectiveRate": 0.8
      }
    ]
  },
  "DASC13B": {
    "campaign": "Dark Angels Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgHpE003",
        "effectiveRate": 0.4
      }
    ]
  },
  "DAS14": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgU009",
        "effectiveRate": 0.8
      }
    ]
  },
  "DAS15": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgArmU005",
        "effectiveRate": 0.8
      }
    ]
  },
  "DAS16": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 48,
        "max": 82
      }
    ],
    "potential": [
      {
        "id": "upgDmgR032",
        "effectiveRate": 0.571
      }
    ]
  },
  "DAS17": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "shards_darkaCompanion",
        "effectiveRate": 0.429
      }
    ]
  },
  "DAS18": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgDmgU012",
        "effectiveRate": 0.8
      }
    ]
  },
  "DAS19": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgHpU014",
        "effectiveRate": 0.8
      }
    ]
  },
  "DAS20": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmU013",
        "effectiveRate": 0.8
      }
    ]
  },
  "DAS21": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 52,
        "max": 90
      }
    ],
    "potential": [
      {
        "id": "upgArmR032",
        "effectiveRate": 0.571
      }
    ]
  },
  "DAS22": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "shards_darkaAsmodai",
        "effectiveRate": 0.429
      }
    ]
  },
  "DAS23": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpU017",
        "effectiveRate": 0.8
      }
    ]
  },
  "DAS24": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgU003",
        "effectiveRate": 0.8
      }
    ]
  },
  "DAS25": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmU001",
        "effectiveRate": 0.8
      }
    ]
  },
  "DASC25B": {
    "campaign": "Dark Angels Standard Challenge",
    "campaignType": "Standard",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgDmgE011",
        "effectiveRate": 0.4
      }
    ]
  },
  "DAS26": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpR018",
        "effectiveRate": 0.571
      }
    ]
  },
  "DAS27": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgR005",
        "effectiveRate": 0.571
      }
    ]
  },
  "DAS28": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmR015",
        "effectiveRate": 0.571
      }
    ]
  },
  "DAS29": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpL112",
        "effectiveRate": 0.2
      }
    ]
  },
  "DAS30": {
    "campaign": "Dark Angels Standard",
    "campaignType": "Standard",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_darkaAzrael",
        "effectiveRate": 0.429
      }
    ]
  },
  "DAE01": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 1,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC002",
        "effectiveRate": 0.941
      }
    ]
  },
  "DAE02": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 2,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC012",
        "effectiveRate": 0.941
      }
    ]
  },
  "DAE03": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC002",
        "effectiveRate": 0.941
      }
    ]
  },
  "DAEC03B": {
    "campaign": "Dark Angels Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 3,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgArmE013",
        "effectiveRate": 0.429
      }
    ]
  },
  "DAE04": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 4,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC017",
        "effectiveRate": 0.941
      }
    ]
  },
  "DAE05": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 5,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC003",
        "effectiveRate": 0.941
      }
    ]
  },
  "DAE06": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 6,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "shards_darkaHellblaster",
        "effectiveRate": 0.643
      }
    ]
  },
  "DAE07": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 7,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC013",
        "effectiveRate": 0.941
      }
    ]
  },
  "DAE08": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 8,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgHpC015",
        "effectiveRate": 0.941
      }
    ]
  },
  "DAE09": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 9,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgDmgC002",
        "effectiveRate": 0.941
      }
    ]
  },
  "DAE10": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 10,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 56,
        "max": 98
      }
    ],
    "potential": [
      {
        "id": "upgArmC006",
        "effectiveRate": 0.941
      }
    ]
  },
  "DAE11": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 11,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_darkaTerminator",
        "effectiveRate": 0.643
      }
    ]
  },
  "DAE12": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 12,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmU013",
        "effectiveRate": 0.833
      }
    ]
  },
  "DAE13": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpU002",
        "effectiveRate": 0.833
      }
    ]
  },
  "DAEC13B": {
    "campaign": "Dark Angels Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 13,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 60,
        "max": 106
      }
    ],
    "potential": [
      {
        "id": "upgArmL204",
        "effectiveRate": 0.25
      }
    ]
  },
  "DAE14": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 14,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgU009",
        "effectiveRate": 0.833
      }
    ]
  },
  "DAE15": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 15,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpR018",
        "effectiveRate": 0.692
      }
    ]
  },
  "DAE16": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 16,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgR005",
        "effectiveRate": 0.692
      }
    ]
  },
  "DAE17": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 17,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_darkaCompanion",
        "effectiveRate": 0.643
      }
    ]
  },
  "DAE18": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 18,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmR015",
        "effectiveRate": 0.692
      }
    ]
  },
  "DAE19": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 19,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgHpR032",
        "effectiveRate": 0.692
      }
    ]
  },
  "DAE20": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 20,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgDmgR032",
        "effectiveRate": 0.692
      }
    ]
  },
  "DAE21": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 21,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 74,
        "max": 123
      }
    ],
    "potential": [
      {
        "id": "upgArmR032",
        "effectiveRate": 0.692
      }
    ]
  },
  "DAE22": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 22,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 93,
        "max": 140
      }
    ],
    "potential": [
      {
        "id": "shards_darkaAsmodai",
        "effectiveRate": 0.643
      }
    ]
  },
  "DAE23": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 23,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "upgHpL112",
        "effectiveRate": 0.25
      }
    ]
  },
  "DAE24": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 24,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "shards_darkaAzrael",
        "effectiveRate": 0.643
      }
    ]
  },
  "DAE25": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_darkaHellblaster",
        "effectiveRate": 0.267
      }
    ]
  },
  "DAEC25B": {
    "campaign": "Dark Angels Extremis Challenge",
    "campaignType": "Extremis",
    "nodeNumber": 25,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 90,
        "max": 155
      }
    ],
    "potential": [
      {
        "id": "upgDmgL204",
        "effectiveRate": 0.25
      }
    ]
  },
  "DAE26": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 26,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_darkaTerminator",
        "effectiveRate": 0.267
      }
    ]
  },
  "DAE27": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 27,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_darkaCompanion",
        "effectiveRate": 0.267
      }
    ]
  },
  "DAE28": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 28,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_darkaAsmodai",
        "effectiveRate": 0.267
      }
    ]
  },
  "DAE29": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 29,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 84,
        "max": 147
      }
    ],
    "potential": [
      {
        "id": "mythicShards_darkaAzrael",
        "effectiveRate": 0.267
      }
    ]
  },
  "DAE30": {
    "campaign": "Dark Angels Extremis",
    "campaignType": "Extremis",
    "nodeNumber": 30,
    "energyCost": 6,
    "guaranteed": [
      {
        "id": "gold",
        "min": 90,
        "max": 155
      }
    ],
    "potential": [
      {
        "id": "upgHpM004",
        "effectiveRate": 0.154
      }
    ]
  }
};
