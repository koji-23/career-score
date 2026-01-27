import { useState } from 'react';
import { Answer, DiagnosisResult } from '../../types';
import { questions } from '../../data/questions';
import { calculateScore } from '../../lib/scoring';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';

interface QuizFlowProps {
  onComplete: (answers: Answer[], result: DiagnosisResult) => void;
}

export default function QuizFlow({ onComplete }: QuizFlowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    const score = currentQuestion.options[optionIndex].score;
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      selectedIndex: optionIndex,
      score,
    };

    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // 診断完了
      setIsCalculating(true);
      
      // 演出のために少し待つ
      setTimeout(() => {
        const result = calculateScore(newAnswers);
        onComplete(newAnswers, result);
      }, 1500);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  if (isCalculating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="text-center text-white animate-fadeInUp">
          <div className="mb-8">
            <div className="inline-block w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4">診断結果を計算中...</h2>
          <p className="text-xl text-gray-200">
            あなたの転職成功確率を分析しています
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <ProgressBar progress={progress} current={currentIndex + 1} total={questions.length} />
        
        <div className="mt-8">
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            onBack={currentIndex > 0 ? handleBack : undefined}
          />
        </div>
      </div>
    </div>
  );
}
