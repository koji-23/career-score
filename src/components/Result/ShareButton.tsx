import { DiagnosisResult } from '../../types';

interface ShareButtonProps {
  result: DiagnosisResult;
}

export default function ShareButton({ result }: ShareButtonProps) {
  const shareText = `私の転職成功確率は${result.successRate}%でした！（${result.rank}ランク）\n\n転職活動中の方、これやってみて！\n\n#キャリアスコア診断 #転職活動 #転職成功確率`;
  const url = typeof window !== 'undefined' ? window.location.origin : '';

  const handleXShare = () => {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleThreadsShare = () => {
    const threadsText = `${shareText}\n\n${url}`;
    const shareUrl = `https://www.threads.net/intent/post?text=${encodeURIComponent(threadsText)}`;
    window.open(shareUrl, '_blank', 'width=600,height=700');
  };

  return (
    <div className="card bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="text-4xl">📢</div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-1">結果をシェアしよう</h3>
            <p className="text-gray-600 text-sm">
              SNSでシェアして、他の人の参考にもなります
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={handleXShare}
            className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X でシェア
          </button>
          <button
            onClick={handleThreadsShare}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.186 3.094c-.522 0-1.017.042-1.483.12-2.762.465-4.904 2.53-5.449 5.276-.108.544-.122 1.05-.122 1.582v.156c0 2.768 1.498 5.232 3.868 6.545.405.225.828.408 1.266.547l-.001.197c-.004.708-.008 1.416-.012 2.124-.002.442-.319.799-.753.851-.076.009-.153.013-.23.013-.367 0-.707-.156-.952-.436-.148-.169-.26-.37-.329-.593-.05-.161-.097-.323-.143-.486-.057-.201-.181-.368-.352-.475-.17-.107-.373-.148-.574-.115-.202.033-.382.137-.51.294-.127.157-.195.358-.191.563.006.297.076.585.205.85.204.419.506.784.881 1.064.555.415 1.224.636 1.912.636.151 0 .303-.01.454-.029 1.074-.138 1.951-.94 2.165-1.982.042-.206.063-.42.063-.633l.005-2.265c.44-.139.864-.322 1.269-.547 2.37-1.313 3.868-3.777 3.868-6.545v-.156c0-.532-.014-1.038-.122-1.582-.545-2.746-2.687-4.811-5.449-5.276-.466-.078-.961-.12-1.483-.12zm0 1.5c.42 0 .82.034 1.196.097 2.028.34 3.604 1.859 4.007 3.87.081.405.093.785.093 1.211v.156c0 2.055-1.112 3.883-2.868 4.859-.439.244-.91.423-1.402.532-.23.051-.455-.097-.504-.33-.049-.233.097-.462.326-.513.411-.091.81-.24 1.183-.444 1.463-.813 2.265-2.332 2.265-4.104v-.156c0-.353-.01-.644-.077-.966-.336-1.676-1.648-2.94-3.338-3.216-.315-.053-.651-.08-1.004-.08-.353 0-.689.027-1.004.08-1.69.276-3.002 1.54-3.338 3.216-.067.322-.077.613-.077.966v.156c0 1.772.802 3.291 2.265 4.104.373.204.772.353 1.183.444.229.051.375.28.326.513-.049.233-.274.381-.504.33-.492-.109-.963-.288-1.402-.532-1.756-.976-2.868-2.804-2.868-4.859v-.156c0-.426.012-.806.093-1.211.403-2.011 1.979-3.53 4.007-3.87.376-.063.776-.097 1.196-.097z" />
            </svg>
            Threads でシェア
          </button>
        </div>
      </div>
    </div>
  );
}
