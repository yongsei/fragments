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



export const case6ch1En: GameScenario = {
  id: 'case6_chapter1',
  title: 'The Whispering Manuscript',
  story: 'In the ancient Grand Library, a seemingly ordinary discovery of a glowing manuscript quickly unravels into a complex web of secrets. The player must navigate the library\'s forbidden sections, encounter its enigmatic head librarian, Elara, and piece together initial clues that hint at a mysterious \"glowing plague\" and a hidden world beneath the city. This chapter introduces key characters and locations, setting the stage for a deeper investigation into a conspiracy that threatens the city.',
  victim: '',
  suspects: [
    {
      id: 'CH1_CH01',
      name: 'Elara, the Keeper of Forbidden Lore',
      role: 'Character',
      description: 'The formidable head librarian, Elara, is an elderly woman whose sharp, intelligent eyes seem to miss nothing. Her silver hair is pulled back in a severe bun, and she wears half-moon spectacles perched on her nose. Known for her encyclopedic knowledge of the library\'s vast collection and her fierce protectiveness of its more dangerous volumes, she moves with an air of quiet authority, a guardian of secrets both ancient and perilous.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH1_CH02',
      name: 'Jonas, the Apprehensive Apprentice',
      role: 'Character',
      description: 'A young, perpetually nervous apprentice librarian, Jonas often scurries through the library\'s aisles, his eyes wide with a mix of fear and awe. He\'s known for his meticulous record-keeping and his tendency to avoid direct eye contact. He seems to be burdened by a secret, often glancing over his shoulder as if expecting to be caught. His hands tremble slightly when he speaks, betraying a deep-seated anxiety.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH1_CH03',
      name: 'Sergeant Thorne, the Skeptical Guard',
      role: 'Character',
      description: 'A grizzled, veteran city guard sergeant, Thorne is known for his unwavering adherence to procedure and his deep skepticism towards anything beyond the mundane. His face is etched with years of dealing with the city\'s underbelly, and his eyes hold a weary but sharp intelligence. He dismisses rumors of magic and plagues, preferring to rely on hard evidence and logical deduction, making him a challenging but potentially valuable ally.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH1_CH04',
      name: 'The Whispering Scholar',
      role: 'Character',
      description: 'A reclusive and eccentric scholar, often found muttering to himself in the library\'s darkest corners. He possesses an uncanny knowledge of ancient languages and forgotten lore, but his mind seems to wander between reality and the esoteric. He speaks in riddles and fragmented prophecies, hinting at cosmic events and hidden powers, making him a difficult but potentially invaluable source of information.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH1_CH05',
      name: 'The Silent Watcher',
      role: 'Character',
      description: 'A mysterious, cloaked figure often seen lurking in the shadows of the library\'s outer perimeter. They never speak, and their face is always obscured, but their presence is unsettling. They seem to be observing Elara and anyone who approaches the Forbidden Section, suggesting a hidden agenda or a watchful eye on the unfolding events. Their movements are fluid and almost unnatural, hinting at something more than human.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'CH1_EV01',
      name: 'A Faintly Glowing Manuscript',
      description: 'Deep within the dusty, rarely visited archives of the Grand Library, you stumble upon an ancient manuscript. Its binding, made of what appears to be dried, petrified seaweed, pulses with a soft, ethereal luminescence. The script within is indecipherable, written in a language long forgotten, yet the intricate diagrams of celestial bodies and strange alchemical symbols seem eerily familiar, hinting at a profound, hidden knowledge.',
      details: 'Deep within the dusty, rarely visited archives of the Grand Library, you stumble upon an ancient manuscript. Its binding, made of what appears to be dried, petrified seaweed, pulses with a soft, ethereal luminescence. The script within is indecipherable, written in a language long forgotten, yet the intricate diagrams of celestial bodies and strange alchemical symbols seem eerily familiar, hinting at a profound, hidden knowledge.',
      location: ''
    },
    {
      id: 'CH1_EV02',
      name: 'A Torn Page from the Manuscript',
      description: 'Carefully extracted from the glowing manuscript, this single, brittle page bears a complex alchemical symbol at its center, radiating a faint, internal light. Surrounding the symbol are meticulously drawn constellations, yet they do not match any known celestial charts, suggesting a different sky or perhaps a symbolic representation of cosmic forces. The page feels ancient and fragile, its edges frayed as if hastily removed.',
      details: 'Carefully extracted from the glowing manuscript, this single, brittle page bears a complex alchemical symbol at its center, radiating a faint, internal light. Surrounding the symbol are meticulously drawn constellations, yet they do not match any known celestial charts, suggesting a different sky or perhaps a symbolic representation of cosmic forces. The page feels ancient and fragile, its edges frayed as if hastily removed.',
      location: ''
    },
    {
      id: 'CH1_EV03',
      name: 'Elara\'s Personal Diary',
      description: 'Discreetly tucked away in a hidden compartment of Elara\'s desk, this small, leather-bound diary is filled with hurried, almost frantic handwriting. Its entries reveal a growing obsession with a mysterious \'glowing plague\' afflicting the city, and her desperate, clandestine attempts to find a cure by studying forbidden texts. The pages are stained with what appear to be chemical residues and dried tears, hinting at her personal struggle and the immense pressure she is under.',
      details: 'Discreetly tucked away in a hidden compartment of Elara\'s desk, this small, leather-bound diary is filled with hurried, almost frantic handwriting. Its entries reveal a growing obsession with a mysterious \'glowing plague\' afflicting the city, and her desperate, clandestine attempts to find a cure by studying forbidden texts. The pages are stained with what appear to be chemical residues and dried tears, hinting at her personal struggle and the immense pressure she is under.',
      location: ''
    },
    {
      id: 'CH1_EV04',
      name: 'A Cryptic Map of the Sewers',
      description: 'Unfurled from a hidden pocket within the glowing manuscript, this aged, water-stained map depicts the sprawling, labyrinthine network of the city\'s underground sewers. Several key junctions and hidden chambers are circled in faded red ink, accompanied by strange, unfamiliar symbols that seem to correspond with those found in the manuscript. The map emits a faint, earthy odor, suggesting it has spent considerable time in damp, subterranean environments.',
      details: 'Unfurled from a hidden pocket within the glowing manuscript, this aged, water-stained map depicts the sprawling, labyrinthine network of the city\'s underground sewers. Several key junctions and hidden chambers are circled in faded red ink, accompanied by strange, unfamiliar symbols that seem to correspond with those found in the manuscript. The map emits a faint, earthy odor, suggesting it has spent considerable time in damp, subterranean environments.',
      location: ''
    },
    {
      id: 'CH1_EV05',
      name: 'A Receipt for Rare Alchemical Herbs',
      description: 'A crumpled, slightly damp receipt from a local apothecary, detailing the purchase of a large quantity of rare and expensive herbs. These herbs are known in esoteric circles for their potent properties in purification rituals and alchemical concoctions. The buyer\'s name is smudged and illegible, but the date of purchase is recent, suggesting a connection to the ongoing events. The apothecary\'s distinctive mortar and pestle logo is clearly visible at the top.',
      details: 'A crumpled, slightly damp receipt from a local apothecary, detailing the purchase of a large quantity of rare and expensive herbs. These herbs are known in esoteric circles for their potent properties in purification rituals and alchemical concoctions. The buyer\'s name is smudged and illegible, but the date of purchase is recent, suggesting a connection to the ongoing events. The apothecary\'s distinctive mortar and pestle logo is clearly visible at the top.',
      location: ''
    },
    {
      id: 'CH1_EV06',
      name: 'City Guard\'s Preliminary Report',
      description: 'A formal, official report from the city guard, detailing a recent surge in strange disappearances near the city\'s aqueducts. The report notes a disturbing commonality among the victims: a faint, silvery luminescence on their skin, reminiscent of the manuscript\'s glow. The language is clinical and detached, but the underlying concern is palpable, hinting at a growing unease within the city\'s authorities.',
      details: 'A formal, official report from the city guard, detailing a recent surge in strange disappearances near the city\'s aqueducts. The report notes a disturbing commonality among the victims: a faint, silvery luminescence on their skin, reminiscent of the manuscript\'s glow. The language is clinical and detached, but the underlying concern is palpable, hinting at a growing unease within the city\'s authorities.',
      location: ''
    },
    {
      id: 'CH1_EV07',
      name: 'A Cryptic Warning from the Depths',
      description: 'A sealed letter, its parchment unusually thick and water-resistant, addressed directly to Elara. The wax seal bears the intricate, menacing image of a kraken, a symbol associated with ancient, powerful entities of the deep. The message within is brief and chilling, warning Elara to \'cease her meddling in the affairs of the depths\' or face dire, unspecified consequences. The letter exudes an aura of cold, aquatic menace.',
      details: 'A sealed letter, its parchment unusually thick and water-resistant, addressed directly to Elara. The wax seal bears the intricate, menacing image of a kraken, a symbol associated with ancient, powerful entities of the deep. The message within is brief and chilling, warning Elara to \'cease her meddling in the affairs of the depths\' or face dire, unspecified consequences. The letter exudes an aura of cold, aquatic menace.',
      location: ''
    },
    {
      id: 'CH1_EV08',
      name: 'Jonas\'s Secret Confession',
      description: 'A hastily scrawled note, hidden beneath a loose floorboard in Jonas\'s small, cluttered desk. The note is a terrified confession, detailing how he witnessed Elara performing a strange, glowing ritual in the Forbidden Section late one night. He describes the manuscript\'s intense luminescence and Elara\'s desperate incantations, expressing his fear that she might be responsible for the \'glowing plague\' and his own complicity in keeping her secret.',
      details: 'A hastily scrawled note, hidden beneath a loose floorboard in Jonas\'s small, cluttered desk. The note is a terrified confession, detailing how he witnessed Elara performing a strange, glowing ritual in the Forbidden Section late one night. He describes the manuscript\'s intense luminescence and Elara\'s desperate incantations, expressing his fear that she might be responsible for the \'glowing plague\' and his own complicity in keeping her secret.',
      location: ''
    },
    {
      id: 'CH1_EV09',
      name: 'An Ancient Astrolabe Fragment',
      description: 'A corroded, intricate fragment of what appears to be an ancient astrolabe, found near the manuscript. Its delicate gears are seized, but the etched symbols on its surface perfectly match some of the constellations depicted on the torn page from the manuscript. It hums faintly with a residual, otherworldly energy, suggesting it was once used to chart unknown celestial paths or to harness cosmic forces.',
      details: 'A corroded, intricate fragment of what appears to be an ancient astrolabe, found near the manuscript. Its delicate gears are seized, but the etched symbols on its surface perfectly match some of the constellations depicted on the torn page from the manuscript. It hums faintly with a residual, otherworldly energy, suggesting it was once used to chart unknown celestial paths or to harness cosmic forces.',
      location: ''
    },
    {
      id: 'CH1_EV10',
      name: 'A Faded Alchemical Diagram',
      description: 'A brittle, yellowed piece of parchment, found tucked within a forgotten volume in the Secret Annex. It depicts a complex alchemical diagram, far more intricate than the one on the torn page. This diagram illustrates a process for \'transmuting life essence\' using rare aquatic flora and celestial alignments, bearing a chilling resemblance to the \'glowing plague\' and hinting at its artificial origin.',
      details: 'A brittle, yellowed piece of parchment, found tucked within a forgotten volume in the Secret Annex. It depicts a complex alchemical diagram, far more intricate than the one on the torn page. This diagram illustrates a process for \'transmuting life essence\' using rare aquatic flora and celestial alignments, bearing a chilling resemblance to the \'glowing plague\' and hinting at its artificial origin.',
      location: ''
    },
    {
      id: 'CH1_EV11',
      name: 'A Scratched Silver Locket',
      description: 'A small, tarnished silver locket, found near the aqueducts mentioned in the City Guard\'s report. It\'s heavily scratched and bears no clear engravings, but inside, a faded, miniature portrait of a young, stern-looking man is barely visible. The man\'s features are vaguely familiar, and the locket emits a faint, almost imperceptible warmth, suggesting a recent connection to one of the victims or a key figure in the conspiracy.',
      details: 'A small, tarnished silver locket, found near the aqueducts mentioned in the City Guard\'s report. It\'s heavily scratched and bears no clear engravings, but inside, a faded, miniature portrait of a young, stern-looking man is barely visible. The man\'s features are vaguely familiar, and the locket emits a faint, almost imperceptible warmth, suggesting a recent connection to one of the victims or a key figure in the conspiracy.',
      location: ''
    }
  ],
  locations: [
    {
      id: 'CH1_LC01',
      name: 'The Grand Library\'s Forbidden Section',
      description: 'A vast, cavernous hall within the library, shrouded in perpetual twilight and thick with the scent of aged parchment and ozone. Towering shelves stretch into the gloom, holding countless volumes on subjects deemed too dangerous or arcane for public consumption. Velvet ropes and ancient wards guard its entrance, signifying that only the most privileged or desperate dare to tread here. Dust motes dance in the few stray beams of light, creating an almost mystical atmosphere.',
      details: 'A vast, cavernous hall within the library, shrouded in perpetual twilight and thick with the scent of aged parchment and ozone. Towering shelves stretch into the gloom, holding countless volumes on subjects deemed too dangerous or arcane for public consumption. Velvet ropes and ancient wards guard its entrance, signifying that only the most privileged or desperate dare to tread here. Dust motes dance in the few stray beams of light, creating an almost mystical atmosphere.'
    },
    {
      id: 'CH1_LC02',
      name: 'The Apothecary\'s Back Room',
      description: 'A cramped, dimly lit space behind the main counter of the city\'s oldest apothecary. Shelves are crammed with jars of exotic ingredients, bubbling retorts, and strange, pungent odors. The air is thick with the scent of dried herbs and a faint, metallic tang. A worn wooden desk is covered in ledgers and half-finished tinctures, suggesting a place of clandestine operations rather than simple commerce.',
      details: 'A cramped, dimly lit space behind the main counter of the city\'s oldest apothecary. Shelves are crammed with jars of exotic ingredients, bubbling retorts, and strange, pungent odors. The air is thick with the scent of dried herbs and a faint, metallic tang. A worn wooden desk is covered in ledgers and half-finished tinctures, suggesting a place of clandestine operations rather than simple commerce.'
    },
    {
      id: 'CH1_LC03',
      name: 'The Grand Library\'s Secret Annex',
      description: 'Hidden behind a cleverly disguised bookshelf, this small, dusty annex is a repository for Elara\'s most sensitive and dangerous research. The air is still and heavy, filled with the faint scent of ozone and ancient magic. Shelves here hold not books, but strange artifacts, sealed jars of glowing substances, and complex charts of unknown constellations, suggesting a deeper, more personal involvement in the unfolding mystery.',
      details: 'Hidden behind a cleverly disguised bookshelf, this small, dusty annex is a repository for Elara\'s most sensitive and dangerous research. The air is still and heavy, filled with the faint scent of ozone and ancient magic. Shelves here hold not books, but strange artifacts, sealed jars of glowing substances, and complex charts of unknown constellations, suggesting a deeper, more personal involvement in the unfolding mystery.'
    },
    {
      id: 'CH1_LC04',
      name: 'The Grand Library\'s Rooftop Observatory',
      description: 'A rarely used, dilapidated observatory on the highest point of the Grand Library. Its dome is cracked, and the ancient telescope is covered in dust and cobwebs. Despite its disrepair, the panoramic view of the city and the night sky is breathtaking. The air here is thin and cold, and a faint, metallic tang lingers, hinting at past experiments or observations of celestial phenomena.',
      details: 'A rarely used, dilapidated observatory on the highest point of the Grand Library. Its dome is cracked, and the ancient telescope is covered in dust and cobwebs. Despite its disrepair, the panoramic view of the city and the night sky is breathtaking. The air here is thin and cold, and a faint, metallic tang lingers, hinting at past experiments or observations of celestial phenomena.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_CH1_1',
      cards: ['CH1_EV01', 'CH1_CH01'],
      result: 'Combining the glowing manuscript with Elara, the librarian, reveals a torn page from the manuscript, suggesting her deep involvement with its secrets.',
      unlock: 'CH1_EV02'
    },
    {
      id: 'rule_CH1_2',
      cards: ['CH1_CH01', 'CH1_LC01'],
      result: 'Investigating Elara within the Forbidden Section leads to the discovery of her personal diary, hinting at her secret research.',
      unlock: 'CH1_EV03'
    },
    {
      id: 'rule_CH1_3',
      cards: ['CH1_EV01', 'CH1_LC01'],
      result: 'Examining the manuscript within the Forbidden Section reveals a hidden, cryptic map of the city\'s sewers, suggesting a connection to the underground.',
      unlock: 'CH1_EV04'
    },
    {
      id: 'rule_CH1_4',
      cards: ['CH1_EV03', 'CH1_CH02'],
      result: 'Jonas, the apprentice, nervously confesses to seeing Elara purchase strange herbs, leading to a receipt for rare alchemical ingredients.',
      unlock: 'CH1_EV05'
    },
    {
      id: 'rule_CH1_5',
      cards: ['CH1_EV04', 'CH1_EV01'],
      result: 'The cryptic map, when cross-referenced with the glowing manuscript, reveals a connection to recent disappearances mentioned in the City Guard\'s preliminary report.',
      unlock: 'CH1_EV06'
    },
    {
      id: 'rule_CH1_6',
      cards: ['CH1_EV03', 'CH1_EV06'],
      result: 'Elara\'s diary entries about the \'glowing plague\' and the City Guard\'s report on disappearances, when combined, reveal a cryptic warning letter she received from an unknown entity.',
      unlock: 'CH1_EV07'
    },
    {
      id: 'rule_CH1_7',
      cards: ['CH1_CH02', 'CH1_EV07'],
      result: 'Jonas, terrified by the warning letter, secretly confesses to witnessing Elara\'s strange ritual, detailing his fears about her involvement in the plague.',
      unlock: 'CH1_EV08'
    },
    {
      id: 'rule_CH1_8',
      cards: ['CH1_EV02', 'CH1_CH04'],
      result: 'The torn page from the manuscript, when shown to the Whispering Scholar, is identified as part of an ancient astrolabe, hinting at cosmic connections.',
      unlock: 'CH1_EV09'
    },
    {
      id: 'rule_CH1_9',
      cards: ['CH1_EV09', 'CH1_LC04'],
      result: 'The ancient astrolabe fragment, when brought to the Grand Library\'s Rooftop Observatory, reveals a faded alchemical diagram, hinting at the artificial origin of the plague.',
      unlock: 'CH1_EV10'
    },
    {
      id: 'rule_CH1_10',
      cards: ['CH1_EV06', 'CH1_CH05'],
      result: 'The City Guard\'s report on disappearances, combined with observations of the Silent Watcher, leads to the discovery of a scratched silver locket near the aqueducts, hinting at a victim\'s personal connection.',
      unlock: 'CH1_EV11'
    },
    {
      id: 'rule_CH1_11',
      cards: ['CH1_CH01', 'CH1_CH03'],
      result: 'Elara and Sergeant Thorne, despite their differences, share a common goal: understanding the strange events. Their combined insights reveal the existence of a secret annex within the library.',
      unlock: 'CH1_LC03'
    },
    {
      id: 'rule_CH1_12',
      cards: ['CH1_EV05', 'CH1_CH02'],
      result: 'The receipt for alchemical herbs, when discussed with Jonas, leads him to recall the Apothecary\'s Back Room, a place of suspicious dealings.',
      unlock: 'CH1_LC02'
    }
  ],
  fragments: [],
  winCondition: 'CH1_EV11',
  initialCards: [
    'CH1_EV01',
    'CH1_LC01', 
    'CH1_CH01'
  ]
};