
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


export const case3Ch2: GameScenario = {
  "id": "orient_express_chapter2",
  "title": "챕터 2: 알리바이의 균열과 숨겨진 동기",
  "story": "헤이스팅스 경은 용의자들의 침실을 몰래 조사하여 알리바이의 균열과 숨겨진 동기를 암시하는 단서들을 확보한다.",
  "victim": "알렉산더 볼코프",
  "suspects": [
    {
      "id": "B01",
      "name": "헤이스팅스 경의 직감",
      "role": "수사관",
      "description": "용의자들의 완벽한 알리바이에 의심을 품는다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "B03",
      "name": "밀실 살인의 역설",
      "description": "외부 침입이 불가능한 상황에서 벌어진 살인.",
      "details": "범인은 열차 안에 있다.",
      "location": ""
    },
    {
      "id": "B04",
      "name": "엘레나의 이국적인 향수",
      "description": "백작부인의 침실 문틈에서 맡은, 그녀의 것이 아닌 향수 냄새.",
      "details": "알리바이에 대한 의심을 증폭시킨다.",
      "location": "B02"
    },
    {
      "id": "B05",
      "name": "슈미트의 신문 스크랩",
      "description": "닥터 슈미트 침실에서 발견된 볼코프 관련 금융 스캔들 기사.",
      "details": "볼코프의 과거와 슈미트의 숨겨진 동기를 암시한다.",
      "location": "B02"
    },
    {
      "id": "B06",
      "name": "골드버그의 찢겨진 초상화",
      "description": "사무엘 골드버그 침실 바닥에 버려진 볼코프의 초상화 조각.",
      "details": "단순한 분노 이상의 감정을 보여준다.",
      "location": "B02"
    },
    {
      "id": "B07",
      "name": "마리아의 약 냄새",
      "description": "마리아 이바노바 침실에서 맡은, 볼코프 침실에서도 났던 약 냄새.",
      "details": "볼코프의 죽음과 약의 연관성을 의심하게 한다.",
      "location": "B02"
    },
    {
      "id": "B08",
      "name": "스미스 대령의 오래된 지도",
      "description": "대령 침실 벽에 걸린, 볼코프의 식민지 사업 지역이 표시된 지도.",
      "details": "과거의 악연이 현재의 살인으로 이어졌을 가능성을 시사한다.",
      "location": "B02"
    },
    {
      "id": "B09",
      "name": "작은 금속 조각",
      "description": "골드버그 침실에서 발견된, 시계 부품처럼 정교한 금속 조각.",
      "details": "밀실 트릭에 사용된 장치의 일부일 수 있다.",
      "location": "B02"
    },
    {
      "id": "B10",
      "name": "얇은 실 조각",
      "description": "볼코프의 시신이 쥐고 있던, 특수한 금속 섬유로 짜여진 실.",
      "details": "밀실 트릭의 핵심 단서.",
      "location": ""
    },
    {
      "id": "B11",
      "name": "문 안쪽의 흠집",
      "description": "볼코프 침실 문 안쪽에 생긴, 실을 회수하는 과정에서 생긴 듯한 흠집.",
      "details": "밀실 트릭의 구체적인 방법을 암시한다.",
      "location": ""
    },
    {
      "id": "B12",
      "name": "단검의 톱니바퀴 문양",
      "description": "살인에 사용된 단검 손잡이에 희미하게 새겨진 작은 톱니바퀴 모양.",
      "details": "범행 도구와 특정 용의자의 연관성을 암시한다.",
      "location": ""
    }
  ],
  "locations": [
    {
      "id": "B02",
      "name": "열차 복도",
      "description": "용의자들의 침실로 이어지는 통로. 은밀한 조사가 필요하다.",
      "details": "밤에는 희미한 불빛만이 복도를 비춘다."
    }
  ],
  "connectionRules": [
    {"id": "rule_B04", "cards": ["B01", "B02"], "result": "헤이스팅스 경은 직감을 따라 엘레나 백작부인의 침실 문틈에서 이국적인 향수 냄새를 맡습니다.", "unlock": "B04"},
    {"id": "rule_B05", "cards": ["B01", "B02"], "result": "헤이스팅스 경은 직감을 따라 닥터 슈미트의 침실에서 신문 스크랩을 발견합니다.", "unlock": "B05"},
    {"id": "rule_B06", "cards": ["B01", "B02"], "result": "헤이스팅스 경은 직감을 따라 사무엘 골드버그의 침실에서 찢겨진 초상화를 발견합니다.", "unlock": "B06"},
    {"id": "rule_B07", "cards": ["B01", "B02"], "result": "헤이스팅스 경은 직감을 따라 마리아 이바노바의 침실에서 약 냄새를 맡습니다.", "unlock": "B07"},
    {"id": "rule_B08", "cards": ["B01", "B02"], "result": "헤이스팅스 경은 직감을 따라 대령 존 스미스의 침실에서 오래된 지도를 발견합니다.", "unlock": "B08"},
    {"id": "rule_B09", "cards": ["B06", "B03"], "result": "골드버그의 찢겨진 초상화와 밀실의 역설을 연결하여 작은 금속 조각이 밀실 트릭의 일부임을 추론합니다.", "unlock": "B09"},
    {"id": "rule_B10", "cards": ["B03", "B01"], "result": "밀실 살인의 역설과 헤이스팅스 경의 직감을 통해 볼코프의 시신이 쥐고 있던 얇은 실 조각을 발견합니다.", "unlock": "B10"},
    {"id": "rule_B11", "cards": ["B10", "B03"], "result": "얇은 실 조각과 밀실의 역설을 연결하여 문 안쪽의 흠집이 실을 회수하는 과정에서 생긴 것임을 파악합니다.", "unlock": "B11"},
    {"id": "rule_B12", "cards": ["B04", "B05"], "result": "엘레나의 향수와 슈미트의 신문 스크랩을 연결하여 단검의 톱니바퀴 문양이 특정 용의자와 관련 있음을 추론합니다.", "unlock": "B12"}
  ],
  "fragments": [],
  "winCondition": "B12",
  "initialCards": ["B01", "B02", "B03"]
}
