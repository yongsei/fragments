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

export const case6ch2En: GameScenario = {
  id: 'case6_chapter2',
  title: 'The Alchemist\'s Shadow',
  story: 'Following the disturbing clues from the Great Library, the investigation leads to the city\'s murky waterways, where the mysterious "Luminous Plague" claims its first victim. The trail points to Kael, a disgraced alchemist operating from a hidden, grotesque laboratory. As players uncover Kael\'s shocking research notes, failed experiments, and sinister ingredient lists, the true horrific nature of the plague and Kael\'s desperate pursuit of immortality are revealed, exposing a conspiracy far darker than initially imagined.',
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
      id: 'CH2_EV02',
      name: 'Kael\'s Hidden Laboratory',
      description: 'A secret laboratory hidden deep in the waterways, filled with bubbling distillers and grotesque experiments.',
      details: 'Charts depicting the fusion of human and marine biology hang on the walls, revealing Kael\'s twisted research.',
      location: ''
    },
    {
      id: 'CH2_EV03',
      name: 'Shocking Research Notes',
      description: 'Research notes written in Kael\'s frantic handwriting, documenting an obsessive pursuit of the "Elixir of Life."',
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
      id: 'CH2_FINAL',
      name: 'The Alchemist\'s True Purpose',
      description: 'Kael\'s ultimate goal revealed through the combination of all evidence and clues.',
      details: 'It is fully revealed that Kael\'s alchemical experiments were not for immortality, but part of a ritual to summon ancient deep-sea entities to the surface world.',
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
      id: 'CH2_LC02',
      name: 'The Sunken Market',
      description: 'A hidden illegal market operating in caves beneath the city, where rare materials and secrets are traded.',
      details: 'Accessible only through waterway passages, this is where Kael conducts his clandestine dealings.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_CH2_1',
      cards: ['CH2_EV01', 'CH2_CH02'],
      result: 'Investigating the first victim with the waterway cleaner reveals the labyrinthine passages deep in the waterways.',
      unlock: 'CH2_LC01'
    },
    {
      id: 'rule_CH2_2',
      cards: ['CH2_EV01', 'CH2_CH01'],
      result: 'Analyzing the first victim\'s condition with Kael leads you to encounter the desperate noble.',
      unlock: 'CH2_CH04'
    },
    {
      id: 'rule_CH2_3',
      cards: ['CH2_CH01', 'CH2_CH02'],
      result: 'When Kael and the waterway cleaner explore the waterways together, they discover Kael\'s hidden laboratory.',
      unlock: 'CH2_EV02'
    },
    {
      id: 'rule_CH2_4',
      cards: ['CH2_EV02', 'CH2_CH01'],
      result: 'In Kael\'s laboratory, you discover his frantic research notes.',
      unlock: 'CH2_EV03'
    },
    {
      id: 'rule_CH2_5',
      cards: ['CH2_EV03', 'CH2_CH04'],
      result: 'Showing the research notes to the desperate noble prompts him to reveal the commission letter he sent to Kael.',
      unlock: 'CH2_EV05'
    },
    {
      id: 'rule_CH2_6',
      cards: ['CH2_EV05', 'CH2_LC01'],
      result: 'Following the clues in the commission letter and searching the waterways reveals the sunken market.',
      unlock: 'CH2_LC02'
    },
    {
      id: 'rule_CH2_7',
      cards: ['CH2_LC02', 'CH2_EV02'],
      result: 'Connecting the sunken market with Kael\'s laboratory reveals Elara\'s intercepted confession.',
      unlock: 'CH2_EV08'
    },
    {
      id: 'rule_CH2_8',
      cards: ['CH2_EV08', 'CH2_EV03'],
      result: 'Combining Elara\'s confession with Kael\'s research notes fully reveals the alchemist\'s true purpose.',
      unlock: 'CH2_FINAL'
    }
  ],
  fragments: [],
  winCondition: 'CH2_FINAL',
  initialCards: [
    'CH2_EV01',
    'CH2_CH01',
    'CH2_CH02'
  ]
};