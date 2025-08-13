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
  // 게임 설정 추가
  initialCards?: string[];
  winCondition?: string;
}// 임시 파일 - 빌드 오류 해결을 위한 최소한의 export

export const case6ch4En: GameScenario = {
  id: 'case6_chapter4',
  title: 'The Sunken Truth',
  story: 'The final chapter plunges the player into the depths of the ocean, guided by Elara\'s desperate plea, to the mythical Sunken Cathedral. Here, the ancient Guardian of the Crystal reveals the full, terrifying truth behind the glowing plague, Kael\'s insatiable ambition, and the city\'s impending doom. The player faces a climactic confrontation with Kael and a profound moral choice that will determine the fate of the city and its inhabitants, leading to a resolution that redefines heroism and sacrifice.',
  victim: '',
  suspects: [
    {
      id: 'CH4_CH01',
      name: 'The Ancient Guardian of the Crystal',
      role: 'Character',
      description: 'A majestic, ethereal being of pure, shimmering energy, the Guardian has watched over the Sunken Cathedral and its crystal for millennia. It possesses a vaguely humanoid form, but its features are indistinct, shifting like water. Its voice resonates directly in your mind, ancient and wise, filled with the sorrow of ages. It reveals the crystal\'s true purpose as a life-giving force and exposes Kael\'s sacrilegious theft of its fragments, explaining the origin of the glowing plague and the city\'s impending doom.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH4_CH02',
      name: 'The Last Disciple of Kael',
      role: 'Character',
      description: 'A fanatical follower of Kael, encountered guarding the entrance to his final ritual site. This disciple is a desperate, misguided individual, fully indoctrinated into Kael\'s twisted vision of immortality. They are willing to sacrifice everything for their master\'s cause, believing in his genius and the promise of eternal life. They are a final, tragic obstacle, a testament to Kael\'s manipulative power, and a potential source of information about his exact whereabouts.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH4_CH03',
      name: 'The City Elder, Master Theron',
      role: 'Character',
      description: 'A venerable and respected elder of the city council, known for his wisdom and his deep connection to the city\'s history and its people. He is initially skeptical of the supernatural elements of the plague but is deeply concerned for the welfare of his citizens. He represents the collective will and resilience of the city, and his support will be crucial if a non-sacrificial path to salvation is to be pursued. His presence embodies the hope for a united front against the impending doom.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH4_CH04',
      name: 'Elara, the Selfless Savior',
      role: 'Character',
      description: 'Freed from prison and now fully understanding the true nature of the crisis, Elara stands ready to fulfill her destiny. Her stern demeanor is replaced by a quiet resolve, her eyes reflecting a profound understanding of the sacrifice required. She is prepared to offer her life force to the crystal, a selfless act to restore its balance and save the city, embodying the ultimate act of heroism and dedication to knowledge.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH4_CH05',
      name: 'Kael, the Monstrous Alchemist',
      role: 'Character',
      description: 'Consumed by his own arrogance and the unstable elixir, Kael transforms into a grotesque, glowing monster. His body twists and contorts, his features distended and horrifying, a living testament to his ambition literally consuming him. He is no longer the cunning alchemist, but a creature of pure, destructive energy, a final, desperate manifestation of the glowing plague he unleashed. His screams are a mix of agony and mad triumph.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'CH4_EV01',
      name: 'The Mythical Sunken Cathedral',
      description: 'Following Elara\'s cryptic message, you discover the legendary Sunken Cathedral, an awe-inspiring edifice reclaimed by the ocean\'s embrace. Its ancient spires and arches are adorned with bioluminescent corals, and schools of glowing fish weave through its hallowed halls. In its heart, a colossal, pulsating crystal radiates immense life energy, the true source of the mysterious algae and the heart of the city\'s impending crisis. The air here is thick with the scent of salt and ancient magic.',
      details: 'Following Elara\'s cryptic message, you discover the legendary Sunken Cathedral, an awe-inspiring edifice reclaimed by the ocean\'s embrace. Its ancient spires and arches are adorned with bioluminescent corals, and schools of glowing fish weave through its hallowed halls. In its heart, a colossal, pulsating crystal radiates immense life energy, the true source of the mysterious algae and the heart of the city\'s impending crisis. The air here is thick with the scent of salt and ancient magic.',
      location: ''
    }
  ],
  locations: [
    {
      id: 'CH4_LC01',
      name: 'The Altar of Life',
      description: 'The central chamber of the Sunken Cathedral, dominated by the colossal, glowing crystal. Intricate carvings of sea creatures and celestial patterns adorn the altar, humming with an immense, palpable power. The water here is unnaturally clear, shimmering with the crystal\'s light, and the air is charged with ozone and the deep, resonant hum of ancient energies. This is the nexus of the crisis, where life and death hang in a delicate balance.',
      details: 'The central chamber of the Sunken Cathedral, dominated by the colossal, glowing crystal. Intricate carvings of sea creatures and celestial patterns adorn the altar, humming with an immense, palpable power. The water here is unnaturally clear, shimmering with the crystal\'s light, and the air is charged with ozone and the deep, resonant hum of ancient energies. This is the nexus of the crisis, where life and death hang in a delicate balance.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_CH4_1',
      cards: ['CH4_CH01', 'CH4_LC01'],
      result: 'The Ancient Guardian of the Crystal, at the Altar of Life, reveals a terrifying vision of the city\'s future if the crystal is depleted.',
      unlock: 'CH4_EV02'
    }
  ],
  fragments: [],
  winCondition: 'CH4_LC06',
  initialCards: [
    'CH4_EV01',
    'CH4_LC01',
    'CH4_CH01'
  ]
} 