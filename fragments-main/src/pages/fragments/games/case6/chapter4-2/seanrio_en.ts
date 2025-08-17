export interface GameScenario {
  id: string;
  title: string;
  story?: string;
  victim?: string;
  suspects?: any[];
  evidence?: any[];
  locations?: any[];
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

export const case6ch4_2_en: GameScenario = {
  id: 'case6_chapter4_2',
  title: 'The Ultimate Revelation of the Sunken Truth',
  story: 'After discovering the path to salvation, the detective faces a climactic confrontation with Kael. The final battle with Kael takes place in the ritual chamber, witnessing his final and horrific downfall. This is the moment when all clues and evidence combine to fully reveal the ultimate secret hidden behind the sunken truth. It is revealed that the Luminous Plague and the city\'s crisis were not merely alchemical experiments, but the fulfillment of an ancient prophecy testing the cosmic balance.',
  victim: '',
  
  suspects: [
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
      id: 'CH4_EV07',
      name: 'The City\'s Collective Will',
      description: 'If the path of collective action is chosen, this represents the united spirit of the city\'s diverse inhabitants.',
      details: 'Citizens from all walks of life gather in the central square, reaching their hands toward the sky, channeling their life force to the Sunken Cathedral.',
      location: ''
    },
    {
      id: 'CH4_EV09',
      name: 'Era of New Harmony',
      description: 'The city, saved from the brink of destruction, enters a new era.',
      details: 'The crystal of the Sunken Cathedral pulses with newly stabilized energy, its light now a symbol of hope and balance.',
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
      id: 'CH4_LC02',
      name: 'Kael\'s Final Ritual Chamber',
      description: 'A hastily prepared makeshift ritual chamber deep in the waterways, a place of dark magic and desperate ambition where Kael seeks to perform his ultimate ritual.',
      details: 'Mystical symbols are scrawled on the damp walls, with a bubbling cauldron filled with luminous astral liquid at the center.'
    },
    {
      id: 'CH4_LC04',
      name: 'Heart of the Crystal',
      description: 'A hidden inner chamber within the Sunken Cathedral, accessible only after understanding the crystal\'s true nature.',
      details: 'This is the core of the crystal\'s power, where energy is most concentrated, and where the city\'s fate will be sealed.'
    },
    {
      id: 'CH4_LC05',
      name: 'The Restored Great Library',
      description: 'The Great Library, once a place of secrets and shadows, has now become a beacon of knowledge and hope.',
      details: 'The forbidden sections have been reopened, and its archives are filled with new, enlightening texts.'
    },
    {
      id: 'CH4_LC06',
      name: 'The Reborn Waterways',
      description: 'The city\'s waterways, once a dark and dangerous labyrinth, are now clean and vibrant.',
      details: 'The water flows clear, and the bioluminescent plants that were once a source of terror now glow gently, illuminating the tunnels with natural light.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_4_2_1',
      cards: ['CH4_EV05', 'CH4_LC02'],
      result: 'The climactic confrontation with Kael takes place in his final ritual chamber.',
      unlock: 'CH4_CH05'
    },
    {
      id: 'rule_4_2_2',
      cards: ['CH4_CH05', 'CH4_EV05'],
      result: 'In the confrontation with the monstrous Kael, you witness his final and horrific downfall.',
      unlock: 'CH4_EV08'
    },
    {
      id: 'rule_4_2_3',
      cards: ['CH4_EV08', 'CH4_LC04'],
      result: 'Through Kael\'s downfall and the heart of the crystal, the city\'s collective will manifests.',
      unlock: 'CH4_EV07'
    },
    {
      id: 'rule_4_2_4',
      cards: ['CH4_EV07', 'CH4_EV08'],
      result: 'Through the city\'s collective will and Kael\'s downfall, an era of new harmony begins.',
      unlock: 'CH4_EV09'
    },
    {
      id: 'rule_4_2_5',
      cards: ['CH4_EV09', 'CH4_LC05'],
      result: 'Through the era of new harmony and the restored Great Library, you reach the ultimate revelation of the sunken truth.',
      unlock: 'CH4_FINAL'
    },
    {
      id: 'rule_4_2_6',
      cards: ['CH4_EV09', 'CH4_LC06'],
      result: 'Through the era of new harmony and the reborn waterways, you confirm the ultimate revelation of the sunken truth.',
      unlock: 'CH4_FINAL'
    },
    {
      id: 'rule_4_2_7',
      cards: ['CH4_LC05', 'CH4_LC06'],
      result: 'Through the restored Great Library and the reborn waterways, you reach the ultimate revelation of the sunken truth.',
      unlock: 'CH4_FINAL'
    },
    {
      id: 'rule_4_2_8',
      cards: ['CH4_EV07', 'CH4_LC04'],
      result: 'Through the city\'s collective will and the heart of the crystal, you confirm the ultimate revelation of the sunken truth.',
      unlock: 'CH4_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH4_FINAL',
  initialCards: [
    'CH4_EV05', // Climactic Confrontation with Kael
    'CH4_LC02', // Kael's Final Ritual Chamber
    'CH4_LC04'  // Heart of the Crystal
  ]
};