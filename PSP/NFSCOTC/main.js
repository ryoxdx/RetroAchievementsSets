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
  gameId: 18149,
  title: 'Need for Speed: Carbon - Own the City',
});

const codeFor = () => {
  const addresses = {
    currentCar: 0xbecc5c,
    instantRace: 0xc376e4,
    rewardsPointer: 0xbdce70,
    ingame: 0xbdd5a8,
    gameStarted: 0xbe9528,
  };

  // prettier-ignore
  const offsetPointers = {
    rewards: $(['AddAddress', 'Mem', '32bit', addresses.rewardsPointer, '&', 'Value', '', 0x1ffffff]),
  };

  // prettier-ignore
  const gameIs = {
    started: $(['', 'Mem', '32bit', addresses.gameStarted, '=', 'Value', '', 1]),
  };

  // prettier-ignore
  const playerIs = {
    inMenus: $(
      ['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 0],
    ),
    ingameCareer: $(
      ['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 1],
    ),
    ingameQuick: $(
      ['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 3],
      ['', 'Mem', '32bit', addresses.instantRace, '=', 'Value', '', 0],
    ),
    ingameInstant: $(
      ['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 3],
      ['', 'Mem', '32bit', addresses.instantRace, '=', 'Value', '', 1],
    ),
  };

  const playerMeasured = {
    car: $(['Measured', 'Mem', '32bit', addresses.currentCar]),
    cash: $(offsetPointers.rewards, ['Measured', 'Mem', '32bit', 0x2228]),
  };

  return {
    addresses,
    gameIs,
    playerIs,
    playerMeasured,
  };
};

const c = codeFor();

export const rich = RichPresence({
  format: { Value: 'VALUE' },
  lookupDefaultParameters: { keyFormat: 'hex' },
  lookup: {
    Car: { values: richPresenceValues.car },
  },
  displays: ({ lookup, format }) => {
    const display = () => {
      const car = lookup.Car.at(c.playerMeasured.car);
      const cash = format.Value.at(c.playerMeasured.cash);

      return /** @type Array<[ConditionBuilder, string]> */ ([
        [
          $(c.gameIs.started, c.playerIs.ingameCareer),
          `In Career 🚗 ${car} 💰 $${cash}`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingameInstant),
          `In Instant Race 🚗 ${car}`,
        ],
        [
          $(c.gameIs.started, c.playerIs.ingameQuick),
          `In Quick Race 🚗 ${car}`,
        ],
        [
          $(c.gameIs.started, c.playerIs.inMenus),
          `Navigating the menus 💰 $${cash}`,
        ],
      ]);
    };

    return [...display(), 'Playing Need for Speed: Carbon - Own the City'];
  },
});

export default set;
