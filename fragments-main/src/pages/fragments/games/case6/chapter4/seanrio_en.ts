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
    },
    {
      id: 'CH4_EV02',
      name: 'The Crystal\'s Terrible Warning',
      description: 'The Guardian projects a horrific vision directly into your mind: a future where the crystal, depleted by Kael\'s greed, shatters. Waves of black, necrotic energy erupt from the ocean, engulfing the city, turning all life to dust, and leaving behind a desolate, lifeless wasteland. The vision is vivid and horrifying, a stark warning of the apocalyptic consequences that will occur if Kael\'s actions are not immediately stopped and the crystal is not restored.',
      details: 'The Guardian projects a horrific vision directly into your mind: a future where the crystal, depleted by Kael\'s greed, shatters. Waves of black, necrotic energy erupt from the ocean, engulfing the city, turning all life to dust, and leaving behind a desolate, lifeless wasteland. The vision is vivid and horrifying, a stark warning of the apocalyptic consequences that will occur if Kael\'s actions are not immediately stopped and the crystal is not restored.',
      location: ''
    },
    {
      id: 'CH4_EV03',
      name: 'Kael\'s Triumphant Final Note',
      description: 'A single, pristine piece of parchment, placed prominently on a clean, organized workbench within Kael\'s hidden laboratory. The handwriting is bold, almost manic, radiating a sense of triumphant madness. The note details his final preparations for the ritual, his belief that he has perfected the Elixir of Life, and his unwavering conviction that he is on the verge of achieving true immortality, regardless of the deadly cost to the city. It is a chilling testament to his unchecked ambition.',
      details: 'A single, pristine piece of parchment, placed prominently on a clean, organized workbench within Kael\'s hidden laboratory. The handwriting is bold, almost manic, radiating a sense of triumphant madness. The note details his final preparations for the ritual, his belief that he has perfected the Elixir of Life, and his unwavering conviction that he is on the verge of achieving true immortality, regardless of the deadly cost to the city. It is a chilling testament to his unchecked ambition.',
      location: ''
    },
    {
      id: 'CH4_EV04',
      name: 'The Life Restoration Ritual',
      description: 'The Guardian reveals the ancient ritual necessary to restore the crystal\'s energy and save the city. It is a powerful, complex process requiring someone to willingly offer a significant portion of their life force to the crystal. This is the very ritual that Elara had attempted to perform in the library, a noble act of self-sacrifice to prevent catastrophe. The Guardian explains the complex steps and the profound implications of such a selfless act.',
      details: 'The Guardian reveals the ancient ritual necessary to restore the crystal\'s energy and save the city. It is a powerful, complex process requiring someone to willingly offer a significant portion of their life force to the crystal. This is the very ritual that Elara had attempted to perform in the library, a noble act of self-sacrifice to prevent catastrophe. The Guardian explains the complex steps and the profound implications of such a selfless act.',
      location: ''
    },
    {
      id: 'CH4_EV05',
      name: 'The Climactic Confrontation with Kael',
      description: 'You confront Kael in his ritual chamber, a scene charged with tension and the hum of dark magic. He stands before a bubbling cauldron, holding a vial of glowing liquid in his hand, his eyes ablaze with triumphant madness. He is arrogant and unrepentant, believing his genius gives him the right to determine the fate of the city. This is the moment of truth, where words fail and actions will determine the consequences of his twisted ambition.',
      details: 'You confront Kael in his ritual chamber, a scene charged with tension and the hum of dark magic. He stands before a bubbling cauldron, holding a vial of glowing liquid in his hand, his eyes ablaze with triumphant madness. He is arrogant and unrepentant, believing his genius gives him the right to determine the fate of the city. This is the moment of truth, where words fail and actions will determine the consequences of his twisted ambition.',
      location: ''
    },
    {
      id: 'CH4_EV06',
      name: 'The Unbearable Choice',
      description: 'Faced with the Guardian\'s terrible warning and knowledge of the restoration ritual, you confront a profound and agonizing choice. On one hand, Elara stands ready to make the ultimate sacrifice, the path of noble heroism. On the other, there is the possibility of rallying the city\'s inhabitants in a collective effort, fraught with uncertainty but offering a different kind of salvation. The weight of the city\'s fate rests on your shoulders.',
      details: 'Faced with the Guardian\'s terrible warning and knowledge of the restoration ritual, you confront a profound and agonizing choice. On one hand, Elara stands ready to make the ultimate sacrifice, the path of noble heroism. On the other, there is the possibility of rallying the city\'s inhabitants in a collective effort, fraught with uncertainty but offering a different kind of salvation. The weight of the city\'s fate rests on your shoulders.',
      location: ''
    },
    {
      id: 'CH4_EV07',
      name: 'The City\'s Collective Will',
      description: 'If you choose the path of collective action, this represents the unified spirit of the city\'s diverse inhabitants. Citizens from all walks of life gather in the central square, hands reaching toward the sky, channeling their life force to the Sunken Cathedral. A faint golden glow connects each person to the crystal, and the crystal glows brighter with their collective energy. It is a testament to unity, hope, and the power of people united against a common threat.',
      details: 'If you choose the path of collective action, this represents the unified spirit of the city\'s diverse inhabitants. Citizens from all walks of life gather in the central square, hands reaching toward the sky, channeling their life force to the Sunken Cathedral. A faint golden glow connects each person to the crystal, and the crystal glows brighter with their collective energy. It is a testament to unity, hope, and the power of people united against a common threat.',
      location: ''
    },
    {
      id: 'CH4_EV08',
      name: 'Kael\'s Final and Horrific Downfall',
      description: 'The culmination of Kael\'s twisted ambition. Whether by your hand or by his own arrogance, the unstable elixir completely consumes him, transforming him into a grotesque, glowing monster before finally collapsing into a pile of glowing dust. His defeat signals the end of the immediate threat, but the residual effects of his experiments and the fate of the crystal must still be resolved. It is a scene of poetic justice, a villain consumed by his own creation.',
      details: 'The culmination of Kael\'s twisted ambition. Whether by your hand or by his own arrogance, the unstable elixir completely consumes him, transforming him into a grotesque, glowing monster before finally collapsing into a pile of glowing dust. His defeat signals the end of the immediate threat, but the residual effects of his experiments and the fate of the crystal must still be resolved. It is a scene of poetic justice, a villain consumed by his own creation.',
      location: ''
    },
    {
      id: 'CH4_EV09',
      name: 'The New Age of Harmony',
      description: 'Saved from the brink of destruction, the city enters a new era. The crystal of the Sunken Cathedral pulses with newly stabilized energy, its light now a symbol of hope and balance. Citizens and ancient beings coexist in new harmony, respecting the delicate balance between nature and magic. The glowing plague is a distant, dark memory, replaced by a vibrant future built on cooperation, understanding, and the lessons learned from crisis.',
      details: 'Saved from the brink of destruction, the city enters a new era. The crystal of the Sunken Cathedral pulses with newly stabilized energy, its light now a symbol of hope and balance. Citizens and ancient beings coexist in new harmony, respecting the delicate balance between nature and magic. The glowing plague is a distant, dark memory, replaced by a vibrant future built on cooperation, understanding, and the lessons learned from crisis.',
      location: ''
    },
    {
      id: 'CH4_EV10',
      name: 'Hidden Truth',
      description: 'New facts revealed from Kael\'s Last Disciple and City Elder\'s investigation.',
      details: 'Hints that the ancient crystal\'s energy is not merely life force but a pillar maintaining the balance of space-time.',
      location: 'CH4_CH02'
    },
    {
      id: 'CH4_EV11',
      name: 'Connection Link',
      description: 'A mysterious connection point between Elara and the Heart of the Crystal.',
      details: 'Shows the deep spiritual connection between the selfless savior and the source of ancient power.',
      location: 'CH4_LC04'
    },
    {
      id: 'CH4_EV12',
      name: 'Dark Signal',
      description: 'Supernatural correlation discovered between the hidden truth and connection link.',
      details: 'Reveals that all events are occurring within the greater order of cosmic balance.',
      location: 'CH4_EV10'
    },
    {
      id: 'CH4_FINAL',
      name: 'The Ultimate Revelation of the Sunken Truth',
      description: 'Decisive evidence revealed when all clues and evidence are combined to uncover the ultimate secret behind the sunken truth.',
      details: 'It is fully revealed that the glowing plague and the city\'s crisis were not merely alchemical experiments but the fulfillment of an ancient prophecy testing cosmic balance.',
      location: 'CH4_EV11'
    }
  ],
  locations: [
    {
      id: 'CH4_LC01',
      name: 'The Altar of Life',
      description: 'The central chamber of the Sunken Cathedral, dominated by the colossal, glowing crystal. Intricate carvings of sea creatures and celestial patterns adorn the altar, humming with an immense, palpable power. The water here is unnaturally clear, shimmering with the crystal\'s light, and the air is charged with ozone and the deep, resonant hum of ancient energies. This is the nexus of the crisis, where life and death hang in a delicate balance.',
      details: 'The central chamber of the Sunken Cathedral, dominated by the colossal, glowing crystal. Intricate carvings of sea creatures and celestial patterns adorn the altar, humming with an immense, palpable power. The water here is unnaturally clear, shimmering with the crystal\'s light, and the air is charged with ozone and the deep, resonant hum of ancient energies. This is the nexus of the crisis, where life and death hang in a delicate balance.'
    },
    {
      id: 'CH4_LC02',
      name: 'Kael\'s Final Ritual Chamber',
      description: 'A hastily prepared, makeshift ritual chamber deep within the aqueducts, far from prying eyes. The air is thick with ozone, strange herbs, and a faint metallic tang. Cryptic symbols are scrawled across the damp walls, and in the center stands a bubbling cauldron filled with a viscous, glowing liquid. This is where Kael intends to perform his ultimate ritual, a place of dark magic and desperate ambition, where the fate of the city will be decided.',
      details: 'A hastily prepared, makeshift ritual chamber deep within the aqueducts, far from prying eyes. The air is thick with ozone, strange herbs, and a faint metallic tang. Cryptic symbols are scrawled across the damp walls, and in the center stands a bubbling cauldron filled with a viscous, glowing liquid. This is where Kael intends to perform his ultimate ritual, a place of dark magic and desperate ambition, where the fate of the city will be decided.'
    },
    {
      id: 'CH4_LC03',
      name: 'The City\'s Central Square',
      description: 'The bustling heart of the city, once vibrant with merchants and citizens, now somber and tense under the shadow of the glowing plague. This is where city leaders can address the populace and rally the collective will of the people. The grand fountain and surrounding public buildings represent the spirit of the city and its potential to unite against adversity, offering a venue for desperate pleas for collective action.',
      details: 'The bustling heart of the city, once vibrant with merchants and citizens, now somber and tense under the shadow of the glowing plague. This is where city leaders can address the populace and rally the collective will of the people. The grand fountain and surrounding public buildings represent the spirit of the city and its potential to unite against adversity, offering a venue for desperate pleas for collective action.'
    },
    {
      id: 'CH4_LC04',
      name: 'The Heart of the Crystal',
      description: 'A hidden inner chamber within the Sunken Cathedral, accessible only after understanding the crystal\'s true nature. This is the core of the crystal\'s power, where energy is most concentrated. The air hums with almost overwhelming force, and the walls shimmer with reflected light. This is the final destination for the restoration ritual, where the city\'s fate will be sealed, whether through sacrifice or collective will.',
      details: 'A hidden inner chamber within the Sunken Cathedral, accessible only after understanding the crystal\'s true nature. This is the core of the crystal\'s power, where energy is most concentrated. The air hums with almost overwhelming force, and the walls shimmer with reflected light. This is the final destination for the restoration ritual, where the city\'s fate will be sealed, whether through sacrifice or collective will.'
    },
    {
      id: 'CH4_LC05',
      name: 'The Restored Grand Library',
      description: 'The Grand Library, once a place of secrets and shadows, has now become a beacon of knowledge and hope. The Forbidden Section has been reopened, its archives filled with new, enlightening texts. The air is clean and vibrant, free from the contamination of the glowing plague. It symbolizes the city\'s recovery and its new commitment to open knowledge and cooperation, a testament to truth\'s triumph over deception.',
      details: 'The Grand Library, once a place of secrets and shadows, has now become a beacon of knowledge and hope. The Forbidden Section has been reopened, its archives filled with new, enlightening texts. The air is clean and vibrant, free from the contamination of the glowing plague. It symbolizes the city\'s recovery and its new commitment to open knowledge and cooperation, a testament to truth\'s triumph over deception.'
    },
    {
      id: 'CH4_LC06',
      name: 'The Reborn Aqueducts',
      description: 'The city\'s aqueducts, once a dark and dangerous labyrinth, are now clean and vibrant. The water flows clear, and the bioluminescent plants, once a source of terror, now glow gently, illuminating the tunnels with a soft, natural light. It represents the healing of the city\'s hidden wounds and the restoration of natural balance, a testament to the triumph over the glowing plague and the restoration of purity to the city\'s lifeblood.',
      details: 'The city\'s aqueducts, once a dark and dangerous labyrinth, are now clean and vibrant. The water flows clear, and the bioluminescent plants, once a source of terror, now glow gently, illuminating the tunnels with a soft, natural light. It represents the healing of the city\'s hidden wounds and the restoration of natural balance, a testament to the triumph over the glowing plague and the restoration of purity to the city\'s lifeblood.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_CH4_1',
      cards: ['CH4_CH01', 'CH4_LC01'],
      result: 'The Ancient Guardian of the Crystal, at the Altar of Life, reveals a terrifying vision of the city\'s future if the crystal is depleted.',
      unlock: 'CH4_EV02'
    },
    {
      id: 'rule_CH4_2',
      cards: ['CH4_EV02', 'CH4_CH02'],
      result: 'The Crystal\'s terrible warning, combined with the presence of Kael\'s last disciple, reveals his triumphant final note detailing his ultimate plans.',
      unlock: 'CH4_EV03'
    },
    {
      id: 'rule_CH4_3',
      cards: ['CH4_CH02', 'CH4_EV03'],
      result: 'Kael\'s last disciple, guided by Kael\'s final note, leads you to Kael\'s Final Ritual Chamber where he intends to perform his ultimate ritual.',
      unlock: 'CH4_LC02'
    },
    {
      id: 'rule_CH4_4',
      cards: ['CH4_CH01', 'CH4_EV02'],
      result: 'The Guardian, after revealing the terrible warning, explains the ancient Life Restoration Ritual, the only way to save the city.',
      unlock: 'CH4_EV04'
    },
    {
      id: 'rule_CH4_5',
      cards: ['CH4_CH02', 'CH4_LC02'],
      result: 'Confronting Kael\'s last disciple in his ritual chamber leads to the climactic confrontation with Kael himself as he prepares his final act.',
      unlock: 'CH4_EV05'
    },
    {
      id: 'rule_CH4_6',
      cards: ['CH4_EV04', 'CH4_CH04'],
      result: 'The Life Restoration Ritual, combined with Elara\'s selfless willingness to sacrifice, presents you with an unbearable choice that will determine the city\'s fate.',
      unlock: 'CH4_EV06'
    },
    {
      id: 'rule_CH4_7',
      cards: ['CH4_EV06', 'CH4_CH03'],
      result: 'The unbearable choice, when discussed with City Elder Master Theron, reveals an alternative path - the City\'s Collective Will - a solution without sacrifice.',
      unlock: 'CH4_EV07'
    },
    {
      id: 'rule_CH4_8',
      cards: ['CH4_EV07', 'CH4_LC03'],
      result: 'Rallying the City\'s Collective Will in the Central Square leads to the Heart of the Crystal, where the city\'s fate will be sealed.',
      unlock: 'CH4_LC04'
    },
    {
      id: 'rule_CH4_9',
      cards: ['CH4_EV05', 'CH4_LC04'],
      result: 'The climactic confrontation with Kael at the Heart of the Crystal leads to Kael\'s final and horrific downfall as his ambition consumes him.',
      unlock: 'CH4_CH05'
    },
    {
      id: 'rule_CH4_10',
      cards: ['CH4_CH05', 'CH4_EV07'],
      result: 'Kael\'s monstrous form, combined with the City\'s Collective Will, leads to Kael\'s final and horrific downfall as the city\'s united power overwhelms him.',
      unlock: 'CH4_EV08'
    },
    {
      id: 'rule_CH4_11',
      cards: ['CH4_EV08', 'CH4_EV09'],
      result: 'Kael\'s downfall and the dawn of the New Age of Harmony leads to the restoration of the Grand Library, symbolizing the triumph of knowledge and cooperation.',
      unlock: 'CH4_LC05'
    },
    {
      id: 'rule_CH4_12',
      cards: ['CH4_EV09', 'CH4_LC05'],
      result: 'The New Age of Harmony and the Restored Grand Library signify the rebirth of the city\'s aqueducts, now clean and vibrant, symbolizing complete healing.',
      unlock: 'CH4_LC06'
    },
    
    // Additional connection rules - ensuring all cards are needed for victory
    {
      id: 'rule_CH4_13_new',
      cards: ['CH4_CH02', 'CH4_CH03'],
      result: 'Kael\'s Last Disciple and City Elder\'s investigation combine to reveal new truths.',
      unlock: 'CH4_EV10'
    },
    {
      id: 'rule_CH4_14_new',
      cards: ['CH4_CH04', 'CH4_LC04'],
      result: 'A connection link between Elara and the Heart of the Crystal has been discovered.',
      unlock: 'CH4_EV11'
    },
    {
      id: 'rule_CH4_15_new',
      cards: ['CH4_EV10', 'CH4_EV11'],
      result: 'The hidden truth and connection link combine to reveal the dark signal.',
      unlock: 'CH4_EV12'
    },
    // Final victory combination
    {
      id: 'rule_CH4_16_final',
      cards: ['CH4_LC06', 'CH4_EV12'],
      result: 'The Reborn Aqueducts and the dark signal combine to fully reveal the ultimate revelation of the sunken truth.',
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
} 