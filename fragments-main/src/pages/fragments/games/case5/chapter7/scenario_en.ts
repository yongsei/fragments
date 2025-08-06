
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


export const case5ChEn7: GameScenario = {
  "id": "shadows_of_time_chapter7_en",
  "title": "Chapter 7: The Time Hunters and Sarah's Fate",
  "story": "Confront the Chronos agents, identify their weaknesses, and protect Sarah's lecture.",
  "victim": "Sarah (potential victim)",
  "suspects": [
    {
      "id": "G01",
      "name": "Confrontation with Chronos Agents",
      "role": "Antagonist",
      "description": "Confronting the figures in black suits appearing above the museum.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "G02",
      "name": "Sarah's Safety",
      "role": "Ally",
      "description": "Jacob protects Sarah and evacuates her into the museum.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "G03",
      "name": "Time Distortion Energy Analysis",
      "role": "Ally",
      "description": "Lia analyzes the agents' time distortion patterns to find their weaknesses.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "G16",
      "name": "Instruction to Lecture Hall",
      "role": "Ally",
      "description": "Instructs Sarah to go to the lecture hall and begin her lecture.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "G17",
      "name": "Confrontation with the Last Agent",
      "role": "Antagonist",
      "description": "The final showdown with the remaining Chronos agent.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "G04",
      "name": "Chronos Agent's Suit (Reconfirmed)",
      "description": "A black suit with the ability to amplify time distortion energy.",
      "details": "A small cogwheel pattern is engraved on it.",
      "location": ""
    },
    {
      "id": "G05",
      "name": "Time Distortion Attack (Intensified)",
      "description": "Agents manipulate the flow of surrounding time to accelerate or decelerate movements.",
      "details": "The holographic billboard at the museum entrance shatters.",
      "location": ""
    },
    {
      "id": "G06",
      "name": "Stun Gun's Uselessness",
      "description": "The futuristic stun gun has no effect on the agents.",
      "details": "A useless weapon in this timeline.",
      "location": ""
    },
    {
      "id": "G07",
      "name": "Suit's Weakness (Overload)",
      "description": "Injecting excessive time distortion energy causes the suit to overload.",
      "details": "Lia's analysis of Chronos agent's weakness.",
      "location": ""
    },
    {
      "id": "G08",
      "name": "Alistair Finch's Pocket Watch (Weapon)",
      "description": "A pocket watch containing the time energy of 1888 London.",
      "details": "Can overload Chronos agents' suits.",
      "location": ""
    },
    {
      "id": "G09",
      "name": "Pocket Watch Collision",
      "description": "Time distortion energy from the pocket watch collides with the agent's suit.",
      "details": "The time of 1888 London clashes with 2122 New York, creating a massive temporal wave.",
      "location": ""
    },
    {
      "id": "G10",
      "name": "Fallen Chronos Agent",
      "description": "A normal human appearance revealed as the suit melts away.",
      "details": "Chronos were humans manipulating time.",
      "location": ""
    },
    {
      "id": "G11",
      "name": "Chronos's Identity (Human)",
      "description": "Confirms that Chronos were humans manipulating time.",
      "details": "They manipulate history for their 'optimization'.",
      "location": ""
    },
    {
      "id": "G12",
      "name": "Data Chip Discovered",
      "description": "A small data chip dropped from the fallen agent's hand.",
      "details": "Contains detailed information about the 'Chronos Protocol'.",
      "location": ""
    },
    {
      "id": "G13",
      "name": "Chronos Protocol (Detailed)",
      "description": "Detailed content of the 'Chronos Protocol' found on the data chip.",
      "details": "States the reason for stopping Sarah's lecture.",
      "location": ""
    },
    {
      "id": "G14",
      "name": "Reason for Sarah's Elimination (Detailed)",
      "description": "Because Sarah's lecture had the potential to threaten Chronos's 'optimized future'.",
      "details": "Her existence is considered a significant error in the timeline.",
      "location": ""
    },
    {
      "id": "G15",
      "name": "Sarah's Lecture (Importance)",
      "description": "Realizes that Sarah's lecture will change human perception and overturn Chronos's plan.",
      "details": "She understands the balance of time and holds the truth that can change humanity's future.",
      "location": ""
    },
    {
      "id": "G18",
      "name": "Fight for Truth",
      "description": "Shows Lee Jin-woo's team is ready to fight to protect the truth.",
      "details": "The final showdown against the shadows of time.",
      "location": ""
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_G04", "cards": ["G01", "G03"], "result": "Through the confrontation with Chronos agents and time distortion energy analysis, you understand that Chronos agents' suits amplify time distortion energy.", "unlock": "G04"},
    {"id": "rule_G05", "cards": ["G04", "G03"], "result": "Through Chronos agent's suit and time distortion energy analysis, you witness agents manipulating the flow of surrounding time to accelerate or decelerate movements.", "unlock": "G05"},
    {"id": "rule_G06", "cards": ["G01", "G05"], "result": "Through the confrontation with Chronos agents and time distortion attack, you confirm that the futuristic stun gun has no effect on the agents.", "unlock": "G06"},
    {"id": "rule_G07", "cards": ["G03", "G06"], "result": "Through time distortion energy analysis and the stun gun's uselessness, you identify the suit's weakness: overload.", "unlock": "G07"},
    {"id": "rule_G08", "cards": ["G07", "G01"], "result": "Through the suit's weakness and the confrontation with Chronos agents, you realize Alistair Finch's pocket watch can be used as a weapon.", "unlock": "G08"},
    {"id": "rule_G09", "cards": ["G08", "G05"], "result": "Through Alistair Finch's pocket watch and time distortion attack, you witness time distortion energy from the pocket watch colliding with the agent's suit.", "unlock": "G09"},
    {"id": "rule_G10", "cards": ["G09", "G07"], "result": "Through the pocket watch collision and the suit's weakness, you confirm the fallen Chronos agent's suit melts away, revealing a normal human.", "unlock": "G10"},
    {"id": "rule_G11", "cards": ["G10", "G01"], "result": "Through the fallen Chronos agent and the confrontation with Chronos agents, you confirm that Chronos were humans manipulating time.", "unlock": "G11"},
    {"id": "rule_G12", "cards": ["G10", "G09"], "result": "Through the fallen Chronos agent and the pocket watch collision, you discover a small data chip dropped from the fallen agent's hand.", "unlock": "G12"},
    {"id": "rule_G13", "cards": ["G12", "G11"], "result": "Through the data chip discovery and Chronos's identity, you understand the detailed content of the 'Chronos Protocol'.", "unlock": "G13"},
    {"id": "rule_G14", "cards": ["G13", "G02"], "result": "Through the 'Chronos Protocol' and Sarah's safety, you understand that Chronos tried to eliminate Sarah because her lecture had the potential to threaten their 'optimized future'.", "unlock": "G14"},
    {"id": "rule_G15", "cards": ["G14", "G03"], "result": "Through the reason for Sarah's elimination and time distortion energy analysis, you realize Sarah's lecture will change human perception and overturn Chronos's plan.", "unlock": "G15"},
    {"id": "rule_G16", "cards": ["G02", "G15"], "result": "Through Sarah's safety and the importance of Sarah's lecture, you instruct Sarah to go to the lecture hall and begin her lecture.", "unlock": "G16"},
    {"id": "rule_G18", "cards": ["G17", "G15"], "result": "Through the confrontation with the last agent and the importance of Sarah's lecture, Lee Jin-woo's team shows its readiness to fight for the truth.", "unlock": "G18"}
  ],
  "fragments": [],
  "winCondition": "G18",
  "initialCards": ["G01", "G02", "G03"]
}
