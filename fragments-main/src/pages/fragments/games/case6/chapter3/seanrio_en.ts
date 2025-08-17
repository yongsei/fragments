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

export const case6ch3En: GameScenario = {
  id: 'case6_chapter3',
  title: 'Web of Deception',
  story: 'The city falls into chaos as the respected librarian Elara is unjustly arrested for the Luminous Plague. Captain Valerius, a guardian of law and order, grapples with the contradictions in the case, leading him into deeper, more covert investigations. Players must navigate a complex web of deception by uncovering smuggler testimonies, hidden financial transaction records, and desperate pleas from victims. All these clues point away from Elara toward Kael, revealing the true extent of his influence and the desperate measures taken to conceal his crimes.',
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
      id: 'CH3_FINAL',
      name: 'The True Purpose of the Web of Deception',
      description: 'Decisive evidence that reveals the ultimate goal hidden behind the web of deception through the combination of all clues and evidence.',
      details: 'It is fully revealed that Kael\'s alchemical experiments were not for immortality, but part of a ritual to summon ancient entities from the abyss to the surface world.',
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
      id: 'CH3_LC03',
      name: 'The Abandoned Bank Vault',
      description: 'A forgotten vault in the basement of an old bank where Kael\'s anonymous clients stored secret documents.',
      details: 'The massive steel door stands half-open, with the smell of old paper and forgotten wealth.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_CH3_1',
      cards: ['CH3_EV01', 'CH3_CH01'],
      result: 'Captain Valerius investigating Elara\'s unjust arrest orders a forensic alchemical analysis.',
      unlock: 'CH3_EV02'
    },
    {
      id: 'rule_CH3_2',
      cards: ['CH3_EV01', 'CH3_LC01'],
      result: 'Investigating Elara\'s arrest case at the prison leads you to encounter the disgruntled accountant.',
      unlock: 'CH3_CH03'
    },
    {
      id: 'rule_CH3_3',
      cards: ['CH3_CH01', 'CH3_LC01'],
      result: 'When Captain Valerius visits the prison, he meets Warden Elias Thorne.',
      unlock: 'CH3_CH04'
    },
    {
      id: 'rule_CH3_4',
      cards: ['CH3_EV02', 'CH3_CH03'],
      result: 'The disgruntled accountant, after seeing the analysis report, reveals Kael\'s offshore financial records.',
      unlock: 'CH3_EV04'
    },
    {
      id: 'rule_CH3_5',
      cards: ['CH3_EV04', 'CH3_LC01'],
      result: 'Searching the prison based on the financial records reveals the abandoned bank vault.',
      unlock: 'CH3_LC03'
    },
    {
      id: 'rule_CH3_6',
      cards: ['CH3_LC03', 'CH3_CH04'],
      result: 'At the bank vault, the warden delivers Elara\'s encrypted message.',
      unlock: 'CH3_EV06'
    },
    {
      id: 'rule_CH3_7',
      cards: ['CH3_EV06', 'CH3_CH01'],
      result: 'Captain Valerius, after decoding Elara\'s message, discovers the third victim\'s locket.',
      unlock: 'CH3_EV08'
    },
    {
      id: 'rule_CH3_8',
      cards: ['CH3_EV08', 'CH3_LC03'],
      result: 'Combining the victim\'s locket with clues from the bank vault fully reveals the true purpose of the web of deception.',
      unlock: 'CH3_FINAL'
    }
  ],
  fragments: [],
  winCondition: 'CH3_FINAL',
  initialCards: [
    'CH3_EV01',
    'CH3_CH01',
    'CH3_LC01'
  ]
};