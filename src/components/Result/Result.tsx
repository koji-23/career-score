import { DiagnosisResult } from '../../types';
import ScoreDisplay from './ScoreDisplay';
import RadarChart from './RadarChart';
import DetailedAnalysis from './DetailedAnalysis';
import CTASection from './CTASection';
import ShareButton from './ShareButton';

interface ResultProps {
  result: DiagnosisResult;
  onRestart: () => void;
}

export default function Result({ result, onRestart }: ResultProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* スコア表示 */}
        <ScoreDisplay result={result} />

        {/* シェアボタン */}
        <div className="mt-8">
          <ShareButton result={result} />
        </div>

        {/* レーダーチャート */}
        <div className="mt-8">
          <RadarChart categoryScores={result.categoryScores} />
        </div>

        {/* 詳細分析 */}
        <div className="mt-8">
          <DetailedAnalysis result={result} />
        </div>

        {/* CTA（相談予約） */}
        <div className="mt-12">
          <CTASection result={result} />
        </div>

        {/* もう一度診断 */}
        <div className="mt-12 text-center">
          <button
            onClick={onRestart}
            className="btn-secondary"
          >
            もう一度診断する
          </button>
        </div>
      </div>
    </div>
  );
}
