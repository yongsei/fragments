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

export const case7ch1En: GameScenario = {
  id: 'c7_chapter_1',
  title: 'The Unwelcome Guest',
  story: 'The detective arrives at Blackwood Manor upon Eleanor\'s request. Through the reading of the will, they witness the family\'s deep-rooted conflicts and inheritance issues. During the first investigation of the crime scene - the study - they discover suspicious clues that the police missed, including \'missing footprints\' and \'scratches on the railing.\' The chapter concludes with hearing from the housekeeper about the curse of the \'Weeping Woman\' that haunts the manor.',
  victim: 'A14', // Lord Alistair Blackwood
  
  suspects: [
    {
      id: 'A01',
      name: 'The Detective\'s Arrival',
      role: 'Detective',
      description: 'On a late autumn night with drizzling rain, you arrive at Blackwood Manor after receiving Eleanor Blackwood\'s letter. The manor exudes an ominous and eerie atmosphere, and you sense a premonition of the mystery you are about to face.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A02',
      name: 'Eleanor Blackwood',
      role: 'Client',
      description: 'Lord Alistair\'s daughter and the person who commissioned you to investigate the case. She truly loved her father and intuitively feels that his death was not a simple accident. Though pale and anxious, she possesses a strong will to uncover the truth.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A08',
      name: 'Mrs. Gable',
      role: 'Housekeeper',
      description: 'An elderly housekeeper who has served the Blackwood family for decades. She knows all the secrets of the manor but refuses to speak due to her blind loyalty to the family. She firmly believes in the curse of the \'Weeping Woman\' that haunts the manor.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A11',
      name: 'Arthur Blackwood',
      role: 'Suspect',
      description: 'Lord Alistair\'s son and sole heir. His arrogant and dissolute lifestyle has led him to accumulate massive gambling debts. He desperately needs his father\'s inheritance and appears willing to do anything to secure it. He argues with Beatrice after the will reading.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A12',
      name: 'Lady Beatrice Blackwood',
      role: 'Suspect',
      description: 'Lord Alistair\'s wife. Cold and calculating by nature, she values the family\'s honor and her own social status above all else. Even in the face of her husband\'s death, she seems more concerned about her own future than grief. She conflicts with Arthur over inheritance matters.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A13',
      name: 'Sebastian Son',
      role: 'Suspect',
      description: 'A distant relative of Lord Alistair who stays at the manor while pursuing his writing career as a taciturn author. He was financially dependent on the Lord and always quietly observes his surroundings while recording something. His true intentions are difficult to discern.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A14',
      name: 'Lord Alistair Blackwood',
      role: 'Victim',
      description: 'The head of the Blackwood family and the deceased. He was a wealthy lord with a strict and authoritative personality who had recently become greatly disappointed and disillusioned with his family\'s hypocrisy and greed. He was found dead after falling from the study.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'A04',
      name: 'Reading of the Will',
      description: 'The reading of Lord Alistair\'s will takes place in the drawing room. Arthur becomes the conditional heir, and sharp arguments between Beatrice and Arthur openly reveal the family\'s conflicts. Other family members cannot hide their disappointment at receiving almost nothing.',
      details: '',
      location: ''
    },
    {
      id: 'A06',
      name: 'Missing Footprints',
      description: 'Faint muddy footprints remain on the carpet leading to the balcony where the Lord fell. However, there are only traces of going out to the balcony, with no evidence of returning inside, suggesting that the Lord\'s death was not a simple accidental fall.',
      details: '',
      location: ''
    },
    {
      id: 'A07',
      name: 'Scratches on the Railing',
      description: 'Sharp marks, apparently scratched by a metallic object, are found on the heavy marble railing of the balcony. They are located slightly away from where the Lord might have grabbed while falling, suggesting there was a struggle with someone.',
      details: '',
      location: ''
    },
    {
      id: 'A09',
      name: 'Curse of the Weeping Woman',
      description: 'An old legend haunting the manor mentioned by Mrs. Gable. On rainy nights, the sound of a woman\'s weeping can be heard in the manor corridors, and those who see her are said to meet misfortune. This highlights the supernatural aspect of the case.',
      details: '',
      location: ''
    },
    {
      id: 'A15',
      name: 'Conditions of the Will',
      description: 'The demanding condition that Arthur must \'prove his character\' to inherit the Lord\'s estate. This condition is connected to Arthur\'s dissolute lifestyle and provides the reason why he desperately needs the inheritance.',
      details: '',
      location: ''
    },
    {
      id: 'A16',
      name: 'Family Conflicts',
      description: 'The deep-rooted conflicts of the Blackwood family revealed through Arthur and Beatrice\'s arguments after the will reading and other family members\' disappointment. This could provide motives related to the Lord\'s death.',
      details: '',
      location: ''
    },
    {
      id: 'A20',
      name: 'Suspicions of the First Night',
      description: 'The moment when the detective becomes convinced that the Lord\'s death was not a simple accident through the will reading, study investigation, and Mrs. Gable\'s story on the first night at the manor. The mystery of the case deepens.',
      details: '',
      location: ''
    }
  ],

  locations: [
    {
      id: 'A03',
      name: 'Blackwood Manor',
      description: 'A massive Gothic-style manor located in the middle of the moors in northern England in the late 19th century. It exudes an old and decaying atmosphere that has endured hundreds of years, and frequent rain and fog create a perpetually damp and eerie aura.',
      details: ''
    },
    {
      id: 'A05',
      name: 'Study Balcony',
      description: 'The location where Lord Alistair fell to his death. It is situated beyond the large window that occupies one wall of the study. This is where the first questions about the Lord\'s death begin.',
      details: ''
    },
    {
      id: 'A10',
      name: 'Central Hall',
      description: 'The first space encountered upon entering the manor. A grand staircase leads to the second floor, and a cobweb-covered chandelier hangs from the high ceiling. This is where the family gathers to read the will and where the detective first meets the family members.',
      details: ''
    },
    {
      id: 'A17',
      name: 'Atmosphere of the Study',
      description: 'The study where the incident occurred still maintains an ominous and heavy atmosphere despite the police investigation being completed. The detective discovers subtle clues that the police missed and approaches the truth of the case.',
      details: ''
    },
    {
      id: 'A18',
      name: 'Arrival of the Carriage',
      description: 'The carriage used by the detective to arrive at Blackwood Manor. It stops in front of the manor with creaking sounds, serving as a symbolic location that announces the beginning of the case.',
      details: ''
    },
    {
      id: 'A19',
      name: 'Old Library',
      description: 'A dusty library located inside the manor. It houses old books recording the history of the Blackwood family and is a place where clues about the legend of the \'Weeping Woman\' can be found.',
      details: ''
    }
  ],

  connectionRules: [
    {
      id: 'rule_A05',
      cards: ['A03', 'A04'],
      result: 'Through the will reading at Blackwood Manor, you develop questions about the study balcony.',
      unlock: 'A05'
    },
    {
      id: 'rule_A06',
      cards: ['A05', 'A01'],
      result: 'Through the detective\'s investigation and clues from the balcony, you discover the missing footprints.',
      unlock: 'A06'
    },
    {
      id: 'rule_A07',
      cards: ['A05', 'A02'],
      result: 'Through Eleanor\'s commission and clues from the balcony, you discover the scratches on the railing.',
      unlock: 'A07'
    },
    {
      id: 'rule_A08',
      cards: ['A01', 'A02'],
      result: 'Through the meeting between the detective and Eleanor, you learn about the housekeeper Mrs. Gable.',
      unlock: 'A08'
    },
    {
      id: 'rule_A09',
      cards: ['A08', 'A10'],
      result: 'Through Mrs. Gable and the atmosphere of the central hall, you hear the story of the Weeping Woman\'s curse.',
      unlock: 'A09'
    },
    {
      id: 'rule_A10',
      cards: ['A01', 'A03'],
      result: 'The detective arrives at Blackwood Manor and encounters the central hall.',
      unlock: 'A10'
    },
    {
      id: 'rule_A11',
      cards: ['A04', 'A10'],
      result: 'Through the will reading held in the central hall, you meet Arthur Blackwood.',
      unlock: 'A11'
    },
    {
      id: 'rule_A12',
      cards: ['A02', 'A10'],
      result: 'Through Eleanor and the atmosphere of the central hall, you meet Lady Beatrice Blackwood.',
      unlock: 'A12'
    },
    {
      id: 'rule_A13',
      cards: ['A02', 'A19'],
      result: 'Through Eleanor and the atmosphere of the old library, you learn about Sebastian Son.',
      unlock: 'A13'
    },
    {
      id: 'rule_A14',
      cards: ['A03', 'A05'],
      result: 'Through Blackwood Manor and the study balcony, you confirm Lord Alistair Blackwood\'s death.',
      unlock: 'A14'
    },
    {
      id: 'rule_A15',
      cards: ['A04', 'A11'],
      result: 'Through the will reading and Arthur\'s situation, you learn about the conditions of the will.',
      unlock: 'A15'
    },
    {
      id: 'rule_A16',
      cards: ['A11', 'A12'],
      result: 'Through the conflict between Arthur and Beatrice, you witness the deep-rooted family conflicts.',
      unlock: 'A16'
    },
    {
      id: 'rule_A17',
      cards: ['A06', 'A07'],
      result: 'Through the missing footprints and scratches on the railing, you feel the ominous atmosphere of the study and realize the seriousness of the case.',
      unlock: 'A17'
    },
    {
      id: 'rule_A18',
      cards: ['A01', 'A18'],
      result: 'Through the detective\'s arrival and the arrival of the carriage, you receive your first impression of the manor.',
      unlock: 'A18'
    },
    {
      id: 'rule_A19',
      cards: ['A03', 'A09'],
      result: 'Through Blackwood Manor and the curse of the Weeping Woman, you learn about the existence of the old library.',
      unlock: 'A19'
    },
    {
      id: 'rule_A20',
      cards: ['A17', 'A19'],
      result: 'Through the atmosphere of the study and the old library, you develop suspicions about the case from the first night.',
      unlock: 'A20'
    },
    {
      id: 'rule_A20_alt',
      cards: ['A16', 'A18'],
      result: 'Through the family conflicts and the arrival of the carriage, you become convinced of your suspicions from the first night.',
      unlock: 'A20'
    }
  ],

  fragments: [], 
  winCondition: "A20", // Suspicions of the First Night
  initialCards: [ 
    'A01', // The Detective's Arrival
    'A02', // Eleanor Blackwood
    'A03', // Blackwood Manor
    'A04', // Reading of the Will
    'A18'  // Arrival of the Carriage
  ]
};