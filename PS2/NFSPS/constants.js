export const raceDays = {
  DDay: 0x605eddd2,
  BMCNevada: 0x055db9ca,
  BMWillowSprings: 0xe13d15d8,
  BMChicagoAirfieldII: 0xae0c698e,
  BMPortlandInternationalRaceway: 0xae818b8c,
  BMCTexas: 0xb8409361,
  BMChicagoAirfield: 0x3894298a,
  BMPortlandInternationalRacewayII: 0x42a10068,
  BMWillowSpringsII: 0x4ccb60e3,
  BMNevadaHighwayII: 0xafcf664c,
  SChicago: 0xeaf49f10,
  RTSCAutopolis: 0x1f9525ad,
  RTSTokyoDockyard: 0xe7fc8982,
  RTSEbisu: 0xd990a399,
  RTSMondelloPark: 0x1a1b928f,
  RTSMondelloParkIII: 0x351a4f2c,
  RTSCEbisu: 0xd662f890,
  RTSAutobahnring: 0xfd4bd04c,
  RTSAutopolisII: 0x6a6c6765,
  RTSTokyoDockyardII: 0x135de1c0,
  RTSMondelloParkII: 0xeb156425,
  RTSAutobahnringII: 0xaec86ed0,
  SAutopolis: 0xd9cec79d,
  SPCAutobahnring: 0x25acc392,
  SPWillowSprings: 0xa70ea9b0,
  SPTokyoDockyard: 0xfb4fcd1d,
  SPAutobahnringII: 0xcd58c265,
  SPPortlandInternationalRaceway: 0xde40b093,
  SPNevadaHighwayII: 0xc7ef4c17,
  SPInfineon: 0x72248dd4,
  SPMondelloPark: 0xe5290279,
  SPChicagoAirfield: 0xdeb02123,
  SPEbisu: 0xe62c12d2,
  SPNevadaHighway: 0xe320ac4a,
  SPInfineonII: 0x0af1944a,
  SPTexasWorldSpeedway: 0x59080c5a,
  SAutobahnring: 0x5dd504cf,
  NCAutobahnring: 0x2c7020c7,
  NCEbisu: 0x3237abca,
  NCNevadaHighway: 0xf4f1eed5,
  NCNevadaHighwayII: 0xfa5d360a,
  NBEbisu: 0xe316a4b0,
  NBTokyoDockyard: 0x6f7e88ed,
  NBAutopolis: 0x113c58bb,
  NBAutopolisII: 0xb1c976ef,
  RSPortlandInternationalRaceway: 0x123151cb,
  RSChicagoAirfield: 0x7acf3110,
  RSInfineon: 0xcdd4355a,
  RSInfineonII: 0x882a5a72,
  GEMondelloPark: 0x30fc4b03,
  GETexasWorldSpeedway: 0xcf10f54e,
  GEWillowSprings: 0x08f5565d,
  GEWillowSpringsII: 0x258d62fc,
  SNevada: 0xd8243c7c,
  STokyo: 0xb417e552,
};

export const progressionAchievements = [
  {
    title: 'The Big Time',
    description:
      'Dominate Challenge: Nevada and receive a Drag car as your reward.',
    points: 3,
    raceDay: raceDays.BMCNevada,
  },
  {
    title: 'Going Global',
    description:
      'Dominate Showdown: Chicago and qualify for React Team Sessions.',
    points: 5,
    raceDay: raceDays.SChicago,
  },
  {
    title: 'Big in Japan',
    description:
      'Dominate Challenge: Autopolis and receive a Drift car as your reward.',
    points: 5,
    raceDay: raceDays.RTSCAutopolis,
  },
  {
    title: 'On Fire',
    description:
      'Dominate Showdown: Autopolis and qualify for Super Promotion.',
    points: 10,
    raceDay: raceDays.SAutopolis,
  },
  {
    title: 'No Limits',
    description:
      'Dominate Challenge: Autobahnring and receive a Speed car as your reward.',
    points: 10,
    raceDay: raceDays.SPCAutobahnring,
  },
  {
    title: 'The Final Showdown',
    description:
      'Dominate Showdown: Autobahnring and earn a chance to challenge The Showdown King.',
    points: 10,
    raceDay: raceDays.SAutobahnring,
  },
];

export const optionalBossAchievements = [
  {
    intro: {
      title: 'Close to the Apex',
      description: 'Dominate your first Race Day in the G Effect Organization.',
      raceDays: [
        raceDays.GEMondelloPark,
        raceDays.GETexasWorldSpeedway,
        raceDays.GEWillowSprings,
      ],
    },
    win: {
      title: 'Ray Krieger',
      description: 'Defeat Ray Krieger and become the new Grip King.',
      raceDay: raceDays.GEWillowSpringsII,
    },
    king: {
      title: 'The Real Grip King',
      description: 'Defeat Ray Krieger in one sitting using King Assist.',
      raceDay: raceDays.GEWillowSpringsII,
    },
  },
  {
    intro: {
      title: 'The Perfect Shift',
      description:
        'Dominate your first Race Day in the Rogue Speed Organization.',
      raceDays: [
        raceDays.RSPortlandInternationalRaceway,
        raceDays.RSChicagoAirfield,
        raceDays.RSInfineon,
      ],
    },
    win: {
      title: 'Karol Monroe',
      description: 'Defeat Karol Monroe and become the new Drag King.',
      raceDay: raceDays.RSInfineonII,
    },
    king: {
      title: 'The Real Drag King',
      description: 'Defeat Karol Monroe in one sitting using King Assist.',
      raceDay: raceDays.RSInfineonII,
    },
  },
  {
    intro: {
      title: 'Smooth Transitions',
      description:
        'Dominate your first Race Day in the Noise Bomb Organization.',
      raceDays: [
        raceDays.NBEbisu,
        raceDays.NBTokyoDockyard,
        raceDays.NBAutopolis,
      ],
    },
    win: {
      title: 'Aki Kimura',
      description: 'Defeat Aki Kimura and become the new Drift King.',
      raceDay: raceDays.NBAutopolisII,
    },
    king: {
      title: 'The Real Drift King',
      description: 'Defeat Aki Kimura in one sitting using King Assist.',
      raceDay: raceDays.NBAutopolisII,
    },
  },
  {
    intro: {
      title: 'Edge of Control',
      description:
        'Dominate your first Race Day in the Nitrocide Organization.',
      raceDays: [
        raceDays.NCAutobahnring,
        raceDays.NCEbisu,
        raceDays.NCNevadaHighway,
      ],
    },
    win: {
      title: 'Nate Denver',
      description: 'Defeat Nate Denver and become the new Speed King.',
      raceDay: raceDays.NCNevadaHighwayII,
    },
    king: {
      title: 'The Real Speed King',
      description: 'Defeat Nate Denver in one sitting using King Assist.',
      raceDay: raceDays.NCNevadaHighwayII,
    },
  },
];

export const orgAchievements = [
  {
    org: 'Battle Machine',
    totalRaceDays: 0x9,
    dominationOffset: 0xe4,
    dominationPoints: 25,
    recordOffset: 0xec,
    recordPoints: 50,
  },
  {
    org: 'React Team Sessions',
    totalRaceDays: 0xb,
    dominationOffset: 0xa8,
    dominationPoints: 25,
    recordOffset: 0xb0,
    recordPoints: 50,
  },
  {
    org: 'Super Promotion',
    totalRaceDays: 0xd,
    dominationOffset: 0x58,
    dominationPoints: 25,
    recordOffset: 0x60,
    recordPoints: 50,
  },
  {
    org: 'G Effect',
    totalRaceDays: 0x4,
    dominationOffset: 0x08,
    dominationPoints: 10,
    recordOffset: 0x10,
    recordPoints: 25,
  },
  {
    org: 'Rogue Speed',
    totalRaceDays: 0x4,
    dominationOffset: 0xd0,
    dominationPoints: 10,
    recordOffset: 0xd8,
    recordPoints: 25,
  },
  {
    org: 'Noise Bomb',
    totalRaceDays: 0x4,
    dominationOffset: 0x44,
    dominationPoints: 10,
    recordOffset: 0x4c,
    recordPoints: 25,
  },
  {
    org: 'Nitrocide',
    totalRaceDays: 0x4,
    dominationOffset: 0x30,
    dominationPoints: 10,
    recordOffset: 0x38,
    recordPoints: 25,
  },
];

export const showdownChallengeAchievements = [
  {
    title: 'When Life Gives You Lemons...',
    recordTitle: 'Escape',
    showdown: 'Chicago',
    raceDay: raceDays.SChicago,
  },
  {
    title: '...Make Lemonade...',
    recordTitle: 'Draw Japan',
    showdown: 'Autopolis',
    raceDay: raceDays.SAutopolis,
  },
  {
    title: '...And Start a Lemonade Stand',
    recordTitle: 'A Blast Beat',
    showdown: 'Autobahnring',
    raceDay: raceDays.SAutobahnring,
  },
];

export const challengeRaceDayAchievements = [
  {
    location: 'Nevada',
    points: 5,
    raceDay: raceDays.BMCNevada,
    eventOffsets: [0x1edc, 0x27f0, 0x1c20, 0x10c0],
  },
  {
    location: 'Texas',
    points: 10,
    raceDay: raceDays.BMCTexas,
    eventOffsets: [0x26c, 0x1248, 0x2908, 0x27d4, 0x18d8, 0xf70],
  },
  {
    location: 'Autopolis',
    points: 10,
    raceDay: raceDays.RTSCAutopolis,
    eventOffsets: [0xbd4, 0x279c, 0x11a0, 0x25f8, 0x1210],
  },
  {
    location: 'Ebisu',
    points: 25,
    raceDay: raceDays.RTSCEbisu,
    eventOffsets: [0x280c, 0x2ef0, 0x2b1c, 0xdb0, 0x1558, 0x790, 0x1fd8],
  },
  {
    location: 'Autobahnring',
    points: 25,
    raceDay: raceDays.SPCAutobahnring,
    eventOffsets: [0x6cc, 0x2f44, 0x2518, 0x1910, 0x1830, 0x1ab4],
  },
];

export const loanerIds = {
  grip: [
    0x9893afc0, 0x721360ab, 0x2908f5e5, 0xa54dcd14, 0x39ec27cb, 0xf8169b3c,
  ],
  drift: [0xa49599e5, 0x57d478ba, 0x0397255f, 0x69285a86],
  drag: [0x49dbb49c, 0x087ae035],
  speed: [0x90886f58, 0x392ff897, 0x0003f292, 0xb78f9deb],
};

export const carModels = {
  AudiS3: 0x000006a5,
  AudiS4: 0x000006a6,
  InfinitiG35V35: 0x0000a86e,
  VolkswagenGolfGTI: 0x0000acc3,
  PontiacGTO: 0x0000acc9,
  VolkswagenR32: 0x0000d736,
  MazdaRX7: 0x0000dc00,
  MazdaRX8: 0x0000dc01,
  Nissan350ZZ33: 0x000ac6d1,
  CadillacCTSV: 0x0014153f,
  PlymouthHemiCuda: 0x0014177c,
  Nissan240SXS13: 0x0150fb80,
  Porsche911Turbo: 0x01d282d0,
  BMWM3E46: 0x0280de05,
  LotusElise: 0x02b66071,
  PontiacGTO65: 0x02df0a34,
  ToyotaSupra: 0x03b8c48a,
  DodgeViperSRT10: 0x03e877e5,
  PaganiZondaF: 0x04341b7b,
  LamborghiniMurcielagoLP640: 0x07eeac41,
  LancerEvolutionIX: 0x09d2eff7,
  LancerEvolution: 0x09d2f016,
  NissanGTRProto: 0x18fe86e0,
  ShelbyGT500: 0x25964f6e,
  ShelbyGT50067: 0x25964f6f,
  ChevroletCorvetteZ06: 0x2d07ac4b,
  FordMustangGT: 0x35165819,
  DodgeChargerRT: 0x3b0757ea,
  DodgeChallengerRT: 0x3c21c0bc,
  ChevroletCamaroSS: 0x5412f6b2,
  FordGT: 0x5c1290e5,
  BMWM3E92: 0x6c4008f5,
  MitsubishiEclipse: 0x7502da84,
  NissanSilviaS15: 0x79f61087,
  NissanGTRR35: 0x97a5c638,
  ChevroletChevelleSS: 0xae4eae67,
  NissanSkylineGTRR34: 0xbe48375e,
  ChevroletCobaltSS: 0xc0aed4da,
  PorscheCaymanS: 0xd7513f6b,
  FordFocusST: 0xdd5ec3a6,
  ChevroletCorvetteC6: 0xe7798aeb,
  SubaruImprezaWRXSTI: 0xe98ec228,
  HondaCivic: 0xe9c21117,
  FordEscortRSCosworth: 0xe9e63f58,
  ToyotaCorollaGTSAE86: 0xf77c13eb,
  MazdaMazdaspeed3: 0xface8cd0,
};

export const trackIds = {
  horseThiefMile: [0xff587df1, 0x2314660f],
  bigWillow: [],
};

export const tracksWithRecords = {
  dirtGrip: [
    { id: 0xeb729e65, record: 7610 },
    { id: 0xc3c851ce, record: 8820 },
    { id: 0xd01103ff, record: 8900 },
    { id: 0xa92ba9cf, record: 9210 },
  ],
  autobahnSpeed: [
    { id: 0xf33aa58e, record: 7890 },
    { id: 0x4e6467b9, record: 7910 },
    { id: 0x249cd985, record: 8770 },
    { id: 0x91cc0efc, record: 8730 },
    { id: 0xb9e8c91d, record: 9070 },
    { id: 0xd4a5e392, record: 8550 },
    { id: 0x34efa3c1, record: 8370 },
    { id: 0x45418e4e, record: 8860 },
    { id: 0x78b11f63, record: 8780 },
    { id: 0xfc7df86d, record: 8340 },
    { id: 0xb2b1a5dd, record: 8470 },
    { id: 0xd6e961f4, record: 8590 },
    { id: 0xd4fe25d5, record: 8560 },
    { id: 0xf0846df6, record: 8390 },
    { id: 0x6d4e36d8, record: 8230 },
  ],
  tokyoTimeAttack: [
    { id: 0xe11cc58d, record: 8010 },
    { id: 0x6aba768a, record: 8340 },
    { id: 0xa717937a, record: 9130 },
  ],
  mondelloParkGPTimeAttack: [{ id: 0xe4ed8462, record: 8380 }],
  nevadaSpeed: [
    { id: 0xb8cee705, record: 8920 },
    { id: 0x4618cc95, record: 8790 },
    { id: 0x076d0d10, record: 8790 },
    { id: 0x06989360, record: 9430 },
    { id: 0xea3ede13, record: 8900 },
    { id: 0x3a34a925, record: 8890 },
    { id: 0x2818f1bc, record: 8860 },
    { id: 0x1bfd49a2, record: 9260 },
    { id: 0x995f0b89, record: 9290 },
    { id: 0xec64a2d4, record: 8880 },
    { id: 0xec64a2d4, record: 9380 },
    { id: 0x7fd0bf31, record: 9210 },
    { id: 0x326ffef6, record: 9310 },
    { id: 0x1e90580b, record: 9100 },
    { id: 0xbea5f6a2, record: 9170 },
    { id: 0xe16a3b0b, record: 9180 },
    { id: 0x3df75835, record: 9070 },
    { id: 0xeaf44553, record: 9020 },
    { id: 0x1d319cca, record: 9140 },
  ],
  texasOval: [
    { id: 0x327120be, record: 8880 },
    { id: 0x3010e770, record: 8650 },
    { id: 0xcf0cebc8, record: 8510 },
  ],
  ebisuTimeAttack: [{ id: 0x9a10ac71, record: 8480 }],
};
