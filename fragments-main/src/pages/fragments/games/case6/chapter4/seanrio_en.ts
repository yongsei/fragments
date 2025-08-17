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

export const case6ch4En: GameScenario = {
  id: 'case6_chapter4',
  title: 'The Sunken Truth',
  story: 'The final chapter plunges players deep into the ocean to the mythical Sunken Cathedral, drawn by Elara\'s desperate plea. Here, the Guardian of the Ancient Crystal reveals the complete and horrifying truth behind the Luminous Plague, Kael\'s endless ambition, and the city\'s impending doom. Players face a climactic confrontation with Kael and a profound moral choice that will determine the fate of the city and its inhabitants, leading to a resolution that redefines heroism and sacrifice.',
  victim: '',
  suspects: [
    {
      id: 'CH4_CH01',
      name: 'Guardian of the Ancient Crystal',
      role: 'Character',
      description: 'The ancient guardian who has protected the Sunken Cathedral for thousands of years, appearing as a luminous energy form and communicating through the mind.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH4_CH04',
      name: 'Elara, the Selfless Savior',
      role: 'Character',
      description: 'Elara, who understands the nature of the crisis and accepts her fate, preparing to sacrifice herself to save the city.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH4_CH05',
      name: 'Kael, the Monstrous Alchemist',
      role: 'Character',
      description: 'Kael, transformed into a grotesque luminous monster by his unstable elixir, a destructive being consumed by his own ambition.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'CH4_EV01',
      name: 'The Mythical Sunken Cathedral',
      description: 'A legendary cathedral deep in the ocean with a massive crystal at its center emanating life energy.',
      details: 'Decorated with bioluminescent coral, it is the true source of the Luminous Plague and the heart of the crisis.',
      location: ''
    },
    {
      id: 'CH4_EV02',
      name: 'The Crystal\'s Horrific Warning',
      description: 'A horrific vision projected into the mind by the Guardian, showing a future where the crystal, depleted by Kael\'s greed, shatters and devours the city.',
      details: 'Warns of apocalyptic consequences where waves of black necrotic energy erupt from the sea, turning all life to dust.',
      location: ''
    },
    {
      id: 'CH4_EV04',
      name: 'The Life Restoration Ritual',
      description: 'An ancient ritual necessary to restore the crystal\'s energy and save the city, a complex process requiring considerable life force.',
      details: 'The very ritual Elara attempted to perform in the library, a noble act of self-sacrifice to prevent catastrophe.',
      location: ''
    },
    {
      id: 'CH4_EV05',
      name: 'Climactic Confrontation with Kael',
      description: 'The final confrontation with Kael in the ritual chamber, where he holds a vial of luminous liquid, burning with triumphant madness.',
      details: 'Shows his arrogant and unrepentant nature, believing his genius gives him the right to determine the city\'s fate.',
      location: ''
    },
    {
      id: 'CH4_EV08',
      name: 'Kael\'s Final and Horrific Downfall',
      description: 'The unstable elixir completely consumes Kael, transforming him into a grotesque luminous monster before collapsing him into a pile of glowing dust.',
      details: 'Shows the poetic justice of a villain consumed by his own creation, signifying the end of the immediate threat.',
      location: ''
    },
    {
      id: 'CH4_FINAL',
      name: 'The Ultimate Revelation of the Sunken Truth',
      description: 'Decisive evidence that reveals the ultimate secret hidden behind the sunken truth through the combination of all clues and evidence.',
      details: 'It is fully revealed that the Luminous Plague and the city\'s crisis were not merely alchemical experiments, but the fulfillment of an ancient prophecy testing the cosmic balance.',
      location: ''
    }
  ],
  locations: [
    {
      id: 'CH4_LC01',
      name: 'The Altar of Life',
      description: 'The central chamber of the Sunken Cathedral, dominated by a massive glowing crystal. The heart of the crisis where life and death hang in delicate balance.',
      details: 'Carvings of marine life and celestial patterns adorn the altar, and the air is filled with ozone and the hum of ancient energy.'
    },
    {
      id: 'CH4_LC02',
      name: 'Kael\'s Final Ritual Chamber',
      description: 'A hastily prepared makeshift ritual chamber deep in the waterways, a place of dark magic and desperate ambition where Kael seeks to perform his ultimate ritual.',
      details: 'Mystical symbols are scrawled on the damp walls, with a bubbling cauldron filled with luminous astral liquid at the center.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_CH4_1',
      cards: ['CH4_CH01', 'CH4_LC01'],
      result: 'At the Altar of Life, the Guardian of the Ancient Crystal shows a horrific vision of the city\'s future if the crystal becomes depleted.',
      unlock: 'CH4_EV02'
    },
    {
      id: 'rule_CH4_2',
      cards: ['CH4_EV02', 'CH4_CH01'],
      result: 'After seeing the crystal\'s horrific warning, the Guardian explains the Life Restoration Ritual, the only way to save the city.',
      unlock: 'CH4_EV04'
    },
    {
      id: 'rule_CH4_3',
      cards: ['CH4_EV04', 'CH4_CH04'],
      result: 'Learning of the Life Restoration Ritual, Elara seeks to save the city through her own sacrifice.',
      unlock: 'CH4_LC02'
    },
    {
      id: 'rule_CH4_4',
      cards: ['CH4_LC02', 'CH4_CH05'],
      result: 'In Kael\'s final ritual chamber, the climactic confrontation with the monstrous Kael begins.',
      unlock: 'CH4_EV05'
    },
    {
      id: 'rule_CH4_5',
      cards: ['CH4_EV05', 'CH4_CH04'],
      result: 'In the confrontation with Kael, Elara\'s sacrifice brings about Kael\'s final downfall.',
      unlock: 'CH4_EV08'
    },
    {
      id: 'rule_CH4_6',
      cards: ['CH4_EV08', 'CH4_EV01'],
      result: 'Combining Kael\'s downfall with the power of the Sunken Cathedral fully reveals the ultimate revelation of the sunken truth.',
      unlock: 'CH4_FINAL'
    }
  ],
  fragments: [],
  winCondition: 'CH4_FINAL',
  initialCards: [
    'CH4_EV01',
    'CH4_LC01',
    'CH4_CH01'
  ]
};