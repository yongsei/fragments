export const case8_chapter3_en = {
  id: 'case8_chapter3',
  title: 'Chapter 3: Fragment of the Loop',
  story: 'Confirming that the \'forgotten ritual\' is the cause of the curse, players learn about the \'Fragment of the Loop\' and the \'Reversed Ritual\' as key elements to break the curse with Grandma Elara\'s help. They head towards the church\'s underground altar, foreshadowing a confrontation with the curse\'s guardian.',
  victim: '',
  suspects: [
    {
      id: 'D01',
      name: '(Chapter 3\'s Character)',
      role: 'Grandma Elara',
      description: 'Grandma Elara\'s appearance when revealing the truth about the curse. Hints about past secrets emerge along with her anxiety.',
      alibi: '',
      motive: ''
    },
    {
      id: 'D02',
      name: '(Chapter 3\'s Character)',
      role: 'Curse Guardian',
      description: 'The guardian of the curse. The faint whispers heard in the fog now become a clear voice, mocking the players.',
      alibi: '',
      motive: ''
    },
    {
      id: 'D03',
      name: '(Chapter 3\'s Additional Character)',
      role: 'Villager Souls',
      description: 'The souls of villagers who participated in the \'forgotten ritual\' in the past. Trapped by the curse, they suffer and try to prevent the players from entering.',
      alibi: '',
      motive: ''
    },
    {
      id: 'D04',
      name: '(Chapter 3\'s Additional Character)',
      role: 'Ritual Leader',
      description: 'The figure of the ritual leader, becoming clearer in Lily\'s drawings. His existence is connected to the core of the curse.',
      alibi: '',
      motive: ''
    },
    {
      id: 'D05',
      name: '(Chapter 3\'s Additional Character)',
      role: 'Ancient Text Entity',
      description: 'An entity mentioned in ancient texts deciphered by Alex, who knows how to break the curse. However, this entity might have already disappeared.',
      alibi: '',
      motive: ''
    },
    {
      id: 'D06',
      name: '(Chapter 3\'s Final Character)',
      role: 'Curse Core',
      description: 'Revealed when all character cards of Chapter 3 are collected, the true identity of the core entity maintaining the curse.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'D13',
      name: 'Fragment of the Loop',
      description: 'A strange crystal fragment believed to remain in the church\'s underground altar, binding the curse.',
      details: 'It emits a dark red light.',
      location: 'D08'
    },
    {
      id: 'D14',
      name: 'Reversed Ritual',
      description: 'The specific method or incantation needed to destroy the \'Fragment of the Loop\' or reverse the ritual to break the curse.',
      details: '',
      location: ''
    },
    {
      id: 'D15',
      name: 'secret of the Mural',
      description: 'A mural depicting the process of the forgotten ritual, eerily drawn on the walls around the church\'s underground altar.',
      details: 'It serves as an important clue to understanding the origin of the curse.',
      location: 'D08'
    },
    {
      id: 'D16',
      name: 'Amplified Time Distortion',
      description: 'Evidence that the village\'s repeating phenomena intensify as attempts are made to break the curse.',
      details: 'The flow of time becomes more unstable.',
      location: ''
    },
    {
      id: 'D17',
      name: '(Chapter 3\'s Additional Evidence)',
      description: 'A hint about the \'price\' mentioned by Grandma Elara to break the curse.',
      details: 'This indicates the risks players must take.',
      location: 'D01'
    },
    {
      id: 'D18',
      name: '(Chapter 3\'s Final Evidence)',
      description: 'Revealed when all evidence cards of Chapter 3 are collected, the decisive clue needed to execute the final plan to break the curse.',
      details: '',
      location: ''
    }
  ],
  locations: [
    {
      id: 'D07',
      name: 'Old Church',
      description: 'An old, dilapidated church located on the highest hill in the village.',
      details: 'A musty, moldy smell and an unknown chill permeate the air.'
    },
    {
      id: 'D08',
      name: 'Church Underground Altar',
      description: 'An altar discovered through a secret passage leading to the church\'s basement.',
      details: 'It is believed to contain traces of the ritual and the \'Fragment of the Loop\'.' 
    },
    {
      id: 'D09',
      name: '(Chapter 3\'s Additional Location)',
      description: 'A specific space inside the church.',
      details: 'Here, remnants of past rituals or artifacts related to the curse can be found.'
    },
    {
      id: 'D10',
      name: '(Chapter 3\'s Additional Location)',
      description: 'A place where the villagers\' eyes begin to fill with madness.',
      details: 'It shows that the curse\'s influence is spreading throughout the village.'
    },
    {
      id: 'D11',
      name: '(Chapter 3\'s Additional Location)',
      description: 'A place frequently appearing in Lily\'s drawings, where cursed past scenes are re-enacted.',
      details: ''
    },
    {
      id: 'D12',
      name: '(Chapter 3\'s Final Location)',
      description: 'Revealed when all location cards of Chapter 3 are collected, the place where the core of the curse manifests most powerfully.',
      details: ''
    }
  ],
  connectionRules: [
    {
      id: 'rule_D01_D02_D03',
      cards: ['D01', 'D02'],
      result: 'Discovered information about the souls of villagers who participated in the \'forgotten ritual\' in the past.',
      unlock: 'D03'
    },
    {
      id: 'rule_D01_D03_D04',
      cards: ['D01', 'D03'],
      result: 'Confirmed the figure of the ritual leader becoming clearer in Lily\'s drawings.',
      unlock: 'D04'
    },
    {
      id: 'rule_D02_D04_D05',
      cards: ['D02', 'D04'],
      result: 'Obtained a clue about the entity mentioned in ancient texts deciphered by Alex, who knows how to break the curse.',
      unlock: 'D05'
    },
    {
      id: 'rule_D03_D05_D06',
      cards: ['D03', 'D05'],
      result: 'Information about Chapter 3\'s Final Character has been unlocked.',
      unlock: 'D06'
    },
    {
      id: 'rule_D07_D08_D09',
      cards: ['D07', 'D08'],
      result: 'Obtained information about a specific space inside the church.',
      unlock: 'D09'
    },
    {
      id: 'rule_D07_D09_D10',
      cards: ['D07', 'D09'],
      result: 'Discovered the place where the villagers\' eyes begin to fill with madness.',
      unlock: 'D10'
    },
    {
      id: 'rule_D08_D10_D11',
      cards: ['D08', 'D10'],
      result: 'Learned about the place frequently appearing in Lily\'s drawings, where cursed past scenes are re-enacted.',
      unlock: 'D11'
    },
    {
      id: 'rule_D09_D11_D12',
      cards: ['D09', 'D11'],
      result: 'Information about Chapter 3\'s Final Location has been unlocked.',
      unlock: 'D12'
    },
    {
      id: 'rule_D13_D14_D15',
      cards: ['D13', 'D14'],
      result: 'Deciphered the secret of the mural.',
      unlock: 'D15'
    },
    {
      id: 'rule_D13_D15_D16',
      cards: ['D13', 'D15'],
      result: 'Obtained a clue about the amplified time distortion.',
      unlock: 'D16'
    },
    {
      id: 'rule_D14_D16_D17',
      cards: ['D14', 'D16'],
      result: 'Found a hint about the \'price\' mentioned by Grandma Elara to break the curse.',
      unlock: 'D17'
    },
    {
      id: 'rule_D15_D17_D18',
      cards: ['D15', 'D17'],
      result: 'Chapter 3\'s Final Evidence has been unlocked.',
      unlock: 'D18'
    }
  ],
  fragments: [],
  winCondition: 'D18',
  initialCards: ['D01', 'D02', 'D07', 'D08', 'D13', 'D14']
};