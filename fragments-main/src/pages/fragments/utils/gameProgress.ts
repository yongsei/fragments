// 게임 진행 상태 저장 및 로드 유틸리티
import { Capacitor } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';

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

// 챕터 완료 상태 인터페이스
export interface ChapterCompletionData {
  caseId: string;
  chapter: number;
  isCompleted: boolean;
  completedAt: number;
}

// 쿠키 만료 시간 (7일)
const COOKIE_EXPIRY_DAYS = 7;

// 쿠키 이름 생성
const getCookieName = (caseId: string): string => {
  return `fragments_progress_${caseId}`;
};

// 게임 진행 상태 저장 (Capacitor Storage 또는 localStorage 사용)
export const saveGameProgress = async (progressData: GameProgressData): Promise<void> => {
  try {
    const key = getCookieName(progressData.caseId);
    const dataString = JSON.stringify(progressData);
    
    if (Capacitor.isNativePlatform()) {
      // 네이티브 앱에서는 Capacitor Preferences 사용
      await Preferences.set({
        key: key,
        value: dataString
      });
    } else {
      // 웹에서는 기존 쿠키 방식 사용
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + COOKIE_EXPIRY_DAYS);
      
      document.cookie = `${key}=${encodeURIComponent(dataString)}; expires=${expiryDate.toUTCString()}; path=/fragments; SameSite=Lax`;
      
      // localStorage 백업도 저장
      localStorage.setItem(key, dataString);
    }
  } catch (error) {
    console.error('게임 진행 상태 저장 실패:', error);
  }
};

// 게임 진행 상태 로드 (Capacitor Storage 또는 localStorage/쿠키 사용)
export const loadGameProgress = async (caseId: string): Promise<GameProgressData | null> => {
  try {
    const key = getCookieName(caseId);
    let dataString: string | null = null;
    
    if (Capacitor.isNativePlatform()) {
      // 네이티브 앱에서는 Capacitor Preferences 사용
      const result = await Preferences.get({ key });
      dataString = result.value;
      console.log(`게임 진행 상태 로드 시도 (네이티브 - 케이스: ${caseId})`);
    } else {
      // 웹에서는 쿠키 우선, localStorage 백업
      const cookies = document.cookie.split(';');
      
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === key) {
          dataString = decodeURIComponent(value);
          break;
        }
      }
      
      // 쿠키에 없으면 localStorage에서 시도
      if (!dataString) {
        dataString = localStorage.getItem(key);
      }
      
      console.log(`게임 진행 상태 로드 시도 (웹 - 케이스: ${caseId})`);
    }
    
    if (dataString) {
      const progressData = JSON.parse(dataString) as GameProgressData;
      
      // 타임스탬프 검증 (7일이 지났으면 무시)
      const now = Date.now();
      const daysDiff = (now - progressData.timestamp) / (1000 * 60 * 60 * 24);
      
      if (daysDiff > COOKIE_EXPIRY_DAYS) {
        console.log(`만료된 진행 상태 데이터 (케이스: ${caseId})`);
        await clearGameProgress(caseId);
        return null;
      }
      
      console.log(`게임 진행 상태 로드됨 (케이스: ${caseId})`);
      return progressData;
    }
    
    return null;
  } catch (error) {
    console.error('게임 진행 상태 로드 실패:', error);
    return null;
  }
};

// 특정 케이스의 진행 상태 삭제
export const clearGameProgress = async (caseId: string): Promise<void> => {
  try {
    const key = getCookieName(caseId);
    
    if (Capacitor.isNativePlatform()) {
      // 네이티브 앱에서는 Capacitor Preferences에서 삭제
      await Preferences.remove({ key });
      console.log(`게임 진행 상태 삭제됨 (네이티브 - 케이스: ${caseId})`);
    } else {
      // 웹에서는 쿠키와 localStorage 모두 삭제
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/fragments;`;
      localStorage.removeItem(key);
      console.log(`게임 진행 상태 삭제됨 (웹 - 케이스: ${caseId})`);
    }
  } catch (error) {
    console.error('게임 진행 상태 삭제 실패:', error);
  }
};

// 모든 케이스의 진행 상태 삭제
export const clearAllGameProgress = async (): Promise<void> => {
  try {
    if (Capacitor.isNativePlatform()) {
      // 네이티브 앱에서는 Capacitor Preferences의 모든 키를 확인하고 삭제
      const keys = await Preferences.keys();
      const fragmentsKeys = keys.keys.filter(key => key.startsWith('fragments_progress_'));
      
      for (const key of fragmentsKeys) {
        await Preferences.remove({ key });
      }
      
      console.log('모든 게임 진행 상태 삭제됨 (네이티브)');
    } else {
      // 웹에서는 쿠키와 localStorage 모두 삭제
      const cookies = document.cookie.split(';');
      
      for (let cookie of cookies) {
        const [name] = cookie.trim().split('=');
        if (name.startsWith('fragments_progress_')) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/fragments;`;
        }
      }
      
      // localStorage에서도 삭제
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && key.startsWith('fragments_progress_')) {
          localStorage.removeItem(key);
        }
      }
      
      console.log('모든 게임 진행 상태 삭제됨 (웹)');
    }
  } catch (error) {
    console.error('모든 게임 진행 상태 삭제 실패:', error);
  }
};

// 진행 상태가 있는지 확인
export const hasGameProgress = async (caseId: string): Promise<boolean> => {
  const progress = await loadGameProgress(caseId);
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

// 챕터 완료 상태 저장
export const saveChapterCompletion = async (caseId: string, chapter: number): Promise<void> => {
  try {
    const key = `fragments_chapter_${caseId}_${chapter}`;
    const completionData: ChapterCompletionData = {
      caseId,
      chapter,
      isCompleted: true,
      completedAt: Date.now()
    };
    
    const dataString = JSON.stringify(completionData);
    
    if (Capacitor.isNativePlatform()) {
      await Preferences.set({
        key: key,
        value: dataString
      });
      console.log(`챕터 완료 상태 저장됨 (네이티브 - 케이스: ${caseId}, 챕터: ${chapter})`);
    } else {
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1); // 1년 저장
      
      document.cookie = `${key}=${encodeURIComponent(dataString)}; expires=${expiryDate.toUTCString()}; path=/fragments; SameSite=Lax`;
      localStorage.setItem(key, dataString);
      console.log(`챕터 완료 상태 저장됨 (웹 - 케이스: ${caseId}, 챕터: ${chapter})`);
    }
  } catch (error) {
    console.error('챕터 완료 상태 저장 실패:', error);
  }
};

// 챕터 완료 상태 확인
export const isChapterCompleted = async (caseId: string, chapter: number): Promise<boolean> => {
  try {
    const key = `fragments_chapter_${caseId}_${chapter}`;
    let dataString: string | null = null;
    
    if (Capacitor.isNativePlatform()) {
      const result = await Preferences.get({ key });
      dataString = result.value;
    } else {
      // 쿠키에서 확인
      const cookies = document.cookie.split(';');
      
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === key) {
          dataString = decodeURIComponent(value);
          break;
        }
      }
      
      // 쿠키에 없으면 localStorage에서 확인
      if (!dataString) {
        dataString = localStorage.getItem(key);
      }
    }
    
    if (dataString) {
      const completionData = JSON.parse(dataString) as ChapterCompletionData;
      return completionData.isCompleted;
    }
    
    return false;
  } catch (error) {
    console.error('챕터 완료 상태 확인 실패:', error);
    return false;
  }
};

// 특정 케이스의 완료된 챕터 목록 조회
export const getCompletedChapters = async (caseId: string): Promise<number[]> => {
  try {
    const completedChapters: number[] = [];
    
    if (Capacitor.isNativePlatform()) {
      const keys = await Preferences.keys();
      const chapterKeys = keys.keys.filter(key => key.startsWith(`fragments_chapter_${caseId}_`));
      
      for (const key of chapterKeys) {
        const result = await Preferences.get({ key });
        if (result.value) {
          const completionData = JSON.parse(result.value) as ChapterCompletionData;
          if (completionData.isCompleted) {
            completedChapters.push(completionData.chapter);
          }
        }
      }
    } else {
      // 쿠키에서 확인
      const cookies = document.cookie.split(';');
      
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name.startsWith(`fragments_chapter_${caseId}_`)) {
          try {
            const completionData = JSON.parse(decodeURIComponent(value)) as ChapterCompletionData;
            if (completionData.isCompleted) {
              completedChapters.push(completionData.chapter);
            }
          } catch (e) {
            // 잘못된 데이터는 무시
          }
        }
      }
      
      // localStorage에서도 확인 (추가 보장)
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(`fragments_chapter_${caseId}_`)) {
          try {
            const data = localStorage.getItem(key);
            if (data) {
              const completionData = JSON.parse(data) as ChapterCompletionData;
              if (completionData.isCompleted && !completedChapters.includes(completionData.chapter)) {
                completedChapters.push(completionData.chapter);
              }
            }
          } catch (e) {
            // 잘못된 데이터는 무시
          }
        }
      }
    }
    
    return completedChapters.sort((a, b) => a - b);
  } catch (error) {
    console.error('완료된 챕터 목록 조회 실패:', error);
    return [];
  }
};