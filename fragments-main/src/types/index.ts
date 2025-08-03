// Game Types
export interface GameStats {
  correctAnswers: number;
  totalStages: number;
  timeSpent: number;
  accuracy: number;
  timestamp: string;
  difficulty: string;
  gameMode: string;
}

export interface KeyboardGameStats extends GameStats {
  hits: number;
  misses: number;
  stageResults: StageResult[];
  inputMode: 'keyboard' | 'mouse' | 'both';
}

export interface StageResult {
  stage: number;
  timeSpent: number;
  hits: number;
  misses: number;
  accuracy: number;
}

export interface PuzzleGameStats extends GameStats {
  hintsUsed: number;
  solutionShown: boolean;
}

export interface GrapeGameStats extends GameStats {
  // Grape game specific stats
}

// Component Props
export interface GameCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  href: string;
  buttonText: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  type?: string;
  image?: string;
}

// Puzzle Game Types
export interface PuzzleCell {
  row: number;
  col: number;
  value: string;
  isCorrect?: boolean;
  isIncorrect?: boolean;
}

export interface PuzzleClue {
  id: number;
  text: string;
}

export interface PuzzleDifficulty {
  name: string;
  gridSize: number;
  categoryCount: number;
}

// Keyboard Game Types
export interface KeyboardMole {
  key: string;
  x: number;
  y: number;
  isActive: boolean;
  timeLeft: number;
}

export interface KeyboardLayout {
  rows: string[][];
}

// Grape Game Types
export interface GrapeCluster {
  numbers: number[];
  sum: number;
  color: string;
}

export interface GrapeGameQuestion {
  clusters: GrapeCluster[];
  correctAnswer: number;
  choices: number[];
  type: 'sum-to-number' | 'number-to-cluster';
}