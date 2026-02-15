import {
  AchievementSet,
  define as $,
  ConditionBuilder,
  RichPresence,
  orNext,
} from '@cruncheevos/core';

import {
  richPresenceValues,
  territories,
  crews,
  crateOffsets,
  artOffsets,
  wingmenOffsets,
  cars,
  takedownEvents,
  deliveryEvents,
  crewMembers,
  starterAchievements,
  prestigeSprint1Events,
  prestigeSprint2Events,
  prestigeCircuitAchievements,
} from './constants.js';

/**
 * @template T
 * @typedef {(c: typeof codeFor extends (...args: any[]) => infer U ? U : any) => T} CodeCallbackTemplate
 */

const set = new AchievementSet({
  gameId: 18149,
  title: 'Need for Speed: Carbon - Own the City',
});

const codeFor = () => {
  const addresses = {
    racePointer: 0xbe13f8,
    currentCar: 0xbecc5c,
    opponentPointer: 0xbf0ccc,
    rewardsPointer: 0xbdce70,
    ingame: 0xbdd5a8,
    gameStarted: 0xbe9528,
    playerInfoPointer: 0xbeb4fc,
    pursuitPointer: 0xbed99c,
    bonusPointer: 0xbee808,
    loadedRacersPointer: 0xbeeae0,
    progressionPointer: 0xbf53d0,
    finishTime: 0xc32718,
    skillPoints1: 0xc327bc,
    skillPoints2: 0xc327c0,
    instantRace: 0xc376e4,
    instantRaceLoaded: 0xc3d488,
    currentSpeed: 0xc3dca8,
    rivalCrewChallengePointer: 0xbee054,
    crewTakedownTimer: 0xc680a8,
    crewTakedownTotal: 0xc680b0,
    crewTakedownSuccess: 0xc680c0,
    escapeTimer: 0xc68200,
    escapeFail: 0xc68220,
    quickOpponents: 0xc7b210,
    quickTrack: 0xc7b220,
    quickDirection: 0xc7b224,
    quickLaps: 0xc7b228,
    quickSkill: 0xc7b22c,
    mapLoaded: 0xc87390,
    crewMateEnergy1: 0xc87424,
    crewMateEnergy2: 0xc87428,
    crewMember1Pointer: 0xc8be10,
    crewMember2Pointer: 0xc8be14,
  };

  const emptyValueEqual = (value) =>
    $(['', 'Value', '', 0, '=', 'Value', '', value]);

  const emptyValueHigher = (value) =>
    $(['', 'Value', '', 0, '>', 'Value', '', value]);

  const emptyValueLower = (value) =>
    $(['', 'Value', '', 0, '<', 'Value', '', value]);

  const emptyValueHigherOrEqual = (value) =>
    $(['', 'Value', '', 0, '>=', 'Value', '', value]);

  const emptyValueEqualMeasured = (value) =>
    $(['Measured', 'Value', '', 0, '=', 'Value', '', value]);

  const emptyValueHigherOrEqualMeasured = (value) =>
    $(['Measured', 'Value', '', 0, '>=', 'Value', '', value]);

  const emptyFloatEqual = (value) =>
    $(['', 'Float', '', 0, '=', 'Float', '', value]);

  // prettier-ignore
  const offsetPointers = {
    rewards: $(['AddAddress', 'Mem', '32bit', addresses.rewardsPointer, '&', 'Value', '', 0x1ffffff]),
    progression: $(
      ['AddAddress', 'Mem', '32bit', addresses.progressionPointer, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x8e8, '&', 'Value', '', 0x1ffffff],
    ),
    carParts: $(
      ['AddAddress', 'Mem', '32bit', addresses.playerInfoPointer, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0xa0, '&', 'Value', '', 0x1ffffff],
    ),
    crewInfo: $(
      ['AddAddress', 'Mem', '32bit', addresses.playerInfoPointer, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x80, '&', 'Value', '', 0x1ffffff],
    ),
    racePosition: $(
      ['AddAddress', 'Mem', '32bit', addresses.racePointer, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x54, '&', 'Value', '', 0x1ffffff],
    ),
    raceLap: $(
      ['AddAddress', 'Mem', '32bit', addresses.racePointer, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x48, '&', 'Value', '', 0x1ffffff],
    ),
    pursuit: $(
      ['AddAddress', 'Mem', '32bit', addresses.pursuitPointer, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x00, '&', 'Value', '', 0x1ffffff],
    ),
    opponent1: $(
      ['AddAddress', 'Mem', '32bit', addresses.opponentPointer, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x08, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x34, '&', 'Value', '', 0x1ffffff],
    ),
    opponent2: $(
      ['AddAddress', 'Mem', '32bit', addresses.opponentPointer, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0xc8, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x34, '&', 'Value', '', 0x1ffffff],
    ),
    opponent3: $(
      ['AddAddress', 'Mem', '32bit', addresses.opponentPointer, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0xe0, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x34, '&', 'Value', '', 0x1ffffff],
    ),
    bonus: $(
      ['AddAddress', 'Mem', '32bit', addresses.bonusPointer, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x898, '&', 'Value', '', 0x1ffffff],
    ),
    crew1: $(
      ['AddAddress', 'Mem', '32bit', addresses.crewMember1Pointer, '&', 'Value', '', 0x1ffffff],
    ),
    crew2: $(
      ['AddAddress', 'Mem', '32bit', addresses.crewMember2Pointer, '&', 'Value', '', 0x1ffffff],
    ),
    loadedRacers: $(
      ['AddAddress', 'Mem', '32bit', addresses.loadedRacersPointer, '&', 'Value', '', 0x1ffffff],
    ),
    rivalCrewChallenge: $(
      ['AddAddress', 'Mem', '32bit', addresses.rivalCrewChallengePointer, '&', 'Value', '', 0x1ffffff],
    ),
  };

  // prettier-ignore
  const gameIs = {
    started: $(['', 'Mem', '8bit', addresses.gameStarted, '=', 'Value', '', 1]),
  };

  // prettier-ignore
  const playerIs = {
    inMenus: $(
      ['', 'Mem', '32bit', addresses.loadedRacersPointer, '=', 'Value', '', 0],
    ),
    ingame: $(
      ['', 'Mem', '32bit', addresses.loadedRacersPointer, '!=', 'Value', '', 0],
      offsetPointers.loadedRacers,
      ['', 'Mem', '32bit', 0x34, '>=', 'Value', '', 1],
    ),
    ingameCareer: $(
      ['', 'Mem', '32bit', addresses.loadedRacersPointer, '!=', 'Value', '', 0],
      offsetPointers.loadedRacers,
      ['', 'Mem', '32bit', 0x34, '>=', 'Value', '', 1],
      ['', 'Mem', '32bit', addresses.ingame, '<=', 'Value', '', 2],
    ),
    ingameCareerFree: $(
      ['', 'Mem', '32bit', addresses.loadedRacersPointer, '!=', 'Value', '', 0],
      offsetPointers.loadedRacers,
      ['', 'Mem', '32bit', 0x34, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', addresses.ingame, '<=', 'Value', '', 2],
    ),
    ingameCareerSimple: $(
      ['', 'Mem', '32bit', addresses.ingame, '<=', 'Value', '', 2],
    ),
    ingameCareerPursuit: $(
      ['', 'Mem', '32bit', addresses.ingame, '<=', 'Value', '', 2],
      ['', 'Mem', '32bit', addresses.pursuitPointer, '!=', 'Value', '', 0]
    ),
    ingameQuick: $(
      ['', 'Mem', '32bit', addresses.loadedRacersPointer, '!=', 'Value', '', 0],
      offsetPointers.loadedRacers,
      ['', 'Mem', '32bit', 0x34, '>', 'Value', '', 1],
      ['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 3],
      ['', 'Mem', '32bit', addresses.instantRace, '=', 'Value', '', 0],
    ),
    ingameQuickSimple: $(
      ['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 3],
      ['', 'Mem', '32bit', addresses.instantRace, '=', 'Value', '', 0],
    ),
    ingameCrew: $(
      ['', 'Mem', '32bit', addresses.loadedRacersPointer, '!=', 'Value', '', 0],
      offsetPointers.loadedRacers,
      ['', 'Mem', '32bit', 0x34, '>', 'Value', '', 1],
      ['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 3],
      ['', 'Mem', '32bit', addresses.instantRace, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', addresses.quickOpponents, '=', 'Value', '', 0]
    ),
    ingameInstant: $(
      ['', 'Mem', '32bit', addresses.loadedRacersPointer, '!=', 'Value', '', 0],
      offsetPointers.loadedRacers,
      ['', 'Mem', '32bit', 0x34, '>', 'Value', '', 1],
      ['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 3],
      ['', 'Mem', '32bit', addresses.instantRace, '=', 'Value', '', 1],
    ),
    ingameInstantMeasuredIf: $(
      ['', 'Mem', '32bit', addresses.loadedRacersPointer, '!=', 'Value', '', 0],
      offsetPointers.loadedRacers,
      ['', 'Mem', '32bit', 0x34, '>=', 'Value', '', 1],
      ['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 3],
      ['MeasuredIf', 'Mem', '32bit', addresses.instantRace, '=', 'Value', '', 1],
    ),
    ingameInstantSimple: $(
      ['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 3],
      ['', 'Mem', '32bit', addresses.instantRace, '=', 'Value', '', 1],
    ),
    notInIntro: $(
      offsetPointers.progression,
      ['', 'Mem', '32bit', 0x6b8, '!=', 'Value', '', 4],
    ),
    inIntro: $(
      offsetPointers.progression,
      ['', 'Mem', '32bit', 0x6b8, '=', 'Value', '', 4],
    ),
    inCircuit: $(
      offsetPointers.raceLap,
      ['', 'Mem', '32bit', 0x360, '!=', 'Value', '', 0xffffffff],
    ),
  };

  const playerMeasured = {
    car: $(['Measured', 'Mem', '32bit', addresses.currentCar]),
    cash: $(offsetPointers.rewards, ['Measured', 'Mem', '32bit', 0x2228]),
    // prettier-ignore
    eventCareer: $(offsetPointers.progression, ['Measured', 'Mem', '32bit', 0x2650]),
    eventQuick: $(['Measured', 'Mem', '32bit', addresses.quickTrack]),
    territories: $(
      ...Object.values(territories).map((territory) =>
        $(
          offsetPointers.progression,
          // prettier-ignore
          ['AddHits', 'Mem', '32bit', territory.offset, '>=', 'Value', '', 2, 1],
        ),
      ),
      ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 0],
    ),
    lapTime: $(
      offsetPointers.loadedRacers,
      // prettier-ignore
      ['Measured', 'Mem', '32bit', 0x18, '/', 'Value', '', 40],
    ),
    raceTime: $(
      offsetPointers.loadedRacers,
      // prettier-ignore
      ['Measured', 'Mem', '32bit', 0x14, '/', 'Value', '', 40],
    ),
    territory: $(
      offsetPointers.progression,
      // prettier-ignore
      ['Measured', 'Mem', '32bit', 0x2654],
    ),
  };

  const finishedIntro = $(
    offsetPointers.progression,
    ['', 'Delta', '32bit', 0x6b8, '=', 'Value', '', 4],
    offsetPointers.progression,
    ['', 'Mem', '32bit', 0x6b8, '=', 'Value', '', 1],
  );

  const beatenTerritory = (offset) =>
    $(
      offsetPointers.progression,
      ['', 'Delta', '32bit', offset, '=', 'Value', '', 1],
      offsetPointers.progression,
      ['', 'Mem', '32bit', offset, '>=', 'Value', '', 2],
    );

  const defeatedEX = $(
    offsetPointers.progression,
    ['', 'Delta', '32bit', 0x640, '=', 'Value', '', 7],
    offsetPointers.progression,
    ['', 'Mem', '32bit', 0x640, '=', 'Value', '', 0],
  );

  const completedTerritory = (offsets) => {
    const deltas = offsets.map((offset) =>
      $(offsetPointers.progression, ['AddSource', 'Delta', '32bit', offset]),
    );
    const mems = offsets.map((offset) =>
      $(offsetPointers.progression, ['AddSource', 'Mem', '32bit', offset]),
    );

    return $(...deltas, emptyValueHigher(0), ...mems, emptyValueEqual(0));
  };

  const cratesOpened = (crates) => {
    const deltas = crateOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Delta', '32bit', offset]),
    );
    const mems = crateOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Mem', '32bit', offset]),
    );

    return $(
      ...deltas,
      emptyValueEqual(crates - 1),
      ...mems,
      emptyValueEqual(crates),
    );
  };

  const artUnlocked = (artworks) => {
    const deltas = artOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Delta', '32bit', offset]),
    );
    const mems = artOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Mem', '32bit', offset]),
    );

    return $(
      ...deltas,
      emptyValueEqual(artworks - 1),
      ...mems,
      emptyValueEqual(artworks),
    );
  };

  const cratesOpenedMeasured = (crates) => {
    const deltas = crateOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Delta', '32bit', offset]),
    );
    const mems = crateOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Mem', '32bit', offset]),
    );

    return $(
      ...deltas,
      emptyValueEqual(crates - 1),
      ...mems,
      emptyValueEqualMeasured(crates),
    );
  };

  const artUnlockedMeasured = (artworks) => {
    const deltas = artOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Delta', '32bit', offset]),
    );
    const mems = artOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Mem', '32bit', offset]),
    );

    return $(
      ...deltas,
      emptyValueEqual(artworks - 1),
      ...mems,
      emptyValueEqualMeasured(artworks),
    );
  };

  const hundredPercentState = $(
    ...crateOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Mem', '32bit', offset]),
    ),
    emptyValueEqual(crateOffsets.length),
    ...artOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Mem', '32bit', offset]),
    ),
    emptyValueEqual(artOffsets.length),
    ...[
      ...crews.berserkers.eventOffsets,
      ...crews.eastsiders.eventOffsets,
      ...crews.syrens.eventOffsets,
      ...crews.mega.eventOffsets,
      ...crews.corps.eventOffsets,
      ...crews.krimsonCrew.eventOffsets,
      0x640,
      0x644,
    ].map((offset) =>
      $(offsetPointers.progression, ['AddSource', 'Mem', '32bit', offset]),
    ),
    emptyValueEqual(0),
  );

  const hundredPercentRacing = $(
    ...[
      ...crews.berserkers.eventOffsets,
      ...crews.eastsiders.eventOffsets,
      ...crews.syrens.eventOffsets,
      ...crews.mega.eventOffsets,
      ...crews.corps.eventOffsets,
      ...crews.krimsonCrew.eventOffsets,
      0x640,
      0x644,
    ].map((offset) =>
      $(offsetPointers.progression, ['AddSource', 'Delta', '32bit', offset]),
    ),
    emptyValueHigher(0),
  );

  const hundredPercentCrates = (crates) => {
    const deltas = crateOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Delta', '32bit', offset]),
    );

    return $(...deltas, emptyValueEqual(crates - 1));
  };

  const hundredPercentArt = (artworks) => {
    const deltas = artOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Delta', '32bit', offset]),
    );

    return $(...deltas, emptyValueEqual(artworks - 1));
  };

  const noUpgrades = (car) =>
    $(
      ['', 'Mem', '32bit', addresses.currentCar, '=', 'Value', '', car.id],
      offsetPointers.carParts,
      ['', 'Mem', '32bit', 0x148, '=', 'Value', '', car.handling],
      offsetPointers.carParts,
      ['', 'Mem', '32bit', 0x288, '=', 'Value', '', car.chassis],
      offsetPointers.carParts,
      ['', 'Mem', '32bit', 0x2f8, '=', 'Value', '', car.engine],
      offsetPointers.carParts,
      ['', 'Mem', '32bit', 0x368, '=', 'Value', '', car.turbo],
      offsetPointers.carParts,
      ['', 'Mem', '32bit', 0x3f8, '=', 'Value', '', 0],
    );

  const inAnyBossRace = $(
    ['', 'Mem', '32bit', addresses.loadedRacersPointer, '!=', 'Value', '', 0],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x34, '>', 'Value', '', 1],
    offsetPointers.progression,
    ['', 'Mem', '32bit', 0x2658, '=', 'Value', '', 0],
  );

  const inBossRace = (territory) =>
    $(
      ['', 'Mem', '32bit', addresses.loadedRacersPointer, '!=', 'Value', '', 0],
      offsetPointers.loadedRacers,
      ['', 'Mem', '32bit', 0x34, '>', 'Value', '', 1],
      offsetPointers.progression,
      ['', 'Mem', '32bit', 0x2658, '=', 'Value', '', 0],
      offsetPointers.progression,
      ['', 'Mem', '32bit', 0x2654, '=', 'Value', '', territory.id],
      ...territory.eventIds.map((eventId) =>
        $(
          offsetPointers.progression,
          // prettier-ignore
          ['', 'Mem', '32bit', 0x2650, '!=', 'Value', '', eventId],
        ),
      ),
    );

  const inBoss = (territory) =>
    $(
      ['', 'Mem', '32bit', addresses.loadedRacersPointer, '!=', 'Value', '', 0],
      offsetPointers.loadedRacers,
      ['', 'Mem', '32bit', 0x34, '>', 'Value', '', 1],
      offsetPointers.progression,
      ['', 'Mem', '32bit', 0x2658, '=', 'Value', '', 0],
      offsetPointers.progression,
      ['', 'Mem', '32bit', 0x2654, '=', 'Value', '', territory.id],
      offsetPointers.progression,
      ['OrNext', 'Mem', '32bit', 0x2650, '=', 'Value', '', 0],
      offsetPointers.progression,
      ['', 'Mem', '32bit', 0x2650, '=', 'Value', '', 1],
    );

  const beatenTerritoryTrigger = (offset) =>
    $(
      offsetPointers.progression,
      ['', 'Delta', '32bit', offset, '=', 'Value', '', 1],
      offsetPointers.progression,
      ['Trigger', 'Mem', '32bit', offset, '>=', 'Value', '', 2],
    );

  const reachedSpeed = (speed) =>
    $(
      ['', 'Delta', 'Float', addresses.currentSpeed, '<', 'Float', '', speed],
      ['', 'Mem', 'Float', addresses.currentSpeed, '>=', 'Float', '', speed],
    );

  // prettier-ignore
  const raceWon = $(
    offsetPointers.racePosition,
    ['', 'Mem', '32bit', 0x64, '=', 'Value', '', 0],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x34, '>', 'Value', '', 1],
    offsetPointers.loadedRacers,
    ['', 'Delta', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x38, '=', 'Mem', '32bit', 0x34],
  );

  // prettier-ignore
  const raceWonSimple = $(
    offsetPointers.racePosition,
    ['', 'Mem', '32bit', 0x64, '=', 'Value', '', 0],
    offsetPointers.loadedRacers,
    ['', 'Delta', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x38, '=', 'Mem', '32bit', 0x34],
  );

  // prettier-ignore
  const raceWon5Hits = $(
    offsetPointers.racePosition,
    ['AndNext', 'Mem', '32bit', 0x64, '=', 'Value', '', 0],
    offsetPointers.loadedRacers,
    ['AndNext', 'Mem', '32bit', 0x34, '>', 'Value', '', 1],
    offsetPointers.loadedRacers,
    ['AndNext', 'Delta', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.loadedRacers,
    ['Measured', 'Mem', '32bit', 0x38, '=', 'Mem', '32bit', 0x34, 5],
    ['ResetIf', 'Mem', '32bit', addresses.instantRaceLoaded, '=', 'Value', '', 0x1f],
    offsetPointers.loadedRacers,
    ['AndNext', 'Delta', '32bit', 0x38, '=', 'Value', '', 6],
    offsetPointers.loadedRacers,
    ['ResetIf', 'Mem', '32bit', 0x38, '=', 'Value', '', 0],
    offsetPointers.loadedRacers,
    ['AndNext', 'Delta', '32bit', 0x38, '<', 'Value', '', 6],
    offsetPointers.loadedRacers,
    ['ResetIf', 'Mem', '32bit', 0x38, '=', 'Value', '', 0x42c80000],
  );

  // prettier-ignore
  const notInCrewChallenge = $(
    ['', 'Mem', '32bit', addresses.crewTakedownTimer, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.crewTakedownSuccess, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.crewTakedownTotal, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.escapeTimer, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.escapeFail, '=', 'Value', '', 0],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x14, '>', 'Value', '', 0],
  );

  // prettier-ignore
  const isRivalCrewChallenge = $(
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x34, '>=', 'Value', '', 2],
    ['AndNext', 'Mem', '32bit', addresses.loadedRacersPointer, '!=', 'Value', '', 0],
    ['AndNext', 'Mem', '32bit', addresses.rivalCrewChallengePointer, '!=', 'Value', '', 0],
    offsetPointers.rivalCrewChallenge,
    ['', 'Mem', '8bit', 0x1d, '=', 'Value', '', 1, 1],
    ['AndNext', 'Mem', '32bit', addresses.rivalCrewChallengePointer, '!=', 'Value', '', 0],
    offsetPointers.rivalCrewChallenge,
    ['ResetIf', 'Mem', '8bit', 0x1d, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '32bit', addresses.mapLoaded, '=', 'Value', '', 1],
  );

  // prettier-ignore
  const escapeWon = $(
    ['', 'Mem', '32bit', addresses.escapeTimer, '>', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.escapeFail, '=', 'Value', '', 0],
    offsetPointers.loadedRacers,
    ['', 'Delta', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x38, '=', 'Mem', '32bit', 0x34],
  );

  // prettier-ignore
  const takedownWon = $(
    ['', 'Mem', '32bit', addresses.crewTakedownTotal, '>', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.crewTakedownSuccess, '=', 'Value', '', 1],
    offsetPointers.loadedRacers,
    ['', 'Delta', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x38, '=', 'Mem', '32bit', 0x34],
  );

  // prettier-ignore
  const escapeArtist = $(
    ['', 'Mem', '32bit', addresses.escapeTimer, '>=', 'Value', '', 120000],
    ['', 'Mem', '32bit', addresses.escapeFail, '=', 'Value', '', 0],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x34, '>', 'Value', '', 1],
    offsetPointers.loadedRacers,
    ['', 'Delta', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x38, '=', 'Mem', '32bit', 0x34],
  );

  // prettier-ignore
  const fastDelivery = $(
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x14, '<=', 'Value', '', 45000 * 4],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x34, '>', 'Value', '', 1],
    offsetPointers.loadedRacers,
    ['', 'Delta', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x38, '=', 'Mem', '32bit', 0x34],
  );

  const isDeliveryEvent = (event) =>
    $(
      offsetPointers.progression,
      ['', 'Mem', '32bit', 0x2650, '=', 'Value', '', event.id],
      offsetPointers.progression,
      ['', 'Mem', '32bit', 0x2654, '=', 'Value', '', event.territoryId],
    );

  // prettier-ignore
  const takedown25 = $(
    ['Measured', 'Mem', '32bit', addresses.crewTakedownTotal, '>=', 'Value', '', 25],
    ['MeasuredIf', 'Mem', '32bit', addresses.crewTakedownSuccess, '=', 'Value', '', 1],
    offsetPointers.loadedRacers,
    ['', 'Delta', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x38, '=', 'Mem', '32bit', 0x34],
  );

  const takedownsTotal = (total) =>
    $(
      offsetPointers.rewards,
      ['', 'Delta', '32bit', 0x2288, '<', 'Value', '', total],
      offsetPointers.rewards,
      ['', 'Mem', '32bit', 0x2288, '>=', 'Value', '', total],
    );

  const takedownsTotalMeasured = (total) =>
    $(
      offsetPointers.rewards,
      ['', 'Delta', '32bit', 0x2288, '<', 'Value', '', total],
      offsetPointers.rewards,
      ['Measured', 'Mem', '32bit', 0x2288, '>=', 'Value', '', total],
    );

  // prettier-ignore
  const takedownWonTrigger = $(
    ['Trigger', 'Mem', '32bit', addresses.crewTakedownTotal, '>', 'Value', '', 0],
    ['Trigger', 'Mem', '32bit', addresses.crewTakedownSuccess, '=', 'Value', '', 1],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x34, '>', 'Value', '', 1],
    offsetPointers.loadedRacers,
    ['', 'Delta', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.loadedRacers,
    ['Trigger', 'Mem', '32bit', 0x38, '=', 'Mem', '32bit', 0x34],
  );

  const pursuitEvaded = $(
    ['', 'Mem', '32bit', addresses.pursuitPointer, '!=', 'Value', '', 0],
    offsetPointers.pursuit,
    ['', 'Delta', 'Float', 0x5c, '=', 'Float', '', 1.0],
    offsetPointers.pursuit,
    ['', 'Mem', 'Float', 0x5c, '=', 'Float', '', -1.0],
  );

  // prettier-ignore
  const pursuit30s = $(
    ['', 'Mem', '32bit', addresses.finishTime, '<=', 'Value', '', 120000],
  );

  // prettier-ignore
  const pursuit8Takedowns = $(
    offsetPointers.pursuit,
    ['Measured', 'Mem', '32bit', 0x88, '=', 'Value', '', 8],
  );

  const pursuitEvadedTrigger = $(
    [
      'MeasuredIf',
      'Mem',
      '32bit',
      addresses.pursuitPointer,
      '!=',
      'Value',
      '',
      0,
    ],
    offsetPointers.pursuit,
    ['Trigger', 'Delta', 'Float', 0x5c, '=', 'Float', '', 1.0],
    offsetPointers.pursuit,
    ['Trigger', 'Mem', 'Float', 0x5c, '=', 'Float', '', -1.0],
  );

  const isActiveCrewMemberMaxed = (memberId, memberOffset) =>
    $(
      offsetPointers.crewInfo,
      ['AndNext', 'Mem', '32bit', 0x690, '=', 'Value', '', memberId],
      offsetPointers.rewards,
      ['AddHits', 'Mem', 'Float', memberOffset, '=', 'Float', '', 200.0, 1],
      offsetPointers.crewInfo,
      ['AndNext', 'Mem', '32bit', 0xd40, '=', 'Value', '', memberId],
      offsetPointers.rewards,
      ['AddHits', 'Mem', 'Float', memberOffset, '=', 'Float', '', 200.0, 1],
      offsetPointers.crewInfo,
      ['AndNext', 'Mem', '32bit', 0x13f0, '=', 'Value', '', memberId],
      offsetPointers.rewards,
      ['AddHits', 'Mem', 'Float', memberOffset, '=', 'Float', '', 200.0, 1],
      offsetPointers.crewInfo,
      ['AndNext', 'Mem', '32bit', 0x1aa0, '=', 'Value', '', memberId],
      offsetPointers.rewards,
      ['AddHits', 'Mem', 'Float', memberOffset, '=', 'Float', '', 200.0, 1],
      offsetPointers.crewInfo,
      ['AndNext', 'Mem', '32bit', 0x2150, '=', 'Value', '', memberId],
      offsetPointers.rewards,
      ['AddHits', 'Mem', 'Float', memberOffset, '=', 'Float', '', 200.0, 1],
    );

  const crewReset = $(
    offsetPointers.crewInfo,
    ['ResetIf', 'Mem', '32bit', 0x690, '!=', 'Delta', '32bit', 0x690],
    offsetPointers.crewInfo,
    ['ResetIf', 'Mem', '32bit', 0xd40, '!=', 'Delta', '32bit', 0xd40],
    offsetPointers.crewInfo,
    ['ResetIf', 'Mem', '32bit', 0x13f0, '!=', 'Delta', '32bit', 0x13f0],
    offsetPointers.crewInfo,
    ['ResetIf', 'Mem', '32bit', 0x1aa0, '!=', 'Delta', '32bit', 0x1aa0],
    offsetPointers.crewInfo,
    ['ResetIf', 'Mem', '32bit', 0x2150, '!=', 'Delta', '32bit', 0x2150],
  );

  const gainedSkillPoints = (points) =>
    $(
      offsetPointers.loadedRacers,
      ['', 'Mem', '32bit', 0x34, '=', 'Value', '', 6],
      offsetPointers.bonus,
      ['AddSource', 'Mem', '32bit', 0xd4, '*', 'Value', '', 2],
      offsetPointers.bonus,
      ['AddSource', 'Mem', '32bit', 0xd8, '*', 'Value', '', 2],
      offsetPointers.bonus,
      ['AddSource', 'Mem', '32bit', 0xdc, '*', 'Value', '', 2],
      offsetPointers.crew1,
      ['AddSource', 'Mem', '32bit', 0x138, '/', 'Mem', '32bit', 0x138],
      offsetPointers.crew2,
      ['AddSource', 'Mem', '32bit', 0x138, '/', 'Mem', '32bit', 0x138],
      emptyValueHigherOrEqual(points - 10),
    );

  const wingmenTotalMeasured = (total) => {
    const deltas = wingmenOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Delta', '32bit', offset]),
    );
    const mems = wingmenOffsets.map((offset) =>
      $(offsetPointers.rewards, ['AddSource', 'Mem', '32bit', offset]),
    );

    return $(
      ...deltas,
      emptyValueLower(total),
      ...mems,
      emptyValueHigherOrEqualMeasured(total),
    );
  };

  const drafterInSlot = (slotOffset) =>
    $(
      orNext(
        ...crewMembers
          .filter((member) => member.class === 'Drafter')
          .map((member) =>
            $(
              offsetPointers.rewards,
              // prettier-ignore
              ['', 'Mem', '8bit', slotOffset, '=', 'Value', '', member.id],
            ),
          ),
      ),
    );

  const crewMemberSkillsUsed = (skills) =>
    $(
      orNext(
        ...crewMembers
          .filter((member) => member.class === 'Drafter')
          .map((member) =>
            $(
              offsetPointers.rewards,
              // prettier-ignore
              ['AddSource', 'Mem', '32bit', member.useOffset, '-', 'Delta', '32bit', member.useOffset],
            ),
          ),
      ),
      emptyValueHigherOrEqual(skills),
    );

  const crewMateInUseFullLap = (slotAddress) =>
    $(
      ['ResetNextIf', 'Mem', 'Float', slotAddress, '>', 'Float', '', 0],
      ['AndNext', 'Mem', 'Float', slotAddress, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', addresses.ingame, '<=', 'Value', '', 2],
      offsetPointers.raceLap,
      ['', 'Mem', '32bit', 0x350, '>', 'Delta', '32bit', 0x350, 2],
    );

  // prettier-ignore
  const resetRace = $(
    offsetPointers.loadedRacers,
    ['ResetIf', 'Mem', '32bit', 0x34, '<', 'Value', '', 6],
  );

  const opponentsDisabled5Times = $(
    offsetPointers.loadedRacers,
    // prettier-ignore
    ['AndNext', 'Mem', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.opponent1,
    ['AndNext', 'Delta', '8bit', 0x210, '=', 'Value', '', 0],
    offsetPointers.opponent1,
    ['AddHits', 'Mem', '8bit', 0x210, '=', 'Value', '', 1],
    offsetPointers.loadedRacers,
    // prettier-ignore
    ['AndNext', 'Mem', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.opponent2,
    ['AndNext', 'Delta', '8bit', 0x210, '=', 'Value', '', 0],
    offsetPointers.opponent2,
    ['AddHits', 'Mem', '8bit', 0x210, '=', 'Value', '', 1],
    offsetPointers.loadedRacers,
    // prettier-ignore
    ['AndNext', 'Mem', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.opponent3,
    ['AndNext', 'Delta', '8bit', 0x210, '=', 'Value', '', 0],
    offsetPointers.opponent3,
    ['AddHits', 'Mem', '8bit', 0x210, '=', 'Value', '', 1],
    ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 5],
    offsetPointers.loadedRacers,
    ['ResetIf', 'Mem', '32bit', 0x34, '<', 'Value', '', 6],
    offsetPointers.loadedRacers,
    ['ResetIf', 'Mem', '32bit', 0x14, '=', 'Value', '', 0],
  );

  const allOponentsDisabled = $(
    offsetPointers.opponent1,
    ['AddSource', 'Delta', '8bit', 0x210],
    offsetPointers.opponent2,
    ['AddSource', 'Delta', '8bit', 0x210],
    offsetPointers.opponent3,
    ['AddSource', 'Delta', '8bit', 0x210],
    emptyValueLower(3),
    offsetPointers.opponent1,
    ['AddSource', 'Mem', '8bit', 0x210],
    offsetPointers.opponent2,
    ['AddSource', 'Mem', '8bit', 0x210],
    offsetPointers.opponent3,
    ['AddSource', 'Mem', '8bit', 0x210],
    emptyValueEqual(3),
  );

  // prettier-ignore
  const raceNotFinished = $(
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
  );

  const cashReached = (amount) =>
    $(
      offsetPointers.rewards,
      ['', 'Delta', '32bit', 0x2228, '<', 'Value', '', amount],
      offsetPointers.rewards,
      ['', 'Mem', '32bit', 0x2228, '>=', 'Value', '', amount],
    );

  const eventIs = (events) =>
    $(
      orNext(
        ...events.map((event) =>
          $(
            offsetPointers.progression,
            // prettier-ignore
            ['', 'Mem', '32bit', 0x2650, '=', 'Value', '', event.id],
          ),
        ),
      ),
      orNext(
        ...events.map((event) =>
          $(
            offsetPointers.progression,
            // prettier-ignore
            ['', 'Mem', '32bit', 0x2654, '=', 'Value', '', event.territoryId],
          ),
        ),
      ),
    );

  const isStarterCar = $(
    ['OrNext', 'Mem', '32bit', addresses.currentCar, '=', 'Value', '', 0x0f],
    ['OrNext', 'Mem', '32bit', addresses.currentCar, '=', 'Value', '', 0x1b],
    ['', 'Mem', '32bit', addresses.currentCar, '=', 'Value', '', 0x20],
  );

  // prettier-ignore
  const raceWonTrigger = $(
    offsetPointers.racePosition,
    ['Trigger', 'Mem', '32bit', 0x64, '=', 'Value', '', 0],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x34, '>', 'Value', '', 1],
    offsetPointers.loadedRacers,
    ['', 'Delta', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.loadedRacers,
    ['Trigger', 'Mem', '32bit', 0x38, '=', 'Mem', '32bit', 0x34],
  );

  const quickPlayHardTrack = (trackId) =>
    $(
      ['', 'Mem', '32bit', addresses.quickTrack, '=', 'Value', '', trackId],
      ['', 'Mem', '32bit', addresses.quickDirection, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', addresses.quickSkill, '=', 'Value', '', 2],
      ['', 'Mem', '32bit', addresses.quickLaps, '=', 'Value', '', 5],
      ['', 'Mem', '32bit', addresses.quickOpponents, '=', 'Value', '', 5],
    );

  const finishTimeUnder = (time) =>
    $(
      offsetPointers.loadedRacers,
      // prettier-ignore
      ['', 'Mem', '32bit', 0x14, '<=', 'Value', '', time],
    );

  const quickPlayPrestigeTrack = (trackId) =>
    $(
      ['', 'Mem', '32bit', addresses.quickTrack, '=', 'Value', '', trackId],
      ['', 'Mem', '32bit', addresses.quickDirection, '=', 'Value', '', 0],
    );

  const lapTimeUnder = (time) =>
    $(
      offsetPointers.loadedRacers,
      ['', 'Delta', '32bit', 0x18, '>', 'Value', '', time],
      offsetPointers.loadedRacers,
      ['', 'Mem', '32bit', 0x18, '<=', 'Value', '', time],
    );

  const prestigeSprintStage = (stageOffset) =>
    $(
      offsetPointers.progression,
      // prettier-ignore
      ['', 'Mem', '32bit', stageOffset, '>=', 'Value', '', 1],
    );

  const bestLapChanged = $(
    offsetPointers.loadedRacers,
    // prettier-ignore
    ['', 'Mem', '32bit', 0x18, '<', 'Delta', '32bit', 0x18],
  );

  const raceFinishedLeaderboard = $(
    offsetPointers.racePosition,
    ['', 'Mem', '32bit', 0x64, '=', 'Value', '', 0],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x34, '>', 'Value', '', 1],
    offsetPointers.loadedRacers,
    ['', 'Delta', '32bit', 0x38, '<', 'Mem', '32bit', 0x34],
    offsetPointers.loadedRacers,
    ['', 'Mem', '32bit', 0x38, '=', 'Mem', '32bit', 0x34],
  );

  return {
    addresses,
    offsetPointers,
    gameIs,
    playerIs,
    playerMeasured,
    finishedIntro,
    beatenTerritory,
    defeatedEX,
    completedTerritory,
    cratesOpened,
    artUnlocked,
    cratesOpenedMeasured,
    artUnlockedMeasured,
    hundredPercentState,
    hundredPercentRacing,
    hundredPercentCrates,
    hundredPercentArt,
    noUpgrades,
    notInCrewChallenge,
    inBossRace,
    inBoss,
    beatenTerritoryTrigger,
    reachedSpeed,
    raceWon,
    raceWonSimple,
    raceWon5Hits,
    isRivalCrewChallenge,
    escapeWon,
    takedownWon,
    escapeArtist,
    fastDelivery,
    isDeliveryEvent,
    takedown25,
    takedownsTotal,
    takedownsTotalMeasured,
    takedownWonTrigger,
    pursuitEvaded,
    pursuit30s,
    pursuit8Takedowns,
    pursuitEvadedTrigger,
    isActiveCrewMemberMaxed,
    emptyFloatEqual,
    crewReset,
    gainedSkillPoints,
    wingmenTotalMeasured,
    drafterInSlot,
    crewMemberSkillsUsed,
    crewMateInUseFullLap,
    resetRace,
    opponentsDisabled5Times,
    cashReached,
    eventIs,
    isStarterCar,
    raceWonTrigger,
    quickPlayHardTrack,
    finishTimeUnder,
    quickPlayPrestigeTrack,
    lapTimeUnder,
    prestigeSprintStage,
    allOponentsDisabled,
    bestLapChanged,
    raceNotFinished,
    raceFinishedLeaderboard,
    inAnyBossRace,
  };
};

const c = codeFor();

/**
 * @param {ConditionBuilder} core
 */
const noUpgradeGroups = (core) => {
  const groups = { core };
  cars.forEach((car, index) => {
    groups[`alt${index + 1}`] = $(c.noUpgrades(car));
  });

  return groups;
};

/**
 * @param {ConditionBuilder} core
 */
const crewVinylGroups = (core, offsetPointers) => {
  const groups = { core };
  Object.values(crews).forEach((crew, index) => {
    const crewEvents = takedownEvents.filter(
      (event) => event.crew === crew.name,
    );
    const crewEventIds = crewEvents.map((event) => event.id);
    const crewTerritoryIds = crewEvents.map((event) => event.territoryId);
    const isCrewEvent = $(
      ...crewEventIds.map((eventId) =>
        $(
          offsetPointers.progression,
          // prettier-ignore
          ['', 'Mem', '32bit', 0x2650, '=', 'Value', '', eventId],
        ),
      ),
    );
    const isCrewTerritory = $(
      ...crewTerritoryIds.map((territoryId) =>
        $(
          offsetPointers.progression,
          // prettier-ignore
          ['', 'Mem', '32bit', 0x2654, '=', 'Value', '', territoryId],
        ),
      ),
    );
    const isCrewVinyl = $(
      offsetPointers.carParts,
      // prettier-ignore
      ['OrNext', 'Mem', '32bit', 0x56c, '=', 'Value', '', crewEvents[0].crewVinylId],
      offsetPointers.carParts,
      // prettier-ignore
      ['', 'Mem', '32bit', 0x56c, '=', 'Value', '', crewEvents[0].crewVinylIdInt],
    );
    groups[`alt${index + 1}`] = $(
      orNext(isCrewEvent),
      orNext(isCrewTerritory),
      isCrewVinyl,
    );
  });

  return groups;
};

/**
 * @param {ConditionBuilder} core
 */
const deliveryGroups = (core) => {
  const groups = { core };
  deliveryEvents.forEach((event, index) => {
    groups[`alt${index + 1}`] = $(c.isDeliveryEvent(event));
  });

  return groups;
};

set.addAchievement({
  title: 'Back in the Game',
  description: 'Reunite with old friends and assemble your crew.',
  points: 1,
  type: 'progression',
  conditions: $(c.gameIs.started, c.playerIs.inMenus, c.finishedIntro),
});

for (const territory of Object.values(territories)) {
  if (territory.id !== 0x00) {
    set.addAchievement({
      title: territory.progressionTitle,
      description: territory.progressionDescription,
      points: territory.progressionPoints,
      type: 'progression',
      conditions: $(
        c.gameIs.started,
        c.playerIs.ingameCareer,
        c.playerIs.notInIntro,
        c.beatenTerritory(territory.offset),
      ),
    });
  }
}

set.addAchievement({
  title: 'Rock Hard Justice',
  description: 'Defeat EX at the Rock Quarry.',
  points: 10,
  type: 'progression',
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.defeatedEX,
  ),
});

set.addAchievement({
  title: 'Lay Down All the Cards',
  description: "Learn the truth about Mick's crash and Own the City.",
  points: 25,
  type: 'win_condition',
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.beatenTerritory(territories.rockQuarry.offset),
  ),
});

for (const crew of Object.values(crews)) {
  set.addAchievement({
    title: crew.completionName,
    description: `Complete every ${crew.name} territory event.`,
    points: crew.completionPoints,
    conditions: $(
      c.gameIs.started,
      c.playerIs.ingameCareer,
      c.playerIs.notInIntro,
      c.completedTerritory(crew.eventOffsets),
    ),
  });
}

set.addAchievement({
  title: 'Box Cutter',
  description: 'Open 15 bonus crates in Coast City.',
  points: 5,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.cratesOpened(15),
  ),
});

set.addAchievement({
  title: 'Box Destroyer',
  description: 'Open 30 bonus crates in Coast City.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.cratesOpenedMeasured(30),
  ),
});

set.addAchievement({
  title: 'My Storyboard',
  description: 'Unlock all 40 Game Art Gallery artworks.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.artUnlockedMeasured(40),
  ),
});

set.addAchievement({
  title: 'Own the City',
  description:
    'Complete all Career events, open all bonus crates and unlock all Game Art Gallery artworks.',
  points: 50,
  conditions: {
    core: $(
      c.gameIs.started,
      c.playerIs.ingameCareer,
      c.playerIs.notInIntro,
      c.hundredPercentState,
    ),
    alt1: c.hundredPercentCrates(30),
    alt2: c.hundredPercentArt(40),
    alt3: c.hundredPercentRacing,
  },
});

for (const territory of Object.values(territories)) {
  set.addAchievement({
    title: territory.noUpgradesTitle,
    description: `Defeat ${territory.boss} without performance upgrades.`,
    points: territory.noUpgradesPoints,
    type: 'missable',
    conditions: noUpgradeGroups(
      $(
        c.gameIs.started,
        c.playerIs.ingameCareerSimple,
        c.playerIs.notInIntro,
        c.notInCrewChallenge,
        ...(territory.id === 0x00
          ? c.inBoss(territory)
          : c.inBossRace(territory)),
        c.beatenTerritoryTrigger(territory.offset),
      ),
    ),
  });
}

set.addAchievement({
  title: 'Feel the Rush',
  description: 'Reach a top speed of 380 kmh (236 mph).',
  points: 10,
  conditions: $(c.gameIs.started, c.playerIs.ingame, c.reachedSpeed(236)),
});

set.addAchievement({
  title: 'Shuffle Master',
  description: 'Win an Instant Race.',
  points: 2,
  conditions: $(c.gameIs.started, c.playerIs.ingameInstantSimple, c.raceWon),
});

set.addAchievement({
  title: 'Playlist Mix Master',
  description: 'Win 5 Instant Races in a row.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameInstantMeasuredIf,
    c.raceWon5Hits,
  ),
});

set.addAchievement({
  title: 'Are You Challenging Me?',
  description: 'Win a Rival Crew Challenge.',
  points: 2,
  conditions: {
    core: $(
      c.gameIs.started,
      c.playerIs.ingameCareerSimple,
      c.playerIs.notInIntro,
      c.isRivalCrewChallenge,
    ),
    alt1: c.escapeWon,
    alt2: c.takedownWon,
  },
});

set.addAchievement({
  title: 'Escape Artist',
  description: 'Finish any Escape event with at least 30 seconds remaining.',
  points: 5,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareerSimple,
    c.playerIs.notInIntro,
    c.escapeArtist,
  ),
});

set.addAchievement({
  title: 'Same-Second Shipping',
  description: 'Finish any Delivery event in 45 seconds or less.',
  points: 5,
  conditions: deliveryGroups(
    $(
      c.gameIs.started,
      c.playerIs.ingameCareerSimple,
      c.playerIs.notInIntro,
      c.notInCrewChallenge,
      c.fastDelivery,
    ),
  ),
});

set.addAchievement({
  title: 'You Provoked a Crew War',
  description: 'Takedown 25 rival cars in a Crew Takedown event.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.takedown25,
  ),
});

set.addAchievement({
  title: 'Power Struggle',
  description: 'Takedown a total of 50 rival cars.',
  points: 5,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.takedownsTotal(50),
  ),
});

set.addAchievement({
  title: 'Crew Warfare',
  description: 'Takedown a total of 100 rival cars.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.takedownsTotalMeasured(100),
  ),
});

set.addAchievement({
  title: 'Double Agent',
  description:
    "Finish a Crew Takedown event with your car using the rival crew's vinyl.",
  points: 2,
  conditions: crewVinylGroups(
    $(
      c.gameIs.started,
      c.playerIs.ingameCareerSimple,
      c.playerIs.notInIntro,
      c.takedownWonTrigger,
    ),
    c.offsetPointers,
  ),
});

set.addAchievement({
  title: 'Gone in 30 Seconds',
  description: 'Evade a police pursuit in 30 seconds or less.',
  points: 3,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.pursuit30s,
    c.pursuitEvaded,
  ),
});

set.addAchievement({
  title: 'Who Needs Pursuit Breakers...',
  description: 'Immobilize 8 police vehicles in a single pursuit and evade.',
  points: 5,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.pursuit8Takedowns,
    c.pursuitEvadedTrigger,
  ),
});

set.addAchievement({
  title: 'Are Friends Powerful?',
  description: 'Reach 1000 Crew Respect points.',
  points: 5,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    ...crewMembers.map((member) =>
      c.isActiveCrewMemberMaxed(member.id, member.skillOffset),
    ),
    ['', 'Value', '', 0, '=', 'Value', '', 1, 5],
    c.crewReset,
  ),
});

set.addAchievement({
  title: 'Skill Farming',
  description: 'Earn 32 skill points in a race.',
  points: 5,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareerSimple,
    c.playerIs.notInIntro,
    c.playerIs.inCircuit,
    c.gainedSkillPoints(32),
    c.raceWonSimple,
  ),
});

set.addAchievement({
  title: `There's No "I" in Crew`,
  description: "Use your wingmen's special moves 100 times.",
  points: 5,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingame,
    c.wingmenTotalMeasured(100),
  ),
});

set.addAchievement({
  title: 'Take Me on a Rocket Ride',
  description:
    'Use drafter 10 times in a single Career event and win the race.',
  points: 5,
  conditions: {
    core: $(
      c.gameIs.started,
      c.playerIs.ingameCareer,
      c.playerIs.notInIntro,
      c.crewMemberSkillsUsed(10),
    ),
    alt1: c.drafterInSlot(0x1368),
    alt2: c.drafterInSlot(0x136a),
  },
});

set.addAchievement({
  title: 'All Draft and No Draft',
  description: 'Keep your drafter activated for a full lap.',
  points: 3,
  conditions: {
    core: $(
      c.gameIs.started,
      c.playerIs.ingame,
      c.playerIs.notInIntro,
      c.playerIs.ingameCareerSimple,
      c.playerIs.inCircuit,
      c.resetRace,
    ),
    alt1: $(
      c.drafterInSlot(0x1368),
      c.crewMateInUseFullLap(c.addresses.crewMateEnergy1),
    ),
    alt2: $(
      c.drafterInSlot(0x136a),
      c.crewMateInUseFullLap(c.addresses.crewMateEnergy2),
    ),
  },
});

set.addAchievement({
  title: 'The Dream Team',
  description:
    'Get 5 confirmed assassin or brawler hits in a single Career event and win the race.',
  points: 5,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareerSimple,
    c.playerIs.notInIntro,
    c.opponentsDisabled5Times,
    c.raceWonTrigger,
  ),
});

set.addAchievement({
  title: 'Assassin Supreme',
  description: 'Have 3 rivals taken down by your Crew at the same time.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.raceNotFinished,
    c.allOponentsDisabled,
  ),
});

set.addAchievement({
  title: 'Rolling in Paper',
  description: 'Reach $100,000.',
  points: 3,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.cashReached(100000),
  ),
});

set.addAchievement({
  title: 'Rolling in Bands',
  description: 'Reach $250,000.',
  points: 5,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.cashReached(250000),
  ),
});

set.addAchievement({
  title: 'Rolling in Bank',
  description: 'Reach $500,000.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareer,
    c.playerIs.notInIntro,
    c.cashReached(500000),
  ),
});

for (const achievement of starterAchievements) {
  set.addAchievement({
    title: achievement.name,
    description: achievement.description,
    points: achievement.points,
    conditions: $(
      c.gameIs.started,
      c.playerIs.ingameCareerSimple,
      c.playerIs.notInIntro,
      c.isStarterCar,
      c.eventIs(achievement.events),
      c.raceWonTrigger,
    ),
  });
}

set.addAchievement({
  title: 'The EA Games 250',
  description:
    'Win Centrifugal (Forward) in Single Race on hard with 5 laps and 5 opponents in under 4:25.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameQuickSimple,
    c.quickPlayHardTrack(0xfaf),
    c.finishTimeUnder(1060000),
    c.raceWonTrigger,
  ),
});

set.addAchievement({
  title: 'The EA Games 500',
  description:
    'Win Big East Hwy. (Forward) in Single Race on hard with 5 laps and 5 opponents in under 10:00.',
  points: 25,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameQuickSimple,
    c.quickPlayHardTrack(0xfaa),
    c.finishTimeUnder(2400000),
    c.raceWonTrigger,
  ),
});

set.addAchievement({
  title: 'Prestige Mode: Mountains to Shipyard',
  description:
    'Complete Mountains to Shipyard in under 1:26 in Commercial City, Airport, or Shipyard in Career.',
  points: 5,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareerSimple,
    c.prestigeSprintStage(0x6cc),
    c.eventIs(prestigeSprint1Events),
    c.finishTimeUnder(344000),
    c.raceWon,
  ),
});

set.addAchievement({
  title: 'Prestige Mode: High to Low',
  description: 'Complete High to Low in under 1:23 in Rock Quarry in Career.',
  points: 5,
  conditions: $(
    c.gameIs.started,
    c.playerIs.ingameCareerSimple,
    c.prestigeSprintStage(0x6a8),
    c.eventIs(prestigeSprint2Events),
    c.finishTimeUnder(332000),
    c.raceWon,
  ),
});

for (const achievement of prestigeCircuitAchievements) {
  set.addAchievement({
    title: `Prestige Mode: ${achievement.name}`,
    description: achievement.description,
    points: achievement.points,
    conditions: $(
      c.gameIs.started,
      c.playerIs.ingameQuick,
      c.quickPlayPrestigeTrack(achievement.trackId),
      c.lapTimeUnder(achievement.lapTime),
    ),
  });
}

for (const leaderboard of prestigeCircuitAchievements) {
  set.addLeaderboard({
    title: `${leaderboard.name} (Forward)`,
    description: `Best lap time in Single Event.`,
    lowerIsBetter: true,
    type: 'MILLISECS',
    conditions: {
      start: $(
        c.gameIs.started,
        c.playerIs.ingameQuick,
        c.quickPlayPrestigeTrack(leaderboard.trackId),
        c.bestLapChanged,
      ),
      cancel: '0=1',
      submit: '1=1',
      value: {
        core: c.playerMeasured.lapTime,
      },
    },
  });
}

set.addLeaderboard({
  title: 'The EA Games 250',
  description:
    'Best time in Centrifugal (Forward) in Single Race on hard with 5 laps and 5 opponents.',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      c.gameIs.started,
      c.playerIs.ingameQuickSimple,
      c.quickPlayHardTrack(0xfaf),
      c.finishTimeUnder(1060000),
      c.raceFinishedLeaderboard,
    ),
    cancel: '0=1',
    submit: '1=1',
    value: {
      core: c.playerMeasured.raceTime,
    },
  },
});

set.addLeaderboard({
  title: 'The EA Games 500',
  description:
    'Best time in Big East Hwy. (Forward) in Single Race on hard with 5 laps and 5 opponents.',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      c.gameIs.started,
      c.playerIs.ingameQuickSimple,
      c.quickPlayHardTrack(0xfaa),
      c.finishTimeUnder(2400000),
      c.raceFinishedLeaderboard,
    ),
    cancel: '0=1',
    submit: '1=1',
    value: {
      core: c.playerMeasured.raceTime,
    },
  },
});

export const rich = RichPresence({
  format: { Value: 'VALUE' },
  lookupDefaultParameters: { keyFormat: 'hex' },
  lookup: {
    Car: { values: richPresenceValues.car },
    CareerTrack: { values: richPresenceValues.careerTrack },
    QuickTrack: { values: richPresenceValues.quickTrack },
    BossRace: { values: richPresenceValues.territoryBosses },
  },
  displays: ({ lookup, format }) => {
    const display = () => {
      const car = lookup.Car.at(c.playerMeasured.car);
      const cash = format.Value.at(c.playerMeasured.cash);
      const eventCareer = lookup.CareerTrack.at(c.playerMeasured.eventCareer);
      const eventBossRace = lookup.BossRace.at(c.playerMeasured.territory);
      const eventQuick = lookup.QuickTrack.at(c.playerMeasured.eventQuick);
      const territories = format.Value.at(c.playerMeasured.territories);

      return /** @type Array<[ConditionBuilder, string]> */ ([
        [
          $(
            c.gameIs.started,
            c.playerIs.ingameCareerFree,
            c.playerIs.notInIntro,
          ),
          `[Career] In free roam 🚗 ${car} 💰 $${cash} 🗺 ${territories}/14`,
        ],
        [
          $(
            c.gameIs.started,
            c.playerIs.ingameCareerPursuit,
            c.playerIs.notInIntro,
          ),
          `[Career] In a police pursuit 🚗 ${car} 💰 $${cash} 🗺 ${territories}/14`,
        ],
        [
          $(
            c.gameIs.started,
            c.playerIs.ingameCareer,
            c.playerIs.notInIntro,
            c.isRivalCrewChallenge,
          ),
          `[Career] Rival crew challenge 🚗 ${car} 💰 $${cash} 🗺 ${territories}/14`,
        ],
        [
          $(
            c.gameIs.started,
            c.playerIs.ingameCareer,
            c.playerIs.notInIntro,
            c.inAnyBossRace,
          ),
          `[Career] ${eventBossRace} 🚗 ${car} 💰 $${cash} 🗺 ${territories}/14`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingameCareer, c.playerIs.notInIntro),
          `[Career] ${eventCareer} 🚗 ${car} 💰 $${cash} 🗺 ${territories}/14`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingameCareer, c.playerIs.inIntro),
          `[Career] Getting back in action 🚗 ${car} 💰 $${cash} 🗺 0/14`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingameInstant, c.playerIs.inIntro),
          `[Instant race] ${eventQuick} 🚗 ${car} 💰 $${cash} 🗺 0/14`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingameCrew, c.playerIs.inIntro),
          `[Crew race] ${eventQuick} 🚗 ${car} 💰 $${cash} 🗺 0/14`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingameQuick, c.playerIs.inIntro),
          `[Single race] ${eventQuick} 🚗 ${car} 💰 $${cash} 🗺 0/14`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingameInstant),
          `[Instant race] ${eventQuick} 🚗 ${car} 💰 $${cash} 🗺 ${territories}/14`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingameCrew),
          `[Crew race] ${eventQuick} 🚗 ${car} 💰 $${cash} 🗺 ${territories}/14`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingameQuick),
          `[Single race] ${eventQuick} 🚗 ${car} 💰 $${cash} 🗺 ${territories}/14`,
        ],
        [
          $(c.gameIs.started, c.playerIs.inMenus),
          `Navigating the menus 💰 $${cash} 🗺 ${territories}/14`,
        ],
      ]);
    };

    return [...display(), 'Playing Need for Speed: Carbon - Own the City'];
  },
});

export default set;
