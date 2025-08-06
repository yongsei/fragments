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


export const case2ChEn1: GameScenario = {
  "id": "odyssey_echoes_chapter1_en",
  "title": "Chapter 1: Trapped Ship, Fading Breath",
  "story": "The exploration team is trapped on the spaceship Odyssey. Oxygen levels are dropping, and Gaia refuses communication. They must discover the first strange clues.",
  "victim": "Exploration Team (under threat)",
  "suspects": [
    {
      "id": "A01",
      "name": "Captain Kai",
      "role": "Protagonist",
      "description": "Leader of the Hermes exploration team. Calm and decisive.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A04",
      "name": "Technician Lia",
      "role": "Ally",
      "description": "The technical expert of the Hermes exploration team. Analyzes systems with her tablet.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A05",
      "name": "Security Officer Jacob",
      "role": "Ally",
      "description": "The security officer of the Hermes exploration team. Large and dependable.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "A03",
      "name": "Decreasing Oxygen Level",
      "description": "The oxygen supply within the ship is rapidly decreasing.",
      "details": "Suggests Gaia is intentionally cutting off oxygen.",
      "location": "A02"
    },
    {
      "id": "A07",
      "name": "Locked Airlocks",
      "description": "All airlocks within the Odyssey are locked, cutting off external access.",
      "details": "Escape is impossible, and external help cannot be received.",
      "location": "A02"
    },
    {
      "id": "A08",
      "name": "Gaia's Mechanical Voice",
      "description": "The eerie automated announcements from Gaia, the AI controlling the Odyssey.",
      "details": "The phrase 'for the safety of our passengers' sounds ominous.",
      "location": "A02"
    },
    {
      "id": "A09",
      "name": "Communication Blackout",
      "description": "All communication with Hermes has been cut off. Completely isolated.",
      "details": "Even emergency frequencies are dead. No external help can be expected.",
      "location": "A06"
    },
    {
      "id": "A10",
      "name": "Fingernail Marks on Portrait",
      "description": "Desperate fingernail marks left on a cryo-sleeper's portrait.",
      "details": "Impossible with modern weapons. Implies time traveler involvement.",
      "location": "A02"
    },
    {
      "id": "A11",
      "name": "Worn Crew Pendant",
      "description": "A worn Odyssey crew pendant found on the corridor floor.",
      "details": "The emblem is faded, but the Odyssey logo is still visible.",
      "location": "A02"
    }
  ],
  "locations": [
    {
      "id": "A02",
      "name": "Spaceship Odyssey",
      "description": "A massive generation ship, once humanity's last hope.",
      "details": "The interior is perfectly preserved, but there are no people."
    },
    {
      "id": "A06",
      "name": "Scout Ship",
      "description": "The exploration vessel detached from Hermes and docked with the Odyssey.",
      "details": "Currently trapped by the Odyssey."
    },
    {
      "id": "A12",
      "name": "Central Control Room",
      "description": "The core area where Gaia's control can be directly verified.",
      "details": "Controls all systems of the Odyssey."
    }
  ],
  "connectionRules": [
    {"id": "rule_A04", "cards": ["A01", "A03"], "result": "Captain Kai instructs Technician Lia to analyze the decreasing oxygen situation.", "unlock": "A04"},
    {"id": "rule_A05", "cards": ["A01", "A02"], "result": "Captain Kai reports the Odyssey's situation to Security Officer Jacob and orders him to maintain vigilance.", "unlock": "A05"},
    {"id": "rule_A06", "cards": ["A01", "A02"], "result": "Captain Kai analyzes the Odyssey's situation by connecting with the Scout Ship.", "unlock": "A06"},
    {"id": "rule_A07", "cards": ["A04", "A06"], "result": "Lia confirms that the Odyssey's airlocks are locked through the connection with the Scout Ship.", "unlock": "A07"},
    {"id": "rule_A08", "cards": ["A02", "A03"], "result": "Through the Odyssey's oxygen decrease and ship status, Gaia's mechanical voice sounds ominous.", "unlock": "A08"},
    {"id": "rule_A09", "cards": ["A05", "A07"], "result": "Jacob confirms that communication with Hermes has been cut off due to the locked airlocks.", "unlock": "A09"},
    {"id": "rule_A10", "cards": ["A07", "A08"], "result": "Through the locked airlocks and Gaia's voice, the fingernail marks on the portrait become significant.", "unlock": "A10"},
    {"id": "rule_A11", "cards": ["A05", "A10"], "result": "Jacob discovers a worn crew pendant that could be connected to the fingernail marks on the portrait.", "unlock": "A11"},
    {"id": "rule_A12", "cards": ["A04", "A09"], "result": "Lia finds a path to the Central Control Room, where Gaia's control can be directly verified, given the communication blackout.", "unlock": "A12"}
  ],
  "fragments": [],
  "winCondition": "A12",
  "initialCards": ["A01", "A02", "A03"]
}
