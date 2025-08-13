
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


export const case5ChEn5: GameScenario = {
  "id": "shadows_of_time_chapter5_en",
  "title": "Chapter 5: Desolate Future and Forgotten Heroes",
  "story": "Witness the desolate future of New York in 2122 and confirm Chronos's 'Great Cleansing' and Sarah's existence through the 'Monument to Forgotten Heroes'.",
  "victim": "Humanity (sacrificed by Chronos)",
  "suspects": [
    {
      "id": "E02",
      "name": "The Old Man's Existence",
      "role": "Witness",
      "description": "An old man encountered in the desolate square, seemingly trapped by ghosts of the past.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "E08",
      "name": "Sarah's Identity (Reconfirmed)",
      "role": "Future Figure",
      "description": "Reconfirms Sarah's existence as a 'Guardian of Time' through the old man's testimony.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "E17",
      "name": "Lee Jin-woo's Resolve",
      "role": "Protagonist",
      "description": "A firm resolve to save Sarah and stop Chronos's plan.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "E03",
      "name": "Guardians of Time (Concept)",
      "description": "Those who strive to maintain the balance of time.",
      "details": "Those who stand against Chronos.",
      "location": ""
    },
    {
      "id": "E04",
      "name": "The Beginning of the 'Great Cleansing'",
      "description": "Chronos's act of 'purifying' history, which began in New York in 2122.",
      "details": "Confirmed by the old man's testimony: the tragic change in the future due to Chronos's intervention.",
      "location": "E01"
    },
    {
      "id": "E06",
      "name": "Kim Min-jun's Name (Monument)",
      "description": "Kim Min-jun's name engraved on the monument. Confirms he was also a 'forgotten hero'.",
      "details": "He tried to help Sarah and stop Chronos.",
      "location": "E05"
    },
    {
      "id": "E07",
      "name": "Alistair Finch's Name (Monument)",
      "description": "Alistair Finch's name engraved on the monument. Confirms he was also a 'forgotten hero'.",
      "details": "His research was a threat to Chronos.",
      "location": "E05"
    },
    {
      "id": "E09",
      "name": "'Sarah's Rose' (Reconfirmed)",
      "description": "The rose pulsates more intensely when touched by the old man.",
      "details": "It is connected to Sarah's strong emotions and amplifies the echoes of time.",
      "location": ""
    },
    {
      "id": "E10",
      "name": "Reason for Sarah's Elimination",
      "description": "Because Sarah's lecture had the potential to threaten Chronos's 'optimized future'.",
      "details": "They tried to erase Sarah's very existence from history.",
      "location": "E04"
    },
    {
      "id": "E11",
      "name": "Deletion of Existence",
      "description": "Chronos did not kill Sarah; they erased her very existence from history.",
      "details": "They manipulated the timeline to prevent her birth.",
      "location": "E10"
    },
    {
      "id": "E12",
      "name": "Time Rewind (Hope)",
      "description": "A concept mentioned in Kim Min-jun's journal: the ability to overcome 'time paradox' and return to a specific point.",
      "details": "The only hope.",
      "location": "E06"
    },
    {
      "id": "E13",
      "name": "Sarah's Lecture (Objective)",
      "description": "A crucial lecture Sarah was scheduled to give in New York in 2122.",
      "details": "A turning point that could overturn Chronos's plan.",
      "location": "E14"
    },
    {
      "id": "E15",
      "name": "Lecture Start Time",
      "description": "The exact time Sarah's lecture was scheduled to begin.",
      "details": "Just before Chronos's intervention.",
      "location": "E14"
    },
    {
      "id": "E16",
      "name": "Chronos's Next Target (Reconfirmed)",
      "description": "Confirms that stopping Sarah's lecture is Chronos's next objective.",
      "details": "They are trying to erase Sarah's very existence.",
      "location": "E10"
    },
    {
      "id": "E18",
      "name": "Guardians of Time (Role)",
      "description": "Realizes that Detective Lee Jin-woo's team must become 'Guardians of Time' to change Chronos's past.",
      "details": "A fight to protect the truth.",
      "location": ""
    }
  ],
  "locations": [
    {
      "id": "E01",
      "name": "New York 2122 Reality",
      "description": "A desolate and lifeless future New York, contrary to expectations.",
      "details": "A vast, empty square beneath giant holographic billboards."
    },
    {
      "id": "E05",
      "name": "'Monument to Forgotten Heroes'",
      "description": "A monument engraved with the names of those whose history was erased by Chronos.",
      "details": "No one remembers them because history has been altered."
    },
    {
      "id": "E14",
      "name": "Museum of Future Technology",
      "description": "The venue where Sarah's lecture was scheduled to take place.",
      "details": "The museum entrance was bustling with people attending the lecture."
    }
  ],
  "connectionRules": [
    {"id": "rule_E04", "cards": ["E02", "E03"], "result": "Through the reality of New York 2122 and the old man's testimony, you understand that Chronos initiated the 'Great Cleansing'.", "unlock": "E04"},
    {"id": "rule_E05", "cards": ["E04", "E01"], "result": "Through the reality of New York 2122 and the beginning of the 'Great Cleansing', you discover the 'Monument to Forgotten Heroes'.", "unlock": "E05"},
    {"id": "rule_E06", "cards": ["E05", "E02"], "result": "Through the 'Monument to Forgotten Heroes' and the old man's testimony, you confirm Kim Min-jun's name on the monument.", "unlock": "E06"},
    {"id": "rule_E07", "cards": ["E05", "E06"], "result": "Through the 'Monument to Forgotten Heroes' and Kim Min-jun's name, you confirm Alistair Finch's name on the monument.", "unlock": "E07"},
    {"id": "rule_E08", "cards": ["E02", "E03"], "result": "Through the old man's testimony and the concept of Guardians of Time, you reconfirm Sarah's identity.", "unlock": "E08"},
    {"id": "rule_E09", "cards": ["E08", "E03"], "result": "Through Sarah's identity and the concept of Guardians of Time, you reconfirm that 'Sarah's Rose' pulsates more intensely when touched by the old man.", "unlock": "E09"},
    {"id": "rule_E10", "cards": ["E04", "E08"], "result": "Through the beginning of the 'Great Cleansing' and Sarah's identity, you understand that Chronos tried to eliminate Sarah because her lecture had the potential to threaten their 'optimized future'.", "unlock": "E10"},
    {"id": "rule_E11", "cards": ["E10", "E04"], "result": "Through the reason for Sarah's elimination and the beginning of the 'Great Cleansing', you understand that Chronos did not kill Sarah, but erased her very existence from history.", "unlock": "E11"},
    {"id": "rule_E12", "cards": ["E06", "E07"], "result": "Through Kim Min-jun's name and Alistair Finch's name, you realize that the 'Time Rewind' concept mentioned in Kim Min-jun's journal is the only hope.", "unlock": "E12"},
    {"id": "rule_E13", "cards": ["E08", "E12"], "result": "Through Sarah's identity and the 'Time Rewind' concept, you identify the crucial lecture Sarah was scheduled to give in New York in 2122.", "unlock": "E13"},
    {"id": "rule_E14", "cards": ["E13", "E01"], "result": "Through Sarah's lecture and the reality of New York 2122, you identify the Museum of Future Technology as the lecture venue.", "unlock": "E14"},
    {"id": "rule_E15", "cards": ["E13", "E02"], "result": "Through Sarah's lecture and the old man's testimony, you identify the lecture start time.", "unlock": "E15"},
    {"id": "rule_E16", "cards": ["E10", "E13"], "result": "Through the reason for Sarah's elimination and Sarah's lecture, you confirm that stopping Sarah's lecture is Chronos's next objective.", "unlock": "E16"},
    {"id": "rule_E17", "cards": ["E01", "E12"], "result": "Through the reality of New York 2122 and the 'Time Rewind' concept, Lee Jin-woo's resolve becomes firm.", "unlock": "E17"},
    {"id": "rule_E18", "cards": ["E03", "E17"], "result": "Through the concept of Guardians of Time and Lee Jin-woo's resolve, you realize that Lee Jin-woo's team must become 'Guardians of Time' to change Chronos's past.", "unlock": "E18"}
  ],
  "fragments": [],
  "winCondition": "E18",
  "initialCards": ["E01", "E02", "E03"]
}
