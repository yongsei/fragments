
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



export const case7ch2En: GameScenario = {
  id: 'c7_chapter_2',
  title: 'Portrait of Lies',
  story: 'The detective interrogates the family members one by one. Each of their secrets and lies are revealed, such as Arthur\'s massive gambling debts, the widow Beatrice\'s obsession with wealth, and cousin Sebastian\'s suspicious activities. In this process, the suspects try to shift blame onto each other. The detective synthesizes their testimonies to uncover clues to a dangerous relationship beyond simple family discord.',
  victim: 'A14', // Alistair Blackwood, Lord
  
  suspects: [
    {
      id: 'B01',
      name: 'Beatrice\'s Composure',
      role:'suspect',
      description: 'Beatrice, strolling in the garden after breakfast, shows a surprisingly calm demeanor about her husband\'s death. She claims there were no problems in her relationship with her husband, but the detective senses a subtle lie in her words.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B02',
      name: 'Arthur\'s Arrogance',
      role:'suspect',
      description: 'Arthur, drinking alone in the billiard room, openly mocks and guards against the detective. He claims his father\'s death was a mere accident and warns them not to dig further into the case. Behind his arrogant demeanor lies a hidden anxiety.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B03',
      name: 'sebastian\'s Ambiguity',
      role:'suspect',
      description: 'sebastian, recording something in a corner of the library, evades questions about the Lord\'s death with philosophical answers. His testimony is ambiguous, and the detective obtains a servant\'s testimony that he was near the study on the night of the incident.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B07',
      name: 'Eleanor\'s Suspicion',
      role: 'Person',
      description: 'Eleanor suspects that her stepmother, Beatrice, is too calm after her father\'s death, acting as if she had been waiting for it. This deepens the distrust and conflict among the family members.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B08',
      name: 'Beatrice\'s Suspicion of Her Son',
      role: 'Person',
      description: 'Beatrice suspects her son, Arthur, saying he might have done anything because of his debts, and that he would do anything for money. This could also be a defensive stance to hide her own financial problems.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B09',
      name: 'Arthur\'s Suspicion of His Cousin',
      role: 'Person',
      description: 'Arthur targets his cousin, Sebastian, saying he lived off the family like a parasite and that there were rumors his father was going to cut off his support. This seems to be Arthur\'s attempt to evade his debt problems and shift blame onto others.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'B04',
      name: 'Beatrice\'s Financial Problems',
      description: 'A letter in Beatrice\'s hand, addressed to her estate manager, requesting the resolution of \'urgent financial problems\' is found. This shows that she is facing severe financial difficulties independent of her husband\'s death, implying that her claim of a \'problem-free\' marriage is false.',
      details: '',
      location: ''
    },
    {
      id: 'B05',
      name: 'Arthur\'s Loan Shark Debt',
      description: 'several demand letters from a notorious London loan shark are found in Arthur\'s room. This shows that he is suffering from severe debt, to the point of feeling threatened, and reveals that his life is in danger if he doesn\'t receive the inheritance.',
      details: '',
      location: ''
    },
    {
      id: 'B06',
      name: 'sebastian\'s Suspicious Activities',
      description: 'According to a servant\'s testimony, Sebastian was seen loitering in the corridor near the study on the night of the incident. He is hiding this fact, and his ambiguous demeanor, along with this, amplifies the suspicion that he might not be a mere bystander.',
      details: '',
      location: ''
    },
    {
      id: 'B13',
      name: 'Family Distrust',
      description: 'As the interrogation progresses, the family members begin to openly express their distrust towards each other. Eleanor, Beatrice, and Arthur blaming each other and shifting responsibility reveals the deep distrust within the Blackwood family.',
      details: '',
      location: ''
    },
    {
      id: 'B14',
      name: 'False Testimonies',
      description: 'The lies found in the family\'s testimonies, such as Beatrice\'s claim of a \'problem-free\' marriage, Arthur\'s claim of a \'mere accident,\' and Sebastian\'s ambiguous answers. These lies hint at their hidden motives and secrets.',
      details: '',
      location: ''
    },
    {
      id: 'B15',
      name: 'Financial Pressure',
      description: 'Beatrice\'s financial problems and Arthur\'s loan shark debt show that the Blackwood family, though seemingly wealthy, is actually suffering from severe financial pressure. This could be a strong motive related to the Lord\'s death.',
      details: '',
      location: ''
    },
    {
      id: 'B16',
      name: 'Hidden Motives',
      description: 'Through the family\'s false testimonies and financial pressure, their hidden motives are revealed. Beatrice\'s interest in wealth, Arthur\'s in inheritance, and Sebastian\'s in patronage suggest that their respective interests are intertwined with the Lord\'s death.',
      details: '',
      location: ''
    },
    {
      id: 'B17',
      name: 'servant\'s Testimony',
      description: 'The servant\'s testimony played a crucial role in revealing Sebastian\'s suspicious activities. This shows that there might be a witness within the manor who knows the truth of the incident.',
      details: '',
      location: ''
    },
    {
      id: 'B18',
      name: 'Masked Family',
      description: 'As everyone wears a mask and defends themselves, the truth sinks deeper into the labyrinth. The detective must uncover the truth hidden behind their masks.',
      details: '',
      location: ''
    },
    {
      id: 'B19',
      name: 'Dangerous Relationship',
      description: 'Clues to a dangerous relationship beyond simple family discord. The distrust and hidden motives among the family members further confirm that the Lord\'s death was not a mere accident.',
      details: '',
      location: ''
    },
    {
      id: 'B20',
      name: 'Labyrinth of Truth',
      description: 'In a manor entangled with lies and suspicion, the truth sinks deeper into a labyrinth. The detective must navigate this labyrinth to uncover the truth.',
      details: '',
      location: ''
    }
  ],

  locations: [
    {
      id: 'B10',
      name: 'Billiard Room',
      description: 'The place where Arthur spends time drinking alone. Here, the detective observes Arthur\'s arrogant demeanor and his unstable psychological state. Arthur gripping the billiard cue as if to break it reveals his inner rage.',
      details: '',
      location: ''
    },
    {
      id: 'B11',
      name: 'Garden',
      description: 'The place where Beatrice strolls after breakfast. Here, the detective approaches Beatrice and discovers her hidden financial problems through her calm demeanor and the letter in her hand.',
      details: '',
      location: ''
    },
    {
      id: 'B12',
      name: 'Library',
      description: 'The place where Sebastian primarily spends his time writing. The dusty bookshelves and quiet atmosphere suit Sebastian\'s taciturn nature. Here, the detective hears Sebastian\'s ambiguous testimony.',
      details: '',
      location: ''
    }
  ],

  connectionRules: [
    {
      id: 'rule_B05',
      cards: ['B02', 'B04'],
      result: 'Through Arthur\'s arrogance and Beatrice\'s financial problems, you learn about Arthur\'s loan shark debt.',
      unlock: 'B05'
    },
    {
      id: 'rule_B06',
      cards: ['B03', 'B05'],
      result: 'Through Sebastian\'s ambiguity and Arthur\'s loan shark debt, you learn about Sebastian\'s suspicious activities.',
      unlock: 'B06'
    },
    {
      id: 'rule_B07',
      cards: ['B01', 'B02'],
      result: 'Through Beatrice\'s composure and Arthur\'s arrogance, you learn about Eleanor\'s suspicion.',
      unlock: 'B07'
    },
    {
      id: 'rule_B08',
      cards: ['B01', 'B05'],
      result: 'Through Beatrice\'s composure and Arthur\'s loan shark debt, you learn that Beatrice suspects her son.',
      unlock: 'B08'
    },
    {
      id: 'rule_B09',
      cards: ['B02', 'B06'],
      result: 'Through Arthur\'s arrogance and Sebastian\'s suspicious activities, you learn that Arthur suspects his cousin.',
      unlock: 'B09'
    },
    {
      id: 'rule_B10',
      cards: ['B02', 'B05'],
      result: 'Through Arthur\'s arrogance and loan shark debt, you observe his unstable psychological state in the billiard room.',
      unlock: 'B10'
    },
    {
      id: 'rule_B11',
      cards: ['B01', 'B04'],
      result: 'Through Beatrice\'s composure and financial problems, you discover her hidden financial problems in the garden.',
      unlock: 'B11'
    },
    {
      id: 'rule_B13',
      cards: ['B07', 'B08'],
      result: 'Through Eleanor\'s suspicion and Beatrice\'s suspicion of her son, you learn about the family\'s distrust.',
      unlock: 'B13'
    },
    {
      id: 'rule_B14',
      cards: ['B07', 'B09'],
      result: 'Through Eleanor\'s suspicion and Arthur\'s suspicion of his cousin, you learn about the family\'s false testimonies.',
      unlock: 'B14'
    },
    {
      id: 'rule_B15',
      cards: ['B04', 'B05'],
      result: 'Through Beatrice\'s financial problems and Arthur\'s loan shark debt, you learn about the Blackwood family\'s financial pressure.',
      unlock: 'B15'
    },
    {
      id: 'rule_B16',
      cards: ['B13', 'B14'],
      result: 'Through the family\'s distrust and false testimonies, you identify their hidden motives.',
      unlock: 'B16'
    },
    {
      id: 'rule_B17',
      cards: ['B03', 'B06'],
      result: 'Through Sebastian\'s ambiguity and suspicious activities, you secure the servant\'s testimony.',
      unlock: 'B17'
    },
    {
      id: 'rule_B18',
      cards: ['B13', 'B09'],
      result: 'Through the family\'s distrust and Arthur\'s suspicion of his cousin, you confirm the appearance of the masked family.',
      unlock: 'B18'
    },
    {
      id: 'rule_B19',
      cards: ['B15', 'B16'],
      result: 'Through financial pressure and hidden motives, you understand the dangerous relationship among the family members.',
      unlock: 'B19'
    },
    {
      id: 'rule_B20',
      cards: ['B18', 'B19'],
      result: 'Through the masked family and the dangerous relationship, you realize that the truth lies deeper within the labyrinth.',
      unlock: 'B20'
    }
  ],

  fragments: [], 
  winCondition: "B20", // Labyrinth of Truth
  initialCards: [ 
    'B01', // Beatrice\'s Composure
    'B02', // Arthur\'s Arrogance
    'B03', // Sebastian\'s Ambiguity
    'B04', // Beatrice\'s Financial Problems
    'B12'  // Library
  ]
};

export default case7ch2En;
