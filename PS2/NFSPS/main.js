import {
  AchievementSet,
  define as $,
  ConditionBuilder,
  RichPresence,
  orNext,
  measuredIf,
} from '@cruncheevos/core';

import {
  raceDays,
  progressionAchievements,
  optionalBossAchievements,
  orgAchievements,
  showdownChallengeAchievements,
  challengeRaceDayAchievements,
  loanerIds,
  carModels,
  trackIds,
  tracksWithRecords,
  timeTrialAchievements,
  raceDayLeaderboards,
} from './constants.js';

/**
 * @template T
 * @typedef {(c: typeof codeFor extends (...args: any[]) => infer U ? U : any) => T} CodeCallbackTemplate
 */

/**
 * @typedef {Object} TrackWithRecord
 * @property {number} id
 * @property {number} record
 * */

const set = new AchievementSet({
  gameId: 2825,
  title: 'Need for Speed: ProStreet',
});

const codeFor = () => {
  const addresses = {
    carStatsPointer: 0x6a8c28,
    carModelPointer: 0x6bf9f8,
    markerPointer: 0x6c5160,
    careerPointer: 0x6c57e0,
    inRaceDayPointer: 0x6cc9b8,
    settingsPointer: 0x6cec78,
    saveFilePointer: 0x6cec98,
    speedPointer: 0x6c07c8,
    sectorShootoutPointer: 0x6d3b4c,
    ingamePointer: 0x6d3bb8,
    eventSummaryPointer: 0x6d3f40,
    recordsPointer: 0x6d3f6c,
    loadedRaceDayPointer: 0x6d3f88,
    completionPointer: 0x6d3fcc,
    eventCompletionPointer: 0x6d3fe8,
    currentHeatPointer: 0x6e028c,
    gripLevelPointer: 0x6e13b0,
    carLotPointer: 0x6e7e48,
    menuCarPointer: 0x704358,
    gameStartedPointer: 0x704eec,
    careerRaceDayPointer: 0x735430,
  };

  const gameIs = {
    // prettier-ignore
    booted: $.one(['PauseIf', 'Mem', '32bit', addresses.gameStartedPointer, '=', 'Value', '', 0]),
    started: $(
      ['AddAddress', 'Mem', '32bit', addresses.gameStartedPointer],
      ['', 'Mem', '32bit', 0x57c, '=', 'Value', '', 1],
    ),
    loadedIn: $(
      ['AddAddress', 'Mem', '32bit', addresses.saveFilePointer],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['', 'Mem', '32bit', 0x100, '=', 'Value', '', 1],
    ),
  };

  const playerIs = {
    notInRaceDay: $(
      ['AddAddress', 'Mem', '32bit', addresses.inRaceDayPointer],
      ['', 'Mem', '32bit', 0x8, '=', 'Value', '', 0],
    ),
    inRaceDay: $(
      ['AddAddress', 'Mem', '32bit', addresses.inRaceDayPointer],
      ['', 'Mem', '32bit', 0x8, '=', 'Value', '', 1],
    ),
    racing: $(
      ['AddAddress', 'Mem', '32bit', addresses.ingamePointer],
      ['', 'Mem', '32bit', 0x4, '=', 'Value', '', 1],
    ),
  };

  const cash = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
    ['Measured', 'Mem', '32bit', 0x1e0],
  );

  const currentCarSlotMakeshiftPointer = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
    ['Remember', 'Mem', '32bit', 0x18, '-', 'Value', '', 0x8c],
    ['Remember', 'Recall', '', 0, '*', 'Value', '', 0x17dc],
    ['Remember', 'Recall', '', 0, '+', 'Value', '', 0x11f4],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
  );

  const playerMeasured = {
    car: $(
      ['AddAddress', 'Mem', '32bit', addresses.carModelPointer],
      ['Measured', 'Mem', '32bit', 0x28],
    ),
    mode: $(
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
      ['MeasuredIf', 'Mem', '32bit', 0x18, '<=', 'Value', '', 0xff],
      currentCarSlotMakeshiftPointer,
      ['Measured', 'Mem', '32bit', 0x1f8, '+', 'Value', '', 1],
    ),
    modeLoaner: $(
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
      ['AndNext', 'Mem', '32bit', 0x18, '>', 'Value', '', 0xff],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
      ['Measured', 'Mem', '32bit', 0x18],
    ),
    day: $(
      ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', '32bit', 0x10],
    ),
  };

  const codeEntryDetection = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
    ['', 'Mem', '32bit', 0x468, '=', 'Value', '', 0],
  );

  const currentRaceDay = (id) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', '32bit', 0x10, '=', 'Value', '', id],
    );

  const heatWon = $(
    ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
    ['AddAddress', 'Mem', '32bit', 0x50],
    ['', 'Mem', '32bit', 0x5c, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
    ['AddAddress', 'Mem', '32bit', 0x50],
    ['', 'Delta', 'Bit2', 0x68, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
    ['AddAddress', 'Mem', '32bit', 0x50],
    ['', 'Mem', 'Bit2', 0x68, '=', 'Value', '', 1],
  );

  const raceDayDominated = $(
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Delta', 'Bit3', 0x18, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Mem', 'Bit3', 0x18, '=', 'Value', '', 1],
  );

  const raceDayDominatedTrigger = $(
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Delta', 'Bit3', 0x18, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['Trigger', 'Mem', 'Bit3', 0x18, '=', 'Value', '', 1],
  );

  const raceDayWon = $(
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Delta', 'Bit2', 0x18, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Mem', 'Bit2', 0x18, '=', 'Value', '', 1],
  );

  const raceDayWonTrigger = $(
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Delta', 'Bit2', 0x18, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['Trigger', 'Mem', 'Bit2', 0x18, '=', 'Value', '', 1],
  );

  const raceDayRecordBeaten = $(
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Delta', 'Bit4', 0x18, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Mem', 'Bit4', 0x18, '=', 'Value', '', 1],
  );

  const raceDayStarted = (id) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.inRaceDayPointer],
      ['AndNext', 'Mem', '32bit', 0x8, '=', 'Value', '', 1],
      ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Mem', '32bit', 0x10, '=', 'Value', '', id],
      ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['', 'Mem', '32bit', 0x50, '=', 'Value', '', 0, 1],
    );

  const genericRaceDayStarted = $(
    ['AddAddress', 'Mem', '32bit', addresses.inRaceDayPointer],
    ['AndNext', 'Mem', '32bit', 0x8, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Mem', '32bit', 0x50, '=', 'Value', '', 0, 1],
  );

  const kingAssistReset = $(
    ['AddAddress', 'Mem', '32bit', addresses.settingsPointer],
    ['AddAddress', 'Mem', '32bit', 0x8],
    ['ResetIf', 'Mem', '8bit', 0x140, '!=', 'Value', '', 2],
  );

  const raceDayReset = $(
    ['AddAddress', 'Mem', '32bit', addresses.inRaceDayPointer],
    ['ResetIf', 'Mem', '32bit', 0x8, '=', 'Value', '', 0],
  );

  const ryoRaceDayReset = $(
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['AddAddress', 'Mem', '32bit', 0x0],
    ['AndNext', 'Mem', '32bit', 0x10, '!=', 'Value', '', raceDays.SNevada],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['AddAddress', 'Mem', '32bit', 0x0],
    ['ResetIf', 'Mem', '32bit', 0x10, '!=', 'Value', '', raceDays.STokyo],
  );

  const allKingsDefeated = $(
    ['AddAddress', 'Mem', '32bit', addresses.completionPointer],
    ['AddAddress', 'Mem', '32bit', 0x4],
    ['AndNext', 'Mem', 'Bit2', 0x510, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.completionPointer],
    ['AddAddress', 'Mem', '32bit', 0x4],
    ['AndNext', 'Mem', 'Bit2', 0x204, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.completionPointer],
    ['AddAddress', 'Mem', '32bit', 0x4],
    ['AndNext', 'Mem', 'Bit2', 0x294, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.completionPointer],
    ['AddAddress', 'Mem', '32bit', 0x4],
    ['AndNext', 'Mem', 'Bit2', 0x3c0, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.completionPointer],
    ['AddAddress', 'Mem', '32bit', 0x4],
    ['', 'Mem', 'Bit2', 0x4e0, '=', 'Value', '', 1],
  );

  const orgCompletion = (offset, totalRaceDays) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.completionPointer],
      ['AddAddress', 'Mem', '32bit', 0x4],
      ['', 'Delta', '32bit', offset, '=', 'Value', '', totalRaceDays - 0x1],
      ['AddAddress', 'Mem', '32bit', addresses.completionPointer],
      ['AddAddress', 'Mem', '32bit', 0x4],
      ['Measured', 'Mem', '32bit', offset, '=', 'Value', '', totalRaceDays],
    );

  const notPreTunedNonBossCarReset = $(
    currentCarSlotMakeshiftPointer,
    ['AndNext', 'Mem', '32bit', 0x538, '!=', 'Value', '', 0xffffffff],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    ['AndNext', 'Mem', '32bit', 0x780, '=', 'Value', '', carModels.BMWM3E92],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    ['AndNext', 'Mem', '32bit', 0x17c8, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['ResetIf', 'Mem', '32bit', 0x1c, '>', 'Delta', '32bit', 0x1c],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    ['AndNext', 'Mem', '32bit', 0x538, '!=', 'Value', '', 0xffffffff],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    // prettier-ignore
    ['AndNext', 'Mem', '32bit', 0x780, '=', 'Value', '', carModels.FordMustangGT],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    ['AndNext', 'Mem', '32bit', 0x17c8, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['ResetIf', 'Mem', '32bit', 0x1c, '>', 'Delta', '32bit', 0x1c],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    ['AndNext', 'Mem', '32bit', 0x538, '!=', 'Value', '', 0xffffffff],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    ['AndNext', 'Mem', '32bit', 0x780, '=', 'Value', '', carModels.MazdaRX7],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    ['AndNext', 'Mem', '32bit', 0x17c8, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['ResetIf', 'Mem', '32bit', 0x1c, '>', 'Delta', '32bit', 0x1c],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    ['AndNext', 'Mem', '32bit', 0x538, '!=', 'Value', '', 0xffffffff],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    // prettier-ignore
    ['AndNext', 'Mem', '32bit', 0x780, '=', 'Value', '', carModels.PontiacGTO65],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    ['AndNext', 'Mem', '32bit', 0x17c8, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['ResetIf', 'Mem', '32bit', 0x1c, '>', 'Delta', '32bit', 0x1c],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    ['AndNext', 'Mem', '32bit', 0x538, '!=', 'Value', '', 0xffffffff],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    // prettier-ignore
    ['AndNext', 'Mem', '32bit', 0x780, '=', 'Value', '', carModels.LancerEvolution],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    ['AndNext', 'Mem', '32bit', 0x17c8, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['ResetIf', 'Mem', '32bit', 0x1c, '>', 'Delta', '32bit', 0x1c],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    ['AndNext', 'Mem', '32bit', 0x538, '=', 'Value', '', 0xffffffff],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['ResetIf', 'Mem', '32bit', 0x1c, '>', 'Delta', '32bit', 0x1c],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
    ['AndNext', 'Mem', '32bit', 0x17c8, '!=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['ResetIf', 'Mem', '32bit', 0x1c, '>', 'Delta', '32bit', 0x1c],
  );

  const hasCompletedARace = $(
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Mem', '32bit', 0x50, '>=', 'Value', '', 1],
  );

  const overHalfRacesReset = $(
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['AddAddress', 'Mem', '32bit', 0x0],
    ['AndNext', 'Mem', '32bit', 0x10, '=', 'Value', '', raceDays.BMCNevada],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['ResetIf', 'Mem', '32bit', 0x50, '>', 'Value', '', 2],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['AddAddress', 'Mem', '32bit', 0x0],
    ['AndNext', 'Mem', '32bit', 0x10, '=', 'Value', '', raceDays.BMCTexas],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['ResetIf', 'Mem', '32bit', 0x50, '>', 'Value', '', 3],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['AddAddress', 'Mem', '32bit', 0x0],
    ['AndNext', 'Mem', '32bit', 0x10, '=', 'Value', '', raceDays.RTSCAutopolis],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['ResetIf', 'Mem', '32bit', 0x50, '>', 'Value', '', 2],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['AddAddress', 'Mem', '32bit', 0x0],
    ['AndNext', 'Mem', '32bit', 0x10, '=', 'Value', '', raceDays.RTSCEbisu],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['ResetIf', 'Mem', '32bit', 0x50, '>', 'Value', '', 3],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['AddAddress', 'Mem', '32bit', 0x0],
    // prettier-ignore
    ['AndNext', 'Mem', '32bit', 0x10, '=', 'Value', '', raceDays.SPCAutobahnring],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['ResetIf', 'Mem', '32bit', 0x50, '>', 'Value', '', 3],
  );

  const scored100k = $(
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Delta', '32bit', 0x1c, '<', 'Value', '', 100000],
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Mem', '32bit', 0x1c, '>=', 'Value', '', 100000],
  );

  const hasEventRecordDelta = (eventOffset) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.eventCompletionPointer],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AddSource', 'Delta', 'Bit6', eventOffset],
    );

  const hasEventRecord = (eventOffset) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.eventCompletionPointer],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AddSource', 'Mem', 'Bit6', eventOffset],
    );

  const emptyValueComparison = (value) =>
    $(['', 'Value', '', 0, '=', 'Value', '', value]);

  const isCareerRaceDay = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerRaceDayPointer],
    ['', 'Mem', '32bit', 0x22c, '>', 'Value', '', 0],
  );

  const isCleanRace = $(
    ['AddAddress', 'Mem', '32bit', addresses.eventSummaryPointer],
    ['AddAddress', 'Mem', '32bit', 0x38],
    ['AddAddress', 'Mem', '32bit', 0x14],
    ['', 'Delta', '32bit', 0x4, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.eventSummaryPointer],
    ['AddAddress', 'Mem', '32bit', 0x38],
    ['AddAddress', 'Mem', '32bit', 0x14],
    ['', 'Mem', '32bit', 0x4, '=', 'Value', '', 500],
  );

  const currentCar = (id) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
      ['', 'Mem', '32bit', 0x18, '=', 'Value', '', id],
    );

  const currentRaceModeIs = {
    grip: $(
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
      ['AndNext', 'Mem', '32bit', 0x18, '<=', 'Value', '', 0xff],
      currentCarSlotMakeshiftPointer,
      ['OrNext', 'Mem', '32bit', 0x1f8, '=', 'Value', '', 0],
      orNext(...loanerIds.grip.map((id) => currentCar(id))),
    ),
    drift: $(
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
      ['AndNext', 'Mem', '32bit', 0x18, '<=', 'Value', '', 0xff],
      currentCarSlotMakeshiftPointer,
      ['OrNext', 'Mem', '32bit', 0x1f8, '=', 'Value', '', 1],
      orNext(...loanerIds.drift.map((id) => currentCar(id))),
    ),
    drag: $(
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
      ['AndNext', 'Mem', '32bit', 0x18, '<=', 'Value', '', 0xff],
      currentCarSlotMakeshiftPointer,
      ['OrNext', 'Mem', '32bit', 0x1f8, '=', 'Value', '', 2],
      orNext(...loanerIds.drag.map((id) => currentCar(id))),
    ),
    speed: $(
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
      ['AndNext', 'Mem', '32bit', 0x18, '<=', 'Value', '', 0xff],
      currentCarSlotMakeshiftPointer,
      ['OrNext', 'Mem', '32bit', 0x1f8, '=', 'Value', '', 3],
      orNext(...loanerIds.speed.map((id) => currentCar(id))),
    ),
  };

  const allSectorsDominated = $(
    ['AddAddress', 'Mem', '32bit', addresses.sectorShootoutPointer],
    ['AddSource', 'Delta', '32bit', 0x2668],
    ['AddAddress', 'Mem', '32bit', addresses.sectorShootoutPointer],
    ['AddSource', 'Delta', '32bit', 0x266c],
    ['AddAddress', 'Mem', '32bit', addresses.sectorShootoutPointer],
    ['AddSource', 'Delta', '32bit', 0x2670],
    ['AddAddress', 'Mem', '32bit', addresses.sectorShootoutPointer],
    ['AddSource', 'Delta', '32bit', 0x2674],
    ['', 'Value', '', 0, '!=', 'Value', '', 12],
    ['AddAddress', 'Mem', '32bit', addresses.sectorShootoutPointer],
    ['AddSource', 'Mem', '32bit', 0x2668],
    ['AddAddress', 'Mem', '32bit', addresses.sectorShootoutPointer],
    ['AddSource', 'Mem', '32bit', 0x266c],
    ['AddAddress', 'Mem', '32bit', addresses.sectorShootoutPointer],
    ['AddSource', 'Mem', '32bit', 0x2670],
    ['AddAddress', 'Mem', '32bit', addresses.sectorShootoutPointer],
    ['AddSource', 'Mem', '32bit', 0x2674],
    ['', 'Value', '', 0, '=', 'Value', '', 12],
  );

  const reachedMaxGrip = $(
    ['AddAddress', 'Mem', '32bit', addresses.gripLevelPointer],
    ['', 'Delta', 'Float', 0x3bc, '<', 'Float', '', 1.0],
    ['AddAddress', 'Mem', '32bit', addresses.gripLevelPointer],
    ['', 'Mem', 'Float', 0x3bc, '=', 'Float', '', 1.0],
  );

  const isHeatUnderTime = (time) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
      ['AddAddress', 'Mem', '32bit', 0x50],
      ['', 'Mem', 'Float', 0xcc, '<', 'Float', '', time],
      ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
      ['AddAddress', 'Mem', '32bit', 0x50],
      ['', 'Delta', 'Bit2', 0x68, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
      ['AddAddress', 'Mem', '32bit', 0x50],
      ['', 'Mem', 'Bit2', 0x68, '=', 'Value', '', 1],
    );

  const isHalfMile = $(
    ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
    ['AddAddress', 'Mem', '32bit', 0x50],
    ['', 'Mem', 'Float', 0x12c, '>', 'Float', '', 800.0],
  );

  const isHeatOverOrEqualScore = (score) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
      ['AddAddress', 'Mem', '32bit', 0x50],
      ['', 'Mem', 'Float', 0xcc, '>=', 'Float', '', score],
      ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
      ['AddAddress', 'Mem', '32bit', 0x50],
      ['', 'Delta', 'Bit2', 0x68, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
      ['AddAddress', 'Mem', '32bit', 0x50],
      ['', 'Mem', 'Bit2', 0x68, '=', 'Value', '', 1],
    );

  const isSectorShootout = $(
    ['AddAddress', 'Mem', '32bit', addresses.sectorShootoutPointer],
    ['', 'Mem', '32bit', 0x2668, '!=', 'Value', '', 0xffffffff],
    ['AddAddress', 'Mem', '32bit', addresses.sectorShootoutPointer],
    ['', 'Mem', '32bit', 0x266c, '!=', 'Value', '', 0xffffffff],
    ['AddAddress', 'Mem', '32bit', addresses.sectorShootoutPointer],
    ['', 'Mem', '32bit', 0x2670, '!=', 'Value', '', 0xffffffff],
    ['AddAddress', 'Mem', '32bit', addresses.sectorShootoutPointer],
    ['', 'Mem', '32bit', 0x2674, '!=', 'Value', '', 0xffffffff],
  );

  const dragClutchReset = $(
    ['AddAddress', 'Mem', '32bit', addresses.settingsPointer],
    ['AddAddress', 'Mem', '32bit', 0x8],
    ['ResetIf', 'Mem', '8bit', 0x12d, '!=', 'Value', '', 1],
  );

  const genericRaceStarted = $(
    ['AddAddress', 'Mem', '32bit', addresses.ingamePointer],
    ['', 'Mem', '32bit', 0x4, '=', 'Value', '', 1, 1],
  );

  const raceReset = $(
    ['AddAddress', 'Mem', '32bit', addresses.ingamePointer],
    ['ResetIf', 'Mem', '32bit', 0x4, '=', 'Value', '', 0],
  );

  const isWheelieCompetition = $(
    ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
    ['AddAddress', 'Mem', '32bit', 0x50],
    ['', 'Mem', '32bit', 0x6c, '!=', 'Value', '', 0],
  );

  const isNotPracticeMode = $(
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Mem', 'Bit0', 0x18, '=', 'Value', '', 0],
  );

  const currentSpeedIsAboveControlThreshhold = $(
    ['AddAddress', 'Mem', '32bit', addresses.settingsPointer],
    ['AddAddress', 'Mem', '32bit', 0x8],
    ['AndNext', 'Mem', '8bit', 0x6c, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.speedPointer],
    ['AddAddress', 'Mem', '32bit', 0x74],
    ['AddAddress', 'Mem', '32bit', 0x2e4],
    ['OrNext', 'Mem', 'Float', 0x154, '>=', 'Float', '', 396.0],
    ['AddAddress', 'Mem', '32bit', addresses.settingsPointer],
    ['AddAddress', 'Mem', '32bit', 0x8],
    ['AndNext', 'Mem', '8bit', 0x6c, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.speedPointer],
    ['AddAddress', 'Mem', '32bit', 0x74],
    ['AddAddress', 'Mem', '32bit', 0x2e4],
    ['AddHits', 'Mem', 'Float', 0x154, '>=', 'Float', '', 246.0],
    ['Measured%', 'Value', '', 0, '=', 'Value', '', 1, 600],
    ['AddAddress', 'Mem', '32bit', addresses.speedPointer],
    ['PauseIf', 'Mem', '32bit', 0x74, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.speedPointer],
    ['AddAddress', 'Mem', '32bit', 0x74],
    ['PauseIf', 'Mem', '32bit', 0x2e4, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.speedPointer],
    ['AddAddress', 'Mem', '32bit', 0x74],
    ['AddAddress', 'Mem', '32bit', 0x2e4],
    ['PauseIf', 'Mem', '32bit', 0x154, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
    ['AddAddress', 'Mem', '32bit', 0x50],
    ['ResetIf', 'Mem', '32bit', 0x138, '=', 'Value', '', 0],
  );

  const currentSpeedIsAboveControlThreshholdReset = $(
    ['AddAddress', 'Mem', '32bit', addresses.settingsPointer],
    ['AddAddress', 'Mem', '32bit', 0x8],
    ['AndNext', 'Mem', '8bit', 0x6c, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.speedPointer],
    ['AddAddress', 'Mem', '32bit', 0x74],
    ['AddAddress', 'Mem', '32bit', 0x2e4],
    ['ResetIf', 'Mem', 'Float', 0x154, '<', 'Float', '', 396.0],
    ['AddAddress', 'Mem', '32bit', addresses.settingsPointer],
    ['AddAddress', 'Mem', '32bit', 0x8],
    ['AndNext', 'Mem', '8bit', 0x6c, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.speedPointer],
    ['AddAddress', 'Mem', '32bit', 0x74],
    ['AddAddress', 'Mem', '32bit', 0x2e4],
    ['ResetIf', 'Mem', 'Float', 0x154, '<', 'Float', '', 246.0],
    ['AddAddress', 'Mem', '32bit', addresses.settingsPointer],
    ['AddAddress', 'Mem', '32bit', 0x8],
    ['AndNext', 'Mem', '8bit', 0x6c, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.speedPointer],
    ['AddAddress', 'Mem', '32bit', 0x74],
    ['AddAddress', 'Mem', '32bit', 0x2e4],
    ['OrNext', 'Mem', 'Float', 0x154, '>=', 'Float', '', 396.0],
    ['AddAddress', 'Mem', '32bit', addresses.settingsPointer],
    ['AddAddress', 'Mem', '32bit', 0x8],
    ['AndNext', 'Mem', '8bit', 0x6c, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.speedPointer],
    ['AddAddress', 'Mem', '32bit', 0x74],
    ['AddAddress', 'Mem', '32bit', 0x2e4],
    ['AddHits', 'Mem', 'Float', 0x154, '>=', 'Float', '', 246.0],
    ['PauseIf', 'Value', '', 0, '=', 'Value', '', 1, 600],
    ['AddAddress', 'Mem', '32bit', addresses.speedPointer],
    ['PauseIf', 'Mem', '32bit', 0x74, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.speedPointer],
    ['AddAddress', 'Mem', '32bit', 0x74],
    ['PauseIf', 'Mem', '32bit', 0x2e4, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.speedPointer],
    ['AddAddress', 'Mem', '32bit', 0x74],
    ['AddAddress', 'Mem', '32bit', 0x2e4],
    ['PauseIf', 'Mem', '32bit', 0x154, '=', 'Value', '', 0],
  );

  const alwaysTrue = $(['', 'Value', '', 1, '=', 'Value', '', 1]);

  const heatWonTrigger = $(
    ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
    ['AddAddress', 'Mem', '32bit', 0x50],
    ['Trigger', 'Mem', '32bit', 0x5c, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
    ['AddAddress', 'Mem', '32bit', 0x50],
    ['Trigger', 'Delta', 'Bit2', 0x68, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
    ['AddAddress', 'Mem', '32bit', 0x50],
    ['Trigger', 'Mem', 'Bit2', 0x68, '=', 'Value', '', 1],
  );

  const multiHeatRaceWon = $(
    ['AddAddress', 'Mem', '32bit', addresses.eventSummaryPointer],
    ['AddAddress', 'Mem', '32bit', 0x38],
    ['AddAddress', 'Mem', '32bit', 0x14],
    ['', 'Mem', '32bit', 0x54, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', addresses.eventSummaryPointer],
    ['AddAddress', 'Mem', '32bit', 0x38],
    ['AddAddress', 'Mem', '32bit', 0x14],
    ['', 'Delta', 'Bit1', 0x50, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.eventSummaryPointer],
    ['AddAddress', 'Mem', '32bit', 0x38],
    ['AddAddress', 'Mem', '32bit', 0x14],
    ['', 'Mem', 'Bit1', 0x50, '=', 'Value', '', 1],
  );

  const currentCarModel = (id) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.carModelPointer],
      ['', 'Mem', '32bit', 0x28, '=', 'Value', '', id],
    );

  const isBlueprintStock = (bpIndex) =>
    $(
      currentCarSlotMakeshiftPointer,
      ['', 'Mem', '32bit', 0x17c8, '=', 'Value', '', bpIndex],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['OrNext', 'Mem', '8bit', 0xfc + bpIndex * 0x780, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['', 'Mem', '8bit', 0xfc + bpIndex * 0x780, '=', 'Value', '', 0xff],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['OrNext', 'Mem', '8bit', 0xfa + bpIndex * 0x780, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['', 'Mem', '8bit', 0xfa + bpIndex * 0x780, '=', 'Value', '', 0xff],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['OrNext', 'Mem', '8bit', 0xfe + bpIndex * 0x780, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['', 'Mem', '8bit', 0xfe + bpIndex * 0x780, '=', 'Value', '', 0xff],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['OrNext', 'Mem', '8bit', 0x12a + bpIndex * 0x780, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['', 'Mem', '8bit', 0x12a + bpIndex * 0x780, '=', 'Value', '', 0xff],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['OrNext', 'Mem', '8bit', 0x18 + bpIndex * 0x780, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['', 'Mem', '8bit', 0x18 + bpIndex * 0x780, '=', 'Value', '', 0xff],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['OrNext', 'Mem', '8bit', 0x12e + bpIndex * 0x780, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['', 'Mem', '8bit', 0x12e + bpIndex * 0x780, '=', 'Value', '', 0xff],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['OrNext', 'Mem', '8bit', 0x10a + bpIndex * 0x780, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['', 'Mem', '8bit', 0x10a + bpIndex * 0x780, '=', 'Value', '', 0xff],
    );

  const isBlueprintStockPower = (bpIndex) =>
    $(
      currentCarSlotMakeshiftPointer,
      ['', 'Mem', '32bit', 0x17c8, '=', 'Value', '', bpIndex],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['OrNext', 'Mem', '8bit', 0xfc + bpIndex * 0x780, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['', 'Mem', '8bit', 0xfc + bpIndex * 0x780, '=', 'Value', '', 0xff],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['OrNext', 'Mem', '8bit', 0xfa + bpIndex * 0x780, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['', 'Mem', '8bit', 0xfa + bpIndex * 0x780, '=', 'Value', '', 0xff],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['OrNext', 'Mem', '8bit', 0xfe + bpIndex * 0x780, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['', 'Mem', '8bit', 0xfe + bpIndex * 0x780, '=', 'Value', '', 0xff],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['OrNext', 'Mem', '8bit', 0x10a + bpIndex * 0x780, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['', 'Mem', '8bit', 0x10a + bpIndex * 0x780, '=', 'Value', '', 0xff],
    );

  const gripCarSlotMakeshiftPointer = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
    ['Remember', 'Mem', '32bit', 0x20, '-', 'Value', '', 0x8c],
    ['Remember', 'Recall', '', 0, '*', 'Value', '', 0x17dc],
    ['Remember', 'Recall', '', 0, '+', 'Value', '', 0x11f4],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
  );

  const driftCarSlotEmpty = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
    ['', 'Mem', '32bit', 0x28, '=', 'Value', '', 0xffffffff],
  );

  const dragCarSlotMakeshiftPointer = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
    ['Remember', 'Mem', '32bit', 0x30, '-', 'Value', '', 0x8c],
    ['Remember', 'Recall', '', 0, '*', 'Value', '', 0x17dc],
    ['Remember', 'Recall', '', 0, '+', 'Value', '', 0x11f4],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
  );

  const dragCarSlotEmpty = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
    ['', 'Mem', '32bit', 0x30, '=', 'Value', '', 0xffffffff],
  );

  const speedCarSlotMakeshiftPointer = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
    ['Remember', 'Mem', '32bit', 0x38, '-', 'Value', '', 0x8c],
    ['Remember', 'Recall', '', 0, '*', 'Value', '', 0x17dc],
    ['Remember', 'Recall', '', 0, '+', 'Value', '', 0x11f4],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
  );

  const speedCarSlotEmpty = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
    ['', 'Mem', '32bit', 0x38, '=', 'Value', '', 0xffffffff],
  );

  const backupCarSlotMakeshiftPointer = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
    ['Remember', 'Mem', '32bit', 0x40, '-', 'Value', '', 0x8c],
    ['Remember', 'Recall', '', 0, '*', 'Value', '', 0x17dc],
    ['Remember', 'Recall', '', 0, '+', 'Value', '', 0x11f4],
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
  );

  const backupCarSlotEmpty = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
    ['', 'Mem', '32bit', 0x40, '=', 'Value', '', 0xffffffff],
  );

  const civicsOnly = $(
    gripCarSlotMakeshiftPointer,
    ['', 'Mem', '32bit', 0x780, '=', 'Value', '', carModels.HondaCivic],
    driftCarSlotEmpty,
    orNext(
      dragCarSlotMakeshiftPointer,
      ['', 'Mem', '32bit', 0x780, '=', 'Value', '', carModels.HondaCivic],
      dragCarSlotEmpty,
    ),
    orNext(
      speedCarSlotMakeshiftPointer,
      ['', 'Mem', '32bit', 0x780, '=', 'Value', '', carModels.HondaCivic],
      speedCarSlotEmpty,
    ),
    orNext(
      backupCarSlotMakeshiftPointer,
      ['', 'Mem', '32bit', 0x780, '=', 'Value', '', carModels.HondaCivic],
      backupCarSlotEmpty,
    ),
  );

  const currentRaceDayNot = (id) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', '32bit', 0x10, '!=', 'Value', '', id],
    );

  const bestLapUnderTime = (time) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
      ['AddAddress', 'Mem', '32bit', 0x50],
      ['', 'Mem', '32bit', 0x80, '!=', 'Delta', '32bit', 0x80],
      ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
      ['AddAddress', 'Mem', '32bit', 0x50],
      ['', 'Mem', 'Float', 0x80, '>', 'Float', '', -1.0],
      ['AddAddress', 'Mem', '32bit', addresses.currentHeatPointer],
      ['AddAddress', 'Mem', '32bit', 0x50],
      ['', 'Mem', 'Float', 0x80, '<', 'Float', '', time],
    );

  const currentTrack = (id) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.ingamePointer],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['', 'Mem', '32bit', 0x4c, '=', 'Value', '', id],
    );

  const trackRecordBeaten = (id, record) =>
    $(
      ['AddAddress', 'Mem', '32bit', addresses.ingamePointer],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['', 'Mem', '32bit', 0x4c, '=', 'Value', '', id],
      ['AddAddress', 'Mem', '32bit', addresses.eventSummaryPointer],
      ['AddAddress', 'Mem', '32bit', 0x38],
      ['AddAddress', 'Mem', '32bit', 0x14],
      ['AddSource', 'Delta', '32bit', 0x0],
      ['AddAddress', 'Mem', '32bit', addresses.eventSummaryPointer],
      ['AddAddress', 'Mem', '32bit', 0x38],
      ['AddAddress', 'Mem', '32bit', 0x14],
      ['AddSource', 'Delta', '32bit', 0x4],
      ['AddAddress', 'Mem', '32bit', addresses.eventSummaryPointer],
      ['AddAddress', 'Mem', '32bit', 0x38],
      ['AddAddress', 'Mem', '32bit', 0x14],
      ['AddSource', 'Delta', '32bit', 0x8],
      ['', 'Value', '', 0, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', addresses.eventSummaryPointer],
      ['AddAddress', 'Mem', '32bit', 0x38],
      ['AddAddress', 'Mem', '32bit', 0x14],
      ['AddSource', 'Mem', '32bit', 0x0],
      ['AddAddress', 'Mem', '32bit', addresses.eventSummaryPointer],
      ['AddAddress', 'Mem', '32bit', 0x38],
      ['AddAddress', 'Mem', '32bit', 0x14],
      ['AddSource', 'Mem', '32bit', 0x4],
      ['AddAddress', 'Mem', '32bit', addresses.eventSummaryPointer],
      ['AddAddress', 'Mem', '32bit', 0x38],
      ['AddAddress', 'Mem', '32bit', 0x14],
      ['AddSource', 'Mem', '32bit', 0x8],
      ['', 'Value', '', 0, '>=', 'Value', '', record],
    );

  const raceDayScoreChanged = $(
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['', 'Mem', '32bit', 0x1c, '>', 'Delta', '32bit', 0x1c],
  );

  const raceDayScoreMeasured = $(
    ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
    ['AddAddress', 'Mem', '32bit', 0x30],
    ['Measured', 'Mem', '32bit', 0x1c],
  );

  return {
    addresses,
    gameIs,
    playerIs,
    playerMeasured,
    cash,
    codeEntryDetection,
    currentRaceDay,
    heatWon,
    raceDayDominated,
    raceDayDominatedTrigger,
    raceDayWon,
    raceDayWonTrigger,
    raceDayRecordBeaten,
    raceDayStarted,
    genericRaceDayStarted,
    kingAssistReset,
    raceDayReset,
    ryoRaceDayReset,
    allKingsDefeated,
    orgCompletion,
    notPreTunedNonBossCarReset,
    hasCompletedARace,
    overHalfRacesReset,
    scored100k,
    hasEventRecordDelta,
    hasEventRecord,
    emptyValueComparison,
    isCareerRaceDay,
    isCleanRace,
    currentRaceModeIs,
    allSectorsDominated,
    reachedMaxGrip,
    isHeatUnderTime,
    isHalfMile,
    isHeatOverOrEqualScore,
    isSectorShootout,
    dragClutchReset,
    genericRaceStarted,
    raceReset,
    isWheelieCompetition,
    isNotPracticeMode,
    currentSpeedIsAboveControlThreshhold,
    currentSpeedIsAboveControlThreshholdReset,
    alwaysTrue,
    heatWon,
    heatWonTrigger,
    multiHeatRaceWon,
    currentCarModel,
    isBlueprintStock,
    isBlueprintStockPower,
    currentRaceDayNot,
    civicsOnly,
    bestLapUnderTime,
    currentTrack,
    trackRecordBeaten,
    raceDayScoreChanged,
    raceDayScoreMeasured,
  };
};

const c = codeFor();

/**
 * @param {ConditionBuilder} core
 * @param {TrackWithRecord[]} tracksWithRecords
 */
const getStockRecordGroups = (core, tracksWithRecords) => {
  const groups = { core };
  tracksWithRecords.forEach(({ id, record }, index) => {
    for (let i = 2; i >= 0; i--) {
      groups[`alt${(index + 1) * 3 - i}`] = $(
        c.isBlueprintStock(i),
        c.trackRecordBeaten(id, record),
      );
    }
  });
  return groups;
};

/**
 * @param {ConditionBuilder} core
 * @param {TrackWithRecord[]} tracksWithRecords
 */
const getStockPowerRecordGroups = (core, tracksWithRecords) => {
  const groups = { core };
  tracksWithRecords.forEach(({ id, record }, index) => {
    for (let i = 2; i >= 0; i--) {
      groups[`alt${(index + 1) * 3 - i}`] = $(
        c.isBlueprintStockPower(i),
        c.trackRecordBeaten(id, record),
      );
    }
  });
  return groups;
};

/**
 * @param {ConditionBuilder} core
 * @param {TrackWithRecord[]} tracksWithRecords
 */
const getRecordGroups = (core, tracksWithRecords) => {
  const groups = { core };
  tracksWithRecords.forEach(({ id, record }, index) => {
    groups[`alt${index + 1}`] = $(c.trackRecordBeaten(id, record));
  });
  return groups;
};

set.addAchievement({
  title: 'D-Day',
  description:
    'Win the race at Chicago Airfield and qualify for Battle Machine.',
  points: 1,
  type: 'progression',
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.playerIs.racing,
    c.currentRaceDay(raceDays.DDay),
    c.heatWon,
  ),
});

for (const achievement of progressionAchievements) {
  set.addAchievement({
    title: achievement.title,
    description: achievement.description,
    points: achievement.points,
    type: 'progression',
    conditions: $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.currentRaceDay(achievement.raceDay),
      c.raceDayDominated,
    ),
  });
}

set.addAchievement({
  title: 'My Man, Ryan Cooper!',
  description: 'Defeat Ryo Watanabe and become the new Showdown King.',
  points: 25,
  type: 'win_condition',
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.currentRaceDay(raceDays.STokyo),
    c.raceDayWon,
  ),
});

set.addAchievement({
  title: 'The Real Showdown King',
  description: 'Defeat Ryo Watanabe in one sitting using King Assist.',
  points: 25,
  type: 'missable',
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.currentRaceDay(raceDays.STokyo),
    c.raceDayStarted(raceDays.SNevada),
    c.raceDayWonTrigger,
    c.kingAssistReset,
    c.ryoRaceDayReset,
  ),
});

for (const achievementGroup of optionalBossAchievements) {
  set.addAchievement({
    title: achievementGroup.intro.title,
    description: achievementGroup.intro.description,
    points: 3,
    conditions: $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      orNext(
        c.currentRaceDay(achievementGroup.intro.raceDays[0]),
        c.currentRaceDay(achievementGroup.intro.raceDays[1]),
        c.currentRaceDay(achievementGroup.intro.raceDays[2]),
      ),
      c.raceDayDominated,
    ),
  });
  set.addAchievement({
    title: achievementGroup.win.title,
    description: achievementGroup.win.description,
    points: 10,
    conditions: $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.currentRaceDay(achievementGroup.win.raceDay),
      c.raceDayWon,
    ),
  });
  set.addAchievement({
    title: achievementGroup.king.title,
    description: achievementGroup.king.description,
    points: 10,
    type: 'missable',
    conditions: $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.raceDayStarted(achievementGroup.king.raceDay),
      c.raceDayWonTrigger,
      c.kingAssistReset,
      c.raceDayReset,
    ),
  });
}

set.addAchievement({
  title: 'The Street King',
  description: 'Defeat all 5 Kings and become the Street King.',
  points: 25,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.allKingsDefeated,
    c.playerIs.inRaceDay,
    orNext(
      c.currentRaceDay(raceDays.GEWillowSpringsII),
      c.currentRaceDay(raceDays.RSInfineonII),
      c.currentRaceDay(raceDays.NBAutopolisII),
      c.currentRaceDay(raceDays.NCNevadaHighwayII),
      c.currentRaceDay(raceDays.STokyo),
    ),
    c.raceDayWon,
  ),
});

set.addAchievement({
  title: 'Big Racing',
  description:
    'Dominate Challenge: Texas and receive a Grip car as your reward.',
  points: 5,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.currentRaceDay(raceDays.BMCTexas),
    c.raceDayDominated,
  ),
});

set.addAchievement({
  title: 'Through the Mountains',
  description:
    'Dominate Challenge: Ebisu and receive a Speed car as your reward.',
  points: 5,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.currentRaceDay(raceDays.RTSCEbisu),
    c.raceDayDominated,
  ),
});

for (const achievement of orgAchievements) {
  set.addAchievement({
    title: `${achievement.org} Domination`,
    description: `Dominate all Race Days in the ${achievement.org} Organization.`,
    points: achievement.dominationPoints,
    conditions: $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.orgCompletion(achievement.dominationOffset, achievement.totalRaceDays),
    ),
  });
}

for (const achievement of showdownChallengeAchievements) {
  set.addAchievement({
    title: achievement.title,
    description: `Dominate Showdown: ${achievement.showdown} in one sitting using King Assist and using only pre-tuned blueprints of cars that were not obtained from a King.`,
    points: achievement.points,
    type: 'missable',
    conditions: $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.hasCompletedARace,
      c.raceDayStarted(achievement.raceDay),
      c.raceDayDominatedTrigger,
      c.kingAssistReset,
      c.raceDayReset,
      c.notPreTunedNonBossCarReset,
    ),
  });
}

set.addAchievement({
  title: 'Almost Easy',
  description:
    'Dominate a Challenge Race Day in one sitting by completing at most half of the events in it using King assist.',
  points: 25,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    orNext(
      c.currentRaceDay(raceDays.BMCNevada),
      c.currentRaceDay(raceDays.BMCTexas),
      c.currentRaceDay(raceDays.RTSCAutopolis),
      c.currentRaceDay(raceDays.RTSCEbisu),
      c.currentRaceDay(raceDays.SPCAutobahnring),
    ),
    c.genericRaceDayStarted,
    c.raceDayDominated,
    c.kingAssistReset,
    c.raceDayReset,
    c.overHalfRacesReset,
  ),
});

for (const achievement of showdownChallengeAchievements) {
  set.addAchievement({
    title: achievement.recordTitle,
    description: `Beat the record score in Showdown: ${achievement.showdown}.`,
    points: 10,
    conditions: $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.currentRaceDay(achievement.raceDay),
      c.raceDayRecordBeaten,
    ),
  });
}

for (const achievement of orgAchievements) {
  set.addAchievement({
    title: `${achievement.org} Mastery`,
    description: `Beat the record score in all Race Days in the ${achievement.org} Organization.`,
    points: achievement.recordPoints,
    conditions: $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.orgCompletion(achievement.recordOffset, achievement.totalRaceDays),
    ),
  });
}

for (const achievement of challengeRaceDayAchievements) {
  set.addAchievement({
    title: `Challenge Mastery: ${achievement.location}`,
    description: `Beat all individual event records in Challenge: ${achievement.location}.`,
    points: achievement.points,
    conditions: $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.currentRaceDay(achievement.raceDay),
      ...achievement.eventOffsets.map((offset) =>
        c.hasEventRecordDelta(offset),
      ),
      c.emptyValueComparison(achievement.eventOffsets.length - 1),
      ...achievement.eventOffsets.map((offset) => c.hasEventRecord(offset)),
      c.emptyValueComparison(achievement.eventOffsets.length),
    ),
  });
}

set.addAchievement({
  title: 'Sliding Scale',
  description: 'Score at least 100,000 points in a single Race Day.',
  points: 10,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.scored100k,
  ),
});

set.addAchievement({
  title: 'Clean Racer',
  description: 'Win a Grip mode event with no damage to your car.',
  points: 2,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.playerIs.racing,
    c.currentRaceModeIs.grip,
    c.isNotPracticeMode,
    c.isCleanRace,
  ),
});

set.addAchievement({
  title: 'Power Player',
  description:
    'Dominate all sectors of a Sector Shootout event at the same time.',
  points: 3,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.playerIs.racing,
    c.currentRaceModeIs.grip,
    c.isNotPracticeMode,
    c.allSectorsDominated,
  ),
});

set.addAchievement({
  title: 'Cooked to Perfection',
  description: 'Reach max grip bonus in a Drag mode event.',
  points: 4,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.playerIs.racing,
    c.currentRaceModeIs.drag,
    c.isNotPracticeMode,
    c.reachedMaxGrip,
  ),
});

set.addAchievement({
  title: 'Ten Second Car',
  description: 'Finish a 1/4 mile Drag race in under 10 seconds.',
  points: 3,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.playerIs.racing,
    c.currentRaceModeIs.drag,
    c.isNotPracticeMode,
    c.isHeatUnderTime(10.0),
  ),
});

set.addAchievement({
  title: 'Eleven Second Car',
  description: 'Finish a 1/2 mile Drag race in under 11 seconds.',
  points: 10,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.playerIs.racing,
    c.currentRaceModeIs.drag,
    c.isNotPracticeMode,
    c.isHalfMile,
    c.isHeatUnderTime(11.0),
  ),
});

set.addAchievement({
  title: 'Watch My Feet',
  description: 'Score at least 3,000 points in a single Drift round.',
  points: 3,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.playerIs.racing,
    c.currentRaceModeIs.drift,
    c.isNotPracticeMode,
    c.isHeatOverOrEqualScore(3000.0),
  ),
});

set.addAchievement({
  title: 'Steady Hands',
  description: 'Win a Speed mode event with no damage to your car.',
  points: 2,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.playerIs.racing,
    c.currentRaceModeIs.speed,
    c.isNotPracticeMode,
    c.isCleanRace,
  ),
});

set.addAchievement({
  title: 'Restless',
  description: 'Score at least 5,000 points on a Sector Shootout event.',
  points: 10,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.playerIs.racing,
    c.currentRaceModeIs.grip,
    c.isSectorShootout,
    c.isNotPracticeMode,
    c.isHeatOverOrEqualScore(5000.0),
  ),
});

set.addAchievement({
  title: 'Granny Shifting, Not Double Clutching Like You Should',
  description: 'Finish a 1/4 mile Drag race in under 8 seconds using Clutch.',
  points: 5,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.playerIs.racing,
    c.currentRaceModeIs.drag,
    c.isNotPracticeMode,
    c.genericRaceStarted,
    c.raceReset,
    c.dragClutchReset,
    c.isHeatUnderTime(8.0),
  ),
});

set.addAchievement({
  title: 'More Is Enough',
  description: 'Maintain a Wheelie over a full 1/4 mile (402.3 m, 1,320 ft).',
  points: 5,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.playerIs.racing,
    c.currentRaceModeIs.drag,
    c.isWheelieCompetition,
    c.isNotPracticeMode,
    c.isHeatOverOrEqualScore(402.336),
  ),
});

set.addAchievement({
  title: 'Fancy Footwork',
  description:
    'Score at least 15,000 points on a single Drift round using King Assist.',
  points: 10,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.playerIs.racing,
    c.currentRaceModeIs.drift,
    c.isNotPracticeMode,
    c.genericRaceStarted,
    c.raceReset,
    c.kingAssistReset,
    c.isHeatOverOrEqualScore(15000.0),
  ),
});

set.addAchievement({
  title: 'Out of Control',
  description:
    'Maintain a speed of 396 km/h (246 MPH) or higher for at least 10s in a Speed mode event on Nevada Highway and then win the event.',
  points: 25,
  conditions: {
    core: $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.isCareerRaceDay,
      measuredIf(
        orNext(
          c.currentRaceDay(raceDays.SPNevadaHighway),
          c.currentRaceDay(raceDays.SPNevadaHighwayII),
          c.currentRaceDay(raceDays.NCNevadaHighway),
          c.currentRaceDay(raceDays.NCNevadaHighwayII),
          c.currentRaceDay(raceDays.SNevada),
        ),
      ),
      c.playerIs.racing,
      c.currentRaceModeIs.speed,
      c.isNotPracticeMode,
      c.currentSpeedIsAboveControlThreshhold,
      c.heatWonTrigger,
    ),
    alt1: $(c.currentSpeedIsAboveControlThreshholdReset),
    alt2: $(c.alwaysTrue),
  },
});

set.addAchievement({
  title: 'Ryan Is Gonna Be Running Three Honda Civics',
  description:
    "Dominate a multi-discipline Race Day to which you've brought nothing but Honda Civics.",
  points: 4,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.currentRaceDayNot(raceDays.GEMondelloPark),
    c.currentRaceDayNot(raceDays.GETexasWorldSpeedway),
    c.currentRaceDayNot(raceDays.GEWillowSprings),
    c.currentRaceDayNot(raceDays.GEWillowSpringsII),
    c.civicsOnly,
    c.raceDayDominated,
  ),
});

set.addAchievement({
  title: 'The Legendary Hachiroku of Ebisu',
  description:
    'Score at least 8,600 points on a single Drift round in Ebisu using a stock Toyota Corolla GTS (AE86).',
  points: 10,
  conditions: {
    core: $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.isCareerRaceDay,
      orNext(
        c.currentRaceDay(raceDays.RTSEbisu),
        c.currentRaceDay(raceDays.NBEbisu),
      ),
      c.currentCarModel(carModels.ToyotaCorollaGTSAE86),
      c.playerIs.racing,
      c.currentRaceModeIs.drift,
      c.isNotPracticeMode,
      c.isHeatOverOrEqualScore(8600.0),
    ),
    alt1: $(c.isBlueprintStock(0)),
    alt2: $(c.isBlueprintStock(1)),
    alt3: $(c.isBlueprintStock(2)),
  },
});

set.addAchievement({
  title: 'Eleanor',
  description:
    "Achieve a lap time under 60 seconds in a race on the Horse Thief Mile at Willow Springs using a Shelby GT500 '67.",
  points: 4,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    orNext(...trackIds.horseThiefMile.map((id) => c.currentTrack(id))),
    c.currentCarModel(carModels.ShelbyGT50067),
    c.playerIs.racing,
    c.isNotPracticeMode,
    c.bestLapUnderTime(60.0),
  ),
});

set.addAchievement({
  title: 'Twisted Chassis',
  description: 'Win a Wheelie Competition using a Dodge Charger R/T.',
  points: 3,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.currentCarModel(carModels.DodgeChallengerRT),
    c.currentRaceModeIs.drag,
    c.isWheelieCompetition,
    c.playerIs.racing,
    c.isNotPracticeMode,
    c.multiHeatRaceWon,
  ),
});

set.addAchievement({
  title: 'Poster Boy',
  description:
    'Score at least 5,000 points on a single Drift round in Tokyo Dockyards using a Mazda RX-7 and King assist.',
  points: 10,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    orNext(
      c.currentRaceDay(raceDays.RTSTokyoDockyard),
      c.currentRaceDay(raceDays.RTSTokyoDockyardII),
      c.currentRaceDay(raceDays.NBTokyoDockyard),
      c.currentRaceDay(raceDays.STokyo),
    ),
    c.currentCarModel(carModels.MazdaRX7),
    c.playerIs.racing,
    c.currentRaceModeIs.drift,
    c.isNotPracticeMode,
    c.genericRaceStarted,
    c.raceReset,
    c.kingAssistReset,
    c.isHeatOverOrEqualScore(5000.0),
  ),
});

set.addAchievement({
  title: 'Homologation Special',
  description:
    'Break a track record on a Nevada Grip mode race with a dirt section using a stock Ford Escort RS Cosworth.',
  points: 3,
  conditions: getStockRecordGroups(
    $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.isCareerRaceDay,
      c.currentCarModel(carModels.FordEscortRSCosworth),
      c.playerIs.racing,
      c.isNotPracticeMode,
    ),
    tracksWithRecords.dirtGrip,
  ),
});

set.addAchievement({
  title: 'Ten Minute Car',
  description:
    'Finish a 1/4 mile Drag race in under 10 seconds using a Toyota Supra with no power or nitrous upgrades.',
  points: 5,
  conditions: {
    core: $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.isCareerRaceDay,
      c.currentCarModel(carModels.ToyotaSupra),
      c.currentRaceModeIs.drag,
      c.playerIs.racing,
      c.isNotPracticeMode,
      c.isHeatUnderTime(10.0),
    ),
    alt1: $(c.isBlueprintStockPower(0)),
    alt2: $(c.isBlueprintStockPower(1)),
    alt3: $(c.isBlueprintStockPower(2)),
  },
});

set.addAchievement({
  title: 'Pogo',
  description:
    'Break a track record in any Autobahn Speed mode event using a Volkswagen Golf GTI or R32.',
  points: 2,
  conditions: getRecordGroups(
    $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.isCareerRaceDay,
      orNext(
        c.currentCarModel(carModels.VolkswagenGolfGTI),
        c.currentCarModel(carModels.VolkswagenR32),
      ),
      c.playerIs.racing,
      c.isNotPracticeMode,
    ),
    tracksWithRecords.autobahnSpeed,
  ),
});

set.addAchievement({
  title: 'Donkey Kong?',
  description:
    'Score at least 10,000 points on a single Drift round using a Nissan 350Z (Z33).',
  points: 5,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    c.currentCarModel(carModels.Nissan350ZZ33),
    c.playerIs.racing,
    c.currentRaceModeIs.drift,
    c.isNotPracticeMode,
    c.isHeatOverOrEqualScore(10000.0),
  ),
});

set.addAchievement({
  title: 'Right Out of the Show Floor',
  description:
    'Break a track record in any Tokyo Time Attack event using a stock Nissan GT-R Proto.',
  points: 3,
  conditions: getStockRecordGroups(
    $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.isCareerRaceDay,
      c.currentCarModel(carModels.NissanGTRProto),
      c.playerIs.racing,
      c.isNotPracticeMode,
    ),
    tracksWithRecords.tokyoTimeAttack,
  ),
});

set.addAchievement({
  title: 'Track Certified',
  description:
    'Break a track record in a Mondello Park GP Circuit Time Attack using any BMW M3.',
  points: 2,
  conditions: $(
    c.gameIs.booted,
    c.codeEntryDetection,
    c.playerIs.inRaceDay,
    c.isCareerRaceDay,
    orNext(
      c.currentCarModel(carModels.BMWM3E46),
      c.currentCarModel(carModels.BMWM3E92),
    ),
    c.playerIs.racing,
    c.isNotPracticeMode,
    c.trackRecordBeaten(
      tracksWithRecords.mondelloParkGPTimeAttack[0].id,
      tracksWithRecords.mondelloParkGPTimeAttack[0].record,
    ),
  ),
});

set.addAchievement({
  title: 'Blackjack',
  description:
    'Break a track record in any Nevada Highway Speed mode event using any Chevrolet Corvette.',
  points: 2,
  conditions: getRecordGroups(
    $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.isCareerRaceDay,
      orNext(
        c.currentCarModel(carModels.ChevroletCorvetteC6),
        c.currentCarModel(carModels.ChevroletCorvetteZ06),
      ),
      c.playerIs.racing,
      c.isNotPracticeMode,
    ),
    tracksWithRecords.nevadaSpeed,
  ),
});

set.addAchievement({
  title: 'NASCAR Street Series',
  description:
    'Break a track record in a Texas World Speedway Oval Circuit event using a Ford Mustang.',
  points: 2,
  conditions: getRecordGroups(
    $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.isCareerRaceDay,
      orNext(c.currentCarModel(carModels.FordMustangGT)),
      c.playerIs.racing,
      c.isNotPracticeMode,
    ),
    tracksWithRecords.texasOval,
  ),
});

set.addAchievement({
  title: 'Boxer Spirit',
  description:
    'Break a track record in any Ebisu Time Attack event using a Subaru Impreza WRX STI with no power or nitrous upgrades.',
  points: 4,
  conditions: getStockPowerRecordGroups(
    $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.isCareerRaceDay,
      c.currentCarModel(carModels.SubaruImprezaWRXSTI),
      c.playerIs.racing,
      c.isNotPracticeMode,
    ),
    tracksWithRecords.ebisuTimeAttack,
  ),
});

for (const achievement of timeTrialAchievements) {
  set.addAchievement({
    title: achievement.title,
    description: `Beat a lap time of ${achievement.timeString} in a race on the ${achievement.location}.`,
    points: 10,
    conditions: $(
      c.gameIs.booted,
      c.codeEntryDetection,
      c.playerIs.inRaceDay,
      c.isCareerRaceDay,
      orNext(...achievement.tracks.map((id) => c.currentTrack(id))),
      c.playerIs.racing,
      c.isNotPracticeMode,
      c.bestLapUnderTime(achievement.time),
    ),
  });
}

for (const leaderboard of raceDayLeaderboards) {
  set.addLeaderboard({
    title: `${leaderboard.org} - ${leaderboard.day}`,
    description: `Highest Race Day score.`,
    lowerIsBetter: false,
    type: 'VALUE',
    conditions: {
      start: $(
        c.gameIs.booted,
        c.codeEntryDetection,
        c.playerIs.inRaceDay,
        c.isCareerRaceDay,
        c.currentRaceDay(leaderboard.raceDayId),
        c.playerIs.racing,
        c.isNotPracticeMode,
        c.raceDayScoreChanged,
      ),
      cancel: '0=1',
      submit: '1=1',
      value: {
        core: c.raceDayScoreMeasured,
      },
    },
  });
}

export const rich = RichPresence({
  format: {
    Value: 'VALUE',
  },
  lookupDefaultParameters: { keyFormat: 'hex' },
  lookup: {
    Org: {
      values: {
        '*': 'Race Day',
        0x605eddd2: 'D-Day',
        0x055db9ca: 'Battle Machine',
        0xe13d15d8: 'Battle Machine',
        0xae0c698e: 'Battle Machine',
        0xae818b8c: 'Battle Machine',
        0xb8409361: 'Battle Machine',
        0x3894298a: 'Battle Machine',
        0x42a10068: 'Battle Machine',
        0x4ccb60e3: 'Battle Machine',
        0xafcf664c: 'Battle Machine',
        0xeaf49f10: 'Super Promotion',
        0x1f9525ad: 'React Team Sessions',
        0xe7fc8982: 'React Team Sessions',
        0xd990a399: 'React Team Sessions',
        0x1a1b928f: 'React Team Sessions',
        0x351a4f2c: 'React Team Sessions',
        0xd662f890: 'React Team Sessions',
        0xfd4bd04c: 'React Team Sessions',
        0x6a6c6765: 'React Team Sessions',
        0x135de1c0: 'React Team Sessions',
        0xeb156425: 'React Team Sessions',
        0xaec86ed0: 'React Team Sessions',
        0xd9cec79d: 'Super Promotion',
        0x25acc392: 'Super Promotion',
        0xa70ea9b0: 'Super Promotion',
        0xfb4fcd1d: 'Super Promotion',
        0xcd58c265: 'Super Promotion',
        0xde40b093: 'Super Promotion',
        0xc7ef4c17: 'Super Promotion',
        0x72248dd4: 'Super Promotion',
        0xe5290279: 'Super Promotion',
        0xdeb02123: 'Super Promotion',
        0xe62c12d2: 'Super Promotion',
        0xe320ac4a: 'Super Promotion',
        0x0af1944a: 'Super Promotion',
        0x59080c5a: 'Super Promotion',
        0x5dd504cf: 'Super Promotion',
        0x2c7020c7: 'Nitrocide',
        0x3237abca: 'Nitrocide',
        0xf4f1eed5: 'Nitrocide',
        0xfa5d360a: 'Nitrocide',
        0xe316a4b0: 'Noise Bomb',
        0x6f7e88ed: 'Noise Bomb',
        0x113c58bb: 'Noise Bomb',
        0xb1c976ef: 'Noise Bomb',
        0x123151cb: 'Rogue Speed',
        0x7acf3110: 'Rogue Speed',
        0xcdd4355a: 'Rogue Speed',
        0x882a5a72: 'Rogue Speed',
        0x30fc4b03: 'G Effect',
        0xcf10f54e: 'G Effect',
        0x08f5565d: 'G Effect',
        0x258d62fc: 'G Effect',
        0xd8243c7c: 'Super Promotion',
        0xb417e552: 'Super Promotion',
      },
    },
    Day: {
      values: {
        '*': 'Race Day',
        0x605eddd2: 'Chicago Airfield',
        0x055db9ca: 'Challenge: Nevada',
        0xe13d15d8: 'Willow Springs',
        0xae0c698e: 'Chicago Airfield II',
        0xae818b8c: 'Portland International Raceway',
        0xb8409361: 'Challenge: Texas',
        0x3894298a: 'Chicago Airfield',
        0x42a10068: 'Portland International Raceway II',
        0x4ccb60e3: 'Willow Springs II',
        0xafcf664c: 'Nevada Highway II',
        0xeaf49f10: 'Showdown: Chicago',
        0x1f9525ad: 'Challenge: Autopolis',
        0xe7fc8982: 'Tokyo Dockyard',
        0xd990a399: 'Ebisu',
        0x1a1b928f: 'Mondello Park',
        0x351a4f2c: 'Mondello Park III',
        0xd662f890: 'Challenge: Ebisu',
        0xfd4bd04c: 'Autobahnring',
        0x6a6c6765: 'Autopolis II',
        0x135de1c0: 'Tokyo Dockyard II',
        0xeb156425: 'Mondello Park II',
        0xaec86ed0: 'Autobahnring II',
        0xd9cec79d: 'Showdown: Autopolis',
        0x25acc392: 'Challenge: Autobahnring',
        0xa70ea9b0: 'Willow Springs',
        0xfb4fcd1d: 'Tokyo Dockyard',
        0xcd58c265: 'Autobahnring II',
        0xde40b093: 'Portland International Raceway',
        0xc7ef4c17: 'Nevada Highway II',
        0x72248dd4: 'Infineon',
        0xe5290279: 'Mondello Park',
        0xdeb02123: 'Chicago Airfield',
        0xe62c12d2: 'Ebisu',
        0xe320ac4a: 'Nevada Highway',
        0x0af1944a: 'Infineon II',
        0x59080c5a: 'Texas World Speedway',
        0x5dd504cf: 'Showdown: Autobahnring',
        0x2c7020c7: 'Autobahnring',
        0x3237abca: 'Ebisu',
        0xf4f1eed5: 'Nevada Highway',
        0xfa5d360a: 'Nevada Highway II (Nate Denver)',
        0xe316a4b0: 'Ebisu',
        0x6f7e88ed: 'Tokyo Dockyard',
        0x113c58bb: 'Autopolis',
        0xb1c976ef: 'Autopolis II (Aki Kimura)',
        0x123151cb: 'Portland International Raceway',
        0x7acf3110: 'Chicago Airfield',
        0xcdd4355a: 'Infineon',
        0x882a5a72: 'Infineon II (Karol Monroe)',
        0x30fc4b03: 'Mondello Park',
        0xcf10f54e: 'Texas World Speedway',
        0x08f5565d: 'Willow Springs',
        0x258d62fc: 'Willow Springs II (Ray Krieger)',
        0xd8243c7c: 'Showdown: Nevada (Ryo Watanabe)',
        0xb417e552: 'Showdown: Tokyo (Ryo Watanabe)',
      },
    },
    Car: {
      values: {
        0x000006a5: 'Audi S3',
        0x000006a6: 'Audi S4',
        0x0000a86e: 'Infiniti G35 (V35)',
        0x0000acc3: 'Volkswagen Golf GTI',
        0x0000acc9: 'Pontiac GTO',
        0x0000d736: 'Volkswagen R32',
        0x0000dc00: 'Mazda RX-7',
        0x0000dc01: 'Mazda RX-8',
        0x000ac6d1: 'Nissan 350Z (Z33)',
        0x0014153f: 'Cadillac CTS-V',
        0x0014177c: 'Plymouth Hemi Cuda',
        0x0150fb80: 'Nissan 240SX (S13)',
        0x01d282d0: 'Porsche 911 Turbo',
        0x0280de05: 'BMW M3 E46',
        0x02b66071: 'Lotus Elise',
        0x02df0a34: "Pontiac GTO '65",
        0x03b8c48a: 'Toyota Supra',
        0x03e877e5: 'Dodge Viper SRT10',
        0x04341b7b: 'Pagani Zonda F',
        0x07eeac41: 'Lamborghini Murciélago LP640',
        0x09d2eff7: 'Lancer Evolution IX',
        0x09d2f016: 'Lancer Evolution',
        0x18fe86e0: 'Nissan GT-R Proto',
        0x25964f6e: 'Shelby GT500',
        0x25964f6f: "Shelby GT500 '67",
        0x2d07ac4b: 'Chevrolet Corvette Z06',
        0x35165819: 'Ford Mustang GT',
        0x3b0757ea: 'Dodge Charger R/T',
        0x3c21c0bc: 'Dodge Challenger R/T',
        0x5412f6b2: 'Chevrolet Camaro SS',
        0x5c1290e5: 'Ford GT',
        0x6c4008f5: 'BMW M3 E92',
        0x7502da84: 'Mitsubishi Eclipse',
        0x79f61087: 'Nissan Silvia (S15)',
        0x97a5c638: 'Nissan GT-R (R35)',
        0xae4eae67: 'Chevrolet Chevelle SS',
        0xbe48375e: 'Nissan Skyline GT-R (R34)',
        0xc0aed4da: 'Chevrolet Cobalt SS',
        0xd7513f6b: 'Porsche Cayman S',
        0xdd5ec3a6: 'Ford Focus ST',
        0xe7798aeb: 'Chevrolet Corvette C6',
        0xe98ec228: 'Subaru Impreza WRX STI',
        0xe9c21117: 'Honda Civic',
        0xe9e63f58: 'Ford Escort RS Cosworth',
        0xf77c13eb: 'Toyota Corolla GTS (AE86)',
        0xface8cd0: 'Mazda Mazdaspeed3',
      },
    },
    Mode: {
      values: {
        0x01: 'Grip',
        0x02: 'Drift',
        0x03: 'Drag',
        0x04: 'Speed',
      },
    },
    ModeLoaner: {
      values: {
        0x9893afc0: 'Grip',
        0x721360ab: 'Grip',
        0x2908f5e5: 'Grip',
        0xa54dcd14: 'Grip',
        0x39ec27cb: 'Grip',
        0xf8169b3c: 'Grip',
        0xa49599e5: 'Drift',
        0x57d478ba: 'Drift',
        0x0397255f: 'Drift',
        0x69285a86: 'Drift',
        0x49dbb49c: 'Drag',
        0x087ae035: 'Drag',
        0x90886f58: 'Speed',
        0x392ff897: 'Speed',
        0x0003f292: 'Speed',
        0xb78f9deb: 'Speed',
      },
    },
  },
  displays: ({ lookup, format }) => {
    const display = () => {
      const c = codeFor();

      const org = lookup.Org.at(c.playerMeasured.day);
      const day = lookup.Day.at(c.playerMeasured.day);
      const car = lookup.Car.at(c.playerMeasured.car);
      const mode = lookup.Mode.at(c.playerMeasured.mode);
      const modeLoaner = lookup.ModeLoaner.at(c.playerMeasured.modeLoaner);
      const cash = format.Value.at(c.cash);

      return /** @type Array<[ConditionBuilder, string]> */ ([
        [
          $(
            c.gameIs.booted,
            c.gameIs.loadedIn,
            c.playerIs.inRaceDay,
            c.playerIs.racing,
            c.currentRaceDay(raceDays.DDay),
          ),
          `[${org}] ${day} | ${car} (Grip)`,
        ],
        [
          $(
            c.gameIs.booted,
            c.gameIs.loadedIn,
            c.playerIs.inRaceDay,
            c.playerIs.racing,
            c.isCareerRaceDay,
          ),
          `[${org}] ${day} | ${car} (${mode}${modeLoaner})`,
        ],
        [
          $(
            c.gameIs.booted,
            c.gameIs.loadedIn,
            c.playerIs.inRaceDay,
            c.playerIs.racing,
          ),
          `[${org}] ${day} | ${car}`,
        ],
        [
          $(
            c.gameIs.booted,
            c.gameIs.loadedIn,
            c.playerIs.inRaceDay,
            c.isCareerRaceDay,
          ),
          `[${org}] ${day} | $${cash}`,
        ],
        [
          $(c.gameIs.booted, c.gameIs.loadedIn, c.playerIs.inRaceDay),
          `[${org}] ${day}`,
        ],
        [
          $(c.gameIs.booted, c.gameIs.loadedIn, c.playerIs.notInRaceDay),
          `Navigating the menus | $${cash}`,
        ],
        [$(c.gameIs.booted, c.gameIs.started), `Navigating the menus`],
      ]);
    };

    return [...display(), 'Playing Need for Speed: ProStreet'];
  },
});

export default set;
