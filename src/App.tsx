import { useState, useEffect } from 'react';
import { AppScreen, Answer, DiagnosisResult } from './types';
import Landing from './components/Landing/Landing';
import QuizFlow from './components/Quiz/QuizFlow';
import Result from './components/Result/Result';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import PrivacyPolicy from './components/Privacy/PrivacyPolicy';
import Terms from './components/Privacy/Terms';

function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('landing');
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const startQuiz = () => {
    setCurrentScreen('quiz');
    setAnswers([]);
    setResult(null);
  };

  const completeQuiz = (finalAnswers: Answer[], diagnosisResult: DiagnosisResult) => {
    setAnswers(finalAnswers);
    setResult(diagnosisResult);
    setCurrentScreen('result');
  };

  const restartQuiz = () => {
    setCurrentScreen('landing');
    setAnswers([]);
    setResult(null);
  };

  // Show Privacy Policy or Terms page
  if (currentPath === '/privacy') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <PrivacyPolicy />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPath === '/terms') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Terms />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {currentScreen === 'landing' && <Landing onStart={startQuiz} />}
        {currentScreen === 'quiz' && <QuizFlow onComplete={completeQuiz} />}
        {currentScreen === 'result' && result && (
          <Result result={result} onRestart={restartQuiz} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
