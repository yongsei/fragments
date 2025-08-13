
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



export const case7ch4En: GameScenario = {
  id: 'c7_chapter_4',
  title: 'sins of the Father',
  story: 'The detective discovers a secret passage and, through the victim\'s secrets hidden within, finds the decisive motive for the case. After exploring the dusty, dark passage, they reach Lord Alistair\'s hidden study. There, they find the Lord\'s secret diary, which contains his disillusionment with his family\'s hypocrisy and betrayal, and a shocking plan to disinherit them all and donate his entire fortune to charity.',
  victim: 'A14', // Alistair Blackwood, Lord
  
  suspects: [
    {
      id: 'D11',
      name: 'The Lord\'s Disillusionment',
      role: 'Person',
      description: 'Lord Alistair\'s inner thoughts revealed through his diary. He was deeply disillusioned with his family\'s hypocrisy and greed, leading him to make extreme decisions.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'D04',
      name: 'Diary\'s Confession',
      description: 'A thick, leather-bound diary found in the Lord\'s secret study. His handwriting, filled with anger and disillusionment in recent entries, reveals his true feelings about his family.',
      details: '',
      location: ''
    },
    {
      id: 'D05',
      name: 'Record about Beatrice',
      description: 'The diary states that Beatrice is solely driven by greed for wealth and is siphoning off the Lord\'s assets. This connects to Beatrice\'s financial difficulties and strengthens her motive.',
      details: '',
      location: ''
    },
    {
      id: 'D06',
      name: 'Record about Arthur',
      description: 'The diary records that Arthur has incurred massive debts and is squandering the family\'s fortune, making him unworthy of inheritance. This connects to Arthur\'s gambling debts and strengthens his motive.',
      details: '',
      location: ''
    },
    {
      id: 'D07',
      name: 'Record about Eleanor and Sebastian',
      description: 'The diary records that Eleanor is weak, Sebastian is sinister, and both are merely parasites living off the Lord\'s wealth. This shows that the Lord felt disillusioned with all his family members.',
      details: '',
      location: ''
    },
    {
      id: 'D08',
      name: 'Disinheritance Plan',
      description: 'The last entry in the diary contains shocking information: the Lord met with his lawyer to revise his will, planning to donate all his assets to charity and leave nothing to his family.',
      details: '',
      location: ''
    },
    {
      id: 'D09',
      name: 'Motive for Murder',
      description: 'If someone in the family had learned of the Lord\'s plan to disinherit them all and donate his entire fortune to charity, it would be a clear motive for murder. The culprit killed the Lord to prevent this plan.',
      details: '',
      location: ''
    },
    {
      id: 'D10',
      name: 'Traces of Secret Passage Use',
      description: 'Faint footprints on the secret passage floor show that the culprit freely used this passage to fabricate their alibi and impersonate a ghost. This connects to the \'missing footprints\' clue.',
      details: '',
      location: ''
    },
    {
      id: 'D12',
      name: 'Cold Wind and Footsteps',
      description: 'The moment the detective senses they have reached the core of the truth, a cold wind and faint footsteps are heard from the secret passage behind them. This suggests that the culprit has noticed the detective\'s presence or is moving to destroy evidence.',
      details: '',
      location: ''
    },
    {
      id: 'D13',
      name: 'Unfinished Letters',
      description: 'Unfinished letters found on the desk in the Lord\'s secret study. These letters could show that the Lord was still contemplating his relationship with his family right before his death.',
      details: '',
      location: ''
    },
    {
      id: 'D15',
      name: 'Core of Truth',
      description: 'The moment the decisive motive for the case is found through the Lord\'s diary. The detective now has all the puzzle pieces needed to reveal the culprit\'s identity.',
      details: '',
      location: ''
    },
    {
      id: 'D16',
      name: 'Pursuit of the Culprit',
      description: 'The footsteps heard from the secret passage suggest that the culprit is pursuing the detective. The detective must now prepare for the final confrontation with the culprit.',
      details: '',
      location: ''
    },
    {
      id: 'D17',
      name: 'Alibi Fabrication',
      description: 'The fact that the culprit used the secret passage to fabricate their alibi and impersonate a ghost. This demonstrates the complexity of the case and the culprit\'s meticulousness.',
      details: '',
      location: ''
    },
    {
      id: 'D18',
      name: 'Family Hypocrisy',
      description: 'The family\'s hypocritical nature revealed through the diary. They pretended to respect the Lord, but in reality, they only coveted his wealth.',
      details: '',
      location: ''
    },
    {
      id: 'D19',
      name: 'Charity Donation',
      description: 'The Lord\'s plan to donate all his assets to charity. This would have been shocking news to the family and further clarifies the motive for murder.',
      details: '',
      location: ''
    },
    {
      id: 'D20',
      name: 'Final Clue',
      description: 'The Lord\'s diary is the final clue that will unravel all the mysteries of the case. Through this clue, the detective will clearly understand the culprit\'s identity and motive for murder.',
      details: '',
      location: ''
    }
  ],

  locations: [
    {
      id: 'D01',
      name: 'Hidden Door',
      description: 'After thoroughly examining the wall where the \'Weeping Lady\' disappeared, pressing a specific protrusion causes a part of the wall to slide inward with a \'creak,\' revealing a dark entrance. A cold, damp, moldy smell emanates from this door, signaling the beginning of a secret passage.',
      details: '',
      location: ''
    },
    {
      id: 'D02',
      name: 'Cobwebbed Corridor',
      description: 'The secret passage is narrow and long, with damp walls and a thick layer of dust on the floor. However, faint footprints, as if someone recently passed through, remain on the dust, suggesting that the culprit used this passage.',
      details: '',
      location: ''
    },
    {
      id: 'D03',
      name: 'The Lord\'s Secret Study',
      description: 'Another hidden door found at the end of the secret passage. Opening it reveals Lord Alistair\'s true study, his private space. Unlike the official study, it exudes an atmosphere that seems to directly reflect his inner self.',
      details: '',
      location: ''
    },
    {
      id: 'D14',
      name: 'Caricatures',
      description: 'Caricatures of businessmen he despised, hanging on the wall of the Lord\'s secret study. These show the Lord\'s character and his critical view of society.',
      details: '',
      location: ''
    }
  ],

  connectionRules: [
    {
      id: 'rule_D05',
      cards: ['D04', 'D03'],
      result: 'Through the diary\'s confession and the Lord\'s secret study, you discover records about Beatrice.',
      unlock: 'D05'
    },
    {
      id: 'rule_D06',
      cards: ['D04', 'D13'],
      result: 'Through the diary\'s confession and the unfinished letters, you discover records about Arthur.',
      unlock: 'D06'
    },
    {
      id: 'rule_D07',
      cards: ['D04', 'D05'],
      result: 'Through the diary\'s confession and the records about Beatrice, you discover records about Eleanor and Sebastian.',
      unlock: 'D07'
    },
    {
      id: 'rule_D08',
      cards: ['D04', 'D06'],
      result: 'Through the diary\'s confession and the records about Arthur, you learn about the disinheritance plan.',
      unlock: 'D08'
    },
    {
      id: 'rule_D09',
      cards: ['D08', 'D10'],
      result: 'Through the disinheritance plan and traces of secret passage use, you identify the motive for murder.',
      unlock: 'D09'
    },
    {
      id: 'rule_D10',
      cards: ['D01', 'D02'],
      result: 'Through the hidden door and the cobwebbed corridor, you discover traces of secret passage use.',
      unlock: 'D10'
    },
    {
      id: 'rule_D11',
      cards: ['D04', 'D07'],
      result: 'Through the diary\'s confession and the records about Eleanor and Sebastian, you understand the Lord\'s disillusionment.',
      unlock: 'D11'
    },
    {
      id: 'rule_D12',
      cards: ['D03', 'D10'],
      result: 'Through the Lord\'s secret study and traces of secret passage use, you hear a cold wind and footsteps.',
      unlock: 'D12'
    },
    {
      id: 'rule_D13',
      cards: ['D03', 'D04'],
      result: 'Through the Lord\'s secret study and the diary\'s confession, you discover unfinished letters.',
      unlock: 'D13'
    },
    {
      id: 'rule_D14',
      cards: ['D03', 'D11'],
      result: 'Through the Lord\'s secret study and his disillusionment, you discover caricatures.',
      unlock: 'D14'
    },
    {
      id: 'rule_D15',
      cards: ['D09', 'D12'],
      result: 'Through the motive for murder and the cold wind and footsteps, you reach the core of the truth.',
      unlock: 'D15'
    },
    {
      id: 'rule_D16',
      cards: ['D09', 'D10'],
      result: 'Through the motive for murder and traces of secret passage use, you anticipate the culprit\'s pursuit.',
      unlock: 'D16'
    },
    {
      id: 'rule_D17',
      cards: ['D02', 'D10'],
      result: 'Through the cobwebbed corridor and traces of secret passage use, you understand the possibility of alibi fabrication.',
      unlock: 'D17'
    },
    {
      id: 'rule_D18',
      cards: ['D05', 'D06'],
      result: 'Through the records about Beatrice and Arthur, you learn about the family\'s hypocrisy.',
      unlock: 'D18'
    },
    {
      id: 'rule_D19',
      cards: ['D08', 'D09'],
      result: 'Through the disinheritance plan and the motive for murder, you learn about the charity donation plan.',
      unlock: 'D19'
    },
    {
      id: 'rule_D20',
      cards: ['D15', 'D16'],
      result: 'Through the core of the truth and the culprit\'s pursuit, you secure the final clue.',
      unlock: 'D20'
    },
    {
      id: 'rule_D20_alt',
      cards: ['D09', 'D19'],
      result: 'Through the motive for murder and the charity donation plan, you secure the final clue.',
      unlock: 'D20'
    },
    {
      id: 'rule_D20_direct',
      cards: ['D08', 'D17'],
      result: 'Through the disinheritance plan and alibi fabrication, you reach the final clue.',
      unlock: 'D20'
    }
  ],

  fragments: [], 
  winCondition: "D20", // Final Clue
  initialCards: [ 
    'D01', // Hidden Door
    'D02', // Cobwebbed Corridor
    'D03', // The Lord\'s Secret Study
    'D04'  // Diary\'s Confession
  ]
};

export default case7ch4En;
