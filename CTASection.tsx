import { DiagnosisResult } from '../../types';

interface CTASectionProps {
  result: DiagnosisResult;
}

export default function CTASection({ result }: CTASectionProps) {
  const calendarUrl = 'https://calendar.app.google/sXdCjkKLLJgEYUK97';

  const handleReservation = () => {
    window.open(calendarUrl, '_blank');
  };

  return (
    <div className="gradient-bg text-white rounded-xl p-8 shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          あなた専用の戦略を
          <br />
          30分無料相談で作成します
        </h2>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-2">✅</div>
              <p className="font-semibold">診断結果の詳細解説</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-2">🎯</div>
              <p className="font-semibold">課題を解決する具体策</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-2">🤝</div>
              <p className="font-semibold">最適な人材紹介会社のご紹介</p>
            </div>
          </div>

          <button
            onClick={handleReservation}
            className="btn-primary text-xl px-12 py-6 shadow-2xl"
          >
            今すぐ予約する（完全無料）
          </button>

          <p className="text-sm text-gray-200 mt-6">
            ※予約画面の「詳細」欄に診断結果
            <br />
            （スコア: {result.totalScore}点 / ランク: {result.rank}）
            <br />
            をご記入ください
          </p>
        </div>

        <div className="border-t border-white/20 pt-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">相談後の流れ</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-bold mb-2">STEP 1</div>
              <p>診断結果を基に<br />課題を明確化</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-bold mb-2">STEP 2</div>
              <p>あなたに最適な<br />人材紹介会社をご紹介</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-bold mb-2">STEP 3</div>
              <p>プロのサポートで<br />転職成功へ</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-300 max-w-2xl mx-auto">
          <p className="mb-2">
            ご予約いただいた情報は、相談対応および
            <strong className="text-white">人材紹介会社への情報共有</strong>
            のみに使用します。
          </p>
          <a href="/privacy" className="text-orange hover:text-orange-light underline transition">
            プライバシーポリシー
          </a>
        </div>
      </div>
    </div>
  );
}
