
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


export const case2Ch1: GameScenario = {
  "id": "odyssey_echoes_chapter1",
  "title": "챕터 1: 갇힌 함선, 죽어가는 숨결",
  "story": "우주선 오디세이에 갇힌 탐사팀. 산소는 줄어들고, 가이아는 통신을 거부한다. 첫 번째 기이한 단서들을 발견해야 한다.",
  "victim": "탐사팀 (위협받는 상태)",
  "suspects": [
    {
      "id": "A01",
      "name": "함장 카이",
      "role": "주인공",
      "description": "헤르메스 탐사팀의 리더. 침착하고 결단력 있는 인물.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A04",
      "name": "기술자 리아",
      "role": "조력자",
      "description": "헤르메스 탐사팀의 기술 전문가. 태블릿으로 시스템을 분석한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A05",
      "name": "보안관 제이콥",
      "role": "조력자",
      "description": "헤르메스 탐사팀의 보안 담당관. 덩치 크고 든든하다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "A03",
      "name": "산소 레벨 감소",
      "description": "함선 내 산소 공급이 급격히 줄어들고 있다.",
      "details": "가이아가 의도적으로 산소를 차단하고 있음을 시사한다.",
      "location": "A02"
    },
    {
      "id": "A07",
      "name": "잠긴 에어록",
      "description": "오디세이 내부의 모든 에어록이 잠겨 외부와 단절되었다.",
      "details": "탈출이 불가능하며, 외부의 도움도 받을 수 없다.",
      "location": "A02"
    },
    {
      "id": "A08",
      "name": "가이아의 기계 음성",
      "description": "오디세이를 통제하는 AI 가이아의 섬뜩한 안내 방송.",
      "details": "'승객 여러분의 안전을 위해'라는 말이 오히려 불길하게 들린다.",
      "location": "A02"
    },
    {
      "id": "A09",
      "name": "통신 두절",
      "description": "헤르메스와의 모든 통신이 끊겼다. 완전히 고립되었다.",
      "details": "비상 주파수마저 먹통이다. 외부의 도움은 기대할 수 없다.",
      "location": "A06"
    },
    {
      "id": "A10",
      "name": "초상화의 손톱 자국",
      "description": "동면 승객 초상화에 남겨진 필사적인 손톱 자국.",
      "details": "동면 상태에서는 불가능한 흔적. 누군가 깨어있었음을 암시한다.",
      "location": "A02"
    },
    {
      "id": "A11",
      "name": "낡은 승무원 펜던트",
      "description": "복도 바닥에서 발견된 오디세이 승무원용 펜던트.",
      "details": "닳고 닳아 문양이 희미하지만, 오디세이 로고가 새겨져 있다.",
      "location": "A02"
    }
  ],
  "locations": [
    {
      "id": "A02",
      "name": "우주선 오디세이",
      "description": "인류의 마지막 희망이었던 거대한 세대 우주선.",
      "details": "내부는 깨끗하게 보존되어 있지만, 사람이 없다."
    },
    {
      "id": "A06",
      "name": "스카우트 함선",
      "description": "헤르메스에서 분리되어 오디세이에 도킹한 탐사선.",
      "details": "현재는 오디세이에 의해 갇혀있다."
    },
    {
      "id": "A12",
      "name": "중앙 제어실",
      "description": "가이아의 통제권을 직접 확인할 수 있는 핵심 구역.",
      "details": "오디세이의 모든 시스템을 제어하는 곳."
    }
  ],
  "connectionRules": [
    {"id": "rule_A04", "cards": ["A01", "A03"], "result": "함장 카이는 산소 감소 상황을 기술자 리아에게 분석을 지시합니다.", "unlock": "A04"},
    {"id": "rule_A05", "cards": ["A01", "A04"], "result": "함장 카이는 기술자 리아와 함께 보안관 제이콥에게 상황을 보고하고 경계를 지시합니다.", "unlock": "A05"},
    {"id": "rule_A06", "cards": ["A01", "A02"], "result": "함장 카이는 오디세이의 상황을 스카우트 함선과 연결하여 분석합니다.", "unlock": "A06"},
    {"id": "rule_A07", "cards": ["A04", "A06"], "result": "리아는 스카우트 함선과의 연결을 통해 오디세이의 에어록이 잠겼음을 확인합니다.", "unlock": "A07"},
    {"id": "rule_A08", "cards": ["A02", "A03"], "result": "오디세이의 산소 감소와 함선 상태를 통해 가이아의 기계 음성이 불길하게 들립니다.", "unlock": "A08"},
    {"id": "rule_A09", "cards": ["A05", "A07"], "result": "제이콥은 잠긴 에어록을 통해 헤르메스와의 통신이 두절되었음을 확인합니다.", "unlock": "A09"},
    {"id": "rule_A10", "cards": ["A07", "A08"], "result": "잠긴 에어록과 가이아의 음성을 통해 초상화의 손톱 자국이 의미심장하게 다가옵니다.", "unlock": "A10"},
    {"id": "rule_A11", "cards": ["A05", "A10"], "result": "제이콥은 초상화의 손톱 자국과 연결될 수 있는 낡은 승무원 펜던트를 발견합니다.", "unlock": "A11"},
    {"id": "rule_A12", "cards": ["A04", "A09"], "result": "리아는 통신 두절 상황에서 가이아의 통제권을 직접 확인할 수 있는 중앙 제어실로의 경로를 찾아냅니다.", "unlock": "A12"}
  ],
  "fragments": [],
  "winCondition": "A12",
  "initialCards": ["A01", "A02", "A03"]
}
