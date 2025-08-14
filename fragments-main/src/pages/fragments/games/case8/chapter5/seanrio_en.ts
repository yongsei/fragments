export const case8_chapter4_en = {
  id: 'case8_chapter4',
  title: 'Chapter 4: Last Attempt',
  story: 'Discovering the \'Fragment of the Loop\' in the church\'s underground altar, they devise a plan to break the curse through a \'Reversed Ritual\' or destruction. They directly confront the curse\'s guardian, facing unexpected difficulties and sacrifices before the climax.',
  victim: '',
  suspects: [
    {
      id: 'E01',
      name: 'Curse Guardian',
      role: 'Guardian',
      description: 'A being formed from the black smoke rising from the \'Fragment of the Loop\'. Summoned through a ritual but uncontrollable, it is the core entity of the curse that binds time.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E02',
      name: '(Chapter 4\'s Character)',
      role: 'Alex',
      description: 'Alex desperately chanting the incantation for the Reversed Ritual. His concentration and desperation are palpable.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E03',
      name: '(Chapter 4\'s Additional Character)',
      role: 'Villager Phantoms',
      description: 'Phantoms of villagers suffering in the repeating time. They amplify the guardian\'s power or confuse the players\' minds.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E04',
      name: '(Chapter 4\'s Additional Character)',
      role: 'Grandma Elara',
      description: 'Grandma Elara\'s warning echoing in their ears. It shows the moment her prophecy comes true.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E05',
      name: '(Chapter 4\'s Additional Character)',
      role: 'Traveler',
      description: 'The player desperately enduring against the guardian\'s attacks. They are reaching their physical and mental limits.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E06',
      name: '(Chapter 4\'s Final Character)',
      role: 'sacrifice',
      description: 'Revealed when all character cards of Chapter 4 are collected, a hint about a being that might be sacrificed in the final attempt to break the curse.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'E13',
      name: 'Fragment of the Loop',
      description: 'A strange crystal fragment emitting a dark red light.',
      details: 'It is the core that binds the village\'s time and the source of the guardian\'s power.',
      location: 'E07'
    },
    {
      id: 'E14',
      name: 'Reversed Ritual Incantation',
      description: 'An ancient incantation Alex desperately chants, needed to reverse the curse.',
      details: 'Its power is immense but dangerous.',
      location: 'E02'
    },
    {
      id: 'E15',
      name: 'Guardian\'s Attack',
      description: 'The guardian\'s attack, which not only uses physical force but also induces mental fear.',
      details: 'It embodies the player\'s deepest fears.',
      location: 'E07'
    },
    {
      id: 'E16',
      name: 'Repeating Agony',
      description: 'The physical and mental pain experienced while enduring the guardian\'s attacks, repeating the same moment over and over.',
      details: '',
      location: ''
    },
    {
      id: 'E17',
      name: '(Chapter 4\'s Additional Evidence)',
      description: 'Black smoke emanating from the \'Fragment of the Loop\'.',
      details: 'It forms the guardian\'s shape and amplifies the curse\'s power.',
      location: 'E07'
    },
    {
      id: 'E18',
      name: '(Chapter 4\'s Final Evidence)',
      description: 'Revealed when all evidence cards of Chapter 4 are collected, the decisive clue that will determine the success of the final attempt to break the curse.',
      details: '',
      location: ''
    }
  ],
  locations: [
    {
      id: 'E07',
      name: 'Church Underground Altar',
      description: 'The place where the final confrontation with the curse\'s guardian takes place.',
      details: 'The \'Fragment of the Loop\' emitting a dark red light is placed here, and traces of the ritual are abundant.'
    },
    {
      id: 'E08',
      name: '(Chapter 4\'s Additional Location)',
      description: 'A mural depicting the ritual process, drawn on the walls around the altar.',
      details: 'Now, those drawings seem to writhe, creating an illusion.'
    },
    {
      id: 'E09',
      name: '(Chapter 4\'s Additional Location)',
      description: 'A space where the village\'s repeating phenomena begin to affect even the altar.',
      details: 'The distortion of time becomes more severe.'
    },
    {
      id: 'E10',
      name: '(Chapter 4\'s Additional Location)',
      description: 'A part of the altar destroyed or deformed by the guardian\'s attack.',
      details: 'It shows the intensity of the battle.'
    },
    {
      id: 'E11',
      name: '(Chapter 4\'s Additional Location)',
      description: 'A specific point where Alex concentrates during the \'Reversed Ritual\' to break the curse.',
      details: ''
    },
    {
      id: 'E12',
      name: '(Chapter 4\'s Final Location)',
      description: 'Revealed when all location cards of Chapter 4 are collected, the spatial background for the moment the curse is broken or further intensified.',
      details: ''
    }
  ],
  connectionRules: [
    {
      id: 'rule_E01_E02_E03',
      cards: ['E01', 'E02'],
      result: 'Discovered information about the phantoms of villagers suffering in the repeating time.',
      unlock: 'E03'
    },
    {
      id: 'rule_E01_E03_E04',
      cards: ['E01', 'E03'],
      result: 'Obtained a clue about Grandma Elara\'s warning echoing in their ears.',
      unlock: 'E04'
    },
    {
      id: 'rule_E02_E04_E05',
      cards: ['E02', 'E04'],
      result: 'Found information about the player desperately enduring against the guardian\'s attacks.',
      unlock: 'E05'
    },
    {
      id: 'rule_E03_E05_E06',
      cards: ['E03', 'E05'],
      result: 'Information about Chapter 4\'s Final Character has been unlocked.',
      unlock: 'E06'
    },
    {
      id: 'rule_E07_E08_E09',
      cards: ['E07', 'E08'],
      result: 'Obtained information about the space where the village\'s repeating phenomena begin to affect even the altar.',
      unlock: 'E09'
    },
    {
      id: 'rule_E07_E09_E10',
      cards: ['E07', 'E09'],
      result: 'Discovered a clue about a part of the altar destroyed or deformed by the guardian\'s attack.',
      unlock: 'E10'
    },
    {
      id: 'rule_E08_E10_E11',
      cards: ['E08', 'E10'],
      result: 'Learned about a specific point where Alex concentrates during the \'Reversed Ritual\' to break the curse.',
      unlock: 'E11'
    },
    {
      id: 'rule_E09_E11_E12',
      cards: ['E09', 'E11'],
      result: 'Information about Chapter 4\'s Final Location has been unlocked.',
      unlock: 'E12'
    },
    {
      id: 'rule_E13_E14_E15',
      cards: ['E13', 'E14'],
      result: 'Obtained information about the guardian\'s attack.',
      unlock: 'E15'
    },
    {
      id: 'rule_E13_E15_E16',
      cards: ['E13', 'E15'],
      result: 'Obtained a clue about the repeating agony.',
      unlock: 'E16'
    },
    {
      id: 'rule_E14_E16_E17',
      cards: ['E14', 'E16'],
      result: 'Found evidence of black smoke emanating from the \'Fragment of the Loop\'.',
      unlock: 'E17'
    },
    {
      id: 'rule_E15_E17_E18',
      cards: ['E15', 'E17'],
      result: 'Chapter 4\'s Final Evidence has been unlocked.',
      unlock: 'E18'
    }
  ],
  fragments: [],
  winCondition: 'E18',
  initialCards: ['E01', 'E02', 'E07', 'E08', 'E13', 'E14']
};