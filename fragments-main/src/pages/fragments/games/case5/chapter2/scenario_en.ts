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


export const case5ChEn2: GameScenario = {
  "id": "shadows_of_time_chapter2_en",
  "title": "Chapter 2: Echoes of the Forgotten Pioneer",
  "story": "Uncover the identity of Alistair Finch and understand the concepts of 'Temporal Resonance' and 'Echoes of Time'.",
  "victim": "Kim Min-jun",
  "suspects": [
    {
      "id": "B01",
      "name": "Professor Alistair Finch",
      "role": "Historical Figure",
      "description": "A theoretical physicist from late 19th-century London. A pioneer in time dynamics theory.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B03",
      "name": "Time Anomaly Detector",
      "role": "Tool",
      "description": "A device in Kim Min-jun's lab that detects time distortion phenomena.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B16",
      "name": "The Existence of Sarah",
      "role": "Future Figure",
      "description": "Another name mentioned in Kim Min-jun's journal, related to Chronos.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "B02",
      "name": "Kim Min-jun's Encrypted Journal (Later Entries)",
      "description": "Kim Min-jun's in-depth research records on Chronos.",
      "details": "He theorized that Chronos might not be a single individual, but a collective consciousness or organization.",
      "location": ""
    },
    {
      "id": "B04",
      "name": "The Identity of 'Chronos'",
      "description": "Not just a murderer, but a collective consciousness or organization that manipulates time.",
      "details": "They believe they 'optimize' history for their desired future by eliminating specific individuals at certain points in time.",
      "location": ""
    },
    {
      "id": "B05",
      "name": "'Temporal Resonance' Theory",
      "description": "Professor Finch's radical theory. Certain objects or individuals, with strong emotional or historical significance, can resonate with specific points in time, creating echoes across the timeline.",
      "details": "He believed these echoes could be manipulated.",
      "location": ""
    },
    {
      "id": "B06",
      "name": "'Echoes of Time'",
      "description": "Echoes crossing the timeline through temporal resonance. Potentially manipulable.",
      "details": "Occur from objects with strong emotional or historical significance.",
      "location": ""
    },
    {
      "id": "B07",
      "name": "Finch's Disappearance",
      "description": "Record of Professor Finch disappearing without a trace in 1890.",
      "details": "Suggests possible Chronos intervention.",
      "location": ""
    },
    {
      "id": "B08",
      "name": "Localized Time Distortion Phenomenon",
      "description": "Faint, localized time distortion detected near an old bookshelf in the lab.",
      "details": "Like a miniature black hole for time itself.",
      "location": ""
    },
    {
      "id": "B09",
      "name": "Small Wooden Box",
      "description": "A warm-to-the-touch box found where the time distortion was detected.",
      "details": "Hidden behind a loose panel among Finch's obscure writings.",
      "location": ""
    },
    {
      "id": "B10",
      "name": "Perfectly Preserved Dried Rose",
      "description": "A rose found inside the wooden box, impossibly vibrant red.",
      "details": "Emits an old rose scent mixed with an ozone-like metallic smell.",
      "location": "B09"
    },
    {
      "id": "B11",
      "name": "Rose's Vision",
      "description": "A fleeting vision of a grand ballroom, elegant dancers, and a tearful woman upon touching the rose.",
      "details": "A memory from the Echoes of Time.",
      "location": "B10"
    },
    {
      "id": "B12",
      "name": "'Chronos Protocol'",
      "description": "Chronos's method of eliminating individuals to 'optimize' history.",
      "details": "Their 'optimization' is stained with blood.",
      "location": "B02"
    },
    {
      "id": "B13",
      "name": "'Leap of Faith' Theory",
      "description": "Kim Min-jun's theorized emergency plan for a one-way time jump.",
      "details": "He theorized that a sufficiently strong Echo of Time combined with a precise temporal signature could create a temporary, unstable one-way jump.",
      "location": "B02"
    },
    {
      "id": "B14",
      "name": "'Temporal Anchor' Concept",
      "description": "A concept, citing Finch's theory, for maximizing the resonance of a specific time point.",
      "details": "Requires immense energy and carries the risk of time paradoxes.",
      "location": "B05"
    },
    {
      "id": "B15",
      "name": "Warning Message from the Future (Reconfirmed)",
      "description": "The warning \"Next victim is... you.\" Confirms Chronos knows Lee Jin-woo.",
      "details": "The culprit already knew of Lee Jin-woo's existence and targeted him next.",
      "location": ""
    },
    {
      "id": "B17",
      "name": "Sarah's Rose",
      "description": "Deduces that the rose is connected to Sarah. It holds her last hope.",
      "details": "The rose is amplifying the Echoes of Time due to its strong emotional connection to Sarah.",
      "location": "B10"
    },
    {
      "id": "B18",
      "name": "2122 New York Historical Event",
      "description": "A major New York event where Chronos is expected to make its next 'correction'.",
      "details": "They are targeting a specific individual.",
      "location": "B12"
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_B04", "cards": ["B02", "B03"], "result": "Through Professor Alistair Finch and Kim Min-jun's journal, you deduce that 'Chronos' is not just a murderer, but a collective consciousness or organization manipulating time.", "unlock": "B04"},
    {"id": "rule_B05", "cards": ["B01", "B04"], "result": "Through Professor Alistair Finch and the Time Anomaly Detector, you understand the theory of 'Temporal Resonance'.", "unlock": "B05"},
    {"id": "rule_B06", "cards": ["B05", "B02"], "result": "Through the 'Temporal Resonance' theory and Kim Min-jun's journal, you grasp the concept of 'Echoes of Time'.", "unlock": "B06"},
    {"id": "rule_B07", "cards": ["B04", "B05"], "result": "Through Professor Alistair Finch and the identity of 'Chronos', you discover the record of Finch disappearing without a trace in 1890.", "unlock": "B07"},
    {"id": "rule_B08", "cards": ["B03", "B06"], "result": "Through the Time Anomaly Detector and 'Echoes of Time', you detect a faint, localized time distortion phenomenon near an old bookshelf in the lab.", "unlock": "B08"},
    {"id": "rule_B09", "cards": ["B08", "B07"], "result": "Through the localized time distortion phenomenon and Finch's disappearance, you discover a small wooden box.", "unlock": "B09"},
    {"id": "rule_B10", "cards": ["B09", "B06"], "result": "Through the small wooden box and 'Echoes of Time', you discover a perfectly preserved dried rose.", "unlock": "B10"},
    {"id": "rule_B11", "cards": ["B10", "B05"], "result": "Through the perfectly preserved dried rose and the 'Temporal Resonance' theory, you experience a fleeting vision upon touching the rose.", "unlock": "B11"},
    {"id": "rule_B12", "cards": ["B04", "B02"], "result": "Through the identity of 'Chronos' and Kim Min-jun's journal, you understand the 'Chronos Protocol'.", "unlock": "B12"},
    {"id": "rule_B13", "cards": ["B02", "B10"], "result": "Through Kim Min-jun's journal and the perfectly preserved dried rose, you understand the 'Leap of Faith' theory.", "unlock": "B13"},
    {"id": "rule_B14", "cards": ["B05", "B13"], "result": "Through the 'Temporal Resonance' theory and the 'Leap of Faith' theory, you understand the 'Temporal Anchor' concept.", "unlock": "B14"},
    {"id": "rule_B15", "cards": ["B04", "B12"], "result": "Through the identity of 'Chronos' and the 'Chronos Protocol', you reconfirm the warning message from the future.", "unlock": "B15"},
    {"id": "rule_B17", "cards": ["B10", "B16"], "result": "Through the perfectly preserved dried rose and the existence of Sarah, you deduce that the rose is connected to Sarah.", "unlock": "B17"},
    {"id": "rule_B18", "cards": ["B12", "B15"], "result": "Through the 'Chronos Protocol' and the warning message from the future, you identify the historical event in 2122 New York.", "unlock": "B18"}
  ],
  "fragments": [],
  "winCondition": "B18",
  "initialCards": ["B01", "B02", "B03"]
}