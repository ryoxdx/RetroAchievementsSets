import {
  AchievementSet,
  define as $,
  ConditionBuilder,
  RichPresence,
} from '@cruncheevos/core';

import { richPresenceValues } from './constants.js';

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
    gameStartedPointer: 0x6d65e4,
    ingame: 0x6d65f0,
    careerPointer: 0x6e3a40,
    homeScore: 0x814328,
    awayScore: 0x81bce0,
    homeTeamIdPointer: 0x733bf0,
    stadiumIdPointer: 0x734590,
    awayTeamIdPointer: 0x734e94,
    language: 0x735240,
    homeTeam: 0x73a2d0,
    awayTeam: 0x73a2e8,
    mode: 0x7344d4,
    timeDisplay: 0x77b4b0,
    regularTime: 0x7a38c8,
    stoppageTime: 0x7a38cc,
    homeTeamAbb: 0x7a3958,
    awayTeamAbb: 0x7a399c,
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
    homeTeamId: $(
      ['AddAddress', 'Mem', '32bit', addresses.homeTeamIdPointer],
      ['AddAddress', 'Mem', '32bit', 0x04],
      ['Measured', 'Mem', '32bit', 0x04],
    ),
    awayScore: $(['Measured', 'Mem', '32bit', addresses.awayScore]),
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

  const isPractice = $(
    ['', 'Mem', '8bit', addresses.mode, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', addresses.ingame, '=', 'Value', '', 1],
  );

  return {
    addresses,
    gameIs,
    playerIs,
    playerMeasured,
    isPast100Min,
    isStoppage,
    isPreGame,
    isPractice,
  };
};

const c = codeFor();

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
      const homeTeam = lookup.Team.at(c.playerMeasured.homeTeamId);
      const awayScore = format.Value.at(c.playerMeasured.awayScore);
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
        [$(c.gameIs.started), `${language} [${mode}] Getting ready to play`],
      ]);
    };

    return [...display(), 'Playing FIFA 14'];
  },
});

export default set;
