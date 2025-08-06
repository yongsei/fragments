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


export const case3ChEn1: GameScenario = {
  "id": "orient_express_chapter1_en",
  "title": "Chapter 1: The Paradox of the Locked Room and the First Interrogation",
  "story": "In a train isolated by a snowstorm, financial magnate Volkov is murdered in a perfect locked room. Hastings investigates the scene, interrogates suspects, and secures the first clues.",
  "victim": "Alexander Volkov",
  "suspects": [
    {
      "id": "A01",
      "name": "Sir Arthur Hastings",
      "role": "Investigator",
      "description": "A retired Scotland Yard detective. Holds the key to solving the case.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A07",
      "name": "Countess Elena de Valois",
      "role": "Suspect",
      "description": "The last descendant of a fallen French noble family. Heavily indebted to Volkov.",
      "alibi": "Claims to have been in her cabin at the time of the incident.",
      "motive": "Debt from her family estate."
    },
    {
      "id": "A08",
      "name": "Dr. Hans Schmidt",
      "role": "Suspect",
      "description": "A renowned German psychologist. Accompanied Volkov to consult on his mental health.",
      "alibi": "Claims to have been reading a research paper in his cabin at the time of the incident.",
      "motive": "Unknown."
    },
    {
      "id": "A09",
      "name": "Samuel Goldberg",
      "role": "Suspect",
      "description": "Volkov's long-time business partner and rival. Recently suffered significant losses due to Volkov.",
      "alibi": "Claims to have been sleeping in his cabin at the time of the incident.",
      "motive": "Business losses and resentment."
    },
    {
      "id": "A10",
      "name": "Maria Ivanova",
      "role": "Suspect",
      "description": "Volkov's personal secretary. The only person who knows all his secrets.",
      "alibi": "Claims to have been in her cabin next to Volkov's, and was the first to rush out upon hearing the scream.",
      "motive": "Unknown."
    },
    {
      "id": "A11",
      "name": "Colonel John Smith",
      "role": "Suspect",
      "description": "A retired British Army officer. Has a past grudge with Volkov from colonial business.",
      "alibi": "Claims to have been sleeping in his cabin at the time of the incident.",
      "motive": "Past grudge."
    }
  ],
  "evidence": [
    {
      "id": "A03",
      "name": "Alexander Volkov's Body",
      "description": "A cold body found with a dagger plunged into his chest.",
      "details": "His face showed clear signs of extreme terror.",
      "location": "A02"
    },
    {
      "id": "A04",
      "name": "The Dagger Used in the Murder",
      "description": "The dagger found in Volkov's chest.",
      "details": "A faint pattern is engraved on the hilt.",
      "location": "A02"
    },
    {
      "id": "A05",
      "name": "Half-Burned Letter Fragment",
      "description": "A fragment of a letter found in the ashtray, with phrases suggesting 'revenge'.",
      "details": "Only fragmented phrases like \"...revenge...never forget...\" remain.",
      "location": "A02"
    },
    {
      "id": "A06",
      "name": "Scratch Mark on the Inside of the Cabin Door",
      "description": "A small mark near the doorknob, as if someone scratched it from the inside.",
      "details": "Could be a clue to the locked-room trick.",
      "location": "A02"
    },
    {
      "id": "A12",
      "name": "Suspects' Alibis",
      "description": "The statements of the 5 suspects regarding their whereabouts at the time of the incident.",      "details": "All seem perfect, but something feels off.",
      "location": ""
    }
  ],
  "locations": [
    {
      "id": "A02",
      "name": "Volkov's Cabin",
      "description": "The locked room where the notorious financial magnate Alexander Volkov was murdered.",
      "details": "The windows were tightly shut, and the door was locked from the inside."
    }
  ],
  "connectionRules": [
    {"id": "rule_A04", "cards": ["A02", "A03"], "result": "Investigating Volkov's cabin and body, you discover the dagger used in the murder.", "unlock": "A04"},
    {"id": "rule_A05", "cards": ["A02", "A03"], "result": "Investigating Volkov's cabin and body, you find a half-burned letter fragment in the ashtray.", "unlock": "A05"},
    {"id": "rule_A06", "cards": ["A02", "A04"], "result": "Connecting Volkov's cabin and the dagger, you realize the scratch mark on the inside of the door is a clue to the locked-room trick.", "unlock": "A06"},
    {"id": "rule_A12", "cards": ["A07", "A08"], "result": "Interrogating Countess Elena and Dr. Schmidt, you secure their alibis.", "unlock": "A12"}
  ],
  "fragments": [],
  "winCondition": "A12",
  "initialCards": ["A01", "A02", "A03"]
}
