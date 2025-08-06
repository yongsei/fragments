
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


export const case5ChEn3: GameScenario = {
  "id": "shadows_of_time_chapter3_en",
  "title": "Chapter 3: Echoes of the Rose and the Chronos Protocol",
  "story": "Delve deeper into Sarah's identity and Chronos's 'optimization' plan through 'Sarah's Rose'.",
  "victim": "Sarah (existence threatened)",
  "suspects": [
    {
      "id": "C07",
      "name": "Sarah's Identity",
      "role": "Future Figure",
      "description": "The tearful woman in the photo. A 'Guardian of Time' who tried to stop Chronos's plan.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C17",
      "name": "The Old Man's Testimony",
      "role": "Witness",
      "description": "An old man encountered in the desolate future. Provides crucial information about Chronos and Sarah.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "C01",
      "name": "Sarah's Rose",
      "description": "A perfectly preserved rose. A catalyst that amplifies the echoes of time.",
      "details": "It pulsates more intensely when touched by the old man.",
      "location": ""
    },
    {
      "id": "C02",
      "name": "Alistair Finch's Temporal Resonance Theory",
      "description": "The theory that certain objects resonate with specific points in time, creating echoes.",
      "details": "A key theory cited in Kim Min-jun's journal.",
      "location": ""
    },
    {
      "id": "C03",
      "name": "Kim Min-jun's Journal (Chronos Protocol)",
      "description": "Records of Chronos's method for 'optimizing' history.",
      "details": "Chronos's act of removing individuals at specific points in time to create their desired future.",
      "location": ""
    },
    {
      "id": "C04",
      "name": "Rose's Time Distortion Energy",
      "description": "Intense time distortion energy detected around the rose.",
      "details": "Energy that can be used as a temporal anchor.",
      "location": "C01"
    },
    {
      "id": "C05",
      "name": "Rose's Vision (Reconfirmed)",
      "description": "Experiencing again the vision of a grand ballroom and a tearful woman through the rose.",
      "details": "A significant memory related to Sarah's past.",
      "location": "C01"
    },
    {
      "id": "C06",
      "name": "Chronos's 'Optimization'",
      "description": "Chronos's act of removing individuals at specific points in time to create their desired future.",
      "details": "Their 'optimization' is stained with blood.",
      "location": "C03"
    },
    {
      "id": "C08",
      "name": "Sarah's Lecture",
      "description": "A crucial lecture Sarah was scheduled to give in 2122 New York.",
      "details": "A turning point that could overturn Chronos's plan.",
      "location": "C14"
    },
    {
      "id": "C09",
      "name": "Chronos's Reason for Eliminating Sarah",
      "description": "Because Sarah's lecture had the potential to threaten Chronos's 'optimized future'.",
      "details": "They tried to erase Sarah's very existence from history.",
      "location": "C03"
    },
    {
      "id": "C10",
      "name": "Time Rewind (Theory)",
      "description": "A concept mentioned in Kim Min-jun's journal: temporarily resetting the timeline at a specific point.",
      "details": "Requires immense energy and carries the risk of time paradoxes.",
      "location": "C03"
    },
    {
      "id": "C11",
      "name": "Temporal Anchor",
      "description": "Citing Finch's theory, a key element for time rewind.",
      "details": "Can be utilized by injecting the rose's energy into the unfinished device.",
      "location": "C02"
    },
    {
      "id": "C12",
      "name": "Leap of Faith (Reconfirmed)",
      "description": "The method of attempting a one-way time jump by injecting the rose's energy into the unfinished device.",
      "details": "The probability of reaching the exact destination is less than 50%.",
      "location": "C01"
    },
    {
      "id": "C13",
      "name": "2122 New York's Desolation",
      "description": "Confirmed by the old man's testimony: the tragic change in the future due to Chronos's intervention.",
      "details": "Everything changed due to Chronos's 'Great Cleansing'.",
      "location": "C14"
    },
    {
      "id": "C15",
      "name": "Alistair Finch's Name",
      "description": "Finch's name engraved on the monument. Confirms he was also a victim of Chronos.",
      "details": "His research was a threat to Chronos.",
      "location": "C14"
    },
    {
      "id": "C16",
      "name": "Kim Min-jun's Name",
      "description": "Kim Min-jun's name engraved on the monument. Confirms he was also a victim of Chronos.",
      "details": "He fought to save Sarah and stop Chronos's plan.",
      "location": "C14"
    },
    {
      "id": "C18",
      "name": "Guardians of Time (Concept)",
      "description": "Individuals like Sarah, Kim Min-jun, and Finch who strive to maintain the balance of time.",
      "details": "Those who stand against Chronos.",
      "location": ""
    }
  ],
  "locations": [
    {
      "id": "C14",
      "name": "Monument to Forgotten Heroes",
      "description": "A monument engraved with the names of those whose history was erased by Chronos.",
      "details": "No one remembers them because history has been altered."
    }
  ],
  "connectionRules": [
    {"id": "rule_C04", "cards": ["C01", "C02"], "result": "Through Sarah's Rose and Alistair Finch's Temporal Resonance Theory, you detect intense time distortion energy around the rose.", "unlock": "C04"},
    {"id": "rule_C05", "cards": ["C01", "C04"], "result": "Through Sarah's Rose and its time distortion energy, you re-experience the vision of a grand ballroom and a tearful woman.", "unlock": "C05"},
    {"id": "rule_C06", "cards": ["C03", "C02"], "result": "Through Kim Min-jun's journal and Alistair Finch's Temporal Resonance Theory, you understand Chronos's 'optimization': their act of removing individuals at specific points in time to create their desired future.", "unlock": "C06"},
    {"id": "rule_C07", "cards": ["C05", "C06"], "result": "Through the rose's vision and Chronos's 'optimization', you identify the tearful woman in the photo as Sarah, a 'Guardian of Time' who tried to stop Chronos's plan.", "unlock": "C07"},
    {"id": "rule_C08", "cards": ["C07", "C03"], "result": "Through Sarah's identity and Kim Min-jun's journal, you identify the crucial lecture Sarah was scheduled to give in 2122 New York.", "unlock": "C08"},
    {"id": "rule_C09", "cards": ["C08", "C06"], "result": "Through Sarah's lecture and Chronos's 'optimization', you understand that Chronos tried to eliminate Sarah because her lecture had the potential to threaten their 'optimized future'.", "unlock": "C09"},
    {"id": "rule_C10", "cards": ["C03", "C04"], "result": "Through Kim Min-jun's journal and the rose's time distortion energy, you understand the 'Time Rewind' theory: temporarily resetting the timeline at a specific point.", "unlock": "C10"},
    {"id": "rule_C11", "cards": ["C02", "C10"], "result": "Through Alistair Finch's Temporal Resonance Theory and the 'Time Rewind' theory, you understand the 'Temporal Anchor' concept, a key element for time rewind.", "unlock": "C11"},
    {"id": "rule_C12", "cards": ["C01", "C11"], "result": "Through Sarah's Rose and the 'Temporal Anchor', you reconfirm the 'Leap of Faith' method: attempting a one-way time jump by injecting the rose's energy into the unfinished device.", "unlock": "C12"},
    {"id": "rule_C13", "cards": ["C06", "C09"], "result": "Through Chronos's 'optimization' and their reason for eliminating Sarah, you understand the tragic change in 2122 New York's future, confirmed by the old man's testimony, caused by Chronos's intervention.", "unlock": "C13"},
    {"id": "rule_C14", "cards": ["C13", "C07"], "result": "Through 2122 New York's desolation and Sarah's identity, you discover the 'Monument to Forgotten Heroes', engraved with the names of those whose history was erased by Chronos.", "unlock": "C14"},
    {"id": "rule_C15", "cards": ["C14", "C02"], "result": "Through the Monument to Forgotten Heroes and Alistair Finch's Temporal Resonance Theory, you confirm Finch's name engraved on the monument.", "unlock": "C15"},
    {"id": "rule_C16", "cards": ["C14", "C03"], "result": "Through the Monument to Forgotten Heroes and Kim Min-jun's journal, you confirm Kim Min-jun's name engraved on the monument.", "unlock": "C16"},
    {"id": "rule_C17", "cards": ["C13", "C14"], "result": "Through 2122 New York's desolation and the Monument to Forgotten Heroes, you hear the testimony of the old man encountered in the desolate future.", "unlock": "C17"},
    {"id": "rule_C18", "cards": ["C07", "C15"], "result": "Through Sarah's identity and Alistair Finch's name, you understand the concept of 'Guardians of Time', individuals like Sarah, Kim Min-jun, and Finch who strive to maintain the balance of time.", "unlock": "C18"}
  ],
  "fragments": [],
  "winCondition": "C18",
  "initialCards": ["C01", "C02", "C03"]
}
