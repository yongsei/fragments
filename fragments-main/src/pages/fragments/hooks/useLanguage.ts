import { useState, createContext, useContext } from 'react';

// 지원 언어 타입
export type SupportedLanguage = 'kr' | 'en';

// 언어 컨텍스트 타입
interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, fallback?: string) => string;
}

// 기본 UI 텍스트 번역
const translations = {
  kr: {
    // 네비게이션
    backButton: '돌아가기',
    hint: '힌트',
    caseSummary: '사건개요',
    
    // 게임 UI
    selectTwoCards: '단서 2개를 선택해주세요',
    connectCards: '🔗 단서 연결하기',
    clearSelection: '🗑️ 초기화',
    connecting: '🔄 연결 중...',
    caseResolved: '🎯 사건 해결!',
    
    // 카테고리
    all: '전체',
    suspects: '용의자',
    evidence: '증거',
    locations: '장소',
    newDiscovered: '새로 발견',
    
    // 게임 통계
    totalConnections: '총 연결 완료',
    attempts: '총 시도 횟수',
    hintsUsed: '사용한 힌트',
    timeSpent: '소요 시간',
    
    // 메시지
    allHintsUsed: '힌트 모두 사용됨',
    requestHint: '💡 힌트 요청',
    gameCompleted: '축하합니다! 사건의 진실을 밝혀냈습니다!',
    noConnectionHistory: '아직 연결을 시도하지 않았습니다.',
    
    // 시간 단위
    minutes: '분',
    seconds: '초',
    times: '회',
    
    // 게임 결과
    restartGame: '🔄 다시 도전하기',
    returnToMenu: '🏠 메뉴로 돌아가기',
    gameStatistics: '📊 게임 통계',
    connections: '번의 연결',
    
    // 공통
    close: '×',
    loading: '로딩 중...',
    
    // 게임 메시지들
    almostThere: '이 단서들은 연관성이 있어 보입니다만... 뭔가 부족합니다.',
    veryClose: '매우 가까워졌습니다! 하지만 완전한 연결이 되려면 다른 조합이 필요해 보입니다.',
    keyClueFound: '이 조합에서 핵심적인 단서를 발견했습니다... 하지만 완전하지 않네요.',
    notConnected: '이 조합은 아직 연결되지 않습니다. 다른 관점에서 접근해보세요.',
    noNewClue: '이 조합으로는 새로운 단서를 발견할 수 없습니다.',
    noConnection: '단서들 사이의 연관성을 찾지 못했습니다. 다른 조합을 시도해보세요.',
    alreadyChecked: '이미 확인한 조합입니다. 새로운 단서는 없습니다.',
    
    // 힌트 메시지들
    hintTwoCards: '힌트: "{0}"와(과) "{1}" 카드를 함께 조합해보세요!',
    hintThreeCards: '힌트: "{0}", "{1}", "{2}" 카드를 함께 조합해보세요!',
    hintMultipleCards: '힌트: {0} 카드들을 함께 조합해보세요!',
    
    // 일반 힌트들
    tryDifferentCombos: '현재 가진 카드들을 다양하게 조합해보세요.',
    connectSameLocation: '같은 장소나 관련된 증거들을 함께 선택해보세요.',
    connectSuspectEvidence: '용의자와 관련된 증거들을 연결해보세요.',
    connectLocationEvidence: '장소와 그곳에서 발견된 증거들을 조합해보세요.',
    
    allCardsFound: '이미 모든 카드가 발견되었습니다!',
    
    // Advanced game messages
    autoHint5Failures: '💡 5번 실패 자동 힌트: "{0}" 카드들이 선택되었습니다. 조합 버튼을 눌러보세요!',
    hintPrefix: '힌트: {0}',
    answerHint: '💡 정답 힌트: 이 카드들을 조합해보세요! ({0}개 카드가 선택됨)',
    generalHint: '💡 힌트: 발견된 카드들을 다양하게 조합해보세요. 특히 같은 장소나 관련된 증거들을 함께 선택해보세요!',
    
    // UI texts
    startGame: '게임 시작하기',
    resumeGameWarning: "※ '아니오'를 선택하시면 저장된 데이터는 삭제됩니다.",
    truthRevealed: '의 진실을 밝혀냈습니다!',
    attempt: '번째',
    backToSelection: '← 케이스 선택으로 돌아가기',
    
    // MysteryIntroLayout additional texts
    gamePreviewText: '단서들을 조합하여 사건의 진실을 밝혀내세요!',
    savedGameExists: '이전에 저장된 내용이 있습니다',
    playTime: '⏱️ 플레이 시간',
    discoveredCards: '🃏 발견한 카드',
    cardsUnit: '개',
    continueQuestion: '계속 진행하시겠습니까?',
    yes: '✅ 예',
    no: '❌ 아니오',
    
    // Game statistics and UI texts
    gameResult: '게임 결과',
    congratulationsLong: '축하합니다! {0}의 진실을 밝혀냈습니다!',
    gameStatisticsTitle: '📊 게임 통계',
    connectionsCount: '번의 연결',
    backToMenu: '← 메뉴로 돌아가기',
    
    // Card related texts
    clueCards: '단서 카드',
    selectTwoCardsLong: '단서 2개를 선택해주세요',
    
    // Connection history
    connectionHistory: '📋 연결 기록',
    connectionHistoryCount: '📋 연결 기록 ({0}회)',
    noConnectionHistoryLong: '아직 연결을 시도하지 않았습니다.',
    hintLabel: ' 힌트',
    
    // Empty states
    noNewCluesFound: '새로 발견된 단서가 없습니다.',
    tryCombinantion: '단서를 조합하여 새로운 증거를 찾아보세요!',
    noCategoryClues: '이 카테고리에 표시할 단서가 없습니다.',
    
    // Advanced hint system messages
    hintProvided: '💡 힌트가 제공되었습니다. 위의 토스트 메시지를 확인하세요!'
  },
  en: {
    // Navigation
    backButton: 'Back',
    hint: 'Hint',
    caseSummary: 'Case Summary',
    
    // Game UI
    selectTwoCards: 'Please select 2 clues',
    connectCards: '🔗 Connect Clues',
    clearSelection: '🗑️ Clear',
    connecting: '🔄 Connecting...',
    caseResolved: '🎯 Case Solved!',
    
    // Categories
    all: 'All',
    suspects: 'Suspects',
    evidence: 'Evidence',
    locations: 'Locations',
    newDiscovered: 'Newly Found',
    
    // Game Statistics
    totalConnections: 'Total Connections',
    attempts: 'Total Attempts',
    hintsUsed: 'Hints Used',
    timeSpent: 'Time Spent',
    
    // Messages
    allHintsUsed: 'All hints used',
    requestHint: '💡 Request Hint',
    gameCompleted: 'Congratulations! You have solved the mystery!',
    noConnectionHistory: 'No connection attempts yet.',
    
    // Time units
    minutes: 'min',
    seconds: 'sec',
    times: 'times',
    
    // Game Results
    restartGame: '🔄 Try Again',
    returnToMenu: '🏠 Return to Menu',
    gameStatistics: '📊 Game Statistics',
    connections: ' connections',
    
    // Common
    close: '×',
    loading: 'Loading...',
    
    // Game messages
    almostThere: 'These clues seem related... but something is missing.',
    veryClose: 'Very close! But a different combination is needed for a complete connection.',
    keyClueFound: 'A key clue was found in this combination... but it\'s not complete.',
    notConnected: 'This combination is not connected yet. Try a different approach.',
    noNewClue: 'No new clues can be discovered with this combination.',
    noConnection: 'No connection found between these clues. Try a different combination.',
    alreadyChecked: 'This combination has already been checked. No new clues.',
    
    // Hint messages
    hintTwoCards: 'Hint: Try combining "{0}" and "{1}" cards together!',
    hintThreeCards: 'Hint: Try combining "{0}", "{1}", "{2}" cards together!',
    hintMultipleCards: 'Hint: Try combining {0} cards together!',
    
    // General hints
    tryDifferentCombos: 'Try various combinations with your current cards.',
    connectSameLocation: 'Try selecting clues from the same location or related evidence.',
    connectSuspectEvidence: 'Try connecting suspects with related evidence.',
    connectLocationEvidence: 'Try combining locations with evidence found there.',
    
    allCardsFound: 'All cards have already been discovered!',
    
    // Advanced game messages
    autoHint5Failures: '💡 Auto-hint for 5 failures: "{0}" cards have been selected. Try the combine button!',
    hintPrefix: 'Hint: {0}',
    answerHint: '💡 Answer hint: Try combining these cards! ({0} cards selected)',
    generalHint: '💡 Hint: Try various combinations with discovered cards. Especially try selecting clues from the same location or related evidence together!',
    
    // UI texts
    startGame: 'Start Game',
    resumeGameWarning: "※ If you select 'No', the saved data will be deleted.",
    truthRevealed: ' truth has been revealed!',
    attempt: 'th',
    backToSelection: '← Back to Case Selection',
    
    // MysteryIntroLayout additional texts
    gamePreviewText: 'Combine clues to uncover the truth of the case!',
    savedGameExists: 'Previous saved content exists',
    playTime: '⏱️ Play Time',
    discoveredCards: '🃏 Discovered Cards',
    cardsUnit: 'cards',
    continueQuestion: 'Would you like to continue?',
    yes: '✅ Yes',
    no: '❌ No',
    
    // Game statistics and UI texts
    gameResult: 'Game Result',
    congratulationsLong: 'Congratulations! You have uncovered the truth of {0}!',
    gameStatisticsTitle: '📊 Game Statistics',
    connectionsCount: ' connections',
    backToMenu: '← Back to Menu',
    
    // Card related texts
    clueCards: 'Clue Cards',
    selectTwoCardsLong: 'Please select 2 clues',
    
    // Connection history
    connectionHistory: '📋 Connection History',
    connectionHistoryCount: '📋 Connection History ({0} attempts)',
    noConnectionHistoryLong: 'No connection attempts yet.',
    hintLabel: ' Hint',
    
    // Empty states
    noNewCluesFound: 'No newly discovered clues.',
    tryCombinantion: 'Try combining clues to find new evidence!',
    noCategoryClues: 'No clues to display in this category.',
    
    // Advanced hint system messages
    hintProvided: '💡 Hint provided. Check the toast message above!'
  }
};

// 언어 컨텍스트 (실제 React Context는 컴포넌트에서 생성)
export const LanguageContext = createContext<LanguageContextType | null>(null);

// 언어 훅
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// 언어 훅 구현 (컴포넌트에서 사용)
export const useLanguageState = () => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    // localStorage에서 저장된 언어 설정 불러오기
    const saved = localStorage.getItem('fragments-language');
    return (saved as SupportedLanguage) || 'kr';
  });

  // 언어 변경 함수
  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('fragments-language', lang);
  };

  // 번역 함수
  const t = (key: string, fallback?: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    return translation || fallback || key;
  };

  return {
    language,
    setLanguage,
    t
  };
};

export default useLanguage;