
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


export const case3Ch4: GameScenario = {
  "id": "orient_express_chapter4",
  "title": "챕터 4: 복수의 오케스트라와 최후의 심판",
  "story": "모든 진실이 밝혀진 헤이스팅스 경은 용의자들을 한자리에 모아 최종 추리를 펼친다. 각자의 역할과 동기가 드러나면서, 이것이 단순한 살인이 아닌 정의로운 복수였음이 밝혀진다. 헤이스팅스 경은 법과 정의 사이에서 어려운 선택을 해야 한다.",
  "victim": "알렉산더 볼코프",
  "suspects": [
    {
      "id": "D01",
      "name": "헤이스팅스 경의 최종 추리",
      "role": "수사관",
      "description": "모든 퍼즐 조각이 맞춰지며, 이 사건의 진정한 의미를 깨닫는다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D04",
      "name": "골드버그의 고백",
      "role": "용의자",
      "description": "자신이 정교한 밀실 트릭 장치를 만든 기계공이었음을 담담히 인정한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D05",
      "name": "엘레나의 진실",
      "role": "용의자",
      "description": "가문의 몰락과 굴욕에 대한 복수심을 고백하며, 볼코프의 마지막 순간을 지켜보고 싶었다고 말한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D06",
      "name": "마리아의 배신",
      "role": "용의자",
      "description": "오랫동안 볼코프를 섬겼지만, 그의 진짜 모습을 알고 있었기에 수면제를 준비했음을 고백한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D07",
      "name": "슈미트의 복수",
      "role": "용의자",
      "description": "볼코프의 금융 스캔들로 가족이 파산하고 아버지가 자살했다며, 정당한 복수였다고 주장한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D08",
      "name": "스미스의 정의",
      "role": "용의자",
      "description": "아들을 잃은 아버지로서, 그리고 정의를 수호하는 군인으로서 마지막 심판을 내렸다고 말한다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "D02",
      "name": "복수의 오케스트라",
      "description": "이 살인이 여러 명의 공범에 의한 계획된 복수극임을 밝힌다.",
      "details": "각자의 원한이 모여 하나의 거대한 복수극을 완성했다.",
      "location": ""
    },
    {
      "id": "D03",
      "name": "정의의 기계",
      "description": "단검 손잡이의 톱니바퀴 문양이 상징하는 바를 설명한다.",
      "details": "이 살인이 단순한 범죄가 아닌, 계획된 심판임을 암시한다.",
      "location": ""
    },
    {
      "id": "D09",
      "name": "밀실 트릭의 전모",
      "description": "금속 섬유 실과 도르래 장치를 이용한 밀실 탈출 방법이 완벽하게 설명된다.",
      "details": "사무엘 골드버그가 이 장치를 만들었다.",
      "location": ""
    },
    {
      "id": "D10",
      "name": "볼코프의 공포",
      "description": "죽기 직전 잠에서 깨어나 자신을 둘러싼 복수자들의 얼굴을 보았기 때문임을 밝힌다.",
      "details": "수면제 투여 후에도 공포를 느낀 이유.",
      "location": ""
    },
    {
      "id": "D11",
      "name": "법의 한계",
      "description": "모든 용의자가 공범이고 동기가 있어 법의 심판이 어렵다는 결론에 도달한다.",
      "details": "헤이스팅스 경은 진실을 알았지만, 법적인 처벌은 불가능하다.",
      "location": ""
    },
    {
      "id": "D12",
      "name": "헤이스팅스 경의 선택",
      "description": "진실을 양심에 맡기고, 열차는 파리로 향한다.",
      "details": "정의는 때로 법의 테두리를 벗어나 집행되기도 한다.",
      "location": ""
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_D04", "cards": ["D01", "D02"], "result": "헤이스팅스 경의 최종 추리와 복수의 오케스트라를 통해 골드버그가 밀실 트릭 장치를 만들었음을 고백합니다.", "unlock": "D04"},
    {"id": "rule_D05", "cards": ["D02", "D04"], "result": "복수의 오케스트라와 골드버그의 고백을 통해 엘레나 백작부인의 진실한 동기가 드러납니다.", "unlock": "D05"},
    {"id": "rule_D06", "cards": ["D03", "D05"], "result": "정의의 기계와 엘레나의 진실을 통해 마리아 이바노바의 배신이 밝혀집니다.", "unlock": "D06"},
    {"id": "rule_D07", "cards": ["D04", "D06"], "result": "골드버그의 고백과 마리아의 배신을 통해 닥터 슈미트의 복수심이 드러납니다.", "unlock": "D07"},
    {"id": "rule_D08", "cards": ["D05", "D07"], "result": "엘레나의 진실과 슈미트의 복수를 통해 스미스 대령의 정의가 밝혀집니다.", "unlock": "D08"},
    {"id": "rule_D09", "cards": ["D06", "D08"], "result": "마리아의 배신과 스미스의 정의를 통해 밀실 트릭의 전모가 완벽하게 설명됩니다.", "unlock": "D09"},
    {"id": "rule_D10", "cards": ["D07", "D09"], "result": "슈미트의 복수와 밀실 트릭의 전모를 통해 볼코프가 죽기 직전 복수자들의 얼굴을 보았음을 밝힙니다.", "unlock": "D10"},
    {"id": "rule_D11", "cards": ["D08", "D10"], "result": "스미스의 정의와 볼코프의 공포를 통해 법의 심판이 어려운 상황임을 깨닫습니다.", "unlock": "D11"},
    {"id": "rule_D12", "cards": ["D09", "D11"], "result": "밀실 트릭의 전모와 법의 한계를 통해 헤이스팅스 경이 최종 선택을 내립니다.", "unlock": "D12"}
  ],
  "fragments": [],
  "winCondition": "D12",
  "initialCards": ["D01", "D02", "D03"]
}
