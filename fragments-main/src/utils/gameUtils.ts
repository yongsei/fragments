// Fisher-Yates Shuffle Algorithm
export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Time formatting utilities
export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}분 ${remainingSeconds}초`;
}

export function formatTimeMs(milliseconds: number): string {
  const seconds = Math.floor(milliseconds / 1000);
  return formatTime(seconds);
}

// Accuracy calculation
export function calculateAccuracy(hits: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((hits / total) * 100);
}

// Local storage utilities
export function saveToStorage(key: string, data: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
}

export function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Failed to load from localStorage:', error);
    return defaultValue;
  }
}

// Performance message generator
export function getPerformanceMessage(accuracy: number): {
  icon: string;
  message: string;
  className: string;
} {
  if (accuracy >= 90) {
    return {
      icon: '🏆',
      message: '완벽해요! 수학 천재!',
      className: 'excellent'
    };
  } else if (accuracy >= 70) {
    return {
      icon: '🎉',
      message: '훌륭해요! 잘했어요!',
      className: 'good'
    };
  } else if (accuracy >= 50) {
    return {
      icon: '👍',
      message: '괜찮아요! 조금만 더!',
      className: 'okay'
    };
  } else {
    return {
      icon: '💪',
      message: '다시 도전해보세요!',
      className: 'retry'
    };
  }
}

// Random number generators
export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomElement<T>(array: T[]): T {
  return array[getRandomInt(0, array.length - 1)];
}

// Keyboard layout utilities
export const KEYBOARD_LAYOUT = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

export function getValidKeys(): string[] {
  return KEYBOARD_LAYOUT.flat();
}

export function isValidKey(key: string): boolean {
  return getValidKeys().includes(key.toLowerCase());
}