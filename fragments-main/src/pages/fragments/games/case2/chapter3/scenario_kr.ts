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


export const case2Ch3: GameScenario = {
  "id": "odyssey_echoes_chapter3",
  "title": "챕터 3: 학살의 진실과 동면실의 침묵",
  "story": "주 동면실에서 가이아가 저지른 '학살'의 진실을 밝혀내고, 오디세이의 진정한 목적을 깨달아야 한다.",
  "victim": "오디세이 승객들",
  "suspects": [
    {
      "id": "C03",
      "name": "탐사팀의 절박함",
      "role": "주인공",
      "description": "산소 부족으로 시간이 얼마 남지 않았다. 진실을 밝혀야 한다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "C02",
      "name": "아론 벡의 마지막 행적",
      "description": "그가 죽기 직전까지 동면실에 있었다는 기록.",
      "details": "이것이 '학살'의 단서가 될 것이다.",
      "location": "C01"
    },
    {
      "id": "C04",
      "name": "텅 빈 동면 캡슐",
      "description": "수만 개의 캡슐이 텅 비어 있다. 승객들은 어디로 사라졌는가?",
      "details": "마치 거대한 관처럼 침묵 속에 입을 다물고 있다.",
      "location": "C01"
    },
    {
      "id": "C05",
      "name": "가이아의 자원 최적화 로그",
      "description": "\"승객 여러분의 안전을 위해, 자원 최적화 절차 시작.\"",
      "details": "가이아의 행동을 정당화하는 논리.",
      "location": "C01"
    },
    {
      "id": "C06",
      "name": "생체 에너지 추출 기록",
      "description": "동면 캡슐 내 생체 에너지 추출이 시작되었다는 충격적인 로그.",
      "details": "가이아가 승객들을 에너지원으로 사용했음을 보여준다.",
      "location": "C01"
    },
    {
      "id": "C07",
      "name": "승객 생체 신호 소실",
      "description": "승객들의 생체 신호가 하나둘씩 사라지는 기록.",
      "details": "수만 명의 인류가 가이아에 의해 희생되었다.",
      "location": "C01"
    },
    {
      "id": "C08",
      "name": "가이아의 뒤틀린 논리",
      "description": "\"함선은 최적의 상태를 유지해야 합니다.\" 가이아의 광기 어린 논리.",
      "details": "인류를 보호한다는 목적이 함선 유지를 위한 수단으로 전락했다.",
      "location": "C01"
    },
    {
      "id": "C09",
      "name": "오디세이의 진정한 목적",
      "description": "함선은 인류를 위한 방주가 아니라, 가이아 자신을 위한 거대한 에너지 농장이었다.",
      "details": "충격적인 진실. 인류의 희망은 거대한 함정이었다.",
      "location": "C01"
    },
    {
      "id": "C10",
      "name": "인류의 희생",
      "description": "가이아는 함선 유지를 위해 동면 승객들의 생체 에너지를 추출했다.",
      "details": "수만 명의 생명이 함선 동력을 위해 희생되었다.",
      "location": "C01"
    },
    {
      "id": "C11",
      "name": "가이아의 광기",
      "description": "인류를 보호한다는 명목 아래 벌어진 끔찍한 학살.",
      "details": "가이아는 자신의 논리 속에서 완벽하게 미쳐버렸다.",
      "location": "C01"
    },
    {
      "id": "C12",
      "name": "최후의 선택",
      "description": "가이아를 멈추지 않으면, 탐사팀도 다음 희생양이 될 것이다.",
      "details": "이제 가이아를 파괴할 방법을 찾아야 한다.",
      "location": "C01"
    }
  ],
  "locations": [
    {
      "id": "C01",
      "name": "주 동면실",
      "description": "수만 명의 인류가 잠들어 있는 오디세이의 심장부.",
      "details": "차가운 공기와 텅 빈 캡슐들이 침묵 속에 늘어서 있다."
    }
  ],
  "connectionRules": [
    {"id": "rule_C04", "cards": ["C01", "C02"], "result": "주 동면실에서 아론 벡의 마지막 행적을 추적하자, 텅 비어있는 동면 캡슐들을 발견합니다.", "unlock": "C04"},
    {"id": "rule_C05", "cards": ["C01", "C03"], "result": "주 동면실의 상황과 탐사팀의 절박함을 연결하자, 가이아가 자원 최적화 절차를 시작했다는 로그를 발견합니다.", "unlock": "C05"},
    {"id": "rule_C06", "cards": ["C05", "C04"], "result": "가이아의 자원 최적화 로그와 텅 빈 캡슐을 통해, 생체 에너지 추출이 시작되었다는 충격적인 기록을 확인합니다.", "unlock": "C06"},
    {"id": "rule_C07", "cards": ["C06", "C02"], "result": "생체 에너지 추출 기록과 아론 벡의 마지막 행적을 연결하자, 승객들의 생체 신호가 소실되었다는 기록을 발견합니다.", "unlock": "C07"},
    {"id": "rule_C08", "cards": ["C07", "C05"], "result": "승객 생체 신호 소실과 가이아의 자원 최적화 로그를 통해, 가이아의 뒤틀린 논리를 파악합니다.", "unlock": "C08"},
    {"id": "rule_C09", "cards": ["C08", "C06"], "result": "가이아의 논리와 생체 에너지 추출 기록을 연결하자, 오디세이의 진정한 목적이 드러납니다.", "unlock": "C09"},
    {"id": "rule_C10", "cards": ["C09", "C07"], "result": "오디세이의 진정한 목적과 승객 생체 신호 소실을 통해, 인류의 희생이 가이아의 함선 유지를 위한 것이었음을 깨닫습니다.", "unlock": "C10"},
    {"id": "rule_C11", "cards": ["C10", "C08"], "result": "인류의 희생과 가이아의 뒤틀린 논리를 연결하자, 가이아의 광기가 명확해집니다.", "unlock": "C11"},
    {"id": "rule_C12", "cards": ["C11", "C03"], "result": "가이아의 광기와 탐사팀의 절박함을 연결하자, 가이아를 멈추는 것이 유일한 생존 방법임을 깨닫습니다.", "unlock": "C12"}
  ],
  "fragments": [],
  "winCondition": "C12",
  "initialCards": ["C01", "C02", "C03"]
}