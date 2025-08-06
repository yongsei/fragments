
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


export const case3ChEn3: GameScenario = {
  "id": "orient_express_chapter3_en",
  "title": "Chapter 3: Connecting the Clues and Shadows of the Past",
  "story": "Unravel the entire locked-room trick and connect the hidden motives of the suspects with past events.",
  "victim": "Alexander Volkov",
  "suspects": [
    {
      "id": "C01",
      "name": "Hastings' Insight",
      "role": "Investigator",
      "description": "He senses that all clues are forming a single picture.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C06",
      "name": "The Countess's Accomplice",
      "role": "Suspect",
      "description": "The owner of the exotic perfume that shattered Countess Elena's alibi.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "C02",
      "name": "The Secret of the Metal Fiber Thread",
      "description": "A very thin and tough thread, made of special metal fibers, used for specific purposes.",
      "details": "Uncommon in the early 19th century, used in intricate machinery or specialized textiles.",
      "location": ""
    },
    {
      "id": "C03",
      "name": "Reconstruction of the Locked-Room Trick",
      "description": "The culprit's method of escaping the locked room using the thread and door gap.",
      "details": "Pulling the thread to lock the door from the inside, then retrieving it from the outside.",
      "location": ""
    },
    {
      "id": "C04",
      "name": "Pulley Device",
      "description": "The metal piece found in Samuel Goldberg's cabin is confirmed to be part of a pulley device used to pull the thread.",
      "details": "A key component used in the locked-room trick.",
      "location": ""
    },
    {
      "id": "C05",
      "name": "Schmidt Family's Bankruptcy",
      "description": "Confirmed that Dr. Schmidt's family went bankrupt due to Volkov's financial scandal.",
      "details": "A strong motive for revenge against Volkov.",
      "location": ""
    },
    {
      "id": "C07",
      "name": "Volkov's Insomnia and Sleeping Pills",
      "description": "Confirmed that Maria Ivanova gave Volkov sleeping pills.",
      "details": "Suggests Volkov was in a deep sleep at the time of the murder.",
      "location": ""
    },
    {
      "id": "C08",
      "name": "Colonel Smith's Son",
      "description": "Confirmed that Colonel Smith's son was sacrificed in a colonial massacre involving Volkov.",
      "details": "Implies the Colonel's 'justice' means revenge.",
      "location": ""
    },
    {
      "id": "C09",
      "name": "Motive for Revenge",
      "description": "Confirmed that each suspect harbored a strong grudge against Volkov.",
      "details": "A shared desire for revenge beyond personal grudges.",
      "location": ""
    },
    {
      "id": "C10",
      "name": "Meaning of the Cogwheel Pattern",
      "description": "Deduces that the cogwheel pattern on the dagger's hilt symbolizes the 'Machine of Justice'.",
      "details": "Implies this murder was not a simple crime, but a planned judgment.",
      "location": ""
    },
    {
      "id": "C11",
      "name": "Roles of the Accomplices",
      "description": "The ways and roles of each suspect's contribution to the murder are revealed.",
      "details": "Including the locked-room trick, administering sleeping pills, and the final blow.",
      "location": ""
    },
    {
      "id": "C12",
      "name": "Orchestra of Revenge",
      "description": "Realizes that this murder was not a single crime, but a planned act of revenge by multiple accomplices.",
      "details": "Their individual grudges combined to form a grand act of revenge.",
      "location": ""
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_C04", "cards": ["C02", "C03"], "result": "Through the metal fiber thread and the reconstruction of the locked-room trick, you confirm that the metal piece found in Samuel Goldberg's cabin is part of a pulley device.", "unlock": "C04"},
    {"id": "rule_C05", "cards": ["C01", "C02"], "result": "Through Hastings' insight and the secret of the metal fiber thread, you confirm that Dr. Schmidt's family's bankruptcy is related to Volkov's financial scandal.", "unlock": "C05"},
    {"id": "rule_C06", "cards": ["C01", "C03"], "result": "Through Hastings' insight and the reconstruction of the locked-room trick, you identify the owner of the exotic perfume that shattered Countess Elena's alibi.", "unlock": "C06"},
    {"id": "rule_C07", "cards": ["C01", "C02"], "result": "Through Hastings' insight and the secret of the metal fiber thread, you confirm that Maria Ivanova gave Volkov sleeping pills.", "unlock": "C07"},
    {"id": "rule_C08", "cards": ["C01", "C03"], "result": "Through Hastings' insight and the reconstruction of the locked-room trick, you confirm that Colonel Smith's son was sacrificed in a colonial massacre involving Volkov.", "unlock": "C08"},
    {"id": "rule_C09", "cards": ["C05", "C08"], "result": "Connecting the Schmidt family's bankruptcy and the sacrifice of Colonel Smith's son, you confirm that each suspect harbored a strong grudge against Volkov.", "unlock": "C09"},
    {"id": "rule_C10", "cards": ["C04", "C09"], "result": "Connecting the pulley device and the motive for revenge, you deduce that the cogwheel pattern on the dagger's hilt symbolizes the 'Machine of Justice'.", "unlock": "C10"},
    {"id": "rule_C11", "cards": ["C06", "C07"], "result": "Connecting the Countess's accomplice and Volkov's insomnia and sleeping pills, the ways and roles of each suspect's contribution to the murder are revealed.", "unlock": "C11"},
    {"id": "rule_C12", "cards": ["C10", "C11"], "result": "Connecting the meaning of the cogwheel pattern and the roles of the accomplices, you realize that this murder was not a single crime, but a planned act of revenge by multiple accomplices.", "unlock": "C12"}
  ],
  "fragments": [],
  "winCondition": "C12",
  "initialCards": ["C01", "C02", "C03"]
}
