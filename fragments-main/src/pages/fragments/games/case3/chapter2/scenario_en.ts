
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


export const case3ChEn2: GameScenario = {
  "id": "orient_express_chapter2_en",
  "title": "Chapter 2: Cracks in the Alibi and Hidden Motives",
  "story": "Hastings secretly investigates the suspects' cabins to secure clues that hint at cracks in their alibis and hidden motives.",
  "victim": "Alexander Volkov",
  "suspects": [
    {
      "id": "B01",
      "name": "Hastings' Intuition",
      "role": "Investigator",
      "description": "He suspects the suspects' perfect alibis.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "B03",
      "name": "The Paradox of the Locked Room",
      "description": "A murder committed in a situation where external intrusion is impossible.",
      "details": "The culprit is inside the train.",
      "location": ""
    },
    {
      "id": "B04",
      "name": "Elena's Exotic Perfume",
      "description": "The scent of an exotic perfume, not hers, from the Countess's cabin door.",
      "details": "Increases suspicion about her alibi.",
      "location": "B02"
    },
    {
      "id": "B05",
      "name": "Schmidt's Newspaper Clipping",
      "description": "A newspaper clipping about Volkov's financial scandal found in Dr. Schmidt's cabin.",
      "details": "Hints at Volkov's past and Schmidt's hidden motive.",
      "location": "B02"
    },
    {
      "id": "B06",
      "name": "Goldberg's Torn Portrait",
      "description": "A torn portrait of Volkov discarded on the floor of Samuel Goldberg's cabin.",
      "details": "Shows emotions beyond mere anger.",
      "location": "B02"
    },
    {
      "id": "B07",
      "name": "Maria's Medicine Scent",
      "description": "The scent of medicine from Maria Ivanova's cabin, also present in Volkov's cabin.",
      "details": "Raises suspicion about the connection between Volkov's death and the medicine.",
      "location": "B02"
    },
    {
      "id": "B08",
      "name": "Colonel Smith's Old Map",
      "description": "An old map hanging on Colonel Smith's cabin wall, marking areas of Volkov's colonial business.",
      "details": "Suggests a past grudge might have led to the current murder.",
      "location": "B02"
    },
    {
      "id": "B09",
      "name": "Small Metal Piece",
      "description": "A small, intricately crafted metal piece, like a watch part, found in Goldberg's cabin.",
      "details": "Could be part of the device used in the locked-room trick.",
      "location": "B02"
    },
    {
      "id": "B10",
      "name": "Thin Thread Fragment",
      "description": "A fragment of a thin, tough, special metal fiber thread found clutched in Volkov's hand.",
      "details": "A key clue to the locked-room trick.",
      "location": ""
    },
    {
      "id": "B11",
      "name": "Scratch Mark on Inner Door",
      "description": "A scratch mark on the inside of Volkov's cabin door, seemingly made during the retrieval of the thread.",
      "details": "Hints at the specific method of the locked-room trick.",
      "location": ""
    },
    {
      "id": "B12",
      "name": "Dagger's Cogwheel Pattern",
      "description": "A faint cogwheel pattern engraved on the hilt of the murder weapon.",
      "details": "Suggests a connection between the murder weapon and a specific suspect.",
      "location": ""
    }
  ],
  "locations": [
    {
      "id": "B02",
      "name": "Train Corridor",
      "description": "The passage leading to the suspects' cabins. Requires discreet investigation.",
      "details": "Only dim lights illuminate the corridor at night."
    }
  ],
  "connectionRules": [
    {"id": "rule_B04", "cards": ["B01", "B02"], "result": "Following his intuition, Hastings smells an exotic perfume from Countess Elena's cabin door.", "unlock": "B04"},
    {"id": "rule_B05", "cards": ["B01", "B02"], "result": "Following his intuition, Hastings finds a newspaper clipping in Dr. Schmidt's cabin.", "unlock": "B05"},
    {"id": "rule_B06", "cards": ["B01", "B02"], "result": "Following his intuition, Hastings discovers a torn portrait in Samuel Goldberg's cabin.", "unlock": "B06"},
    {"id": "rule_B07", "cards": ["B01", "B02"], "result": "Following his intuition, Hastings smells medicine from Maria Ivanova's cabin.", "unlock": "B07"},
    {"id": "rule_B08", "cards": ["B01", "B02"], "result": "Following his intuition, Hastings finds an old map in Colonel John Smith's cabin.", "unlock": "B08"},
    {"id": "rule_B09", "cards": ["B06", "B03"], "result": "Connecting Goldberg's torn portrait and the paradox of the locked room, you deduce that the small metal piece is part of the locked-room trick.", "unlock": "B09"},
    {"id": "rule_B10", "cards": ["B03", "B01"], "result": "Through the paradox of the locked room and Hastings' intuition, you discover a thin thread fragment clutched in Volkov's hand.", "unlock": "B10"},
    {"id": "rule_B11", "cards": ["B10", "B03"], "result": "Connecting the thin thread fragment and the paradox of the locked room, you realize the scratch mark on the inner door was made during the retrieval of the thread.", "unlock": "B11"},
    {"id": "rule_B12", "cards": ["B04", "B05"], "result": "Connecting Elena's perfume and Schmidt's newspaper clipping, you deduce that the dagger's cogwheel pattern is related to a specific suspect.", "unlock": "B12"}
  ],
  "fragments": [],
  "winCondition": "B12",
  "initialCards": ["B01", "B02", "B03"]
}
