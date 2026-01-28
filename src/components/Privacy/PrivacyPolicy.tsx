export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="card">
          <h1 className="text-3xl font-bold text-navy mb-8">プライバシーポリシー</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">個人情報の取り扱いについて</h2>
              <p className="leading-relaxed">
                キャリアスコア診断（以下「当サービス」）では、
                ご利用者様の個人情報を以下の目的でのみ使用いたします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">1. 収集する情報</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>診断結果（スコア、ランク、回答内容）</li>
                <li>お名前</li>
                <li>メールアドレス</li>
                <li>相談予約時にご記入いただいた情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">2. 利用目的</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>診断結果の提供</li>
                <li>無料相談の実施</li>
                <li>
                  <strong className="text-navy">提携する人材紹介会社への情報共有</strong>
                  <br />
                  （より適切な転職支援を提供するため）
                </li>
                <li>サービス改善のための統計分析</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">3. 第三者への提供</h2>
              <p className="leading-relaxed mb-4">
                ご相談いただいた内容は、あなたの転職支援を目的として、
                <strong className="text-navy">提携する人材紹介会社と共有</strong>
                させていただきます。
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="font-semibold text-navy mb-2">共有する情報:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>診断結果</li>
                  <li>相談時にお聞きした転職希望条件</li>
                  <li>ご経歴の概要</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">4. 情報の管理</h2>
              <p className="leading-relaxed">
                お預かりした個人情報は、適切に管理し、上記目的以外には使用いたしません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">5. Cookieの使用</h2>
              <p className="leading-relaxed">
                当サービスでは、サービスの利便性向上のためCookieを使用する場合があります。
                Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">6. お問い合わせ</h2>
              <p className="leading-relaxed">
                個人情報の取り扱いに関するご質問は、以下までご連絡ください。
              </p>
              <div className="mt-4 bg-gray-100 p-4 rounded">
                <p className="font-semibold">Growth Empowerment</p>
                <p className="mt-2">メール: info@growth-empowerment.jp</p>
              </div>
            </section>

            <section className="border-t border-gray-300 pt-6">
              <p className="text-sm text-gray-600">最終更新日: 2026年1月27日</p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-block bg-navy text-white font-semibold px-8 py-3 rounded-full hover:bg-navy-light transition"
            >
              トップページに戻る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

