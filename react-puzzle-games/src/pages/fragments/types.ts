// 단서의 파편 (Fragment of Mystery) 게임 타입 정의

export interface Card {
  id: string;
  name: string;
  type: 'suspect' | 'evidence' | 'location' | 'temporal_fragment' | 'fragment' | 'clue';
  description: string;
  details?: string;
  hints?: string[];
  connections?: string[];
  discovered: boolean;
  isNew?: boolean; // 새로 발견된 카드 표시용
}

export interface Connection {
  id: string;
  cards: string[];
  verified?: boolean;
  result: string;
  unlock?: string;
  timestamp: number;
  isHint?: boolean; // 힌트로 제공된 연결인지 여부
  hintMessage?: string; // 힌트 메시지 내용
}