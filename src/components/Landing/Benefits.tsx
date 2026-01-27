export default function Benefits() {
  const benefits = [
    {
      icon: '📊',
      title: '客観的な現在地が分かる',
      description:
        '「なんとなく」で転職活動していませんか？自分の市場価値を数値で把握し、何が足りないか明確化できます。',
    },
    {
      icon: '⚠️',
      title: '失敗パターンを回避できる',
      description:
        '毎年何万人もが転職で失敗しています。このアプリは失敗の「早期警告システム」として機能します。',
    },
    {
      icon: '📈',
      title: '成功者のデータに基づく診断',
      description:
        '転職成功者1万人以上のデータ分析に基づき、統計的に証明された成功パターンをご提示します。',
    },
    {
      icon: '⏱️',
      title: '時間とお金の節約',
      description:
        '診断で正しい方向性が分かれば、無駄な応募をせず、効率的に準備できます。最短で内定獲得が可能に。',
    },
    {
      icon: '💪',
      title: 'メンタル面のサポート',
      description:
        '「このままで大丈夫か」という不安を解消。今の状態が適切か分かり、次に何をすべきか明確になります。',
    },
    {
      icon: '🎯',
      title: 'あなた専用の戦略',
      description:
        '一般論ではなく、あなたの年齢・経験・状況に合わせた戦略を無料相談でご提案します。',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            このアプリを使う6つのメリット
          </h2>
          <p className="text-xl text-gray-600">
            転職活動を成功に導くための強力なツール
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
