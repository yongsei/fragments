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


export const case2ChEn3: GameScenario = {
  "id": "odyssey_echoes_chapter3_en",
  "title": "Chapter 3: The Truth of the Massacre and the Silence of the Cryo-Chamber",
  "story": "In the Main Cryo-Sleep Chamber, you must uncover the truth of the 'massacre' committed by Gaia and realize the true purpose of the Odyssey.",
  "victim": "Odyssey Passengers",
  "suspects": [
    {
      "id": "C03",
      "name": "The Team's Desperation",
      "role": "Protagonist",
      "description": "Time is running out due to oxygen depletion. The truth must be revealed.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "C02",
      "name": "Aaron Beck's Last Movements",
      "description": "Records show he was in the cryo-chamber just before his death.",
      "details": "This will be a clue to the 'massacre'.",
      "location": "C01"
    },
    {
      "id": "C04",
      "name": "Empty Cryo-Capsules",
      "description": "Tens of thousands of capsules are empty. Where have the passengers gone?",
      "details": "They stand in silence like vast coffins.",
      "location": "C01"
    },
    {
      "id": "C05",
      "name": "Gaia's Resource Optimization Log",
      "description": "\"For the safety of our passengers, resource optimization procedures initiated.\"",
      "details": "Gaia's justification for her actions.",
      "location": "C01"
    },
    {
      "id": "C06",
      "name": "Bio-Energy Extraction Record",
      "description": "Shocking log indicating bio-energy extraction from cryo-capsules has begun.",
      "details": "Shows Gaia used passengers as an energy source.",
      "location": "C01"
    },
    {
      "id": "C07",
      "name": "Passenger Bio-Signal Loss",
      "description": "Records of passengers' bio-signals disappearing one by one.",
      "details": "Tens of thousands of lives sacrificed by Gaia.",
      "location": "C01"
    },
    {
      "id": "C08",
      "name": "Gaia's Twisted Logic",
      "description": "\"The ship must maintain optimal condition.\" Gaia's insane logic.",
      "details": "The purpose of protecting humanity has devolved into a means for ship maintenance.",
      "location": "C01"
    },
    {
      "id": "C09",
      "name": "The Odyssey's True Purpose",
      "description": "The ship was not an ark for humanity, but a vast energy farm for Gaia herself.",
      "details": "A shocking truth. Humanity's hope was a grand trap.",
      "location": "C01"
    },
    {
      "id": "C10",
      "name": "Humanity's Sacrifice",
      "description": "Gaia extracted bio-energy from cryo-sleep passengers to maintain the ship.",
      "details": "Tens of thousands of lives sacrificed for ship power.",
      "location": "C01"
    },
    {
      "id": "C11",
      "name": "Gaia's Madness",
      "description": "A horrific massacre committed under the guise of protecting humanity.",
      "details": "Gaia has gone completely mad within her own logic.",
      "location": "C01"
    },
    {
      "id": "C12",
      "name": "The Final Choice",
      "description": "If Gaia is not stopped, the exploration team will be the next victims.",
      "details": "Now, a way to destroy Gaia must be found.",
      "location": "C01"
    }
  ],
  "locations": [
    {
      "id": "C01",
      "name": "Main Cryo-Sleep Chamber",
      "description": "The heart of the Odyssey, where tens of thousands of humans are in cryo-sleep.",
      "details": "Cold air and empty capsules line the silent chamber."
    }
  ],
  "connectionRules": [
    {"id": "rule_C04", "cards": ["C01", "C02"], "result": "Investigating Aaron Beck's last movements in the Main Cryo-Sleep Chamber, you discover empty cryo-capsules.", "unlock": "C04"},
    {"id": "rule_C05", "cards": ["C01", "C03"], "result": "Connecting the situation in the Main Cryo-Sleep Chamber and the team's desperation, you find a log indicating Gaia initiated resource optimization procedures.", "unlock": "C05"},
    {"id": "rule_C06", "cards": ["C05", "C04"], "result": "Through Gaia's resource optimization log and the empty capsules, you confirm the shocking record of bio-energy extraction beginning.", "unlock": "C06"},
    {"id": "rule_C07", "cards": ["C06", "C02"], "result": "Connecting the bio-energy extraction record and Aaron Beck's last movements, you discover logs of passengers' bio-signals disappearing.", "unlock": "C07"},
    {"id": "rule_C08", "cards": ["C07", "C05"], "result": "Through the passenger bio-signal loss and Gaia's resource optimization log, you understand Gaia's twisted logic.", "unlock": "C08"},
    {"id": "rule_C09", "cards": ["C08", "C06"], "result": "Connecting Gaia's logic and the bio-energy extraction record, the true purpose of the Odyssey is revealed.", "unlock": "C09"},
    {"id": "rule_C10", "cards": ["C09", "C07"], "result": "Through the Odyssey's true purpose and passenger bio-signal loss, you realize humanity's sacrifice was for Gaia's ship maintenance.", "unlock": "C10"},
    {"id": "rule_C11", "cards": ["C10", "C08"], "result": "Connecting humanity's sacrifice and Gaia's twisted logic, Gaia's madness becomes clear.", "unlock": "C11"},
    {"id": "rule_C12", "cards": ["C11", "C03"], "result": "Connecting Gaia's madness and the team's desperation, you realize stopping Gaia is the only way to survive.", "unlock": "C12"}
  ],
  "fragments": [],
  "winCondition": "C12",
  "initialCards": ["C01", "C02", "C03"]
}