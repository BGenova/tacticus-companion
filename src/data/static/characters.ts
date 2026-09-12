/**
 * Static character catalog — id, display name, faction, alliance.
 * Source: svehera/tacticusplanner (https://github.com/svehera/tacticusplanner),
 * no explicit license declared on the repo. Vendored for personal, local-only
 * use in this project (never published/distributed) per user decision —
 * see Tacticus_Planner_Documentation_Base/13_FARMING_DATA_SOURCE.md and
 * 14_CHARACTER_PORTRAITS.md (portraits specifically: real game art, treated
 * as a higher-sensitivity case than plain data).
 * Extracted 2026-09-12. IDs match the real Tacticus API (see 12_TACTICUS_API.md).
 *
 * Portrait images: public/character-portraits/{id}.png (one per entry here).
 */

export type Alliance = 'imperial' | 'chaos' | 'xenos';

export interface CharacterInfo {
  id: string;
  name: string;
  faction: string;
  alliance: Alliance;
}

/**
 * Static character database.
 * Source of truth for character metadata (name, faction, alliance).
 * Player-specific data (rank, rarity, level) lives in the store.
 */
export const CHARACTER_DB: Record<string, CharacterInfo> = {
  adeptCanoness: { id: 'adeptCanoness', name: 'Roswitha', faction: 'Sisterhood', alliance: 'imperial' },
  adeptCelestine: { id: 'adeptCelestine', name: 'Celestine', faction: 'Sisterhood', alliance: 'imperial' },
  adeptHospitaller: { id: 'adeptHospitaller', name: 'Isabella', faction: 'Sisterhood', alliance: 'imperial' },
  adeptMorvenn: { id: 'adeptMorvenn', name: 'Morvenn Vahl', faction: 'Sisterhood', alliance: 'imperial' },
  adeptRetributor: { id: 'adeptRetributor', name: 'Vindicta', faction: 'Sisterhood', alliance: 'imperial' },
  admecDestroyer: { id: 'admecDestroyer', name: 'Sy-gex', faction: 'AdeptusMechanicus', alliance: 'imperial' },
  admecDominus: { id: 'admecDominus', name: 'Vitruvius', faction: 'AdeptusMechanicus', alliance: 'imperial' },
  admecManipulus: { id: 'admecManipulus', name: 'Actus', faction: 'AdeptusMechanicus', alliance: 'imperial' },
  admecMarshall: { id: 'admecMarshall', name: 'Tan Gi\'da', faction: 'AdeptusMechanicus', alliance: 'imperial' },
  admecRuststalker: { id: 'admecRuststalker', name: 'Exitor-Rho', faction: 'AdeptusMechanicus', alliance: 'imperial' },
  astarCyrus: { id: 'astarCyrus', name: 'Cyrus', faction: 'AdeptusAstartes', alliance: 'imperial' },
  astarEradicator: { id: 'astarEradicator', name: 'Nubari', faction: 'AdeptusAstartes', alliance: 'imperial' },
  astarLysander: { id: 'astarLysander', name: 'Lysander', faction: 'AdeptusAstartes', alliance: 'imperial' },
  astraBullgryn: { id: 'astraBullgryn', name: 'Kut', faction: 'AstraMilitarum', alliance: 'imperial' },
  astraCreed: { id: 'astraCreed', name: 'Creed', faction: 'AstraMilitarum', alliance: 'imperial' },
  astraDreir: { id: 'astraDreir', name: 'Dreir', faction: 'AstraMilitarum', alliance: 'imperial' },
  astraOrdnance: { id: 'astraOrdnance', name: 'Thaddeus', faction: 'AstraMilitarum', alliance: 'imperial' },
  astraPrimarisPsy: { id: 'astraPrimarisPsy', name: 'Sibyll', faction: 'AstraMilitarum', alliance: 'imperial' },
  astraYarrick: { id: 'astraYarrick', name: 'Yarrick', faction: 'AstraMilitarum', alliance: 'imperial' },
  blackAbaddon: { id: 'blackAbaddon', name: 'Abaddon', faction: 'BlackLegion', alliance: 'chaos' },
  blackHaarken: { id: 'blackHaarken', name: 'Haarken', faction: 'BlackLegion', alliance: 'chaos' },
  blackObliterator: { id: 'blackObliterator', name: 'Volk', faction: 'BlackLegion', alliance: 'chaos' },
  blackPossession: { id: 'blackPossession', name: 'Archimatos', faction: 'BlackLegion', alliance: 'chaos' },
  blackTerminator: { id: 'blackTerminator', name: 'Angrax', faction: 'BlackLegion', alliance: 'chaos' },
  bloodDante: { id: 'bloodDante', name: 'Dante', faction: 'BloodAngels', alliance: 'imperial' },
  bloodDeathCompany: { id: 'bloodDeathCompany', name: 'Lucien', faction: 'BloodAngels', alliance: 'imperial' },
  bloodIntercessor: { id: 'bloodIntercessor', name: 'Mataneo', faction: 'BloodAngels', alliance: 'imperial' },
  bloodMephiston: { id: 'bloodMephiston', name: 'Mephiston', faction: 'BloodAngels', alliance: 'imperial' },
  bloodSanguinary: { id: 'bloodSanguinary', name: 'Nicodemus', faction: 'BloodAngels', alliance: 'imperial' },
  bloodTerminator: { id: 'bloodTerminator', name: 'Cezare', faction: 'BloodAngels', alliance: 'imperial' },
  custoAtlacoya: { id: 'custoAtlacoya', name: 'Atlacoya', faction: 'Custodes', alliance: 'imperial' },
  custoBladeChampion: { id: 'custoBladeChampion', name: 'Kariyan', faction: 'Custodes', alliance: 'imperial' },
  custoKyrus: { id: 'custoKyrus', name: 'Tyrith', faction: 'Custodes', alliance: 'imperial' },
  custoTrajann: { id: 'custoTrajann', name: 'Trajann', faction: 'Custodes', alliance: 'imperial' },
  custoVexilusPraetor: { id: 'custoVexilusPraetor', name: 'Aesoth', faction: 'Custodes', alliance: 'imperial' },
  darkaAsmodai: { id: 'darkaAsmodai', name: 'Asmodai', faction: 'DarkAngels', alliance: 'imperial' },
  darkaAzrael: { id: 'darkaAzrael', name: 'Azrael', faction: 'DarkAngels', alliance: 'imperial' },
  darkaCompanion: { id: 'darkaCompanion', name: 'Forcas', faction: 'DarkAngels', alliance: 'imperial' },
  darkaHellblaster: { id: 'darkaHellblaster', name: 'Sarquael', faction: 'DarkAngels', alliance: 'imperial' },
  darkaSternguard: { id: 'darkaSternguard', name: 'Ramus', faction: 'DarkAngels', alliance: 'imperial' },
  darkaTerminator: { id: 'darkaTerminator', name: 'Baraqiel', faction: 'DarkAngels', alliance: 'imperial' },
  deathBlightbringer: { id: 'deathBlightbringer', name: 'Corrodius', faction: 'DeathGuard', alliance: 'chaos' },
  deathBlightlord: { id: 'deathBlightlord', name: 'Maladus', faction: 'DeathGuard', alliance: 'chaos' },
  deathPutrifier: { id: 'deathPutrifier', name: 'Pestillian', faction: 'DeathGuard', alliance: 'chaos' },
  deathRotbone: { id: 'deathRotbone', name: 'Nauseous', faction: 'DeathGuard', alliance: 'chaos' },
  deathTyphus: { id: 'deathTyphus', name: 'Typhus', faction: 'DeathGuard', alliance: 'chaos' },
  eldarAutarch: { id: 'eldarAutarch', name: 'Aethana', faction: 'Aeldari', alliance: 'xenos' },
  eldarFarseer: { id: 'eldarFarseer', name: 'Eldryon', faction: 'Aeldari', alliance: 'xenos' },
  eldarJainZar: { id: 'eldarJainZar', name: 'Jain Zar', faction: 'Aeldari', alliance: 'xenos' },
  eldarLhykhis: { id: 'eldarLhykhis', name: 'Lhykhis', faction: 'Aeldari', alliance: 'xenos' },
  eldarMauganRa: { id: 'eldarMauganRa', name: 'Maugan Ra', faction: 'Aeldari', alliance: 'xenos' },
  eldarRanger: { id: 'eldarRanger', name: 'Calandis', faction: 'Aeldari', alliance: 'xenos' },
  emperExultant: { id: 'emperExultant', name: 'Laviscus', faction: 'EmperorsChildren', alliance: 'chaos' },
  emperFlawlessBlade: { id: 'emperFlawlessBlade', name: 'Hascule', faction: 'EmperorsChildren', alliance: 'chaos' },
  emperKakophonist: { id: 'emperKakophonist', name: 'Adamatar', faction: 'EmperorsChildren', alliance: 'chaos' },
  emperLucius: { id: 'emperLucius', name: 'Lucius', faction: 'EmperorsChildren', alliance: 'chaos' },
  emperNoiseMarine: { id: 'emperNoiseMarine', name: 'Shiron', faction: 'EmperorsChildren', alliance: 'chaos' },
  genesBiophagus: { id: 'genesBiophagus', name: 'Hollan', faction: 'Genestealers', alliance: 'xenos' },
  genesKelermorph: { id: 'genesKelermorph', name: 'Judh', faction: 'Genestealers', alliance: 'xenos' },
  genesMagus: { id: 'genesMagus', name: 'Xybia', faction: 'Genestealers', alliance: 'xenos' },
  genesPatriarch: { id: 'genesPatriarch', name: 'The Patermine', faction: 'Genestealers', alliance: 'xenos' },
  genesPrimus: { id: 'genesPrimus', name: 'Isaak', faction: 'Genestealers', alliance: 'xenos' },
  necroChronomancer: { id: 'necroChronomancer', name: 'Thothmek', faction: 'Necrons', alliance: 'xenos' },
  necroDestroyer: { id: 'necroDestroyer', name: 'Imospekh', faction: 'Necrons', alliance: 'xenos' },
  necroOverlord: { id: 'necroOverlord', name: 'Anuphet', faction: 'Necrons', alliance: 'xenos' },
  necroPlasmancer: { id: 'necroPlasmancer', name: 'Thutmose', faction: 'Necrons', alliance: 'xenos' },
  necroSpyder: { id: 'necroSpyder', name: 'Aleph-Null', faction: 'Necrons', alliance: 'xenos' },
  necroWarden: { id: 'necroWarden', name: 'Makhotep', faction: 'Necrons', alliance: 'xenos' },
  orksBigMek: { id: 'orksBigMek', name: 'Gibbascrapz', faction: 'Orks', alliance: 'xenos' },
  orksKillaKan: { id: 'orksKillaKan', name: 'Snappawrecka', faction: 'Orks', alliance: 'xenos' },
  orksNob: { id: 'orksNob', name: 'Tanksmasha', faction: 'Orks', alliance: 'xenos' },
  orksRuntherd: { id: 'orksRuntherd', name: 'Snotflogga', faction: 'Orks', alliance: 'xenos' },
  orksWarboss: { id: 'orksWarboss', name: 'Gulgortz', faction: 'Orks', alliance: 'xenos' },
  spaceBlackmane: { id: 'spaceBlackmane', name: 'Ragnar', faction: 'SpaceWolves', alliance: 'imperial' },
  spaceHound: { id: 'spaceHound', name: 'Tjark', faction: 'SpaceWolves', alliance: 'imperial' },
  spaceRockfist: { id: 'spaceRockfist', name: 'Arjac', faction: 'SpaceWolves', alliance: 'imperial' },
  spaceStormcaller: { id: 'spaceStormcaller', name: 'Njal', faction: 'SpaceWolves', alliance: 'imperial' },
  spaceWolfPriest: { id: 'spaceWolfPriest', name: 'Baldr', faction: 'SpaceWolves', alliance: 'imperial' },
  spaceWulfen: { id: 'spaceWulfen', name: 'Ulf', faction: 'SpaceWolves', alliance: 'imperial' },
  tauAunShi: { id: 'tauAunShi', name: 'Aun\'Shi', faction: 'Tau', alliance: 'xenos' },
  tauCrisis: { id: 'tauCrisis', name: 'Re\'vas', faction: 'Tau', alliance: 'xenos' },
  tauDarkstrider: { id: 'tauDarkstrider', name: 'Darkstrider', faction: 'Tau', alliance: 'xenos' },
  tauFarsight: { id: 'tauFarsight', name: 'Farsight', faction: 'Tau', alliance: 'xenos' },
  tauMarksman: { id: 'tauMarksman', name: 'Sho\'syl', faction: 'Tau', alliance: 'xenos' },
  tauShadowsun: { id: 'tauShadowsun', name: 'Shadowsun', faction: 'Tau', alliance: 'xenos' },
  templAggressor: { id: 'templAggressor', name: 'Burchard', faction: 'BlackTemplars', alliance: 'imperial' },
  templAncient: { id: 'templAncient', name: 'Thoread', faction: 'BlackTemplars', alliance: 'imperial' },
  templChampion: { id: 'templChampion', name: 'Jaeger', faction: 'BlackTemplars', alliance: 'imperial' },
  templHelbrecht: { id: 'templHelbrecht', name: 'Helbrecht', faction: 'BlackTemplars', alliance: 'imperial' },
  templSwordBrother: { id: 'templSwordBrother', name: 'Godswyl', faction: 'BlackTemplars', alliance: 'imperial' },
  thousAhriman: { id: 'thousAhriman', name: 'Ahriman', faction: 'ThousandSons', alliance: 'chaos' },
  thousInfernalMaster: { id: 'thousInfernalMaster', name: 'Abraxas', faction: 'ThousandSons', alliance: 'chaos' },
  thousSekhetar: { id: 'thousSekhetar', name: 'Sekhetar Robot', faction: 'ThousandSons', alliance: 'chaos' },
  thousSorcerer: { id: 'thousSorcerer', name: 'Thaumachus', faction: 'ThousandSons', alliance: 'chaos' },
  thousTerminator: { id: 'thousTerminator', name: 'Toth', faction: 'ThousandSons', alliance: 'chaos' },
  thousTzaangor: { id: 'thousTzaangor', name: 'Yazaghor', faction: 'ThousandSons', alliance: 'chaos' },
  tyranDeathleaper: { id: 'tyranDeathleaper', name: 'Deathleaper', faction: 'Tyranids', alliance: 'xenos' },
  tyranNeurothrope: { id: 'tyranNeurothrope', name: 'Neurothrope', faction: 'Tyranids', alliance: 'xenos' },
  tyranParasite: { id: 'tyranParasite', name: 'Parasite of Mortrex', faction: 'Tyranids', alliance: 'xenos' },
  tyranTyrantGuard: { id: 'tyranTyrantGuard', name: 'Tyrant Guard', faction: 'Tyranids', alliance: 'xenos' },
  tyranWingedPrime: { id: 'tyranWingedPrime', name: 'Winged Prime', faction: 'Tyranids', alliance: 'xenos' },
  ultraApothecary: { id: 'ultraApothecary', name: 'Incisus', faction: 'Ultramarines', alliance: 'imperial' },
  ultraCalgar: { id: 'ultraCalgar', name: 'Calgar', faction: 'Ultramarines', alliance: 'imperial' },
  ultraEliminatorSgt: { id: 'ultraEliminatorSgt', name: 'Certus', faction: 'Ultramarines', alliance: 'imperial' },
  ultraInceptorSgt: { id: 'ultraInceptorSgt', name: 'Bellator', faction: 'Ultramarines', alliance: 'imperial' },
  ultraTigurius: { id: 'ultraTigurius', name: 'Tigurius', faction: 'Ultramarines', alliance: 'imperial' },
  ultraTitus: { id: 'ultraTitus', name: 'Titus', faction: 'Ultramarines', alliance: 'imperial' },
  votanBeserk: { id: 'votanBeserk', name: 'Havyr', faction: 'LeaguesOfVotann', alliance: 'xenos' },
  votanChampion: { id: 'votanChampion', name: 'Kimm', faction: 'LeaguesOfVotann', alliance: 'xenos' },
  votanIronmaster: { id: 'votanIronmaster', name: 'Vynn', faction: 'LeaguesOfVotann', alliance: 'xenos' },
  votanMemnyr: { id: 'votanMemnyr', name: 'Ammuk', faction: 'LeaguesOfVotann', alliance: 'xenos' },
  votanUthar: { id: 'votanUthar', name: 'Uthar', faction: 'LeaguesOfVotann', alliance: 'xenos' },
  worldEightbound: { id: 'worldEightbound', name: 'Azkor', faction: 'WorldEaters', alliance: 'chaos' },
  worldExecutions: { id: 'worldExecutions', name: 'Tarvakh', faction: 'WorldEaters', alliance: 'chaos' },
  worldJakhal: { id: 'worldJakhal', name: 'Macer', faction: 'WorldEaters', alliance: 'chaos' },
  worldKharn: { id: 'worldKharn', name: 'Kharn', faction: 'WorldEaters', alliance: 'chaos' },
  worldTerminator: { id: 'worldTerminator', name: 'Wrask', faction: 'WorldEaters', alliance: 'chaos' },
};

export function getCharacterInfo(id: string): CharacterInfo | undefined {
  return CHARACTER_DB[id];
}

export function getAllCharacterIds(): string[] {
  return Object.keys(CHARACTER_DB);
}

/** Path to a character's portrait image, or undefined if not in the catalog. */
export function getCharacterPortraitUrl(id: string): string | undefined {
  return CHARACTER_DB[id] ? `/character-portraits/${id}.png` : undefined;
}
