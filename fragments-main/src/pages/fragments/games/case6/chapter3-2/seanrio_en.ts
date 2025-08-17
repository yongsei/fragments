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

export const case6ch3_2_en: GameScenario = {
  id: 'case6_chapter3_2',
  title: 'Completing the Web of Deception',
  story: 'After taking the first step toward truth, the detective must navigate through a complex web of deception. They discover Elara\'s encrypted message from the abandoned bank vault and confirm a direct connection to Kael through the third victim\'s personal locket. This is the moment when all clues and evidence combine to reveal the ultimate goal hidden behind the web of deception.',
  victim: '',
  
  suspects: [
    {
      id: 'CH3_CH02',
      name: 'The Anonymous Informant',
      role: 'Character',
      description: 'A mysterious figure who claims Elara\'s innocence and alerts others to the existence of the real culprit.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH3_CH05',
      name: 'The Political Manipulator',
      role: 'Character',
      description: 'A high-ranking official who seeks to exploit the case politically, pursuing stability over truth.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH3_EV06',
      name: 'Elara\'s Encrypted Message from Prison',
      description: 'An encrypted message secretly sent by Elara from prison, containing a plea to find the "Sunken Cathedral."',
      details: 'She believes it to be the true source of the luminous algae and the key to stopping the plague.',
      location: ''
    },
    {
      id: 'CH3_EV08',
      name: 'The Third Victim\'s Personal Locket',
      description: 'A silver locket found clutched in the victim\'s hand, containing a portrait of Kael inside.',
      details: 'Shows a direct connection between Kael and the victim, proving Elara\'s innocence.',
      location: ''
    },
    {
      id: 'CH3_EV05',
      name: 'Political Cover-up Attempts',
      description: 'Attempts by high-ranking officials to cover up the case, prioritizing political stability over truth.',
      details: 'Reveals political intentions to make Elara a scapegoat for a quick resolution.',
      location: ''
    },
    {
      id: 'CH3_EV09',
      name: 'Kael\'s Real Plan',
      description: 'Kael\'s true plan revealed by synthesizing all evidence - it\'s not a simple alchemical experiment.',
      details: 'It was part of a large-scale ritual to summon ancient deep-sea entities to the surface.',
      location: ''
    },
    {
      id: 'CH3_FINAL',
      name: 'The True Purpose of the Web of Deception',
      description: 'Decisive evidence that reveals the ultimate goal hidden behind the web of deception through the combination of all clues and evidence.',
      details: 'It is fully revealed that Kael\'s alchemical experiments were not for immortality, but part of a ritual to summon ancient entities from the abyss to the surface world.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'CH3_LC03',
      name: 'The Abandoned Bank Vault',
      description: 'A forgotten vault in the basement of an old bank where Kael\'s anonymous clients stored secret documents.',
      details: 'The massive steel door stands half-open, with the smell of old paper and forgotten wealth.'
    },
    {
      id: 'CH3_LC04',
      name: 'Center of Political Conspiracy',
      description: 'A place where secret meetings of high-ranking officials are held, where political manipulation of the case is planned.',
      details: 'Smells of power, with political intentions that pursue stability over truth lingering in the air.'
    },
    {
      id: 'CH3_LC05',
      name: 'Crossroads of Truth',
      description: 'A symbolic place where all clues meet, where the web of deception is fully revealed.',
      details: 'Here, Kael\'s true purpose and the political conspiracy are connected as one.'
    },
    {
      id: 'CH3_LC06',
      name: 'Light of Hope',
      description: 'A symbolic space after Elara\'s innocence is proven and the truth is revealed.',
      details: 'A hopeful place where the light of truth begins to shine through the darkness.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_3_2_1',
      cards: ['CH3_EV06', 'CH3_LC03'],
      result: 'Through Elara\'s encrypted message and the abandoned bank vault, you meet the anonymous informant.',
      unlock: 'CH3_CH02'
    },
    {
      id: 'rule_3_2_2',
      cards: ['CH3_EV08', 'CH3_CH02'],
      result: 'Through the third victim\'s locket and the anonymous informant, you discover political cover-up attempts.',
      unlock: 'CH3_EV05'
    },
    {
      id: 'rule_3_2_3',
      cards: ['CH3_EV05', 'CH3_LC04'],
      result: 'Through political cover-up attempts and the center of political conspiracy, you meet the political manipulator.',
      unlock: 'CH3_CH05'
    },
    {
      id: 'rule_3_2_4',
      cards: ['CH3_CH05', 'CH3_EV06'],
      result: 'Through the political manipulator and Elara\'s message, you learn about Kael\'s real plan.',
      unlock: 'CH3_EV09'
    },
    {
      id: 'rule_3_2_5',
      cards: ['CH3_EV09', 'CH3_LC05'],
      result: 'Through Kael\'s real plan and the crossroads of truth, you learn the true purpose of the web of deception.',
      unlock: 'CH3_FINAL'
    },
    {
      id: 'rule_3_2_6',
      cards: ['CH3_EV08', 'CH3_EV05'],
      result: 'Through the victim\'s locket and political cover-up attempts, you reach the true purpose of the web of deception.',
      unlock: 'CH3_FINAL'
    },
    {
      id: 'rule_3_2_7',
      cards: ['CH3_LC03', 'CH3_LC04'],
      result: 'Through the bank vault and the center of political conspiracy, you confirm the true purpose of the web of deception.',
      unlock: 'CH3_FINAL'
    },
    {
      id: 'rule_3_2_8',
      cards: ['CH3_FINAL', 'CH3_LC06'],
      result: 'As the true purpose of the web of deception is revealed, the light of hope begins to shine.',
      unlock: 'CH3_LC06'
    }
  ],

  fragments: [],
  winCondition: 'CH3_FINAL',
  initialCards: [
    'CH3_EV06', // Elara's Encrypted Message from Prison
    'CH3_EV08', // The Third Victim's Personal Locket
    'CH3_LC03'  // The Abandoned Bank Vault
  ]
};