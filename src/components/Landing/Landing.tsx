import Hero from './Hero';
import Benefits from './Benefits';
import HowItWorks from './HowItWorks';

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="bg-gray-50">
      <Hero onStart={onStart} />
      <Benefits />
      <HowItWorks />
      
      {/* 最終CTA */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            まずは無料で診断してみましょう
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            所要時間わずか3分。あなたの転職成功確率がわかります
          </p>
          <button onClick={onStart} className="btn-primary text-xl px-12 py-5">
            今すぐ診断を始める（無料）
          </button>
        </div>
      </section>
    </div>
  );
}
