
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
  // 게임 설정 추가
  initialCards?: string[];
  winCondition?: string;
}// 임시 파일 - 빌드 오류 해결을 위한 최소한의 export



export const case7ch1En: GameScenario = {
  id: 'c7_chapter_1',
  title: 'An Unwelcome Guest',
  story: 'The detective arrives at Blackwood Manor at Eleanor\'s request. Through the reading of the will, they witness the deep-seated conflicts and inheritance issues among the family. Investigating the study, the scene of the crime, for the first time, they discover suspicious clues such as \'missing footprints\' and \'scratches on the railing\' that the police missed. The chapter concludes as they hear from the housekeeper about the curse of the \'Weeping Lady\' haunting the manor.',
  victim: 'A14', // Alistair Blackwood, Lord
  
  suspects: [
    {
      id: 'A01',
      name: 'The Detective\'s Arrival',
      role: 'Detective',
      description: 'On a late autumn night, with a misty rain falling, you arrive at Blackwood Manor after receiving a letter from Eleanor Blackwood. The manor exudes a gloomy and eerie atmosphere, and you feel a premonition of the mystery you are about to face.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A02',
      name: 'Eleanor Blackwood',
      role: 'Client',
      description: 'Lord Alistair\'s daughter and the one who requested your investigation. She truly loved her father and instinctively feels that his death was not a mere accident. Though pale and anxious, she possesses a strong will to uncover the truth.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A08',
      name: 'Mrs. Gable',
      role: 'Housekeeper',
      description: 'An elderly housekeeper who has served the Blackwood family for decades. She knows all the manor\'s secrets but remains silent due to her blind loyalty to the family. She firmly believes in the curse of the \'Weeping Lady\' that haunts the manor.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A11',
      name: 'Arthur Blackwood',
      role:'suspect',
      description: 'Lord Alistair\'s son and sole heir. He has accumulated massive gambling debts due to his arrogant and dissolute lifestyle. He desperately needs his father\'s inheritance and seems willing to do anything for it. He quarrels with Beatrice after the will reading.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A12',
      name: 'Lady Beatrice Blackwood',
      role:'suspect',
      description: 'Lord Alistair\'s wife. Cold and calculating, she values the family\'s honor and her social standing above all else. She seems more concerned with her own future than grieving her husband\'s death. She clashes with Arthur over the inheritance.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A13',
      name: 'sebastian Thorne',
      role:'suspect',
      description: 'Lord Alistair\'s distant relative, a taciturn writer who stays at the manor and pursues his literary work. He was financially dependent on the Lord and always quietly observes his surroundings, recording something. His true intentions are difficult to discern.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A14',
      name: 'Lord Alistair Blackwood',
      role: 'Victim',
      description: 'The head of the Blackwood family and the deceased. He was a wealthy lord with a strict and authoritarian personality, who had recently grown disillusioned with his family\'s hypocrisy and greed. He was found dead after falling from the study.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'A04',
      name: 'Reading of the Will',
      description: 'Lord Alistair\'s will is read in the drawing-room. Arthur becomes the conditional heir, and the family\'s conflicts are openly revealed through sharp arguments between Beatrice and Arthur. Other family members cannot hide their disappointment at receiving almost nothing.',
      details: '',
      location: ''
    },
    {
      id: 'A06',
      name: 'Missing Footprints',
      description: 'Faint muddy footprints remain on the carpet leading to the balcony from which the Lord fell. However, the footprints only show a path leading out to the balcony, with no signs of anyone returning, suggesting that the Lord\'s death was not a simple accident.',
      details: '',
      location: ''
    },
    {
      id: 'A07',
      name: 'scratches on the Railing',
      description: 'sharp marks, as if scratched by a metallic object, are found on the heavy marble railing of the balcony. They are located slightly away from where the Lord might have grasped if he had slipped, suggesting a struggle with someone.',
      details: '',
      location: ''
    },
    {
      id: 'A09',
      name: 'The Curse of the Weeping Lady',
      description: 'An old legend haunting the manor, mentioned by Mrs. Gable. It is said that on rainy nights, the sound of a woman weeping can be heard in the manor\'s corridors, and anyone who sees her faces misfortune. This highlights the supernatural aspect of the case.',
      details: '',
      location: ''
    },
    {
      id: 'A15',
      name: 'Conditions of the Will',
      description: 'A demanding condition that Arthur must \'prove his good conduct\' to inherit the Lord\'s estate. This condition is linked to Arthur\'s dissolute lifestyle and provides a reason why he desperately needs the inheritance.',
      details: '',
      location: ''
    },
    {
      id: 'A16',
      name: 'Family Conflicts',
      description: 'The deep-seated conflicts within the Blackwood family, revealed through the arguments between Arthur and Beatrice after the will reading, and the disappointment of other family members. This could provide a motive related to the Lord\'s death.',
      details: '',
      location: ''
    },
    {
      id: 'A20',
      name: 'suspicion on the First Night',
      description: 'On the detective\'s first night at the manor, through the will reading, the study investigation, and Mrs. Gable\'s story, they become convinced that the Lord\'s death was not a mere accident. The mystery of the case deepens.',
      details: '',
      location: ''
    }
  ],

  locations: [
    {
      id: 'A03',
      name: 'Blackwood Manor',
      description: 'A vast Gothic manor located in the middle of the moors in northern England in the late 19th century. It exudes an old and decaying atmosphere, bearing centuries of history, and is always damp and eerie due to frequent rain and fog.',
      details: '',
      location: ''
    },
    {
      id: 'A05',
      name: 'The Study Balcony',
      description: 'The place where Lord Alistair fell to his death. It is located beyond a large window that occupies one wall of the study. Here, the first questions about the Lord\'s death begin.',
      details: '',
      location: ''
    },
    {
      id: 'A10',
      name: 'The Central Hall',
      description: 'The first space encountered upon entering the manor. A grand staircase leads to the second floor, and a chandelier covered in cobwebs hangs from the high ceiling. It is where the family gathers for the will reading and where the detective first confronts the family.',
      details: '',
      location: ''
    },
    {
      id: 'A17',
      name: 'Atmosphere of the Study',
      description: 'Despite the police investigation being over, the study, where the incident occurred, still exudes a gloomy and heavy atmosphere. Here, the detective discovers subtle clues missed by the police, drawing closer to the truth of the case.',
      details: '',
      location: ''
    },
    {
      id: 'A18',
      name: 'Arrival of the Carriage',
      description: 'The carriage the detective used to arrive at Blackwood Manor. It creaks to a halt in front of the manor, a symbolic location marking the beginning of the case.',
      details: '',
      location: ''
    },
    {
      id: 'A19',
      name: 'The Old Library',
      description: 'A dusty library located inside the manor. Old books recording the history of the Blackwood family are stored here, and it is a place where clues about the legend of the \'Weeping Lady\' can be found.',
      details: '',
      location: ''
    }
  ],

  connectionRules: [
    {
      id: 'rule_A05',
      cards: ['A03', 'A04'],
      result: 'Through the reading of the will at Blackwood Manor, you begin to question the study\'s balcony.',
      unlock: 'A05'
    },
    {
      id: 'rule_A06',
      cards: ['A05', 'A01'],
      result: 'Through the detective\'s investigation and clues on the balcony, missing footprints are discovered.',
      unlock: 'A06'
    },
    {
      id: 'rule_A07',
      cards: ['A05', 'A02'],
      result: 'Through Eleanor\'s request and clues on the balcony, scratches on the railing are discovered.',
      unlock: 'A07'
    },
    {
      id: 'rule_A08',
      cards: ['A01', 'A02'],
      result: 'Through the meeting of the detective and Eleanor, you learn about Mrs. Gable, the housekeeper.',
      unlock: 'A08'
    },
    {
      id: 'rule_A09',
      cards: ['A08', 'A10'],
      result: 'Through Mrs. Gable and the atmosphere of the central hall, you hear the story of the curse of the Weeping Lady.',
      unlock: 'A09'
    },
    {
      id: 'rule_A10',
      cards: ['A01', 'A03'],
      result: 'The detective arrives at Blackwood Manor and faces the central hall.',
      unlock: 'A10'
    },
    {
      id: 'rule_A11',
      cards: ['A04', 'A10'],
      result: 'You meet Arthur Blackwood in the central hall where the will reading took place.',
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
      result: 'Through Eleanor and the atmosphere of the old library, you learn about Sebastian Thorne.',
      unlock: 'A13'
    },
    {
      id: 'rule_A14',
      cards: ['A03', 'A05'],
      result: 'Through Blackwood Manor and the study balcony, you confirm the death of Lord Alistair Blackwood.',
      unlock: 'A14'
    },
    {
      id: 'rule_A15',
      cards: ['A04', 'A11'],
      result: 'Through the reading of the will and Arthur\'s situation, you learn about the conditions of the will.',
      unlock: 'A15'
    },
    {
      id: 'rule_A16',
      cards: ['A11', 'A12'],
      result: 'Through the conflict between Arthur and Beatrice, you witness the deep-seated family conflicts.',
      unlock: 'A16'
    },
    {
      id: 'rule_A17',
      cards: ['A06', 'A07'],
      result: 'Through the missing footprints and scratches on the railing, you sense the gloomy atmosphere of the study and realize the seriousness of the case.',
      unlock: 'A17'
    },
    {
      id: 'rule_A18',
      cards: ['A01', 'A18'],
      result: 'Through the detective\'s arrival and the carriage arrival, you receive your first impression of the manor.',
      unlock: 'A18'
    },
    {
      id: 'rule_A19',
      cards: ['A03', 'A09'],
      result: 'Through Blackwood Manor and the curse of the Weeping Lady, you learn about the existence of the old library.',
      unlock: 'A19'
    },
    {
      id: 'rule_A20',
      cards: ['A17', 'A19'],
      result: 'Through the study\'s atmosphere and the old library, you begin to suspect the case from the very first night.',
      unlock: 'A20'
    },
    {
      id: 'rule_A20_alt',
      cards: ['A16', 'A18'],
      result: 'Through the family conflicts and the carriage arrival, you confirm your suspicions on the first night.',
      unlock: 'A20'
    }
  ],

  fragments: [], 
  winCondition: "A20", // Suspicion on the First Night
  initialCards: [ 
    'A01', // The Detective\'s Arrival
    'A02', // Eleanor Blackwood
    'A03', // Blackwood Manor
    'A04', // Reading of the Will
    'A18'  // Arrival of the Carriage
  ]
};

export default case7ch1En;