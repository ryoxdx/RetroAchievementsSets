import {
  AchievementSet,
  define as $,
  ConditionBuilder,
  RichPresence,
} from '@cruncheevos/core';

import { richPresenceValues, rivals, timeAttackTracks } from './constants.js';

/**
 * @template T
 * @typedef {(c: typeof codeFor extends (...args: any[]) => infer U ? U : any) => T} CodeCallbackTemplate
 */

/** @typedef {CodeCallbackTemplate<ConditionBuilder | Condition>} CodeCallback */

/** @typedef {'usa' | 'europe'} Region */

const set = new AchievementSet({
  gameId: 19427,
  title: 'Street Supremacy',
});

/**
 * @param {Region} region
 */
const codeFor = (region) => {
  /**
   * @param {number} address
   */
  const offset = (address) => {
    return region === 'europe' ? address : address - 0x650;
  };

  const addresses = {
    gameStarted: offset(0xa23ed0),
    areas: {
      kandaTeam: offset(0xa30fec),
      ginzaTeam: offset(0xa31178),
      fukuzumiTeam: offset(0xa31304),
      ariakeTeam: offset(0xa31490),
      daibaTeam: offset(0xa3161c),
      ooiTeam: offset(0xa317a8),
      airportTeam: offset(0xa31934),
      ougiTeam: offset(0xa31ac0),
      daikokuTeam: offset(0xa31c4c),
      minatoTeam: offset(0xa31dd8),
      shioiriTeam: offset(0xa31f64),
      hanedaTeam: offset(0xa320f0),
      shibauraTeam: offset(0xa3227c),
      shibaTeam: offset(0xa32408),
      kasumigasekiTeam: offset(0xa32594),
    },
    car: offset(0xa413d0),
    ingame: offset(0xa41d34),
    ingameMode: offset(0xa42204),
    timeAttackTrack: offset(0xa42208),
    replayMode: offset(0xa42218),
    lapTime: offset(0xa4227c),
    eventActive: offset(0xa42284),
    liveMonitor: offset(0xa422c0),
    area: offset(0xa42e30),
    team: offset(0xa42e6c),
    teamRank: offset(0xa42e7c),
    money: offset(0xa46078),
    teamBattleArea: offset(0xa4f440),
    teamBattle1: offset(0xa4f444),
    teamBattle2: offset(0xa4f448),
    teamBattle3: offset(0xa4f44c),
    teamBattle4: offset(0xa4f450),
    teamBattle5: offset(0xa4f454),
    teamBattle6: offset(0xa4f458),
    teamBattle7: offset(0xa4f45c),
    teamBattle8: offset(0xa4f460),
    teamBattle9: offset(0xa4f464),
    teamBattle10: offset(0xa4f468),
  };

  // prettier-ignore
  const regionCheck = $(
    region === 'usa' && ['PauseIf', 'Mem', '32bit', addresses.gameStarted, '!=', 'Value', '', 2],
    region === 'europe' && ['PauseIf', 'Mem', '32bit', addresses.gameStarted, '!=', 'Value', '', 2],
  );

  // prettier-ignore
  const gameIs = {
    started: $(['', 'Mem', '32bit', addresses.gameStarted, '=', 'Value', '', 2]),
    teamRumble: $(
      ['OrNext', 'Mem', '32bit', addresses.liveMonitor, '!=', 'Value', '', 0xc9],
      ['', 'Mem', '32bit', addresses.teamBattle1, '!=', 'Value', '', 0xc9],
      ['', 'Mem', '32bit', addresses.ingameMode, '<=', 'Value', '', 1],
    ),
    timeAttack: $(
      ['', 'Mem', '32bit', addresses.liveMonitor, '=', 'Value', '', 0xc9],
      ['', 'Mem', '32bit', addresses.teamBattle1, '=', 'Value', '', 0xc9],
      ['', 'Mem', '32bit', addresses.ingameMode, '=', 'Value', '', 4],
    ),
    replayMode: $(['', 'Mem', '32bit', addresses.replayMode, '=', 'Value', '', 0x1]),
  };

  const playerIs = {
    inMenus: $(['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 0]),
    ingame: $(['', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 1]),
    leader: $(['', 'Mem', '32bit', addresses.teamRank, '=', 'Value', '', 0]),
  };

  // prettier-ignore
  const playerTeamOwnsHits = (area) => $(['AddHits', 'Mem', '32bit', area, '=', 'Mem', '32bit', addresses.team, 1]);

  const playerMeasured = {
    car: $(['Measured', 'Mem', '32bit', addresses.car]),
    area: $(['Measured', 'Mem', '32bit', addresses.area]),
    team: $(['Measured', 'Mem', '32bit', addresses.team]),
    track: $(['Measured', 'Mem', '32bit', addresses.timeAttackTrack]),
    cash: $(['Measured', 'Mem', '32bit', addresses.money]),
    territories: $(
      ['ResetIf', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 0],
      ...Object.values(addresses.areas).map((area) =>
        $(playerTeamOwnsHits(area)),
      ),
      ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 0],
    ),
    lapTime: $(
      ['Remember', 'Mem', '32bit', addresses.lapTime, '*', 'Value', '', 100],
      ['AddSource', 'Recall', '', 0, '/', 'Value', '', 30],
      ['Measured', 'Value', '', 0],
    ),
  };

  // prettier-ignore
  const recruitedRival = (rivalTeam) =>
    $(
      ['', 'Delta', '32bit', offset(rivalTeam), '!=', 'Mem', '32bit', addresses.team],
      ['', 'Mem', '32bit', offset(rivalTeam), '=', 'Mem', '32bit', addresses.team],
    );

  const recruitedAllWanderers = $(
    ['ResetIf', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 0],
    ...rivals.map((rival) => {
      if (rival.team === 'Wanderers') {
        return playerTeamOwnsHits(offset(rival.teamAddress));
      }
    }),
    ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 87],
  );

  const beatEveryRival = $(
    ['ResetIf', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 0],
    // prettier-ignore
    ...rivals.map((rival) => $(['AddHits', 'Mem', '32bit', offset(rival.beatAddress), '=', 'Value', '', 1, 1])),
    ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 200],
  );

  const recruitedEveryRival = $(
    ['ResetIf', 'Mem', '32bit', addresses.ingame, '=', 'Value', '', 0],
    ...rivals.map((rival) => {
      return playerTeamOwnsHits(offset(rival.teamAddress));
    }),
    ['', 'Value', '', 0, '=', 'Value', '', 1, 200],
  );

  const teamBattleAlone = $(
    ['', 'Mem', '32bit', addresses.teamBattle1, '=', 'Value', '', 0xc8],
    ['', 'Mem', '32bit', addresses.teamBattle2, '=', 'Value', '', 0xc9],
    ['', 'Mem', '32bit', addresses.teamBattle3, '=', 'Value', '', 0xc9],
    ['', 'Mem', '32bit', addresses.teamBattle4, '=', 'Value', '', 0xc9],
    ['', 'Mem', '32bit', addresses.teamBattle5, '=', 'Value', '', 0xc9],
  );

  const teamBattle5Opponents = $(
    ['', 'Mem', '32bit', addresses.teamBattle6, '!=', 'Value', '', 0xc9],
    ['', 'Mem', '32bit', addresses.teamBattle7, '!=', 'Value', '', 0xc9],
    ['', 'Mem', '32bit', addresses.teamBattle8, '!=', 'Value', '', 0xc9],
    ['', 'Mem', '32bit', addresses.teamBattle9, '!=', 'Value', '', 0xc9],
    ['', 'Mem', '32bit', addresses.teamBattle10, '!=', 'Value', '', 0xc9],
  );

  // prettier-ignore
  const teamBattleWin = $(
    ['Remember', 'Mem', '32bit', addresses.team],
    ['AddAddress', 'Mem', '32bit', addresses.teamBattleArea, '*', 'Value', '', 0x18c],
    ['', 'Delta', '32bit', addresses.areas.kandaTeam, '!=', 'Recall', '', 0],
    ['AddAddress', 'Mem', '32bit', addresses.teamBattleArea, '*', 'Value', '', 0x18c],
    ['', 'Mem', '32bit', addresses.areas.kandaTeam, '=', 'Recall', '', 0],
  );

  // prettier-ignore
  const notInReplay = $(['', 'Mem', '32bit', addresses.replayMode, '=', 'Value', '', 0]);

  // prettier-ignore
  const trackIs = (track) =>
    $(
      ['', 'Mem', '32bit', offset(addresses.timeAttackTrack), '=', 'Value', '', track.id],
    );

  const eventFinished = $(
    ['', 'Delta', '32bit', offset(addresses.eventActive), '>', 'Value', '', 0],
    ['', 'Mem', '32bit', offset(addresses.eventActive), '=', 'Value', '', 0],
  );

  // prettier-ignore
  const beatTimeTarget = (track) =>
    $(
      ['', 'Mem', '32bit', offset(addresses.lapTime), '<=', 'Value', '', track.target * 30],
    );

  return {
    addresses,
    regionCheck,
    gameIs,
    playerIs,
    playerMeasured,
    recruitedRival,
    recruitedAllWanderers,
    beatEveryRival,
    recruitedEveryRival,
    teamBattleAlone,
    teamBattle5Opponents,
    teamBattleWin,
    notInReplay,
    trackIs,
    eventFinished,
    beatTimeTarget,
  };
};

/**
 * @param {CodeCallback} cb
 * @param {number} [options]
 * @param {boolean} [singleOptions]
 */
const multiRegionalConditions = (cb, options = 1, singleOptions) => {
  let groups = { core: '1=1' };

  const permutations = singleOptions ? options : options ** 2;

  for (let i = 1; i <= permutations; i++) {
    groups[`alt${i}`] = cb(codeFor('usa', i));
    groups[`alt${i + permutations}`] = cb(codeFor('europe', i));
  }

  return groups;
};

for (const rival of rivals) {
  if (rival.team === 'Wanderers') {
    set.addAchievement({
      title: rival.name,
      description: `Recruit wanderer ${rival.name} as team leader.`,
      points: rival.points,
      conditions: multiRegionalConditions((c) =>
        $(
          c.regionCheck,
          c.gameIs.teamRumble,
          c.playerIs.ingame,
          c.playerIs.leader,
          c.recruitedRival(rival.teamAddress),
        ),
      ),
    });
  }
}

set.addAchievement({
  title: 'Wander No More',
  description: 'Have every Wanderer in your team.',
  points: 25,
  type: 'missable',
  conditions: multiRegionalConditions((c) =>
    $(c.regionCheck, c.gameIs.teamRumble, c.recruitedAllWanderers),
  ),
});

set.addAchievement({
  title: 'All-Star',
  description: 'Beat every rival.',
  points: 25,
  conditions: multiRegionalConditions((c) =>
    $(c.regionCheck, c.gameIs.teamRumble, c.beatEveryRival),
  ),
});

set.addAchievement({
  title: 'Full Crew',
  description: 'Have every rival in your team.',
  points: 50,
  type: 'missable',
  conditions: multiRegionalConditions((c) =>
    $(c.regionCheck, c.gameIs.teamRumble, c.recruitedEveryRival),
  ),
});

set.addAchievement({
  title: 'Survival Mode',
  description: 'Win a Team Battle against 5 opponents by yourself.',
  points: 10,
  type: 'missable',
  conditions: multiRegionalConditions((c) =>
    $(
      c.regionCheck,
      c.gameIs.teamRumble,
      c.playerIs.ingame,
      c.teamBattleAlone,
      c.teamBattle5Opponents,
      c.teamBattleWin,
    ),
  ),
});

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}'${seconds.toString().padStart(2, '0')}"000`;
};

for (const track of timeAttackTracks) {
  set.addAchievement({
    title: `${track.name} Time Attack`,
    description: `Beat a time of ${formatTime(track.target)} in a Time Attack at ${track.name}.`,
    points: 5,
    conditions: multiRegionalConditions((c) =>
      $(
        c.regionCheck,
        c.gameIs.timeAttack,
        c.playerIs.ingame,
        c.notInReplay,
        c.trackIs(track),
        c.beatTimeTarget(track),
        c.eventFinished,
      ),
    ),
  });
}

for (const track of timeAttackTracks) {
  set.addLeaderboard({
    title: `${track.name}`,
    description: `Best time in Time Attack mode.`,
    lowerIsBetter: true,
    type: 'MILLISECS',
    conditions: {
      start: multiRegionalConditions((c) =>
        $(
          c.regionCheck,
          c.gameIs.timeAttack,
          c.playerIs.ingame,
          c.notInReplay,
          c.trackIs(track),
          c.eventFinished,
        ),
      ),
      cancel: '0=1',
      submit: '1=1',
      value: multiRegionalConditions((c) =>
        $(c.regionCheck, c.playerMeasured.lapTime),
      ),
    },
  });
}

export const rich = RichPresence({
  format: { Value: 'VALUE' },
  lookupDefaultParameters: { keyFormat: 'hex' },
  lookup: {
    Car: { values: richPresenceValues.car },
    Area: { values: richPresenceValues.area },
    Team: { values: richPresenceValues.team },
    Track: { values: richPresenceValues.track },
  },
  displays: ({ lookup, format }) => {
    /** @param {Region} region */
    const displayForRegion = (region) => {
      const c = codeFor(region);

      const car = lookup.Car.at($(c.playerMeasured.car));
      const area = lookup.Area.at($(c.playerMeasured.area));
      const team = lookup.Team.at($(c.playerMeasured.team));
      const track = lookup.Track.at($(c.playerMeasured.track));
      const cash = format.Value.at($(c.playerMeasured.cash));
      const territories = format.Value.at($(c.playerMeasured.territories));

      return /** @type Array<[ConditionBuilder, string]> */ ([
        [
          $(c.regionCheck, c.playerIs.ingame, c.gameIs.replayMode),
          '[Replay Mode] Watching a replay',
        ],
        [
          $(c.regionCheck, c.playerIs.ingame, c.gameIs.timeAttack),
          `[Time Attack] ${track} 🚗 ${car}`,
        ],
        [
          $(c.regionCheck, c.playerIs.ingame, c.gameIs.teamRumble),
          `[Team Rumble] ${team} 📍 ${area} 🚗 ${car} 💰 $${cash} 🗺 ${territories}/15`,
        ],
        [$(c.regionCheck, c.playerIs.inMenus), 'Navigating the menus'],
      ]);
    };

    return [
      ...displayForRegion('usa'),
      ...displayForRegion('europe'),
      'Playing Street Supremacy',
    ];
  },
});

export default set;
