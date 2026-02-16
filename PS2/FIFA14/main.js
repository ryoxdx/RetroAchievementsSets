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
    homeScore: 0x814328,
    awayScore: 0x81bce0,
    language: 0x735240,
    homeTeam: 0x73a2d0,
    awayTeam: 0x73a2e8,
    timeDisplay: 0x77b4b0,
    regularTime: 0x7a38c8,
    stoppageTime: 0x7a38cc,
    homeTeamAbbreviated: 0x7a3958,
    awayTeamAbbreviated: 0x7a399c,
  };

  const gameIs = {
    // prettier-ignore
    booted: $(['', 'Mem', '32bit', addresses.gameStartedPointer, '!=', 'Value', '', 0]),
    started: $(
      ['AddAddress', 'Mem', '32bit', addresses.gameStartedPointer],
      ['', 'Mem', '32bit', 0x08, '=', 'Value', '', 1],
    ),
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
    mode: $(['Measured', 'Mem', '8bit', addresses.homeTeam]),
    homeScore: $(['Measured', 'Mem', '32bit', addresses.homeScore]),
    homeTeamA: $(['Measured', 'Mem', '8bit', addresses.homeTeamAbbreviated]),
    // prettier-ignore
    homeTeamB: $(['Measured', 'Mem', '8bit', addresses.homeTeamAbbreviated + 1]),
    // prettier-ignore
    homeTeamC: $(['Measured', 'Mem', '8bit', addresses.homeTeamAbbreviated + 2]),
    awayScore: $(['Measured', 'Mem', '32bit', addresses.awayScore]),
    awayTeamA: $(['Measured', 'Mem', '8bit', addresses.awayTeamAbbreviated]),
    // prettier-ignore
    awayTeamB: $(['Measured', 'Mem', '8bit', addresses.awayTeamAbbreviated + 1]),
    // prettier-ignore
    awayTeamC: $(['Measured', 'Mem', '8bit', addresses.awayTeamAbbreviated + 2]),
    regularTimeA: $(['Measured', 'Mem', '8bit', addresses.timeDisplay]),
    regularTimeB: $(['Measured', 'Mem', '8bit', addresses.timeDisplay + 1]),
    regularTimeC: $(['Measured', 'Mem', '8bit', addresses.timeDisplay + 2]),
    regularTimeD: $(['Measured', 'Mem', '8bit', addresses.timeDisplay + 3]),
    regularTimeE: $(['Measured', 'Mem', '8bit', addresses.timeDisplay + 4]),
    regularTimeF: $(['Measured', 'Mem', '8bit', addresses.timeDisplay + 5]),
    stoppageTime: $(['Measured', 'Mem', '32bit', addresses.stoppageTime]),
  };

  // prettier-ignore
  const isPast100Min = $(['', 'Mem', '32bit', addresses.regularTime, '>=', 'Value', '', 6000]);

  // prettier-ignore
  const isStoppage = $(['', 'Mem', '32bit', addresses.stoppageTime, '>', 'Value', '', 0]);

  // prettier-ignore
  const isPreGame = $(['', 'Mem', '32bit', addresses.timeDisplay, '=', 'Value', '', 0x2d]);

  return {
    addresses,
    gameIs,
    playerIs,
    playerMeasured,
    isPast100Min,
    isStoppage,
    isPreGame,
  };
};

const c = codeFor();

export const rich = RichPresence({
  format: { Value: 'VALUE', Secs: 'SECS' },
  lookupDefaultParameters: { keyFormat: 'hex' },
  lookup: {
    Language: { values: richPresenceValues.language },
    Mode: { values: richPresenceValues.mode },
  },
  displays: ({ lookup, format, macro }) => {
    const display = () => {
      const language = lookup.Language.at(c.playerMeasured.language);
      const mode = lookup.Mode.at(c.playerMeasured.mode);
      const homeScore = format.Value.at(c.playerMeasured.homeScore);
      const homeTeamA = macro.ASCIIChar.at(c.playerMeasured.homeTeamA);
      const homeTeamB = macro.ASCIIChar.at(c.playerMeasured.homeTeamB);
      const homeTeamC = macro.ASCIIChar.at(c.playerMeasured.homeTeamC);
      const awayScore = format.Value.at(c.playerMeasured.awayScore);
      const awayTeamA = macro.ASCIIChar.at(c.playerMeasured.awayTeamA);
      const awayTeamB = macro.ASCIIChar.at(c.playerMeasured.awayTeamB);
      const awayTeamC = macro.ASCIIChar.at(c.playerMeasured.awayTeamC);
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
          $(c.gameIs.booted, c.gameIs.started, c.playerIs.ingame, c.isPreGame),
          `${language} [${mode}] ${homeTeamA}${homeTeamB}${homeTeamC} - ${awayTeamA}${awayTeamB}${awayTeamC}`,
        ],
        [
          $(
            c.gameIs.booted,
            c.gameIs.started,
            c.playerIs.ingame,
            c.isPast100Min,
            c.isStoppage,
          ),
          `${language} [${mode}] ${homeTeamA}${homeTeamB}${homeTeamC} ${homeScore} - ${awayScore} ${awayTeamA}${awayTeamB}${awayTeamC} 🕘 ${extraTime} + ${stoppageTime}`,
        ],
        [
          $(c.gameIs.booted, c.gameIs.started, c.playerIs.ingame, c.isStoppage),
          `${language} [${mode}] ${homeTeamA}${homeTeamB}${homeTeamC} ${homeScore} - ${awayScore} ${awayTeamA}${awayTeamB}${awayTeamC} 🕘 ${regularTime} + ${stoppageTime}`,
        ],
        [
          $(
            c.gameIs.booted,
            c.gameIs.started,
            c.playerIs.ingame,
            c.isPast100Min,
          ),
          `${language} [${mode}] ${homeTeamA}${homeTeamB}${homeTeamC} ${homeScore} - ${awayScore} ${awayTeamA}${awayTeamB}${awayTeamC} 🕘 ${extraTime}`,
        ],
        [
          $(c.gameIs.booted, c.gameIs.started, c.playerIs.ingame),
          `${language} [${mode}] ${homeTeamA}${homeTeamB}${homeTeamC} ${homeScore} - ${awayScore} ${awayTeamA}${awayTeamB}${awayTeamC} 🕘 ${regularTime}`,
        ],
        [
          $(c.gameIs.booted, c.gameIs.started),
          `${language} Navigating the menus`,
        ],
      ]);
    };

    return [...display(), 'Playing FIFA 14'];
  },
});

export default set;
