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



export const case7ch5En: GameScenario = {
  id: 'c7_chapter_5',
  title: 'The Unmasking',
  story: 'sensing that the detective is closing in on the truth, the culprit begins their last desperate struggle. They resort to drastic measures, either by directly attacking the detective or trying to destroy the diary. The detective uses the contents of the diary to set a trap for the culprit and reveals their identity at the scene of the final \'ghostly commotion.\' With everything revealed, the culprit breaks down, confessing their motive, the murder plot, and how they used the mansion\'s legend.',
  victim: 'A14', // Alistair Blackwood, Lord
  
  suspects: [
    {
      id: 'E06',
      name: 'The Culprit\'s Identity',
      role: 'Character',
      description: 'The moment all evidence points to one person, the trap set by the detective springs. The secret door hidden behind the grand tapestry in the main hall opens, revealing the captured culprit in a ghost costume. The culprit was Arthur Blackwood.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E11',
      name: 'The Detective\'s Deduction',
      role: 'Character',
      description: 'The detective pressures the culprit by laying out everything in order: from the clues found on the first day to each person\'s false testimony and the existence of the secret passage. His sharp reasoning and logical explanation leave the family horrified.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E12',
      name: 'Arthur\'s Despair',
      role: 'Character',
      description: 'The despairing face of Arthur as he is taken away by the police. The moment everything is revealed and his plan is foiled, he falls into deep despair.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E13',
      name: 'The Family\'s Shock',
      role: 'Character',
      description: 'When the truth is revealed that Arthur is the culprit and the lord planned to revoke their inheritance, the family is thrown into shock and dismay. They are forced to confront the tragic consequences of their own greed.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E15',
      name: 'Eleanor\'s Gratitude',
      role: 'Character',
      description: 'Eleanor expresses her sincere gratitude to the detective and says she will settle the estate according to her father\'s final wishes. She shows deep trust in the detective who contributed to revealing the truth.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'E01',
      name: 'The Final Struggle',
      description: 'sensing that the detective has obtained the diary, the culprit makes a final move to destroy the evidence and eliminate the detective. A violent \'ghostly commotion\' erupts, with screams that seem to shake the entire mansion and the distinct figure of a ghost roaming the hallways.',
      details: '',
      location: ''
    },
    {
      id: 'E02',
      name: 'The Culprit\'s Trap',
      description: 'The culprit tries to lure the detective out of the lord\'s secret study, but the detective has already seen through the plan. Expecting the culprit to move through the secret passage, the detective sets a trap at a key point in the passage.',
      details: '',
      location: ''
    },
    {
      id: 'E04',
      name: 'The Ghost\'s Identity',
      description: 'The detective declares, "The ghost of this mansion, the \'Weeping Woman,\' was not a sad legend, but the alibi of a greedy murderer," revealing that the ghostly commotion was a planned act by the culprit.',
      details: '',
      location: ''
    },
    {
      id: 'E05',
      name: 'Inheritance Revocation Plan Revealed',
      description: 'The detective reveals the shocking contents of the lord\'s diary. "The Lord planned to revoke all of your inheritances. The person who found this out beforehand is the culprit," he says, clarifying the motive for the murder.',
      details: '',
      location: ''
    },
    {
      id: 'E07',
      name: 'Arthur\'s Motive',
      description: 'Hounded by loan sharks, Arthur stumbled upon his father\'s secret study and learned of the plan to revoke his inheritance. He confronted his father on the night of the incident, before the plan could be executed, leading to a heated argument.',
      details: '',
      location: ''
    },
    {
      id: 'E08',
      name: 'The Murder Process',
      description: 'In the heat of the argument, Arthur pushed his father from the balcony, killing him, and then escaped through the secret passage. This solves the mystery of the \'disappeared footprints.\' The scratch on the railing was from his ring.',
      details: '',
      location: ''
    },
    {
      id: 'E09',
      name: 'Purpose of the Ghostly Commotion',
      description: 'Arthur caused the ghostly commotion to obstruct the investigation and to search for any evidence (the diary) his father might have left behind. This shows his meticulous planning and desperation.',
      details: '',
      location: ''
    },
    {
      id: 'E16',
      name: 'A New Legend',
      description: 'As the detective\'s carriage departs, the Blackwood Mansion stands quietly, as if awakened from a long curse and having found peace. But the human greed and tragedy hidden within its walls will become another legend, talked about for years to come.',
      details: '',
      location: ''
    },
    {
      id: 'E17',
      name: 'The Culprit\'s Confession',
      description: 'With everything exposed, the culprit breaks down, confessing their motive, the murder plot, and how they used the mansion\'s legend. This is the moment all questions about the case are answered.',
      details: '',
      location: ''
    },
    {
      id: 'E18',
      name: 'Human Malice',
      description: 'It is revealed that the phenomena known as the \'Curse of Blackwood\' were actually malicious human devices used for generations to manipulate each other and keep secrets. This reveals the fundamental cause of the incident.',
      details: '',
      location: ''
    },
    {
      id: 'E19',
      name: 'The Case is Closed',
      description: 'With the culprit\'s arrest and the truth revealed, the mystery of the Blackwood Mansion is finally closed. The detective completes his mission and leaves the mansion.',
      details: '',
      location: ''
    },
    {
      id: 'E20',
      name: 'The Triumph of Truth',
      description: 'Through the detective\'s persistent investigation and sharp insight, the hidden truth is brought to light, and the culprit is punished. This ending shows that justice has prevailed.',
      details: '',
      location: ''
    }
  ],

  locations: [
    {
      id: 'E03',
      name: 'The Final Confrontation',
      description: 'The detective begins his deduction in front of the terrified family. The final confrontation takes place in the main hall, where all the evidence is brought together to reveal the identity of the \'Weeping Woman\' and the full story of the incident.',
      details: ''
    },
    {
      id: 'E10',
      name: 'The Main Hall Tapestry',
      description: 'The secret door hidden behind the grand tapestry in the main hall. This is where the culprit was hiding in a ghost costume and serves as the backdrop for the decisive moment his identity is revealed.',
      details: ''
    },
    {
      id: 'E14',
      name: 'Morning at Blackwood Mansion',
      description: 'The morning after everything is revealed, sunlight shines on Blackwood Mansion for the first time in a long while. The sight of the mansion, free from the shadow of the case and seemingly at peace, signals the end of the incident.',
      details: '',
    }
  ],

  connectionRules: [
    {
      id: 'rule_E05',
      cards: ['E04', 'E11'],
      result: 'The inheritance revocation plan is revealed through the ghost\'s identity and the culprit\'s identity.',
      unlock: 'E05'
    },
    {
      id: 'rule_E06',
      cards: ['E05', 'E02'],
      result: 'The culprit\'s identity is revealed through the disclosure of the inheritance revocation plan and the detective\'s deduction.',
      unlock: 'E06'
    },
    {
      id: 'rule_E07',
      cards: ['E05', 'E06'],
      result: 'You learn Arthur\'s motive through the inheritance revocation plan and the murder process.',
      unlock: 'E07'
    },
    {
      id: 'rule_E08',
      cards: ['E07', 'E01'],
      result: 'Reconstruct the murder process through Arthur\'s motive and the final struggle.',
      unlock: 'E08'
    },
    {
      id: 'rule_E09',
      cards: ['E07', 'E02'],
      result: 'Understand the purpose of the ghostly commotion through Arthur\'s motive and the culprit\'s trap.',
      unlock: 'E09'
    },
    {
      id: 'rule_E10',
      cards: ['E03', 'E06'],
      result: 'Learn the secret behind the main hall tapestry through the final confrontation and the culprit\'s identity.',
      unlock: 'E10'
    },
    {
      id: 'rule_E11',
      cards: ['E03', 'E04'],
      result: 'The detective\'s deduction begins with the final confrontation and the ghost\'s identity.',
      unlock: 'E11'
    },
    {
      id: 'rule_E12',
      cards: ['E06', 'E07'],
      result: 'Witness Arthur\'s despair through the culprit\'s identity and Arthur\'s motive.',
      unlock: 'E12'
    },
    {
      id: 'rule_E13',
      cards: ['E05', 'E12'],
      result: 'Confirm the family\'s shock through the inheritance revocation plan and the culprit\'s identity.',
      unlock: 'E13'
    },
    {
      id: 'rule_E14',
      cards: ['E03', 'E10'],
      result: 'Witness the morning at Blackwood Mansion through the final confrontation and the main hall tapestry.',
      unlock: 'E14'
    },
    {
      id: 'rule_E15',
      cards: ['E06', 'E13'],
      result: 'Receive Eleanor\'s gratitude through the culprit\'s identity and the family\'s shock.',
      unlock: 'E15'
    },
    {
      id: 'rule_E16',
      cards: ['E04', 'E09'],
      result: 'Learn that a new legend begins through the ghost\'s identity and the purpose of the ghostly commotion.',
      unlock: 'E16'
    },
    {
      id: 'rule_E17',
      cards: ['E07', 'E08'],
      result: 'Hear the culprit\'s confession through Arthur\'s motive and the murder process.',
      unlock: 'E17'
    },
    {
      id: 'rule_E18',
      cards: ['E04', 'E17'],
      result: 'Human malice is revealed through the ghost\'s identity and the culprit\'s confession.',
      unlock: 'E18'
    },
    {
      id: 'rule_E19',
      cards: ['E14', 'E15'],
      result: 'Announce the closing of the case through the morning at Blackwood Mansion and Eleanor\'s gratitude.',
      unlock: 'E19'
    },
    {
      id: 'rule_E20',
      cards: ['E17', 'E18'],
      result: 'Confirm the triumph of truth through the culprit\'s confession and the revelation of human malice.',
      unlock: 'E20'
    }
  ],

  fragments: [], 
  winCondition: "E20", // The Triumph of Truth
  initialCards: [ 
    'E01', // The Final Struggle
    'E02', // The Culprit\'s Trap
    'E03', // The Final Confrontation
    'E04'  // The Ghost\'s Identity
  ]
};

export default case7ch5En;