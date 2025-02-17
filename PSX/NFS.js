import {
  AchievementSet,
  define as $,
  ConditionBuilder,
  Condition,
} from '@cruncheevos/core';

/**
 * @template T
 * @typedef {(c: typeof codeFor extends (...args: any[]) => infer U ? U : any) => T} CodeCallbackTemplate
 */

/** @typedef {CodeCallbackTemplate<ConditionBuilder | Condition>} CodeCallback */

/** @typedef {'ntsc' | 'pal'} Region */

/** @typedef {'japan' | 'italy' | 'usa'} CarCountry */

const set = new AchievementSet({
  gameId: 5330,
  title: 'Road & Track Presents: The Need for Speed',
});

/**
 * @param {Region} region
 * @param {number} [permutation]
 * @param {CarCountry} [carCountry]
 */
const codeFor = (region, permutation, carCountry) => {
  /**
   * @param {number} address
   */
  const offset = (address) => {
    return region === 'ntsc' ? address : address + 0x120;
  };

  const addresses = {
    serial: 0x9e18,
    racing: offset(0xdb54c),
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
    loadedMenuString: offset(0x1fec90),
  };

  // prettier-ignore
  const regionCheck = $(
    region === 'ntsc' && ['', 'Mem', '32bit', addresses.serial, '=', 'Value', '', 0x554c535c],
    region === 'pal' && ['', 'Mem', '32bit', addresses.serial, '=', 'Value', '', 0x454c535c],
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
    ['', 'Delta', '8bit', addresses.raceWon, '=', 'Value', '', 0xd],
    ['', 'Mem', '8bit', addresses.raceWon, '=', 'Value', '', 1],
  );

  // prettier-ignore
  const raceWonTrigger = $(
    ['Trigger', 'Delta', '8bit', addresses.raceWon, '=', 'Value', '', 0xd],
    ['Trigger', 'Mem', '8bit', addresses.raceWon, '=', 'Value', '', 1],
  );

  // prettier-ignore
  const isLunarSprings = $.one(['', 'Mem', '8bit', addresses.lunarSprings, '=', 'Value', '', 1]);

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

  const faceOffPlayerVehicle =
    playerVehicleIs[
      possibleVehicles[
        (permutation > possibleVehicles.length
          ? permutation > possibleVehicles.length * 2
            ? possibleVehicles.length
            : possibleVehicles.length - (possibleVehicles.length - 2)
          : 1) - 1
      ]
    ];

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
    ['ResetIf', 'Mem', '32bit', addresses.raceTime, '<', 'Value', '', 0x258, 1],
  );

  // prettier-ignore
  const playerLeadingTrigger = $.one(['Trigger', 'Mem', '8bit', addresses.position, '=', 'Value', '', 1]);

  // prettier-ignore
  const machineGunCheck = $.one(['', 'Mem', 'Bit6', addresses.gameplayMods, '=', 'Value', '', 0]);

  // prettier-ignore
  const menuNotLoaded = $.one(['', 'Mem', '32bit', addresses.loadedMenuString, '!=', 'Value', '', 0x6f726463]);

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
    playerVehicleIs,
    opponentVehicleIs,
    isRacing,
    faceOffPlayerVehicle,
    faceOffOpponentVehicle,
    faceOffPlayerVehicleSameAsOpponent,
    isDirtyFast,
    circuitLengthIs,
    isNoMercy,
    player,
    raceFinishedTrigger,
    notInMenus,
    resetIfInMenus,
    raceTimerIsFiveSecondsOrMore,
    pauseUntilStartingRace,
    fiveSecondsInNeutral,
    playerLeadingTrigger,
    machineGunCheck,
    menuNotLoaded,
  };
};

/**
 * @param {CodeCallback} cb
 * @param {number} [options]
 * @param {CarCountry} [carCountry]
 * @param {boolean} [singleOptions]
 */
const multiRegionalConditions = (
  cb,
  options = 1,
  carCountry,
  singleOptions,
) => {
  let groups = { core: '1=1' };

  const permutations = singleOptions ? options : options ** 2;

  for (let i = 1; i <= permutations; i++) {
    groups[`alt${i}`] = cb(codeFor('ntsc', i, carCountry));
    groups[`alt${i + permutations}`] = cb(codeFor('pal', i, carCountry));
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
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'Ancient Civilization',
  description:
    'Win a race on Oasis Springs against The Pack. Using the Warrior is not allowed.',
  points: 3,
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.isNotTwoPlayer,
      c.raceTypeIs.race,
      c.trackIs.rustySprings,
      c.trackModeIs.rally,
      c.player.notUsingWarrior,
      c.opponentVehicleIs.thePack,
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'Low Gravity',
  description:
    'Bring a car to a race on the Moon and win against The Pack. Using the Warrior is not allowed.',
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
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'Not Quite Le Mans',
  description:
    'Win a race on endurance mode against The Pack. Using the Warrior is not allowed.',
  points: 5,
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.isNotReplay,
      c.isNotTwoPlayer,
      c.raceTypeIs.race,
      c.circuitLengthIs.endurance,
      c.player.notUsingWarrior,
      c.opponentVehicleIs.thePack,
      c.raceWon,
    ),
  ),
});

set.addAchievement({
  title: 'Do You Know How Fast You Were Going?',
  description:
    'Get a speeding ticket and still be in first place at the next finish line. Using the Warrior is not allowed.',
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
  title: 'The Old Ways',
  description:
    'Using a RWD car, win a Head to Head race in Rally mode against an AWD car. Using the Warrior or the machine gun is not allowed.',
  points: 3,
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
      c.raceWonTrigger,
    ),
  ),
});

set.addAchievement({
  title: 'Catch Up Is Off',
  description:
    'Win a "No Mercy" Head to Head race using the same car as your opponent. Using the machine gun is not allowed.',
  points: 4,
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
    'Use a Japanese car to beat another Japanese car in a Head to Head on City. Using the machine gun is not allowed.',
  points: 5,
  conditions: multiRegionalConditions(
    (c) =>
      $(
        c.regionCheck,
        c.isNotReplay,
        c.isNotTwoPlayer,
        c.machineGunCheck,
        c.menuNotLoaded,
        c.raceTypeIs.headToHead,
        c.trackIs.city,
        c.faceOffPlayerVehicle,
        c.faceOffOpponentVehicle,
        c.raceWonTrigger,
      ),
    3,
    'japan',
  ),
});

set.addAchievement({
  title: 'American Battle',
  description:
    'Use an American car to beat another American car in a Head to Head on Coastal. Using the machine gun is not allowed.',
  points: 5,
  conditions: multiRegionalConditions(
    (c) =>
      $(
        c.regionCheck,
        c.isNotReplay,
        c.isNotTwoPlayer,
        c.machineGunCheck,
        c.menuNotLoaded,
        c.raceTypeIs.headToHead,
        c.trackIs.coastal,
        c.faceOffPlayerVehicle,
        c.faceOffOpponentVehicle,
        c.raceWonTrigger,
      ),
    2,
    'usa',
  ),
});

set.addAchievement({
  title: 'Italian Face-Off',
  description:
    'Use an Italian car to beat another Italian car in a Head to Head on Alpine',
  points: 5,
  conditions: multiRegionalConditions(
    (c) =>
      $(
        c.regionCheck,
        c.isNotReplay,
        c.isNotTwoPlayer,
        c.machineGunCheck,
        c.menuNotLoaded,
        c.raceTypeIs.headToHead,
        c.trackIs.alpine,
        c.faceOffPlayerVehicle,
        c.faceOffOpponentVehicle,
        c.raceWonTrigger,
      ),
    2,
    'italy',
  ),
});

set.addAchievement({
  title: 'Dirty Fast',
  description: 'Reach a speed of 280 MPH (450 km/h).',
  points: 25,
  conditions: multiRegionalConditions((c) =>
    $(c.regionCheck, c.isNotReplay, c.isRacing, c.isDirtyFast),
  ),
});

export default set;
