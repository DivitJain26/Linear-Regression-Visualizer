import { ScatterChart, Scatter, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { DataPoint } from '../types/regression';

interface RegressionChartProps {
  data: DataPoint[];
  predictedData: DataPoint[];
  showPrediction: boolean;
}

export function RegressionChart({ data, predictedData, showPrediction }: RegressionChartProps) {
  const combinedData = showPrediction && predictedData.length > 0
    ? predictedData.map(point => ({
      x: point.x,
      actual: point.y,
      predicted: point.predicted
    }))
    : data.map(point => ({
      x: point.x,
      actual: point.y
    }));

  const sortedPredictedLine = showPrediction && predictedData.length > 0
    ? [...predictedData]
      .sort((a, b) => a.x - b.x)
      .map(point => ({
        x: point.x,
        predicted: point.predicted
      }))
    : [];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Data & Regression Line</h3>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              type="number"
              dataKey="x"
              name="X"
              stroke="#6b7280"
              style={{ fontSize: '14px' }}
            />
            <YAxis
              type="number"
              dataKey="actual"
              name="Y"
              stroke="#6b7280"
              style={{ fontSize: '14px' }}
            />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '12px'
              }}
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
            />
            <Scatter
              name="Actual Data"
              data={combinedData}
              fill="#2563EB"
            />
            {showPrediction && (
              <Line
                name="Regression Line"
                data={sortedPredictedLine}
                dataKey="predicted"
                stroke="#10b981"
                strokeWidth={3}
                dot={false}
              />
            )}
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
