export interface CombinationFeedback {
  cards: string[];           // 카드 조합 (정확히 2개)
  proximity: 'close' | 'partial' | 'none';  // 정답과의 근접도
  messages: string[];        // 힌트 메시지 (정확히 3개)
}

export interface CaseFeedbackData {
  caseId: string;           // 케이스 고유 식별자
  correctSuspect: string;   // 정답 용의자 ID
  keyEvidence: string[];    // 핵심 증거 ID 배열
  combinationFeedback: CombinationFeedback[];  // 카드 조합별 피드백
  urgentHints: string[];    // 긴급 힌트 (4-6개 권장)
  contextualHints: string[]; // 상황별 힌트 (5-7개 권장)
}
