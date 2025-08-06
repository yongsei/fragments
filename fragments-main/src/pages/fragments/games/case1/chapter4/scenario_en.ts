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


export const caseChEn4: GameScenario = {
  "id": "dark_fantasy_mystery_chapter4_en",
  "title": "Chapter 4: The Confrontation",
  "story": "The Director's Office, where all secrets lie dormant. You finally confront the source of the incident. You must make him confess the whole truth of his crimes and put an end to this terrible tragedy.",
  "victim": "The Archbishop, The Orphanage Children",
  "suspects": [
    {
      "id": "D03",
      "name": "The Inquisitor's Final Interrogation",
      "role": "Protagonist",
      "description": "Ready to confront the culprit with all the evidence. Everything depends on your choice.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D05",
      "name": "Valerius the Alchemist",
      "role": "Culprit",
      "description": "The author of the research journal. The orphanage director was the culprit behind the Archbishop's murder and the exploitation of souls.",
      "alibi": "He claims he was only conducting research for the children.",
      "motive": "To extend his own life and explore forbidden knowledge using the children's souls."
    },
    {
      "id": "D06",
      "name": "Confronting Valerius",
      "role": "Culprit",
      "description": "As you raid the scene, you come face to face with Valerius, who is holding the missing chalice.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D11",
      "name": "The Final Struggle",
      "role": "Culprit",
      "description": "Cornered, Valerius causes his shadow to go berserk and attacks the Inquisitor.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "D02",
      "name": "The Secret of the Vacant Children",
      "description": "You must find out why the children's souls are disappearing.",
      "details": "This is the most tragic part of the case and the culprit's greatest sin.",
      "location": "D01"
    },
    {
      "id": "D04",
      "name": "The Secret Research Journal",
      "description": "A record of forbidden alchemy found on the director's desk.",
      "details": "It details horrific experiments of extracting and shattering souls.",
      "location": "D01"
    },
    {
      "id": "D07",
      "name": "The Motive for the Crime",
      "description": "He was extending his own life with the souls of the children.",
      "details": "A twisted desire for eternal youth and knowledge was the cause of all the tragedy.",
      "location": "D05"
    },
    {
      "id": "D08",
      "name": "The Reason for the Archbishop's Murder",
      "description": "Because the Archbishop noticed his experiments and was about to cut off his funding.",
      "details": "When his research was in jeopardy, he murdered the Archbishop and tried to steal his memories.",
      "location": "D06"
    },
    {
      "id": "D09",
      "name": "The Identity of the Shadow",
      "description": "Valerius's shadow is a monster created by his twisted soul.",
      "details": "It is living black magic itself, grown by devouring countless souls.",
      "location": "D05"
    },
    {
      "id": "D10",
      "name": "The Shattered Souls",
      "description": "Fragments of souls extracted from children, stored in the laboratory.",
      "details": "The irrefutable final proof of Valerius's crimes.",
      "location": "D01"
    },
    {
      "id": "D12",
      "name": "The End of the Case",
      "description": "You have subdued Valerius and secured all the evidence of his crimes.",
      "details": "The tragedy is over, but the city's wounds run deep.",
      "location": "D01"
    }
  ],
  "locations": [
    {
      "id": "D01",
      "name": "The Infiltrated Director's Office",
      "description": "Late at night, you sneak into the director's office. The smell of chemicals is strong.",
      "details": "On the desk lies a horrific research journal, and in one corner is a door leading to a secret laboratory."
    }
  ],
  "connectionRules": [
    {"id": "rule_D04", "cards": ["D01", "D02"], "result": "Searching the director's office, you discover a secret research journal containing the reason for the children's disappearing souls.", "unlock": "D04"},
    {"id": "rule_D05", "cards": ["D04", "D03"], "result": "You confirm the author of the journal is the director, Valerius, and become certain he is the culprit.", "unlock": "D05"},
    {"id": "rule_D06", "cards": ["D05", "D01"], "result": "The moment you secure the decisive evidence, Valerius enters the office. In his hand is the missing chalice.", "unlock": "D06"},
    {"id": "rule_D07", "cards": ["D06", "D04"], "result": "Interrogating Valerius, you get him to confess his motive: exploiting children's souls for eternal life.", "unlock": "D07"},
    {"id": "rule_D08", "cards": ["D07", "D06"], "result": "Under continued interrogation, he also reveals that he murdered the Archbishop who had noticed his experiments.", "unlock": "D08"},
    {"id": "rule_D09", "cards": ["D05", "D02"], "result": "You uncover the identity of the \"shadow that chirps like a bird\"—a creature born from Valerius's twisted soul and the children's sacrifice.", "unlock": "D09"},
    {"id": "rule_D10", "cards": ["D09", "D07"], "result": "In the secret laboratory, you discover the irrefutable evidence of his crimes: the \'shattered souls\'.", "unlock": "D10"},
    {"id": "rule_D11", "cards": ["D06", "D09"], "result": "With everything revealed, Valerius, in a final act of desperation, causes his shadow to go berserk and attack you.", "unlock": "D11"},
    {"id": "rule_D12", "cards": ["D10", "D11"], "result": "After a fierce battle, you vanquish the shadow and subdue Valerius, finally bringing this horrific case to a close.", "unlock": "D12"}
  ],
  "fragments": [],
  "winCondition": "D12",
  "initialCards": ["D01", "D02", "D03"]
}