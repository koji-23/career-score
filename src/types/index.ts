export interface Question {
  id: number;
  category: 'market_value' | 'preparation' | 'activity' | 'environment';
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface Answer {
  questionId: number;
  selectedIndex: number;
  score: number;
}

export interface CategoryScore {
  market_value: number;
  preparation: number;
  activity: number;
  environment: number;
}

export interface DiagnosisResult {
  totalScore: number;
  successRate: number;
  rank: 'S' | 'A' | 'B' | 'C' | 'D';
  categoryScores: CategoryScore;
  weakestCategory: keyof CategoryScore;
  strengths: string[];
  weaknesses: string[];
}

export type AppScreen = 'landing' | 'quiz' | 'result';
