export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: '25問の診断に回答',
      description: '市場価値、準備度、活動品質、環境の4カテゴリから質問に答えるだけ。所要時間わずか3分。',
    },
    {
      number: '2',
      title: 'スコアとランクを確認',
      description: '総合スコアと成功確率が数値で表示されます。S〜Dの5段階ランクで評価。',
    },
    {
      number: '3',
      title: '詳細分析を確認',
      description: 'あなたの強み・弱み、最優先で改善すべきポイントを具体的にご提示。',
    },
    {
      number: '4',
      title: '無料相談を予約',
      description: '30分の無料相談で、あなた専用の転職戦略と最適な人材紹介会社をご紹介。',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            診断の流れ
          </h2>
          <p className="text-xl text-gray-600">
            4ステップで転職成功への道筋が見えてきます
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-orange to-orange-light rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-4 text-4xl text-orange">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-orange/10 border-2 border-orange rounded-2xl p-6">
            <p className="text-lg text-navy font-semibold">
              💡 診断結果はいつでも見直せます。まずは気軽に試してみてください！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
