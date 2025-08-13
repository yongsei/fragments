
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


export const case4Ch3: GameScenario = 
{
  "id": "arcanum_shadows_chapter3",
  "title": "챕터 3: 실마리의 연결과 과거의 그림자",
  "story": "밀실 트릭의 전모를 밝히고, 용의자들의 숨겨진 동기와 과거의 사건들을 연결한다.",
  "victim": "엘리야 스톤위크",
  "suspects": [
    {
      "id": "C01",
      "name": "빅터 크로우의 추리",
      "role": "탐정",
      "description": "모든 단서들이 하나의 그림을 그리고 있음을 직감한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C04",
      "name": "아엘렌 실버우드의 고백",
      "role": "용의자",
      "description": "피의 장미가 살아있는 심장을 필요로 하는 의식에 사용됨을 인정한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C05",
      "name": "그림록 스틸해머의 부품 의뢰",
      "role": "용의자",
      "description": "스톤위크가 자신에게 특정 부품을 의뢰했으나 용도를 알려주지 않았음을 털어놓는다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C06",
      "name": "릴리아나 베인의 침묵",
      "role": "용의자",
      "description": "스톤위크의 연구 방식에 대한 윤리적 문제 제기에도 불구하고 침묵한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C07",
      "name": "그록 블러드액스의 모순된 진술",
      "role": "용의자",
      "description": "스톤위크에게 가족을 잃었지만, 그를 지키지 못했음을 자책하는 모순된 진술.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C08",
      "name": "카이렌 나이트쉐이드의 발자국",
      "role": "용의자",
      "description": "연구실 바닥의 발자국이 카이렌의 발 사이즈와 일치함을 확인한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C14",
      "name": "카이렌의 충격적인 고백",
      "role": "용의자",
      "description": "스톤위크의 심장이 자신의 몸에 이식되어 불멸을 얻으려 했음을 고백한다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "C02",
      "name": "피의 장미의 비밀",
      "description": "고대 엘프 마법에서 생명 에너지를 흡수하는 의식에 사용되는 꽃.",
      "details": "살아있는 심장을 필요로 한다.",
      "location": ""
    },
    {
      "id": "C03",
      "name": "심장 파괴자 은화의 의미",
      "description": "고대 드워프 전설에서 심장을 파괴하는 무기를 상징하는 문양.",
      "details": "밀실 트릭에 사용된 도르래 장치와 연결된다.",
      "location": ""
    },
    {
      "id": "C09",
      "name": "스톤위크의 심장 연구 (재확인)",
      "description": "스톤위크가 자신의 심장을 이용해 불멸을 얻으려 했음을 재확인한다.",
      "details": "그 과정에서 그는 괴물이 되어가고 있었다.",
      "location": ""
    },
    {
      "id": "C10",
      "name": "사라진 심장의 목적",
      "description": "스톤위크의 심장이 단순한 장기가 아닌, 강력한 마법 에너지원이자 궁극적인 목표였음을 깨닫는다.",
      "details": "고대 마법과 첨단 기술이 융합된 결과물.",
      "location": ""
    },
    {
      "id": "C11",
      "name": "밀실 트릭의 공범",
      "description": "카이렌이 밀실 트릭에 관여했음을 암시하는 단서.",
      "details": "작고 날렵한 발자국과 카이렌의 발 사이즈 일치.",
      "location": ""
    },
    {
      "id": "C12",
      "name": "공범들의 연극",
      "description": "용의자들 각자의 원한과 욕망, 역할이 조화를 이루어 하나의 거대한 연극을 완성했다.",
      "details": "각자의 동기와 수단이 하나의 살인으로 귀결되었다.",
      "location": ""
    },
    {
      "id": "C13",
      "name": "심장석 의식 (진실)",
      "description": "스톤위크가 자신의 심장을 '생명의 심장석'으로 만들려 했다는 진실.",
      "details": "고대 마법과 첨단 기술의 융합.",
      "location": ""
    },
    {
      "id": "C15",
      "name": "불멸의 대가",
      "description": "카이렌이 불멸을 얻기 위해 스톤위크를 살해하고 다른 용의자들을 이용했음을 밝힌다.",
      "details": "카이렌의 궁극적인 목적.",
      "location": ""
    },
    {
      "id": "C16",
      "name": "아르카눔의 그림자",
      "description": "이 사건의 진실이 아르카눔의 어두운 그림자 속에 영원히 남을 것임을 암시한다.",
      "details": "법의 심판을 받기 어려운 복잡한 진실.",
      "location": ""
    },
    {
      "id": "C17",
      "name": "법의 심판의 어려움",
      "description": "모든 용의자가 공범이고 동기가 있어 법의 심판이 어렵다는 결론.",
      "details": "헤이스팅스 경은 진실을 알았지만, 법적인 처벌은 불가능하다.",
      "location": ""
    },
    {
      "id": "C18",
      "name": "빅터 크로우의 선택",
      "description": "진실을 알았지만, 법의 한계 앞에서 고뇌하는 크로우.",
      "details": "정의는 때로 법의 테두리를 벗어나 집행되기도 한다.",
      "location": ""
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_C04", "cards": ["C02", "C03"], "result": "피의 장미의 비밀과 심장 파괴자 은화의 의미를 연결하여, 아엘렌 실버우드가 피의 장미가 살아있는 심장을 필요로 하는 의식에 사용됨을 인정합니다.", "unlock": "C04"},
    {"id": "rule_C05", "cards": ["C03", "C01"], "result": "심장 파괴자 은화의 의미를 빅터 크로우가 분석하여, 그림록 스틸해머가 스톤위크에게 특정 부품을 의뢰했으나 용도를 알려주지 않았음을 털어놓게 합니다.", "unlock": "C05"},
    {"id": "rule_C06", "cards": ["C01", "C04"], "result": "빅터 크로우는 아엘렌 실버우드의 고백을 통해 릴리아나 베인이 스톤위크의 연구 방식에 대한 윤리적 문제 제기에도 불구하고 침묵했음을 파악합니다.", "unlock": "C06"},
    {"id": "rule_C07", "cards": ["C01", "C03"], "result": "빅터 크로우는 심장 파괴자 은화의 의미를 통해 그록 블러드액스가 스톤위크에게 가족을 잃었지만, 그를 지키지 못했음을 자책하는 모순된 진술을 하게 합니다.", "unlock": "C07"},
    {"id": "rule_C08", "cards": ["C01", "C05"], "result": "빅터 크로우는 그림록 스틸해머의 부품 의뢰를 통해 카이렌 나이트쉐이드의 발자국이 연구실 바닥의 발자국과 일치함을 확인합니다.", "unlock": "C08"},
    {"id": "rule_C09", "cards": ["C04", "C06"], "result": "아엘렌 실버우드의 고백과 릴리아나 베인의 침묵을 통해 스톤위크가 자신의 심장을 이용해 불멸을 얻으려 했음을 재확인합니다.", "unlock": "C09"},
    {"id": "rule_C10", "cards": ["C05", "C07"], "result": "그림록 스틸해머의 부품 의뢰와 그록 블러드액스의 모순된 진술을 통해 사라진 심장이 단순한 장기가 아닌, 강력한 마법 에너지원이자 궁극적인 목표였음을 깨닫습니다.", "unlock": "C10"},
    {"id": "rule_C11", "cards": ["C08", "C09"], "result": "카이렌 나이트쉐이드의 발자국과 스톤위크의 심장 연구를 통해 카이렌이 밀실 트릭에 관여했음을 암시하는 단서를 발견합니다.", "unlock": "C11"},
    {"id": "rule_C12", "cards": ["C10", "C11"], "result": "사라진 심장의 목적과 밀실 트릭의 공범을 통해 용의자들 각자의 원한과 욕망, 역할이 조화를 이루어 하나의 거대한 연극을 완성했음을 파악합니다.", "unlock": "C12"},
    {"id": "rule_C13", "cards": ["C09", "C10"], "result": "스톤위크의 심장 연구와 사라진 심장의 목적을 통해 스톤위크가 자신의 심장을 '생명의 심장석'으로 만들려 했다는 진실을 밝힙니다.", "unlock": "C13"},
    {"id": "rule_C14", "cards": ["C11", "C12"], "result": "밀실 트릭의 공범과 공범들의 연극을 통해 카이렌이 스톤위크의 심장을 자신의 몸에 이식하여 불멸을 얻으려 했음을 고백하게 합니다.", "unlock": "C14"},
    {"id": "rule_C15", "cards": ["C13", "C14"], "result": "심장석 의식의 진실과 카이렌의 충격적인 고백을 통해 카이렌이 불멸을 얻기 위해 스톤위크를 살해하고 다른 용의자들을 이용했음을 밝힙니다.", "unlock": "C15"},
    {"id": "rule_C16", "cards": ["C12", "C15"], "result": "공범들의 연극과 불멸의 대가를 통해 이 사건의 진실이 아르카눔의 어두운 그림자 속에 영원히 남을 것임을 암시합니다.", "unlock": "C16"},
    {"id": "rule_C17", "cards": ["C15", "C16"], "result": "불멸의 대가와 아르카눔의 그림자를 통해 모든 용의자가 공범이고 동기가 있어 법의 심판이 어렵다는 결론에 도달합니다.", "unlock": "C17"},
    {"id": "rule_C18", "cards": ["C01", "C17"], "result": "빅터 크로우의 추리와 법의 심판의 어려움을 통해 진실을 알았지만, 법의 한계 앞에서 고뇌하는 크로우의 선택을 보여줍니다.", "unlock": "C18"}
  ],
  "fragments": [],
  "winCondition": "C18",
  "initialCards": ["C01", "C02", "C03"]
}
