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

export const case6ch3_1_en: GameScenario = {
  id: 'case6_chapter3_1',
  title: 'Elara\'s Unjust Arrest',
  story: 'The city falls into chaos as the respected librarian Elara is unjustly arrested for the Luminous Plague. Captain Valerius, a guardian of law and order, grapples with the contradictions in the case, leading him into deeper, more covert investigations. With the help of a disgruntled accountant and the prison warden, they begin to uncover the truth about the Luminous Plague through forensic alchemical analysis.',
  victim: '',
  
  suspects: [
    {
      id: 'CH3_CH01',
      name: 'Captain Valerius, the Tormented Enforcer',
      role: 'Character',
      description: 'A city guard captain devoted to the law, who suspects a larger conspiracy due to contradictions in Elara\'s case.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH3_CH03',
      name: 'The Disgruntled Accountant',
      role: 'Character',
      description: 'A nervous accountant who managed the finances of Kael\'s anonymous clients, seeking revenge after being dismissed.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH3_CH04',
      name: 'Warden Elias Thorne',
      role: 'Character',
      description: 'The strict warden of the city prison who follows rules meticulously and holds the key to accessing Elara.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH3_EV01',
      name: 'Elara\'s Unjust Arrest',
      description: 'Elara, who claims innocence, has been arrested on charges of the Luminous Plague. The public sees her as either a witch or a scapegoat.',
      details: 'As new information emerges, the charges feel increasingly hollow, revealing the injustice of the situation.',
      location: ''
    },
    {
      id: 'CH3_EV02',
      name: 'Forensic Alchemical Analysis Report',
      description: 'A scientific report analyzing samples of the Luminous Plague, revealing it to be an unstable alchemical concoction rather than a curse.',
      details: 'Designed for cellular rejuvenation but with fatal flaws due to life energy overload.',
      location: ''
    },
    {
      id: 'CH3_EV04',
      name: 'Kael\'s Offshore Financial Records',
      description: 'Records of massive anonymous payments flowing into Kael\'s accounts, suggesting a vast illegal enterprise.',
      details: 'The scale of funding is enormous, implying powerful hidden patrons or a larger scheme.',
      location: ''
    },
    {
      id: 'CH3_EV03',
      name: 'Evidence of Political Pressure',
      description: 'Documents showing that political pressure was applied in Elara\'s arrest.',
      details: 'High-ranking officials wanted a quick resolution, suggesting they needed a scapegoat rather than the truth.',
      location: ''
    },
    {
      id: 'CH3_EV07',
      name: 'The Accountant\'s Revenge',
      description: 'The disgruntled accountant\'s desire for revenge against Kael and his willingness to cooperate.',
      details: 'After being dismissed, he has strong motivation to expose Kael\'s secrets.',
      location: ''
    },
    {
      id: 'CH3_EV07_FINAL',
      name: 'First Step Toward Truth',
      description: 'The decisive moment when they become convinced of Elara\'s innocence and the existence of the real culprit.',
      details: 'All evidence points to Kael, and it becomes clear that Elara is merely a scapegoat.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'CH3_LC01',
      name: 'The Grim City Prison',
      description: 'The city prison made of cold, damp stone and iron bars where Elara is imprisoned.',
      details: 'Heavily guarded with an oppressive atmosphere filled with echoes of despair.'
    },
    {
      id: 'CH3_LC02',
      name: 'Guard Headquarters',
      description: 'The city guard headquarters where Captain Valerius works, where official investigations take place.',
      details: 'A symbol of law and order, but shows the reality of being pressured by political forces.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_3_1_1',
      cards: ['CH3_EV01', 'CH3_CH01'],
      result: 'Captain Valerius investigating Elara\'s unjust arrest orders a forensic alchemical analysis.',
      unlock: 'CH3_EV02'
    },
    {
      id: 'rule_3_1_2',
      cards: ['CH3_EV01', 'CH3_LC01'],
      result: 'Through Elara\'s arrest and the city prison, you meet the disgruntled accountant.',
      unlock: 'CH3_CH03'
    },
    {
      id: 'rule_3_1_3',
      cards: ['CH3_CH01', 'CH3_LC02'],
      result: 'Through Captain Valerius and the guard headquarters, you meet the prison warden.',
      unlock: 'CH3_CH04'
    },
    {
      id: 'rule_3_1_4',
      cards: ['CH3_EV02', 'CH3_CH03'],
      result: 'The disgruntled accountant, after seeing the analysis report, reveals Kael\'s offshore financial records.',
      unlock: 'CH3_EV04'
    },
    {
      id: 'rule_3_1_5',
      cards: ['CH3_CH01', 'CH3_EV01'],
      result: 'Captain Valerius investigating Elara\'s arrest process discovers evidence of political pressure.',
      unlock: 'CH3_EV03'
    },
    {
      id: 'rule_3_1_6',
      cards: ['CH3_CH03', 'CH3_EV04'],
      result: 'Through the disgruntled accountant and Kael\'s financial records, you confirm the accountant\'s revenge.',
      unlock: 'CH3_EV07'
    },
    {
      id: 'rule_3_1_7',
      cards: ['CH3_EV03', 'CH3_EV07'],
      result: 'Through evidence of political pressure and the accountant\'s revenge, you take the first step toward truth.',
      unlock: 'CH3_EV07_FINAL'
    },
    {
      id: 'rule_3_1_8',
      cards: ['CH3_EV02', 'CH3_CH04'],
      result: 'Through the forensic analysis report and the prison warden, you confirm the first step toward truth.',
      unlock: 'CH3_EV07_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH3_EV07_FINAL',
  initialCards: [
    'CH3_EV01', // Elara's Unjust Arrest
    'CH3_CH01', // Captain Valerius
    'CH3_LC01'  // The Grim City Prison
  ]
};