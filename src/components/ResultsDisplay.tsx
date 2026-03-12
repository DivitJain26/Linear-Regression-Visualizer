import { Activity, TrendingUp, Target, Layers } from 'lucide-react';
import type { RegressionResult } from '../types/regression';

interface ResultsDisplayProps {
  result: RegressionResult | null;
}

export function ResultsDisplay({ result }: ResultsDisplayProps) {
  if (!result) return null;

  const stats = [
    {
      label: 'Slope (m)',
      value: result.slope.toFixed(4),
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Intercept (b)',
      value: result.intercept.toFixed(4),
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'MSE',
      value: result.mse.toFixed(4),
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'R² Score',
      value: result.r2.toFixed(4),
      icon: Layers,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Model Results</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className={`${stat.bgColor} p-4 rounded-lg`}>
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-4 h-4 ${stat.color}`} />
                <span className="text-sm font-medium text-gray-600">{stat.label}</span>
              </div>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Equation:</span> y = {result.slope.toFixed(4)}x + {result.intercept.toFixed(4)}
        </p>
      </div>
    </div>
  );
}
