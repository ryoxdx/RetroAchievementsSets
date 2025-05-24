import {
  AchievementSet,
  define as $,
  ConditionBuilder,
  Condition,
  RichPresence,
} from '@cruncheevos/core';

/**
 * @template T
 * @typedef {(c: typeof codeFor extends (...args: any[]) => infer U ? U : any) => T} CodeCallbackTemplate
 */

/** @typedef {CodeCallbackTemplate<ConditionBuilder | Condition>} CodeCallback */

/** @typedef {'ntsc' | 'pal'} Region */

/** @typedef {'japan' | 'italy' | 'usa'} CarCountry */

/** @typedef {'city' | 'coastal' | 'alpine' | 'rustySprings' | 'autumnValley' | 'vertigoRidge' | 'lostVegas'} Track */

const set = new AchievementSet({
  gameId: 5330,
  title: 'Road & Track Presents: The Need for Speed',
});

const records = [
  {
    id: 'city1',
    achievementId: 499911,
    leaderboardId: 126390,
    trackId: 'city',
    name: 'City',
    segment: 1,
    bestTime: 0x1cb6,
    points: 5,
  },
  {
    id: 'city2',
    achievementId: 499912,
    leaderboardId: 126391,
    trackId: 'city',
    name: 'City',
    segment: 2,
    bestTime: 0x1e46,
    points: 5,
  },
  {
    id: 'city3',
    achievementId: 499913,
    leaderboardId: 126392,
    trackId: 'city',
    name: 'City',
    segment: 3,
    bestTime: 0x2d56,
    points: 5,
  },
  {
    id: 'city',
    achievementId: 499914,
    trackId: 'city',
    name: 'City',
    bestTime: 0x6c84,
    topSpeed: 0xc9,
    points: 4,
  },
  {
    id: 'coastal1',
    achievementId: 499915,
    leaderboardId: 126393,
    trackId: 'coastal',
    name: 'Coastal',
    segment: 1,
    bestTime: 0x235e,
    points: 5,
  },
  {
    id: 'coastal2',
    achievementId: 499916,
    leaderboardId: 126394,
    trackId: 'coastal',
    name: 'Coastal',
    segment: 2,
    bestTime: 0x2666,
    points: 5,
  },
  {
    id: 'coastal3',
    achievementId: 499917,
    leaderboardId: 126395,
    trackId: 'coastal',
    name: 'Coastal',
    segment: 3,
    bestTime: 0x2cec,
    points: 5,
  },
  {
    id: 'coastal',
    achievementId: 499918,
    trackId: 'coastal',
    name: 'Coastal',
    bestTime: 0x770a,
    topSpeed: 0xbc,
    points: 4,
  },
  {
    id: 'alpine1',
    achievementId: 499919,
    leaderboardId: 126396,
    trackId: 'alpine',
    name: 'Alpine',
    segment: 1,
    bestTime: 0x25c6,
    points: 5,
  },
  {
    id: 'alpine2',
    achievementId: 499920,
    leaderboardId: 126397,
    trackId: 'alpine',
    name: 'Alpine',
    segment: 2,
    bestTime: 0x3528,
    points: 5,
  },
  {
    id: 'alpine3',
    achievementId: 499921,
    leaderboardId: 126398,
    trackId: 'alpine',
    name: 'Alpine',
    segment: 3,
    bestTime: 0x3922,
    points: 5,
  },
  {
    id: 'alpine',
    achievementId: 499922,
    trackId: 'alpine',
    name: 'Alpine',
    bestTime: 0x94f8,
    topSpeed: 0xb7,
    points: 4,
  },
  {
    id: 'rustySpringsQ',
    achievementId: 499923,
    leaderboardId: 126399,
    trackId: 'rustySprings',
    name: 'Rusty Springs',
    circuitLength: 'Quick',
    bestTime: 0x2642,
    topSpeed: 0x9f,
    bestLap: 0x8f4,
    points: 3,
  },
  {
    id: 'rustySpringsN',
    achievementId: 499924,
    trackId: 'rustySprings',
    name: 'Rusty Springs',
    circuitLength: 'Normal',
    bestTime: 0x4bca,
    points: 5,
  },
  {
    id: 'rustySpringsE',
    achievementId: 499925,
    trackId: 'rustySprings',
    name: 'Rusty Springs',
    circuitLength: 'Endurance',
    bestTime: 0x906c,
    points: 10,
  },
  {
    id: 'autumnValleyQ',
    achievementId: 499926,
    leaderboardId: 126400,
    trackId: 'autumnValley',
    name: 'Autumn Valley',
    circuitLength: 'Quick',
    bestTime: 0x2944,
    topSpeed: 0xaa,
    bestLap: 0x1416,
    points: 3,
  },
  {
    id: 'autumnValleyN',
    achievementId: 499927,
    trackId: 'autumnValley',
    name: 'Autumn Valley',
    circuitLength: 'Normal',
    bestTime: 0x7416,
    points: 5,
  },
  {
    id: 'autumnValleyE',
    achievementId: 499928,
    trackId: 'autumnValley',
    name: 'Autumn Valley',
    circuitLength: 'Endurance',
    bestTime: 0xe670,
    points: 10,
  },
  {
    id: 'vertigoRidgeQ',
    achievementId: 499929,
    leaderboardId: 126401,
    trackId: 'vertigoRidge',
    name: 'Vertigo Ridge',
    circuitLength: 'Quick',
    bestTime: 0x30e4,
    topSpeed: 0x8f,
    bestLap: 0x1704,
    points: 3,
  },
  {
    id: 'vertigoRidgeN',
    achievementId: 499930,
    trackId: 'vertigoRidge',
    name: 'Vertigo Ridge',
    circuitLength: 'Normal',
    bestTime: 0x8e98,
    points: 5,
  },
  {
    id: 'vertigoRidgeE',
    achievementId: 499931,
    trackId: 'vertigoRidge',
    name: 'Vertigo Ridge',
    circuitLength: 'Endurance',
    bestTime: 0x11754,
    points: 10,
  },
  {
    id: 'lostVegasQ',
    achievementId: 499932,
    leaderboardId: 126402,
    trackId: 'lostVegas',
    name: 'Lost Vegas',
    circuitLength: 'Quick',
    bestTime: 0x3d50,
    topSpeed: 0xc9,
    bestLap: 0xe46,
    points: 3,
  },
  {
    id: 'lostVegasN',
    achievementId: 499933,
    trackId: 'lostVegas',
    name: 'Lost Vegas',
    circuitLength: 'Normal',
    bestTime: 0x76aa,
    points: 5,
  },
  {
    id: 'lostVegasE',
    achievementId: 499934,
    trackId: 'lostVegas',
    name: 'Lost Vegas',
    circuitLength: 'Endurance',
    bestTime: 0xed30,
    points: 10,
  },
];

/**
 * @param {number} time
 */
const formatTimeString = (time) => {
  const minutes = new Date((time * 100) / 6).getMinutes();
  const seconds = new Date((time * 100) / 6)
    .getSeconds()
    .toString()
    .padStart(2, '0');
  const deciseconds = Math.floor(
    new Date((time * 100) / 6).getMilliseconds() / 100,
  );
  return `${minutes}:${seconds}.${deciseconds}`;
};

/**
 * @param {number} speed
 */
const formatSpeedString = (speed) => {
  return `${speed + 1} MPH (${Math.floor((speed + 1) * 1.60934)} km/h)`;
};

/**
 * @param {number} segment
 */
const formatSegmentString = (segment) => {
  return ['first', 'second', 'third'][segment - 1];
};

/**
 * @param {Region} region
 * @param {number} permutation
 * @param {CarCountry} [carCountry]
 * @param {Track} [track]
 * @param {number} [record]
 */
const codeFor = (region, permutation, carCountry, track, record) => {
  /**
   * @param {number} address
   */
  const offset = (address) => {
    return region === 'ntsc' ? address : address + 0x120;
  };

  /**
   * @param {number} address
   */
  const altOffset = (address) => {
    return region === 'ntsc' ? address : address + 0x118;
  };

  const addresses = {
    serial: 0x9e18,
    racing: altOffset(0xdb54c),
    twoPlayer: offset(0x10d1c0),
    track: offset(0x10d1ad),
    raceType: offset(0x10d1bc),
    raceWon: 0x1ffece,
    trackMode: offset(0xf7ec0),
    lunarSprings: offset(0xdc2f4),
    playerVehicle: offset(0xdc1f4),
    opponentVehicle: offset(0x10d248),
    speed: offset(0xdc2c4),
    circuitLength: offset(0xf840a),
    noMercy: offset(0x10d2d5),
    policeAttention: offset(0x1067a0),
    position: offset(0xdc538),
    raceFinished: offset(0xdc410),
    menu: offset(0xdc41c),
    gear: offset(0x11aedc),
    raceTime: offset(0xf64cc),
    startingLine: offset(0x10c9f4),
    gameplayMods: offset(0x10d1c4),
    loadedMenuString: 0x1fec90,
    totalTimeSprint: offset(0x1048c4),
    totalTimeCircuit: 0x1fff34,
    topSpeed: 0x1fff3c,
    bestLap: 0x1fff44,
    segment: offset(0xf8405),
    totalTimeSegment1: 0x1fff54,
    totalTimeSegment2: 0x1fff58,
    totalTimeSegment3: 0x1fff5c,
  };

  // prettier-ignore
  const regionCheck = $(
    region === 'ntsc' && ['PauseIf', 'Mem', '32bit', addresses.serial, '!=', 'Value', '', 0x554c535c],
    region === 'pal' && ['PauseIf', 'Mem', '32bit', addresses.serial, '!=', 'Value', '', 0x454c535c],
  );

  // prettier-ignore
  const isNotReplay = $.one(['', 'Mem', '8bit', addresses.racing, '<=', 'Value', '', 1]);

  // prettier-ignore
  const isNotTwoPlayer = $.one(['', 'Mem', '8bit', addresses.twoPlayer, '=', 'Value', '', 0]);

  // prettier-ignore
  const trackIs = {
    city: $.one(['', 'Mem', '8bit', addresses.track, '=', 'Value', '', 0]),
    coastal: $.one(['', 'Mem', '8bit', addresses.track, '=', 'Value', '', 1]),
    alpine: $.one(['', 'Mem', '8bit', addresses.track, '=', 'Value', '', 2]),
    rustySprings: $.one(['', 'Mem', '8bit', addresses.track, '=', 'Value', '', 3]),
    autumnValley: $.one(['', 'Mem', '8bit', addresses.track, '=', 'Value', '', 4]),
    vertigoRidge: $.one(['', 'Mem', '8bit', addresses.track, '=', 'Value', '', 5]),
    lostVegas: $.one(['', 'Mem', '8bit', addresses.track, '=', 'Value', '', 6]),
  };

  // prettier-ignore
  const raceTypeIs = {
    timeTrial: $.one(['', 'Mem', '8bit', addresses.raceType, '=', 'Value', '', 0]),
    headToHead: $.one(['', 'Mem', '8bit', addresses.raceType, '=', 'Value', '', 1]),
    race: $.one(['', 'Mem', '8bit', addresses.raceType, '=', 'Value', '', 2]),
    tournament: $.one(['', 'Mem', '8bit', addresses.raceType, '=', 'Value', '', 3]),
  };

  // prettier-ignore
  const trackModeIs = {
    normal: $.one(['', 'Mem', '8bit', addresses.trackMode, '=', 'Value', '', 0]),
    rally: $.one(['', 'Mem', '8bit', addresses.trackMode, '=', 'Value', '', 1]),
  };

  // prettier-ignore
  const raceWon = $(
    ['', 'Delta', '8bit', addresses.raceWon, '!=', 'Value', '', 1],
    ['', 'Mem', '8bit', addresses.raceWon, '=', 'Value', '', 1],
  );

  // prettier-ignore
  const raceWonTrigger = $(
    ['Trigger', 'Delta', '8bit', addresses.raceWon, '!=', 'Value', '', 1],
    ['Trigger', 'Mem', '8bit', addresses.raceWon, '=', 'Value', '', 1],
  );

  // prettier-ignore
  const isLunarSprings = $.one(['', 'Mem', '8bit', addresses.lunarSprings, '=', 'Value', '', 1]);

  // prettier-ignore
  const isNotLunarSprings = $.one(['', 'Mem', '8bit', addresses.lunarSprings, '=', 'Value', '', 0]);

  // prettier-ignore
  const playerVehicleIs = {
    supra: $.one(['', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 0]),
    diablo: $.one(['', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 1]),
    porsche: $.one(['', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 2]),
    corvette: $.one(['', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 3]),
    ferrari: $.one(['', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 4]),
    viper: $.one(['', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 5]),
    nsx: $.one(['', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 6]),
    rotary: $.one(['', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 7]),
    warrior: $.one(['', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 0xb]),
  };

  // prettier-ignore
  const opponentVehicleIs = {
    supra: $.one(['', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 0]),
    diablo: $.one(['', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 1]),
    porsche: $.one(['', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 2]),
    corvette: $.one(['', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 3]),
    ferrari: $.one(['', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 4]),
    viper: $.one(['', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 5]),
    nsx: $.one(['', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 6]),
    rotary: $.one(['', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 7]),
    thePack: $.one(['', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 8]),
  };

  // prettier-ignore
  const isRacing = $.one(['', 'Mem', '8bit', addresses.racing, '=', 'Value', '', 1]);

  // prettier-ignore
  const hasRaced = $(
    ['', 'Mem', '8bit', addresses.racing, '=', 'Value', '', 0, 1],
    ['', 'Mem', '8bit', addresses.racing, '=', 'Value', '', 1, 1],
  );

  // prettier-ignore
  const japanesePlayerVehicle = $(
    ['OrNext', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 7],
  );

  // prettier-ignore
  const japaneseOpponentVehicle = $(
    ['OrNext', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 7],
  );

  // prettier-ignore
  const americanPlayerVehicle = $(
    ['OrNext', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 5],
  );

  // prettier-ignore
  const americanOpponentVehicle = $(
    ['OrNext', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 5],
  );

  // prettier-ignore
  const italianPlayerVehicle = $(
    ['OrNext', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', addresses.playerVehicle, '=', 'Value', '', 4],
  );

  // prettier-ignore
  const italianOpponentVehicle = $(
    ['OrNext', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', addresses.opponentVehicle, '=', 'Value', '', 4],
  );

  let possibleVehicles = [];

  switch (carCountry) {
    case 'japan':
      possibleVehicles = ['supra', 'nsx', 'rotary'];
      break;
    case 'italy':
      possibleVehicles = ['diablo', 'ferrari'];
      break;
    case 'usa':
      possibleVehicles = ['corvette', 'viper'];
      break;
    default:
      possibleVehicles = [
        'supra',
        'diablo',
        'porsche',
        'corvette',
        'ferrari',
        'viper',
        'nsx',
        'rotary',
      ];
  }

  const faceOffOpponentVehicle =
    opponentVehicleIs[
      possibleVehicles[
        (permutation > possibleVehicles.length
          ? permutation > possibleVehicles.length * 2
            ? permutation - possibleVehicles.length * 2
            : permutation - possibleVehicles.length
          : permutation) - 1
      ]
    ];

  const faceOffPlayerVehicleSameAsOpponent =
    playerVehicleIs[
      possibleVehicles[
        (permutation > possibleVehicles.length
          ? permutation > possibleVehicles.length * 2
            ? permutation - possibleVehicles.length * 2
            : permutation - possibleVehicles.length
          : permutation) - 1
      ]
    ];

  const dirtyFastSpeed = region === 'ntsc' ? 0x118 : 0x1c2;

  // prettier-ignore
  const isDirtyFast = $(
    ['', 'Delta', '16bit', addresses.speed, '<', 'Value', '', dirtyFastSpeed],
    ['', 'Mem', '16bit', addresses.speed, '=', 'Value', '', dirtyFastSpeed],
  );

  // prettier-ignore
  const circuitLengthIs = {
    quick: $.one(['', 'Mem', '8bit', addresses.circuitLength, '=', 'Value', '', 0]),
    normal: $.one(['', 'Mem', '8bit', addresses.circuitLength, '=', 'Value', '', 1]),
    endurance: $.one(['', 'Mem', '8bit', addresses.circuitLength, '=', 'Value', '', 2]),
  };

  // prettier-ignore
  const isNoMercy = $.one(['', 'Mem', '8bit', addresses.noMercy, '=', 'Value', '', 1]);

  // prettier-ignore
  const player = {
    hasTicket: $.one(['', 'Mem', '8bit', addresses.policeAttention, '=', 'Value', '', 1]),
    isFirst: $.one(['', 'Mem', '8bit', addresses.position, '=', 'Value', '', 1]),
    notUsingWarrior: $.one(['', 'Mem', '8bit', addresses.playerVehicle, '!=', 'Value', '', 0xb]),
    notUsingDiablo: $.one(['', 'Mem', '8bit', addresses.playerVehicle, '!=', 'Value', '', 1]),
  };

  // prettier-ignore
  const raceFinished = $(
    ['', 'Delta', '8bit', addresses.raceFinished, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', addresses.raceFinished, '=', 'Value', '', 1],
  );

  // prettier-ignore
  const raceFinishedTrigger = $(
    ['Trigger', 'Delta', '8bit', addresses.raceFinished, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', addresses.raceFinished, '=', 'Value', '', 1],
  );

  // prettier-ignore
  const notInMenus = $.one(['', 'Mem', '8bit', addresses.menu, '=', 'Value', '', 0]);

  // prettier-ignore
  const resetIfInMenus = $.one(['ResetIf', 'Mem', '8bit', addresses.menu, '=', 'Value', '', 1]);

  // prettier-ignore
  const raceTimerIsFiveSecondsOrMore = $.one(['', 'Mem', '32bit', addresses.raceTime, '>=', 'Value', '', 0x258]);

  // prettier-ignore
  const pauseUntilStartingRace = $(
    ['AndNext', 'Delta', '16bit', addresses.startingLine, '=', 'Value', '', 0x0200],
    ['ResetNextIf', 'Mem', '16bit', addresses.startingLine, '=', 'Value', '', 0x02ff, 1],
    ['PauseIf', 'Value', '', 1, '=', 'Value', '', 1],
  );

  // prettier-ignore
  const fiveSecondsInNeutral = $(
    ['AndNext', 'Delta', '16bit', addresses.startingLine, '=', 'Value', '', 0x0200],
    ['AndNext', 'Mem', '16bit', addresses.startingLine, '=', 'Value', '', 0x02ff, 1],
    ['AndNext', 'Mem', '32bit', addresses.gear, '<', 'Value', '', 0xffffffff],
    ['ResetIf', 'Mem', '32bit', addresses.raceTime, '<', 'Value', '', 0x258],
  );

  // prettier-ignore
  const playerLeadingTrigger = $.one(['Trigger', 'Mem', '8bit', addresses.position, '=', 'Value', '', 1]);

  // prettier-ignore
  const machineGunCheck = $.one(['', 'Mem', 'Bit6', addresses.gameplayMods, '=', 'Value', '', 0]);

  // prettier-ignore
  const menuNotLoaded = $.one(['', 'Mem', '32bit', addresses.loadedMenuString, '!=', 'Value', '', 0x6f726463]);

  // prettier-ignore
  const menuLoaded = $.one(['', 'Mem', '32bit', addresses.loadedMenuString, '=', 'Value', '', 0x6f726463]);

  const recordTrack = trackIs[`${track}`];

  // prettier-ignore
  const isLastSegment = $.one(['', 'Mem', '8bit', addresses.segment, '=', 'Value', '', 2]);

  // prettier-ignore
  const segmentIs = {
    1: $.one(['', 'Mem', '8bit', addresses.segment, '=', 'Value', '', 0]),
    2: $.one(['', 'Mem', '8bit', addresses.segment, '=', 'Value', '', 1]),
    3: $.one(['', 'Mem', '8bit', addresses.segment, '=', 'Value', '', 2]),
  };

  // prettier-ignore
  const bestTimeSprintBeaten = $(
    ['', 'Mem', '32bit', addresses.totalTimeSprint, '>', 'Delta', '32bit', addresses.totalTimeSprint],
    ['', 'Mem', '32bit', addresses.totalTimeSprint, '<', 'Value', '', record ?? 0],
  );

  // prettier-ignore
  const bestTimeCircuitBeaten = $(
    ['', 'Mem', '32bit', addresses.totalTimeCircuit, '!=', 'Delta', '32bit', addresses.totalTimeCircuit],
    ['', 'Mem', '32bit', addresses.totalTimeCircuit, '<', 'Value', '', record ?? 0],
  );

  // prettier-ignore
  const topSpeedBeaten = $(
    ['', 'Mem', '32bit', addresses.topSpeed, '!=', 'Delta', '32bit', addresses.topSpeed],
    ['', 'Mem', '32bit', addresses.topSpeed, '>', 'Value', '', record ?? 0],
  );

  // prettier-ignore
  const bestLapBeaten = $(
    ['', 'Mem', '32bit', addresses.bestLap, '!=', 'Delta', '32bit', addresses.bestLap],
    ['', 'Mem', '32bit', addresses.bestLap, '<', 'Value', '', record ?? 0],
  );

  // prettier-ignore
  const bestTimeSegmentChanged = {
    1: $.one(['', 'Mem', '32bit', addresses.totalTimeSegment1, '!=', 'Delta', '32bit', addresses.totalTimeSegment1]),
    2: $.one(['', 'Mem', '32bit', addresses.totalTimeSegment2, '!=', 'Delta', '32bit', addresses.totalTimeSegment2]),
    3: $.one(['', 'Mem', '32bit', addresses.totalTimeSegment3, '!=', 'Delta', '32bit', addresses.totalTimeSegment3]),
  };

  // prettier-ignore
  const bestTimeSegmentLast = {
    1: $.one(['Measured', 'Mem', '32bit', addresses.totalTimeSegment1]),
    2: $.one(['Measured', 'Mem', '32bit', addresses.totalTimeSegment2]),
    3: $.one(['Measured', 'Mem', '32bit', addresses.totalTimeSegment3]),
  };

  // prettier-ignore
  const bestLapChanged = $.one(['', 'Mem', '32bit', addresses.bestLap, '!=', 'Delta', '32bit', addresses.bestLap]);

  // prettier-ignore
  const bestLapLast = $.one(['Measured', 'Mem', '32bit', addresses.bestLap]);

  // prettier-ignore
  const playerMeasured = {
    car: $.one(['Measured', 'Mem', '8bit', addresses.playerVehicle]),
    track: $.one(['Measured', 'Mem', '8bit', addresses.track]),
    mode: $.one(['Measured', 'Mem', '8bit', addresses.raceType]),
    circuitLength: $.one(['Measured', 'Mem', '8bit', addresses.circuitLength]),
    segment: $.one(['Measured', 'Mem', '8bit', addresses.segment]),
    isCircuit: $.one(['Measured', 'Mem', '8bit', addresses.track, '>=', 'Value', '', 3]),
  };

  return {
    addresses,
    regionCheck,
    isNotReplay,
    isNotTwoPlayer,
    trackIs,
    raceTypeIs,
    trackModeIs,
    raceWon,
    raceWonTrigger,
    isLunarSprings,
    isNotLunarSprings,
    playerVehicleIs,
    opponentVehicleIs,
    isRacing,
    faceOffOpponentVehicle,
    faceOffPlayerVehicleSameAsOpponent,
    isDirtyFast,
    circuitLengthIs,
    isNoMercy,
    player,
    raceFinished,
    raceFinishedTrigger,
    notInMenus,
    resetIfInMenus,
    raceTimerIsFiveSecondsOrMore,
    pauseUntilStartingRace,
    fiveSecondsInNeutral,
    playerLeadingTrigger,
    machineGunCheck,
    menuNotLoaded,
    menuLoaded,
    recordTrack,
    bestTimeSprintBeaten,
    bestTimeCircuitBeaten,
    topSpeedBeaten,
    bestLapBeaten,
    bestTimeSegmentChanged,
    bestTimeSegmentLast,
    bestLapChanged,
    bestLapLast,
    hasRaced,
    isLastSegment,
    segmentIs,
    playerMeasured,
    japanesePlayerVehicle,
    japaneseOpponentVehicle,
    americanPlayerVehicle,
    americanOpponentVehicle,
    italianPlayerVehicle,
    italianOpponentVehicle,
  };
};

/**
 * @param {CodeCallback} cb
 * @param {number} [options]
 * @param {CarCountry} [carCountry]
 * @param {boolean} [singleOptions]
 * @param {Track} [track]
 * @param {number} [record]
 */
const multiRegionalConditions = (
  cb,
  options = 1,
  carCountry,
  singleOptions,
  track,
  record,
) => {
  let groups = { core: '1=1' };

  const permutations = singleOptions ? options : options ** 2;

  for (let i = 1; i <= permutations; i++) {
    groups[`alt${i}`] = cb(codeFor('ntsc', i, carCountry, track, record));
    groups[`alt${i + permutations}`] = cb(
      codeFor('pal', i, carCountry, track, record),
    );
  }

  return groups;
};

set.addAchievement({
  title: 'City Slicker',
  description: 'Win on City in Tournament mode.',
  points: 5,
  type: 'progression',
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.trackIs.city,
      c.raceTypeIs.tournament,
      c.hasRaced,
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'Beach Bum',
  description: 'Win on Coastal in Tournament mode.',
  points: 5,
  type: 'progression',
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.trackIs.coastal,
      c.raceTypeIs.tournament,
      c.hasRaced,
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'Going Skiing After This',
  description: 'Win on Alpine in Tournament mode.',
  points: 5,
  type: 'progression',
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.trackIs.alpine,
      c.raceTypeIs.tournament,
      c.hasRaced,
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'In the Desert',
  description: 'Win on Rusty Springs in Tournament mode.',
  points: 5,
  type: 'progression',
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.trackIs.rustySprings,
      c.raceTypeIs.tournament,
      c.hasRaced,
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'Cool Breeze',
  description: 'Win on Autumn Valley in Tournament mode.',
  points: 5,
  type: 'progression',
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.trackIs.autumnValley,
      c.raceTypeIs.tournament,
      c.hasRaced,
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'Not Afraid of Heights',
  description: 'Win on Vertigo Ridge in Tournament mode.',
  points: 5,
  type: 'progression',
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.trackIs.vertigoRidge,
      c.raceTypeIs.tournament,
      c.hasRaced,
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'Lost in Vegas',
  description: 'Win on Lost Vegas in Tournament mode.',
  points: 5,
  type: 'progression',
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.trackIs.lostVegas,
      c.raceTypeIs.tournament,
      c.hasRaced,
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'Ancient Civilization',
  description:
    'Win a race on Oasis Springs against The Pack without using the Warrior.',
  points: 3,
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.isNotTwoPlayer,
      c.raceTypeIs.race,
      c.trackIs.rustySprings,
      c.trackModeIs.rally,
      c.isNotLunarSprings,
      c.player.notUsingWarrior,
      c.opponentVehicleIs.thePack,
      c.hasRaced,
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'Low Gravity',
  description:
    'Bring a car to a race on the Moon and win against The Pack without using the Warrior.',
  points: 3,
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.isNotTwoPlayer,
      c.raceTypeIs.race,
      c.trackIs.rustySprings,
      c.trackModeIs.rally,
      c.isLunarSprings,
      c.player.notUsingWarrior,
      c.opponentVehicleIs.thePack,
      c.hasRaced,
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: '[VOID] Not Quite Le Mans',
  description:
    'Win a race on endurance mode against The Pack. Using the Warrior is not allowed.',
  points: 0,
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.isNotTwoPlayer,
      c.raceTypeIs.race,
      c.circuitLengthIs.endurance,
      c.player.notUsingWarrior,
      c.opponentVehicleIs.thePack,
      c.hasRaced,
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'Do You Know How Fast You Were Going?',
  description:
    'Get a speeding ticket and still be in first place at the next finish line without using the Warrior.',
  points: 5,
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.isNotTwoPlayer,
      c.raceTypeIs.headToHead,
      c.player.notUsingWarrior,
      c.player.hasTicket,
      c.player.isFirst,
      c.notInMenus,
      c.raceFinishedTrigger,
    ),
  ),
});

set.addAchievement({
  title: 'Do I Have to Do Everything?',
  description:
    'In any Tournament race, wait for 5 seconds in neutral at the starting line and still be in first place at the next finish line.',
  points: 10,
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.raceTypeIs.tournament,
      c.raceTimerIsFiveSecondsOrMore,
      c.notInMenus,
      c.resetIfInMenus,
      c.pauseUntilStartingRace,
      c.fiveSecondsInNeutral,
      c.playerLeadingTrigger,
      c.raceFinishedTrigger,
    ),
  ),
});

set.addAchievement({
  title: '[VOID] The Old Ways',
  description:
    'Using a RWD car, win a Head to Head race in Rally mode against an AWD car. Using the Warrior or the machine gun is not allowed.',
  points: 0,
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.isNotTwoPlayer,
      c.machineGunCheck,
      c.menuNotLoaded,
      c.raceTypeIs.headToHead,
      c.trackModeIs.rally,
      c.player.notUsingWarrior,
      c.player.notUsingDiablo,
      c.opponentVehicleIs.diablo,
      c.hasRaced,
      c.raceWonTrigger,
    ),
  ),
});

set.addAchievement({
  title: '[VOID] Catch Up Is Off',
  description:
    'Win a "No Mercy" Head to Head race using the same car as your opponent. Using the machine gun is not allowed.',
  points: 0,
  conditions: multiRegionalConditions(
    (c) =>
      $(
        c.regionCheck,
        c.isNotReplay,
        c.isNotTwoPlayer,
        c.machineGunCheck,
        c.menuNotLoaded,
        c.raceTypeIs.headToHead,
        c.isNoMercy,
        c.faceOffOpponentVehicle,
        c.faceOffPlayerVehicleSameAsOpponent,
        c.hasRaced,
        c.raceWonTrigger,
      ),
    8,
    '',
    true,
  ),
});

set.addAchievement({
  title: 'JDM Showdown',
  description:
    'Use a Japanese car to beat another Japanese car in a Head to Head on City without using Rally mode or the machine gun.',
  points: 5,
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.isNotTwoPlayer,
      c.machineGunCheck,
      c.menuNotLoaded,
      c.raceTypeIs.headToHead,
      c.trackIs.city,
      c.trackModeIs.normal,
      c.japanesePlayerVehicle,
      c.japaneseOpponentVehicle,
      c.hasRaced,
      c.raceWonTrigger,
    ),
  ),
});

set.addAchievement({
  title: 'American Battle',
  description:
    'Use an American car to beat another American car in a Head to Head on Coastal without using Rally mode or the machine gun.',
  points: 5,
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.isNotTwoPlayer,
      c.machineGunCheck,
      c.menuNotLoaded,
      c.raceTypeIs.headToHead,
      c.trackIs.coastal,
      c.trackModeIs.normal,
      c.americanPlayerVehicle,
      c.americanOpponentVehicle,
      c.hasRaced,
      c.raceWonTrigger,
    ),
  ),
});

set.addAchievement({
  title: 'Italian Face-Off',
  description:
    'Use an Italian car to beat another Italian car in a Head to Head on Alpine without using Rally mode or the machine gun.',
  points: 5,
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.isNotTwoPlayer,
      c.machineGunCheck,
      c.menuNotLoaded,
      c.raceTypeIs.headToHead,
      c.trackIs.alpine,
      c.trackModeIs.normal,
      c.italianPlayerVehicle,
      c.italianOpponentVehicle,
      c.hasRaced,
      c.raceWonTrigger,
    ),
  ),
});

set.addAchievement({
  title: 'Dirty Fast',
  description: 'Reach a speed of 280 MPH (450 km/h).',
  points: 10,
  conditions: multiRegionalConditions((c) =>
    $(c.regionCheck, c.isRacing, c.isDirtyFast),
  ),
});

set.addAchievement({
  title: 'Boxer Spirit',
  description: 'Win a Tournament race using the Porsche 911 Carrera.',
  points: 25,
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.raceTypeIs.tournament,
      c.playerVehicleIs.porsche,
      c.hasRaced,
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'Rotary Reign',
  description:
    'Win a race against The Pack using the Mazda RX-7 without using Rally mode.',
  points: 25,
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.raceTypeIs.race,
      c.trackModeIs.normal,
      c.playerVehicleIs.rotary,
      c.opponentVehicleIs.thePack,
      c.hasRaced,
      c.raceWon,
    ),
  ),
});

for (const r of records) {
  set.addAchievement({
    id: r.achievementId,
    title: `Record Breaker: ${r.name}${r.circuitLength ? ` - ${r.circuitLength}` : r.segment ? ` - Segment ${r.segment}` : ''}`,
    description: `Beat ${r.circuitLength ? `the ${r.circuitLength} version of ` : r.segment ? `the ${formatSegmentString(r.segment)} segment of ` : ''}${r.name} in under ${formatTimeString(r.bestTime)}.`,
    points: r.points,
    conditions: multiRegionalConditions(
      (c) =>
        $(
          c.regionCheck,
          c.isNotReplay,
          c.hasRaced,
          c.recordTrack,
          c.circuitLengthIs[r.circuitLength?.toLowerCase()] ??
            c.segmentIs[r.segment] ??
            c.isLastSegment,
          r.circuitLength || r.segment
            ? c.bestTimeCircuitBeaten
            : c.bestTimeSprintBeaten,
        ),
      1,
      '',
      true,
      r.trackId,
      r.bestTime,
    ),
  });
}

for (const r of records) {
  if (!r.topSpeed) {
    continue;
  }
  set.addAchievement({
    title: `Speed Demon: ${r.name}`,
    description: `Reach a speed of ${formatSpeedString(r.topSpeed)} on ${r.name} to beat the top speed record.`,
    points: 3,
    conditions: multiRegionalConditions(
      (c) =>
        $(
          c.regionCheck,
          c.isNotReplay,
          c.hasRaced,
          c.recordTrack,
          c.topSpeedBeaten,
        ),
      1,
      '',
      true,
      r.trackId,
      r.topSpeed,
    ),
  });
}

for (const r of records) {
  if (!r.bestLap) {
    continue;
  }
  set.addAchievement({
    title: `Hot Lap: ${r.name}`,
    description: `Beat the ${r.name} best lap time record of ${formatTimeString(r.bestLap)}.`,
    points: 10,
    conditions: multiRegionalConditions(
      (c) =>
        $(
          c.regionCheck,
          c.isNotReplay,
          c.hasRaced,
          c.recordTrack,
          c.bestLapBeaten,
        ),
      1,
      '',
      true,
      r.trackId,
      r.bestLap,
    ),
  });
}

for (const r of records) {
  if (!r.segment && !r.bestLap) {
    continue;
  }
  set.addLeaderboard({
    id: r.leaderboardId,
    title: `${r.name}${r.segment ? ` - Segment ${r.segment}` : ''}`,
    description: `Fastest time to finish ${r.bestLap ? 'a lap' : 'the segment'} without using the Warrior.`,
    lowerIsBetter: true,
    type: 'FRAMES',
    conditions: {
      start: multiRegionalConditions(
        (c) =>
          $(
            c.regionCheck,
            c.isNotReplay,
            c.hasRaced,
            c.isNotTwoPlayer,
            c.trackModeIs.normal,
            c.player.notUsingWarrior,
            c.recordTrack,
            r.segment && c.segmentIs[r.segment],
            r.bestLap ? c.bestLapChanged : c.bestTimeSegmentChanged[r.segment],
          ),
        1,
        '',
        true,
        r.trackId,
      ),
      cancel: '0=1',
      submit: '1=1',
      value: {
        core: r.bestLap
          ? codeFor('ntsc', 1).bestLapLast.toString()
          : codeFor('ntsc', 1).bestTimeSegmentLast[r.segment].toString(),
      },
    },
  });
}

export const rich = RichPresence({
  lookupDefaultParameters: { keyFormat: 'hex' },
  lookup: {
    Car: {
      values: {
        0x00: 'Toyota SUPRA TURBO',
        0x01: 'Lamborghini DIABLO VT',
        0x02: 'Porsche 911 CARRERA',
        0x03: 'Chevrolet CORVETTE ZR-1',
        0x04: 'Ferrari 512TR',
        0x05: 'Dodge VIPER RT/10',
        0x06: 'Acura NSX',
        0x07: 'Mazda RX-7',
        0x0b: 'Warrior',
      },
    },
    Track: {
      values: {
        0x00: 'City',
        0x01: 'Coastal',
        0x02: 'Alpine',
        0x03: 'Rusty Springs',
        0x04: 'Autumn Valley',
        0x05: 'Vertigo Ridge',
        0x06: 'Lost Vegas',
      },
    },
    Mode: {
      values: {
        0x00: 'Time Trial',
        0x01: 'Head to Head',
        0x02: 'Single Race',
        0x03: 'Tournament',
      },
    },
    CircuitLength: {
      values: {
        0x00: 'Quick',
        0x01: 'Normal',
        0x02: 'Endurance',
      },
    },
    Segment: {
      values: {
        0x00: 'Segment 1',
        0x01: 'Segment 2',
        0x02: 'Segment 3',
      },
    },
  },
  displays: ({ lookup }) => {
    /** @param {Region} region */
    function displayForRegion(region) {
      const c = codeFor(region, 1);

      const car = lookup.Car.at($(c.playerMeasured.car));
      const track = lookup.Track.at($(c.playerMeasured.track));
      const mode = lookup.Mode.at($(c.playerMeasured.mode));
      const circuitLength = lookup.CircuitLength.at(
        $(c.playerMeasured.circuitLength),
      );
      const segment = lookup.Segment.at($(c.playerMeasured.segment));

      return /** @type Array<[ConditionBuilder, string]> */ ([
        [
          $(
            c.regionCheck,
            c.isRacing,
            c.menuNotLoaded,
            c.playerMeasured.isCircuit,
          ),
          `Driving the ${car} in a ${mode} on ${track} - ${circuitLength}`,
        ],
        [
          $(c.regionCheck, c.isRacing, c.menuNotLoaded),
          `Driving the ${car} in a ${mode} on ${track} - ${segment}`,
        ],
        [$(c.regionCheck, c.menuLoaded), `Navigating the menus`],
      ]);
    }

    return [
      ...displayForRegion('ntsc'),
      ...displayForRegion('pal'),
      'Playing Road & Track Presents: The Need for Speed',
    ];
  },
});

export default set;
