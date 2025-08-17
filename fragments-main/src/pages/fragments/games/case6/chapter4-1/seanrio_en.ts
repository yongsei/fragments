export interface GameScenario {
  id: string;
  title: string;
  story?: string;
  victim?: string;
  suspects?: any[];
  evidence?: any[];
  locations?: any[];
  connections?: any[];
  connectionRules?: any[];
  solution?: any;
  initialFragment?: string;
  finalFragment?: string;
  endingMessage?: string;
  fragments?: any[];
  text?: string;
  choices?: any[];
  clues?: any[];
  temporalFragments?: any[];
  // Game settings
  initialCards?: string[];
  winCondition?: string;
}

export const case6ch4_1_en: GameScenario = {
  id: 'case6_chapter4_1',
  title: 'Discovery of the Sunken Cathedral',
  story: 'The final chapter plunges the detective deep into the ocean to the mythical Sunken Cathedral, drawn by Elara\'s desperate plea. Here, the Guardian of the Ancient Crystal begins to reveal the true source of the Luminous Plague and the horrifying truth behind Kael\'s endless ambition. Through the crystal\'s horrific warning, they witness the city\'s impending doom and learn of the existence of the Life Restoration Ritual.',
  victim: '',
  
  suspects: [
    {
      id: 'CH4_CH01',
      name: 'Guardian of the Ancient Crystal',
      role: 'Character',
      description: 'The ancient guardian who has protected the Sunken Cathedral for thousands of years, appearing as a luminous energy form and communicating through the mind.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH4_CH04',
      name: 'Elara, the Selfless Savior',
      role: 'Character',
      description: 'Elara, who understands the nature of the crisis and accepts her fate, preparing to sacrifice herself to save the city.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH4_EV01',
      name: 'The Mythical Sunken Cathedral',
      description: 'A legendary cathedral deep in the ocean with a massive crystal at its center emanating life energy.',
      details: 'Decorated with bioluminescent coral, it is the true source of the Luminous Plague and the heart of the crisis.',
      location: ''
    },
    {
      id: 'CH4_EV02',
      name: 'The Crystal\'s Horrific Warning',
      description: 'A horrific vision projected into the mind by the Guardian, showing a future where the crystal, depleted by Kael\'s greed, shatters and devours the city.',
      details: 'Warns of apocalyptic consequences where waves of black necrotic energy erupt from the sea, turning all life to dust.',
      location: ''
    },
    {
      id: 'CH4_EV04',
      name: 'The Life Restoration Ritual',
      description: 'An ancient ritual necessary to restore the crystal\'s energy and save the city, a complex process requiring considerable life force.',
      details: 'The very ritual Elara attempted to perform in the library, a noble act of self-sacrifice to prevent catastrophe.',
      location: ''
    },
    {
      id: 'CH4_EV03',
      name: 'Kael\'s True Ambition',
      description: 'Kael\'s true purpose revealed by the Guardian - not immortality, but a darker intention hidden beneath.',
      details: 'He seeks to use the crystal\'s power to summon ancient deep-sea entities to the surface.',
      location: ''
    },
    {
      id: 'CH4_EV06',
      name: 'The City\'s Fate',
      description: 'The city\'s desperate future revealed through the crystal\'s warning - if Kael\'s plan succeeds, everything will be destroyed.',
      details: 'Time is running out, and immediate action is required.',
      location: ''
    },
    {
      id: 'CH4_EV06_FINAL',
      name: 'Path to Salvation',
      description: 'A faint glimmer of hope discovered in the midst of desperate circumstances.',
      details: 'There is a possibility to save the city through the Life Restoration Ritual, but it requires great sacrifice.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'CH4_LC01',
      name: 'The Altar of Life',
      description: 'The central chamber of the Sunken Cathedral, dominated by a massive glowing crystal. The heart of the crisis where life and death hang in delicate balance.',
      details: 'Carvings of marine life and celestial patterns adorn the altar, and the air is filled with ozone and the hum of ancient energy.'
    },
    {
      id: 'CH4_LC03',
      name: 'Gateway to the Deep',
      description: 'A mysterious gateway leading to the Sunken Cathedral, where a luminous passage opens in the ocean depths.',
      details: 'Discovered through Elara\'s guidance, this gateway is an ancient passage connecting the surface to the deep sea.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_4_1_1',
      cards: ['CH4_EV01', 'CH4_LC03'],
      result: 'Through the Sunken Cathedral and the gateway to the deep, you reach the Altar of Life.',
      unlock: 'CH4_LC01'
    },
    {
      id: 'rule_4_1_2',
      cards: ['CH4_LC01', 'CH4_CH01'],
      result: 'At the Altar of Life, you meet the Guardian of the Ancient Crystal.',
      unlock: 'CH4_CH01'
    },
    {
      id: 'rule_4_1_3',
      cards: ['CH4_CH01', 'CH4_EV01'],
      result: 'Through the Guardian of the Ancient Crystal and the Sunken Cathedral, you receive the crystal\'s horrific warning.',
      unlock: 'CH4_EV02'
    },
    {
      id: 'rule_4_1_4',
      cards: ['CH4_EV02', 'CH4_CH01'],
      result: 'After seeing the crystal\'s horrific warning, the Guardian explains the Life Restoration Ritual.',
      unlock: 'CH4_EV04'
    },
    {
      id: 'rule_4_1_5',
      cards: ['CH4_EV04', 'CH4_CH04'],
      result: 'Learning of the Life Restoration Ritual, Elara shows her willingness to sacrifice herself.',
      unlock: 'CH4_CH04'
    },
    {
      id: 'rule_4_1_6',
      cards: ['CH4_EV02', 'CH4_EV04'],
      result: 'Through the crystal\'s warning and the Life Restoration Ritual, you learn about Kael\'s true ambition.',
      unlock: 'CH4_EV03'
    },
    {
      id: 'rule_4_1_7',
      cards: ['CH4_EV03', 'CH4_EV02'],
      result: 'Through Kael\'s true ambition and the crystal\'s warning, you realize the city\'s fate.',
      unlock: 'CH4_EV06'
    },
    {
      id: 'rule_4_1_8',
      cards: ['CH4_EV06', 'CH4_EV04'],
      result: 'Through the city\'s fate and the Life Restoration Ritual, you discover the path to salvation.',
      unlock: 'CH4_EV06_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH4_EV06_FINAL',
  initialCards: [
    'CH4_EV01', // The Mythical Sunken Cathedral
    'CH4_LC03', // Gateway to the Deep
    'CH4_CH04'  // Elara, the Selfless Savior
  ]
};