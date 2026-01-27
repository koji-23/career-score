import { useEffect, useState } from 'react';
import { DiagnosisResult } from '../../types';

interface ScoreDisplayProps {
  result: DiagnosisResult;
}

export default function ScoreDisplay({ result }: ScoreDisplayProps) {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    // カウントアップアニメーション
    let current = 0;
    const increment = result.successRate / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= result.successRate) {
        setDisplayScore(result.successRate);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [result.successRate]);

  const getRankStars = (rank: string) => {
    const stars = {
      S: '★★★★★',
      A: '★★★★☆',
      B: '★★★☆☆',
      C: '★★☆☆☆',
      D: '★☆☆☆☆',
    };
    return stars[rank as keyof typeof stars] || '☆☆☆☆☆';
  };

  return (
    <div className="card text-center animate-fadeInUp">
      <h1 className="text-2xl md:text-3xl font-bold text-navy mb-8">
        あなたの転職成功確率
      </h1>

      <div className="mb-6">
        <div className="score-display animate-countUp">
          {displayScore}%
        </div>
        <div className="text-3xl text-orange mt-2">{getRankStars(result.rank)}</div>
      </div>

      <div className={`rank-badge rank-${result.rank} inline-block`}>
        {result.rank}ランク
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold text-navy">{result.categoryScores.market_value}</div>
            <div className="text-sm text-gray-600 mt-1">市場価値</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy">{result.categoryScores.preparation}</div>
            <div className="text-sm text-gray-600 mt-1">準備度</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy">{result.categoryScores.activity}</div>
            <div className="text-sm text-gray-600 mt-1">活動品質</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy">{result.categoryScores.environment}</div>
            <div className="text-sm text-gray-600 mt-1">環境</div>
          </div>
        </div>
      </div>
    </div>
  );
}
