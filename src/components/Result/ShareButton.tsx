import { DiagnosisResult } from '../../types';

interface ShareButtonProps {
  result: DiagnosisResult;
}

export default function ShareButton({ result }: ShareButtonProps) {
  const handleShare = () => {
    const text = `私の転職成功確率は${result.successRate}%でした！（${result.rank}ランク）\n\n転職活動中の方、これやってみて！\n\n#キャリアスコア診断 #転職活動 #転職成功確率`;
    const url = window.location.origin;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="card bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="text-4xl">📢</div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-1">結果をシェアしよう</h3>
            <p className="text-gray-600 text-sm">
              X（Twitter）でシェアして、他の人の参考にもなります
            </p>
          </div>
        </div>
        <button
          onClick={handleShare}
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
      </div>
    </div>
  );
}
