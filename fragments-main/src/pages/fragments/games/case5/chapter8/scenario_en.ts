
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


export const case5ChEn8: GameScenario = {
  "id": "shadows_of_time_chapter8_en",
  "title": "Chapter 8: Balance of Time and New Beginnings",
  "story": "Completely subdue Chronos, ensure Sarah's lecture succeeds, restore the balance of time, and begin a new future.",
  "victim": "Humanity (freed from Chronos's threat)",
  "suspects": [
    {
      "id": "H01",
      "name": "Confrontation with the Last Agent",
      "role": "Antagonist",
      "description": "The final showdown with the remaining Chronos agent.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "H12",
      "name": "Sarah's Gratitude",
      "role": "Ally",
      "description": "After the lecture, Sarah approaches Lee Jin-woo, tears of gratitude in her eyes.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "H14",
      "name": "Sarah's Firm Resolve",
      "role": "Ally",
      "description": "Sarah's eyes are filled with determination as she receives the data chip.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "H02",
      "name": "Sarah's Lecture (Ongoing)",
      "description": "Jacob takes Sarah to the lecture hall, and the lecture begins.",
      "details": "Sarah is passionately lecturing on stage with conviction.",
      "location": "H08"
    },
    {
      "id": "H03",
      "name": "Alistair Finch's Pocket Watch (Final Weapon)",
      "description": "A pocket watch containing the time energy of 1888 London.",
      "details": "Can overload Chronos agents' suits.",
      "location": ""
    },
    {
      "id": "H04",
      "name": "Concentration of Time Distortion Energy",
      "description": "The last agent gathers all time distortion energy, creating a massive wave.",
      "details": "Everything around the museum distorts, and people scream in chaos.",
      "location": "H08"
    },
    {
      "id": "H05",
      "name": "Pocket Watch Strike",
      "description": "Lee Jin-woo strikes the agent's suit with the pocket watch, causing an overload.",
      "details": "Time distortion energy from the pocket watch engulfs the agent's suit.",
      "location": "H01"
    },
    {
      "id": "H06",
      "name": "Agent's Disappearance",
      "description": "The agent screams and vanishes into the temporal wave.",
      "details": "As he disappears, the time distortion phenomenon vanishes as if by magic.",
      "location": "H01"
    },
    {
      "id": "H07",
      "name": "Time Distortion Phenomenon Vanishes",
      "description": "As the agent disappears, the time distortion phenomenon vanishes as if by magic.",
      "details": "The area around the museum returns to normal.",
      "location": "H08"
    },
    {
      "id": "H09",
      "name": "Sarah's Passionate Lecture",
      "description": "Sarah is passionately lecturing on stage with conviction.",
      "details": "Her voice is filled with conviction, and her eyes are fixed on the future.",
      "location": "H08"
    },
    {
      "id": "H10",
      "name": "New Possibilities for Humanity",
      "description": "Sarah's lecture presents infinite possibilities for humanity to create its own future.",
      "details": "Time is not fixed, but a flow of possibilities that changes with our choices.",
      "location": "H08"
    },
    {
      "id": "H11",
      "name": "Chronos's Plan Thwarted",
      "description": "Sarah's lecture becomes a turning point that overturns Chronos's 'optimized future'.",
      "details": "It changed human perception.",
      "location": "H08"
    },
    {
      "id": "H13",
      "name": "Kim Min-jun's Data Chip",
      "description": "Lee Jin-woo hands Sarah the data chip found in Kim Min-jun's hand.",
      "details": "Contains detailed Chronos Protocol and Kim Min-jun's last records.",
      "location": "H08"
    },
    {
      "id": "H15",
      "name": "Pocket Watch as Symbol",
      "description": "The old pocket watch becomes a symbol of courage that changed the future.",
      "details": "No longer a wound from the past.",
      "location": ""
    },
    {
      "id": "H18",
      "name": "End of Time's Shadow",
      "description": "Humanity embarks on a new path to create its own future through its own choices.",
      "details": "The shadow of time has completely lifted.",
      "location": "H17"
    }
  ],
  "locations": [
    {
      "id": "H08",
      "name": "Museum's Serenity",
      "description": "With the time distortion phenomenon gone, the area around the museum returns to normal.",
      "details": "Thunderous applause erupts from inside the lecture hall."
    },
    {
      "id": "H16",
      "name": "Return to Seoul 2042",
      "description": "Lee Jin-woo's team returns to Seoul 2042.",
      "details": "Kim Min-jun's lab is still there."
    },
    {
      "id": "H17",
      "name": "Beginning of Time Guardians",
      "description": "Kim Min-jun's lab becomes a new starting point for Time Guardians to gather and create the future.",
      "details": "It is no longer just a lab."
    }
  ],
  "connectionRules": [
    {"id": "rule_H04", "cards": ["H01", "H03"], "result": "Through the confrontation with the last agent and Alistair Finch's pocket watch, you witness the last agent gathering all time distortion energy to create a massive wave.", "unlock": "H04"},
    {"id": "rule_H05", "cards": ["H04", "H03"], "result": "Through the concentration of time distortion energy and Alistair Finch's pocket watch, you witness Lee Jin-woo striking the agent's suit with the pocket watch, causing an overload.", "unlock": "H05"},
    {"id": "rule_H06", "cards": ["H05", "H01"], "result": "Through the pocket watch strike and the confrontation with the last agent, you witness the agent screaming and vanishing into the temporal wave.", "unlock": "H06"},
    {"id": "rule_H07", "cards": ["H06", "H04"], "result": "Through the agent's disappearance and the concentration of time distortion energy, you confirm that the time distortion phenomenon vanishes as if by magic.", "unlock": "H07"},
    {"id": "rule_H08", "cards": ["H07", "H02"], "result": "Through the vanishing of the time distortion phenomenon and Sarah's lecture (ongoing), you confirm that the area around the museum returns to normal.", "unlock": "H08"},
    {"id": "rule_H09", "cards": ["H02", "H08"], "result": "Through Sarah's lecture (ongoing) and the museum's serenity, you confirm Sarah is passionately lecturing on stage with conviction.", "unlock": "H09"},
    {"id": "rule_H10", "cards": ["H09", "H07"], "result": "Through Sarah's passionate lecture and the vanishing of the time distortion phenomenon, you understand that Sarah's lecture presents infinite possibilities for humanity to create its own future.", "unlock": "H10"},
    {"id": "rule_H11", "cards": ["H10", "H06"], "result": "Through new possibilities for humanity and the agent's disappearance, you understand that Sarah's lecture becomes a turning point that overturns Chronos's 'optimized future'.", "unlock": "H11"},
    {"id": "rule_H12", "cards": ["H09", "H11"], "result": "Through Sarah's passionate lecture and Chronos's plan thwarted, you witness Sarah approaching Lee Jin-woo with tears of gratitude after the lecture.", "unlock": "H12"},
    {"id": "rule_H13", "cards": ["H12", "H03"], "result": "Through Sarah's gratitude and Alistair Finch's pocket watch, you witness Lee Jin-woo handing Sarah the data chip found in Kim Min-jun's hand.", "unlock": "H13"},
    {"id": "rule_H14", "cards": ["H13", "H12"], "result": "Through Kim Min-jun's data chip and Sarah's gratitude, you confirm Sarah's eyes are filled with determination as she receives the data chip.", "unlock": "H14"},
    {"id": "rule_H15", "cards": ["H03", "H14"], "result": "Through Alistair Finch's pocket watch and Sarah's firm resolve, you realize the old pocket watch becomes a symbol of courage that changed the future.", "unlock": "H15"},
    {"id": "rule_H16", "cards": ["H01", "H15"], "result": "Through the confrontation with the last agent and the pocket watch as a symbol, you witness Lee Jin-woo's team returning to Seoul 2042.", "unlock": "H16"},
    {"id": "rule_H17", "cards": ["H16", "H14"], "result": "Through the return to Seoul 2042 and Sarah's firm resolve, Kim Min-jun's lab becomes a new starting point for Time Guardians to gather and create the future.", "unlock": "H17"},
    {"id": "rule_H18", "cards": ["H17", "H15"], "result": "Through the beginning of Time Guardians and the pocket watch as a symbol, you confirm humanity embarks on a new path to create its own future through its own choices.", "unlock": "H18"}
  ],
  "fragments": [],
  "winCondition": "H18",
  "initialCards": ["H01", "H02", "H03"]
}
