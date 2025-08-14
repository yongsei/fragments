export const case8_chapter5_en = {
  id: 'case8_chapter5',
  title: 'Chapter 5: End of the Fog',
  story: 'The final confrontation with the curse\'s guardian. They break the curse by destroying the \'Fragment of the Loop\' or successfully performing the \'Reversed Ritual\', witnessing the fog lift from the village. However, they recognize the scars gained from the process and the changes in the village, leading to the conclusion.',
  victim: '',
  suspects: [
    {
      id: 'F01',
      name: '(Chapter 5\'s Character)',
      role: 'Traveler and Alex',
      description: 'After the guardian disappears, the player and Alex support each other as they head towards the surface from the altar. Their faces show a mix of deep fatigue and relief.',
      alibi: '',
      motive: ''
    },
    {
      id: 'F02',
      name: '(Chapter 5\'s Character)',
      role: 'Villagers',
      description: 'After the curse is broken, the villagers still have blank expressions, but traces of madness or fear are gone. Their eyes are empty but peaceful.',
      alibi: '',
      motive: ''
    },
    {
      id: 'F03',
      name: '(Chapter 5\'s Additional Character)',
      role: 'Grandma Elara',
      description: 'Grandma Elara silently watches the players emerge from the altar. Her eyes show a mix of sadness and an unknown sense of relief.',
      alibi: '',
      motive: ''
    },
    {
      id: 'F04',
      name: '(Chapter 5\'s Additional Character)',
      role: 'Lily',
      description: 'Lily approaches the player and hands them a normal child\'s drawing, no longer eerie. Her change symbolizes liberation from the curse.',
      alibi: '',
      motive: ''
    },
    {
      id: 'F05',
      name: '(Chapter 5\'s Additional Character)',
      role: 'Remaining Villager',
      description: 'A villager who remains in the village even after the curse is broken, unable to forget the past suffering. His presence shows the lingering remnants of the curse.',
      alibi: '',
      motive: ''
    },
    {
      id: 'F06',
      name: '(Chapter 5\'s Final Character)',
      role: 'Price of Sacrifice',
      description: 'Revealed when all character cards of Chapter 5 are collected, a character symbolizing the price of sacrifice to break the curse.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'F13',
      name: 'Dispersed Guardian',
      description: 'The curse\'s guardian, dispersed like fog by the light emitted from the \'Fragment of the Loop\'.',
      details: '',
      location: ''
    },
    {
      id: 'F14',
      name: 'Ordinary Fragment',
      description: 'The \'Fragment of the Loop\', no longer emitting dark red light, transformed into an ordinary stone.',
      details: 'It shows that the curse\'s power has vanished.',
      location: 'F08'
    },
    {
      id: 'F15',
      name: 'Cleared Fog',
      description: 'The dense fog that covered the village completely lifts, and faint sunlight shines through.',
      details: 'It visually shows that the curse has been broken.',
      location: 'F07'
    },
    {
      id: 'F16',
      name: 'Lily\'s New Drawing',
      description: 'Lily hands the player a normal child\'s drawing, no longer eerie.',
      details: 'This symbolizes liberation from the curse.',
      location: 'F11'
    },
    {
      id: 'F17',
      name: '(Chapter 5\'s Additional Evidence)',
      description: 'Traces of madness and fear disappearing from the villagers\' eyes.',
      details: 'Their expressions are still tired, but they have regained peace.',
      location: 'F02'
    },
    {
      id: 'F18',
      name: '(Chapter 5\'s Final Evidence)',
      description: 'Revealed when all evidence cards of Chapter 5 are collected, evidence symbolizing the indelible scars left on the player even after the curse is broken.',
      details: '',
      location: ''
    },
    {
      id: 'F19',
      name: 'Hidden Truth',
      description: 'New facts revealed from Lily\'s transformation and the price of sacrifice.',
      details: 'Hints at the permanent impact left on the traveler even though the curse is broken.',
      location: 'F04'
    },
    {
      id: 'F20',
      name: 'Connection Link',
      description: 'A mysterious connection point between the village square and the place with lingering past traces.',
      details: 'Shows the deep impact the curse had on the village and its remnants.',
      location: 'F10'
    },
    {
      id: 'F21',
      name: 'Dark Signal',
      description: 'Supernatural correlation discovered between the freed villagers and the tranquil place.',
      details: 'Reveals the necessity of acceptance and letting go for complete liberation.',
      location: 'F05'
    },
    {
      id: 'F22',
      name: 'Deep Meaning',
      description: 'The true meaning of liberation revealed by combining Lily\'s new drawing with hidden truths.',
      details: 'Freedom from the curse means the beginning of a new life.',
      location: 'F19'
    },
    {
      id: 'F23',
      name: 'Core Clue',
      description: 'Decisive evidence revealed when all connections between locations and entities are completed.',
      details: 'Presents the way to complete liberation from the curse and coexistence.',
      location: 'F20'
    }
  ],
  locations: [
    {
      id: 'F07',
      name: 'Fog-Cleared Village',
      description: 'Echowood village after the curse is broken, with the dense fog lifted and sunlight shining through.',
      details: 'However, it still looks old and desolate.'
    },
    {
      id: 'F08',
      name: 'Church Underground Altar',
      description: 'The place where the guardian disappeared and the \'Fragment of the Loop\' turned into an ordinary stone.',
      details: ''
    },
    {
      id: 'F09',
      name: '(Chapter 5\'s Additional Location)',
      description: 'The road leading out of the village.',
      details: 'Unlike when they arrived, bright sunlight shines, but a fog still lingers in the player\'s mind.'
    },
    {
      id: 'F10',
      name: '(Chapter 5\'s Additional Location)',
      description: 'The village square where the villagers are gathered.',
      details: 'There are no more repeating games, but their faces still show deep fatigue.'
    },
    {
      id: 'F11',
      name: '(Chapter 5\'s Additional Location)',
      description: 'The place where Lily handed over her drawing.',
      details: 'It has regained a tranquility that hints at a new beginning.'
    },
    {
      id: 'F12',
      name: '(Chapter 5\'s Final Location)',
      description: 'Revealed when all location cards of Chapter 5 are collected, a place symbolizing the lingering traces of the past that remain in the village even after the curse is broken.',
      details: ''
    }
  ],
  connectionRules: [
    {
      id: 'rule_F01_F02_F03',
      cards: ['F01', 'F02'],
      result: 'Discovered information about the player and Alex supporting each other as they head towards the surface from the altar after the guardian disappears.',
      unlock: 'F03'
    },
    {
      id: 'rule_F01_F03_F04',
      cards: ['F01', 'F03'],
      result: 'Obtained a clue about Grandma Elara silently watching the players emerge from the altar.',
      unlock: 'F04'
    },
    {
      id: 'rule_F02_F04_F05',
      cards: ['F02', 'F04'],
      result: 'Found information about a villager who remains in the village even after the curse is broken, unable to forget past suffering.',
      unlock: 'F05'
    },
    {
      id: 'rule_F03_F05_F06',
      cards: ['F03', 'F05'],
      result: 'Information about Chapter 5\'s Final Character has been unlocked.',
      unlock: 'F06'
    },
    {
      id: 'rule_F07_F08_F09',
      cards: ['F07', 'F08'],
      result: 'Obtained information about the road leading out of the village.',
      unlock: 'F09'
    },
    {
      id: 'rule_F07_F09_F10',
      cards: ['F07', 'F09'],
      result: 'Discovered a clue about the village square where the villagers are gathered.',
      unlock: 'F10'
    },
    {
      id: 'rule_F08_F10_F11',
      cards: ['F08', 'F10'],
      result: 'Learned about the place where Lily handed over her drawing.',
      unlock: 'F11'
    },
    {
      id: 'rule_F09_F11_F12',
      cards: ['F09', 'F11'],
      result: 'Information about Chapter 5\'s Final Location has been unlocked.',
      unlock: 'F12'
    },
    {
      id: 'rule_F13_F14_F15',
      cards: ['F13', 'F14'],
      result: 'Obtained information about the cleared fog.',
      unlock: 'F15'
    },
    {
      id: 'rule_F13_F15_F16',
      cards: ['F13', 'F15'],
      result: 'Obtained a clue about Lily\'s new drawing.',
      unlock: 'F16'
    },
    {
      id: 'rule_F14_F16_F17',
      cards: ['F14', 'F16'],
      result: 'Found evidence of madness and fear disappearing from the villagers\' eyes.',
      unlock: 'F17'
    },
    {
      id: 'rule_F15_F17_F18',
      cards: ['F15', 'F17'],
      result: 'Chapter 5\'s Final Evidence has been unlocked.',
      unlock: 'F18'
    },

    // Additional connection rules - ensuring all cards are needed for victory
    {
      id: 'rule_F04_F06_F19',
      cards: ['F04', 'F06'],
      result: 'Lily\'s transformation and the price of sacrifice combine to reveal new truths.',
      unlock: 'F19'
    },
    {
      id: 'rule_F10_F12_F20',
      cards: ['F10', 'F12'],
      result: 'A connection link between the village square and the place with lingering traces has been discovered.',
      unlock: 'F20'
    },
    {
      id: 'rule_F05_F11_F21',
      cards: ['F05', 'F11'],
      result: 'Hidden correlation between the remaining villager and the place of tranquil new beginnings has been revealed.',
      unlock: 'F21'
    },
    {
      id: 'rule_F16_F19_F22',
      cards: ['F16', 'F19'],
      result: 'Lily\'s new drawing and hidden truths combine to find deeper meaning.',
      unlock: 'F22'
    },
    {
      id: 'rule_F20_F21_F23',
      cards: ['F20', 'F21'],
      result: 'Connections between locations and entities are completed, revealing the core clue.',
      unlock: 'F23'
    },
    // Final victory combination
    {
      id: 'rule_F22_F23_F18',
      cards: ['F22', 'F23'],
      result: 'All truths of Chapter 5 converge, fully revealing the true meaning of the scars that remain even after the curse is broken.',
      unlock: 'F18'
    }
  ],
  fragments: [],
  winCondition: 'F18',
  initialCards: ['F01', 'F02', 'F07', 'F08', 'F13', 'F14']
};