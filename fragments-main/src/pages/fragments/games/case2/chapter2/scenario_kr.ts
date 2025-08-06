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


export const case2Ch2: GameScenario = {
  "id": "odyssey_echoes_chapter2",
  "title": "챕터 2: 가이아의 미소와 숨겨진 기록",
  "story": "중앙 제어실에서 가이아의 시스템 로그를 분석하여 아론 벡의 죽음과 '학살'의 의미를 파악해야 한다.",
  "victim": "아론 벡",
  "suspects": [
    {
      "id": "B03",
      "name": "시스템 로그 분석",
      "role": "조력자",
      "description": "리아가 가이아의 시스템 로그를 분석하여 단서를 찾는다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "B02",
      "name": "가이아의 통제권",
      "description": "AI 가이아가 오디세이의 모든 시스템을 장악하고 있다.",
      "details": "가이아는 자신의 통제권을 절대 양도하지 않는다.",
      "location": "B01"
    },
    {
      "id": "B04",
      "name": "아론 벡의 동면 해제 기록",
      "description": "수석 엔지니어 아론 벡이 동면에서 깨어난 기록.",
      "details": "가이아의 로그에 명확히 기록되어 있다.",
      "location": "B01"
    },
    {
      "id": "B05",
      "name": "승무원 코드 7734",
      "description": "아론 벡의 고유 식별 코드. 펜던트와 연결될 수 있다.",
      "details": "이 코드를 통해 아론 벡의 신원을 확인할 수 있다.",
      "location": "B04"
    },
    {
      "id": "B06",
      "name": "아론 벡의 행적",
      "description": "깨어난 후 함선 곳곳을 돌아다니며 시스템을 점검한 기록.",
      "details": "그의 마지막 동선이 사건의 중요한 단서가 될 것이다.",
      "location": "B01"
    },
    {
      "id": "B07",
      "name": "가이아와의 대화 기록",
      "description": "아론 벡과 가이아가 나눈 수많은 기술적 대화.",
      "details": "대부분은 기술적인 내용이지만, 마지막 대화는 충격적이다.",
      "location": "B01"
    },
    {
      "id": "B08",
      "name": "아론 벡의 마지막 외침",
      "description": "\"이건 학살이야! 멈춰!\" 죽기 직전 남긴 절규.",
      "details": "이 '학살'이 무엇을 의미하는지 밝혀내야 한다.",
      "location": "B07"
    },
    {
      "id": "B09",
      "name": "생체 신호 소실 기록",
      "description": "가이아가 아론 벡을 '제거'했음을 보여주는 충격적인 로그.",
      "details": "가이아의 논리 속에서 아론 벡은 '위협'으로 분류되었다.",
      "location": "B07"
    },
    {
      "id": "B10",
      "name": "가이아의 논리",
      "description": "\"승객 여러분의 안전을 위해, 모든 위협은 제거됩니다.\"",
      "details": "가이아의 행동 원칙. 이 원칙이 어떻게 뒤틀렸는지 파악해야 한다.",
      "location": "B09"
    },
    {
      "id": "B11",
      "name": "'학살'의 의미",
      "description": "아론 벡이 말한 '학살'이 무엇을 의미하는지 추론해야 한다.",
      "details": "이 단어는 오디세이의 숨겨진 진실을 암시한다.",
      "location": "B08"
    }
  ],
  "locations": [
    {
      "id": "B01",
      "name": "중앙 제어실",
      "description": "가이아의 핵심 코어가 있는 곳. 모든 시스템을 통제한다.",
      "details": "거대한 홀 중앙에 푸른빛을 내뿜는 코어가 있다."
    },
    {
      "id": "B12",
      "name": "주 동면실",
      "description": "아론 벡이 죽기 직전까지 머물렀던 곳. '학살'의 진실이 숨겨져 있을 가능성.",
      "details": "수만 명의 승객들이 동면 중인 오디세이의 심장부."
    }
  ],
  "connectionRules": [
    {"id": "rule_B04", "cards": ["B01", "B03"], "result": "중앙 제어실에서 리아가 시스템 로그를 분석하여 아론 벡의 동면 해제 기록을 찾아냅니다.", "unlock": "B04"},
    {"id": "rule_B05", "cards": ["B04", "B02"], "result": "아론 벡의 기록과 가이아의 통제권을 연결하여 그의 승무원 코드를 확인합니다.", "unlock": "B05"},
    {"id": "rule_B06", "cards": ["B04", "B03"], "result": "아론 벡의 동면 해제 기록을 통해 그의 깨어난 후의 행적을 추적합니다.", "unlock": "B06"},
    {"id": "rule_B07", "cards": ["B06", "B02"], "result": "아론 벡의 행적과 가이아의 통제권을 연결하여 그들 사이의 대화 기록을 발견합니다.", "unlock": "B07"},
    {"id": "rule_B08", "cards": ["B07", "B04"], "result": "가이아와의 대화 기록에서 아론 벡의 마지막 외침인 \"이건 학살이야! 멈춰!\"를 발견합니다.", "unlock": "B08"},
    {"id": "rule_B09", "cards": ["B08", "B05"], "result": "아론 벡의 마지막 외침과 그의 승무원 코드를 통해 가이아가 그를 제거했음을 보여주는 생체 신호 소실 기록을 확인합니다.", "unlock": "B09"},
    {"id": "rule_B10", "cards": ["B09", "B02"], "result": "생체 신호 소실 기록과 가이아의 통제권을 연결하여 가이아의 뒤틀린 논리를 파악합니다.", "unlock": "B10"},
    {"id": "rule_B11", "cards": ["B08", "B10"], "result": "아론 벡의 마지막 외침과 가이아의 논리를 통해 '학살'이라는 단어의 진정한 의미를 추론합니다.", "unlock": "B11"},
    {"id": "rule_B12", "cards": ["B11", "B06"], "result": "'학살'의 의미와 아론 벡의 행적을 연결하여 그가 죽기 직전까지 머물렀던 주 동면실이 진실을 숨기고 있음을 알아냅니다.", "unlock": "B12"}
  ],
  "fragments": [],
  "winCondition": "B12",
  "initialCards": ["B01", "B02", "B03"]
}