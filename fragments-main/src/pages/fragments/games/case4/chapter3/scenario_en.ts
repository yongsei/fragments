
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


export const case4ChEn3: GameScenario = 
{
  "id": "arcanum_shadows_chapter3_en",
  "title": "Chapter 3: Connecting the Clues and Shadows of the Past",
  "story": "Unravel the entire locked-room trick and connect the hidden motives of the suspects with past events.",
  "victim": "Elijah Stonewick",
  "suspects": [
    {
      "id": "C01",
      "name": "Victor Crow's Deduction",
      "role": "Detective",
      "description": "He senses that all clues are forming a single picture.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C04",
      "name": "Aelen Silverwood's Confession",
      "role": "Suspect",
      "description": "Admits that the Blood Rose is used in rituals requiring a living heart.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C05",
      "name": "Grimlok Steelhammer's Commission",
      "role": "Suspect",
      "description": "Confesses that Stonewick commissioned specific components from him without revealing their purpose.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C06",
      "name": "Liliana Bane's Silence",
      "role": "Suspect",
      "description": "Remains silent despite having raised ethical concerns about Stonewick's research methods.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C07",
      "name": "Grok Bloodaxe's Contradictory Statement",
      "role": "Suspect",
      "description": "Contradictory statement: he lost family to Stonewick but blames himself for not protecting him.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C08",
      "name": "Kairen Nightshade's Footprint",
      "role": "Suspect",
      "description": "Confirms that the footprint on the lab floor matches Kairen's foot size.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C14",
      "name": "Kairen's Shocking Confession",
      "role": "Suspect",
      "description": "Confesses to having implanted Stonewick's heart into his own body to gain immortality.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "C02",
      "name": "The Secret of the Blood Rose",
      "description": "A flower used in ancient Elf magic rituals to absorb life energy.",
      "details": "Requires a living heart.",
      "location": ""
    },
    {
      "id": "C03",
      "name": "Meaning of the Heartbreaker Silver Coin",
      "description": "An emblem from ancient Dwarf legends symbolizing a weapon that destroys hearts.",
      "details": "Connects to the pulley device used in the locked-room trick.",
      "location": ""
    },
    {
      "id": "C09",
      "name": "Stonewick's Heart Research (Reconfirmed)",
      "description": "Reconfirms that Stonewick tried to gain immortality using his own heart.",
      "details": "He was becoming a monster in the process.",
      "location": ""
    },
    {
      "id": "C10",
      "name": "Purpose of the Missing Heart",
      "description": "Realizes that Stonewick's heart was not just an organ, but a powerful magical energy source and ultimate goal.",
      "details": "A result of the fusion of ancient magic and advanced technology.",
      "location": ""
    },
    {
      "id": "C11",
      "name": "Accomplice in the Locked-Room Trick",
      "description": "Clues suggesting Kairen's involvement in the locked-room trick.",
      "details": "The small, agile footprint matches Kairen's foot size.",
      "location": ""
    },
    {
      "id": "C12",
      "name": "The Accomplices' Play",
      "description": "The grudges, desires, and roles of the suspects harmonized to complete a grand play.",
      "details": "Their individual motives and means converged into a single murder.",
      "location": ""
    },
    {
      "id": "C13",
      "name": "Truth of the Heartstone Ritual",
      "description": "The truth that Stonewick tried to create a 'Heartstone of Life' using his own heart.",
      "details": "The fusion of ancient magic and advanced technology.",
      "location": ""
    },
    {
      "id": "C15",
      "name": "The Price of Immortality",
      "description": "Reveals that Kairen murdered Stonewick and used other suspects to gain immortality.",
      "details": "Kairen's ultimate goal.",
      "location": ""
    },
    {
      "id": "C16",
      "name": "Shadows of Arcanum",
      "description": "Implies that the truth of this case will forever remain in the dark shadows of Arcanum.",
      "details": "A complex truth difficult to judge by law.",
      "location": ""
    },
    {
      "id": "C17",
      "name": "Difficulty of Legal Judgment",
      "description": "Conclusion that legal judgment is difficult as all suspects are accomplices with motives.",
      "details": "Hastings knew the truth, but legal punishment was impossible.",
      "location": ""
    },
    {
      "id": "C18",
      "name": "Victor Crow's Choice",
      "description": "Crow, knowing the truth but facing the limits of the law, agonizes over his choice.",
      "details": "Justice sometimes operates outside the bounds of the law.",
      "location": ""
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_C04", "cards": ["C01", "C02"], "result": "Victor Crow, through the secret of the Blood Rose, makes Aelen Silverwood admit that the Blood Rose is used in rituals requiring a living heart.", "unlock": "C04"},
    {"id": "rule_C05", "cards": ["C01", "C03"], "result": "Victor Crow, through the meaning of the Heartbreaker Silver Coin, makes Grimlok Steelhammer confess that Stonewick commissioned specific components from him without revealing their purpose.", "unlock": "C05"},
    {"id": "rule_C06", "cards": ["C01", "C04"], "result": "Victor Crow, through Aelen Silverwood's confession, realizes Liliana Bane remained silent despite having raised ethical concerns about Stonewick's research methods.", "unlock": "C06"},
    {"id": "rule_C07", "cards": ["C01", "C03"], "result": "Victor Crow, through the meaning of the Heartbreaker Silver Coin, makes Grok Bloodaxe give a contradictory statement: he lost family to Stonewick but blames himself for not protecting him.", "unlock": "C07"},
    {"id": "rule_C08", "cards": ["C01", "C05"], "result": "Victor Crow, through Grimlok Steelhammer's component commission, confirms that Kairen Nightshade's footprint matches the one on the lab floor.", "unlock": "C08"}
    {"id": "rule_C09", "cards": ["C04", "C06"], "result": "Through Aelen Silverwood's confession and Liliana Bane's silence, it is reconfirmed that Stonewick tried to gain immortality using his own heart.", "unlock": "C09"},
    {"id": "rule_C10", "cards": ["C05", "C07"], "result": "Through Grimlok Steelhammer's commission and Grok Bloodaxe's contradictory statement, you realize that the missing heart was not just an organ, but a powerful magical energy source and ultimate goal.", "unlock": "C10"},
    {"id": "rule_C11", "cards": ["C08", "C09"], "result": "Through Kairen Nightshade's footprint and Stonewick's heart research, clues suggesting Kairen's involvement in the locked-room trick are found.", "unlock": "C11"},
    {"id": "rule_C12", "cards": ["C10", "C11"], "result": "Through the purpose of the missing heart and the accomplice in the locked-room trick, you realize that the grudges, desires, and roles of the suspects harmonized to complete a grand play.", "unlock": "C12"},
    {"id": "rule_C13", "cards": ["C09", "C10"], "result": "Through Stonewick's heart research and the purpose of the missing heart, the truth that Stonewick tried to create a 'Heartstone of Life' using his own heart is revealed.", "unlock": "C13"},
    {"id": "rule_C14", "cards": ["C11", "C12"], "result": "Through the accomplice in the locked-room trick and the accomplices' play, Kairen confesses to having implanted Stonewick's heart into his own body to gain immortality.", "unlock": "C14"},
    {"id": "rule_C15", "cards": ["C13", "C14"], "result": "Through the truth of the Heartstone Ritual and Kairen's shocking confession, it is revealed that Kairen murdered Stonewick and used other suspects to gain immortality.", "unlock": "C15"},
    {"id": "rule_C16", "cards": ["C12", "C15"], "result": "Through the accomplices' play and the price of immortality, it is implied that the truth of this case will forever remain in the dark shadows of Arcanum.", "unlock": "C16"},
    {"id": "rule_C17", "cards": ["C15", "C16"], "result": "Through the price of immortality and the shadows of Arcanum, it is concluded that legal judgment is difficult as all suspects are accomplices with motives.", "unlock": "C17"},
    {"id": "rule_C18", "cards": ["C01", "C17"], "result": "Through Victor Crow's deduction and the difficulty of legal judgment, Crow's choice is revealed: knowing the truth but agonizing over the limits of the law.", "unlock": "C18"}
  ],
  "fragments": [],
  "winCondition": "C18",
  "initialCards": ["C01", "C02", "C03"]
}
