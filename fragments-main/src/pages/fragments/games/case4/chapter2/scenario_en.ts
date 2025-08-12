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


export const case4ChEn2: GameScenario = 
{
  "id": "arcanum_shadows_chapter2_en",
  "title": "Chapter 2: Dissecting Clues and Whispers of Ancient Magic",
  "story": "Victor Crow scientifically analyzes the discovered clues and uncovers the hidden motives and past secrets of the suspects.",
  "victim": "Elijah Stonewick",
  "suspects": [
    {
      "id": "B01",
      "name": "Victor Crow's Analysis",
      "role": "Detective",
      "description": "Dissects clues with logic and science.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B11",
      "name": "Aelen Silverwood's Confession",
      "role": "Suspect",
      "description": "Admits that the Blood Rose is used in rituals requiring a living heart.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B12",
      "name": "Grimlok Steelhammer's Component",
      "role": "Suspect",
      "description": "Confesses that Stonewick commissioned specific components from him.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B13",
      "name": "Liliana Bane's Ethical Concerns",
      "role": "Suspect",
      "description": "Admits to having raised ethical concerns about Stonewick's research methods.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B14",
      "name": "Grok Bloodaxe's Contradiction",
      "role": "Suspect",
      "description": "Contradictory statement: he lost family to Stonewick but blames himself for not protecting him.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B15",
      "name": "Kairen Nightshade's Footprint",
      "role": "Suspect",
      "description": "Confirms that the footprint on the lab floor matches Kairen's foot size.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "B02",
      "name": "Faintly Glowing Crystal Shard",
      "description": "A fragment of a precisely crafted magic amplification device.",
      "details": "Suggests it was used in another device, not part of a magic staff.",
      "location": ""
    },
    {
      "id": "B03",
      "name": "Clues in the Worn Leather Pouch",
      "description": "A dried red petal and a silver coin with an unknown emblem.",
      "details": "Contains key clues to the case.",
      "location": ""
    },
    {
      "id": "B04",
      "name": "Blood Rose",
      "description": "A rare magical plant used in ancient Elf magic rituals for absorbing life energy.",
      "details": "Not native to Arcanum. Connects life energy absorption with the missing heart.",
      "location": "B03"
    },
    {
      "id": "B05",
      "name": "Heartbreaker Silver Coin",
      "description": "An ancient Dwarf emblem. Symbolizes a weapon that destroys hearts.",
      "details": "Symbolizes a weapon used to destroy the hearts of powerful magical beings in Dwarf legends.",
      "location": "B03"
    },
    {
      "id": "B06",
      "name": "Magic Staff Crack Analysis",
      "description": "A crack caused by an instantaneous concentration of extremely powerful magical energy.",
      "details": "Suggests Stonewick's staff was used as a murder weapon, but its own power wasn't enough to extract the heart.",
      "location": ""
    },
    {
      "id": "B07",
      "name": "Small, Agile Footprint",
      "description": "A small, nimble footprint found on the lab floor, as if someone moved by floating.",
      "details": "Different from Orc mercenary Grok Bloodaxe's large foot. Almost no trace left.",
      "location": ""
    },
    {
      "id": "B08",
      "name": "Heartstone of Life (Information)",
      "description": "An ancient Elf artifact that stores and amplifies life energy.",
      "details": "Stonewick might have tried to recreate this Heartstone, or turn his own heart into a powerful magical energy source.",
      "location": ""
    },
    {
      "id": "B09",
      "name": "Stonewick's Heart Research",
      "description": "A statement implying Stonewick tried to gain immortality using his own heart.",
      "details": "Mentioned in Kairen Nightshade's testimony.",
      "location": ""
    },
    {
      "id": "B10",
      "name": "Ancient Elf Magic Circle",
      "description": "A faint magic circle found under the lab desk, bearing traces of ancient Elf magic.",
      "details": "Hints at a connection with Aelen Silverwood.",
      "location": ""
    },
    {
      "id": "B16",
      "name": "Stonewick's Heart (Objective)",
      "description": "Realizes that the missing heart was not just an organ, but the culprit's ultimate objective.",
      "details": "A powerful energy source and goal, fusing ancient magic and advanced technology.",
      "location": ""
    },
    {
      "id": "B17",
      "name": "Shadows of Accomplices",
      "description": "Clues hinting at the unexpected existence of accomplices.",
      "details": "Hidden motives of each suspect and their connection to the locked-room trick.",
      "location": ""
    },
    {
      "id": "B18",
      "name": "Heartstone Ritual (Hypothesis)",
      "description": "Hypothesis that Stonewick tried to recreate the 'Heartstone of Life' using his own heart.",
      "details": "The missing heart, Blood Rose, and Heartbreaker Silver Coin support this hypothesis.",
      "location": ""
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_B04", "cards": ["B01", "B03"], "result": "Victor Crow analyzes the clues in the worn leather pouch and uncovers the identity of the Blood Rose.", "unlock": "B04"},
    {"id": "rule_B05", "cards": ["B01", "B04"], "result": "Victor Crow understands the meaning of the Heartbreaker Silver Coin through his Blood Rose research.", "unlock": "B05"},
    {"id": "rule_B06", "cards": ["B01", "B02"], "result": "Victor Crow analyzes the faintly glowing crystal shard and realizes the magic staff's crack was caused by an extremely powerful magical energy.", "unlock": "B06"},
    {"id": "rule_B07", "cards": ["B01", "B05"], "result": "Victor Crow discovers a small, agile footprint on the lab floor through his Heartbreaker Silver Coin analysis.", "unlock": "B07"},
    {"id": "rule_B08", "cards": ["B01", "B08"], "result": "Victor Crow obtains deeper information about heart energy through the Heartstone of Life information and his analysis.", "unlock": "B08"},
    {"id": "rule_B09", "cards": ["B01", "B06"], "result": "Victor Crow secures a statement implying Stonewick tried to gain immortality using his own heart, through his magic staff crack analysis.", "unlock": "B09"},
    {"id": "rule_B10", "cards": ["B01", "B07"], "result": "Victor Crow discovers an ancient Elf magic circle under the lab desk through his analysis of the small, agile footprint.", "unlock": "B10"},
    {"id": "rule_B11", "cards": ["B04", "B10"], "result": "Through the Blood Rose and the ancient Elf magic circle, Aelen Silverwood admits that the Blood Rose is used in rituals requiring a living heart.", "unlock": "B11"},
    {"id": "rule_B12", "cards": ["B05", "B06"], "result": "Through the Heartbreaker Silver Coin and the magic staff crack analysis, Grimrok Steelhammer confesses that Stonewick commissioned specific components from him.", "unlock": "B12"},
    {"id": "rule_B13", "cards": ["B08", "B09"], "result": "Through the Heartstone of Life information and Stonewick's heart research, Liliana Bane admits to having raised ethical concerns about Stonewick's research methods.", "unlock": "B13"},
    {"id": "rule_B14", "cards": ["B07", "B08"], "result": "Through the small, agile footprint and the Heartstone of Life information, Grok Bloodaxe makes a contradictory statement: he lost family to Stonewick but blames himself for not protecting him.", "unlock": "B14"},
    {"id": "rule_B15", "cards": ["B07", "B10"], "result": "Through the small, agile footprint and the ancient Elf magic circle, Kairen Nightshade's footprint is confirmed to match the one on the lab floor.", "unlock": "B15"},
    {"id": "rule_B16", "cards": ["B04", "B05"], "result": "Through the Blood Rose and the Heartbreaker Silver Coin, you realize that the missing heart was not just an organ, but the culprit's ultimate objective.", "unlock": "B16"},
    {"id": "rule_B17", "cards": ["B11", "B12"], "result": "Through Aelen Silverwood's confession and Grimrok Steelhammer's component, clues hinting at the unexpected existence of accomplices are discovered.", "unlock": "B17"},
    {"id": "rule_B18", "cards": ["B16", "B17"], "result": "Through Stonewick's heart objective and the shadows of accomplices, you hypothesize that Stonewick tried to recreate the 'Heartstone of Life' using his own heart.", "unlock": "B18"}
  ],
  "fragments": [],
  "winCondition": "B18",
  "initialCards": ["B01", "B02", "B03"]
}
