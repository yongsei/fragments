
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


export const case5ChEn6: GameScenario = {
  "id": "shadows_of_time_chapter6_en",
  "title": "Chapter 6: Time Rewind and Sarah's Lecture",
  "story": "Rewind time to before Sarah's lecture begins to prevent Chronos's intervention.",
  "victim": "Sarah (potential victim)",
  "suspects": [
    {
      "id": "F01",
      "name": "Time Rewind (Theory)",
      "role": "Concept",
      "description": "The concept of temporarily resetting the timeline at a specific point.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "F02",
      "name": "Sarah's Rose (Catalyst)",
      "description": "A catalyst needed to amplify the echoes of time and create a time tunnel.",
      "details": "Can be utilized by connecting the rose's energy to the unfinished device.",
      "location": ""
    },
    {
      "id": "F03",
      "name": "Unfinished Time Travel Device",
      "description": "A device that will create a time tunnel by injecting the rose's energy.",
      "details": "Kim Min-jun's only hope.",
      "location": ""
    },
    {
      "id": "F04",
      "name": "'Temporal Anchor' Sequence",
      "description": "A sequence that creates a time tunnel by connecting the rose's energy to the unfinished device.",
      "details": "Everything in the lab distorts, and a strange sensation of time flowing backward covers them.",
      "location": ""
    },
    {
      "id": "F05",
      "name": "Lecture Venue and Time",
      "description": "The Museum of Future Technology in New York and the exact time Sarah's lecture was scheduled.",
      "details": "Just before Chronos's intervention.",
      "location": "F09"
    },
    {
      "id": "F06",
      "name": "Time Tunnel Generation",
      "description": "A powerful light emanates from the device, generating a time tunnel.",
      "details": "The lab walls shimmer, and space distorts.",
      "location": ""
    },
    {
      "id": "F07",
      "name": "Time Tunnel Instability",
      "description": "A strange sensation of everything in the lab distorting and time flowing backward.",
      "details": "Past remnants flash like lightning.",
      "location": ""
    },
    {
      "id": "F11",
      "name": "Chronos's Appearance (Detected)",
      "description": "A faint time distortion phenomenon detected above the museum.",
      "details": "Chronos is trying to manipulate time to eliminate Sarah.",
      "location": "F08"
    },
    {
      "id": "F12",
      "name": "Time Distortion Analysis",
      "description": "Lia analyzes Chronos's time distortion patterns with her tablet to find their weakness.",
      "details": "Identifies Chronos's location and weakness.",
      "location": ""
    },
    {
      "id": "F13",
      "name": "Chronos's Location Identified",
      "description": "Confirms the center of the time distortion is 500 meters above the museum.",
      "details": "They are descending.",
      "location": "F08"
    },
    {
      "id": "F14",
      "name": "Chronos's Descent",
      "description": "Three figures in black suits descend from the sky.",
      "details": "A small cogwheel pattern is engraved on their suits.",
      "location": "F08"
    },
    {
      "id": "F15",
      "name": "Chronos Agent's Suit",
      "description": "A black suit with the ability to amplify time distortion energy.",
      "details": "They directly use time distortion energy to accelerate or decelerate movements.",
      "location": "F14"
    },
    {
      "id": "F17",
      "name": "Time Distortion Attack (Initial)",
      "description": "Chronos agents attack using time distortion energy.",
      "details": "The holographic billboard at the museum entrance shatters.",
      "location": "F08"
    },
    {
      "id": "F18",
      "name": "Lee Jin-woo's Resolve (Response)",
      "description": "Shows his readiness to confront the shadows of time.",
      "details": "His resolve to protect Sarah and her lecture.",
      "location": ""
    }
  ],
  "locations": [
    {
      "id": "F08",
      "name": "Arrival in New York 2122 (Pre-Lecture)",
      "description": "Successfully time-traveled to a vibrant future New York.",
      "details": "Giant holographic billboards shine brightly, and aerial vehicles move busily."
    },
    {
      "id": "F09",
      "name": "Museum of Future Technology",
      "description": "The venue where Sarah's lecture was scheduled to take place.",
      "details": "The museum entrance was bustling with people attending the lecture."
    },
    {
      "id": "F10",
      "name": "Sarah's Appearance",
      "description": "Sarah, talking to people at the lecture hall entrance, without a shadow of sadness on her face.",
      "details": "Her face is not yet clouded by sadness."
    },
    {
      "id": "F16",
      "name": "Instruction to Protect Sarah",
      "description": "Instructs Jacob to protect Sarah and evacuate her into the museum.",
      "details": "An urgent measure to protect Sarah from Chronos's attack.",
      "location": "F08"
    }
  ],
  "connectionRules": [
    {"id": "rule_F04", "cards": ["F01", "F02"], "result": "Through the Time Rewind theory and Sarah's Rose, you prepare the 'Temporal Anchor' sequence.", "unlock": "F04"},
    {"id": "rule_F05", "cards": ["F01", "F03"], "result": "Through the Time Rewind theory and the unfinished time travel device, you identify Sarah's lecture venue and time.", "unlock": "F05"},
    {"id": "rule_F06", "cards": ["F04", "F03"], "result": "Through the 'Temporal Anchor' sequence and the unfinished time travel device, a time tunnel is generated.", "unlock": "F06"},
    {"id": "rule_F07", "cards": ["F06", "F01"], "result": "Through time tunnel generation and the Time Rewind theory, you recognize the instability of the time tunnel.", "unlock": "F07"},
    {"id": "rule_F08", "cards": ["F06", "F05"], "result": "Through time tunnel generation and the lecture venue and time, you arrive in New York 2122.", "unlock": "F08"},
    {"id": "rule_F09", "cards": ["F08", "F05"], "result": "Through arrival in New York 2122 and the lecture venue and time, you confirm the Museum of Future Technology as the lecture venue.", "unlock": "F09"},
    {"id": "rule_F10", "cards": ["F08", "F09"], "result": "Through arrival in New York 2122 and the Museum of Future Technology, you discover Sarah's appearance.", "unlock": "F10"},
    {"id": "rule_F11", "cards": ["F08", "F10"], "result": "Through arrival in New York 2122 and Sarah's appearance, a faint time distortion phenomenon is detected above the museum.", "unlock": "F11"},
    {"id": "rule_F12", "cards": ["F11", "F04"], "result": "Through the detection of Chronos's appearance and the 'Temporal Anchor' sequence, Lia analyzes Chronos's time distortion patterns with her tablet.", "unlock": "F12"},
    {"id": "rule_F13", "cards": ["F12", "F11"], "result": "Through time distortion analysis and the detection of Chronos's appearance, Chronos's location is identified.", "unlock": "F13"},
    {"id": "rule_F14", "cards": ["F13", "F11"], "result": "Through Chronos's location identification and the detection of Chronos's appearance, three figures in black suits are witnessed descending from the sky.", "unlock": "F14"},
    {"id": "rule_F15", "cards": ["F14", "F12"], "result": "Through Chronos's descent and time distortion analysis, it is understood that Chronos agents' suits have the ability to amplify time distortion energy.", "unlock": "F15"},
    {"id": "rule_F16", "cards": ["F10", "F14"], "result": "Through Sarah's appearance and Chronos's descent, Jacob is instructed to protect Sarah and evacuate her into the museum.", "unlock": "F16"},
    {"id": "rule_F17", "cards": ["F15", "F13"], "result": "Through Chronos agent's suit and Chronos's location identification, the agents' time distortion attack is witnessed.", "unlock": "F17"},
    {"id": "rule_F18", "cards": ["F16", "F17"], "result": "Through the instruction to protect Sarah and the time distortion attack, Lee Jin-woo's resolve becomes firm.", "unlock": "F18"}
  ],
  "fragments": [],
  "winCondition": "F18",
  "initialCards": ["F01", "F02", "F03"]
}
