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


export const caseChEn3: GameScenario = {
  "id": "dark_fantasy_mystery_chapter3_en",
  "title": "Chapter 3: Information and Truth",
  "story": "The 'Ashen Orphanage' pointed out by the informant. You must infiltrate it to confirm the source of the rumor yourself. A part of the shocking truth unfolds before your eyes.",
  "victim": "The Orphanage Children",
  "suspects": [
    {
      "id": "C03",
      "name": "The Inquisitor's Negotiation Skills",
      "role": "Protagonist",
      "description": "Your ability to deal with informants and uncover the secrets of the orphanage.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C04",
      "name": "The Silent Scribe",
      "role": "Ally",
      "description": "The infamous informant of Spiderweb Alley. His information is always true, but he demands a steep price.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C10",
      "name": "The Orphanage Infiltration Plan",
      "role": "Protagonist",
      "description": "You go undercover to infiltrate the orphanage and begin your investigation.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "C02",
      "name": "Information on the \"Shadow that Chirps like a Bird\"",
      "description": "You must find out the truth of this rumor.",
      "details": "Identifying the source of the rumor is the most important objective of this chapter.",
      "location": "C01"
    },
    {
      "id": "C05",
      "name": "The Informant's Deal",
      "description": "He does not speak easily. A price must be paid.",
      "details": "He will demand something as dangerous as the information is valuable.",
      "location": "C04"
    },
    {
      "id": "C06",
      "name": "The Church's Weakness",
      "description": "A secret of the church known only to the Inquisitor. A card to blackmail the informant.",
      "details": "Using this card carries a risk for you as well.",
      "location": "C03"
    },
    {
      "id": "C07",
      "name": "The Informant's Testimony",
      "description": "\"That's not a shadow. It's the sound of a soul being shattered.\"",
      "details": "A crucial testimony that confirms the nature of the rumor is a supernatural phenomenon.",
      "location": "C04"
    },
    {
      "id": "C09",
      "name": "The Orphanage's Reputation",
      "description": "It seems like an ordinary orphanage, but there are rumors that children change frequently.",
      "details": "The reality inside may be different from what is known outside.",
      "location": "C08"
    },
    {
      "id": "C11",
      "name": "The Vacant Children",
      "description": "The children in the orphanage are like soulless dolls.",
      "details": "Strong evidence that, as the informant testified, the children's souls are being shattered.",
      "location": "C08"
    }
  ],
  "locations": [
    {
      "id": "C01",
      "name": "Infiltrating Spiderweb Alley",
      "description": "You enter the dangerous back alley to meet the informant.",
      "details": "Someone might be watching you from the shadows."
    },
    {
      "id": "C08",
      "name": "The Ashen Orphanage",
      "description": "The source of the rumor, as indicated by the informant.",
      "details": "It appears peaceful on the outside, but an ominous silence reigns within."
    },
    {
      "id": "C12",
      "name": "The Director's Office",
      "description": "The deepest part of the orphanage. Where all secrets must be hidden.",
      "details": "A strange chemical smell and faint moans seep from under the door."
    }
  ],
  "connectionRules": [
    { "id": "rule_C04", "cards": ["C01", "C03"], "result": "Using your skills as an Inquisitor, you locate the informant, the Silent Scribe, in the darkness of Spiderweb Alley.", "unlock": "C04" },
    { "id": "rule_C05", "cards": ["C04", "C02"], "result": "When you demand information about the rumor from the Silent Scribe, he smiles knowingly and proposes a deal.", "unlock": "C05" },
    { "id": "rule_C06", "cards": ["C05", "C03"], "result": "When the deal terms prove difficult, you succeed in pressuring the informant by using a weakness of the church that only you know.", "unlock": "C06" },
    { "id": "rule_C07", "cards": ["C05", "C06"], "result": "After a combination of dealing and threatening, the informant finally reveals a shocking testimony about the nature of the rumor.", "unlock": "C07" },
    { "id": "rule_C08", "cards": ["C07", "C02"], "result": "Based on the informant's testimony, you identify the source of the rumor as the 'Ashen Orphanage' and head there immediately.", "unlock": "C08" },
    { "id": "rule_C09", "cards": ["C08", "C07"], "result": "While investigating around the orphanage, you confirm the bad reputation that children change frequently, just as the informant testified.", "unlock": "C09" },
    { "id": "rule_C10", "cards": ["C09", "C03"], "result": "Judging a direct approach to be too risky, you use your skills as an Inquisitor to plan an infiltration of the orphanage.", "unlock": "C10" },
    { "id": "rule_C11", "cards": ["C10", "C09"], "result": "The state of the children you encounter after infiltrating the orphanage proves that the terrible rumors are true.", "unlock": "C11" },
    { "id": "rule_C12", "cards": ["C11", "C08"], "result": "You head to the Director's Office, where the perpetrator of all this must be. An ominous aura seeps from the door.", "unlock": "C12" }
  ],
  "fragments": [],
  "winCondition": "C12",
  "initialCards": ["C01", "C02", "C03"]
}