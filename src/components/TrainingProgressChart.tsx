import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { TrainingProgress } from '../types/regression';

interface TrainingProgressChartProps {
  history: TrainingProgress[];
}

export function TrainingProgressChart({ history }: TrainingProgressChartProps) {
  if (history.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Training Progress (MSE over Epochs)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="epoch"
            stroke="#6b7280"
            style={{ fontSize: '14px' }}
            label={{ value: 'Epoch', position: 'insideBottom', offset: -10 }}
          />
          <YAxis
            stroke="#6b7280"
            style={{ fontSize: '14px' }}
            label={{ value: 'MSE', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '12px'
            }}
          />
          <Legend wrapperStyle={{ paddingTop: '10px' }} />
          <Line
            type="monotone"
            dataKey="mse"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ fill: '#ef4444', r: 3 }}
            activeDot={{ r: 5 }}
            name="Mean Squared Error"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
