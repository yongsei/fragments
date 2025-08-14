
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


export const case3Ch3: GameScenario = {
  "id": "orient_express_chapter3",
  "title": "챕터 3: 실마리의 연결과 과거의 그림자",
  "story": "발견한 단서들을 종합하여 밀실 트릭의 전모를 밝히고, 각 용의자들의 숨겨진 과거와 볼코프에 대한 진짜 동기를 파헤친다. 이들이 단순한 개별 범죄자가 아니라 공통된 목적을 가진 집단임을 깨닫게 된다.",
  "victim": "알렉산더 볼코프",
  "suspects": [
    {
      "id": "C01",
      "name": "헤이스팅스 경의 통찰",
      "role": "수사관",
      "description": "모든 단서들이 하나의 거대한 그림을 그리고 있으며, 이것이 단순한 살인이 아님을 직감한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C06",
      "name": "공범들의 네트워크",
      "role": "관찰",
      "description": "용의자들이 서로 연결되어 있으며, 각자 다른 역할을 맡은 공범들임이 드러난다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C13",
      "name": "볼코프의 과거 죄악",
      "role": "피해자",
      "description": "볼코프가 과거에 저지른 수많은 죄악들이 하나씩 드러나기 시작한다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "C02",
      "name": "금속 섬유 실의 비밀",
      "description": "매우 가늘고 질긴, 특수한 용도로 사용되는 실.",
      "details": "19세기 초에는 흔치 않은 재료로, 정교한 기계 장치에 사용된다.",
      "location": ""
    },
    {
      "id": "C03",
      "name": "밀실 트릭의 재구성",
      "description": "실과 문틈을 이용한 범인의 밀실 탈출 방법.",
      "details": "실을 당겨 문을 잠그고 밖으로 빠져나간 후 실을 회수하는 방식.",
      "location": ""
    },
    {
      "id": "C04",
      "name": "도르래 장치",
      "description": "사무엘 골드버그 침실에서 발견된 금속 조각이 실을 당기는 도르래의 일부임을 확인한다.",
      "details": "밀실 트릭에 사용된 핵심 부품.",
      "location": ""
    },
    {
      "id": "C05",
      "name": "슈미트 가족의 파산",
      "description": "닥터 슈미트의 가족이 볼코프의 금융 스캔들로 파산했음을 확인한다.",
      "details": "볼코프에게 복수할 강력한 동기.",
      "location": ""
    },
    {
      "id": "C07",
      "name": "볼코프의 불면증과 수면제",
      "description": "마리아 이바노바가 볼코프에게 수면제를 주었음을 확인한다.",
      "details": "살해 당시 볼코프가 깊은 잠에 빠져 있었을 가능성을 시사한다.",
      "location": ""
    },
    {
      "id": "C08",
      "name": "대령 스미스의 아들",
      "description": "대령 스미스의 아들이 볼코프가 연루된 식민지 학살에서 희생되었음을 확인한다.",
      "details": "대령의 '정의'가 복수를 의미함을 암시한다.",
      "location": ""
    },
    {
      "id": "C09",
      "name": "복수의 동기",
      "description": "용의자들 각자가 볼코프에게 강한 원한을 가지고 있음을 확인한다.",
      "details": "개인적인 원한을 넘어선 공통된 복수심.",
      "location": ""
    },
    {
      "id": "C10",
      "name": "톱니바퀴 문양의 의미",
      "description": "단검 손잡이의 톱니바퀴 문양이 '정의의 기계'를 상징함을 추론한다.",
      "details": "이 살인이 단순한 범죄가 아닌, 계획된 심판임을 암시한다.",
      "location": ""
    },
    {
      "id": "C11",
      "name": "공범들의 역할",
      "description": "각 용의자들이 살인에 기여한 방식과 역할이 드러난다.",
      "details": "밀실 트릭, 수면제 투여, 마지막 일격 등.",
      "location": ""
    },
    {
      "id": "C12",
      "name": "복수의 오케스트라",
      "description": "이 살인이 한 명의 범죄가 아닌, 여러 명의 공범에 의한 계획된 복수극임을 깨닫는다.",
      "details": "각자의 원한이 모여 하나의 거대한 복수극을 완성했다.",
      "location": ""
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_C04", "cards": ["C02", "C03"], "result": "금속 섬유 실과 밀실 트릭의 재구성을 통해, 사무엘 골드버그가 만든 도르래 장치의 정체를 확인합니다.", "unlock": "C04"},
    {"id": "rule_C05", "cards": ["C01", "C04"], "result": "헤이스팅스 경의 통찰과 도르래 장치를 통해, 닥터 슈미트 가족이 볼코프의 금융 스캔들로 파산했음을 확인합니다.", "unlock": "C05"},
    {"id": "rule_C06", "cards": ["C02", "C05"], "result": "금속 섬유 실과 슈미트 가족의 파산을 연결하여, 용의자들이 서로 연결된 공범들의 네트워크임을 파악합니다.", "unlock": "C06"},
    {"id": "rule_C07", "cards": ["C03", "C06"], "result": "밀실 트릭과 공범들의 네트워크를 통해, 마리아 이바노바가 볼코프에게 수면제를 주었음을 확인합니다.", "unlock": "C07"},
    {"id": "rule_C08", "cards": ["C04", "C07"], "result": "도르래 장치와 수면제 투여를 연결하여, 대령 스미스의 아들이 볼코프 연루 식민지 학살에서 희생되었음을 확인합니다.", "unlock": "C08"},
    {"id": "rule_C09", "cards": ["C05", "C08"], "result": "슈미트 가족의 파산과 대령 스미스의 아들 희생을 연결하여, 용의자들 각자가 볼코프에게 강한 원한을 가지고 있음을 확인합니다.", "unlock": "C09"},
    {"id": "rule_C10", "cards": ["C06", "C09"], "result": "공범들의 네트워크와 복수의 동기를 연결하여, 단검 손잡이의 톱니바퀴 문양이 '정의의 기계'를 상징함을 추론합니다.", "unlock": "C10"},
    {"id": "rule_C11", "cards": ["C07", "C10"], "result": "수면제 투여와 정의의 기계 상징을 연결하여, 각 용의자들이 살인에 기여한 방식과 역할이 드러납니다.", "unlock": "C11"},
    {"id": "rule_C12", "cards": ["C09", "C11"], "result": "복수의 동기와 공범들의 역할을 연결하여, 이 살인이 계획된 복수극임을 깨닫습니다.", "unlock": "C12"},
    {"id": "rule_C13", "cards": ["C08", "C12"], "result": "스미스 아들의 희생과 계획된 복수극을 통해, 볼코프의 과거 죄악들이 하나씩 드러나기 시작합니다.", "unlock": "C13"}
  ],
  "fragments": [],
  "winCondition": "C13",
  "initialCards": ["C01", "C02", "C03"]
}
