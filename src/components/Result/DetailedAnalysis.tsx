import { DiagnosisResult } from '../../types';
import { getRankMessage, getActionPlan } from '../../lib/scoring';
import { categoryNames } from '../../data/questions';

interface DetailedAnalysisProps {
  result: DiagnosisResult;
}

export default function DetailedAnalysis({ result }: DetailedAnalysisProps) {
  const rankMessage = getRankMessage(result.rank);
  const actionPlan = getActionPlan(result.weakestCategory, result.categoryScores);
  const weakestCategoryName = categoryNames[result.weakestCategory];

  return (
    <div className="space-y-6">
      {/* ランク別メッセージ */}
      <div className="card">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-4xl">
            {result.rank === 'S' && '🎉'}
            {result.rank === 'A' && '👍'}
            {result.rank === 'B' && '⚠️'}
            {result.rank === 'C' && '🚨'}
            {result.rank === 'D' && '❌'}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-navy mb-3">{rankMessage.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{rankMessage.description}</p>
            <div className="bg-orange/10 border-l-4 border-orange p-4 rounded">
              <p className="text-gray-800 font-medium">{rankMessage.advice}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 最大の課題 */}
      <div className="card">
        <h2 className="text-2xl font-bold text-navy mb-4">最大の課題</h2>
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <p className="text-lg font-semibold text-red-900 mb-3">
            「{weakestCategoryName}」が平均を下回っています
          </p>
          <p className="text-gray-700 mb-4">
            特に以下の点の改善が必要です:
          </p>
          <ul className="space-y-2">
            {result.weaknesses.map((weakness, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-800">
                <span className="text-red-500">❌</span>
                <span>{weakness}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 今すぐできる改善アクション */}
      <div className="card">
        <h2 className="text-2xl font-bold text-navy mb-4">今すぐできる改善アクション</h2>
        <div className="space-y-3">
          {actionPlan.map((action, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-xl"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <p className="text-gray-800 font-medium pt-1">{action}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl text-center">
          <p className="text-blue-900 font-semibold text-lg">
            これらを実行すると <span className="text-2xl text-blue-600">+15%</span> UP可能！
          </p>
        </div>
      </div>

      {/* あなたと似た人の成功パターン */}
      <div className="card bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
        <h2 className="text-2xl font-bold text-navy mb-4">
          あなたと似た人の成功パターン
        </h2>
        <div className="bg-white rounded-xl p-6">
          <div className="mb-4">
            <p className="text-gray-700 font-semibold">
              {result.rank === 'S' && '同じSランクの方々'}
              {result.rank === 'A' && 'Aランクから更に上を目指した方'}
              {result.rank === 'B' && 'Bランクから大きく飛躍した方'}
              {result.rank === 'C' && 'Cランクから逆転成功した方'}
              {result.rank === 'D' && 'Dランクから這い上がった方'}
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <p className="text-gray-700">
                初期確率: {Math.max(result.successRate - 25, 30)}% → 最終: {Math.min(result.successRate + 25, 95)}%
              </p>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <p className="font-semibold text-navy mb-2">成功の3ステップ:</p>
              <ol className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="font-semibold">1.</span>
                  <span>職務経歴書をプロが添削</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">2.</span>
                  <span>業界特化エージェントを活用</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">3.</span>
                  <span>月10社ペースで戦略的に応募</span>
                </li>
              </ol>
            </div>
            <div className="border-t border-gray-200 pt-3 bg-green-50 -mx-6 -mb-6 px-6 py-4 rounded-b-xl">
              <p className="font-semibold text-green-900 mb-1">結果: 3ヶ月で希望企業に内定</p>
              <p className="text-green-800">
                年収: {result.categoryScores.market_value >= 80 ? '600万→800万' : '450万→600万'}にUP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
