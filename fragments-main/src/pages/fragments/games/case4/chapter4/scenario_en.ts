
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


export const case4ChEn4: GameScenario = 
{
  "id": "arcanum_shadows_chapter4_en",
  "title": "Chapter 4: The Accomplices' Play and the Truth in the Shadows",
  "story": "Reveal all the truth and deliver the final judgment to the suspects.",
  "victim": "Elijah Stonewick",
  "suspects": [
    {
      "id": "D01",
      "name": "Victor Crow's Final Deduction",
      "role": "Detective",
      "description": "He is convinced that all clues form a single picture.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D04",
      "name": "Grimlok Steelhammer's Confession",
      "role": "Suspect",
      "description": "Admits to having created the pulley device used in the locked-room trick.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D05",
      "name": "Aelen Silverwood's Admission",
      "role": "Suspect",
      "description": "Admits to having provided the magic amplification device and condemns Stonewick's arrogance.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D06",
      "name": "Liliana Bane's Silence",
      "role": "Suspect",
      "description": "Remains silent despite having raised ethical concerns about Stonewick's research methods.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D07",
      "name": "Grok Bloodaxe's Contradiction",
      "role": "Suspect",
      "description": "Contradictory statement: he lost family to Stonewick but blames himself for not protecting him.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D08",
      "name": "Kairen Nightshade's Confession",
      "role": "Suspect",
      "description": "Confesses to having implanted Stonewick's heart into his own body to gain immortality.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D14",
      "name": "Victor Crow's Agony",
      "role": "Detective",
      "description": "Crow, knowing the truth but agonizing over the limits of the law.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D17",
      "name": "The Immortal One",
      "role": "Suspect",
      "description": "Kairen, who gained immortality by implanting Stonewick's heart.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D18",
      "name": "The One Who Knows the Truth",
      "role": "Detective",
      "description": "Victor Crow, who has learned all the truth.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "D02",
      "name": "The Accomplices' Play",
      "description": "The grudges, desires, and roles of the suspects harmonized to complete a grand play.",
      "details": "Their individual motives and means converged into a single murder.",
      "location": ""
    },
    {
      "id": "D03",
      "name": "The Truth of the Heartstone Ritual",
      "description": "The truth that Stonewick tried to create a 'Heartstone of Life' using his own heart.",
      "details": "The fusion of ancient magic and advanced technology.",
      "location": ""
    },
    {
      "id": "D09",
      "name": "The Full Extent of the Locked-Room Trick",
      "description": "A complete explanation of the locked-room trick using the pulley device and magic amplification device.",
      "details": "Samuel Goldberg created this device.",
      "location": ""
    },
    {
      "id": "D10",
      "name": "Whereabouts of the Missing Heart",
      "description": "Reveals that Stonewick's heart was implanted into Kairen's body.",
      "details": "Kairen's shocking confession.",
      "location": ""
    },
    {
      "id": "D11",
      "name": "The Price of Immortality",
      "description": "Reveals that Kairen murdered Stonewick and used other suspects to gain immortality.",
      "details": "Kairen's ultimate goal.",
      "location": ""
    },
    {
      "id": "D12",
      "name": "Difficulty of Legal Judgment",
      "description": "Conclusion that legal judgment is difficult as all suspects are accomplices with motives.",
      "details": "Hastings knew the truth, but legal punishment was impossible.",
      "location": ""
    },
    {
      "id": "D13",
      "name": "Shadows of Arcanum",
      "description": "Implies that the truth of this case will forever remain in the dark shadows of Arcanum.",
      "details": "A complex truth difficult to judge by law.",
      "location": ""
    },
    {
      "id": "D15",
      "name": "Ambiguity of Justice",
      "description": "A question about the execution of justice outside the bounds of the law.",
      "details": "Victor Crow's agony.",
      "location": ""
    },
    {
      "id": "D16",
      "name": "Silent Train",
      "description": "The train, carrying the truth of the case, heads to Paris in silence.",
      "details": "Victor Crow left the train in silence.",
      "location": ""
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_D04", "cards": ["D01", "D02"], "result": "Victor Crow, through the accomplices' play, reveals that Grimlok Steelhammer created the pulley device used in the locked-room trick.", "unlock": "D04"},
    {"id": "rule_D05", "cards": ["D01", "D04"], "result": "Victor Crow, through Grimlok Steelhammer's confession, reveals that Aelen Silverwood provided the magic amplification device.", "unlock": "D05"},
    {"id": "rule_D06", "cards": ["D01", "D05"], "result": "Victor Crow, through Aelen Silverwood's provision, reveals that Liliana Bane remained silent despite having raised ethical concerns about Stonewick's research methods.", "unlock": "D06"},
    {"id": "rule_D07", "cards": ["D01", "D06"], "result": "Victor Crow, through Liliana Bane's silence, reveals that Grok Bloodaxe made a contradictory statement about losing family to Stonewick but blaming himself for not protecting him.", "unlock": "D07"},
    {"id": "rule_D08", "cards": ["D01", "D07"], "result": "Victor Crow, through Grok Bloodaxe's contradictory statements, makes Kairen Nightshade confess to having implanted Stonewick's heart into his own body to gain immortality.", "unlock": "D08"}
    {"id": "rule_D09", "cards": ["D04", "D05"], "result": "Through Grimlok Steelhammer's confession and Aelen Silverwood's admission, the full extent of the locked-room trick is perfectly explained.", "unlock": "D09"},
    {"id": "rule_D10", "cards": ["D08", "D03"], "result": "Through Kairen Nightshade's confession and the truth of the Heartstone Ritual, the whereabouts of the missing heart are revealed.", "unlock": "D10"},
    {"id": "rule_D11", "cards": ["D10", "D02"], "result": "Through the whereabouts of the missing heart and the accomplices' play, it is revealed that Kairen murdered Stonewick and used other suspects to gain immortality.", "unlock": "D11"},
    {"id": "rule_D12", "cards": ["D11", "D01"], "result": "Through the price of immortality and Victor Crow's final deduction, it is concluded that legal judgment is difficult as all suspects are accomplices with motives.", "unlock": "D12"},
    {"id": "rule_D13", "cards": ["D12", "D02"], "result": "Through the difficulty of legal judgment and the accomplices' play, it is implied that the truth of this case will forever remain in the dark shadows of Arcanum.", "unlock": "D13"},
    {"id": "rule_D14", "cards": ["D01", "D12"], "result": "Through Victor Crow's final deduction and the difficulty of legal judgment, Crow's agony is shown: knowing the truth but agonizing over the limits of the law.", "unlock": "D14"},
    {"id": "rule_D15", "cards": ["D12", "D14"], "result": "Through the difficulty of legal judgment and Victor Crow's agony, a question about the execution of justice outside the bounds of the law is raised.", "unlock": "D15"},
    {"id": "rule_D16", "cards": ["D13", "D15"], "result": "Through the shadows of Arcanum and the ambiguity of justice, the silent train, carrying the truth of the case, heads to Paris.", "unlock": "D16"},
    {"id": "rule_D17", "cards": ["D10", "D11"], "result": "Through the whereabouts of the missing heart and the price of immortality, Kairen, who gained immortality by implanting Stonewick's heart, is revealed.", "unlock": "D17"},
    {"id": "rule_D18", "cards": ["D01", "D13"], "result": "Through Victor Crow's final deduction and the shadows of Arcanum, Victor Crow, who has learned all the truth, is revealed.", "unlock": "D18"}
  ],
  "fragments": [],
  "winCondition": "D18",
  "initialCards": ["D01", "D02", "D03"]
}
