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

const set = new AchievementSet({
  gameId: 2825,
  title: 'Need for Speed: ProStreet',
});

/**
 * @param {number} permutation
 */
const codeFor = (permutation) => {
  const addresses = {
    raceDayPointer: 0x6a8c28,
    carInfoPointer: 0x6bf9f8,
    careerPointer: 0x6c57e0,
    inRaceDayPointer: 0x6cc9b8,
    ingamePointer: 0x6d3bb8,
    loadedRaceDayPointer: 0x6d3f88,
    completionPointer: 0x6d3fcc,
  };

  // prettier-ignore
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
  }

  // prettier-ignore
  const cash = $(
    ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
    ['Measured', 'Mem', '32bit', 0x1e0],
  );

  // prettier-ignore
  const playerMeasured = {
    car: $(
      ['AddAddress', 'Mem', '32bit', addresses.carInfoPointer],
      ['Measured', 'Mem', '32bit', 0x28],
    ),
    mode: $(
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer],
      ['Remember', 'Mem', '32bit', 0x18, '-', 'Value', '', 0x8c],
      ['Remember', 'Recall', '', 0, '*', 'Value', '', 0x17dc],
      ['Remember', 'Recall', '', 0, '+', 'Value', '', 0x11f4],
      ['AddAddress', 'Mem', '32bit', addresses.careerPointer, '+', 'Recall'],
      ['Measured', 'Mem', '32bit', 0x1f8],
    ),
    day: $(
      ['AddAddress', 'Mem', '32bit', addresses.loadedRaceDayPointer],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', '32bit', 0x10],
    ),
  };

  return {
    addresses,
    playerIs,
    playerMeasured,
    cash,
  };
};

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
        0x00: 'Grip',
        0x01: 'Drift',
        0x02: 'Drag',
        0x03: 'Speed',
      },
    },
  },
  displays: ({ lookup, format }) => {
    const display = () => {
      const c = codeFor(1);

      const org = lookup.Org.at(c.playerMeasured.day);
      const day = lookup.Day.at(c.playerMeasured.day);
      const car = lookup.Car.at(c.playerMeasured.car);
      const mode = lookup.Mode.at(c.playerMeasured.mode);
      const cash = format.Value.at(c.cash);

      return /** @type Array<[ConditionBuilder, string]> */ ([
        [
          $(c.playerIs.inRaceDay, c.playerIs.racing),
          `[${org}] ${day} | ${car} (${mode})`,
        ],
        [$(c.playerIs.inRaceDay), `[${org}] ${day} | $${cash}`],
        [$(c.playerIs.notInRaceDay), `Navigating the menus | $${cash}`],
      ]);
    };

    return [...display(), 'Playing Need for Speed: ProStreet'];
  },
});

export default set;
