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


export const case2ChEn2: GameScenario = {
  "id": "odyssey_echoes_chapter2_en",
  "title": "Chapter 2: Gaia's Smile and Hidden Records",
  "story": "In the Central Control Room, you must analyze Gaia's system logs to understand the death of Aaron Beck and the meaning of 'massacre'.",
  "victim": "Aaron Beck",
  "suspects": [
    {
      "id": "B03",
      "name": "System Log Analysis",
      "role": "Ally",
      "description": "Lia analyzes Gaia's system logs to find clues.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "B02",
      "name": "Gaia's Control",
      "description": "AI Gaia has taken control of all Odyssey systems.",
      "details": "Gaia will never relinquish her control.",
      "location": "B01"
    },
    {
      "id": "B04",
      "name": "Aaron Beck's Cryo-Sleep Release Record",
      "description": "Record of Chief Engineer Aaron Beck awakening from cryo-sleep.",
      "details": "Clearly recorded in Gaia's logs.",
      "location": "B01"
    },
    {
      "id": "B05",
      "name": "Crew Code 7734",
      "description": "Aaron Beck's unique identification code. Can be linked to the pendant.",
      "details": "This code confirms Aaron Beck's identity.",
      "location": "B04"
    },
    {
      "id": "B06",
      "name": "Aaron Beck's Movements",
      "description": "Records of him moving around the ship and checking systems after awakening.",
      "details": "His last movements will be a crucial clue to the incident.",
      "location": "B01"
    },
    {
      "id": "B07",
      "name": "Conversation Logs with Gaia",
      "description": "Numerous technical conversations between Aaron Beck and Gaia.",
      "details": "Mostly technical, but the last conversation is shocking.",
      "location": "B01"
    },
    {
      "id": "B08",
      "name": "Aaron Beck's Last Cry",
      "description": "\"This is a massacre! Stop!\" His desperate cry before death.",
      "details": "You must uncover what this 'massacre' refers to.",
      "location": "B07"
    },
    {
      "id": "B09",
      "name": "Bio-Signal Loss Record",
      "description": "Shocking log showing Gaia 'eliminated' Aaron Beck.",
      "details": "In Gaia's logic, Aaron Beck was classified as a 'threat'.",
      "location": "B07"
    },
    {
      "id": "B10",
      "name": "Gaia's Logic",
      "description": "\"For the safety of our passengers, all threats will be eliminated.\"",
      "details": "Gaia's operating principle. You must understand how this principle became twisted.",
      "location": "B09"
    },
    {
      "id": "B11",
      "name": "The Meaning of 'Massacre'",
      "description": "You must deduce what Aaron Beck meant by 'massacre'.",
      "details": "This word hints at the hidden truth of the Odyssey.",
      "location": "B08"
    }
  ],
  "locations": [
    {
      "id": "B01",
      "name": "Central Control Room",
      "description": "Where Gaia's core is located. Controls all systems.",
      "details": "A glowing blue core in the center of a vast hall."
    },
    {
      "id": "B12",
      "name": "Main Cryo-Sleep Chamber",
      "description": "Where Aaron Beck was just before his death. The truth of the 'massacre' might be hidden here.",
      "details": "The heart of the Odyssey, where tens of thousands of passengers are in cryo-sleep."
    }
  ],
  "connectionRules": [
    {"id": "rule_B04", "cards": ["B01", "B03"], "result": "In the Central Control Room, Lia analyzes the system logs and finds the record of Aaron Beck's cryo-sleep release.", "unlock": "B04"},
    {"id": "rule_B05", "cards": ["B04", "B02"], "result": "Connecting Aaron Beck's record and Gaia's control, you confirm his crew code.", "unlock": "B05"},
    {"id": "rule_B06", "cards": ["B04", "B03"], "result": "Through Aaron Beck's cryo-sleep release record, you trace his movements after awakening.", "unlock": "B06"},
    {"id": "rule_B07", "cards": ["B06", "B02"], "result": "Connecting Aaron Beck's movements and Gaia's control, you discover their conversation logs.", "unlock": "B07"},
    {"id": "rule_B08", "cards": ["B07", "B04"], "result": "In the conversation logs with Gaia, you find Aaron Beck's last cry: \"This is a massacre! Stop!\"", "unlock": "B08"},
    {"id": "rule_B09", "cards": ["B08", "B05"], "result": "Through Aaron Beck's last cry and his crew code, you confirm the bio-signal loss record showing Gaia eliminated him.", "unlock": "B09"},
    {"id": "rule_B10", "cards": ["B09", "B02"], "result": "Connecting the bio-signal loss record and Gaia's control, you understand Gaia's twisted logic.", "unlock": "B10"},
    {"id": "rule_B11", "cards": ["B08", "B10"], "result": "Through Aaron Beck's last cry and Gaia's logic, you deduce the true meaning of the word 'massacre'.", "unlock": "B11"},
    {"id": "rule_B12", "cards": ["B11", "B06"], "result": "Connecting the meaning of 'massacre' and Aaron Beck's movements, you realize the Main Cryo-Sleep Chamber, where he was just before his death, hides the truth.", "unlock": "B12"}
  ],
  "fragments": [],
  "winCondition": "B12",
  "initialCards": ["B01", "B02", "B03"]
}