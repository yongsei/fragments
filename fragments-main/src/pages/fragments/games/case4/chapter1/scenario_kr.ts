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


export const case4Ch1: GameScenario = {
  "id": "arcanum_shadows_chapter1",
  "title": "챕터 1: 밀실의 역설과 사라진 심장",
  "story": "마법과 기술이 공존하는 도시 아르카눔. 완벽한 밀실에서 마법 공학자 스톤위크가 살해당하고 심장이 사라졌다. 빅터 크로우는 현장을 조사하고 용의자들을 심문하며 첫 단서들을 확보한다.",
  "victim": "엘리야 스톤위크",
  "suspects": [
    {
      "id": "A01",
      "name": "빅터 크로우",
      "role": "탐정",
      "description": "마법에 회의적인 냉철한 인간 탐정. 논리와 과학을 신봉한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A10",
      "name": "엘프 마법사 아엘렌 실버우드",
      "role": "용의자",
      "description": "스톤위크의 오랜 경쟁자이자, 고대 엘프 마법 길드의 수장.",
      "alibi": "사건 시각 자신의 마법 탑에서 명상 중이었다고 주장.",
      "motive": "스톤위크의 마법 공학 연구가 고대 마법의 순수성을 더럽힌다고 비난."
    },
    {
      "id": "A11",
      "name": "드워프 기술자 그림록 스틸해머",
      "role": "용의자",
      "description": "스톤위크의 전 동료이자, 아르카눔 지하 범죄 조직 '검은 망치'의 수장.",
      "alibi": "사건 시각 지하 작업장에서 새로운 발명품을 만들고 있었다고 주장.",
      "motive": "스톤위크의 기술을 탐냈으며, 최근 큰 거래를 앞두고 있었다."
    },
    {
      "id": "A12",
      "name": "인간 학자 릴리아나 베인",
      "role": "용의자",
      "description": "아르카눔 역사 기록 보관소의 수석 학자. 스톤위크의 연구 방식에 대해 윤리적인 문제를 제기해 왔다.",
      "alibi": "사건 시각 아르카눔 역사 기록 보관소에서 고대 문헌을 연구하고 있었다고 주장.",
      "motive": "스톤위크가 연구하던 고대 유물에 대한 정보."
    },
    {
      "id": "A13",
      "name": "오크 용병 그록 블러드액스",
      "role": "용의자",
      "description": "스톤위크의 개인 경호원. 과거 스톤위크에게 가족을 잃은 아픈 과거를 가지고 있다.",
      "alibi": "사건 발생 시각 탑 외부 경비를 담당하고 있었다고 주장.",
      "motive": "과거의 원한."
    },
    {
      "id": "A14",
      "name": "하프엘프 조수 카이렌 나이트쉐이드",
      "role": "용의자",
      "description": "스톤위크의 가장 가까운 조수. 스톤위크의 모든 연구와 비밀을 알고 있다.",
      "alibi": "사건 발생 시각 연구실 바로 옆 자신의 방에 있었다고 주장.",
      "motive": "스톤위크의 위험한 연구."
    }
  ],
  "evidence": [
    {
      "id": "A02",
      "name": "엘리야 스톤위크의 시신",
      "description": "마법 지팡이에 심장이 꿰뚫린 채 발견된 시신.",
      "details": "가슴에서 심장이 감쪽같이 사라져 있었다.",
      "location": "A03"
    },
    {
      "id": "A04",
      "name": "사라진 심장",
      "description": "스톤위크의 가슴에서 감쪽같이 사라진 심장.",
      "details": "마치 누군가 정교한 마법으로 심장만을 도려낸 듯한 흔적.",
      "location": "A02"
    },
    {
      "id": "A05",
      "name": "마법 지팡이의 균열",
      "description": "스톤위크의 지팡이 끝에 난 미세한 균열.",
      "details": "과도한 마법 에너지를 사용한 듯한 흔적.",
      "location": "A02"
    },
    {
      "id": "A06",
      "name": "희미하게 빛나는 수정 조각",
      "description": "시신 옆에서 발견된, 마법의 잔향이 느껴지는 작은 수정 파편.",
      "details": "정교하게 가공된 마법 증폭 장치의 파편.",
      "location": "A02"
    },
    {
      "id": "A07",
      "name": "낡은 가죽 주머니",
      "description": "스톤위크의 손에 꽉 쥐여 있던 작은 주머니.",
      "details": "말라붙은 붉은 꽃잎과 알 수 없는 문양의 은화가 들어 있다.",
      "location": "A02"
    },
    {
      "id": "A08",
      "name": "말라붙은 붉은 꽃잎",
      "description": "주머니 안에서 발견된, 아르카눔에서는 자라지 않는 희귀한 꽃잎.",
      "details": "'피의 장미'라 불리는 희귀한 마법 식물. 고대 엘프 마법에서 생명 에너지를 흡수하는 의식에 사용된다.",
      "location": "A07"
    },
    {
      "id": "A09",
      "name": "알 수 없는 문양의 은화",
      "description": "주머니 안에서 발견된, 고대 드워프 문양이 새겨진 은화.",
      "details": "'심장 파괴자' 문양. 드워프 전설에서 심장을 파괴하는 데 사용된 무기를 상징한다.",
      "location": "A07"
    },
    {
      "id": "A15",
      "name": "용의자들의 알리바이",
      "description": "5명의 용의자들이 사건 시각에 대해 진술한 내용.",
      "details": "모두 완벽해 보이지만, 어딘가 석연치 않다.",
      "location": ""
    },
    {
      "id": "A16",
      "name": "마법 방어막의 완벽함",
      "description": "연구실의 마법 방어막이 외부 침입을 완벽하게 막아냈음을 확인.",
      "details": "밀실 살인의 역설을 증명한다.",
      "location": "A03"
    },
    {
      "id": "A17",
      "name": "물리적 잠금장치의 무결성",
      "description": "연구실 문과 창문의 물리적 잠금장치에 훼손 흔적이 없음.",
      "details": "외부 침입이 불가능함을 증명한다.",
      "location": "A03"
    },
    {
      "id": "A18",
      "name": "밀실의 역설",
      "description": "외부 침입이 불가능한 완벽한 밀실에서 살인이 발생했다는 모순.",
      "details": "범인은 열차 안에 있다.",
      "location": "A03"
    }
  ],
  "locations": [
    {
      "id": "A03",
      "name": "아르카눔 타워 연구실",
      "description": "스톤위크가 살해당한, 마법 방어막으로 봉쇄된 밀실.",
      "details": "창문은 마법으로 강화된 강철로 되어 있었고, 문은 마법 인장과 생체 인식으로 잠겨 있었다."
    }
  ],
  "connectionRules": [
    {"id": "rule_A04", "cards": ["A02", "A03"], "result": "스톤위크의 시신과 연구실을 조사하자, 그의 가슴에서 심장이 사라졌음을 발견합니다.", "unlock": "A04"},
    {"id": "rule_A05", "cards": ["A02", "A04"], "result": "스톤위크의 시신과 사라진 심장을 통해, 마법 지팡이 끝에 난 미세한 균열을 발견합니다.", "unlock": "A05"},
    {"id": "rule_A06", "cards": ["A02", "A05"], "result": "스톤위크의 시신과 마법 지팡이의 균열을 통해, 시신 옆에서 희미하게 빛나는 수정 조각을 발견합니다.", "unlock": "A06"},
    {"id": "rule_A07", "cards": ["A02", "A04"], "result": "스톤위크의 시신과 사라진 심장을 통해, 그의 손에 꽉 쥐여 있던 낡은 가죽 주머니를 발견합니다.", "unlock": "A07"},
    {"id": "rule_A08", "cards": ["A07", "A06"], "result": "낡은 가죽 주머니와 수정 조각을 통해, 주머니 안에서 말라붙은 붉은 꽃잎을 발견합니다.", "unlock": "A08"},
    {"id": "rule_A09", "cards": ["A07", "A06"], "result": "낡은 가죽 주머니와 수정 조각을 통해, 주머니 안에서 알 수 없는 문양의 은화를 발견합니다.", "unlock": "A09"},
    {"id": "rule_A15", "cards": ["A10", "A11"], "result": "엘프 마법사 아엘렌 실버우드와 드워프 기술자 그림록 스틸해머를 심문하여, 용의자들의 알리바이를 확보합니다.", "unlock": "A15"},
    {"id": "rule_A16", "cards": ["A03", "A05"], "result": "아르카눔 타워 연구실과 마법 지팡이의 균열을 통해, 마법 방어막이 완벽했음을 확인합니다.", "unlock": "A16"},
    {"id": "rule_A17", "cards": ["A03", "A06"], "result": "아르카눔 타워 연구실과 수정 조각을 통해, 물리적 잠금장치에 훼손 흔적이 없음을 확인합니다.", "unlock": "A17"},
    {"id": "rule_A18", "cards": ["A16", "A17"], "result": "마법 방어막과 물리적 잠금장치의 무결성을 통해, 완벽한 밀실에서 살인이 발생했다는 역설을 파악합니다.", "unlock": "A18"}
  ],
  "fragments": [],
  "winCondition": "A18",
  "initialCards": ["A01", "A02", "A03"]
}
