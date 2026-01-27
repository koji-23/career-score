import { Answer, CategoryScore, DiagnosisResult } from '../types';
import { questions, categoryNames } from '../data/questions';

export function calculateScore(answers: Answer[]): DiagnosisResult {
  // カテゴリ別スコアを計算
  const categoryScores: CategoryScore = {
    market_value: 0,
    preparation: 0,
    activity: 0,
    environment: 0,
  };

  const categoryCounts = {
    market_value: 0,
    preparation: 0,
    activity: 0,
    environment: 0,
  };

  answers.forEach((answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    if (question) {
      categoryScores[question.category] += answer.score;
      categoryCounts[question.category]++;
    }
  });

  // 各カテゴリの平均スコアを計算（100点満点）
  Object.keys(categoryScores).forEach((category) => {
    const key = category as keyof CategoryScore;
    if (categoryCounts[key] > 0) {
      categoryScores[key] = Math.round(categoryScores[key] / categoryCounts[key]);
    }
  });

  // 総合スコアを計算（各カテゴリの平均）
  const totalScore = Math.round(
    (categoryScores.market_value +
      categoryScores.preparation +
      categoryScores.activity +
      categoryScores.environment) /
      4
  );

  // 成功確率を計算（スコアに基づく）
  const successRate = Math.min(Math.round(totalScore * 0.95), 95);

  // ランクを決定
  let rank: 'S' | 'A' | 'B' | 'C' | 'D';
  if (successRate >= 80) rank = 'S';
  else if (successRate >= 65) rank = 'A';
  else if (successRate >= 50) rank = 'B';
  else if (successRate >= 35) rank = 'C';
  else rank = 'D';

  // 最も弱いカテゴリを特定
  const weakestCategory = Object.entries(categoryScores).reduce(
    (min, [key, value]) =>
      value < categoryScores[min as keyof CategoryScore] ? key : min,
    'market_value'
  ) as keyof CategoryScore;

  // 強みと弱みを特定
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  Object.entries(categoryScores).forEach(([key, value]) => {
    const categoryKey = key as keyof CategoryScore;
    const categoryName = categoryNames[categoryKey];
    if (value >= 80) {
      strengths.push(categoryName);
    } else if (value < 65) {
      weaknesses.push(categoryName);
    }
  });

  return {
    totalScore,
    successRate,
    rank,
    categoryScores,
    weakestCategory,
    strengths,
    weaknesses,
  };
}

export function getRankMessage(rank: 'S' | 'A' | 'B' | 'C' | 'D'): {
  title: string;
  description: string;
  advice: string;
} {
  const messages = {
    S: {
      title: '素晴らしい！あなたは準備万端です',
      description:
        '市場価値が高く、企業から求められる人材です。準備も活動も高品質で、今すぐ動けば理想の転職が実現可能です。',
      advice:
        'プロのエージェントと組むことで、非公開求人へのアクセスが可能になり、年収交渉で平均80万円UPが期待できます。選考通過率も1.8倍に向上します。',
    },
    A: {
      title: 'あと一歩で成功圏内です',
      description:
        '基本的な準備はできており、市場価値も十分です。いくつかのポイントを改善すれば、Sランクへの到達も可能です。',
      advice:
        '弱点を補強することで+15%の成功確率UPが見込めます。無料相談で具体的な改善策をお伝えします。',
    },
    B: {
      title: 'このままでは厳しい、戦略が必要です',
      description:
        '応募しても書類で落ちやすく、面接で苦戦する可能性が高い状態です。時間とエネルギーの無駄になるリスクがあります。',
      advice:
        '正しい準備と戦略により、3ヶ月でA→Sランクに上がった実績が多数あります。無料相談で最短ルートをご提案します。',
    },
    C: {
      title: '危険信号！今のまま進むのはNG',
      description:
        '書類選考通過率10%以下で、面接でも苦戦が確実です。半年以上かかる可能性が大きく、メンタル面での負担も心配されます。',
      advice:
        'Cランク→Aランクに上げた実績が多数あります。正しい準備と戦略で大逆転可能です。無料相談で抜本的な見直しをしましょう。',
    },
    D: {
      title: '今すぐ軌道修正が必要です',
      description:
        'このまま進んでも採用される確率は極めて低く、時間とお金の浪費になる可能性が高い状態です。',
      advice:
        'まずは無料相談で現状分析から始めましょう。何が足りないのか、どこから手をつけるべきか、プロと一緒に0からやり直すことで道が開けます。',
    },
  };

  return messages[rank];
}

export function getActionPlan(
  weakestCategory: keyof CategoryScore,
  categoryScores: CategoryScore
): string[] {
  const plans: Record<keyof CategoryScore, string[]> = {
    market_value: [
      '専門性を高める資格取得を検討',
      'マネジメント経験をアピールポイントに',
      '業界動向を把握し、市場価値を客観視',
    ],
    preparation: [
      '職務経歴書を具体的数字で強化（売上120%達成など）',
      '面接頻出質問10個の回答を準備',
      '志望業界の企業研究を3社分実施',
    ],
    activity: [
      '週3-5社のペースで応募を継続',
      '企業ごとに志望動機をカスタマイズ',
      '面接後は必ず振り返りを実施',
    ],
    environment: [
      '転職活動の時間を週に10時間確保',
      'キャリアビジョンを明確化（5年後の姿）',
      '転職経験者やプロに相談できる環境を作る',
    ],
  };

  return plans[weakestCategory];
}
