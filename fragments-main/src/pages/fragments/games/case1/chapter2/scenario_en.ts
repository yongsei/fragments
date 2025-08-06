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


export const caseChEn2: GameScenario = {
  "id": "dark_fantasy_mystery_chapter2_en",
  "title": "Chapter 2: The Last Trail",
  "story": "Following the trail of the Archbishop's secret research, you head to the lowest parts of the city. There, you will confront a strange rumor.",
  "victim": "The Archbishop",
  "suspects": [
    {
      "id": "B03",
      "name": "The Inquisitor's Deduction",
      "role": "Protagonist",
      "description": "Sensing that the \"Miracle of the Slums\" is the key to the case, you follow the Archbishop's last steps.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B06",
      "name": "The Shelter Manager",
      "role": "Witness",
      "description": "A world-weary manager who informs you that the Archbishop was asking about a certain man.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B09",
      "name": "The Need for an Informant",
      "role": "Ally",
      "description": "This kind of rumor does not exist in official records, requiring the help of a back-alley expert.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "B01",
      "name": "The Archbishop's Secret Research",
      "description": "The Archbishop was investigating a phenomenon called the \"Miracle of the Slums\".",
      "details": "The research notes are encrypted; clues must be found on-site to decipher them.",
      "location": ""
    },
    {
      "id": "B02",
      "name": "The Whereabouts of the Missing Chalice",
      "description": "The culprit intends to steal the Archbishop's memories through the chalice.",
      "details": "Before the culprit sees the memory, you must find out what the Archbishop saw first.",
      "location": ""
    },
    {
      "id": "B07",
      "name": "The Rumor of the \"Shadow that Chirps like a Bird\"",
      "description": "A bizarre rumor passed on by the manager. The target the Archbishop was tracking.",
      "details": "A phenomenon that cannot be understood by common sense, where a shadow makes bird sounds.",
      "location": "B05"
    },
    {
      "id": "B08",
      "name": "The Terror of the Rumor",
      "description": "Those who see the shadow are all said to have their souls fall ill.",
      "details": "This suggests the possibility of a supernatural attack, not just a rumor.",
      "location": "B04"
    },
    {
      "id": "B11",
      "name": "The Information Trade",
      "description": "In the Spiderweb Alley, information can be bought with money or secrets.",
      "details": "The Inquisitor must succeed in this trade to proceed to the next step.",
      "location": "B10"
    },
    {
      "id": "B12",
      "name": "The Source of the Rumor",
      "description": "The information suggests the rumor is connected to the 'Ashen Orphanage'.",
      "details": "The final destination of the chase has now been set.",
      "location": "B10"
    }
  ],
  "locations": [
    {
      "id": "B04",
      "name": "The Slums",
      "description": "The last place the Archbishop headed, rife with poverty and disease.",
      "details": "The dark side of the city, untouched by the church's hand."
    },
    {
      "id": "B05",
      "name": "The Shelter",
      "description": "A shelter in the heart of the slums. The Archbishop visited frequently.",
      "details": "The people here are wary and do not open up easily."
    },
    {
      "id": "B10",
      "name": "Spiderweb Alley",
      "description": "A dark and dangerous back alley where all the city's secret information is traded.",
      "details": "It is notorious as a place from which it is difficult to emerge unscathed."
    }
  ],
  "connectionRules": [
    {"id": "rule_B04", "cards": ["B01", "B03"], "result": "Connecting the secret research and your deduction, you head to the Archbishop's last destination: the slums.", "unlock": "B04"},
    {"id": "rule_B05", "cards": ["B04", "B01"], "result": "While searching for traces of the Archbishop's research in the slums, you discover a shelter he often visited.", "unlock": "B05"},
    {"id": "rule_B06", "cards": ["B05", "B03"], "result": "Revealing your identity as an Inquisitor at the shelter, the manager cautiously begins to speak.", "unlock": "B06"},
    {"id": "rule_B07", "cards": ["B06", "B01"], "result": "Through the manager's testimony and the Archbishop's research, you learn he was chasing a bizarre rumor of a \"shadow that chirps like a bird\".", "unlock": "B07"},
    {"id": "rule_B08", "cards": ["B07", "B04"], "result": "Investigating the rumor deeper in the slums, you realize it is not just a story but a tangible terror.", "unlock": "B08"},
    {"id": "rule_B09", "cards": ["B07", "B03"], "result": "To uncover the truth of the incomprehensible rumor, you decide you need the help of a back-alley informant.", "unlock": "B09"},
    {"id": "rule_B10", "cards": ["B09", "B04"], "result": "To find the informant, you head to the darkest place connected to the slums: Spiderweb Alley.", "unlock": "B10"},
    {"id": "rule_B11", "cards": ["B10", "B09"], "result": "In Spiderweb Alley, you learn the rules of the information trade and prepare for a meeting.", "unlock": "B11"},
    {"id": "rule_B12", "cards": ["B11", "B07"], "result": "When you finally meet the informant and demand information about the rumor, he points to a place called the 'Ashen Orphanage'.", "unlock": "B12"}
  ],
  "fragments": [],
  "winCondition": "B12",
  "initialCards": ["B01", "B02", "B03"]
}