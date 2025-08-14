export const case8_chapter1_en = {
  id: 'case8_chapter1',
  title: 'Chapter 1: Repeating Shadows',
  story: 'Travelers trapped in the village witness strange repeating phenomena, vaguely recognizing the existence of a curse, and receive an unknown warning through their first encounter with Grandma Elara.',
  victim: '',
  suspects: [
    {
      id: 'B01',
      name: 'Grandma Elara',
      role: 'Village Elder',
      description: 'An old woman met in the vegetable garden at the village entrance. With deep wrinkles and eyes full of sadness and fear, she gives an unknown warning about the fog and time. Her words are confusing but hint at the existence of a curse.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B02',
      name: 'Repeating Elder',
      role: 'Villager',
      description: 'An old man lingering in the same posture by the old mailbox, exactly where he was seen yesterday. When approached, he stares blankly, being the first person to show the village\'s repeating phenomena.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B03',
      name: 'singing Children',
      role: 'Village Children',
      description: 'Children in the village square repeating the same song and play as yesterday. Their innocent appearance, contrasted with the eerie repetition, makes it even more ominous.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B04',
      name: '(Chapter 1\'s Additional Character)',
      role: 'Villager',
      description: 'Another character found in the repeating daily life of the village. His actions and expressions reveal the suffering of the villagers trapped by the curse.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B05',
      name: '(Chapter 1\'s Additional Character)',
      role: 'Villager',
      description: 'A character who repeatedly appears in a specific location in the village. His actions can be an important clue to understanding the pattern of the curse.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B06',
      name: '(Chapter 1\'s Final Character)',
      role: 'Conclusion',
      description: 'Revealed when all character cards of Chapter 1 are collected, a character symbolizing the collective unconsciousness of the villagers or their reaction to the curse.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'B13',
      name: 'Eerie Repetition',
      description: 'The phenomenon of the same situations, conversations, and actions repeating as yesterday.',
      details: 'It is too eerie to be dismissed as mere coincidence.',
      location: ''
    },
    {
      id: 'B14',
      name: 'stagnant Time',
      description: 'The feeling that time has not been flowing properly since entering the village.',
      details: 'Clocks are stopped, and the positions of the sun and moon seem unchanged.',
      location: ''
    },
    {
      id: 'B15',
      name: 'Elara\'s Warning',
      description: 'Grandma Elara\'s cryptic words: "The fog swallows everything, even time." ',
      details: 'It is the first direct warning hinting at the existence of a curse.',
      location: 'B01'
    },
    {
      id: 'B16',
      name: 'Children\'s Song',
      description: 'A strange song repeatedly sung by children in the village square.',
      details: 'The lyrics are unknown, but it carries an ominous undertone.',
      location: 'B08'
    },
    {
      id: 'B17',
      name: '(Chapter 1\'s Additional Evidence)',
      description: 'Another piece of evidence found amidst the village\'s repeating phenomena.',
      details: 'This can be an important clue to understanding the pattern of the curse.',
      location: ''
    },
    {
      id: 'B18',
      name: '(Chapter 1\'s Final Evidence)',
      description: 'Revealed when all evidence cards of Chapter 1 are collected, a decisive piece of evidence proving that the village\'s curse is not a mere illusion.',
      details: '',
      location: ''
    },
    {
      id: 'B19',
      name: 'Hidden Truth',
      description: 'New facts revealed from the behavior of villagers and additional characters.',
      details: 'The true nature of the curse discovered within the repeating daily life becomes clearer.',
      location: 'B04'
    },
    {
      id: 'B20',
      name: 'Connection Link',
      description: 'A mysterious connection point discovered between the village\'s locations.',
      details: 'Shows how the places where time has stopped are connected to each other.',
      location: 'B11'
    },
    {
      id: 'B21',
      name: 'Dark Signal',
      description: 'Supernatural correlation discovered between repeating phenomena and additional evidence.',
      details: 'Reveals how the curse dominates the entire village.',
      location: 'B05'
    },
    {
      id: 'B22',
      name: 'Deep Meaning',
      description: 'The true meaning of the curse revealed by combining Elara\'s warning with hidden truths.',
      details: 'Reveals that the repetition of time is not a simple phenomenon but an intentional curse.',
      location: 'B19'
    },
    {
      id: 'B23',
      name: 'Core Clue',
      description: 'Decisive evidence revealed when all connections between locations and entities are completed.',
      details: 'Provides the identity of the repeating shadows and clues to solve them.',
      location: 'B20'
    }
  ],
  locations: [
    {
      id: 'B07',
      name: 'Old Mailbox',
      description: 'The place where the repeating elder lingers.',
      details: 'The rusty, old mailbox suggests that no one has sent letters for a long time.'
    },
    {
      id: 'B08',
      name: 'Village Square',
      description: 'Where children repeat the same song and play.',
      details: 'It is the center of the village, but an eerie silence rather than vibrancy hangs over it.'
    },
    {
      id: 'B09',
      name: 'Vegetable Garden',
      description: 'The small vegetable garden where Grandma Elara was bending over.',
      details: 'The soil is dry, and the plants seem to have lost their vitality.'
    },
    {
      id: 'B10',
      name: 'Old Lodging',
      description: 'A private house-like lodging where we spent the night.',
      details: 'Unknown sounds were heard all night, and the fog outside the window remains thick.'
    },
    {
      id: 'B11',
      name: '(Chapter 1\'s Additional Location)',
      description: 'Another location where the village\'s repeating phenomena are witnessed.',
      details: 'The scenery there is identical to yesterday, as if time has stopped.'
    },
    {
      id: 'B12',
      name: '(Chapter 1\'s Final Location)',
      description: 'Revealed when all location cards of Chapter 1 are collected, the place where the village\'s time-repeating phenomenon is most clearly manifested.',
      details: ''
    }
  ],
  connectionRules: [
    {
      id: 'rule_B01_B02_B03',
      cards: ['B01', 'B02'],
      result: 'Discovered new information about the Singing Children.',
      unlock: 'B03'
    },
    {
      id: 'rule_B01_B03_B04',
      cards: ['B01', 'B03'],
      result: 'Discovered another character in the repeating daily life of the village.',
      unlock: 'B04'
    },
    {
      id: 'rule_B02_B04_B05',
      cards: ['B02', 'B04'],
      result: 'Obtained a clue about the character repeatedly appearing in a specific location in the village.',
      unlock: 'B05'
    },
    {
      id: 'rule_B03_B05_B06',
      cards: ['B03', 'B05'],
      result: 'Information about Chapter 1\'s Final Character has been unlocked.',
      unlock: 'B06'
    },
    {
      id: 'rule_B07_B08_B09',
      cards: ['B07', 'B08'],
      result: 'Obtained information about the Vegetable Garden.',
      unlock: 'B09'
    },
    {
      id: 'rule_B07_B09_B10',
      cards: ['B07', 'B09'],
      result: 'Discovered a clue about the Old Lodging.',
      unlock: 'B10'
    },
    {
      id: 'rule_B08_B10_B11',
      cards: ['B08', 'B10'],
      result: 'Learned about another location where the village\'s repeating phenomena are witnessed.',
      unlock: 'B11'
    },
    {
      id: 'rule_B09_B11_B12',
      cards: ['B09', 'B11'],
      result: 'Information about Chapter 1\'s Final Location has been unlocked.',
      unlock: 'B12'
    },
    {
      id: 'rule_B13_B14_B15',
      cards: ['B13', 'B14'],
      result: 'Realized the meaning of Elara\'s Warning.',
      unlock: 'B15'
    },
    {
      id: 'rule_B13_B15_B16',
      cards: ['B13', 'B15'],
      result: 'Obtained a clue about the Children\'s Song.',
      unlock: 'B16'
    },
    {
      id: 'rule_B14_B16_B17',
      cards: ['B14', 'B16'],
      result: 'Found another piece of evidence amidst the village\'s repeating phenomena.',
      unlock: 'B17'
    },
    {
      id: 'rule_B15_B17_B18',
      cards: ['B15', 'B17'],
      result: 'Chapter 1\'s Final Evidence has been unlocked.',
      unlock: 'B18'
    },

    // Additional connection rules - ensuring all cards are needed for victory
    {
      id: 'rule_B04_B06_B19',
      cards: ['B04', 'B06'],
      result: 'The testimonies of villagers and the final character combine to reveal new truths.',
      unlock: 'B19'
    },
    {
      id: 'rule_B10_B12_B20',
      cards: ['B10', 'B12'],
      result: 'A connection link between the old lodging and the final location has been discovered.',
      unlock: 'B20'
    },
    {
      id: 'rule_B05_B11_B21',
      cards: ['B05', 'B11'],
      result: 'Hidden correlation between repeating character and additional location has been revealed.',
      unlock: 'B21'
    },
    {
      id: 'rule_B16_B19_B22',
      cards: ['B16', 'B19'],
      result: 'The children\'s song and hidden truths combine to find deeper meaning.',
      unlock: 'B22'
    },
    {
      id: 'rule_B20_B21_B23',
      cards: ['B20', 'B21'],
      result: 'Connections between locations and entities are completed, revealing the core clue.',
      unlock: 'B23'
    },
    // Final victory combination
    {
      id: 'rule_B22_B23_B18',
      cards: ['B22', 'B23'],
      result: 'All truths of Chapter 1 converge, clearly revealing the village\'s repeating shadows and the existence of the curse.',
      unlock: 'B18'
    }
  ],
  fragments: [],
  winCondition: 'B18',
  initialCards: ['B01', 'B02', 'B07', 'B08', 'B13', 'B14']
};