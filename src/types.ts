/** Identifiant d'alliance d'un personnage. */
export type Alliance = 'imperial' | 'chaos' | 'xenos';

/** Classe CSS de tag pour la rareté. */
export type TagVariant = 'tag-accent' | 'tag-accent-2' | 'tag-outline' | 'tag-neutral';

/** Pièce d'équipement portée par un personnage. */
export interface Equipment {
  slot: string;
  name: string;
  rarityLabel: string;
  rarityClass: TagVariant;
}

/** Compétence d'un personnage. */
export interface Skill {
  name: string;
  type: string;
  pct: number;
  levelLabel: string;
}

/** Coût de ressource pour un objectif. */
export interface GoalCost {
  label: string;
  have: number;
  need: number;
  pct: number;
}

/** Objectif en cours d'un personnage. */
export interface CharacterGoal {
  title: string;
  costs: GoalCost[];
}

/** Personnage du roster. */
export interface Character {
  id: string;
  name: string;
  faction: string;
  alliance: Alliance;
  allianceLabel: string;
  rarityLabel: string;
  rarityClass: TagVariant;
  rank: string;
  level: number;
  initials: string;
  atk: string;
  hp: string;
  armor: string;
  crit: string;
  equipment: Equipment[];
  skills: Skill[];
  goal: CharacterGoal;
}

/** Campagne affichée sur le dashboard. */
export interface Campaign {
  name: string;
  difficulty: string;
  pct: number;
  pctLabel: string;
}

/** Action recommandée sur le dashboard. */
export interface RecommendedAction {
  impact: string;
  title: string;
  reason: string;
  cost: string;
}

/** Objectif global dans l'écran Goals. */
export interface Goal {
  priority: number;
  title: string;
  linked: string;
  statusLabel: string;
  statusClass: TagVariant;
  pct: number;
}

/** Composant à farmer. */
export interface FarmComponent {
  name: string;
  have: number;
  need: number;
  pct: number;
  source: string;
}

/** Nœud de campagne recommandé pour le farm. */
export interface FarmNode {
  campaign: string;
  node: string;
  energy: number;
  dropRate: string;
  who: string[];
}

/** Écran actif de l'application. */
export type Screen = 'dashboard' | 'roster' | 'character' | 'goals' | 'farm' | 'settings';
