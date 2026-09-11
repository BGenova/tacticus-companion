import type { Campaign, Character, FarmComponent, FarmNode, Goal, RecommendedAction } from '../types';

export const ROSTER: Character[] = [
  {
    id: 'c1', name: 'Kael Ironvow', faction: 'Legio Ferrum', alliance: 'imperial', allianceLabel: 'Imperial',
    rarityLabel: 'Légendaire', rarityClass: 'tag-accent', rank: 'G3', level: 82, initials: 'KI',
    atk: '1 840', hp: '22 500', armor: '340', crit: '28%',
    equipment: [
      { slot: 'Arme', name: 'Lame Sigillite', rarityLabel: 'Légendaire', rarityClass: 'tag-accent' },
      { slot: 'Équipement 1', name: 'Cœur Blindé', rarityLabel: 'Epic', rarityClass: 'tag-accent-2' },
      { slot: 'Équipement 2', name: 'Amulette Astra', rarityLabel: 'Rare', rarityClass: 'tag-outline' },
      { slot: 'Équipement 3', name: 'Module Tactique', rarityLabel: 'Epic', rarityClass: 'tag-accent-2' },
    ],
    skills: [
      { name: 'Frappe du Zélote', type: 'Active', pct: 80, levelLabel: 'Niveau 4/5' },
      { name: 'Aura de Vigilance', type: 'Passive', pct: 60, levelLabel: 'Niveau 3/5' },
      { name: 'Second Souffle', type: 'Passive', pct: 100, levelLabel: 'Niveau 5/5' },
    ],
    goal: {
      title: 'Passer au rang Gold 1',
      costs: [
        { label: 'Shards violet', have: 86, need: 150, pct: 57 },
        { label: 'Badges XP', have: 12, need: 20, pct: 60 },
        { label: 'Or', have: 45000, need: 60000, pct: 75 },
      ],
    },
  },
  {
    id: 'c2', name: 'Sister Brenna', faction: 'Ordo Astra', alliance: 'imperial', allianceLabel: 'Imperial',
    rarityLabel: 'Epic', rarityClass: 'tag-accent-2', rank: 'S2', level: 65, initials: 'SB',
    atk: '1 210', hp: '18 300', armor: '260', crit: '22%',
    equipment: [
      { slot: 'Arme', name: 'Fusil Bolt', rarityLabel: 'Rare', rarityClass: 'tag-outline' },
      { slot: 'Équipement 1', name: 'Plaque Astra', rarityLabel: 'Epic', rarityClass: 'tag-accent-2' },
      { slot: 'Équipement 2', name: 'Rosaire', rarityLabel: 'Peu Commun', rarityClass: 'tag-neutral' },
      { slot: 'Équipement 3', name: 'Sceau de Foi', rarityLabel: 'Rare', rarityClass: 'tag-outline' },
    ],
    skills: [
      { name: 'Tir de Zèle', type: 'Active', pct: 40, levelLabel: 'Niveau 2/5' },
      { name: 'Bénédiction', type: 'Passive', pct: 60, levelLabel: 'Niveau 3/5' },
    ],
    goal: {
      title: 'Débloquer la compétence ultime',
      costs: [
        { label: 'Fragments de compétence', have: 30, need: 100, pct: 30 },
        { label: 'Or', have: 8000, need: 25000, pct: 32 },
      ],
    },
  },
  {
    id: 'c3', name: 'Marcus Thane', faction: 'Legio Ferrum', alliance: 'imperial', allianceLabel: 'Imperial',
    rarityLabel: 'Rare', rarityClass: 'tag-outline', rank: 'S1', level: 40, initials: 'MT',
    atk: '860', hp: '14 100', armor: '190', crit: '15%',
    equipment: [
      { slot: 'Arme', name: 'Marteau Servo', rarityLabel: 'Peu Commun', rarityClass: 'tag-neutral' },
      { slot: 'Équipement 1', name: 'Plaque Standard', rarityLabel: 'Commun', rarityClass: 'tag-neutral' },
    ],
    skills: [{ name: 'Charge', type: 'Active', pct: 20, levelLabel: 'Niveau 1/5' }],
    goal: { title: 'Passer au rang Silver 2', costs: [{ label: 'Shards bleu', have: 20, need: 90, pct: 22 }] },
  },
  {
    id: 'c4', name: 'Varn le Damné', faction: 'Flotte Écarlate', alliance: 'chaos', allianceLabel: 'Chaos',
    rarityLabel: 'Légendaire', rarityClass: 'tag-accent', rank: 'D1', level: 90, initials: 'VD',
    atk: '2 100', hp: '24 800', armor: '310', crit: '31%',
    equipment: [
      { slot: 'Arme', name: 'Griffe Écarlate', rarityLabel: 'Légendaire', rarityClass: 'tag-accent' },
      { slot: 'Équipement 1', name: 'Talisman du Vide', rarityLabel: 'Epic', rarityClass: 'tag-accent-2' },
      { slot: 'Équipement 2', name: 'Marque Sombre', rarityLabel: 'Epic', rarityClass: 'tag-accent-2' },
    ],
    skills: [
      { name: 'Fureur Sanglante', type: 'Active', pct: 100, levelLabel: 'Niveau 5/5' },
      { name: 'Résilience Corrompue', type: 'Passive', pct: 80, levelLabel: 'Niveau 4/5' },
    ],
    goal: { title: 'Maximiser la compétence Fureur', costs: [{ label: 'Fragments', have: 90, need: 100, pct: 90 }] },
  },
  {
    id: 'c5', name: 'Skarn Bloodmaw', faction: 'Culte du Vide', alliance: 'chaos', allianceLabel: 'Chaos',
    rarityLabel: 'Epic', rarityClass: 'tag-accent-2', rank: 'G1', level: 58, initials: 'SB',
    atk: '1 340', hp: '19 900', armor: '210', crit: '25%',
    equipment: [{ slot: 'Arme', name: 'Hache Rituelle', rarityLabel: 'Rare', rarityClass: 'tag-outline' }],
    skills: [{ name: 'Rituel de Sang', type: 'Active', pct: 40, levelLabel: 'Niveau 2/5' }],
    goal: { title: 'Passer au rang Gold 2', costs: [{ label: 'Shards rouge', have: 40, need: 130, pct: 31 }] },
  },
  {
    id: 'c6', name: 'Voss Kryll', faction: 'Flotte Écarlate', alliance: 'chaos', allianceLabel: 'Chaos',
    rarityLabel: 'Peu Commun', rarityClass: 'tag-neutral', rank: 'S2', level: 34, initials: 'VK',
    atk: '620', hp: '11 200', armor: '140', crit: '12%',
    equipment: [{ slot: 'Arme', name: 'Pistolet Corrompu', rarityLabel: 'Commun', rarityClass: 'tag-neutral' }],
    skills: [{ name: 'Tir Instable', type: 'Active', pct: 20, levelLabel: 'Niveau 1/5' }],
    goal: { title: 'Passer au rang Silver 2', costs: [{ label: 'Shards rouge', have: 15, need: 90, pct: 17 }] },
  },
  {
    id: 'c7', name: 'Xytha Vel', faction: 'Collectif Vel', alliance: 'xenos', allianceLabel: 'Xenos',
    rarityLabel: 'Rare', rarityClass: 'tag-outline', rank: 'G1', level: 55, initials: 'XV',
    atk: '1 080', hp: '15 600', armor: '175', crit: '26%',
    equipment: [{ slot: 'Arme', name: 'Lame Chitineuse', rarityLabel: 'Rare', rarityClass: 'tag-outline' }],
    skills: [{ name: 'Camouflage', type: 'Passive', pct: 60, levelLabel: 'Niveau 3/5' }],
    goal: { title: 'Passer au rang Gold 1', costs: [{ label: 'Shards vert', have: 55, need: 120, pct: 46 }] },
  },
  {
    id: 'c8', name: 'Zural le Touché', faction: 'Essaim Krythos', alliance: 'xenos', allianceLabel: 'Xenos',
    rarityLabel: 'Commun', rarityClass: 'tag-neutral', rank: 'B3', level: 21, initials: 'ZT',
    atk: '380', hp: '8 400', armor: '95', crit: '9%',
    equipment: [{ slot: 'Arme', name: 'Griffe Osseuse', rarityLabel: 'Commun', rarityClass: 'tag-neutral' }],
    skills: [{ name: 'Morsure', type: 'Active', pct: 20, levelLabel: 'Niveau 1/5' }],
    goal: { title: 'Passer au rang Bronze 4', costs: [{ label: 'Shards vert', have: 8, need: 40, pct: 20 }] },
  },
  {
    id: 'c9', name: 'Nyth Chorros', faction: 'Essaim Krythos', alliance: 'xenos', allianceLabel: 'Xenos',
    rarityLabel: 'Epic', rarityClass: 'tag-accent-2', rank: 'S1', level: 48, initials: 'NC',
    atk: '990', hp: '13 900', armor: '160', crit: '24%',
    equipment: [{ slot: 'Arme', name: 'Dard Neurotoxique', rarityLabel: 'Epic', rarityClass: 'tag-accent-2' }],
    skills: [{ name: 'Essaim', type: 'Passive', pct: 40, levelLabel: 'Niveau 2/5' }],
    goal: { title: 'Passer au rang Silver 2', costs: [{ label: 'Shards vert', have: 30, need: 90, pct: 33 }] },
  },
];

export const CAMPAIGNS: Campaign[] = [
  { name: 'Campagne Indomptable', difficulty: 'Difficile', pct: 82, pctLabel: '82% complétée' },
  { name: 'Campagne Écarlate', difficulty: 'Extrême', pct: 54, pctLabel: '54% complétée' },
  { name: 'Onslaught Xenos', difficulty: 'Normale', pct: 31, pctLabel: '31% complétée' },
];

export const ACTIONS: RecommendedAction[] = [
  { impact: 'Impact élevé', title: 'Monter Kael Ironvow à Gold 1', reason: "Débloque +12% de dégâts d'équipe en Campagne Écarlate.", cost: '86 shards violet, 45 000 or' },
  { impact: 'Urgent', title: 'Farmer le nœud 9-3', reason: "Dernier palier avant l'événement légendaire de la semaine.", cost: '6 énergie par tentative' },
  { impact: 'À réévaluer', title: 'Réévaluer Voss Kryll', reason: 'Aucun investissement depuis 3 semaines : ressources mieux utilisées ailleurs.', cost: '—' },
];

export const GOALS: Goal[] = [
  { priority: 1, title: 'Kael Ironvow → Gold 1', linked: 'Legio Ferrum · Imperial', statusLabel: 'Actif', statusClass: 'tag-accent', pct: 57 },
  { priority: 2, title: 'Sister Brenna → compétence ultime', linked: 'Ordo Astra · Imperial', statusLabel: 'Actif', statusClass: 'tag-accent', pct: 30 },
  { priority: 3, title: 'Campagne Écarlate Ch.12 → 3 étoiles', linked: 'Objectif de campagne', statusLabel: 'En pause', statusClass: 'tag-neutral', pct: 40 },
  { priority: 4, title: 'Voss Kryll → Silver 2', linked: 'Flotte Écarlate · Chaos', statusLabel: 'Actif', statusClass: 'tag-accent', pct: 17 },
  { priority: 5, title: 'Réserve de shards violet → 500', linked: 'Objectif de ressource', statusLabel: 'Terminé', statusClass: 'tag-outline', pct: 100 },
];

export const FARM_COMPONENTS: FarmComponent[] = [
  { name: 'Shard violet', have: 436, need: 500, pct: 87, source: 'Campagne Écarlate 9-3' },
  { name: 'Composant Blindage Mk.IV', have: 12, need: 40, pct: 30, source: 'Onslaught Xenos 4-2' },
  { name: 'Insigne de Légion', have: 20, need: 20, pct: 100, source: 'Événement saisonnier' },
  { name: 'Éclat Warp', have: 55, need: 80, pct: 69, source: 'Culte du Vide 6-1' },
];

export const FARM_NODES: FarmNode[] = [
  { campaign: 'Campagne Écarlate', node: 'Nœud 9-3', energy: 6, dropRate: 'élevée', who: ['Kael Ironvow', 'Sister Brenna'] },
  { campaign: 'Onslaught Xenos', node: 'Nœud 4-2', energy: 8, dropRate: 'moyenne', who: ['Voss Kryll'] },
  { campaign: 'Culte du Vide', node: 'Nœud 6-1', energy: 5, dropRate: 'élevée', who: ['Xytha Vel', 'Zural le Touché'] },
];
