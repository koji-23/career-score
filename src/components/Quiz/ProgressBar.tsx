interface ProgressBarProps {
  progress: number;
  current: number;
  total: number;
}

export default function ProgressBar({ progress, current, total }: ProgressBarProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-semibold text-gray-600">診断の進捗</span>
        <span className="text-sm font-bold text-navy">
          {current} / {total}
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
