
export const case8_chapter0_en = {
  id: 'case8_chapter0',
  title: 'Prologue: Into the Fog',
  story: 'During a peaceful journey, players are suddenly enveloped by a dense fog, losing their way and arriving at the unmapped village of \'Echowood\'. They begin to sense an ominous presence amidst the village\'s eerie silence and the uneasy gazes of its residents.',
  victim: '',
  suspects: [
    {
      id: 'A01',
      name: 'Traveler',
      role: 'Player Character',
      description: 'A stranger who lost their way in the dense fog and arrived at Echowood village. They are destined to uncover the village\'s secrets.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A02',
      name: 'Villager',
      role: 'Villager',
      description: 'A villager encountered in the fog. They appear uneasy, wary of strangers, or avoid eye contact. Their eyes hold an inexplicable fatigue and fear.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A03',
      name: 'Innkeeper',
      role: 'Innkeeper',
      description: 'The owner of the old dwelling, the only lodging in the village. They seem tired and taciturn, but appear to vaguely know the village\'s secrets. Their silence implies much.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A04',
      name: 'Lost Driver',
      role: 'Driver',
      description: 'Another traveler who was stranded for hours by the roadside due to the fog. They might have sensed the village\'s ominous aura first, and their face is etched with deep despair.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A05',
      name: 'shadow Figure',
      role: 'Unknown Entity',
      description: 'A vague, shapeless entity glimpsed in the fog. It might be connected to the village\'s curse and quickly disappears from sight.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A06',
      name: '(Prologue\'s Final Character)',
      role: 'Conclusion',
      description: 'Revealed when all character cards in the prologue are collected, a faint trace of another trapped entity in the village. This entity delivers the first warning about the village\'s curse.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'A13',
      name: 'Eerie Silence',
      description: 'An abnormal silence felt within the fog.',
      details: 'The sound of wind and even distant signs of civilization seem to have vanished, and this silence amplifies the unease.',
      location: 'A07'
    },
    {
      id: 'A14',
      name: 'Uneasy Gaze',
      description: 'The wary and fearful gazes of the villagers towards strangers.',
      details: 'Their eyes seem to be hiding something or attempting to warn.',
      location: 'A02'
    },
    {
      id: 'A15',
      name: 'Name Not on Map',
      description: 'The fact that the village name \'Echowood\' does not appear on any map.',
      details: 'This strongly suggests the village is isolated from the outside world.',
      location: 'A08'
    },
    {
      id: 'A16',
      name: 'Old Wooden Sign',
      description: 'An old wooden sign at the village entrance, showing clear signs of age.',
      details: 'The writing is faded, but \'Echowood\' is clearly legible.',
      location: 'A08'
    },
    {
      id: 'A17',
      name: 'Ominous Aura',
      description: 'An inexplicable ominous and gloomy atmosphere enveloping the entire village.',
      details: 'This aura makes one realize it\'s not merely due to the fog.',
      location: 'A07'
    },
    {
      id: 'A18',
      name: '(Prologue\'s Final Evidence)',
      description: 'Revealed when all evidence cards in the prologue are collected, the first direct clue about the village\'s curse.',
      details: 'This motivates the player to proceed to the next chapter.',
      location: ''
    }
  ],
  locations: [
    {
      id: 'A07',
      name: 'Dense Fog',
      description: 'A thick, damp fog that swallows everything and obscures vision.',
      details: 'It serves to isolate the village from the outside world, and an unknown ominous presence can be felt within it.'
    },
    {
      id: 'A08',
      name: 'Echowood Village Entrance',
      description: 'The entrance to the unmapped village, marked by an old wooden sign.',
      details: 'The sign\'s lettering is faded, and there are unknown scratch marks beneath it.'
    },
    {
      id: 'A09',
      name: 'Old Dwelling',
      description: 'A lodging more akin to an old private house than an inn.',
      details: 'A musty smell and a strange chill permeate the air. Windows are tightly shut, and there\'s hardly any sign of life inside.'
    },
    {
      id: 'A10',
      name: 'silent Road',
      description: 'A secluded national road leading to the village, where all sounds have vanished due to the fog.',
      details: 'There are almost no traces of vehicles, giving a sense of isolation as if at the end of the world.'
    },
    {
      id: 'A11',
      name: 'Faint Light',
      description: 'A faint light flickering beyond the fog, the only beacon of hope indicating the village\'s existence.',
      details: 'However, as one approaches, the light becomes dimmer, casting ominous shadows.'
    },
    {
      id: 'A12',
      name: '(Prologue\'s Final Location)',
      description: 'Revealed when all location cards in the prologue are collected, an ominous hidden place in the village.',
      details: 'It might be related to the origin of the curse.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_A01_A02_A03',
      cards: ['A01', 'A02'],
      result: 'Discovered new information about the Innkeeper.',
      unlock: 'A03'
    },
    {
      id: 'rule_A01_A03_A04',
      cards: ['A01', 'A03'],
      result: 'Obtained a clue about the Lost Driver.',
      unlock: 'A04'
    },
    {
      id: 'rule_A02_A04_A05',
      cards: ['A02', 'A04'],
      result: 'Found a lead on the identity of the Shadow Figure in the fog.',
      unlock: 'A05'
    },
    {
      id: 'rule_A03_A05_A06',
      cards: ['A03', 'A05'],
      result: 'Information about the Prologue\'s Final Character has been unlocked.',
      unlock: 'A06'
    },
    {
      id: 'rule_A07_A08_A09',
      cards: ['A07', 'A08'],
      result: 'Obtained information about the Old Dwelling.',
      unlock: 'A09'
    },
    {
      id: 'rule_A07_A09_A10',
      cards: ['A07', 'A09'],
      result: 'Discovered a clue about the Silent Road.',
      unlock: 'A10'
    },
    {
      id: 'rule_A08_A10_A11',
      cards: ['A08', 'A10'],
      result: 'Understood the meaning of the Faint Light.',
      unlock: 'A11'
    },
    {
      id: 'rule_A09_A11_A12',
      cards: ['A09', 'A11'],
      result: 'Information about the Prologue\'s Final Location has been unlocked.',
      unlock: 'A12'
    },
    {
      id: 'rule_A13_A14_A15',
      cards: ['A13', 'A14'],
      result: 'Realized the meaning of the unmapped village name.',
      unlock: 'A15'
    },
    {
      id: 'rule_A13_A15_A16',
      cards: ['A13', 'A15'],
      result: 'Obtained a clue about the Old Wooden Sign.',
      unlock: 'A16'
    },
    {
      id: 'rule_A14_A16_A17',
      cards: ['A14', 'A16'],
      result: 'Found evidence of the village\'s Ominous Aura.',
      unlock: 'A17'
    },
    {
      id: 'rule_A15_A17_A18',
      cards: ['A15', 'A17'],
      result: 'The Prologue\'s Final Evidence has been unlocked.',
      unlock: 'A18'
    }
  ],
  fragments: [],
  winCondition: 'A18',
  initialCards: ['A01', 'A02', 'A07', 'A08', 'A13', 'A14']
};
