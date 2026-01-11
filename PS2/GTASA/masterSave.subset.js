import { AchievementSet, define as $ } from '@cruncheevos/core';

const set = new AchievementSet({
  gameId: 37786,
  title: 'Grand Theft Auto: San Andreas [Subset - Master Save]',
});

const codeFor = () => {
  const addresses = {
    tagsSprayed: 0x66c540,
    taxiFares: 0x6b22c0,
    girlfriendStatus: 0x6b2648,
    introMissions: 0x6b26f0,
    santaMariaBeachSafehouse: 0x6b2b5c,
    elCoronaSafehouse: 0x6b2b78,
    mulhollandSafehouse: 0x6b2b80,
    veronaBeachSafehouse: 0x6b2b8c,
    jeffersonSafehouse: 0x6b2bb8,
    willowfieldSafehouse: 0x6b2bc8,
    burglaryTotal: 0x6b3be8,
    chilliadChallengeLevel: 0x6b3c0c,
    roboisCourier: 0x6b3f10,
    burgerCourier: 0x6b3f14,
    hippyCourier: 0x6b3f18,
    paramedicLevel: 0x6ba038,
    firefighterLevel: 0x6ba040,
    vigilanteLevel: 0x6ba078,
    blackjackDealer1: 0x6baec0,
    blackjackDealer2: 0x6baec4,
    blackjackCard1: 0x6baee0,
    blackjackCard2: 0x6baee4,
    blackjack: 0x6baf48,
    blackjackSplit: 0x6baf4c,
    ITBhorse1: 0x6f3bc4,
    ITBhorse2: 0x6f3bc8,
    ITBhorse3: 0x6f3bcc,
    ITBhorse4: 0x6f3bd0,
    ITBhorse5: 0x6f3bd4,
    ITBCashWon: 0x6f97cc,
    cash: 0x7096b4,
    playTime: 0x7096c8,
    progressMade: 0x802160,
    stamina: 0x8021b8,
    muscle: 0x8021bc,
    sexAppeal: 0x8021c4,
    pistolSkill: 0x802274,
    silencedPistolSkill: 0x802278,
    dEagleSkill: 0x80227c,
    shotgunSkill: 0x802280,
    sawnoffSkill: 0x802284,
    combatShotgunSkill: 0x802288,
    tec9Skill: 0x80228c,
    SMGSkill: 0x802290,
    AK47Skill: 0x802294,
    M4Skill: 0x802298,
    BMXBestTime: 0x802224,
    gamblingSkill: 0x8022a4,
    timesCheated: 0x8022f4,
    uniqueJumpsFound: 0x802310,
    uniqueJumpsCompleted: 0x802314,
    eightTrackBestPosition: 0x802380,
    bloodBowlTime: 0x80239c,
    kickstartBestScore: 0x80241c,
    dirtTrackBestPosition: 0x802444,
    NRG500BestTime: 0x802448,
    lungCapacity: 0x802454,
    snapshotsTaken: 0x80246c,
    drivingSkill: 0x802350,
    flyingSkill: 0x80244c,
    bikeSkill: 0x802464,
    cyclingSkill: 0x802468,
    horseshoesCollected: 0x802494,
    oystersCollected: 0x80249c,
    santaMariaGarage1Proof: 0x80d9e0,
    santaMariaGarage1: 0x80d9e2,
    santaMariaGarage2Proof: 0x80da20,
    santaMariaGarage2: 0x80da22,
    santaMariaGarage3Proof: 0x80da60,
    santaMariaGarage3: 0x80da62,
    santaMariaGarage4Proof: 0x80daa0,
    santaMariaGarage4: 0x80daa2,
    elCoronaGarage1: 0x80e2e2,
    elCoronaGarage2: 0x80e322,
    elCoronaGarage3: 0x80e362,
    elCoronaGarage4: 0x80e3a2,
    prostitutesPayYou: 0x88d75a,
  };

  // prettier-ignore
  const isInGame = $(['', 'Delta', '32bit', addresses.playTime, '!=', 'Value', '', 0]);

  // prettier-ignore
  const cheatDetection = $(['', 'Mem', '32bit', addresses.timesCheated, '=', 'Value', '', 0]);

  // prettier-ignore
  const noStoryMissionsCompleted = $(['', 'Mem', '32bit', addresses.introMissions, '=', 'Value', '', 0]);

  const taxiCompleted = $(
    ['', 'Delta', '32bit', addresses.taxiFares, '=', 'Value', '', 49],
    ['', 'Mem', '32bit', addresses.taxiFares, '=', 'Value', '', 50],
  );

  const firefighterCompleted = $(
    ['', 'Delta', '32bit', addresses.firefighterLevel, '=', 'Value', '', 12],
    ['', 'Mem', '32bit', addresses.firefighterLevel, '=', 'Value', '', 13],
  );

  const paramedicCompleted = $(
    ['', 'Delta', '32bit', addresses.paramedicLevel, '=', 'Value', '', 12],
    ['', 'Mem', '32bit', addresses.paramedicLevel, '=', 'Value', '', 13],
  );

  const pimpingCompleted = $(
    ['', 'Delta', '8bit', addresses.prostitutesPayYou, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', addresses.prostitutesPayYou, '=', 'Value', '', 1],
  );

  const vigilanteCompleted = $(
    ['', 'Delta', '32bit', addresses.vigilanteLevel, '=', 'Value', '', 12],
    ['', 'Mem', '32bit', addresses.vigilanteLevel, '=', 'Value', '', 13],
  );

  const roboisCourierCompleted = $(
    ['', 'Delta', '32bit', addresses.roboisCourier, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.roboisCourier, '=', 'Value', '', 1],
  );

  const hippyCourierCompleted = $(
    ['', 'Delta', '32bit', addresses.hippyCourier, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.hippyCourier, '=', 'Value', '', 1],
  );

  const burgerCourierCompleted = $(
    ['', 'Delta', '32bit', addresses.burgerCourier, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.burgerCourier, '=', 'Value', '', 1],
  );

  const BMXCompleted = $(
    // prettier-ignore
    ['', 'Mem', '32bit', addresses.BMXBestTime, '!=', 'Delta', '32bit', addresses.BMXBestTime],
    ['', 'Mem', '32bit', addresses.BMXBestTime, '!=', 'Value', '', 0],
  );

  const NRG500Completed = $(
    // prettier-ignore
    ['', 'Mem', '32bit', addresses.NRG500BestTime, '!=', 'Delta', '32bit', addresses.NRG500BestTime],
    ['', 'Mem', '32bit', addresses.NRG500BestTime, '!=', 'Value', '', 0],
  );

  const chilliadChallengeCompleted = $(
    // prettier-ignore
    ['', 'Delta', '32bit', addresses.chilliadChallengeLevel, '=', 'Value', '', 3],
    ['', 'Mem', '32bit', addresses.chilliadChallengeLevel, '=', 'Value', '', 1],
  );

  const eightTrackCompleted = $(
    // prettier-ignore
    ['', 'Mem', '32bit', addresses.eightTrackBestPosition, '!=', 'Delta', '32bit', addresses.eightTrackBestPosition],
    ['', 'Mem', '32bit', addresses.eightTrackBestPosition, '=', 'Value', '', 1],
  );

  const bloodBowlCompleted = $(
    // prettier-ignore
    ['', 'Mem', '32bit', addresses.bloodBowlTime, '!=', 'Delta', '32bit', addresses.bloodBowlTime],
    ['', 'Mem', '32bit', addresses.bloodBowlTime, '!=', 'Value', '', 0],
  );

  const kickstartCompleted = $(
    ['', 'Delta', '32bit', addresses.kickstartBestScore, '<', 'Value', '', 26],
    ['', 'Mem', '32bit', addresses.kickstartBestScore, '>=', 'Value', '', 26],
  );

  const dirtTrackCompleted = $(
    // prettier-ignore
    ['', 'Mem', '32bit', addresses.dirtTrackBestPosition, '!=', 'Delta', '32bit', addresses.dirtTrackBestPosition],
    ['', 'Mem', '32bit', addresses.dirtTrackBestPosition, '=', 'Value', '', 1],
  );

  const allTagsSprayed = $(
    ['', 'Delta', '32bit', addresses.tagsSprayed, '=', 'Value', '', 99],
    ['', 'Mem', '32bit', addresses.tagsSprayed, '=', 'Value', '', 100],
  );

  const allSnapshotsTaken = $(
    ['', 'Delta', '32bit', addresses.snapshotsTaken, '=', 'Value', '', 49],
    ['', 'Mem', '32bit', addresses.snapshotsTaken, '=', 'Value', '', 50],
  );

  const allHorseshoesCollected = $(
    ['', 'Delta', '32bit', addresses.horseshoesCollected, '=', 'Value', '', 49],
    ['', 'Mem', '32bit', addresses.horseshoesCollected, '=', 'Value', '', 50],
  );

  const allOystersCollected = $(
    ['', 'Delta', '32bit', addresses.oystersCollected, '=', 'Value', '', 49],
    ['', 'Mem', '32bit', addresses.oystersCollected, '=', 'Value', '', 50],
  );

  const leetStatus = $(
    ['', 'Delta', 'Float', addresses.progressMade, '<', 'Float', '', 25.0],
    ['', 'Mem', 'Float', addresses.progressMade, '=', 'Float', '', 25.0],
  );

  const katiePositive = $(
    ['', 'Delta', 'Bit4', addresses.girlfriendStatus, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit4', addresses.girlfriendStatus, '=', 'Value', '', 1],
  );

  const barbaraPositive = $(
    ['', 'Delta', 'Bit3', addresses.girlfriendStatus, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit3', addresses.girlfriendStatus, '=', 'Value', '', 1],
  );

  const millionaireStatus = $(
    ['', 'Delta', '32bit', addresses.cash, '<', 'Value', '', 1000000],
    ['', 'Mem', '32bit', addresses.cash, '>=', 'Value', '', 1000000],
  );

  const maxMuscle = $(
    ['', 'Delta', 'Float', addresses.muscle, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.muscle, '>=', 'Value', '', 999.0],
  );

  const maxStamina = $(
    ['', 'Delta', 'Float', addresses.stamina, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.stamina, '>=', 'Value', '', 999.0],
  );

  const maxSexAppeal = $(
    ['', 'Delta', 'Float', addresses.sexAppeal, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.sexAppeal, '>=', 'Value', '', 999.0],
  );

  const maxLungCapacity = $(
    ['', 'Delta', '32bit', addresses.lungCapacity, '<', 'Value', '', 1000],
    ['', 'Mem', '32bit', addresses.lungCapacity, '=', 'Value', '', 1000],
  );

  // prettier-ignore
  const hitmanPistol = $(
    ['', 'Delta', 'Float', addresses.pistolSkill, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.pistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.silencedPistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.dEagleSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.shotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.sawnoffSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.combatShotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.tec9Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.SMGSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.AK47Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.M4Skill, '>=', 'Value', '', 999.0],
  );

  // prettier-ignore
  const hitmanSilencedPistol = $(
    ['', 'Delta', 'Float', addresses.silencedPistolSkill, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.silencedPistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.pistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.dEagleSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.shotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.sawnoffSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.combatShotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.tec9Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.SMGSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.AK47Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.M4Skill, '>=', 'Value', '', 999.0],
  );

  // prettier-ignore
  const hitmanDEagle = $(
    ['', 'Delta', 'Float', addresses.dEagleSkill, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.dEagleSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.pistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.silencedPistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.shotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.sawnoffSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.combatShotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.tec9Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.SMGSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.AK47Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.M4Skill, '>=', 'Value', '', 999.0],
  );

  // prettier-ignore
  const hitmanShotgun = $(
    ['', 'Delta', 'Float', addresses.shotgunSkill, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.shotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.pistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.silencedPistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.dEagleSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.sawnoffSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.combatShotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.tec9Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.SMGSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.AK47Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.M4Skill, '>=', 'Value', '', 999.0],
  );

  // prettier-ignore
  const hitmanSawnoff = $(
    ['', 'Delta', 'Float', addresses.sawnoffSkill, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.sawnoffSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.pistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.silencedPistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.dEagleSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.shotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.combatShotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.tec9Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.SMGSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.AK47Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.M4Skill, '>=', 'Value', '', 999.0],
  );

  // prettier-ignore
  const hitmanCombatShotgun = $(
    ['', 'Delta', 'Float', addresses.combatShotgunSkill, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.combatShotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.pistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.silencedPistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.dEagleSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.shotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.sawnoffSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.tec9Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.SMGSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.AK47Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.M4Skill, '>=', 'Value', '', 999.0],
  );

  // prettier-ignore
  const hitmanTec9 = $(
    ['', 'Delta', 'Float', addresses.tec9Skill, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.tec9Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.pistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.silencedPistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.dEagleSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.shotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.sawnoffSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.combatShotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.SMGSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.AK47Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.M4Skill, '>=', 'Value', '', 999.0],
  );

  // prettier-ignore
  const hitmanSMG = $(
    ['', 'Delta', 'Float', addresses.SMGSkill, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.SMGSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.pistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.silencedPistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.dEagleSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.shotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.sawnoffSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.combatShotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.tec9Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.AK47Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.M4Skill, '>=', 'Value', '', 999.0],
  );

  // prettier-ignore
  const hitmanAK47 = $(
    ['', 'Delta', 'Float', addresses.AK47Skill, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.AK47Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.pistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.silencedPistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.dEagleSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.shotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.sawnoffSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.combatShotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.tec9Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.SMGSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.M4Skill, '>=', 'Value', '', 999.0],
  );

  // prettier-ignore
  const hitmanM4 = $(
    ['', 'Delta', 'Float', addresses.M4Skill, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.M4Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.pistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.silencedPistolSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.dEagleSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.shotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.sawnoffSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.combatShotgunSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.tec9Skill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.SMGSkill, '>=', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.AK47Skill, '>=', 'Value', '', 999.0],
  );

  const maxCyclingSkill = $(
    ['', 'Delta', '32bit', addresses.cyclingSkill, '<', 'Value', '', 1000],
    ['', 'Mem', '32bit', addresses.cyclingSkill, '=', 'Value', '', 1000],
  );

  const maxBikeSkill = $(
    ['', 'Delta', '32bit', addresses.bikeSkill, '<', 'Value', '', 1000],
    ['', 'Mem', '32bit', addresses.bikeSkill, '=', 'Value', '', 1000],
  );

  const maxDrivingSkill = $(
    ['', 'Delta', '32bit', addresses.drivingSkill, '<', 'Value', '', 1000],
    ['', 'Mem', '32bit', addresses.drivingSkill, '=', 'Value', '', 1000],
  );

  const maxFlyingSkill = $(
    ['', 'Delta', '32bit', addresses.flyingSkill, '<', 'Value', '', 1000],
    ['', 'Mem', '32bit', addresses.flyingSkill, '=', 'Value', '', 1000],
  );

  const maxGamblingSkill = $(
    ['', 'Delta', 'Float', addresses.gamblingSkill, '<', 'Value', '', 999.0],
    ['', 'Mem', 'Float', addresses.gamblingSkill, '>=', 'Value', '', 999.0],
  );

  const blurglaryCompleted = $(
    ['', 'Delta', '32bit', addresses.burglaryTotal, '<', 'Value', '', 10000],
    ['', 'Mem', '32bit', addresses.burglaryTotal, '>=', 'Value', '', 10000],
  );

  const allSafehousesBought = $(
    ['AddSource', 'Delta', '32bit', addresses.santaMariaBeachSafehouse],
    ['AddSource', 'Delta', '32bit', addresses.elCoronaSafehouse],
    ['AddSource', 'Delta', '32bit', addresses.mulhollandSafehouse],
    ['AddSource', 'Delta', '32bit', addresses.veronaBeachSafehouse],
    ['AddSource', 'Delta', '32bit', addresses.jeffersonSafehouse],
    ['', 'Delta', '32bit', addresses.willowfieldSafehouse, '=', 'Value', '', 5],
    ['AddSource', 'Mem', '32bit', addresses.santaMariaBeachSafehouse],
    ['AddSource', 'Mem', '32bit', addresses.elCoronaSafehouse],
    ['AddSource', 'Mem', '32bit', addresses.mulhollandSafehouse],
    ['AddSource', 'Mem', '32bit', addresses.veronaBeachSafehouse],
    ['AddSource', 'Mem', '32bit', addresses.jeffersonSafehouse],
    ['', 'Mem', '32bit', addresses.willowfieldSafehouse, '=', 'Value', '', 6],
  );

  const completedJumpsFirst = $(
    ['', 'Delta', '32bit', addresses.uniqueJumpsFound, '=', 'Value', '', 69],
    ['', 'Mem', '32bit', addresses.uniqueJumpsFound, '=', 'Value', '', 70],
    ['', 'Mem', '32bit', addresses.uniqueJumpsCompleted, '=', 'Value', '', 69],
  );

  const foundJumpsFirst = $(
    // prettier-ignore
    ['', 'Delta', '32bit', addresses.uniqueJumpsCompleted, '=', 'Value', '', 68],
    ['', 'Mem', '32bit', addresses.uniqueJumpsCompleted, '=', 'Value', '', 69],
    ['', 'Mem', '32bit', addresses.uniqueJumpsFound, '=', 'Value', '', 70],
  );

  const longShotWon = $(
    ['', 'Mem', '32bit', addresses.ITBhorse1, '=', 'Value', '', 2],
    ['', 'Mem', '32bit', addresses.ITBhorse2, '=', 'Value', '', 2],
    ['', 'Mem', '32bit', addresses.ITBhorse3, '=', 'Value', '', 2],
    ['', 'Mem', '32bit', addresses.ITBhorse4, '=', 'Value', '', 2],
    ['', 'Mem', '32bit', addresses.ITBhorse5, '=', 'Value', '', 1],
    ['', 'Delta', '32bit', addresses.ITBCashWon, '=', 'Value', '', 0xffffffff],
    ['', 'Mem', '32bit', addresses.ITBCashWon, '!=', 'Value', '', 0xffffffff],
    ['', 'Mem', '32bit', addresses.ITBCashWon, '!=', 'Value', '', 0],
  );

  const blackjackDealt = $(
    ['', 'Mem', '32bit', addresses.blackjackDealer1, '!=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.blackjackDealer2, '!=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.blackjackCard1, '!=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.blackjackCard2, '!=', 'Value', '', 0],
  );

  const blackjackWon = $(
    ['', 'Delta', '32bit', addresses.blackjack, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.blackjack, '=', 'Value', '', 1],
  );

  const blackjackWonSplit = $(
    ['', 'Delta', '32bit', addresses.blackjackSplit, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.blackjackSplit, '=', 'Value', '', 1],
  );

  // prettier-ignore
  const patriotInElCoronaGarage = $(
    ['', 'Delta', '16bit', addresses.elCoronaGarage1, '!=', 'Value', '', 470],
    ['', 'Delta', '16bit', addresses.elCoronaGarage2, '!=', 'Value', '', 470],
    ['', 'Delta', '16bit', addresses.elCoronaGarage3, '!=', 'Value', '', 470],
    ['', 'Delta', '16bit', addresses.elCoronaGarage4, '!=', 'Value', '', 470],
    ['OrNext', 'Mem', '16bit', addresses.elCoronaGarage1, '=', 'Value', '', 470],
    ['OrNext', 'Mem', '16bit', addresses.elCoronaGarage2, '=', 'Value', '', 470],
    ['OrNext', 'Mem', '16bit', addresses.elCoronaGarage3, '=', 'Value', '', 470],
    ['', 'Mem', '16bit', addresses.elCoronaGarage4, '=', 'Value', '', 470],
  );

  const barbarasRangerInSantaMariaGarage1 = $(
    ['', 'Delta', '16bit', addresses.santaMariaGarage1, '!=', 'Value', '', 599],
    ['', 'Mem', '16bit', addresses.santaMariaGarage1, '=', 'Value', '', 599],
    ['', 'Mem', 'Bit0', addresses.santaMariaGarage1Proof, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit1', addresses.santaMariaGarage1Proof, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit2', addresses.santaMariaGarage1Proof, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit3', addresses.santaMariaGarage1Proof, '=', 'Value', '', 1],
  );

  const barbarasRangerInSantaMariaGarage2 = $(
    ['', 'Delta', '16bit', addresses.santaMariaGarage2, '!=', 'Value', '', 599],
    ['', 'Mem', '16bit', addresses.santaMariaGarage2, '=', 'Value', '', 599],
    ['', 'Mem', 'Bit0', addresses.santaMariaGarage2Proof, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit1', addresses.santaMariaGarage2Proof, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit2', addresses.santaMariaGarage2Proof, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit3', addresses.santaMariaGarage2Proof, '=', 'Value', '', 1],
  );

  const barbarasRangerInSantaMariaGarage3 = $(
    ['', 'Delta', '16bit', addresses.santaMariaGarage3, '!=', 'Value', '', 599],
    ['', 'Mem', '16bit', addresses.santaMariaGarage3, '=', 'Value', '', 599],
    ['', 'Mem', 'Bit0', addresses.santaMariaGarage3Proof, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit1', addresses.santaMariaGarage3Proof, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit2', addresses.santaMariaGarage3Proof, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit3', addresses.santaMariaGarage3Proof, '=', 'Value', '', 1],
  );

  const barbarasRangerInSantaMariaGarage4 = $(
    ['', 'Delta', '16bit', addresses.santaMariaGarage4, '!=', 'Value', '', 599],
    ['', 'Mem', '16bit', addresses.santaMariaGarage4, '=', 'Value', '', 599],
    ['', 'Mem', 'Bit0', addresses.santaMariaGarage4Proof, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit1', addresses.santaMariaGarage4Proof, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit2', addresses.santaMariaGarage4Proof, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit3', addresses.santaMariaGarage4Proof, '=', 'Value', '', 1],
  );

  return {
    addresses,
    isInGame,
    cheatDetection,
    noStoryMissionsCompleted,
    taxiCompleted,
    firefighterCompleted,
    paramedicCompleted,
    pimpingCompleted,
    vigilanteCompleted,
    roboisCourierCompleted,
    hippyCourierCompleted,
    burgerCourierCompleted,
    BMXCompleted,
    NRG500Completed,
    chilliadChallengeCompleted,
    eightTrackCompleted,
    bloodBowlCompleted,
    kickstartCompleted,
    dirtTrackCompleted,
    allTagsSprayed,
    allSnapshotsTaken,
    allHorseshoesCollected,
    allOystersCollected,
    leetStatus,
    katiePositive,
    barbaraPositive,
    millionaireStatus,
    maxMuscle,
    maxStamina,
    maxSexAppeal,
    maxLungCapacity,
    hitmanPistol,
    hitmanSilencedPistol,
    hitmanDEagle,
    hitmanShotgun,
    hitmanSawnoff,
    hitmanCombatShotgun,
    hitmanTec9,
    hitmanSMG,
    hitmanAK47,
    hitmanM4,
    maxCyclingSkill,
    maxBikeSkill,
    maxDrivingSkill,
    maxFlyingSkill,
    maxGamblingSkill,
    blurglaryCompleted,
    allSafehousesBought,
    completedJumpsFirst,
    foundJumpsFirst,
    longShotWon,
    blackjackDealt,
    blackjackWon,
    blackjackWonSplit,
    patriotInElCoronaGarage,
    barbarasRangerInSantaMariaGarage1,
    barbarasRangerInSantaMariaGarage2,
    barbarasRangerInSantaMariaGarage3,
    barbarasRangerInSantaMariaGarage4,
  };
};

const c = codeFor();

set.addAchievement({
  title: "All's Fare",
  description:
    'Complete 50 Taxi fares before clearing the first story mission.',
  points: 25,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.taxiCompleted,
  ),
});

set.addAchievement({
  title: 'Out of the Fire',
  description:
    'Complete all 12 Firefighter levels before clearing the first story mission.',
  points: 25,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.firefighterCompleted,
  ),
});

set.addAchievement({
  title: 'Medical Prodigy',
  description:
    'Complete all 12 Paramedic levels before clearing the first story mission.',
  points: 25,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.paramedicCompleted,
  ),
});

set.addAchievement({
  title: 'Same Old Job',
  description:
    'Complete all 10 Pimping levels before clearing the first story mission.',
  points: 10,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.pimpingCompleted,
  ),
});

set.addAchievement({
  title: 'Police Protection',
  description:
    'Complete 12 Vigilante levels before clearing the first story mission.',
  points: 50,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.vigilanteCompleted,
  ),
});

set.addAchievement({
  title: 'Neighborhood Courier',
  description:
    "Complete Roboi's Food Mart's courier mission before clearing the first story mission.",
  points: 10,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.roboisCourierCompleted,
  ),
});

set.addAchievement({
  title: 'Seismic Delivery',
  description:
    "Complete Hippy Shopper's courier mission before clearing the first story mission.",
  points: 25,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.hippyCourierCompleted,
  ),
});

set.addAchievement({
  title: 'Running from the Heat',
  description:
    "Complete Burger Shot's courier mission before clearing the first story mission.",
  points: 25,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.burgerCourierCompleted,
  ),
});

set.addAchievement({
  title: 'Easy Rider',
  description:
    'Complete the BMX Challenge before clearing the first story mission.',
  points: 5,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.BMXCompleted,
  ),
});

set.addAchievement({
  title: 'Dry Diving',
  description:
    'Complete the NRG-500 Challenge before clearing the first story mission.',
  points: 10,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.NRG500Completed,
  ),
});

set.addAchievement({
  title: 'The Hardest Climb',
  description:
    'Beat all 3 routes in the Chiliad Challenge before clearing the first story mission.',
  points: 25,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.chilliadChallengeCompleted,
  ),
});

set.addAchievement({
  title: 'Stock Car Driver',
  description:
    'Get 1st place in 8-Track before clearing the first story mission.',
  points: 10,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.eightTrackCompleted,
  ),
});

set.addAchievement({
  title: 'Murder on Wheels',
  description:
    'Complete the Blood Bowl before clearing the first story mission.',
  points: 10,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.bloodBowlCompleted,
  ),
});

set.addAchievement({
  title: 'Stunt Rider',
  description:
    'Get a score of 26 in Kickstart before clearing the first story mission.',
  points: 10,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.kickstartCompleted,
  ),
});

set.addAchievement({
  title: 'Taking the Gold Medal Home',
  description:
    'Get 1st place in Dirt Track before clearing the first story mission.',
  points: 10,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.dirtTrackCompleted,
  ),
});

set.addAchievement({
  title: 'Getting Up',
  description: 'Spray all 100 Tags before clearing the first story mission.',
  points: 25,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.allTagsSprayed,
  ),
});

set.addAchievement({
  title: 'War Zone Photographer',
  description: 'Take all 50 Snapshots before clearing the first story mission.',
  points: 50,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.allSnapshotsTaken,
  ),
});

set.addAchievement({
  title: 'Feeling Lucky Yet?',
  description:
    'Collect all 50 Horseshoes before clearing the first story mission.',
  points: 50,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.allHorseshoesCollected,
  ),
});

set.addAchievement({
  title: 'Contents Under Water',
  description:
    'Collect all 50 Oysters before clearing the first story mission.',
  points: 50,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.allOystersCollected,
  ),
});

set.addAchievement({
  title: '1337 H4x0r',
  description:
    'Achieve 13.37% progress before clearing the first story mission.',
  points: 50,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.leetStatus,
  ),
});

set.addAchievement({
  title: 'On-Call Nursing',
  description:
    'Get Katie as a girlfriend before clearing the first story mission.',
  points: 5,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.katiePositive,
  ),
});

set.addAchievement({
  title: 'Get Out of Jail Free Card',
  description:
    'Get Barbara as a girlfriend before clearing the first story mission.',
  points: 5,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.barbaraPositive,
  ),
});

set.addAchievement({
  title: 'Early Millionaire',
  description: 'Accumulate $1,000,000 before clearing the first story mission.',
  points: 5,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.millionaireStatus,
  ),
});

set.addAchievement({
  title: 'Training Montage',
  description: 'Max out your Muscle before clearing the first story mission.',
  points: 5,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.maxMuscle,
  ),
});

set.addAchievement({
  title: 'Keeping up Appearances',
  description: 'Max out your Stamina before clearing the first story mission.',
  points: 5,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.maxStamina,
  ),
});

set.addAchievement({
  title: 'Off and on Again',
  description:
    'Max out your Sex Appeal before clearing the first story mission.',
  points: 10,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.maxSexAppeal,
  ),
});

set.addAchievement({
  title: 'Beating the Trauma',
  description:
    'Max out your Lung Capacity before clearing the first story mission.',
  points: 10,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.maxLungCapacity,
  ),
});

set.addAchievement({
  title: 'Armory Specialist',
  description:
    'Reach the skill level of Hitman with all weapons before clearing the first story mission.',
  points: 50,
  conditions: {
    core: $(c.isInGame, c.cheatDetection, c.noStoryMissionsCompleted),
    alt1: c.hitmanPistol,
    alt2: c.hitmanSilencedPistol,
    alt3: c.hitmanDEagle,
    alt4: c.hitmanShotgun,
    alt5: c.hitmanSawnoff,
    alt6: c.hitmanCombatShotgun,
    alt7: c.hitmanTec9,
    alt8: c.hitmanSMG,
    alt9: c.hitmanAK47,
    alt10: c.hitmanM4,
  },
});

set.addAchievement({
  title: 'Performance Enhancer',
  description:
    'Max out your Cycling Skill before clearing the first story mission.',
  points: 5,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.maxCyclingSkill,
  ),
});

set.addAchievement({
  title: 'Reliable Rider',
  description:
    'Max out your Bike Skill before clearing the first story mission.',
  points: 10,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.maxBikeSkill,
  ),
});

set.addAchievement({
  title: 'Well Travelled',
  description:
    'Max out your Driving Skill before clearing the first story mission.',
  points: 25,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.maxDrivingSkill,
  ),
});

set.addAchievement({
  title: 'Amateur Ace',
  description:
    'Max out your Flying Skill before clearing the first story mission.',
  points: 10,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.maxFlyingSkill,
  ),
});

set.addAchievement({
  title: 'House Regular',
  description:
    'Max out your Gambling Skill before clearing the first story mission.',
  points: 5,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.maxGamblingSkill,
  ),
});

set.addAchievement({
  title: 'Snatch and Run',
  description:
    'Steal a total worth of $10,000 in Burglary missions before clearing the first story mission.',
  points: 10,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.maxGamblingSkill,
  ),
});

set.addAchievement({
  title: 'Real Estate Trust Fund',
  description:
    'Buy all properties that are available in the beginning of the game before clearing the first story mission.',
  points: 10,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.allSafehousesBought,
  ),
});

set.addAchievement({
  title: 'Nice Run',
  description:
    'Find all 70 Unique Jumps and do all 69 possible ones before clearing the first story mission.',
  points: 50,
  conditions: {
    core: $(c.isInGame, c.cheatDetection, c.noStoryMissionsCompleted),
    alt1: c.completedJumpsFirst,
    alt2: c.foundJumpsFirst,
  },
});

set.addAchievement({
  title: 'Long Shot',
  description:
    'Bet on the horse with the lowest odds and win at Inside Track Betting before clearing the first story mission.',
  points: 2,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.longShotWon,
  ),
});

set.addAchievement({
  title: 'What Happens in Venturas...',
  description:
    'Win a hand of Blackjack before clearing the first story mission.',
  points: 3,
  conditions: {
    core: $(
      c.isInGame,
      c.cheatDetection,
      c.noStoryMissionsCompleted,
      c.blackjackDealt,
    ),
    alt1: c.blackjackWon,
    alt2: c.blackjackWonSplit,
  },
});

set.addAchievement({
  title: 'Preparing for the Future',
  description:
    'Store a Patriot in the garage at the El Corona Safe House before clearing the first story mission.',
  points: 25,
  conditions: $(
    c.isInGame,
    c.cheatDetection,
    c.noStoryMissionsCompleted,
    c.patriotInElCoronaGarage,
  ),
});

set.addAchievement({
  title: 'The Ultimate Law Enforcer',
  description:
    "Store Barbara's All-Proof Ranger in the garage at the Santa Maria Beach Safe House before clearing the first story mission.",
  points: 50,
  conditions: {
    core: $(c.isInGame, c.cheatDetection, c.noStoryMissionsCompleted),
    alt1: c.barbarasRangerInSantaMariaGarage1,
    alt2: c.barbarasRangerInSantaMariaGarage2,
    alt3: c.barbarasRangerInSantaMariaGarage3,
    alt4: c.barbarasRangerInSantaMariaGarage4,
  },
});

export default set;
