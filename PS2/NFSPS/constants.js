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
