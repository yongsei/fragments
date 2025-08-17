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

export const case6ch1_1_en: GameScenario = {
  id: 'case6_chapter1_1',
  title: 'Discovery in the Library',
  story: 'The discovery of a seemingly ordinary glowing manuscript in the Great Library quickly spirals into a complex web of secrets. The detective explores the library\'s forbidden sections, encounters the enigmatic Head Librarian Elara, and discovers initial clues about the mysterious Luminous Plague. Through the anxious apprentice Jonas and the skeptical guard Sergeant Thorne, they begin to sense the existence of dark secrets hidden within the library.',
  victim: '',
  
  suspects: [
    {
      id: 'CH1_CH01',
      name: 'Elara, Guardian of Forbidden Knowledge',
      role: 'Character',
      description: 'The sharp-eyed Head Librarian with silver hair and half-moon spectacles, who guards the library\'s dangerous secrets.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH1_CH02',
      name: 'Jonas, the Anxious Apprentice',
      role: 'Character',
      description: 'A young apprentice librarian who is constantly nervous, avoids eye contact, and has trembling hands, seemingly burdened by some secret.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH1_CH03',
      name: 'Sergeant Thorne, the Skeptical Guard',
      role: 'Character',
      description: 'A seasoned city guard sergeant who doesn\'t believe in magic or supernatural phenomena, trusting only evidence and logic.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH1_EV01',
      name: 'Faintly Glowing Manuscript',
      description: 'An ancient manuscript discovered deep within the library, made of kelp-like material and emitting a soft glow.',
      details: 'Written in a forgotten language with celestial and alchemical symbols, suggesting hidden knowledge.',
      location: ''
    },
    {
      id: 'CH1_EV02',
      name: 'Translation of Ancient Language',
      description: 'A portion of the manuscript decoded by Elara, containing content about rituals connecting ancient deep-sea entities to the surface world.',
      details: 'The translated content is incomplete but reveals fragments of dangerous knowledge.',
      location: ''
    },
    {
      id: 'CH1_EV04',
      name: 'Jonas\'s Testimony',
      description: 'Strange phenomena witnessed by Jonas, testified with a trembling voice - eerie sounds heard at night and moving shadows.',
      details: 'His testimony suggests supernatural phenomena are occurring in the library.',
      location: ''
    },
    {
      id: 'CH1_EV05',
      name: 'Sergeant Thorne\'s Skepticism',
      description: 'Rational explanations provided by Sergeant Thorne, who argues that all phenomena have logical causes.',
      details: 'His skeptical perspective offers a different viewpoint on the events.',
      location: ''
    },
    {
      id: 'CH1_EV10',
      name: 'Library\'s Anomalous Signs',
      description: 'A series of strange incidents recently occurring in the library - books moving by themselves and candles extinguishing.',
      details: 'These phenomena coincide temporally with the manuscript\'s discovery.',
      location: ''
    },
    {
      id: 'CH1_EV10_FINAL',
      name: 'Discovery of the First Clue',
      description: 'The first important discovery formed by gathering initial clues related to the manuscript.',
      details: 'A decisive moment that hints at the existence of a greater secret hidden in the library.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'CH1_LC01',
      name: 'The Great Library\'s Forbidden Section',
      description: 'A secret section of the library with towering shelves in darkness, where dangerous books are stored.',
      details: 'Protected by velvet ropes and ancient magic, accessible only to the privileged few.'
    },
    {
      id: 'CH1_LC02',
      name: 'Ancient Document Repository',
      description: 'A special repository located deep within the library where the oldest and most dangerous documents are stored.',
      details: 'Surrounded by strict security and magical barriers, this is where the manuscript was discovered.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_1_1_1',
      cards: ['CH1_EV01', 'CH1_LC01'],
      result: 'Through the faintly glowing manuscript and the forbidden section, you meet Elara.',
      unlock: 'CH1_CH01'
    },
    {
      id: 'rule_1_1_2',
      cards: ['CH1_CH01', 'CH1_EV01'],
      result: 'Through Elara and the glowing manuscript, you obtain the translation of the ancient language.',
      unlock: 'CH1_EV02'
    },
    {
      id: 'rule_1_1_3',
      cards: ['CH1_LC01', 'CH1_CH02'],
      result: 'In the forbidden section, you meet the anxious apprentice Jonas.',
      unlock: 'CH1_CH02'
    },
    {
      id: 'rule_1_1_4',
      cards: ['CH1_CH02', 'CH1_EV10'],
      result: 'Through Jonas and the library\'s anomalous signs, you hear his testimony.',
      unlock: 'CH1_EV04'
    },
    {
      id: 'rule_1_1_5',
      cards: ['CH1_EV04', 'CH1_CH03'],
      result: 'Through Jonas\'s testimony and the skeptical guard Sergeant Thorne, you hear his skepticism.',
      unlock: 'CH1_EV05'
    },
    {
      id: 'rule_1_1_6',
      cards: ['CH1_EV01', 'CH1_LC02'],
      result: 'Through the glowing manuscript and the ancient document repository, you confirm the library\'s anomalous signs.',
      unlock: 'CH1_EV10'
    },
    {
      id: 'rule_1_1_7',
      cards: ['CH1_EV02', 'CH1_EV04'],
      result: 'Through the translation of ancient language and Jonas\'s testimony, you reach the discovery of the first clue.',
      unlock: 'CH1_EV10_FINAL'
    },
    {
      id: 'rule_1_1_8',
      cards: ['CH1_EV05', 'CH1_EV10'],
      result: 'Through Sergeant Thorne\'s skepticism and the library\'s anomalous signs, you confirm the discovery of the first clue.',
      unlock: 'CH1_EV10_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH1_EV10_FINAL',
  initialCards: [
    'CH1_EV01', // Faintly Glowing Manuscript
    'CH1_LC01', // The Great Library's Forbidden Section
    'CH1_LC02'  // Ancient Document Repository
  ]
};