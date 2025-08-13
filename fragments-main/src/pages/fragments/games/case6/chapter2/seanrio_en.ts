import { GameScenario } from "./types";

export const gameScenario: GameScenario = {
  id: 'case6_chapter2',
  title: 'The Alchemist\'s Shadow',
  story: 'Following the unsettling clues from the Grand Library, the investigation delves into the city\'s murky aqueducts, where the mysterious "glowing plague" claims its first victim. The trail leads to Kael, a disgraced alchemist operating from a hidden, grotesque laboratory. As the player uncovers Kael\'s disturbing research notes, failed experiments, and a chilling list of ingredients, the true, horrifying nature of the plague and Kael\'s desperate quest for immortality begin to unfold, revealing a conspiracy far darker than initially imagined.',
  victim: '',
  suspects: [
    {
      id: 'CH2_CH01',
      name: 'Kael, the Disgraced Alchemist',
      role: 'Character',
      description: 'A gaunt, intense man with a perpetual sly grin and eyes that gleam with a dangerous intelligence. Kael was once a promising alchemist, but his unorthodox and morally questionable experiments led to his expulsion from the prestigious Alchemists\' Guild. Now, he operates from the city\'s underbelly, a shadowy figure known for selling his potent, often volatile, concoctions to the highest bidder, driven by an insatiable ambition that knows no bounds.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH2_CH02',
      name: 'The Aqueduct Scavenger',
      role: 'Character',
      description: 'A wiry, elusive figure who spends their days sifting through the refuse of the aqueducts, searching for discarded treasures. They know the tunnels like the back of their hand and have seen things that would make others flee in terror. Their face is perpetually grimy, and their eyes, though wary, hold a keen observational intelligence. They are a reluctant informant, valuing their anonymity above all else, but possess crucial knowledge of the aqueducts\' hidden passages and recent unusual activities.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH2_CH03',
      name: 'The Whispering Merchant',
      role: 'Character',
      description: 'A shadowy figure who operates in the Sunken Market, known for dealing in rare and illicit alchemical ingredients. Their face is always obscured by a deep hood, and they speak in hushed, conspiratorial tones. They are a crucial link in Kael\'s supply chain, providing him with the exotic components for his experiments. They are cautious and paranoid, but a skilled interrogator might extract valuable information about Kael\'s operations and his most recent acquisitions.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH2_CH04',
      name: 'The Desperate Noble',
      role: 'Character',
      description: 'A once-proud noble, now frail and consumed by a desperate fear of mortality. This is the wealthy, anonymous client who commissioned Kael\'s \'fountain of youth.\' Their face is etched with the ravages of time and a profound weariness, but their eyes still hold a flicker of their former power and a desperate hope for eternal life. They are a victim of Kael\'s deception, but also a willing participant in his dark schemes, driven by their own selfish desires.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH2_CH05',
      name: 'The Underground Informant',
      role: 'Character',
      description: 'A shadowy figure operating in the city\'s criminal underworld, known for their vast network of contacts and their ability to acquire any information for the right price. They are a master of disguise and deception, moving through the city\'s hidden passages unseen. They have been tracking Kael\'s illicit activities for their own reasons and possess crucial knowledge about his supply lines and his most recent, high-profile transactions. They are a dangerous but invaluable source.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'CH2_EV01',
      name: 'The First Victim of the Glow',
      description: 'Discovered in a secluded, stagnant pool within the city\'s labyrinthine aqueducts, the body of a missing person floats eerily. Their skin emits a faint, silvery luminescence, a chilling echo of the manuscript\'s glow. Their eyes are wide with a silent terror, and clutched tightly in one hand is a piece of dark, unfamiliar seaweed, suggesting a connection to the aquatic depths and the mysterious affliction.',
      details: 'Discovered in a secluded, stagnant pool within the city\'s labyrinthine aqueducts, the body of a missing person floats eerily. Their skin emits a faint, silvery luminescence, a chilling echo of the manuscript\'s glow. Their eyes are wide with a silent terror, and clutched tightly in one hand is a piece of dark, unfamiliar seaweed, suggesting a connection to the aquatic depths and the mysterious affliction.',
      location: ''
    },
    {
      id: 'CH2_EV02',
      name: 'Kael\'s Hidden Laboratory',
      description: 'Tucked away in a forgotten, damp corner of the aqueducts, this clandestine laboratory is a chaotic symphony of bubbling retorts, glowing liquids, and strange, half-finished experiments. Anatomical charts depicting grotesque fusions of human and marine biology adorn the walls, alongside arcane symbols and complex equations. The air hums with a low, unsettling energy, a testament to Kael\'s twisted genius and his relentless pursuit of forbidden knowledge.',
      details: 'Tucked away in a forgotten, damp corner of the aqueducts, this clandestine laboratory is a chaotic symphony of bubbling retorts, glowing liquids, and strange, half-finished experiments. Anatomical charts depicting grotesque fusions of human and marine biology adorn the walls, alongside arcane symbols and complex equations. The air hums with a low, unsettling energy, a testament to Kael\'s twisted genius and his relentless pursuit of forbidden knowledge.',
      location: ''
    },
    {
      id: 'CH2_EV03',
      name: 'Disturbing Research Notes',
      description: 'A scattered pile of Kael\'s personal research notes, filled with frantic, almost illegible handwriting and complex, disturbing diagrams. The notes detail his obsessive quest for the legendary \'Elixir of Life,\' a mythical panacea. He theorizes its synthesis using a rare, bioluminescent algae found only in the deepest, most inaccessible ocean trenches, hinting at a desperate and dangerous methodology. The pages are stained with various chemical spills and what appear to be dried blood.',
      details: 'A scattered pile of Kael\'s personal research notes, filled with frantic, almost illegible handwriting and complex, disturbing diagrams. The notes detail his obsessive quest for the legendary \'Elixir of Life,\' a mythical panacea. He theorizes its synthesis using a rare, bioluminescent algae found only in the deepest, most inaccessible ocean trenches, hinting at a desperate and dangerous methodology. The pages are stained with various chemical spills and what appear to be dried blood.',
      location: ''
    },
    {
      id: 'CH2_EV04',
      name: 'A Grotesque Failed Experiment',
      description: 'In a reinforced glass tank within Kael\'s laboratory, a horrifying sight is preserved in a glowing, viscous liquid. It is a grotesque, half-human, half-fish creature, its form twisted and malformed, a testament to Kael\'s reckless ambition and his disregard for life. The creature\'s vacant eyes stare out, a silent scream of agony and a chilling warning of the potential consequences of Kael\'s unholy experiments. Its very existence is a violation of natural law.',
      details: 'In a reinforced glass tank within Kael\'s laboratory, a horrifying sight is preserved in a glowing, viscous liquid. It is a grotesque, half-human, half-fish creature, its form twisted and malformed, a testament to Kael\'s reckless ambition and his disregard for life. The creature\'s vacant eyes stare out, a silent scream of agony and a chilling warning of the potential consequences of Kael\'s unholy experiments. Its very existence is a violation of natural law.',
      location: ''
    },
    {
      id: 'CH2_EV05',
      name: 'A Client\'s Desperate Commission',
      description: 'An elegant, expensive-looking letter, found amidst Kael\'s notes, bearing the crest of a prominent, but now reclusive, noble family. The handwriting is shaky and desperate, commissioning Kael to create a \'fountain of youth\' at any cost, mentioning the client\'s advanced age and failing health. The letter reeks of desperation and a willingness to pay any price for eternal youth, hinting at the true nature of Kael\'s clientele and their dark desires.',
      details: 'An elegant, expensive-looking letter, found amidst Kael\'s notes, bearing the crest of a prominent, but now reclusive, noble family. The handwriting is shaky and desperate, commissioning Kael to create a \'fountain of youth\' at any cost, mentioning the client\'s advanced age and failing health. The letter reeks of desperation and a willingness to pay any price for eternal youth, hinting at the true nature of Kael\'s clientele and their dark desires.',
      location: ''
    },
    {
      id: 'CH2_EV06',
      name: 'A Fragment of Ancient Prophecy',
      description: 'A brittle, yellowed fragment of parchment, found near the first victim, bearing an archaic script. It speaks of a \'glowing plague\' that will be unleashed by a \'man who plays with life,\' and a \'guardian of knowledge\' who will sacrifice herself to stop it. The prophecy is vague yet chillingly relevant, hinting at a larger, cosmic struggle and the roles of key figures in the unfolding tragedy. Its presence suggests a deeper, mystical dimension to the current events.',
      details: 'A brittle, yellowed fragment of parchment, found near the first victim, bearing an archaic script. It speaks of a \'glowing plague\' that will be unleashed by a \'man who plays with life,\' and a \'guardian of knowledge\' who will sacrifice herself to stop it. The prophecy is vague yet chillingly relevant, hinting at a larger, cosmic struggle and the roles of key figures in the unfolding tragedy. Its presence suggests a deeper, mystical dimension to the current events.',
      location: ''
    },
    {
      id: 'CH2_EV07',
      name: 'The Elixir\'s Chilling Recipe',
      description: 'A detailed, step-by-step recipe for Kael\'s \'Elixir of Life,\' found among his most guarded documents. It lists a series of rare, exotic herbs, bioluminescent algae, and complex alchemical processes. The final, most disturbing ingredient is chillingly explicit: \'the life essence of a willing soul,\' to be extracted through a ritualistic process. The recipe is a blueprint for murder, revealing the full extent of Kael\'s depravity and his method of creating the glowing affliction.',
      details: 'A detailed, step-by-step recipe for Kael\'s \'Elixir of Life,\' found among his most guarded documents. It lists a series of rare, exotic herbs, bioluminescent algae, and complex alchemical processes. The final, most disturbing ingredient is chillingly explicit: \'the life essence of a willing soul,\' to be extracted through a ritualistic process. The recipe is a blueprint for murder, revealing the full extent of Kael\'s depravity and his method of creating the glowing affliction.',
      location: ''
    },
    {
      id: 'CH2_EV08',
      name: 'Elara\'s Intercepted Confession',
      description: 'A crumpled, hastily written letter, found in Kael\'s hidden lab, addressed to the city guard. It is a draft of Elara\'s confession, detailing her unauthorized research into the \'glowing plague\' and her desperate attempts to find a cure. Crucially, she mentions Kael by name, accusing him of being the true source of the affliction. The letter is heavily annotated with Kael\'s angry scribbles, indicating he intercepted it and used it to blackmail her into silence.',
      details: 'A crumpled, hastily written letter, found in Kael\'s hidden lab, addressed to the city guard. It is a draft of Elara\'s confession, detailing her unauthorized research into the \'glowing plague\' and her desperate attempts to find a cure. Crucially, she mentions Kael by name, accusing him of being the true source of the affliction. The letter is heavily annotated with Kael\'s angry scribbles, indicating he intercepted it and used it to blackmail her into silence.',
      location: ''
    },
    {
      id: 'CH2_EV09',
      name: 'The Second Victim\'s Glowing Remains',
      description: 'The body of a wealthy merchant, discovered in their opulent manor, bearing the same chilling silvery luminescence as the first victim. Their face is contorted in a silent scream, and their hands are clasped over a small, empty vial, suggesting they consumed something before their death. The scene is one of stark contrast: immense wealth juxtaposed with a grotesque, unnatural demise, confirming the plague\'s spread and Kael\'s continued, deadly experiments.',
      details: 'The body of a wealthy merchant, discovered in their opulent manor, bearing the same chilling silvery luminescence as the first victim. Their face is contorted in a silent scream, and their hands are clasped over a small, empty vial, suggesting they consumed something before their death. The scene is one of stark contrast: immense wealth juxtaposed with a grotesque, unnatural demise, confirming the plague\'s spread and Kael\'s continued, deadly experiments.',
      location: ''
    },
    {
      id: 'CH2_EV10',
      name: 'A Coded Ledger from the Market',
      description: 'A small, leather-bound ledger, found discarded in the Sunken Market, filled with cryptic entries and coded transactions. It details the illicit sale of rare alchemical ingredients, including large quantities of bioluminescent algae, and records payments made to Kael. The ledger is a direct link between the underground market, Kael\'s operations, and the source of his deadly concoctions, providing irrefutable proof of his criminal enterprise.',
      details: 'A small, leather-bound ledger, found discarded in the Sunken Market, filled with cryptic entries and coded transactions. It details the illicit sale of rare alchemical ingredients, including large quantities of bioluminescent algae, and records payments made to Kael. The ledger is a direct link between the underground market, Kael\'s operations, and the source of his deadly concoctions, providing irrefutable proof of his criminal enterprise.',
      location: ''
    }
  ],
  locations: [
    {
      id: 'CH2_LC01',
      name: 'The Labyrinthine Aqueducts',
      description: 'A sprawling, subterranean network of ancient stone tunnels and channels, carrying the city\'s water and waste. The air is thick with dampness, the faint smell of mildew, and the distant echoes of dripping water. Rumors persist of forgotten passages and strange creatures lurking in its depths. It is a dark, oppressive place, a stark contrast to the scholarly quiet of the library, and now, a grim crime scene.',
      details: 'A sprawling, subterranean network of ancient stone tunnels and channels, carrying the city\'s water and waste. The air is thick with dampness, the faint smell of mildew, and the distant echoes of dripping water. Rumors persist of forgotten passages and strange creatures lurking in its depths. It is a dark, oppressive place, a stark contrast to the scholarly quiet of the library, and now, a grim crime scene.'
    },
    {
      id: 'CH2_LC02',
      name: 'The Sunken Market',
      description: 'A hidden, illicit market operating in a vast, cavernous chamber beneath the city, accessible only through obscure aqueduct passages. It is a bustling hub for black market goods, rare ingredients, and whispered secrets. The air is thick with the smell of exotic spices, damp stone, and illicit dealings. Here, anything can be bought or sold, and information flows as freely as the murky water, making it a prime location for Kael\'s clandestine transactions.',
      details: 'A hidden, illicit market operating in a vast, cavernous chamber beneath the city, accessible only through obscure aqueduct passages. It is a bustling hub for black market goods, rare ingredients, and whispered secrets. The air is thick with the smell of exotic spices, damp stone, and illicit dealings. Here, anything can be bought or sold, and information flows as freely as the murky water, making it a prime location for Kael\'s clandestine transactions.'
    },
    {
      id: 'CH2_LC03',
      name: 'The Abandoned Pumping Station',
      description: 'A derelict, echoing structure deep within the aqueducts, once used to regulate water flow but now fallen into disuse. Its massive, rusted machinery stands silent, covered in a thick layer of grime and strange, glowing moss. The air is heavy and still, carrying a faint, metallic tang. It serves as a clandestine meeting point for Kael and his associates, a place where illicit goods are exchanged and dark plans are whispered in the shadows.',
      details: 'A derelict, echoing structure deep within the aqueducts, once used to regulate water flow but now fallen into disuse. Its massive, rusted machinery stands silent, covered in a thick layer of grime and strange, glowing moss. The air is heavy and still, carrying a faint, metallic tang. It serves as a clandestine meeting point for Kael and his associates, a place where illicit goods are exchanged and dark plans are whispered in the shadows.'
    },
    {
      id: 'CH2_LC04',
      name: 'The City Morgue\'s Secret Chamber',
      description: 'A rarely used, sterile chamber deep within the city morgue, reserved for unusual or politically sensitive cases. The air is cold and clinical, filled with the faint scent of disinfectant and formaldehyde. Here, the bodies of the \'glowing plague\' victims are secretly stored and examined, away from public scrutiny. It is a place of grim discoveries and hushed conversations, where the true extent of the affliction is slowly being understood.',
      details: 'A rarely used, sterile chamber deep within the city morgue, reserved for unusual or politically sensitive cases. The air is cold and clinical, filled with the faint scent of disinfectant and formaldehyde. Here, the bodies of the \'glowing plague\' victims are secretly stored and examined, away from public scrutiny. It is a place of grim discoveries and hushed conversations, where the true extent of the affliction is slowly being understood.'
    },
    {
      id: 'CH2_LC05',
      name: 'Kael\'s Escape Route',
      description: 'A narrow, concealed passage leading from Kael\'s hidden laboratory, winding through the deepest, most treacherous parts of the aqueducts. It is a dark, claustrophobic tunnel, barely wide enough for one person, and filled with the sound of rushing water and distant, unsettling echoes. This route was meticulously planned for a quick escape, suggesting Kael anticipated discovery and had a contingency plan for his illicit operations.',
      details: 'A narrow, concealed passage leading from Kael\'s hidden laboratory, winding through the deepest, most treacherous parts of the aqueducts. It is a dark, claustrophobic tunnel, barely wide enough for one person, and filled with the sound of rushing water and distant, unsettling echoes. This route was meticulously planned for a quick escape, suggesting Kael anticipated discovery and had a contingency plan for his illicit operations.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_CH2_1',
      cards: ['CH2_LC01', 'CH2_CH01'],
      result: 'Investigating the aqueducts with Kael in mind leads you to his hidden laboratory, a place of dark experiments.',
      unlock: 'CH2_EV02'
    },
    {
      id: 'rule_CH2_2',
      cards: ['CH2_CH01', 'CH2_EV02'],
      result: 'Inside Kael\'s lab, you uncover his disturbing research notes, detailing his obsessive quest for the Elixir of Life.',
      unlock: 'CH2_EV03'
    },
    {
      id: 'rule_CH2_3',
      cards: ['CH2_LC01', 'CH2_EV01'],
      result: 'The Aqueduct Scavenger, a local expert of the tunnels, reveals crucial information about the first victim and the hidden passages.',
      unlock: 'CH2_CH02'
    },
    {
      id: 'rule_CH2_4',
      cards: ['CH2_EV02', 'CH2_EV03'],
      result: 'Kael\'s research notes and the lab itself reveal a grotesque failed experiment, a chilling testament to his disregard for life.',
      unlock: 'CH2_EV04'
    },
    {
      id: 'rule_CH2_5',
      cards: ['CH2_CH01', 'CH2_EV03'],
      result: 'Among Kael\'s notes, you find a desperate commission letter from a wealthy client, hinting at the true nature of his clientele.',
      unlock: 'CH2_EV05'
    },
    {
      id: 'rule_CH2_6',
      cards: ['CH2_LC02', 'CH2_EV05'],
      result: 'The Sunken Market, a hub of illicit dealings, is where you encounter the Whispering Merchant, a key figure in Kael\'s supply chain.',
      unlock: 'CH2_CH03'
    },
    {
      id: 'rule_CH2_7',
      cards: ['CH2_EV01', 'CH2_CH03'],
      result: 'The first victim\'s connection to the Whispering Merchant leads to the discovery of a fragment of an ancient prophecy, hinting at a larger cosmic struggle.',
      unlock: 'CH2_EV06'
    },
    {
      id: 'rule_CH2_8',
      cards: ['CH2_LC01', 'CH2_EV06'],
      result: 'The Abandoned Pumping Station, a derelict structure in the aqueducts, is revealed as a clandestine meeting point for Kael and his associates.',
      unlock: 'CH2_LC03'
    },
    {
      id: 'rule_CH2_9',
      cards: ['CH2_EV03', 'CH2_EV05'],
      result: 'Kael\'s research notes and the client\'s commission, when combined, reveal the chilling recipe for his Elixir of Life, detailing its horrifying final ingredient.',
      unlock: 'CH2_EV07'
    },
    {
      id: 'rule_CH2_10',
      cards: ['CH2_EV05', 'CH2_EV07'],
      result: 'The desperate commission and the elixir\'s recipe point to the Desperate Noble, Kael\'s wealthy client, who is consumed by a fear of mortality.',
      unlock: 'CH2_CH04'
    },
    {
      id: 'rule_CH2_11',
      cards: ['CH2_CH01', 'CH2_CH04'],
      result: 'Kael\'s connection to the Desperate Noble leads to the discovery of Elara\'s intercepted confession, revealing his blackmail tactics.',
      unlock: 'CH2_EV08'
    },
    {
      id: 'rule_CH2_12',
      cards: ['CH2_EV01', 'CH2_EV08'],
      result: 'The first victim and Elara\'s intercepted confession lead you to the City Morgue\'s Secret Chamber, where the true extent of the glowing plague is being understood.',
      unlock: 'CH2_LC04'
    },
    {
      id: 'rule_CH2_13',
      cards: ['CH2_CH04', 'CH2_LC04'],
      result: 'The Desperate Noble\'s connection to the Morgue reveals the Second Victim\'s Glowing Remains, confirming the plague\'s spread and Kael\'s continued experiments.',
      unlock: 'CH2_EV09'
    },
    {
      id: 'rule_CH2_14',
      cards: ['CH2_EV09', 'CH2_LC02'],
      result: 'The Second Victim\'s remains and the Sunken Market lead you to the Underground Informant, a shadowy figure with crucial knowledge of Kael\'s illicit activities.',
      unlock: 'CH2_CH05'
    },
    {
      id: 'rule_CH2_15',
      cards: ['CH2_CH05', 'CH2_LC03'],
      result: 'The Underground Informant and the Abandoned Pumping Station reveal a coded ledger from the market, detailing Kael\'s illicit transactions.',
      unlock: 'CH2_EV10'
    },
    {
      id: 'rule_CH2_16',
      cards: ['CH2_EV10', 'CH2_CH01'],
      result: 'The coded ledger and Kael himself reveal his meticulously planned escape route from his hidden laboratory, suggesting he anticipated discovery.',
      unlock: 'CH2_LC05'
    }
  ],
  fragments: [],
  winCondition: 'CH2_LC05',
  initialCards: [
    'CH2_EV01',
    'CH2_LC01',
    'CH2_CH01',
    'CH2_EV04',
    'CH2_EV06',
    'CH2_LC03',
    'CH2_CH02',
    'CH2_LC02',
    'CH2_CH03',
    'CH2_EV07',
    'CH2_CH04',
    'CH2_EV08',
    'CH2_LC04',
    'CH2_EV09',
    'CH2_CH05',
    'CH2_EV10',
    'CH2_LC05'
  ]
};