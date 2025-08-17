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

export const case6ch2_1_en: GameScenario = {
  id: 'case6_chapter2_1',
  title: 'Discovery of the First Victim',
  story: 'Following the disturbing clues from the Great Library, the investigation leads to the city\'s murky waterways. There, the first victim of the mysterious Luminous Plague is discovered, and the trail points to Kael, a disgraced alchemist operating from a hidden, grotesque laboratory. With the help of the waterway cleaner and a desperate noble, they begin to uncover Kael\'s clandestine activities and parts of his shocking research.',
  victim: '',
  
  suspects: [
    {
      id: 'CH2_CH01',
      name: 'Kael, the Disgraced Alchemist',
      role: 'Character',
      description: 'A gaunt man with a cunning smile. After being expelled from the Alchemist\'s Guild, he continues illegal experiments in the shadows.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH2_CH02',
      name: 'The Waterway Cleaner',
      role: 'Character',
      description: 'A lean figure well-versed in the waterways, possessing information about hidden passages in the tunnels and recent unusual activities.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH2_CH04',
      name: 'The Desperate Noble',
      role: 'Character',
      description: 'An aging noble terrified of death, serving as the anonymous patron who commissioned Kael to create an elixir of immortality.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH2_EV01',
      name: 'The First Victim of Light',
      description: 'The corpse of a missing person found in the waterways, with skin glowing silver and clutching strange seaweed in their hand.',
      details: 'Shows phenomena similar to the manuscript\'s glow, appearing to be the first victim of the Luminous Plague.',
      location: ''
    },
    {
      id: 'CH2_EV04',
      name: 'Strange Activities in the Waterways',
      description: 'Recent strange activities witnessed by the waterway cleaner - mechanical sounds heard at night and strange odors.',
      details: 'Suggests someone is using the waterways for clandestine work.',
      location: ''
    },
    {
      id: 'CH2_EV06',
      name: 'Traces of Alchemical Materials',
      description: 'Remnants of rare alchemical materials found in the waterways, evidence of illegal experiments.',
      details: 'These materials are dangerous substances banned by the Alchemist\'s Guild.',
      location: ''
    },
    {
      id: 'CH2_EV07',
      name: 'The Noble\'s Desperate Commission',
      description: 'A commission letter sent by the desperate noble to Kael, containing an earnest plea to create an elixir of immortality.',
      details: 'Contains desperate content about wanting to regain youth at any cost.',
      location: ''
    },
    {
      id: 'CH2_EV09',
      name: 'Kael\'s Early Experiments',
      description: 'Traces of early experiments conducted by Kael - incomplete and imperfect elixirs.',
      details: 'Many failures were created during the experimental process, and these could be the cause of the plague.',
      location: ''
    },
    {
      id: 'CH2_EV09_FINAL',
      name: 'The Alchemist\'s Shadow',
      description: 'The moment when Kael\'s existence and his dangerous experiments begin to be revealed.',
      details: 'It becomes clear that a disgraced alchemist is behind the Luminous Plague.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'CH2_LC01',
      name: 'The Labyrinthine Waterways',
      description: 'An ancient network of stone tunnels beneath the city, with a damp, moldy atmosphere that feels dark and oppressive.',
      details: 'A crime scene where rumors of forgotten passages and strange creatures never cease.'
    },
    {
      id: 'CH2_LC03',
      name: 'Waterway Junction',
      description: 'A central point where multiple tunnels meet in the waterways, with hidden passages leading to Kael\'s laboratory.',
      details: 'The complex flow of water makes it a suitable place for clandestine activities.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_2_1_1',
      cards: ['CH2_EV01', 'CH2_LC01'],
      result: 'Through the first victim of light and the labyrinthine waterways, you meet the waterway cleaner.',
      unlock: 'CH2_CH02'
    },
    {
      id: 'rule_2_1_2',
      cards: ['CH2_CH02', 'CH2_EV01'],
      result: 'Through the waterway cleaner and the first victim, you learn about strange activities in the waterways.',
      unlock: 'CH2_EV04'
    },
    {
      id: 'rule_2_1_3',
      cards: ['CH2_EV04', 'CH2_LC03'],
      result: 'Through the strange activities in the waterways and the junction, you meet Kael.',
      unlock: 'CH2_CH01'
    },
    {
      id: 'rule_2_1_4',
      cards: ['CH2_CH01', 'CH2_EV04'],
      result: 'Through Kael and the strange activities in the waterways, you discover traces of alchemical materials.',
      unlock: 'CH2_EV06'
    },
    {
      id: 'rule_2_1_5',
      cards: ['CH2_EV06', 'CH2_CH04'],
      result: 'Through the traces of alchemical materials and the desperate noble, you learn about the noble\'s commission.',
      unlock: 'CH2_EV07'
    },
    {
      id: 'rule_2_1_6',
      cards: ['CH2_CH01', 'CH2_EV07'],
      result: 'Through Kael and the noble\'s commission, you discover Kael\'s early experiments.',
      unlock: 'CH2_EV09'
    },
    {
      id: 'rule_2_1_7',
      cards: ['CH2_EV09', 'CH2_EV01'],
      result: 'Through Kael\'s early experiments and the first victim, you confirm the alchemist\'s shadow.',
      unlock: 'CH2_EV09_FINAL'
    },
    {
      id: 'rule_2_1_8',
      cards: ['CH2_EV06', 'CH2_LC03'],
      result: 'Through the traces of alchemical materials and the waterway junction, you reach the alchemist\'s shadow.',
      unlock: 'CH2_EV09_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH2_EV09_FINAL',
  initialCards: [
    'CH2_EV01', // The First Victim of Light
    'CH2_LC01', // The Labyrinthine Waterways
    'CH2_LC03'  // Waterway Junction
  ]
};