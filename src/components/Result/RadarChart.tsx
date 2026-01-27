import { useEffect, useRef } from 'react';
import { CategoryScore } from '../../types';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface RadarChartProps {
  categoryScores: CategoryScore;
}

export default function RadarChart({ categoryScores }: RadarChartProps) {
  const data = {
    labels: ['市場価値', '準備度', '活動品質', '環境・メンタル'],
    datasets: [
      {
        label: 'あなたのスコア',
        data: [
          categoryScores.market_value,
          categoryScores.preparation,
          categoryScores.activity,
          categoryScores.environment,
        ],
        backgroundColor: 'rgba(255, 107, 53, 0.2)',
        borderColor: 'rgba(255, 107, 53, 1)',
        borderWidth: 3,
        pointBackgroundColor: 'rgba(255, 107, 53, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 107, 53, 1)',
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: '#e2e8f0',
        },
        grid: {
          color: '#e2e8f0',
        },
        pointLabels: {
          font: {
            size: 14,
            weight: 'bold' as const,
          },
          color: '#1e3a5f',
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 25,
          display: true,
          backdropColor: 'transparent',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.parsed.r}点`;
          },
        },
      },
    },
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-navy mb-6 text-center">
        カテゴリ別スコア
      </h2>
      <div className="max-w-lg mx-auto">
        <Radar data={data} options={options} />
      </div>
      <p className="text-center text-sm text-gray-600 mt-6">
        各カテゴリのバランスを確認し、弱点を把握しましょう
      </p>
    </div>
  );
}
