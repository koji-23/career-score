import { Question } from '../../types';
import { categoryNames } from '../../data/questions';

interface QuestionCardProps {
  question: Question;
  onAnswer: (optionIndex: number) => void;
  onBack?: () => void;
}

export default function QuestionCard({ question, onAnswer, onBack }: QuestionCardProps) {
  const categoryName = categoryNames[question.category];

  return (
    <div className="card animate-fadeInUp">
      <div className="mb-6">
        <span className="inline-block px-4 py-1 bg-orange/10 text-orange rounded-full text-sm font-semibold mb-4">
          {categoryName}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full text-left p-5 bg-gray-50 hover:bg-orange/5 hover:border-orange border-2 border-transparent rounded-xl transition-all duration-200 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-gray-600">{index + 1}</span>
              </div>
              <span className="text-lg text-gray-800 font-medium">{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      {onBack && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-navy font-semibold transition-colors flex items-center gap-2"
          >
            <span>←</span>
            <span>前の質問に戻る</span>
          </button>
        </div>
      )}
    </div>
  );
}
