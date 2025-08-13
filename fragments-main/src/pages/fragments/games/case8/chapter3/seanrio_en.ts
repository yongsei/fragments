export const case8_chapter2_en = {
  id: 'case8_chapter2',
  title: 'Chapter 2: Forgotten Truth',
  story: 'After Grandma Elara\'s warning, players begin to actively explore the village\'s secrets, meeting and collaborating with journalist Alex. Through Lily\'s strange drawings, they discover important clues about the \'forgotten ritual\' of the past.',
  victim: '',
  suspects: [
    {
      id: 'C01',
      name: 'Alex',
      role: 'Journalist',
      description: 'A young journalist investigating missing persons cases in the area. Initially skeptical, he gradually accepts the village\'s abnormal situation and collaborates with the players. He provides external knowledge and logical thinking.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C02',
      name: 'Lily',
      role: 'Village Child',
      description: 'The only child in the village, unable to speak and communicating only through drawings. Her drawings depict horrific past events and serve as important clues to the curse.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C03',
      name: '(Chapter 2\'s Additional Character)',
      role: 'Villager',
      description: 'A character encountered by Alex in the village grocery store. His expression shows similar bewilderment and fatigue to Alex, and he seems to vaguely know the village\'s secrets.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C04',
      name: '(Chapter 2\'s Additional Character)',
      role: 'Figure related to past ritual',
      description: 'A trace of a character related to the past ritual, found in the old school building. His existence plays an important role in revealing the origin of the curse.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C05',
      name: '(Chapter 2\'s Additional Character)',
      role: 'Ritual Leader',
      description: 'A character who repeatedly appears in Lily\'s drawings, leading the ritual. His face is obscured, but it hints at his deep connection to the beginning of the curse.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C06',
      name: '(Chapter 2\'s Final Character)',
      role: 'Key Figure',
      description: 'Revealed when all character cards of Chapter 2 are collected, the key figure of the \'forgotten ritual\'. His identity is a decisive clue to understanding the nature of the curse.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'C13',
      name: 'Alex\'s Notebook',
      description: 'An old notebook Alex always carries.',
      details: 'It contains records of missing persons cases and his observations of the village\'s strange phenomena.',
      location: 'C01'
    },
    {
      id: 'C14',
      name: 'Lily\'s Drawing',
      description: 'strange drawings Lily made on the blackboard and floor.',
      details: 'They seem to depict the \'forgotten ritual\', with figures holding torches gathered in a circle.',
      location: 'C02'
    },
    {
      id: 'C15',
      name: 'Déjà Vu Phenomenon',
      description: 'The feeling of repeating the same situation as yesterday, also experienced by Alex.',
      details: 'This is an important piece of evidence proving the village\'s time distortion phenomenon.',
      location: ''
    },
    {
      id: 'C16',
      name: 'Missing Persons Record',
      description: 'Records of missing outsiders that Alex was investigating.',
      details: 'These cases suggest a connection to the village\'s curse.',
      location: 'C01'
    },
    {
      id: 'C17',
      name: '(Chapter 2\'s Additional Evidence)',
      description: 'symbols or patterns related to the past ritual found throughout the village.',
      details: 'These serve as important clues to revealing the origin of the curse.',
      location: ''
    },
    {
      id: 'C18',
      name: '(Chapter 2\'s Final Evidence)',
      description: 'Revealed when all evidence cards of Chapter 2 are collected, a decisive piece of evidence about the nature of the \'forgotten ritual\' and the resulting curse.',
      details: '',
      location: ''
    }
  ],
  locations: [
    {
      id: 'C07',
      name: 'Grocery Store',
      description: 'The only grocery store in the village.',
      details: 'The place where Alex was first encountered, it is old and dusty with almost no goods.'
    },
    {
      id: 'C08',
      name: 'Old School Building',
      description: 'A ruined school located on the outskirts of the village.',
      details: 'Lily was found huddled there, and the blackboard was covered with strange drawings.'
    },
    {
      id: 'C09',
      name: '(Chapter 2\'s Additional Location)',
      description: 'One of the hidden places in the village.',
      details: 'Here, relics or traces related to the past ritual can be found.'
    },
    {
      id: 'C10',
      name: '(Chapter 2\'s Additional Location)',
      description: 'A place that frequently appears in Lily\'s drawings.',
      details: 'It might be a forbidden area in the village, deeply connected to the beginning of the curse.'
    },
    {
      id: 'C11',
      name: '(Chapter 2\'s Additional Location)',
      description: 'A location related to the missing persons cases Alex was investigating.',
      details: 'It hints that external events are connected to the curse.'
    },
    {
      id: 'C12',
      name: '(Chapter 2\'s Final Location)',
      description: 'Revealed when all location cards of Chapter 2 are collected, a hint about the key location where the \'forgotten ritual\' was performed.',
      details: ''
    }
  ],
  connectionRules: [
    {
      id: 'rule_C01_C02_C03',
      cards: ['C01', 'C02'],
      result: 'Discovered information about the character Alex encountered in the village grocery store.',
      unlock: 'C03'
    },
    {
      id: 'rule_C01_C03_C04',
      cards: ['C01', 'C03'],
      result: 'Found traces of a character related to the past ritual in the old school building.',
      unlock: 'C04'
    },
    {
      id: 'rule_C02_C04_C05',
      cards: ['C02', 'C04'],
      result: 'Obtained a clue about the ritual leader who repeatedly appears in Lily\'s drawings.',
      unlock: 'C05'
    },
    {
      id: 'rule_C03_C05_C06',
      cards: ['C03', 'C05'],
      result: 'Information about Chapter 2\'s Final Character has been unlocked.',
      unlock: 'C06'
    },
    {
      id: 'rule_C07_C08_C09',
      cards: ['C07', 'C08'],
      result: 'Obtained information about one of the hidden places in the village.',
      unlock: 'C09'
    },
    {
      id: 'rule_C07_C09_C10',
      cards: ['C07', 'C09'],
      result: 'Discovered a clue about the place that frequently appears in Lily\'s drawings.',
      unlock: 'C10'
    },
    {
      id: 'rule_C08_C10_C11',
      cards: ['C08', 'C10'],
      result: 'Learned about a location related to the missing persons cases Alex was investigating.',
      unlock: 'C11'
    },
    {
      id: 'rule_C09_C11_C12',
      cards: ['C09', 'C11'],
      result: 'Information about Chapter 2\'s Final Location has been unlocked.',
      unlock: 'C12'
    },
    {
      id: 'rule_C13_C14_C15',
      cards: ['C13', 'C14'],
      result: 'Realized the meaning of the Déjà Vu phenomenon.',
      unlock: 'C15'
    },
    {
      id: 'rule_C13_C15_C16',
      cards: ['C13', 'C15'],
      result: 'Obtained a clue about the Missing Persons Record.',
      unlock: 'C16'
    },
    {
      id: 'rule_C14_C16_C17',
      cards: ['C14', 'C16'],
      result: 'Found symbols or patterns related to the past ritual throughout the village.',
      unlock: 'C17'
    },
    {
      id: 'rule_C15_C17_C18',
      cards: ['C15', 'C17'],
      result: 'Chapter 2\'s Final Evidence has been unlocked.',
      unlock: 'C18'
    }
  ],
  fragments: [],
  winCondition: 'C18',
  initialCards: ['C01', 'C02', 'C07', 'C08', 'C13', 'C14']
};