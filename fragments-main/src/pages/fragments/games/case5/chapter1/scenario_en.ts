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


export const case5ChEn1: GameScenario = {
  "id": "shadows_of_time_chapter1_en",
  "title": "Chapter 1: Traces of Time, Warnings from the Future",
  "story": "In 2042 Seoul, a past artifact is found next to the body of an ordinary office worker. Kim Min-jun, the first victim of a time-travel murder. A warning message from the future targets Detective Lee Jin-woo as the next victim.",
  "victim": "Kim Min-jun",
  "suspects": [
    {
      "id": "A01",
      "name": "Detective Lee Jin-woo",
      "role": "Protagonist",
      "description": "A veteran detective facing an unprecedented time-travel murder case.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A04",
      "name": "Detective Park Jun-young",
      "role": "Ally",
      "description": "The youngest detective on the team. Assists Detective Lee Jin-woo and delves into the case.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A17",
      "name": "Professor Alistair Finch",
      "role": "Historical Figure",
      "description": "A 19th-century figure photographed with Kim Min-jun. A time dynamics theorist.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "A02",
      "name": "Kim Min-jun's Body",
      "description": "The body of an ordinary office worker found on a park bench.",
      "details": "Cause of death: stab wound. Traces of a 20th-century blade found on the body.",
      "location": ""
    },
    {
      "id": "A03",
      "name": "Old Pocket Watch",
      "description": "A 19th-century Victorian artifact found next to the body.",
      "details": "Faintly engraved with \"1888 London\".",
      "location": "A02"
    },
    {
      "id": "A05",
      "name": "Early 20th-Century Blade Mark",
      "description": "A stab wound found on the body, consistent with a blade from a past era.",
      "details": "Impossible with modern weapons. Implies time traveler involvement.",
      "location": "A02"
    },
    {
      "id": "A06",
      "name": "\"1888 London\" Engraving",
      "description": "Faintly engraved on the pocket watch. Points to a specific time in the past.",
      "details": "Hints at the culprit's time travel destination.",
      "location": "A03"
    },
    {
      "id": "A07",
      "name": "Kim Min-jun's Paper Fragment",
      "description": "A message \"Next is 2122 New York\" found clutched in the victim's hand.",
      "details": "Predicts the next target of the serial murder.",
      "location": "A02"
    },
    {
      "id": "A09",
      "name": "Unfinished Time Travel Device",
      "description": "A device found in the lab, composed of complex circuits and unknown metal parts.",
      "details": "Shows Kim Min-jun was researching time travel.",
      "location": "A08"
    },
    {
      "id": "A10",
      "name": "Time Distortion Energy Detected",
      "description": "Subtle time distortion detected around the unfinished device.",
      "details": "Proves the device is indeed related to time travel.",
      "location": "A09"
    },
    {
      "id": "A11",
      "name": "Encrypted Tablet",
      "description": "A tablet containing Kim Min-jun's encrypted journal.",
      "details": "Contains clues about Kim Min-jun's research and his target.",
      "location": "A08"
    },
    {
      "id": "A12",
      "name": "Kim Min-jun's Journal (Early Entries)",
      "description": "Decrypted journal entries. Mentions time travel theory and 'Chronos'.",
      "details": "Shows Kim Min-jun was tracking Chronos.",
      "location": "A11"
    },
    {
      "id": "A13",
      "name": "The Existence of 'Chronos'",
      "description": "An unknown entity mentioned in the journal, manipulating time.",
      "details": "The identity of the time-traveling serial killer.",
      "location": "A12"
    },
    {
      "id": "A14",
      "name": "Unknown Data Packet",
      "description": "An encrypted data packet from the future detected on the lab computer.",
      "details": "Information transmitted from the future to the present.",
      "location": "A08"
    },
    {
      "id": "A15",
      "name": "Warning Message from the Future",
      "description": "Decrypted data packet. \"Next victim is... you.\" Directly targets Lee Jin-woo.",
      "details": "Shows the culprit knows of Lee Jin-woo's existence.",
      "location": "A14"
    },
    {
      "id": "A16",
      "name": "Warning of Time Paradox",
      "description": "A warning in the journal: changing the past can twist the future unpredictably.",
      "details": "Warns of the dangers of time travel.",
      "location": "A12"
    },
    {
      "id": "A18",
      "name": "Finch's Pocket Watch",
      "description": "The same pocket watch held by Finch in the photo, identical to the one next to Kim Min-jun's body.",
      "details": "The link between Finch, Kim Min-jun, and Chronos.",
      "location": "A17"
    }
  ],
  "locations": [
    {
      "id": "A08",
      "name": "Kim Min-jun's Lab",
      "description": "The victim's secret workspace. Clues about time travel are hidden here.",
      "details": "An unfinished device made of complex circuits and unknown metal parts is located here."
    }
  ],
  "connectionRules": [
    {"id": "rule_A04", "cards": ["A01", "A02"], "result": "Detective Lee Jin-woo, realizing the gravity of the situation from Kim Min-jun's body, instructs Detective Park Jun-young to investigate.", "unlock": "A04"},
    {"id": "rule_A05", "cards": ["A02", "A03"], "result": "Through Kim Min-jun's body and the old pocket watch, traces of an early 20th-century blade are found.", "unlock": "A05"},
    {"id": "rule_A06", "cards": ["A03", "A05"], "result": "Through the old pocket watch and the blade mark, the \"1888 London\" engraving is confirmed.", "unlock": "A06"},
    {"id": "rule_A07", "cards": ["A02", "A06"], "result": "Through Kim Min-jun's body and the \"1888 London\" engraving, a paper fragment clutched in the victim's hand is found.", "unlock": "A07"},
    {"id": "rule_A08", "cards": ["A01", "A07"], "result": "Detective Lee Jin-woo heads to Kim Min-jun's lab based on the paper fragment.", "unlock": "A08"},
    {"id": "rule_A09", "cards": ["A08", "A04"], "result": "In Kim Min-jun's lab, along with Detective Park Jun-young, an unfinished time travel device is discovered.", "unlock": "A09"},
    {"id": "rule_A10", "cards": ["A09", "A05"], "result": "Through the unfinished time travel device and the blade mark, subtle time distortion energy is detected around the device.", "unlock": "A10"},
    {"id": "rule_A11", "cards": ["A08", "A04"], "result": "In Kim Min-jun's lab, along with Detective Park Jun-young, an encrypted tablet is discovered.", "unlock": "A11"},
    {"id": "rule_A12", "cards": ["A11", "A01"], "result": "Detective Lee Jin-woo decrypts the tablet and confirms the early entries of Kim Min-jun's journal.", "unlock": "A12"},
    {"id": "rule_A13", "cards": ["A12", "A07"], "result": "Through Kim Min-jun's journal and the paper fragment, the existence of 'Chronos' is identified.", "unlock": "A13"},
    {"id": "rule_A14", "cards": ["A08", "A10"], "result": "Through Kim Min-jun's lab and the detected time distortion energy, an unknown data packet is found.", "unlock": "A14"},
    {"id": "rule_A15", "cards": ["A14", "A13"], "result": "The data packet and the existence of 'Chronos' lead to the decryption of a warning message from the future.", "unlock": "A15"},
    {"id": "rule_A16", "cards": ["A12", "A15"], "result": "Through Kim Min-jun's journal and the warning message, the danger of a time paradox is realized.", "unlock": "A16"},
    {"id": "rule_A17", "cards": ["A01", "A06"], "result": "Detective Lee Jin-woo traces the existence of Professor Alistair Finch through the \"1888 London\" engraving.", "unlock": "A17"},
    {"id": "rule_A18", "cards": ["A17", "A03"], "result": "Through Professor Alistair Finch and the old pocket watch, it is confirmed that Finch's pocket watch is identical to the one next to Kim Min-jun's body.", "unlock": "A18"}
  ],
  "fragments": [],
  "winCondition": "A18",
  "initialCards": ["A01", "A02", "A03"]
}