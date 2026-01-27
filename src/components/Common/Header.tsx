export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-navy to-navy-light rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-navy">
            キャリアスコア診断
          </h1>
        </div>
        <div className="text-sm text-gray-600 hidden md:block">
          転職成功確率を無料診断
        </div>
      </div>
    </header>
  );
}
