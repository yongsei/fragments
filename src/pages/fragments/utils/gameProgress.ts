// 게임 진행 상태 저장 및 로드 유틸리티

export interface GameProgressData {
  caseId: string;
  hintsUsed: number;
  connections: Array<{
    cards: string[];
    result: string;
    timestamp: number;
    isCorrect: boolean;
  }>;
  discoveredCardIds: string[];
  totalDiscoveredCards: number; // 실제 발견한 카드 수 (안전한 카운트)
  elapsedTime: number;
  playerProgress: {
    totalConnections: number;
    correctConnections: number;
    wrongConnections: number;
    hintsUsed: number;
    timeSpent: number;
    phase: number;
  };
  timestamp: number;
  isCompleted: boolean;
}

// 쿠키 만료 시간 (7일)
const COOKIE_EXPIRY_DAYS = 7;

// 쿠키 이름 생성
const getCookieName = (caseId: string): string => {
  return `fragments_progress_${caseId}`;
};

// 쿠키 저장
export const saveGameProgress = (progressData: GameProgressData): void => {
  try {
    const cookieName = getCookieName(progressData.caseId);
    const dataString = JSON.stringify(progressData);
    
    // 만료 날짜 설정
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + COOKIE_EXPIRY_DAYS);
    
    // 쿠키 저장
    document.cookie = `${cookieName}=${encodeURIComponent(dataString)}; expires=${expiryDate.toUTCString()}; path=/fragments; SameSite=Lax`;
    
    console.log(`게임 진행 상태 저장됨 (케이스: ${progressData.caseId})`);
  } catch (error) {
    console.error('게임 진행 상태 저장 실패:', error);
  }
};

// 쿠키 로드
export const loadGameProgress = (caseId: string): GameProgressData | null => {
  try {
    const cookieName = getCookieName(caseId);
    const cookies = document.cookie.split(';');
    
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === cookieName) {
        const decodedValue = decodeURIComponent(value);
        const progressData = JSON.parse(decodedValue) as GameProgressData;
        
        // 타임스탬프 검증 (7일이 지났으면 무시)
        const now = Date.now();
        const daysDiff = (now - progressData.timestamp) / (1000 * 60 * 60 * 24);
        
        if (daysDiff > COOKIE_EXPIRY_DAYS) {
          console.log(`만료된 진행 상태 데이터 (케이스: ${caseId})`);
          clearGameProgress(caseId);
          return null;
        }
        
        console.log(`게임 진행 상태 로드됨 (케이스: ${caseId})`);
        return progressData;
      }
    }
    
    return null;
  } catch (error) {
    console.error('게임 진행 상태 로드 실패:', error);
    return null;
  }
};

// 특정 케이스의 진행 상태 삭제
export const clearGameProgress = (caseId: string): void => {
  try {
    const cookieName = getCookieName(caseId);
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/fragments;`;
    console.log(`게임 진행 상태 삭제됨 (케이스: ${caseId})`);
  } catch (error) {
    console.error('게임 진행 상태 삭제 실패:', error);
  }
};

// 모든 케이스의 진행 상태 삭제
export const clearAllGameProgress = (): void => {
  try {
    const cookies = document.cookie.split(';');
    
    for (let cookie of cookies) {
      const [name] = cookie.trim().split('=');
      if (name.startsWith('fragments_progress_')) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/fragments;`;
      }
    }
    
    console.log('모든 게임 진행 상태 삭제됨');
  } catch (error) {
    console.error('모든 게임 진행 상태 삭제 실패:', error);
  }
};

// 진행 상태가 있는지 확인
export const hasGameProgress = (caseId: string): boolean => {
  const progress = loadGameProgress(caseId);
  return progress !== null && !progress.isCompleted;
};

// localStorage 백업 저장 (쿠키 실패 시 대안)
export const saveGameProgressToLocalStorage = (progressData: GameProgressData): void => {
  try {
    const key = `fragments_progress_${progressData.caseId}`;
    localStorage.setItem(key, JSON.stringify(progressData));
  } catch (error) {
    console.error('localStorage 저장 실패:', error);
  }
};

// localStorage에서 백업 로드
export const loadGameProgressFromLocalStorage = (caseId: string): GameProgressData | null => {
  try {
    const key = `fragments_progress_${caseId}`;
    const data = localStorage.getItem(key);
    
    if (data) {
      const progressData = JSON.parse(data) as GameProgressData;
      
      // 타임스탬프 검증
      const now = Date.now();
      const daysDiff = (now - progressData.timestamp) / (1000 * 60 * 60 * 24);
      
      if (daysDiff > COOKIE_EXPIRY_DAYS) {
        localStorage.removeItem(key);
        return null;
      }
      
      return progressData;
    }
    
    return null;
  } catch (error) {
    console.error('localStorage 로드 실패:', error);
    return null;
  }
};