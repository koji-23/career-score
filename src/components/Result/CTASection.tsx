interface CTASectionProps {
  score: number;
  marketValue: number;
  preparation: number;
  activityQuality: number;
}

export default function CTASection({ score, marketValue, preparation, activityQuality }: CTASectionProps) {
  const getRecommendation = () => {
    if (score >= 75) {
      return {
        title: "今すぐ行動を起こしましょう！",
        items: [
          "市場価値が高い今がチャンス - 積極的に求人に応募",
          "準備も整っているので、面接の予定を組みましょう",
          "活動の質を維持しながら、理想の企業を探しましょう"
        ]
      };
    } else if (score >= 50) {
      return {
        title: "準備を整えて転職を成功させましょう",
        items: [
          marketValue < 70 && "スキルアップや実績作りで市場価値を高めましょう",
          preparation < 70 && "職務経歴書や面接対策の準備を進めましょう",
          activityQuality < 70 && "企業研究を深め、質の高い応募を心がけましょう"
        ].filter(Boolean)
      };
    } else {
      return {
        title: "焦らず、着実に準備を進めましょう",
        items: [
          "まずは現職でのスキルアップに注力",
          "転職市場や求人情報のリサーチを始めましょう",
          "職務経歴書の作成や自己分析から始めてみましょう"
        ]
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="gradient-bg text-white rounded-xl p-8 shadow-lg">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">{recommendation.title}</h3>
        <div className="space-y-3 mb-6">
          {recommendation.items.map((item, index) => (
            <div key={index} className="flex items-start">
              <span className="text-orange mr-2">✓</span>
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-sm mb-4">
            💡 診断結果をもとに、あなた専用の戦略をご提案します。
            <br />
            無料相談（30分）で、次のステップを一緒に考えましょう。
          </p>
          <button className="bg-orange hover:bg-orange-dark text-white font-bold py-3 px-8 rounded-lg transition-colors">
            無料相談を予約する
          </button>
        </div>
      </div>
    </div>
  );
}
