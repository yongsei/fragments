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

export const case6ch1En: GameScenario = {
  id: 'case6_chapter1',
  title: 'The Whispering Manuscript',
  story: 'The discovery of a seemingly ordinary glowing manuscript in the Great Library quickly spirals into a complex web of secrets. Players must explore the library\'s forbidden sections, encounter the enigmatic Head Librarian Elara, and piece together initial clues about the mysterious "Luminous Plague" and a hidden world beneath the city. This chapter sets the stage for deeper investigation into a conspiracy threatening the city, introducing key characters and locations.',
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
      id: 'CH1_EV03',
      name: 'Elara\'s Personal Journal',
      description: 'Elara\'s hidden diary filled with frantic handwriting documenting research on the "Luminous Plague."',
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
      id: 'CH1_FINAL',
      name: 'The Manuscript\'s True Secret',
      description: 'The final truth of the whispering manuscript revealed through the combination of all evidence and clues.',
      details: 'It is revealed that the glowing manuscript is not merely an ancient document, but a powerful conduit connecting deep-sea entities to the surface world.',
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
      id: 'CH1_LC03',
      name: 'The Great Library\'s Secret Annex',
      description: 'Elara\'s secret laboratory hidden behind bookshelves, containing strange artifacts and luminous materials.',
      details: 'Smells of ozone and ancient magic, with charts of unknown constellations hanging on the walls.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_CH1_1',
      cards: ['CH1_EV01', 'CH1_CH01'],
      result: 'Investigating the glowing manuscript with Librarian Elara reveals her personal journal.',
      unlock: 'CH1_EV03'
    },
    {
      id: 'rule_CH1_2',
      cards: ['CH1_EV01', 'CH1_LC01'],
      result: 'Examining the glowing manuscript more closely in the forbidden section leads you to meet the anxious apprentice Jonas.',
      unlock: 'CH1_CH02'
    },
    {
      id: 'rule_CH1_3',
      cards: ['CH1_CH01', 'CH1_LC01'],
      result: 'Exploring the forbidden section with Elara brings the skeptical guard Sergeant Thorne to the scene.',
      unlock: 'CH1_CH03'
    },
    {
      id: 'rule_CH1_4',
      cards: ['CH1_EV03', 'CH1_CH03'],
      result: 'Showing Elara\'s journal to Sergeant Thorne prompts him to share the city guard\'s missing persons report.',
      unlock: 'CH1_EV06'
    },
    {
      id: 'rule_CH1_5',
      cards: ['CH1_EV06', 'CH1_CH01'],
      result: 'After seeing the missing persons report, Elara reveals the threatening warning letter she received from the deep.',
      unlock: 'CH1_EV07'
    },
    {
      id: 'rule_CH1_6',
      cards: ['CH1_EV07', 'CH1_CH02'],
      result: 'Frightened by the warning letter, Jonas makes a secret confession about witnessing Elara\'s strange rituals.',
      unlock: 'CH1_EV08'
    },
    {
      id: 'rule_CH1_7',
      cards: ['CH1_EV08', 'CH1_LC01'],
      result: 'Based on Jonas\'s testimony, searching the forbidden section reveals the secret annex.',
      unlock: 'CH1_LC03'
    },
    {
      id: 'rule_CH1_8',
      cards: ['CH1_LC03', 'CH1_EV01'],
      result: 'In the secret annex, the true secret of the glowing manuscript is fully revealed.',
      unlock: 'CH1_FINAL'
    }
  ],
  fragments: [],
  winCondition: 'CH1_FINAL',
  initialCards: [
    'CH1_EV01',
    'CH1_LC01',
    'CH1_CH01'
  ]
};