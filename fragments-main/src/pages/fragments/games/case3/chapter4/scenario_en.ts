
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


export const case3ChEn4: GameScenario = {
  "id": "orient_express_chapter4_en",
  "title": "Chapter 4: The Orchestra of Revenge and the Final Judgment",
  "story": "Reveal all the truth and deliver the final judgment to the suspects.",
  "victim": "Alexander Volkov",
  "suspects": [
    {
      "id": "D01",
      "name": "Hastings' Final Deduction",
      "role": "Investigator",
      "description": "He is convinced that all clues form a single picture.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D04",
      "name": "Goldberg's Confession",
      "role": "Suspect",
      "description": "Admits to having created the device used in the locked-room trick.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D05",
      "name": "Elena's Tears",
      "role": "Suspect",
      "description": "Her alibi shattered, she confesses to wanting to inflict one last humiliation on Volkov.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D06",
      "name": "Maria's Silence",
      "role": "Suspect",
      "description": "Admits to having given Volkov sleeping pills, implying his death was deserved.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D07",
      "name": "Schmidt's Vengeance",
      "role": "Suspect",
      "description": "Claims Volkov killed his father, revealing his thirst for revenge.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D08",
      "name": "Colonel Smith's Judgment",
      "role": "Suspect",
      "description": "Admits to having stabbed Volkov, claiming it was a judgment for justice.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "D02",
      "name": "The Orchestra of Revenge",
      "description": "Reveals that this murder was a planned act of revenge by multiple accomplices.",
      "details": "Their individual grudges combined to form a grand act of revenge.",
      "location": ""
    },
    {
      "id": "D03",
      "name": "The Machine of Justice",
      "description": "Explains what the cogwheel pattern on the dagger's hilt symbolizes.",
      "details": "Implies this murder was not a simple crime, but a planned judgment.",
      "location": ""
    },
    {
      "id": "D09",
      "name": "The Full Extent of the Locked-Room Trick",
      "description": "The method of escaping the locked room using the metal fiber thread and pulley device is fully explained.",
      "details": "Samuel Goldberg created this device.",
      "location": ""
    },
    {
      "id": "D10",
      "name": "Volkov's Terror",
      "description": "Reveals that he awoke just before dying and saw the faces of his avengers surrounding him.",
      "details": "The reason for his terror despite being given sleeping pills.",
      "location": ""
    },
    {
      "id": "D11",
      "name": "The Limits of the Law",
      "description": "Concludes that all suspects are accomplices and have motives, making legal judgment difficult.",
      "details": "Hastings knows the truth, but legal punishment is impossible.",
      "location": ""
    },
    {
      "id": "D12",
      "name": "Hastings' Choice",
      "description": "He leaves the truth to their conscience, and the train heads to Paris.",
      "details": "Justice sometimes operates outside the bounds of the law.",
      "location": ""
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_D04", "cards": ["D01", "D02"], "result": "Through the Orchestra of Revenge, Hastings reveals that Samuel Goldberg created the device used in the locked-room trick.", "unlock": "D04"},
    {"id": "rule_D05", "cards": ["D01", "D02"], "result": "Through the Orchestra of Revenge, Hastings reveals that Countess Elena wanted to inflict one last humiliation on Volkov.", "unlock": "D05"},
    {"id": "rule_D06", "cards": ["D01", "D02"], "result": "Through the Orchestra of Revenge, Hastings reveals that Maria Ivanova gave Volkov sleeping pills.", "unlock": "D06"},
    {"id": "rule_D07", "cards": ["D01", "D02"], "result": "Through the Orchestra of Revenge, Hastings reveals that Dr. Schmidt harbored vengeance against Volkov.", "unlock": "D07"},
    {"id": "rule_D08", "cards": ["D01", "D02"], "result": "Through the Orchestra of Revenge, Hastings reveals that Colonel Smith stabbed Volkov.", "unlock": "D08"},
    {"id": "rule_D09", "cards": ["D04", "D05"], "result": "Through Goldberg's confession and Elena's tears, the full extent of the locked-room trick is perfectly explained.", "unlock": "D09"},
    {"id": "rule_D10", "cards": ["D06", "D07"], "result": "Through Maria's silence and Schmidt's vengeance, it is revealed that Volkov awoke just before dying and saw the faces of his avengers.", "unlock": "D10"},
    {"id": "rule_D11", "cards": ["D08", "D09"], "result": "Through Colonel Smith's judgment and the full extent of the locked-room trick, it is concluded that all suspects are accomplices with motives, making legal judgment difficult.", "unlock": "D11"},
    {"id": "rule_D12", "cards": ["D10", "D11"], "result": "Through Volkov's terror and the limits of the law, Hastings leaves the truth to their conscience, and the train heads to Paris.", "unlock": "D12"}
  ],
  "fragments": [],
  "winCondition": "D12",
  "initialCards": ["D01", "D02", "D03"]
}
