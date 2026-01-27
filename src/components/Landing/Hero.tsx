interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            あなたの転職成功確率は
            <br />
            <span className="text-orange">何パーセント？</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            25問の質問で、転職の成功確率を数値化
            <br />
            市場価値・準備度・活動品質を徹底分析
          </p>
          <button onClick={onStart} className="btn-primary text-xl px-12 py-5">
            無料で診断を始める
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="text-5xl font-bold text-orange mb-2">3分</div>
            <div className="text-lg">診断完了</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="text-5xl font-bold text-orange mb-2">25問</div>
            <div className="text-lg">詳細分析</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="text-5xl font-bold text-orange mb-2">100%</div>
            <div className="text-lg">完全無料</div>
          </div>
        </div>
      </div>
    </section>
  );
}
