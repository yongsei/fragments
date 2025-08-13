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


export const case4Ch2: GameScenario = {
  "id": "arcanum_shadows_chapter2",
  "title": "챕터 2: 단서의 해부와 고대 마법의 속삭임",
  "story": "빅터 크로우는 발견된 단서들을 과학적으로 분석하고, 용의자들의 숨겨진 동기와 과거의 비밀을 파헤친다.",
  "victim": "엘리야 스톤위크",
  "suspects": [
    {
      "id": "B01",
      "name": "빅터 크로우의 분석",
      "role": "탐정",
      "description": "논리와 과학으로 단서들을 해부한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B11",
      "name": "아엘렌 실버우드의 고백",
      "role": "용의자",
      "description": "피의 장미가 살아있는 심장을 필요로 하는 의식에 사용됨을 인정한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B12",
      "name": "그림록 스틸해머의 부품",
      "role": "용의자",
      "description": "스톤위크가 자신에게 특정 부품을 의뢰했음을 털어놓는다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B13",
      "name": "릴리아나 베인의 윤리적 문제",
      "role": "용의자",
      "description": "스톤위크의 연구 방식에 대해 윤리적인 문제를 제기했음을 인정한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B14",
      "name": "그록 블러드액스의 모순",
      "role": "용의자",
      "description": "스톤위크에게 가족을 잃었지만, 그를 지키지 못했음을 자책한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B15",
      "name": "카이렌 나이트쉐이드의 발자국",
      "role": "용의자",
      "description": "연구실 바닥의 발자국이 카이렌의 발 사이즈와 일치함을 확인한다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "B02",
      "name": "희미하게 빛나는 수정 조각",
      "description": "정교하게 가공된 마법 증폭 장치의 파편.",
      "details": "마법 지팡이의 일부가 아닌, 다른 장치에 사용되었음을 시사한다.",
      "location": ""
    },
    {
      "id": "B03",
      "name": "낡은 가죽 주머니 속 단서들",
      "description": "말라붙은 붉은 꽃잎과 알 수 없는 문양의 은화.",
      "details": "사건의 핵심 단서들을 담고 있다.",
      "location": ""
    },
    {
      "id": "B04",
      "name": "피의 장미",
      "description": "고대 엘프 마법에서 생명 에너지를 흡수하는 의식에 사용된 희귀한 마법 식물.",
      "details": "아르카눔에서는 자라지 않는 종. 생명 에너지 흡수와 사라진 심장을 연결시킨다.",
      "location": "B03"
    },
    {
      "id": "B05",
      "name": "심장 파괴자 은화",
      "description": "고대 드워프의 상징. 심장을 파괴하는 무기를 상징한다.",
      "details": "드워프 전설에서 강력한 마법 생명체의 심장을 파괴하는 데 사용된 무기를 상징한다.",
      "location": "B03"
    },
    {
      "id": "B06",
      "name": "마법 지팡이의 균열 분석",
      "description": "극도로 강력한 마법 에너지가 순간적으로 집중되었을 때 발생하는 흔적.",
      "details": "스톤위크의 지팡이가 살인 도구로 사용되었지만, 그 지팡이의 힘만으로는 심장을 도려낼 수 없었음을 시사한다.",
      "location": ""
    },
    {
      "id": "B07",
      "name": "작고 날렵한 발자국",
      "description": "연구실 바닥에서 발견된, 누군가 공중을 부유하며 움직인 듯한 발자국.",
      "details": "오크 용병 그록 블러드액스의 발과는 다른, 거의 흔적이 남지 않은 발자국.",
      "location": ""
    },
    {
      "id": "B08",
      "name": "생명의 심장석 (정보)",
      "description": "생명 에너지를 저장하고 증폭시키는 고대 엘프 유물.",
      "details": "스톤위크가 이 심장석을 재현하려 했거나, 자신의 심장을 강력한 마법 에너지원으로 만들려 했다.",
      "location": ""
    },
    {
      "id": "B09",
      "name": "스톤위크의 심장 연구",
      "description": "스톤위크가 자신의 심장을 이용해 불멸을 얻으려 했음을 암시하는 진술.",
      "details": "카이렌 나이트쉐이드의 진술에서 언급되었다.",
      "location": ""
    },
    {
      "id": "B10",
      "name": "고대 엘프 마법진",
      "description": "연구실 책상 아래에서 발견된, 고대 엘프 마법의 흔적을 담은 마법진.",
      "details": "아엘렌 실버우드와의 연관성을 암시한다.",
      "location": ""
    },
    {
      "id": "B16",
      "name": "스톤위크의 심장 (목표)",
      "description": "사라진 심장이 단순한 장기가 아닌, 범인의 궁극적인 목표였음을 깨닫는다.",
      "details": "고대 마법과 첨단 기술이 융합된 강력한 에너지원이자 목표.",
      "location": ""
    },
    {
      "id": "B17",
      "name": "공범들의 그림자",
      "description": "예상치 못한 공범들의 존재를 암시하는 단서들.",
      "details": "각 용의자들의 숨겨진 동기와 밀실 트릭의 연결 고리.",
      "location": ""
    },
    {
      "id": "B18",
      "name": "심장석 의식 (가설)",
      "description": "스톤위크가 자신의 심장을 이용해 '생명의 심장석'을 재현하려 했다는 가설.",
      "details": "사라진 심장과 피의 장미, 심장 파괴자 은화가 이 가설을 뒷받침한다.",
      "location": ""
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_B04", "cards": ["B02", "B03"], "result": "희미하게 빛나는 수정 조각과 낡은 가죽 주머니를 연결하여, 주머니 속 피의 장미가 마법 에너지와 관련 있음을 파악합니다.", "unlock": "B04"},
    {"id": "rule_B05", "cards": ["B04", "B03"], "result": "피의 장미와 낡은 가죽 주머니를 더 자세히 조사하여, 심장 파괴자 은화가 고대 드워프 무기를 상징함을 발견합니다.", "unlock": "B05"},
    {"id": "rule_B06", "cards": ["B02", "B01"], "result": "희미하게 빛나는 수정 조각을 빅터 크로우가 분석하여, 마법 지팡이의 균열이 극도로 강력한 마법 에너지에 의해 발생했음을 파악합니다.", "unlock": "B06"},
    {"id": "rule_B07", "cards": ["B05", "B06"], "result": "심장 파괴자 은화와 마법 지팡이 균열 분석을 통해, 연구실 바닥에서 작고 날렵한 발자국을 발견합니다.", "unlock": "B07"},
    {"id": "rule_B08", "cards": ["B01", "B08"], "result": "빅터 크로우는 생명의 심장석 정보와 자신의 분석을 통해 심장 에너지에 대한 심화 정보를 얻습니다.", "unlock": "B08"},
    {"id": "rule_B09", "cards": ["B01", "B06"], "result": "빅터 크로우는 마법 지팡이 균열 분석을 통해 스톤위크가 자신의 심장을 이용해 불멸을 얻으려 했음을 암시하는 진술을 확보합니다.", "unlock": "B09"},
    {"id": "rule_B10", "cards": ["B01", "B07"], "result": "빅터 크로우는 작고 날렷한 발자국 분석을 통해 연구실 책상 아래에서 고대 엘프 마법진을 발견합니다.", "unlock": "B10"},
    {"id": "rule_B11", "cards": ["B04", "B10"], "result": "피의 장미와 고대 엘프 마법진을 통해 아엘렌 실버우드가 피의 장미가 살아있는 심장을 필요로 하는 의식에 사용됨을 인정합니다.", "unlock": "B11"},
    {"id": "rule_B12", "cards": ["B05", "B06"], "result": "심장 파괴자 은화와 마법 지팡이의 균열 분석을 통해 그림록 스틸해머가 스톤위크에게 특정 부품을 의뢰했음을 털어놓습니다.", "unlock": "B12"},
    {"id": "rule_B13", "cards": ["B08", "B09"], "result": "생명의 심장석 정보와 스톤위크의 심장 연구를 통해 릴리아나 베인이 스톤위크의 연구 방식에 대해 윤리적인 문제를 제기했음을 인정합니다.", "unlock": "B13"},
    {"id": "rule_B14", "cards": ["B07", "B08"], "result": "작고 날렵한 발자국과 생명의 심장석 정보를 통해 그록 블러드액스가 스톤위크에게 가족을 잃었지만, 그를 지키지 못했음을 자책하는 모순된 진술을 합니다.", "unlock": "B14"},
    {"id": "rule_B15", "cards": ["B07", "B10"], "result": "작고 날렵한 발자국과 고대 엘프 마법진을 통해 카이렌 나이트쉐이드의 발자국이 연구실 바닥의 발자국과 일치함을 확인합니다.", "unlock": "B15"},
    {"id": "rule_B16", "cards": ["B04", "B05"], "result": "피의 장미와 심장 파괴자 은화를 통해 사라진 심장이 단순한 장기가 아닌, 범인의 궁극적인 목표였음을 깨닫습니다.", "unlock": "B16"},
    {"id": "rule_B17", "cards": ["B11", "B12"], "result": "아엘렌 실버우드의 고백과 그림록 스틸해머의 부품을 통해 예상치 못한 공범들의 존재를 암시하는 단서들을 발견합니다.", "unlock": "B17"},
    {"id": "rule_B18", "cards": ["B16", "B17"], "result": "스톤위크의 심장 목표와 공범들의 그림자를 통해 스톤위크가 자신의 심장을 이용해 '생명의 심장석'을 재현하려 했다는 가설을 세웁니다.", "unlock": "B18"}
  ],
  "fragments": [],
  "winCondition": "B18",
  "initialCards": ["B01", "B02", "B03"]
}
