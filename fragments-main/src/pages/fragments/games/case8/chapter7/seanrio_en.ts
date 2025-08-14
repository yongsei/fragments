export const case8_chapter6_en = {
  id: 'case8_chapter6',
  title: 'Finale: New Fog',
  story: 'Travelers leave Echowood village and return to civilization, but realize that the nightmares and scars from their experience in the village remain deeply ingrained in their lives. Despite the curse being broken, the ending leaves a lingering feeling that they might wander forever in a new kind of \'fog\'.',
  victim: '',
  suspects: [
    {
      id: 'G01',
      name: '(Epilogue\'s Character)',
      role: 'Alex',
      description: 'Alex returns to civilization. He seems unable to maintain his journalistic composure, and the time he spends staring blankly into space increases. His logical worldview has been shattered.',
      alibi: '',
      motive: ''
    },
    {
      id: 'G02',
      name: '(Epilogue\'s Character)',
      role: 'Traveler',
      description: 'The player who left Echowood village. A deeper mental scar weighs them down more than physical fatigue.',
      alibi: '',
      motive: ''
    },
    {
      id: 'G03',
      name: '(Epilogue\'s Additional Character)',
      role: 'Traveler',
      description: 'The player seeing the shadow of Echowood village in their ordinary life. They read the fear of the villagers in the faces of passersby.',
      alibi: '',
      motive: ''
    },
    {
      id: 'G04',
      name: '(Epilogue\'s Additional Character)',
      role: 'Traveler',
      description: 'The player hearing Grandma Elara\'s warning even in the rustling wind. The memory of the village continues to torment them.',
      alibi: '',
      motive: ''
    },
    {
      id: 'G05',
      name: '(Epilogue\'s Additional Character)',
      role: 'Traveler',
      description: 'The player seeing Lily\'s drawings repeatedly in their dreams. The village\'s nightmare is deeply embedded in their subconscious.',
      alibi: '',
      motive: ''
    },
    {
      id: 'G06',
      name: '(Epilogue\'s Final Character)',
      role: 'Traveler',
      description: 'Revealed when all character cards of the Epilogue are collected, the player\'s inner self, forever changed by the experience in Echowood village.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'G13',
      name: '(Epilogue\'s Evidence)',
      description: 'Alex\'s notebook. Pages are no longer filled with notes but lie blankly open.',
      details: 'It shows that his logical worldview has collapsed.',
      location: 'G01'
    },
    {
      id: 'G14',
      name: '(Epilogue\'s Evidence)',
      description: 'The lingering vibration of the \'Fragment of the Loop\' as if still felt at the player\'s fingertips.',
      details: 'The physical remnant of the curse is still present.',
      location: ''
    },
    {
      id: 'G15',
      name: '(Epilogue\'s Additional Evidence)',
      description: 'The memory of Echowood village that suddenly comes to mind in ordinary life.',
      details: 'This shows the deep scar ingrained in the player\'s mind.',
      location: ''
    },
    {
      id: 'G16',
      name: '(Epilogue\'s Additional Evidence)',
      description: 'Grandma Elara\'s warning heard in the rustling wind.',
      details: 'The lingering effects of the curse continue to follow the player.',
      location: 'G04'
    },
    {
      id: 'G17',
      name: '(Epilogue\'s Additional Evidence)',
      description: 'Lily\'s drawings repeating in dreams.',
      details: 'It shows that the village\'s nightmare is deeply embedded in the player\'s subconscious.',
      location: 'G05'
    },
    {
      id: 'G18',
      name: '(Epilogue\'s Final Evidence)',
      description: 'Revealed when all evidence cards of the Epilogue are collected, the indelible mark left on the player\'s life by the experience in Echowood village.',
      details: '',
      location: ''
    },
    {
      id: 'G19',
      name: 'Hidden Truth',
      description: 'New facts revealed from Grandma Elara\'s warning and the changed traveler\'s testimony.',
      details: 'Hints that liberation from the curse might mean new imprisonment for the traveler.',
      location: 'G04'
    },
    {
      id: 'G20',
      name: 'Connection Link',
      description: 'A mysterious connection point between the unmapped village and the space of new fog.',
      details: 'Shows that while the old fog is gone, a new form of fog can envelop the traveler.',
      location: 'G10'
    },
    {
      id: 'G21',
      name: 'Dark Signal',
      description: 'Supernatural correlation discovered between dream Lily and shadows in daily life.',
      details: 'Reveals how past experiences have changed present perception.',
      location: 'G05'
    },
    {
      id: 'G22',
      name: 'Deep Meaning',
      description: 'The true meaning of scars revealed by combining Elara\'s warning with the changed inner self.',
      details: 'Shows that all experiences ultimately become life lessons that lead to deeper understanding.',
      location: 'G19'
    },
    {
      id: 'G23',
      name: 'Core Clue',
      description: 'Decisive evidence revealed when all connections between locations and entities are completed.',
      details: 'Presents the final conclusion about how the Echowood experience has forever changed the traveler.',
      location: 'G20'
    }
  ],
  locations: [
    {
      id: 'G07',
      name: '(Epilogue\'s Location)',
      description: 'The road leaving Echowood village.',
      details: 'The dense fog has lifted, and bright sunlight shines, but a fog still lingers in the player\'s mind.'
    },
    {
      id: 'G08',
      name: '(Epilogue\'s Location)',
      description: 'The cityscape upon returning to civilization.',
      details: 'However, everything feels different to the player.'
    },
    {
      id: 'G09',
      name: '(Epilogue\'s Additional Location)',
      description: 'A specific location in Echowood village that repeats in the player\'s dreams.',
      details: 'It remains the source of nightmares.'
    },
    {
      id: 'G10',
      name: '(Epilogue\'s Additional Location)',
      description: 'Echowood village, which remains unmapped.',
      details: 'Its current state is unknown, but it remains vivid in the player\'s memory.'
    },
    {
      id: 'G11',
      name: '(Epilogue\'s Additional Location)',
      description: 'A place where the player sees the shadow of Echowood village in their daily life.',
      details: 'An ordinary space feels ominous.'
    },
    {
      id: 'G12',
      name: '(Epilogue\'s Final Location)',
      description: 'Revealed when all location cards of the Epilogue are collected, a space symbolizing the new kind of \'fog\' the player might wander in forever.',
      details: ''
    }
  ],
  connectionRules: [
    {
      id: 'rule_G01_G02_G03',
      cards: ['G01', 'G02'],
      result: 'Discovered information about the player seeing the shadow of Echowood village in their ordinary life.',
      unlock: 'G03'
    },
    {
      id: 'rule_G01_G03_G04',
      cards: ['G01', 'G03'],
      result: 'Obtained a clue about the player hearing Grandma Elara\'s warning even in the rustling wind.',
      unlock: 'G04'
    },
    {
      id: 'rule_G02_G04_G05',
      cards: ['G02', 'G04'],
      result: 'Found information about the player seeing Lily\'s drawings repeatedly in their dreams.',
      unlock: 'G05'
    },
    {
      id: 'rule_G03_G05_G06',
      cards: ['G03', 'G05'],
      result: 'Information about the Epilogue\'s Final Character has been unlocked.',
      unlock: 'G06'
    },
    {
      id: 'rule_G07_G08_G09',
      cards: ['G07', 'G08'],
      result: 'Obtained information about a specific location in Echowood village that repeats in the player\'s dreams.',
      unlock: 'G09'
    },
    {
      id: 'rule_G07_G09_G10',
      cards: ['G07', 'G09'],
      result: 'Discovered a clue about Echowood village, which remains unmapped.',
      unlock: 'G10'
    },
    {
      id: 'rule_G08_G10_G11',
      cards: ['G08', 'G10'],
      result: 'Learned about a place where the player sees the shadow of Echowood village in their daily life.',
      unlock: 'G11'
    },
    {
      id: 'rule_G09_G11_G12',
      cards: ['G09', 'G11'],
      result: 'Information about the Epilogue\'s Final Location has been unlocked.',
      unlock: 'G12'
    },
    {
      id: 'rule_G13_G14_G15',
      cards: ['G13', 'G14'],
      result: 'Obtained information about the memory of Echowood village that suddenly comes to mind in ordinary life.',
      unlock: 'G15'
    },
    {
      id: 'rule_G13_G15_G16',
      cards: ['G13', 'G15'],
      result: 'Obtained a clue about Grandma Elara\'s warning heard in the rustling wind.',
      unlock: 'G16'
    },
    {
      id: 'rule_G14_G16_G17',
      cards: ['G14', 'G16'],
      result: 'Found evidence of Lily\'s drawings repeating in dreams.',
      unlock: 'G17'
    },
    {
      id: 'rule_G15_G17_G18',
      cards: ['G15', 'G17'],
      result: 'The Epilogue\'s Final Evidence has been unlocked.',
      unlock: 'G18'
    },

    // Additional connection rules - ensuring all cards are needed for victory
    {
      id: 'rule_G04_G06_G19',
      cards: ['G04', 'G06'],
      result: 'Grandma Elara\'s warning and the changed traveler\'s inner self combine to reveal new truths.',
      unlock: 'G19'
    },
    {
      id: 'rule_G10_G12_G20',
      cards: ['G10', 'G12'],
      result: 'A connection link between the unmapped village and the space of new fog has been discovered.',
      unlock: 'G20'
    },
    {
      id: 'rule_G05_G11_G21',
      cards: ['G05', 'G11'],
      result: 'Hidden correlation between dream Lily and daily shadows has been revealed.',
      unlock: 'G21'
    },
    {
      id: 'rule_G16_G19_G22',
      cards: ['G16', 'G19'],
      result: 'The warning\'s echo and inner truth combine to find deeper meaning.',
      unlock: 'G22'
    },
    {
      id: 'rule_G20_G21_G23',
      cards: ['G20', 'G21'],
      result: 'Connections between locations and entities are completed, revealing the core clue.',
      unlock: 'G23'
    },
    // Final victory combination
    {
      id: 'rule_G22_G23_G18',
      cards: ['G22', 'G23'],
      result: 'All truths of the Epilogue converge, fully revealing the true meaning of the indelible mark left by the Echowood experience.',
      unlock: 'G18'
    }
  ],
  fragments: [],
  winCondition: 'G18',
  initialCards: ['G01', 'G02', 'G07', 'G08', 'G13', 'G14']
};
