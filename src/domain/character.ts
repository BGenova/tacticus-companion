/** Identifiant stable d'un personnage (ID du jeu/dataset, jamais le nom affiché). */
export type CharacterId = string;

/** Pièce d'équipement portée par un personnage. */
export interface Equipment {
  slot: string;
  name: string;
  rarity: string;
  level?: number;
}

/** Niveaux des compétences d'un personnage. */
export interface Abilities {
  active: number;
  passive: number;
}

/** Progression d'un personnage dans le roster du joueur. */
export interface CharacterProgress {
  characterId: CharacterId;
  rank: number;
  rarity: number;
  stars: number;
  level: number;
  xp: number;
  shards: number;
  mythicShards: number;
  abilities: Abilities;
  /** IDs des upgrades appliquées. */
  upgrades: string[];
  equipment: Equipment[];
}
