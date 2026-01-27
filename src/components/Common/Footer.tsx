export default function Footer() {
  return (
    <footer className="bg-navy text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-bold text-lg mb-3">キャリアスコア診断</h3>
            <p className="text-sm text-gray-300">
              あなたの転職成功確率を診断し、
              <br />
              最適な戦略をご提案します
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">サービス</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>無料診断</li>
              <li>無料相談（30分）</li>
              <li>人材紹介会社のご紹介</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">リンク</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <a href="/privacy" className="hover:text-orange transition">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-orange transition">
                  利用規約
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          <p>© 2025 CareerScore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
