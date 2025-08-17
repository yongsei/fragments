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

export const case6ch2_2_en: GameScenario = {
  id: 'case6_chapter2_2',
  title: 'The Alchemist\'s True Purpose',
  story: 'After confirming Kael\'s existence, the detective discovers his hidden laboratory and finds shocking research notes. Kael\'s frantic handwriting documents an obsessive pursuit of the Elixir of Life, with detailed theories on synthesizing elixirs using rare bioluminescent algae from the deep sea. Upon discovering Elara\'s intercepted confession in the sunken market, they realize that Kael\'s true purpose is not immortality, but something far darker.',
  victim: '',
  
  suspects: [
    {
      id: 'CH2_CH03',
      name: 'The Shadow Merchant',
      role: 'Character',
      description: 'A mysterious merchant operating in the sunken market who conducts secret deals with Kael and supplies dangerous materials.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH2_CH05',
      name: 'Witness to the Experiments',
      role: 'Character',
      description: 'A person who accidentally witnessed Kael\'s experiments and knows the truth about his horrific research.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH2_EV02',
      name: 'Kael\'s Hidden Laboratory',
      description: 'A secret laboratory hidden deep in the waterways, filled with bubbling distillers and grotesque experiments.',
      details: 'Charts depicting the fusion of human and marine biology hang on the walls, revealing Kael\'s twisted research.',
      location: ''
    },
    {
      id: 'CH2_EV03',
      name: 'Shocking Research Notes',
      description: 'Research notes written in Kael\'s frantic handwriting, documenting an obsessive pursuit of the Elixir of Life.',
      details: 'Contains detailed theories on synthesizing elixirs using rare bioluminescent algae from the deep sea.',
      location: ''
    },
    {
      id: 'CH2_EV05',
      name: 'The Client\'s Desperate Commission',
      description: 'An elegant letter bearing a noble family crest, containing a desperate request for an elixir of immortality.',
      details: 'Contains an earnest plea to create a fountain of youth at any cost.',
      location: ''
    },
    {
      id: 'CH2_EV08',
      name: 'Elara\'s Intercepted Confession',
      description: 'A draft of Elara\'s confession found in Kael\'s laboratory, accusing Kael of being the source of the disease.',
      details: 'The letter is covered with Kael\'s angry scribbles, showing he threatened Elara.',
      location: ''
    },
    {
      id: 'CH2_EV10',
      name: 'Connection to Deep-Sea Entities',
      description: 'Evidence of Kael\'s attempts to communicate with deep-sea entities found in his research, showing his true purpose.',
      details: 'The elixir of immortality is a superficial goal; he actually seeks to summon ancient deep-sea entities.',
      location: ''
    },
    {
      id: 'CH2_FINAL',
      name: 'The Alchemist\'s True Purpose',
      description: 'Kael\'s ultimate goal revealed through the combination of all evidence and clues.',
      details: 'It is fully revealed that Kael\'s alchemical experiments were not for immortality, but part of a ritual to summon ancient deep-sea entities to the surface world.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'CH2_LC02',
      name: 'The Sunken Market',
      description: 'A hidden illegal market operating in caves beneath the city, where rare materials and secrets are traded.',
      details: 'Accessible only through waterway passages, this is where Kael conducts his clandestine dealings.'
    },
    {
      id: 'CH2_LC04',
      name: 'Secret Section of the Laboratory',
      description: 'The most dangerous experimental area located deep within Kael\'s laboratory.',
      details: 'Contains ritual altars for communicating with deep-sea entities and forbidden alchemical equipment.'
    },
    {
      id: 'CH2_LC05',
      name: 'Deep Waterway Depths',
      description: 'The deepest and darkest part of the city\'s waterways, where Kael performs rituals to connect with the deep sea.',
      details: 'Seawater seeps in, and ancient hieroglyphs are carved into the walls.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_2_2_1',
      cards: ['CH2_EV02', 'CH2_EV03'],
      result: 'Through Kael\'s hidden laboratory and shocking research notes, you meet the shadow merchant.',
      unlock: 'CH2_CH03'
    },
    {
      id: 'rule_2_2_2',
      cards: ['CH2_CH03', 'CH2_LC02'],
      result: 'Through the shadow merchant and the sunken market, you discover the client\'s desperate commission.',
      unlock: 'CH2_EV05'
    },
    {
      id: 'rule_2_2_3',
      cards: ['CH2_EV05', 'CH2_LC04'],
      result: 'Through the client\'s commission and the secret section of the laboratory, you discover Elara\'s intercepted confession.',
      unlock: 'CH2_EV08'
    },
    {
      id: 'rule_2_2_4',
      cards: ['CH2_EV08', 'CH2_CH05'],
      result: 'Through Elara\'s confession and the witness to the experiments, you discover the connection to deep-sea entities.',
      unlock: 'CH2_EV10'
    },
    {
      id: 'rule_2_2_5',
      cards: ['CH2_EV03', 'CH2_LC05'],
      result: 'Through the shocking research notes and the deep waterway depths, you meet the witness to the experiments.',
      unlock: 'CH2_CH05'
    },
    {
      id: 'rule_2_2_6',
      cards: ['CH2_EV10', 'CH2_LC05'],
      result: 'Through the connection to deep-sea entities and the deep waterway depths, you learn the alchemist\'s true purpose.',
      unlock: 'CH2_FINAL'
    },
    {
      id: 'rule_2_2_7',
      cards: ['CH2_EV02', 'CH2_EV08'],
      result: 'Through Kael\'s laboratory and Elara\'s confession, you reach the alchemist\'s true purpose.',
      unlock: 'CH2_FINAL'
    },
    {
      id: 'rule_2_2_8',
      cards: ['CH2_LC04', 'CH2_CH03'],
      result: 'Through the secret section of the laboratory and the shadow merchant, you confirm the alchemist\'s true purpose.',
      unlock: 'CH2_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH2_FINAL',
  initialCards: [
    'CH2_EV02', // Kael's Hidden Laboratory
    'CH2_EV03', // Shocking Research Notes
    'CH2_LC02'  // The Sunken Market
  ]
};