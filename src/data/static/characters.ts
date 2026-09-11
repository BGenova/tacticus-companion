export type Alliance = 'imperial' | 'chaos' | 'xenos';

export interface CharacterInfo {
  id: string;
  name: string;
  faction: string;
  alliance: Alliance;
  traits: string[];
}

/**
 * Static character database.
 * Source of truth for character metadata (name, faction, alliance).
 * Player-specific data (rank, rarity, level) lives in the store.
 */
export const CHARACTER_DB: Record<string, CharacterInfo> = {
  bellator: {
    id: 'bellator',
    name: 'Bellator',
    faction: 'Ultramarines',
    alliance: 'imperial',
    traits: ['melee', 'tank'],
  },
  certus: {
    id: 'certus',
    name: 'Certus',
    faction: 'Ultramarines',
    alliance: 'imperial',
    traits: ['ranged', 'support'],
  },
  varro: {
    id: 'varro',
    name: 'Varro Tigurius',
    faction: 'Ultramarines',
    alliance: 'imperial',
    traits: ['psyker', 'support'],
  },
  marneus: {
    id: 'marneus',
    name: 'Marneus Calgar',
    faction: 'Ultramarines',
    alliance: 'imperial',
    traits: ['melee', 'tank', 'legendary'],
  },
  abraxas: {
    id: 'abraxas',
    name: 'Abraxas',
    faction: 'Black Legion',
    alliance: 'chaos',
    traits: ['melee', 'damage'],
  },
  archimatos: {
    id: 'archimatos',
    name: 'Archimatos',
    faction: 'Word Bearers',
    alliance: 'chaos',
    traits: ['psyker', 'summon'],
  },
  rotbone: {
    id: 'rotbone',
    name: 'Rotbone',
    faction: 'Death Guard',
    alliance: 'chaos',
    traits: ['tank', 'resilient'],
  },
  snotflogga: {
    id: 'snotflogga',
    name: 'Snotflogga',
    faction: 'Orks',
    alliance: 'xenos',
    traits: ['melee', 'damage'],
  },
  aethana: {
    id: 'aethana',
    name: 'Aethana',
    faction: 'Aeldari',
    alliance: 'xenos',
    traits: ['ranged', 'speed'],
  },
  shadowsun: {
    id: 'shadowsun',
    name: "Shas'O Shadowsun",
    faction: "T'au Empire",
    alliance: 'xenos',
    traits: ['ranged', 'stealth'],
  },
};

export function getCharacterInfo(id: string): CharacterInfo | undefined {
  return CHARACTER_DB[id];
}

export function getAllCharacterIds(): string[] {
  return Object.keys(CHARACTER_DB);
}
