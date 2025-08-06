
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


export const caseChEn1: GameScenario = {
  "id": "dark_fantasy_mystery_chapter1_en",
  "title": "Chapter 1: The Crime Scene",
  "story": "Uncover the secret behind the Archbishop's bizarre death. You must investigate the scene and find clues to the missing relic.",
  "victim": "The Archbishop",
  "suspects": [
    {
      "id": "A01",
      "name": "The Inquisitor's Duty",
      "role": "Protagonist",
      "description": "You, tasked with the secret mission of uncovering the truth behind the Archbishop's murder.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A06",
      "name": "The Guard's Testimony",
      "role": "Witness",
      "description": "A guard who testifies to hearing a strange song from the spire the night before the incident.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "A03",
      "name": "The Uncanny Flock of Crows",
      "description": "An ominous flock, unlike ordinary crows.",
      "details": "They circled the body, seemingly guarding it.",
      "location": "A02"
    },
    {
      "id": "A04",
      "name": "The Archbishop's Body",
      "description": "Vacant as if the soul has departed, with not a single drop of blood.",
      "details": "The cause of death is unknown. It seems more internal than external.",
      "location": "A02"
    },
    {
      "id": "A05",
      "name": "The Bloodless Wound",
      "description": "A wound too precise and clean to have been pecked by crows.",
      "details": "It resembles a surgical incision, too bizarre for a human act.",
      "location": "A04"
    },
    {
      "id": "A07",
      "name": "Traces of Unidentified Magic",
      "description": "A different kind of power lingers around the spire, unlike the church's holy magic.",
      "details": "A dark, twisted aura. It could be the remnants of forbidden black magic.",
      "location": "A02"
    },
    {
      "id": "A09",
      "name": "The Empty Reliquary",
      "description": "A reliquary in the Archbishop's private chamber. Something is missing.",
      "details": "The lock is intact. It was either opened from the inside or breached by magic.",
      "location": "A08"
    },
    {
      "id": "A10",
      "name": "The Chalice of the First Martyr's Tear",
      "description": "The identity of the missing relic. An artifact that reveals the last memories of the dead.",
      "details": "One of the most sacred relics of the church. It is highly likely this is the culprit's objective.",
      "location": "A09"
    },
    {
      "id": "A11",
      "name": "The Chalice's Power",
      "description": "The culprit intends to use the chalice to see what the Archbishop saw.",
      "details": "The culprit's next goal will be to find out what the Archbishop witnessed before he died.",
      "location": "A10"
    },
    {
      "id": "A12",
      "name": "The Archbishop's Secret Research",
      "description": "A record found in his private chamber. He was investigating the 'Miracle of the Slums'.",
      "details": "The Archbishop's death may be related to this secret research.",
      "location": "A08"
    }
  ],
  "locations": [
    {
      "id": "A02",
      "name": "The Cathedral Spire",
      "description": "The grim crime scene where the Archbishop's body was found.",
      "details": "The highest point in the city. A place nearly impossible for outsiders to infiltrate."
    },
    {
      "id": "A08",
      "name": "The Archbishop's Private Chamber",
      "description": "The Archbishop's private space, which must be searched for clues.",
      "details": "Objects that offer a glimpse into the Archbishop's faith and personal struggles are present."
    }
  ],
  "connectionRules": [
    {"id": "rule_A04", "cards": ["A01", "A02"], "result": "With the Inquisitor's intuition, you investigate the scene and discover a strange point about the Archbishop's body.", "unlock": "A04"},
    {"id": "rule_A05", "cards": ["A04", "A03"], "result": "Connecting the body and the crows, you conclude that the wound is unnatural.", "unlock": "A05"},
    {"id": "rule_A06", "cards": ["A02", "A03"], "result": "Asking around about the spire and the crows, you obtain a suspicious testimony from a guard.", "unlock": "A06"},
    {"id": "rule_A07", "cards": ["A05", "A06"], "result": "Combining the wound and the testimony, you realize a third, magical force was involved.", "unlock": "A07"},
    {"id": "rule_A08", "cards": ["A04", "A01"], "result": "Seeing the state of the body, you judge that the clues lie with the victim's surroundings rather than the scene, and head to his private chamber.", "unlock": "A08"},
    {"id": "rule_A09", "cards": ["A08", "A05"], "result": "While searching the private chamber, you look for any stolen items related to the precise wound and find an empty reliquary.", "unlock": "A09"},
    {"id": "rule_A10", "cards": ["A09", "A07"], "result": "Through the empty reliquary and the traces of magic, you identify the missing item as a powerful magical artifact.", "unlock": "A10"},
    {"id": "rule_A11", "cards": ["A10", "A01"], "result": "Realizing the power of the missing chalice, you deduce the culprit's next objective.", "unlock": "A11"},
    {"id": "rule_A12", "cards": ["A08", "A10"], "result": "While looking for a connection between the private chamber and the missing chalice, you discover that the Archbishop was secretly researching something.", "unlock": "A12"}
  ],
  "fragments": [],
  "winCondition": "A12",
  "initialCards": ["A01", "A02", "A03"]
}
