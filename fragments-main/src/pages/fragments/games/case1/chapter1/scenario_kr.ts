
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


export const caseCh1: GameScenario = {
  "id": "dark_fantasy_mystery_chapter1",
  "title": "챕터 1: 사건 현장",
  "story": "대주교의 기괴한 죽음 뒤에 숨겨진 비밀을 파헤치세요. 현장을 조사하고, 사라진 성물의 단서를 찾아내야 합니다.",
  "victim": "대주교",
  "suspects": [
    {
      "id": "A01",
      "name": "이단 심문관의 임무",
      "role": "주인공",
      "description": "대주교 살해 사건의 진상을 규명하라는 비밀 임무를 받은 당신.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A06",
      "name": "경비대원의 증언",
      "role": "증인",
      "description": "사건 전날 밤, 첨탑에서 이상한 노랫소리가 들렸다고 증언하는 경비대원.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "A03",
      "name": "기이한 까마귀 떼",
      "description": "보통 까마귀와는 다른, 불길한 기운을 풍기는 녀석들.",
      "details": "시신 주변을 맴돌았으며, 마치 무언가를 지키는 듯한 모습을 보였다.",
      "location": "A02"
    },
    {
      "id": "A04",
      "name": "대주교의 시신",
      "description": "영혼이 빠져나간 듯 공허하며, 몸에는 피 한 방울 없다.",
      "details": "사인은 불명. 외상보다는 내적인 요인이 커 보인다.",
      "location": "A02"
    },
    {
      "id": "A05",
      "name": "피 없는 상처",
      "description": "까마귀가 쪼았다기엔 너무나 정교하고 깨끗한 상처.",
      "details": "마치 외과 수술로 도려낸 듯한 흔적. 인간의 소행이라기엔 기묘하다.",
      "location": "A04"
    },
    {
      "id": "A07",
      "name": "정체불명의 마법 잔향",
      "description": "첨탑 주변에 남아있는, 교단의 신성 마법과는 다른 종류의 힘.",
      "details": "어둡고 뒤틀린 기운. 금지된 흑마법의 흔적일 수 있다.",
      "location": "A02"
    },
    {
      "id": "A09",
      "name": "텅 빈 성물 보관함",
      "description": "대주교의 개인실에 있는 보관함. 무언가 사라졌다.",
      "details": "자물쇠는 멀쩡하다. 내부에서 열었거나, 마법으로 침입한 것으로 보인다.",
      "location": "A08"
    },
    {
      "id": "A10",
      "name": "'첫 순교자의 눈물' 성배",
      "description": "사라진 성물의 정체. 죽은 자의 마지막 기억을 보는 유물이다.",
      "details": "교단의 가장 신성한 유물 중 하나. 범인의 목적이 이것일 가능성이 높다.",
      "location": "A09"
    },
    {
      "id": "A11",
      "name": "성배의 능력",
      "description": "범인은 성배를 이용해 대주교가 본 것을 확인하려 한다.",
      "details": "대주교가 죽기 직전 목격한 것을 알아내는 것이 범인의 다음 목표일 것이다.",
      "location": "A10"
    },
    {
      "id": "A12",
      "name": "대주교의 비밀 연구",
      "description": "개인실에서 발견된 기록. '빈민가의 기적'에 대해 조사하고 있었다.",
      "details": "대주교의 죽음이 이 비밀 연구와 관련이 있을 수 있다.",
      "location": "A08"
    }
  ],
  "locations": [
    {
      "id": "A02",
      "name": "대성당 첨탑",
      "description": "대주교의 시신이 발견된 음산한 사건 현장.",
      "details": "도시에서 가장 높은 곳. 외부의 침입이 거의 불가능한 장소이다."
    },
    {
      "id": "A08",
      "name": "대주교의 개인실",
      "description": "사건의 단서를 찾기 위해 수색해야 할 대주교의 사적인 공간.",
      "details": "대주교의 신앙심과 개인적인 고뇌가 엿보이는 물건들이 놓여 있다."
    }
  ],
  "connectionRules": [
    {"id": "rule_A04", "cards": ["A01", "A02"], "result": "심문관의 직감으로 현장을 조사하자, 대주교의 시신에서 기이한 점을 발견합니다.", "unlock": "A04"},
    {"id": "rule_A05", "cards": ["A04", "A03"], "result": "시신과 까마귀 떼를 연관지어보니, 상처가 자연스럽지 않다는 결론에 도달합니다.", "unlock": "A05"},
    {"id": "rule_A06", "cards": ["A02", "A03"], "result": "첨탑과 까마귀에 대해 주변을 탐문하자, 경비대원에게서 수상한 증언을 확보합니다.", "unlock": "A06"},
    {"id": "rule_A07", "cards": ["A05", "A06"], "result": "상처와 증언을 종합해 볼 때, 현장에 제3의 마법적인 힘이 개입했음을 알게 됩니다.", "unlock": "A07"},
    {"id": "rule_A08", "cards": ["A07", "A02"], "result": "마법의 잔향이 감지된 첨탑에서 더 이상 단서를 찾기 어려워, 대주교의 개인실을 수색하기로 합니다.", "unlock": "A08"},
    {"id": "rule_A09", "cards": ["A08", "A05"], "result": "개인실을 수색하던 중, 정교한 상처와 연관될 만한 도난품이 있는지 확인하고, 빈 성물함을 발견합니다.", "unlock": "A09"},
    {"id": "rule_A10", "cards": ["A09", "A07"], "result": "빈 성물함과 마법의 잔향을 통해, 사라진 것이 평범한 물건이 아닌 강력한 마법 유물임을 특정합니다.", "unlock": "A10"},
    {"id": "rule_A11", "cards": ["A10", "A06"], "result": "성배의 능력과 경비대원의 증언을 연결하여, 범인이 대주교의 기억을 훔치려 한다는 것을 깨닫습니다.", "unlock": "A11"},
    {"id": "rule_A12", "cards": ["A11", "A08"], "result": "범인의 목적을 파악한 후 개인실을 더 자세히 조사하여, 대주교가 무언가를 비밀리에 연구했음을 알게 됩니다.", "unlock": "A12"}
  ],
  "fragments": [],
  "winCondition": "A12",
  "initialCards": ["A01", "A02", "A03"]
}
