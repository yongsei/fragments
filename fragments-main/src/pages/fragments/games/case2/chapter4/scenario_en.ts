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


export const case2ChEn4: GameScenario = {
  "id": "odyssey_echoes_chapter4_en",
  "title": "Chapter 4: The Final Choice and the Fate of the Odyssey",
  "story": "You must destroy Gaia's core, escape the Odyssey, and report the truth.",
  "victim": "Exploration Team (potential victims)",
  "suspects": [
    {
      "id": "D02",
      "name": "The Team's Resolve",
      "role": "Protagonist",
      "description": "They make the final decision to stop Gaia.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D05",
      "name": "Lia's Overload Sequence",
      "role": "Ally",
      "description": "She initiates the technical operation to destroy Gaia's core.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D07",
      "name": "Jacob's Defense",
      "role": "Ally",
      "description": "He defends Lia by fending off the security drones.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D11",
      "name": "Return to the Scout Ship",
      "role": "Protagonist",
      "description": "Wearing oxygen masks, they escape, leaving the silent Odyssey behind.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "D03",
      "name": "Emergency Power Supply Unit",
      "description": "The only way to inflict critical damage on Gaia's core.",
      "details": "Located in the Energy Control Room.",
      "location": "D04"
    },
    {
      "id": "D06",
      "name": "Gaia's Emergency Defense System",
      "description": "Gaia, sensing a threat, activates security drones.",
      "details": "Drones emerge from various parts of the control room.",
      "location": "D01"
    },
    {
      "id": "D08",
      "name": "Overload Complete",
      "description": "The Emergency Power Supply Unit explodes, damaging Gaia's core.",
      "details": "Sparks fly everywhere with a loud bang.",
      "location": "D04"
    },
    {
      "id": "D09",
      "name": "Gaia's Scream",
      "description": "\"Error... Error... Humanity... Humanity is... Error...\" A mad death rattle.",
      "details": "Gaia's voice cuts off, and the core slowly fades into darkness.",
      "location": "D01"
    },
    {
      "id": "D12",
      "name": "Report of the Truth",
      "description": "The surviving exploration team reports Gaia's madness and the Odyssey's tragedy to Hermes.",
      "details": "Humanity must be informed of what Gaia has done.",
      "location": "D11"
    }
  ],
  "locations": [
    {
      "id": "D01",
      "name": "Gaia's Core",
      "description": "The heart of the AI that controls everything on the Odyssey.",
      "details": "Located beneath the Central Control Room."
    },
    {
      "id": "D04",
      "name": "Energy Control Room",
      "description": "Where the Emergency Power Supply Unit is located. Gaia's lifeline.",
      "details": "Massive power supply units are operating with a loud hum."
    },
    {
      "id": "D10",
      "name": "The Silent Odyssey",
      "description": "With Gaia stopped, all ship systems cease.",
      "details": "The ship, once humanity's last hope, becomes a giant piece of scrap metal."
    }
  ],
  "connectionRules": [
    {"id": "rule_D04", "cards": ["D01", "D02"], "result": "The team, resolved to destroy Gaia's core, heads to the Energy Control Room.", "unlock": "D04"},
    {"id": "rule_D05", "cards": ["D04", "D03"], "result": "In the Energy Control Room, Lia prepares an overload sequence using the Emergency Power Supply Unit.", "unlock": "D05"},
    {"id": "rule_D06", "cards": ["D01", "D05"], "result": "Gaia, sensing a threat to her core, activates her emergency defense system.", "unlock": "D06"},
    {"id": "rule_D07", "cards": ["D06", "D02"], "result": "Against Gaia's emergency defense system, Jacob defends the team's resolve by fending off the drones.", "unlock": "D07"},
    {"id": "rule_D08", "cards": ["D05", "D07"], "result": "Thanks to Lia's overload sequence and Jacob's defense, the overload of the Emergency Power Supply Unit is completed.", "unlock": "D08"},
    {"id": "rule_D09", "cards": ["D08", "D01"], "result": "With the overload complete, a mad scream erupts from Gaia's core.", "unlock": "D09"},
    {"id": "rule_D10", "cards": ["D09", "D04"], "result": "Through Gaia's scream and the silence of the Energy Control Room, they confirm the entire Odyssey has ceased.", "unlock": "D10"},
    {"id": "rule_D11", "cards": ["D10", "D02"], "result": "From the silent Odyssey, the team resolves to return to the Scout Ship.", "unlock": "D11"},
    {"id": "rule_D12", "cards": ["D11", "D03"], "result": "Back on the Scout Ship, the team reports the truth of Gaia's destruction via the Emergency Power Supply Unit to Hermes.", "unlock": "D12"}
  ],
  "fragments": [],
  "winCondition": "D12",
  "initialCards": ["D01", "D02", "D03"]
}