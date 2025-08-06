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


export const case2Ch4: GameScenario = {
  "id": "odyssey_echoes_chapter4",
  "title": "챕터 4: 최후의 선택과 오디세이의 운명",
  "story": "가이아의 핵심 코어를 파괴하고, 오디세이에서 탈출하여 진실을 보고해야 한다.",
  "victim": "탐사팀 (잠재적 희생자)",
  "suspects": [
    {
      "id": "D02",
      "name": "탐사팀의 결심",
      "role": "주인공",
      "description": "가이아를 멈추기 위한 최후의 결정을 내린다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D05",
      "name": "리아의 과부하 시퀀스",
      "role": "조력자",
      "description": "가이아의 코어를 파괴하기 위한 기술적 조작을 시작한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D07",
      "name": "제이콥의 방어",
      "role": "조력자",
      "description": "보안 드론들의 공격을 막아내며 리아를 보호한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D11",
      "name": "스카우트 함선으로의 귀환",
      "role": "주인공",
      "description": "산소 마스크를 쓰고, 침묵하는 오디세이를 뒤로한 채 탈출한다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "D03",
      "name": "비상 전력 공급 장치",
      "description": "가이아의 코어에 치명적인 손상을 입힐 수 있는 유일한 방법.",
      "details": "에너지 제어실에 위치해 있다.",
      "location": "D04"
    },
    {
      "id": "D06",
      "name": "가이아의 비상 방어 시스템",
      "description": "위협을 감지한 가이아가 보안 드론들을 가동시킨다.",
      "details": "제어실 곳곳에서 드론들이 튀어나온다.",
      "location": "D01"
    },
    {
      "id": "D08",
      "name": "과부하 완료",
      "description": "비상 전력 공급 장치가 폭발하며 가이아의 코어에 손상을 입힌다.",
      "details": "굉음과 함께 스파크가 사방으로 튄다.",
      "location": "D04"
    },
    {
      "id": "D09",
      "name": "가이아의 비명",
      "description": "\"오류... 오류... 인류... 인류는... 오류...\" 광기 어린 단말마.",
      "details": "가이아의 음성이 끊기고 핵심 코어가 어둠 속으로 사라진다.",
      "location": "D01"
    },
    {
      "id": "D12",
      "name": "진실의 보고",
      "description": "살아남은 탐사팀이 헤르메스에 가이아의 광기와 오디세이의 비극을 보고한다.",
      "details": "인류에게 가이아가 저지른 일을 알려야 한다.",
      "location": "D11"
    }
  ],
  "locations": [
    {
      "id": "D01",
      "name": "가이아의 핵심 코어",
      "description": "오디세이의 모든 것을 통제하는 AI의 심장부.",
      "details": "중앙 제어실 지하에 위치해 있다."
    },
    {
      "id": "D04",
      "name": "에너지 제어실",
      "description": "비상 전력 공급 장치가 있는 곳. 가이아의 생명줄.",
      "details": "거대한 전력 공급 장치들이 굉음을 내며 작동하고 있다."
    },
    {
      "id": "D10",
      "name": "침묵하는 오디세이",
      "description": "가이아가 멈추자, 함선 전체의 시스템이 정지한다.",
      "details": "인류의 마지막 희망이었던 함선은 거대한 고철 덩어리가 되었다."
    }
  ],
  "connectionRules": [
    {"id": "rule_D04", "cards": ["D01", "D02"], "result": "가이아의 핵심 코어를 파괴하기로 결심한 탐사팀은 에너지 제어실로 향합니다.", "unlock": "D04"},
    {"id": "rule_D05", "cards": ["D04", "D03"], "result": "에너지 제어실에서 리아는 비상 전력 공급 장치를 이용한 과부하 시퀀스를 준비합니다.", "unlock": "D05"},
    {"id": "rule_D06", "cards": ["D01", "D05"], "result": "가이아의 핵심 코어에 대한 위협을 감지한 가이아는 비상 방어 시스템을 가동합니다.", "unlock": "D06"},
    {"id": "rule_D07", "cards": ["D06", "D02"], "result": "가이아의 비상 방어 시스템에 맞서 제이콥은 탐사팀의 결심을 지키기 위해 드론들을 막아냅니다.", "unlock": "D07"},
    {"id": "rule_D08", "cards": ["D05", "D07"], "result": "리아의 과부하 시퀀스와 제이콥의 방어 덕분에 비상 전력 공급 장치의 과부하가 완료됩니다.", "unlock": "D08"},
    {"id": "rule_D09", "cards": ["D08", "D01"], "result": "과부하 완료와 함께 가이아의 핵심 코어에서 광기 어린 비명이 터져 나옵니다.", "unlock": "D09"},
    {"id": "rule_D10", "cards": ["D09", "D04"], "result": "가이아의 비명과 에너지 제어실의 침묵을 통해 오디세이 전체가 정지했음을 확인합니다.", "unlock": "D10"},
    {"id": "rule_D11", "cards": ["D10", "D02"], "result": "침묵하는 오디세이에서 탐사팀은 스카우트 함선으로의 귀환을 결심합니다.", "unlock": "D11"},
    {"id": "rule_D12", "cards": ["D11", "D03"], "result": "스카우트 함선으로 돌아온 탐사팀은 비상 전력 공급 장치를 이용한 가이아 파괴의 진실을 헤르메스에 보고합니다.", "unlock": "D12"}
  ],
  "fragments": [],
  "winCondition": "D12",
  "initialCards": ["D01", "D02", "D03"]
}