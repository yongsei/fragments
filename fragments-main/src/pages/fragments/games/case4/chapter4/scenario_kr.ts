
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


export const case4Ch4: GameScenario = 
{
  "id": "arcanum_shadows_chapter4",
  "title": "챕터 4: 공범들의 연극과 그림자 속의 진실",
  "story": "모든 진실을 밝히고, 용의자들에게 최후의 심판을 내린다.",
  "victim": "엘리야 스톤위크",
  "suspects": [
    {
      "id": "D01",
      "name": "빅터 크로우의 최종 추리",
      "role": "탐정",
      "description": "모든 단서들이 하나의 그림을 그리고 있음을 확신한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D04",
      "name": "그림록 스틸해머의 자백",
      "role": "용의자",
      "description": "밀실 트릭에 사용된 도르래 장치를 자신이 만들었음을 인정한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D05",
      "name": "아엘렌 실버우드의 인정",
      "role": "용의자",
      "description": "마법 증폭 장치를 제공했음을 인정하고, 스톤위크의 오만함을 비난한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D06",
      "name": "릴리아나 베인의 침묵",
      "role": "용의자",
      "description": "스톤위크의 연구 방식에 대한 윤리적 문제 제기에도 불구하고 침묵한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D07",
      "name": "그록 블러드액스의 모순",
      "role": "용의자",
      "description": "스톤위크에게 가족을 잃었지만, 그를 지키지 못했음을 자책하는 모순된 진술.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D08",
      "name": "카이렌 나이트쉐이드의 고백",
      "role": "용의자",
      "description": "스톤위크의 심장을 자신의 몸에 이식하여 불멸을 얻으려 했음을 고백한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D14",
      "name": "빅터 크로우의 고뇌",
      "role": "탐정",
      "description": "진실을 알았지만, 법의 한계 앞에서 고뇌하는 크로우.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D17",
      "name": "불멸을 얻은 자",
      "role": "용의자",
      "description": "스톤위크의 심장을 이식하여 불멸을 얻은 카이렌.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D18",
      "name": "진실을 아는 자",
      "role": "탐정",
      "description": "모든 진실을 알게 된 빅터 크로우.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "D02",
      "name": "공범들의 연극",
      "description": "용의자들 각자의 원한과 욕망, 역할이 조화를 이루어 하나의 거대한 연극을 완성했다.",
      "details": "각자의 동기와 수단이 하나의 살인으로 귀결되었다.",
      "location": ""
    },
    {
      "id": "D03",
      "name": "심장석 의식의 진실",
      "description": "스톤위크가 자신의 심장을 '생명의 심장석'으로 만들려 했다는 진실.",
      "details": "고대 마법과 첨단 기술의 융합.",
      "location": ""
    },
    {
      "id": "D09",
      "name": "밀실 트릭의 전모",
      "description": "도르래 장치와 마법 증폭 장치를 이용한 밀실 트릭의 완벽한 설명.",
      "details": "사무엘 골드버그가 이 장치를 만들었다.",
      "location": ""
    },
    {
      "id": "D10",
      "name": "사라진 심장의 행방",
      "description": "스톤위크의 심장이 카이렌의 몸에 이식되었음을 밝힌다.",
      "details": "카이렌의 충격적인 고백.",
      "location": ""
    },
    {
      "id": "D11",
      "name": "불멸의 대가",
      "description": "카이렌이 불멸을 얻기 위해 스톤위크를 살해하고 다른 용의자들을 이용했음을 밝힌다.",
      "details": "카이렌의 궁극적인 목적.",
      "location": ""
    },
    {
      "id": "D12",
      "name": "법의 심판의 어려움",
      "description": "모든 용의자가 공범이고 동기가 있어 법의 심판이 어렵다는 결론.",
      "details": "헤이스팅스 경은 진실을 알았지만, 법적인 처벌은 불가능하다.",
      "location": ""
    },
    {
      "id": "D13",
      "name": "아르카눔의 그림자",
      "description": "이 사건의 진실이 아르카눔의 어두운 그림자 속에 영원히 남을 것임을 암시한다.",
      "details": "법의 심판을 받기 어려운 복잡한 진실.",
      "location": ""
    },
    {
      "id": "D15",
      "name": "정의의 모호성",
      "description": "법의 심판을 벗어난 정의의 집행에 대한 질문.",
      "details": "빅터 크로우의 고뇌.",
      "location": ""
    },
    {
      "id": "D16",
      "name": "침묵하는 열차",
      "description": "사건의 진실을 품고 파리로 향하는 열차.",
      "details": "빅터 크로우는 침묵 속에 열차를 떠났다.",
      "location": ""
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_D04", "cards": ["D01", "D02"], "result": "빅터 크로우는 공범들의 연극을 통해 그림록 스틸해머가 밀실 트릭에 사용된 도르래 장치를 만들었음을 밝혀냅니다.", "unlock": "D04"},
    {"id": "rule_D05", "cards": ["D01", "D04"], "result": "빅터 크로우는 그림록 스틸해머의 자백을 통해 아엘렌 실버우드가 마법 증폭 장치를 제공했음을 밝혀냅니다.", "unlock": "D05"},
    {"id": "rule_D06", "cards": ["D01", "D05"], "result": "빅터 크로우는 아엘렌 실버우드의 인정을 통해 릴리아나 베인이 스톤위크의 연구 방식에 대한 윤리적 문제 제기에도 불구하고 침묵했음을 밝혀냅니다.", "unlock": "D06"},
    {"id": "rule_D07", "cards": ["D01", "D06"], "result": "빅터 크로우는 릴리아나 베인의 침묵을 통해 그록 블러드액스가 스톤위크에게 가족을 잃었지만, 그를 지키지 못했음을 자책하는 모순된 진술을 했음을 밝혀냅니다.", "unlock": "D07"},
    {"id": "rule_D08", "cards": ["D01", "D07"], "result": "빅터 크로우는 그록 블러드액스의 모순된 진술을 통해 카이렌 나이트쉐이드가 스톤위크의 심장을 자신의 몸에 이식하여 불멸을 얻으려 했음을 고백하게 합니다.", "unlock": "D08"}
    {"id": "rule_D09", "cards": ["D04", "D05"], "result": "그림록 스틸해머의 자백과 아엘렌 실버우드의 인정을 통해 밀실 트릭의 전모가 완벽하게 설명됩니다.", "unlock": "D09"},
    {"id": "rule_D10", "cards": ["D08", "D03"], "result": "카이렌 나이트쉐이드의 고백과 심장석 의식의 진실을 통해 사라진 심장의 행방이 밝혀집니다.", "unlock": "D10"},
    {"id": "rule_D11", "cards": ["D10", "D02"], "result": "사라진 심장의 행방과 공범들의 연극을 통해 카이렌이 불멸을 얻기 위해 스톤위크를 살해하고 다른 용의자들을 이용했음을 밝힙니다.", "unlock": "D11"},
    {"id": "rule_D12", "cards": ["D11", "D01"], "result": "불멸의 대가와 빅터 크로우의 최종 추리를 통해 모든 용의자가 공범이고 동기가 있어 법의 심판이 어렵다는 결론에 도달합니다.", "unlock": "D12"},
    {"id": "rule_D13", "cards": ["D12", "D02"], "result": "법의 심판의 어려움과 공범들의 연극을 통해 이 사건의 진실이 아르카눔의 어두운 그림자 속에 영원히 남을 것임을 암시합니다.", "unlock": "D13"},
    {"id": "rule_D14", "cards": ["D01", "D12"], "result": "빅터 크로우의 최종 추리와 법의 심판의 어려움을 통해 진실을 알았지만, 법의 한계 앞에서 고뇌하는 크로우의 모습을 보여줍니다.", "unlock": "D14"},
    {"id": "rule_D15", "cards": ["D12", "D14"], "result": "법의 심판의 어려움과 빅터 크로우의 고뇌를 통해 법의 심판을 벗어난 정의의 집행에 대한 질문을 던집니다.", "unlock": "D15"},
    {"id": "rule_D16", "cards": ["D13", "D15"], "result": "아르카눔의 그림자와 정의의 모호성을 통해 사건의 진실을 품고 파리로 향하는 침묵하는 열차를 보여줍니다.", "unlock": "D16"},
    {"id": "rule_D17", "cards": ["D10", "D11"], "result": "사라진 심장의 행방과 불멸의 대가를 통해 스톤위크의 심장을 이식하여 불멸을 얻은 카이렌의 모습을 보여줍니다.", "unlock": "D17"},
    {"id": "rule_D18", "cards": ["D01", "D13"], "result": "빅터 크로우의 최종 추리와 아르카눔의 그림자를 통해 모든 진실을 알게 된 빅터 크로우의 모습을 보여줍니다.", "unlock": "D18"}
  ],
  "fragments": [],
  "winCondition": "D18",
  "initialCards": ["D01", "D02", "D03"]
}
