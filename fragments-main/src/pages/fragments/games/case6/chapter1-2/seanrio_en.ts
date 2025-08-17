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

export const case6ch1_2_en: GameScenario = {
  id: 'case6_chapter1_2',
  title: 'Forbidden Knowledge',
  story: 'After discovering the first clue, the detective begins to delve deeper into the secrets. Through Elara\'s personal journal, they discover her research on the Luminous Plague, and through the city guard\'s preliminary report, they confirm disappearances near the waterways. Through cryptic warnings from the deep and Jonas\'s secret confession, they come to realize the manuscript\'s true secret and the existence of a hidden world beneath the city.',
  victim: '',
  
  suspects: [
    {
      id: 'CH1_CH04',
      name: 'The Mysterious Visitor',
      role: 'Character',
      description: 'An unidentified figure who appeared at the library, showing strange interest in the manuscript and leaving warning messages.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH1_CH05',
      name: 'Guardian of Ancient Knowledge',
      role: 'Character',
      description: 'A mysterious being who seems to know the true meaning of the manuscript, appearing from the depths of the library to deliver warnings.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH1_EV03',
      name: 'Elara\'s Personal Journal',
      description: 'Elara\'s hidden diary filled with frantic handwriting documenting research on the Luminous Plague.',
      details: 'Contains desperate attempts to find a cure and traces of personal anguish.',
      location: ''
    },
    {
      id: 'CH1_EV06',
      name: 'City Guard Preliminary Report',
      description: 'An official report documenting disappearances near the waterways, noting silver luminescence observed on victims\' skin.',
      details: 'Shows a phenomenon similar to the manuscript\'s glow, indicating growing concern among city authorities.',
      location: ''
    },
    {
      id: 'CH1_EV07',
      name: 'Cryptic Warning from the Deep',
      description: 'A threatening letter sent to Elara, bearing a kraken seal and waterproof treatment.',
      details: 'Contains an ominous warning to stop meddling in affairs of the deep.',
      location: ''
    },
    {
      id: 'CH1_EV08',
      name: 'Jonas\'s Secret Confession',
      description: 'A hastily written note hidden by Jonas, confessing to witnessing Elara\'s strange rituals.',
      details: 'Expresses fear and guilt that she might be the cause of the Luminous Plague.',
      location: ''
    },
    {
      id: 'CH1_EV09',
      name: 'Hidden Pages of the Manuscript',
      description: 'Newly discovered hidden pages from the manuscript containing even more dangerous and forbidden knowledge.',
      details: 'Contains methods of communicating with deep-sea entities and rituals to summon them to the surface.',
      location: ''
    },
    {
      id: 'CH1_EV11',
      name: 'Secrets Beneath the City',
      description: 'The hidden world beneath the city that all manuscript-related clues point to.',
      details: 'Traces of ancient civilization connected through waterways and areas where deep-sea entities\' influence reaches.',
      location: ''
    },
    {
      id: 'CH1_FINAL',
      name: 'The Manuscript\'s True Secret',
      description: 'The final truth of the whispering manuscript revealed through the combination of all evidence and clues.',
      details: 'It is revealed that the glowing manuscript is not merely an ancient document, but a powerful conduit connecting deep-sea entities to the surface world.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'CH1_LC03',
      name: 'The Great Library\'s Secret Annex',
      description: 'Elara\'s secret laboratory hidden behind bookshelves, containing strange artifacts and luminous materials.',
      details: 'Smells of ozone and ancient magic, with charts of unknown constellations hanging on the walls.'
    },
    {
      id: 'CH1_LC04',
      name: 'Underground Waterway Entrance',
      description: 'An entrance to ancient waterways discovered in the library\'s basement, serving as a gateway to the hidden world beneath the city.',
      details: 'Smells of moisture and seawater, with ancient civilization hieroglyphs carved into the walls.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_1_2_1',
      cards: ['CH1_EV03', 'CH1_LC03'],
      result: 'Through Elara\'s personal journal and the secret annex, you meet the mysterious visitor.',
      unlock: 'CH1_CH04'
    },
    {
      id: 'rule_1_2_2',
      cards: ['CH1_EV06', 'CH1_EV07'],
      result: 'Through the city guard report and the warning from the deep, you discover Jonas\'s secret confession.',
      unlock: 'CH1_EV08'
    },
    {
      id: 'rule_1_2_3',
      cards: ['CH1_EV08', 'CH1_CH04'],
      result: 'Through Jonas\'s secret confession and the mysterious visitor, you discover the hidden pages of the manuscript.',
      unlock: 'CH1_EV09'
    },
    {
      id: 'rule_1_2_4',
      cards: ['CH1_EV09', 'CH1_LC04'],
      result: 'Through the hidden pages of the manuscript and the underground waterway entrance, you meet the guardian of ancient knowledge.',
      unlock: 'CH1_CH05'
    },
    {
      id: 'rule_1_2_5',
      cards: ['CH1_CH05', 'CH1_EV07'],
      result: 'Through the guardian of ancient knowledge and the warning from the deep, you learn about the secrets beneath the city.',
      unlock: 'CH1_EV11'
    },
    {
      id: 'rule_1_2_6',
      cards: ['CH1_EV03', 'CH1_EV06'],
      result: 'Through Elara\'s journal and the guard report, you receive the warning from the deep.',
      unlock: 'CH1_EV07'
    },
    {
      id: 'rule_1_2_7',
      cards: ['CH1_EV11', 'CH1_EV09'],
      result: 'Through the secrets beneath the city and the hidden pages of the manuscript, you reach the manuscript\'s true secret.',
      unlock: 'CH1_FINAL'
    },
    {
      id: 'rule_1_2_8',
      cards: ['CH1_LC04', 'CH1_LC03'],
      result: 'Through the underground waterway entrance and the secret annex, you confirm the manuscript\'s true secret.',
      unlock: 'CH1_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH1_FINAL',
  initialCards: [
    'CH1_EV03', // Elara's Personal Journal
    'CH1_EV06', // City Guard Preliminary Report
    'CH1_LC03'  // The Great Library's Secret Annex
  ]
};