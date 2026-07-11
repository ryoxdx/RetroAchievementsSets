import {
  AchievementSet,
  define as $,
  ConditionBuilder,
  RichPresence,
  orNext,
} from '@cruncheevos/core';

import {
  richPresenceValues,
  progressionAchievements,
  careerAccomplishments,
  difficulties,
  UKAccomplishments,
  westernEuropeAccomplishments,
  ligue1Clubs,
  eredivisieClubs,
  southernEuropeAccomplishments,
  serieAClubs,
  centralEuropeAccomplishments,
  bundesligaClubs,
  americasAccomplishments,
  scandinaviaAccomplishments,
  restOfWorldAccomplishments,
  masterAccomplishments,
  scenarioAccomplishments,
  scenarioSettings,
  enduranceAccomplishments,
} from './constants.js';

/**
 * @template T
 * @typedef {(c: typeof codeFor extends (...args: any[]) => infer U ? U : any) => T} CodeCallbackTemplate
 */

const set = new AchievementSet({
  gameId: 21991,
  title: 'FIFA 14',
});

const codeFor = () => {
  const addresses = {
    ingameMenuStringPointer: 0x69ed0c,
    accomplishmentPointer: 0x6d6410,
    gameStartedPointer: 0x6d65e4,
    ingame: 0x6d65f0,
    careerPointer: 0x6e3a40,
    homeScore: 0x814328,
    awayScore: 0x81bce0,
    scenarioExtraTimePointer: 0x7333f8,
    scenarioTimePointer: 0x7335f0,
    scenarioHomeYellowsPointer: 0x7337a0,
    homeTeamIdPointer: 0x733bf0,
    keeperDiffPointer: 0x733c34,
    scenarioHomeSubsPointer: 0x733c50,
    scenarioHalfPointer: 0x733ca8,
    scenarioBallPointer: 0x734040,
    difficultyPointer: 0x7340c8,
    scenarioAwaySubsPointer: 0x7340f4,
    scenarioAwayYellowsPointer: 0x734344,
    scenarioHomeRedsPointer: 0x73439c,
    mode: 0x7344d4,
    stadiumIdPointer: 0x734590,
    scenarioApplyPointer: 0x734820,
    scenarioHomeScorePointer: 0x7348a0,
    scenarioHomeInjuriesPointer: 0x734954,
    thirdPersonPointer: 0x734990,
    injuriesPointer: 0x734c44,
    scenarioAwayInjuriesPointer: 0x734df8,
    awayTeamIdPointer: 0x734e94,
    scenarioAwayScorePointer: 0x734fc4,
    bookingsPointer: 0x735110,
    scenarioAwayRedsPointer: 0x7351c0,
    language: 0x735240,
    halfLengthPointer: 0x735290,
    offsidesPointer: 0x7352a0,
    homeTeam: 0x73a2d0,
    awayTeam: 0x73a2e8,
    editPointer: 0x75b168,
    careerProgression: 0x75b888,
    controller1: 0x0076b310,
    controller2: 0x0076b314,
    controller3: 0x0076b318,
    controller4: 0x0076b31c,
    controller5: 0x0076b320,
    controller6: 0x0076b324,
    controller7: 0x0076b328,
    controller8: 0x0076b32c,
    timeDisplay: 0x77b4b0,
    ballOnPlay: 0x7a38c4,
    regularTime: 0x7a38c8,
    stoppageTime: 0x7a38cc,
    totalTime: 0x7a38d0,
    homeTeamAbb: 0x7a3958,
    awayTeamAbb: 0x7a399c,
    simulationPointer: 0x800fc8,
    homePlayerPointers: [
      0x814190, 0x814194, 0x814198, 0x81419c, 0x8141a0, 0x8141a4, 0x8141a8,
      0x8141ac, 0x8141b0, 0x8141b4, 0x8141b8,
    ],
    homeGoals: 0x814328,
    homeGoalsPens: 0x814348,
    awayPlayerPointers: [
      0x81bb48, 0x81bb4c, 0x81bb50, 0x81bb54, 0x81bb58, 0x81bb5c, 0x81bb60,
      0x81bb64, 0x81bb68, 0x81bb6c, 0x81bb70,
    ],
    awayGoals: 0x81bce0,
    awayFouls: 0x81bcec,
    awayGoalsPens: 0x81bd00,
    penaltyHome1: 0x81e9a4,
    penaltyHome2: 0x81e9a8,
    penaltyHome3: 0x81e9ac,
    penaltyHome4: 0x81e9b0,
    penaltyHome5: 0x81e9b4,
    penaltyAway1: 0x81e9b8,
    penaltyAway2: 0x81e9bc,
    penaltyAway3: 0x81e9c0,
    penaltyAway4: 0x81e9c4,
    penaltyAway5: 0x81e9c8,
  };

  const gameIs = {
    started: $(
      ['', 'Mem', '32bit', addresses.gameStartedPointer, '!=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.gameStartedPointer],
      ['', 'Mem', '32bit', 0x08, '=', 'Value', '', 1],
    ),
    // prettier-ignore
    careerMode: $(['', 'Mem', '32bit', addresses.careerPointer, '!=', 'Value', '', 0]),
  };

  const playerIs = {
    inMenus: $(['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 0]),
    ingame: $(['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 1]),
  };

  const playerMeasured = {
    language: $(
      ['AddAddress', 'Mem', '32bit', addresses.language],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['Measured', 'Mem', '24bit', 0x00],
    ),
    mode: $(
      ['AddAddress', 'Mem', '32bit', addresses.mode],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['Measured', 'Mem', '32bit', 0x04],
    ),
    homeScore: $(['Measured', 'Mem', '32bit', addresses.homeScore]),
    homeScorePens: $(['Measured', 'Mem', '32bit', addresses.homeGoalsPens]),
    homeTeamId: $(
      ['AddAddress', 'Mem', '32bit', addresses.homeTeamIdPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['Measured', 'Mem', '32bit', 0x04],
    ),
    awayScore: $(['Measured', 'Mem', '32bit', addresses.awayScore]),
    awayScorePens: $(['Measured', 'Mem', '32bit', addresses.awayGoalsPens]),
    awayTeamId: $(
      ['AddAddress', 'Mem', '32bit', addresses.awayTeamIdPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['Measured', 'Mem', '32bit', 0x04],
    ),
    stadiumId: $(
      ['AddAddress', 'Mem', '32bit', addresses.stadiumIdPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['Measured', 'Mem', '32bit', 0x04],
    ),
    regularTimeA: $(['Measured', 'Mem', '8bit', addresses.timeDisplay]),
    regularTimeB: $(['Measured', 'Mem', '8bit', addresses.timeDisplay + 1]),
    regularTimeC: $(['Measured', 'Mem', '8bit', addresses.timeDisplay + 2]),
    regularTimeD: $(['Measured', 'Mem', '8bit', addresses.timeDisplay + 3]),
    regularTimeE: $(['Measured', 'Mem', '8bit', addresses.timeDisplay + 4]),
    regularTimeF: $(['Measured', 'Mem', '8bit', addresses.timeDisplay + 5]),
    stoppageTime: $(['Measured', 'Mem', '32bit', addresses.stoppageTime]),
    totalTime: $(['Measured', 'Mem', '32bit', addresses.totalTime]),
  };

  // prettier-ignore
  const isPast100Min = $(
    ['', 'Mem', '32bit', addresses.regularTime, '>=', 'Value', '', 6000],
  );

  // prettier-ignore
  const isStoppage = $(
    ['', 'Mem', '32bit', addresses.stoppageTime, '>', 'Value', '', 0],
  );

  // prettier-ignore
  const isPreGame = $(
    ['', 'Mem', '8bit', addresses.timeDisplay, '=', 'Value', '', 0x2d],
  );

  const isPostGame = $(
    ['AddAddress', 'Mem', '32bit', addresses.ingameMenuStringPointer],
    ['AddAddress', 'Mem', '32bit', 0x20b0],
    ['AddAddress', 'Mem', '32bit', 0x0c],
    ['AddAddress', 'Mem', '32bit', 0x08],
    ['', 'Mem', '32bit', 0x08, '=', 'Value', '', 0x65526f47],
  );

  const isPractice = $(
    ['AddAddress', 'Mem', '32bit', addresses.mode],
    ['AddAddress', 'Mem', '32bit', 0x04],
    ['', 'Mem', '32bit', 0x04, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 1],
  );

  // prettier-ignore
  const isPenalties = $(
    ['', 'Mem', '32bit', addresses.penaltyHome1, '!=', 'Value', '', 0],
  );

  const currentMode = (modeId) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.mode],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', modeId],
    );

  const careerModeSeasonFlip = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerProgression],
    ['AddAddress', 'Mem', '32bit', 0x14],
    ['', 'Delta', '32bit', 0x00, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.careerProgression],
    ['AddAddress', 'Mem', '32bit', 0x14],
    ['', 'Mem', '32bit', 0x00, '=', 'Value', '', 2],
  );

  const accomplishmentFlip = (offset) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.accomplishmentPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Delta', '32bit', offset, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.accomplishmentPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', offset, '=', 'Value', '', 1],
    );

  const homePlayer = $(
    ['', 'Mem', '32bit', addresses.controller1, '!=', 'Value', '', 1],
    ['', 'Mem', '32bit', addresses.controller2, '!=', 'Value', '', 1],
    ['', 'Mem', '32bit', addresses.controller3, '!=', 'Value', '', 1],
    ['', 'Mem', '32bit', addresses.controller4, '!=', 'Value', '', 1],
    ['', 'Mem', '32bit', addresses.controller5, '!=', 'Value', '', 1],
    ['', 'Mem', '32bit', addresses.controller6, '!=', 'Value', '', 1],
    ['', 'Mem', '32bit', addresses.controller7, '!=', 'Value', '', 1],
    ['', 'Mem', '32bit', addresses.controller8, '!=', 'Value', '', 1],
    ['AddSource', 'Mem', '32bit', addresses.controller1],
    ['AddSource', 'Mem', '32bit', addresses.controller2],
    ['AddSource', 'Mem', '32bit', addresses.controller3],
    ['AddSource', 'Mem', '32bit', addresses.controller4],
    ['AddSource', 'Mem', '32bit', addresses.controller5],
    ['AddSource', 'Mem', '32bit', addresses.controller6],
    ['AddSource', 'Mem', '32bit', addresses.controller7],
    ['', 'Mem', '32bit', addresses.controller8, '=', 'Value', '', 14],
  );

  const awayPlayer = $(
    ['AddSource', 'Mem', '32bit', addresses.controller1],
    ['AddSource', 'Mem', '32bit', addresses.controller2],
    ['AddSource', 'Mem', '32bit', addresses.controller3],
    ['AddSource', 'Mem', '32bit', addresses.controller4],
    ['AddSource', 'Mem', '32bit', addresses.controller5],
    ['AddSource', 'Mem', '32bit', addresses.controller6],
    ['AddSource', 'Mem', '32bit', addresses.controller7],
    ['', 'Mem', '32bit', addresses.controller8, '=', 'Value', '', 15],
  );

  const homePlayerMeasured = $(
    ['MeasuredIf', 'Mem', '32bit', addresses.controller1, '!=', 'Value', '', 1],
    ['MeasuredIf', 'Mem', '32bit', addresses.controller2, '!=', 'Value', '', 1],
    ['MeasuredIf', 'Mem', '32bit', addresses.controller3, '!=', 'Value', '', 1],
    ['MeasuredIf', 'Mem', '32bit', addresses.controller4, '!=', 'Value', '', 1],
    ['MeasuredIf', 'Mem', '32bit', addresses.controller5, '!=', 'Value', '', 1],
    ['MeasuredIf', 'Mem', '32bit', addresses.controller6, '!=', 'Value', '', 1],
    ['MeasuredIf', 'Mem', '32bit', addresses.controller7, '!=', 'Value', '', 1],
    ['MeasuredIf', 'Mem', '32bit', addresses.controller8, '!=', 'Value', '', 1],
    ['AddSource', 'Mem', '32bit', addresses.controller1],
    ['AddSource', 'Mem', '32bit', addresses.controller2],
    ['AddSource', 'Mem', '32bit', addresses.controller3],
    ['AddSource', 'Mem', '32bit', addresses.controller4],
    ['AddSource', 'Mem', '32bit', addresses.controller5],
    ['AddSource', 'Mem', '32bit', addresses.controller6],
    ['AddSource', 'Mem', '32bit', addresses.controller7],
    ['MeasuredIf', 'Mem', '32bit', addresses.controller8, '=', 'Value', '', 14],
  );

  const awayPlayerMeasured = $(
    ['AddSource', 'Mem', '32bit', addresses.controller1],
    ['AddSource', 'Mem', '32bit', addresses.controller2],
    ['AddSource', 'Mem', '32bit', addresses.controller3],
    ['AddSource', 'Mem', '32bit', addresses.controller4],
    ['AddSource', 'Mem', '32bit', addresses.controller5],
    ['AddSource', 'Mem', '32bit', addresses.controller6],
    ['AddSource', 'Mem', '32bit', addresses.controller7],
    ['MeasuredIf', 'Mem', '32bit', addresses.controller8, '=', 'Value', '', 15],
  );

  // prettier-ignore
  const homeWinning = $(
    ['OrNext', 'Mem', '32bit', addresses.homeGoals, '>', 'Mem', '32bit', addresses.awayGoals],
    ['', 'Mem', '32bit', addresses.homeGoalsPens, '>', 'Mem', '32bit', addresses.awayGoalsPens],
  );

  // prettier-ignore
  const homeWinningAllPens = $(
    ['', 'Mem', '32bit', addresses.homeGoals, '=', 'Mem', '32bit', addresses.awayGoals],
    ['', 'Mem', '32bit', addresses.homeGoalsPens, '>', 'Mem', '32bit', addresses.awayGoalsPens],
  );

  // prettier-ignore
  const awayWinning = $(
    ['OrNext', 'Mem', '32bit', addresses.homeGoals, '<', 'Mem', '32bit', addresses.awayGoals],
    ['', 'Mem', '32bit', addresses.homeGoalsPens, '<', 'Mem', '32bit', addresses.awayGoalsPens],
  );

  // prettier-ignore
  const awayNoFouls = $(
    ['', 'Mem', '32bit', addresses.awayFouls, '=', 'Value', '', 0],
  );

  // prettier-ignore
  const homeTied = $(
    ['', 'Mem', '32bit', addresses.homeGoals, '>', 'Value', '', 0],
    ['', 'Delta', '32bit', addresses.homeGoals, '<', 'Mem', '32bit', addresses.awayGoals],
    ['', 'Mem', '32bit', addresses.homeGoals, '=', 'Mem', '32bit', addresses.awayGoals],
  );

  // prettier-ignore
  const homeWinningScored = (goals) => $(
    ['', 'Mem', '32bit', addresses.homeGoals, '>', 'Mem', '32bit', addresses.awayGoals],
    ['', 'Mem', '32bit', addresses.homeGoals, '>=', 'Value', '', goals],
  );

  // prettier-ignore
  const awayWinningScored = (goals) => $(
    ['', 'Mem', '32bit', addresses.homeGoals, '<', 'Mem', '32bit', addresses.awayGoals],
    ['', 'Mem', '32bit', addresses.awayGoals, '>=', 'Value', '', goals],
  );

  const homeScored = (goals) =>
    $(['', 'Mem', '32bit', addresses.homeGoals, '=', 'Value', '', goals]);

  const awayScored = (goals) =>
    $(['', 'Mem', '32bit', addresses.awayGoals, '=', 'Value', '', goals]);

  const homeScoredFirst = $(
    ['', 'Delta', '32bit', addresses.homeGoals, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.homeGoals, '=', 'Value', '', 1],
  );

  const awayScoredFirst = $(
    ['', 'Delta', '32bit', addresses.awayGoals, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.awayGoals, '=', 'Value', '', 1],
  );

  const matchOver = $(
    ['AddAddress', 'Mem', '32bit', addresses.ingameMenuStringPointer],
    ['AddAddress', 'Mem', '32bit', 0x20b0],
    ['AddAddress', 'Mem', '32bit', 0x0c],
    ['AddAddress', 'Mem', '32bit', 0x08],
    ['', 'Delta', '32bit', 0x08, '!=', 'Value', '', 0x65526f47],
    ['AddAddress', 'Mem', '32bit', addresses.ingameMenuStringPointer],
    ['AddAddress', 'Mem', '32bit', 0x20b0],
    ['AddAddress', 'Mem', '32bit', 0x0c],
    ['AddAddress', 'Mem', '32bit', 0x08],
    ['', 'Mem', '32bit', 0x08, '=', 'Value', '', 0x65526f47],
  );

  const matchOverTrigger = $(
    ['AddAddress', 'Mem', '32bit', addresses.ingameMenuStringPointer],
    ['AddAddress', 'Mem', '32bit', 0x20b0],
    ['AddAddress', 'Mem', '32bit', 0x0c],
    ['AddAddress', 'Mem', '32bit', 0x08],
    ['', 'Delta', '32bit', 0x08, '!=', 'Value', '', 0x65526f47],
    ['AddAddress', 'Mem', '32bit', addresses.ingameMenuStringPointer],
    ['AddAddress', 'Mem', '32bit', 0x20b0],
    ['AddAddress', 'Mem', '32bit', 0x0c],
    ['AddAddress', 'Mem', '32bit', 0x08],
    ['Trigger', 'Mem', '32bit', 0x08, '=', 'Value', '', 0x65526f47],
  );

  const currentDifficultyIsAtLeast = (difficulty) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.difficultyPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '>=', 'Value', '', difficulty],
    );

  // prettier-ignore
  const simulationCheckpointHomeLosing = $(
    ['AndNext', 'Mem', '32bit', addresses.homeGoals, '<', 'Mem', '32bit',  addresses.awayGoals],
    ['AndNext', 'Delta', '32bit', addresses.simulationPointer, '!=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.simulationPointer, '=', 'Value', '', 0, 1],
  );

  // prettier-ignore
  const simulationCheckpointAwayLosing = $(
    ['AndNext', 'Mem', '32bit', addresses.homeGoals, '>', 'Mem', '32bit',  addresses.awayGoals],
    ['AndNext', 'Delta', '32bit', addresses.simulationPointer, '!=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.simulationPointer, '=', 'Value', '', 0, 1],
  );

  // prettier-ignore
  const matchReset = $(
    ['ResetIf', 'Mem', '32bit', addresses.homeGoals, '<', 'Delta', '32bit',  addresses.homeGoals],
    ['ResetIf', 'Mem', '32bit', addresses.awayGoals, '<', 'Delta', '32bit',  addresses.awayGoals],
  );

  // prettier-ignore
  const nonSimulationCheckpoint = $(
    ['AndNext', 'Mem', '32bit', addresses.simulationPointer, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', addresses.regularTime, '=', 'Value', '', 0, 1],
  );

  const playerScored = (playerAddress, playerId) =>
    $(
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['', 'Mem', '32bit', 0x4c, '=', 'Value', '', playerId],
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['', 'Delta', '32bit', 0x1ac, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['', 'Mem', '32bit', 0x1ac, '=', 'Value', '', 1],
    );

  const youthPlayerScored = (playerAddress) =>
    $(
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['', 'Mem', '32bit', 0x4c, '>=', 'Value', '', 0x62800],
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['', 'Mem', '32bit', 0x1ac, '>', 'Delta', '32bit', 0x1ac],
    );

  const playerScoredNonSetPiece = (playerAddress) =>
    $(
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['', 'Mem', 'Float', 0x248, '>', 'Delta', 'Float', 0x248, 1],
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['', 'Mem', '32bit', 0x1ac, '>', 'Delta', '32bit', 0x1ac],
    );

  // prettier-ignore
  const ballReset = $(
    ['AndNext', 'Delta', '32bit', addresses.ballOnPlay, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '32bit', addresses.ballOnPlay, '=', 'Value', '', 1],
  );

  const isThirdPersonCamera = $(
    ['AddAddress', 'Mem', '32bit', addresses.thirdPersonPointer],
    ['AddAddress', 'Mem', '32bit', 0x04],
    ['', 'Mem', '32bit', 0x04, '=', 'Value', '', 0x10],
  );

  const homeTeamIs = (teamId) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.homeTeamIdPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', teamId],
    );

  const awayTeamIs = (teamId) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.awayTeamIdPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', teamId],
    );

  const sideSelectIntact = $(
    ['AddAddress', 'Mem', '32bit', addresses.gameStartedPointer],
    ['', 'Mem', '32bit', 0x04, '=', 'Value', '', 1],
  );

  const vanillaSquads = $(
    ['AddAddress', 'Mem', '32bit', addresses.mode],
    ['AddAddress', 'Mem', '32bit', 0x04],
    ['AndNext', 'Mem', '32bit', 0x04, '=', 'Value', '', 0x07],
    ['AddAddress', 'Mem', '32bit', addresses.editPointer],
    ['AddAddress', 'Mem', '32bit', 0x14],
    ['OrNext', 'Mem', '32bit', 0x00, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.editPointer],
    ['AddAddress', 'Mem', '32bit', 0x14],
    ['', 'Mem', '32bit', 0x00, '=', 'Value', '', 1],
  );

  const modifiedSquads = $(
    ['AddAddress', 'Mem', '32bit', addresses.mode],
    ['AddAddress', 'Mem', '32bit', 0x04],
    ['', 'Mem', '32bit', 0x04, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.editPointer],
    ['AddAddress', 'Mem', '32bit', 0x14],
    ['', 'Mem', '32bit', 0x00, '>', 'Value', '', 0],
  );

  const accomplishmentProtection = $(
    ['AddAddress', 'Mem', '32bit', addresses.mode],
    ['AddAddress', 'Mem', '32bit', 0x04],
    ['', 'Mem', '32bit', 0x04, '!=', 'Value', '', 0],
  );

  const scenarioOff = $(
    ['AddAddress', 'Mem', '32bit', addresses.scenarioApplyPointer],
    ['AddAddress', 'Mem', '32bit', 0x04],
    ['', 'Mem', '32bit', 0x04, '=', 'Value', '', 0],
  );

  const scenarioApply = $(
    ['AddAddress', 'Mem', '32bit', addresses.scenarioApplyPointer],
    ['AddAddress', 'Mem', '32bit', 0x04],
    ['', 'Mem', '32bit', 0x04, '=', 'Value', '', 1],
  );

  const scenarioScore = (home, away) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.scenarioHomeScorePointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', home],
      ['AddAddress', 'Mem', '32bit', addresses.scenarioAwayScorePointer],
      ['AddAddress', 'Mem', '32bit', 0x08],
      ['AddAddress', 'Mem', '32bit', 0x08],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', away],
    );

  const scenarioBall = (location) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.scenarioBallPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', location],
    );

  const scenarioHalf = (half) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.scenarioHalfPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', half],
    );

  const scenarioTimeLeft = (time) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.scenarioTimePointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', time],
    );

  const scenarioExtraTime = (format) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.scenarioExtraTimePointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', format],
    );

  const scenarioHomeYellows = (cards) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.scenarioHomeYellowsPointer],
      ['AddAddress', 'Mem', '32bit', 0x08],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', cards],
    );

  const scenarioAwayYellows = (cards) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.scenarioAwayYellowsPointer],
      ['AddAddress', 'Mem', '32bit', 0x08],
      ['AddAddress', 'Mem', '32bit', 0x08],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', cards],
    );

  const scenarioHomeReds = (cards) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.scenarioHomeRedsPointer],
      ['AddAddress', 'Mem', '32bit', 0x08],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', cards],
    );

  const scenarioAwayReds = (cards) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.scenarioAwayRedsPointer],
      ['AddAddress', 'Mem', '32bit', 0x08],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', cards],
    );

  const scenarioHomeInjuries = (injuries) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.scenarioHomeInjuriesPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', injuries],
    );

  const scenarioAwayInjuries = (injuries) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.scenarioAwayInjuriesPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', injuries],
    );

  const scenarioHomeSubs = (subs) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.scenarioHomeSubsPointer],
      ['AddAddress', 'Mem', '32bit', 0x08],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', subs],
    );

  const scenarioAwaySubs = (subs) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.scenarioAwaySubsPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', subs],
    );

  const stadiumIdIs = (stadiumId) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.stadiumIdPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['', 'Mem', '32bit', 0x04, '=', 'Value', '', stadiumId],
    );

  const godinScoredCheckpoint = (playerAddress) =>
    $(
      ['AndNext', 'Delta', '32bit', addresses.homeGoals, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['AndNext', 'Mem', '32bit', 0x4c, '=', 'Value', '', 0x2c8dd],
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['', 'Mem', '32bit', 0x1ac, '>', 'Delta', '32bit', 0x1ac, 1],
    );

  const defaultSettings = $(
    ['AddAddress', 'Mem', '32bit', addresses.injuriesPointer],
    ['AddAddress', 'Mem', '32bit', 0x08],
    ['AddAddress', 'Mem', '32bit', 0x04],
    ['', 'Mem', '32bit', 0x04, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.bookingsPointer],
    ['AddAddress', 'Mem', '32bit', 0x04],
    ['', 'Mem', '32bit', 0x04, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.offsidesPointer],
    ['AddAddress', 'Mem', '32bit', 0x08],
    ['AddAddress', 'Mem', '32bit', 0x04],
    ['', 'Mem', '32bit', 0x04, '=', 'Value', '', 1],
  );

  const defaultHalfLength = $(
    ['AddAddress', 'Mem', '32bit', addresses.halfLengthPointer],
    ['AddAddress', 'Mem', '32bit', 0x04],
    ['', 'Mem', '32bit', 0x04, '=', 'Value', '', 6],
  );

  const homePenNoMissed = $(
    ['', 'Delta', '32bit', addresses.penaltyHome1, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', addresses.penaltyHome1, '!=', 'Value', '', 0, 1],
    ['ResetIf', 'Mem', '32bit', addresses.penaltyHome1, '=', 'Value', '', 1],
    ['ResetIf', 'Mem', '32bit', addresses.penaltyHome2, '=', 'Value', '', 1],
    ['ResetIf', 'Mem', '32bit', addresses.penaltyHome3, '=', 'Value', '', 1],
    ['ResetIf', 'Mem', '32bit', addresses.penaltyHome4, '=', 'Value', '', 1],
    ['ResetIf', 'Mem', '32bit', addresses.penaltyHome5, '=', 'Value', '', 1],
  );

  const ramosScoredCheckpoint = (playerAddress) =>
    $(
      ['AndNext', 'Delta', '32bit', addresses.homeGoals, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['AndNext', 'Mem', '32bit', 0x4c, '=', 'Value', '', 0x260d6],
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['', 'Mem', '32bit', 0x1ac, '>', 'Delta', '32bit', 0x1ac, 1],
    );

  const rodriguezScoredCheckpoint = (playerAddress) =>
    $(
      ['AndNext', 'Delta', '32bit', addresses.homeGoals, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['AndNext', 'Mem', '32bit', 0x4c, '=', 'Value', '', 0x30836],
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['', 'Mem', '32bit', 0x1ac, '>', 'Delta', '32bit', 0x1ac, 1],
    );

  const gotzeScoredCheckpoint = (playerAddress) =>
    $(
      ['AndNext', 'Delta', '32bit', addresses.homeGoals, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['AndNext', 'Mem', '32bit', 0x4c, '=', 'Value', '', 0x2ef3e],
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['', 'Mem', '32bit', 0x1ac, '>', 'Delta', '32bit', 0x1ac, 1],
    );

  const playerRedCard = (playerAddress) =>
    $(
      ['AddAddress', 'Mem', '32bit', playerAddress],
      ['', 'Mem', '32bit', 0x1d8, '>', 'Delta', '32bit', 0x1d8],
    );

  const noRedsHome = $(
    ...addresses.homePlayerPointers.map((pointer) =>
      $(
        ['AddAddress', 'Mem', '32bit', pointer],
        ['', 'Delta', '32bit', 0x1d8, '=', 'Value', '', 0],
      ),
    ),
  );

  const noRedsAway = $(
    ...addresses.awayPlayerPointers.map((pointer) =>
      $(
        ['AddAddress', 'Mem', '32bit', pointer],
        ['', 'Delta', '32bit', 0x1d8, '=', 'Value', '', 0],
      ),
    ),
  );

  return {
    addresses,
    gameIs,
    playerIs,
    playerMeasured,
    isPast100Min,
    isStoppage,
    isPreGame,
    isPostGame,
    isPractice,
    isPenalties,
    currentMode,
    careerModeSeasonFlip,
    accomplishmentFlip,
    homePlayer,
    awayPlayer,
    homePlayerMeasured,
    awayPlayerMeasured,
    homeWinning,
    homeWinningAllPens,
    awayWinning,
    awayNoFouls,
    homeTied,
    homeWinningScored,
    awayWinningScored,
    homeScored,
    awayScored,
    homeScoredFirst,
    awayScoredFirst,
    matchOver,
    matchOverTrigger,
    currentDifficultyIsAtLeast,
    simulationCheckpointHomeLosing,
    simulationCheckpointAwayLosing,
    matchReset,
    nonSimulationCheckpoint,
    playerScored,
    youthPlayerScored,
    playerScoredNonSetPiece,
    ballReset,
    isThirdPersonCamera,
    homeTeamIs,
    awayTeamIs,
    sideSelectIntact,
    vanillaSquads,
    modifiedSquads,
    accomplishmentProtection,
    scenarioOff,
    scenarioApply,
    scenarioScore,
    scenarioBall,
    scenarioHalf,
    scenarioTimeLeft,
    scenarioExtraTime,
    scenarioHomeYellows,
    scenarioAwayYellows,
    scenarioHomeReds,
    scenarioAwayReds,
    scenarioHomeInjuries,
    scenarioAwayInjuries,
    scenarioHomeSubs,
    scenarioAwaySubs,
    stadiumIdIs,
    godinScoredCheckpoint,
    ramosScoredCheckpoint,
    defaultSettings,
    defaultHalfLength,
    homePenNoMissed,
    rodriguezScoredCheckpoint,
    gotzeScoredCheckpoint,
    playerRedCard,
    noRedsHome,
    noRedsAway,
  };
};

const c = codeFor();

/**
 * @param {ConditionBuilder} core
 * @param {ConditionBuilder} playerFunction
 */
const getEachPlayerGroups = (core, playerFunction) => {
  const groups = { core };
  c.addresses.homePlayerPointers.forEach(
    (pointer, index) =>
      (groups[`alt${index + 1}`] = $(c.homePlayer, playerFunction(pointer))),
  );
  c.addresses.awayPlayerPointers.forEach(
    (pointer, index) =>
      (groups[`alt${index + 12}`] = $(c.awayPlayer, playerFunction(pointer))),
  );
  return groups;
};

/**
 * @param {ConditionBuilder} core
 * @param {ConditionBuilder} playerFunction
 */
const getEachPlayerRedCardGroups = (core, playerFunction) => {
  const groups = { core };
  c.addresses.homePlayerPointers.forEach(
    (pointer, index) =>
      (groups[`alt${index + 1}`] = $(
        c.homePlayer,
        c.noRedsHome,
        playerFunction(pointer),
      )),
  );
  c.addresses.awayPlayerPointers.forEach(
    (pointer, index) =>
      (groups[`alt${index + 12}`] = $(
        c.awayPlayer,
        c.noRedsAway,
        playerFunction(pointer),
      )),
  );
  return groups;
};

for (const achievement of progressionAchievements) {
  set.addAchievement({
    title: achievement.title,
    description: achievement.description,
    points: 5,
    type: 'progression',
    conditions: $(
      c.gameIs.started,
      c.gameIs.careerMode,
      c.currentMode(achievement.modeId),
      c.careerModeSeasonFlip,
    ),
  });
}

for (const achievement of careerAccomplishments) {
  set.addAchievement({
    title: achievement.title,
    description: achievement.description,
    points: achievement.points,
    conditions: $(
      c.gameIs.started,
      c.gameIs.careerMode,
      c.accomplishmentFlip(achievement.offset),
    ),
  });
}

set.addAchievement({
  title: 'Choose Your Own Fate',
  description:
    'Win a match in Career Mode after intervening in a losing simulation in Professional difficulty or above.',
  points: 4,
  conditions: {
    core: $(
      c.gameIs.started,
      c.gameIs.careerMode,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentDifficultyIsAtLeast(difficulties.professional),
      c.simulationCheckpoint,
      c.matchReset,
      c.matchOverTrigger,
    ),
    alt1: $(c.homePlayer, c.simulationCheckpointHomeLosing, c.homeWinning),
    alt2: $(c.awayPlayer, c.simulationCheckpointAwayLosing, c.awayWinning),
  },
});

set.addAchievement({
  title: 'Legendary Trial',
  description:
    'Win a non-simulated match in Career Mode in Legendary difficulty.',
  points: 5,
  conditions: {
    core: $(
      c.gameIs.started,
      c.gameIs.careerMode,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentDifficultyIsAtLeast(difficulties.legendary),
      c.nonSimulationCheckpoint,
      c.matchReset,
      c.matchOver,
    ),
    alt1: $(c.homePlayer, c.homeWinning),
    alt2: $(c.awayPlayer, c.awayWinning),
  },
});

set.addAchievement({
  title: 'A New Perspective',
  description:
    'Score a non–set piece goal using 3rd person camera in Player Career in Professional difficulty or above.',
  points: 3,
  conditions: getEachPlayerGroups(
    $(
      c.gameIs.started,
      c.gameIs.careerMode,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentMode(0x04),
      c.currentDifficultyIsAtLeast(difficulties.professional),
      c.isThirdPersonCamera,
      c.ballReset,
    ),
    c.playerScoredNonSetPiece,
  ),
});

set.addAchievement({
  title: 'Star Factory',
  description:
    'Score a goal with a player signed from your youth academy in Manager Career in Professional difficulty or above.',
  points: 4,
  conditions: getEachPlayerGroups(
    $(
      c.gameIs.started,
      c.gameIs.careerMode,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentMode(0x02),
      c.currentDifficultyIsAtLeast(difficulties.professional),
    ),
    c.youthPlayerScored,
  ),
});

set.addAchievement({
  title: 'Besting the Legends',
  description:
    'Win a match against the Classic XI team in Legendary difficulty.',
  points: 5,
  conditions: {
    core: $(
      c.gameIs.started,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentDifficultyIsAtLeast(difficulties.legendary),
      c.sideSelectIntact,
      c.vanillaSquads,
      c.scenarioOff,
      c.matchOver,
    ),
    alt1: $(c.homePlayer, c.homeWinning, c.awayTeamIs(0x1b265)),
    alt2: $(c.awayPlayer, c.awayWinning, c.homeTeamIs(0x1b265)),
  },
});

set.addAchievement({
  title: 'Legendary Contemporaries',
  description: 'Win a match against the World XI team in Legendary difficulty.',
  points: 5,
  conditions: {
    core: $(
      c.gameIs.started,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentDifficultyIsAtLeast(difficulties.legendary),
      c.sideSelectIntact,
      c.vanillaSquads,
      c.scenarioOff,
      c.matchOver,
    ),
    alt1: $(c.homePlayer, c.homeWinning, c.awayTeamIs(0x1b1e0)),
    alt2: $(c.awayPlayer, c.awayWinning, c.homeTeamIs(0x1b1e0)),
  },
});

for (const achievement of UKAccomplishments) {
  set.addAchievement({
    title: achievement.title,
    description: achievement.description,
    points: achievement.points,
    conditions: $(
      c.gameIs.started,
      c.playerIs.inMenus,
      c.accomplishmentProtection,
      c.accomplishmentFlip(achievement.offset),
    ),
  });
}

for (const achievement of westernEuropeAccomplishments) {
  set.addAchievement({
    title: achievement.title,
    description: achievement.description,
    points: achievement.points,
    conditions: $(
      c.gameIs.started,
      c.playerIs.inMenus,
      c.accomplishmentProtection,
      c.accomplishmentFlip(achievement.offset),
    ),
  });
}

set.addAchievement({
  title: 'Les Parisiens',
  description:
    'As PSG, win in Semi-Pro difficulty or above against another club from Ligue 1 while scoring at least 5 goals.',
  points: 5,
  conditions: {
    core: $(
      c.gameIs.started,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentDifficultyIsAtLeast(difficulties.semiPro),
      c.sideSelectIntact,
      c.vanillaSquads,
      c.scenarioOff,
      c.matchOver,
    ),
    alt1: $(
      c.homePlayer,
      c.homeWinningScored(5),
      c.homeTeamIs(0x49),
      orNext(...ligue1Clubs.map((club) => c.awayTeamIs(club))),
    ),
    alt2: $(
      c.awayPlayer,
      c.awayWinningScored(5),
      c.awayTeamIs(0x49),
      orNext(...ligue1Clubs.map((club) => c.homeTeamIs(club))),
    ),
  },
});

set.addAchievement({
  title: 'The Lancers',
  description:
    'As Ajax, win in Semi-Pro difficulty or above against another club from the Eredivisie while scoring at least 5 goals.',
  points: 5,
  conditions: {
    core: $(
      c.gameIs.started,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentDifficultyIsAtLeast(difficulties.semiPro),
      c.sideSelectIntact,
      c.vanillaSquads,
      c.scenarioOff,
      c.matchOver,
    ),
    alt1: $(
      c.homePlayer,
      c.homeWinningScored(5),
      c.homeTeamIs(0xf5),
      orNext(...eredivisieClubs.map((club) => c.awayTeamIs(club))),
    ),
    alt2: $(
      c.awayPlayer,
      c.awayWinningScored(5),
      c.awayTeamIs(0xf5),
      orNext(...eredivisieClubs.map((club) => c.homeTeamIs(club))),
    ),
  },
});

for (const achievement of southernEuropeAccomplishments) {
  set.addAchievement({
    title: achievement.title,
    description: achievement.description,
    points: achievement.points,
    conditions: $(
      c.gameIs.started,
      c.playerIs.inMenus,
      c.accomplishmentProtection,
      c.accomplishmentFlip(achievement.offset),
    ),
  });
}

set.addAchievement({
  title: 'La Vecchia Signora',
  description:
    'As Juventus, win in Semi-Pro difficulty or above against another club from Serie A while scoring at least 4 goals.',
  points: 4,
  conditions: {
    core: $(
      c.gameIs.started,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentDifficultyIsAtLeast(difficulties.semiPro),
      c.sideSelectIntact,
      c.vanillaSquads,
      c.scenarioOff,
      c.matchOver,
    ),
    alt1: $(
      c.homePlayer,
      c.homeWinningScored(4),
      c.homeTeamIs(0x2d),
      orNext(...serieAClubs.map((club) => c.awayTeamIs(club))),
    ),
    alt2: $(
      c.awayPlayer,
      c.awayWinningScored(4),
      c.awayTeamIs(0x2d),
      orNext(...serieAClubs.map((club) => c.homeTeamIs(club))),
    ),
  },
});

for (const achievement of centralEuropeAccomplishments) {
  set.addAchievement({
    title: achievement.title,
    description: achievement.description,
    points: achievement.points,
    conditions: $(
      c.gameIs.started,
      c.playerIs.inMenus,
      c.accomplishmentProtection,
      c.accomplishmentFlip(achievement.offset),
    ),
  });
}

set.addAchievement({
  title: 'Mia San Mia',
  description:
    'As FC Bayern, win in Semi-Pro difficulty or above against another club from the German Bundesliga while scoring at least 5 goals.',
  points: 5,
  conditions: {
    core: $(
      c.gameIs.started,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentDifficultyIsAtLeast(difficulties.semiPro),
      c.sideSelectIntact,
      c.vanillaSquads,
      c.scenarioOff,
      c.matchOver,
    ),
    alt1: $(
      c.homePlayer,
      c.homeWinningScored(5),
      c.homeTeamIs(0x15),
      orNext(...bundesligaClubs.map((club) => c.awayTeamIs(club))),
    ),
    alt2: $(
      c.awayPlayer,
      c.awayWinningScored(5),
      c.awayTeamIs(0x15),
      orNext(...bundesligaClubs.map((club) => c.homeTeamIs(club))),
    ),
  },
});

for (const achievement of americasAccomplishments) {
  set.addAchievement({
    title: achievement.title,
    description: achievement.description,
    points: achievement.points,
    conditions: $(
      c.gameIs.started,
      c.playerIs.inMenus,
      c.accomplishmentProtection,
      c.accomplishmentFlip(achievement.offset),
    ),
  });
}

for (const achievement of scandinaviaAccomplishments) {
  set.addAchievement({
    title: achievement.title,
    description: achievement.description,
    points: achievement.points,
    conditions: $(
      c.gameIs.started,
      c.playerIs.inMenus,
      c.accomplishmentProtection,
      c.accomplishmentFlip(achievement.offset),
    ),
  });
}

for (const achievement of restOfWorldAccomplishments) {
  set.addAchievement({
    title: achievement.title,
    description: achievement.description,
    points: achievement.points,
    conditions: $(
      c.gameIs.started,
      c.playerIs.inMenus,
      c.accomplishmentProtection,
      c.accomplishmentFlip(achievement.offset),
    ),
  });
}

for (const achievement of masterAccomplishments) {
  set.addAchievement({
    title: achievement.title,
    description: achievement.description,
    points: achievement.points,
    conditions: $(
      c.gameIs.started,
      c.playerIs.inMenus,
      c.accomplishmentProtection,
      c.accomplishmentFlip(achievement.offset),
    ),
  });
}

for (const achievement of scenarioAccomplishments) {
  set.addAchievement({
    title: `Scenario ${achievement.title}`,
    description: achievement.description,
    points: achievement.points,
    conditions: $(
      c.gameIs.started,
      c.playerIs.inMenus,
      c.accomplishmentProtection,
      c.accomplishmentFlip(achievement.offset),
    ),
  });
}

set.addAchievement({
  title: 'Classic Scenarios: FA Cup',
  description:
    'Use Scenario settings to start a match in the 10th minute down 0-2 as Arsenal against Hull City at Wembley Stadium. Win the match in Legendary difficulty.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(0, 2),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.firstHalf),
    c.scenarioTimeLeft(35),
    c.scenarioExtraTime(scenarioSettings.extraTime.classic),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.stadiumIdIs(0x9b),
    c.homeTeamIs(0x01),
    c.awayTeamIs(0x7a0),
    c.homePlayer,
    c.homeWinning,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'Classic Scenarios: Copa do Brasil',
  description:
    'Use Scenario settings to start a 0-0 match in the 85th minute with Extra Time Format set to None as Flamengo against Atl. Paranaense. Win the match in Legendary difficulty.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(0, 0),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.secondHalf),
    c.scenarioTimeLeft(5),
    c.scenarioExtraTime(scenarioSettings.extraTime.none),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x413),
    c.awayTeamIs(0x40f),
    c.homePlayer,
    c.homeWinning,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'What If Scenarios: Taça de Portugal',
  description:
    'Use Scenario settings to start a match in the 20th minute down 0-1 vs SL Benfica as Rio Ave FC. Win the match in Legendary difficulty.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(0, 1),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.firstHalf),
    c.scenarioTimeLeft(25),
    c.scenarioExtraTime(scenarioSettings.extraTime.classic),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0xea),
    c.awayTeamIs(0x2e8),
    c.awayPlayer,
    c.awayWinning,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'What If Scenarios: Bundesliga',
  description:
    'Use Scenario settings to start a match in the 70th minute down 0-1 with Extra Time Format set to None as Borussia Dortmund against FC Bayern. Win the match in Legendary difficulty.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(0, 1),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.secondHalf),
    c.scenarioTimeLeft(20),
    c.scenarioExtraTime(scenarioSettings.extraTime.none),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x16),
    c.awayTeamIs(0x15),
    c.homePlayer,
    c.homeWinning,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'Classic Scenarios: La Liga',
  description:
    "Use Scenario settings to start a match in the 50th minute down 0-1 with Extra Time Format set to None vs Barcelona as Atlético Madrid. Score with Godín and don't concede any more goals in Legendary difficulty. Ball Location may be set to a Corner.",
  points: 10,
  conditions: getEachPlayerGroups(
    $(
      c.gameIs.started,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentDifficultyIsAtLeast(difficulties.legendary),
      c.currentMode(0x07),
      c.sideSelectIntact,
      c.vanillaSquads,
      c.scenarioApply,
      c.scenarioScore(0, 1),
      orNext(
        c.scenarioBall(scenarioSettings.ball.kickoff),
        c.scenarioBall(scenarioSettings.ball.cornerLeft),
        c.scenarioBall(scenarioSettings.ball.cornerRight),
      ),
      c.scenarioHalf(scenarioSettings.half.secondHalf),
      c.scenarioTimeLeft(40),
      c.scenarioExtraTime(scenarioSettings.extraTime.none),
      c.scenarioHomeYellows(0),
      c.scenarioAwayYellows(0),
      c.scenarioHomeReds(0),
      c.scenarioAwayReds(0),
      c.scenarioHomeInjuries(0),
      c.scenarioAwayInjuries(0),
      c.scenarioHomeSubs(3),
      c.scenarioAwaySubs(3),
      c.homeTeamIs(0xf0),
      c.awayTeamIs(0xf1),
      c.homePlayer,
      c.awayScored(1),
      c.matchOverTrigger,
      c.matchReset,
    ),
    c.godinScoredCheckpoint,
  ),
});

set.addAchievement({
  title: 'What If Scenarios: Premier League',
  description:
    'Use Scenario settings to start a match in the 2nd half down 0-1 with Extra Time Format set to None as Liverpool against Chelsea. Win the match in Legendary difficulty.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(0, 1),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.secondHalf),
    c.scenarioTimeLeft(45),
    c.scenarioExtraTime(scenarioSettings.extraTime.none),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x09),
    c.awayTeamIs(0x05),
    c.homePlayer,
    c.homeWinning,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'Classic Scenarios: Premier League',
  description:
    'Use Scenario settings to start a match in the 80th minute down 0-3 as Crystal Palace against Liverpool. Tie the match in Legendary difficulty.',
  points: 25,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(0, 3),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.secondHalf),
    c.scenarioTimeLeft(10),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x707),
    c.awayTeamIs(0x09),
    c.homePlayer,
    c.homeTied,
  ),
});

set.addAchievement({
  title: 'Classic Scenarios: Europa League',
  description:
    'Use Scenario settings to start a 0-0 match in the 85th minute with Extra Time Format set to Penalty Shoot-Out as Sevilla FC against SL Benfica. Win on penalties without missing a single one and without needing extra shots in Legendary difficulty.',
  points: 5,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(0, 0),
    c.scenarioHalf(scenarioSettings.half.secondHalf),
    c.scenarioTimeLeft(5),
    c.scenarioExtraTime(scenarioSettings.extraTime.penaltyShootout),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x1e1),
    c.awayTeamIs(0xea),
    c.homePlayer,
    c.homeWinningAllPens,
    c.homePenNoMissed,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'Classic Scenarios: Copa Libertadores',
  description:
    "Use Scenario settings to start a match down 0-2 as Atl. Mineiro against Newell's. Win the match in Legendary difficulty.",
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(0, 2),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.firstHalf),
    c.scenarioTimeLeft(45),
    c.scenarioExtraTime(scenarioSettings.extraTime.classic),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x40b),
    c.awayTeamIs(0x1af3c),
    c.homePlayer,
    c.homeWinning,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'Classic Scenarios: Champions League',
  description:
    'Use Scenario settings to start a match in the 85th minute down 0-1 with 0 subs left as Real Madrid against Athlético Madrid. Score with Sergio Ramos then win the match in Legendary difficulty. Ball Location may be set to a Corner.',
  points: 25,
  conditions: getEachPlayerGroups(
    $(
      c.gameIs.started,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentDifficultyIsAtLeast(difficulties.legendary),
      c.currentMode(0x07),
      c.sideSelectIntact,
      c.vanillaSquads,
      c.scenarioApply,
      c.scenarioScore(0, 1),
      orNext(
        c.scenarioBall(scenarioSettings.ball.kickoff),
        c.scenarioBall(scenarioSettings.ball.cornerLeft),
        c.scenarioBall(scenarioSettings.ball.cornerRight),
      ),
      c.scenarioHalf(scenarioSettings.half.secondHalf),
      c.scenarioTimeLeft(5),
      c.scenarioExtraTime(scenarioSettings.extraTime.classic),
      c.scenarioHomeYellows(0),
      c.scenarioAwayYellows(0),
      c.scenarioHomeReds(0),
      c.scenarioAwayReds(0),
      c.scenarioHomeInjuries(0),
      c.scenarioAwayInjuries(0),
      c.scenarioHomeSubs(0),
      c.scenarioAwaySubs(0),
      c.homeTeamIs(0xf3),
      c.awayTeamIs(0xf0),
      c.homePlayer,
      c.homeWinning,
      c.matchOverTrigger,
      c.matchReset,
    ),
    c.ramosScoredCheckpoint,
  ),
});

set.addAchievement({
  title: 'Classic Scenarios: Dolphin Dive',
  description:
    'Use Scenario settings to start a match in the 30th minute down 1-0 with Extra Time Format set to None vs Spain as the Netherlands. Win the match in Legendary difficulty.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(1, 0),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.firstHalf),
    c.scenarioTimeLeft(15),
    c.scenarioExtraTime(scenarioSettings.extraTime.none),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x552),
    c.awayTeamIs(0x1b420),
    c.awayPlayer,
    c.awayWinning,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'Classic Scenarios: Biting Situation',
  description:
    'Use Scenario settings to start a 0-0 match in the 80th minute with Extra Time Format set to None and Home Red Cards set to 1 vs Italy as Uruguay. Win the match in Legendary difficulty.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(0, 0),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.secondHalf),
    c.scenarioTimeLeft(10),
    c.scenarioExtraTime(scenarioSettings.extraTime.none),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(1),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x53f),
    c.awayTeamIs(0x561),
    c.awayPlayer,
    c.awayWinning,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'Classic Scenarios: Puskás Award',
  description:
    'Use Scenario settings to start a 0-0 match in the 25th minute with Extra Time Format set to None as Colombia against Uruguay. Score with James Rodríguez then win the match in Legendary difficulty.',
  points: 10,
  conditions: getEachPlayerGroups(
    $(
      c.gameIs.started,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentDifficultyIsAtLeast(difficulties.legendary),
      c.currentMode(0x07),
      c.sideSelectIntact,
      c.vanillaSquads,
      c.scenarioApply,
      c.scenarioScore(0, 0),
      c.scenarioBall(scenarioSettings.ball.kickoff),
      c.scenarioHalf(scenarioSettings.half.firstHalf),
      c.scenarioTimeLeft(20),
      c.scenarioExtraTime(scenarioSettings.extraTime.none),
      c.scenarioHomeYellows(0),
      c.scenarioAwayYellows(0),
      c.scenarioHomeReds(0),
      c.scenarioAwayReds(0),
      c.scenarioHomeInjuries(0),
      c.scenarioAwayInjuries(0),
      c.scenarioHomeSubs(3),
      c.scenarioAwaySubs(3),
      c.homeTeamIs(0x1b205),
      c.awayTeamIs(0x561),
      c.homePlayer,
      c.homeWinning,
      c.matchOverTrigger,
      c.matchReset,
    ),
    c.rodriguezScoredCheckpoint,
  ),
});

set.addAchievement({
  title: 'What If Scenarios: No Era Penal',
  description:
    'Use Scenario settings to start a 1-1 match in the first half of extra time vs Netherlands as Mexico. Win the match before time runs out in Legendary difficulty.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(1, 1),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.extraTimeFirstHalf),
    c.scenarioTimeLeft(15),
    c.scenarioExtraTime(scenarioSettings.extraTime.classic),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x1b420),
    c.awayTeamIs(0x56a),
    c.awayPlayer,
    c.awayWinning,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'Classic Scenarios: Eternal Eliminator',
  description:
    'Use Scenario settings to start a 1-1 match in 35th minute as Brazil against Chile. Win the match in Legendary difficulty.',
  points: 5,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(1, 1),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.firstHalf),
    c.scenarioTimeLeft(10),
    c.scenarioExtraTime(scenarioSettings.extraTime.classic),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x55a),
    c.awayTeamIs(0x1b363),
    c.homePlayer,
    c.homeWinning,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'What If Scenarios: Secretary of Defense',
  description:
    'Use Scenario settings to start a 0-0 match in the first half of extra time vs Belgium as United States. Win the match with a clean sheet in Legendary difficulty.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(0, 0),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.extraTimeFirstHalf),
    c.scenarioTimeLeft(15),
    c.scenarioExtraTime(scenarioSettings.extraTime.classic),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x52d),
    c.awayTeamIs(0x56b),
    c.awayPlayer,
    c.awayWinning,
    c.homeScored(0),
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'What If Scenarios: Clean Game',
  description:
    'Use Scenario settings to start a match in the 70th minute down 2-0 vs Brazil as Colombia. Win the match with 0 fouls commited in Legendary difficulty.',
  points: 25,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(2, 0),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.secondHalf),
    c.scenarioTimeLeft(20),
    c.scenarioExtraTime(scenarioSettings.extraTime.classic),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x55a),
    c.awayTeamIs(0x1b205),
    c.awayPlayer,
    c.awayWinning,
    c.awayNoFouls,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'What If Scenarios: Golden Generation',
  description:
    'Use Scenario settings to start a match in the 10th minute down 1-0 vs Argentina as Belgium. Win the match in Legendary difficulty.',
  points: 10,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(1, 0),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.firstHalf),
    c.scenarioTimeLeft(35),
    c.scenarioExtraTime(scenarioSettings.extraTime.classic),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x559),
    c.awayTeamIs(0x52d),
    c.awayPlayer,
    c.awayWinning,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'What If Scenarios: Disaster Averted',
  description:
    'Use Scenario settings to start a match in the 30th minute down 0-5 as Brazil against Germany. Win the match in Legendary difficulty.',
  points: 50,
  conditions: $(
    c.gameIs.started,
    c.defaultSettings,
    c.playerIs.ingame,
    c.currentDifficultyIsAtLeast(difficulties.legendary),
    c.currentMode(0x07),
    c.sideSelectIntact,
    c.vanillaSquads,
    c.scenarioApply,
    c.scenarioScore(0, 5),
    c.scenarioBall(scenarioSettings.ball.kickoff),
    c.scenarioHalf(scenarioSettings.half.firstHalf),
    c.scenarioTimeLeft(15),
    c.scenarioExtraTime(scenarioSettings.extraTime.classic),
    c.scenarioHomeYellows(0),
    c.scenarioAwayYellows(0),
    c.scenarioHomeReds(0),
    c.scenarioAwayReds(0),
    c.scenarioHomeInjuries(0),
    c.scenarioAwayInjuries(0),
    c.scenarioHomeSubs(3),
    c.scenarioAwaySubs(3),
    c.homeTeamIs(0x55a),
    c.awayTeamIs(0x539),
    c.homePlayer,
    c.homeWinning,
    c.matchOver,
  ),
});

set.addAchievement({
  title: 'Classic Scenarios: Super Mario',
  description:
    'Use Scenario settings to start a 0-0 match in the second half of extra time as Germany against Argentina. Win the match before time runs out in Legendary difficulty.',
  points: 10,
  conditions: getEachPlayerGroups(
    $(
      c.gameIs.started,
      c.defaultSettings,
      c.playerIs.ingame,
      c.currentDifficultyIsAtLeast(difficulties.legendary),
      c.currentMode(0x07),
      c.sideSelectIntact,
      c.vanillaSquads,
      c.scenarioApply,
      c.scenarioScore(0, 0),
      c.scenarioBall(scenarioSettings.ball.kickoff),
      c.scenarioHalf(scenarioSettings.half.extraTimeSecondHalf),
      c.scenarioTimeLeft(15),
      c.scenarioExtraTime(scenarioSettings.extraTime.classic),
      c.scenarioHomeYellows(0),
      c.scenarioAwayYellows(0),
      c.scenarioHomeReds(0),
      c.scenarioAwayReds(0),
      c.scenarioHomeInjuries(0),
      c.scenarioAwayInjuries(0),
      c.scenarioHomeSubs(3),
      c.scenarioAwaySubs(3),
      c.homeTeamIs(0x539),
      c.awayTeamIs(0x559),
      c.homePlayer,
      c.homeWinning,
      c.matchOverTrigger,
      c.matchReset,
    ),
    c.gotzeScoredCheckpoint,
  ),
});

for (const achievement of enduranceAccomplishments) {
  set.addAchievement({
    title: achievement.title,
    description: achievement.description,
    points: achievement.points,
    conditions: $(
      c.gameIs.started,
      c.playerIs.inMenus,
      c.accomplishmentProtection,
      c.accomplishmentFlip(achievement.offset),
    ),
  });
}

set.addLeaderboard({
  title: 'Goal%',
  description: 'Fastest goal scored in match clock time (6 mins Half Length).',
  lowerIsBetter: true,
  type: 'SECS',
  conditions: {
    start: {
      core: $(
        c.gameIs.started,
        c.defaultSettings,
        c.defaultHalfLength,
        c.playerIs.ingame,
        c.sideSelectIntact,
        c.vanillaSquads,
        c.scenarioOff,
      ),
      alt1: $(c.homePlayer, c.homeScoredFirst),
      alt2: $(c.awayPlayer, c.awayScoredFirst),
    },
    cancel: '0=1',
    submit: '1=1',
    value: {
      core: c.playerMeasured.totalTime,
    },
  },
});

set.addLeaderboard({
  title: 'Red%',
  description:
    'Fastest red card received in match clock time (6 mins Half Length).',
  lowerIsBetter: true,
  type: 'SECS',
  conditions: {
    start: getEachPlayerRedCardGroups(
      $(
        c.gameIs.started,
        c.defaultSettings,
        c.defaultHalfLength,
        c.playerIs.ingame,
        c.sideSelectIntact,
        c.vanillaSquads,
        c.scenarioOff,
        c.noReds,
      ),
      c.playerRedCard,
    ),
    cancel: '0=1',
    submit: '1=1',
    value: {
      core: c.playerMeasured.totalTime,
    },
  },
});

set.addLeaderboard({
  title: 'Most Goals',
  description: 'Most goals scored in a single match (6 mins Half Length).',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: {
      core: $(
        c.gameIs.started,
        c.defaultSettings,
        c.defaultHalfLength,
        c.playerIs.ingame,
        c.sideSelectIntact,
        c.vanillaSquads,
        c.scenarioOff,
        c.matchOver,
      ),
    },
    cancel: '0=1',
    submit: '1=1',
    value: {
      core: $(c.homePlayerMeasured, c.playerMeasured.homeScore),
      alt1: $(c.awayPlayerMeasured, c.playerMeasured.awayScore),
    },
  },
});

export const rich = RichPresence({
  format: { Value: 'VALUE', Secs: 'SECS' },
  lookupDefaultParameters: { keyFormat: 'hex' },
  lookup: {
    Language: { values: richPresenceValues.language },
    Mode: { values: richPresenceValues.mode },
    Team: { values: richPresenceValues.team },
    Stadium: { values: richPresenceValues.stadium },
  },
  displays: ({ lookup, format, macro }) => {
    const display = () => {
      const language = lookup.Language.at(c.playerMeasured.language);
      const mode = lookup.Mode.at(c.playerMeasured.mode);
      const homeScore = format.Value.at(c.playerMeasured.homeScore);
      const homeScorePens = format.Value.at(c.playerMeasured.homeScorePens);
      const homeTeam = lookup.Team.at(c.playerMeasured.homeTeamId);
      const awayScore = format.Value.at(c.playerMeasured.awayScore);
      const awayScorePens = format.Value.at(c.playerMeasured.awayScorePens);
      const awayTeam = lookup.Team.at(c.playerMeasured.awayTeamId);
      const stadium = lookup.Stadium.at(c.playerMeasured.stadiumId);
      const regularTimeA = macro.ASCIIChar.at(c.playerMeasured.regularTimeA);
      const regularTimeB = macro.ASCIIChar.at(c.playerMeasured.regularTimeB);
      const regularTimeC = macro.ASCIIChar.at(c.playerMeasured.regularTimeC);
      const regularTimeD = macro.ASCIIChar.at(c.playerMeasured.regularTimeD);
      const regularTimeE = macro.ASCIIChar.at(c.playerMeasured.regularTimeE);
      const regularTimeF = macro.ASCIIChar.at(c.playerMeasured.regularTimeF);
      const regularTime = `${regularTimeA}${regularTimeB}:${regularTimeD}${regularTimeE}`;
      const extraTime = `${regularTimeA}${regularTimeB}${regularTimeC}:${regularTimeE}${regularTimeF}`;
      const stoppageTime = format.Secs.at(c.playerMeasured.stoppageTime);

      return /** @type Array<[ConditionBuilder, string]> */ ([
        [
          $(c.gameIs.started, c.isPractice),
          `${language} [Practice] ${homeTeam} - ${awayTeam} 🏟️ ${stadium}`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingame, c.isPreGame),
          `${language} [${mode}] ${homeTeam} - ${awayTeam} 🏟️ ${stadium}`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingame, c.isPenalties, c.isPostGame),
          `${language} [${mode}] ${homeTeam} (${homeScorePens}) ${homeScore} - ${awayScore} (${awayScorePens}) ${awayTeam} 🕘 Full Time 🏟️ ${stadium}`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingame, c.isPostGame),
          `${language} [${mode}] ${homeTeam} ${homeScore} - ${awayScore} ${awayTeam} 🕘 Full Time 🏟️ ${stadium}`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingame, c.isPenalties),
          `${language} [${mode}] ${homeTeam} (${homeScorePens}) ${homeScore} - ${awayScore} (${awayScorePens}) ${awayTeam} 🕘 Penalty Shoot-Outs 🏟️ ${stadium}`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingame, c.isPast100Min, c.isStoppage),
          `${language} [${mode}] ${homeTeam} ${homeScore} - ${awayScore} ${awayTeam} 🕘 ${extraTime} + ${stoppageTime} 🏟️ ${stadium}`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingame, c.isStoppage),
          `${language} [${mode}] ${homeTeam} ${homeScore} - ${awayScore} ${awayTeam} 🕘 ${regularTime} + ${stoppageTime} 🏟️ ${stadium}`,
        ],
        [
          $(
            c.gameIs.started,
            c.gameIs.started,
            c.playerIs.ingame,
            c.isPast100Min,
          ),
          `${language} [${mode}] ${homeTeam} ${homeScore} - ${awayScore} ${awayTeam} 🕘 ${extraTime} 🏟️ ${stadium}`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingame),
          `${language} [${mode}] ${homeTeam} ${homeScore} - ${awayScore} ${awayTeam} 🕘 ${regularTime} 🏟️ ${stadium}`,
        ],
        [
          $(c.gameIs.started, c.modifiedSquads),
          `${language} [${mode}] Getting ready to play ⚠ Squads modification detected ⚠`,
        ],
        [$(c.gameIs.started), `${language} [${mode}] Getting ready to play`],
      ]);
    };

    return [...display(), 'Playing FIFA 14'];
  },
});

export default set;
