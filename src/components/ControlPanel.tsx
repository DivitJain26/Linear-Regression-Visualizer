import { useState } from 'react';
import { Play, RotateCcw, TrendingUp } from 'lucide-react';
import type { RegressionParams } from '../types/regression';

interface ControlPanelProps {
  onGenerateData: (numPoints: number, slope: number, intercept: number, noise: number) => void;
  onTrain: (params: RegressionParams) => void;
  onReset: () => void;
  isTraining: boolean;
  hasData: boolean;
}

export function ControlPanel({ onGenerateData, onTrain, onReset, isTraining, hasData }: ControlPanelProps) {
  const [numPoints, setNumPoints] = useState(50);
  const [trueSlope, setTrueSlope] = useState(2);
  const [trueIntercept, setTrueIntercept] = useState(5);
  const [noise, setNoise] = useState(3);

  const [learningRate, setLearningRate] = useState(0.01);
  const [epochs, setEpochs] = useState(100);
  const [batchSize, setBatchSize] = useState(10);

  const handleGenerateData = () => {
    onGenerateData(numPoints, trueSlope, trueIntercept, noise);
  };

  const handleTrain = () => {
    onTrain({ learningRate, epochs, batchSize });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          Data Generation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Points: {numPoints}
            </label>
            <input
              type="range"
              min="10"
              max="200"
              step="10"
              value={numPoints}
              onChange={(e) => setNumPoints(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              True Slope: {trueSlope.toFixed(2)}
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={trueSlope}
              onChange={(e) => setTrueSlope(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              True Intercept: {trueIntercept.toFixed(2)}
            </label>
            <input
              type="range"
              min="-10"
              max="10"
              step="0.5"
              value={trueIntercept}
              onChange={(e) => setTrueIntercept(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Noise Level: {noise.toFixed(1)}
            </label>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={noise}
              onChange={(e) => setNoise(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>

        <button
          onClick={handleGenerateData}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Generate New Data
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">SGD Parameters</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Learning Rate: {learningRate}
            </label>
            <input
              type="range"
              min="0.001"
              max="0.1"
              step="0.001"
              value={learningRate}
              onChange={(e) => setLearningRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Epochs: {epochs}
            </label>
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              value={epochs}
              onChange={(e) => setEpochs(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Batch Size: {batchSize}
            </label>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={batchSize}
              onChange={(e) => setBatchSize(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>
        </div>

        <button
          onClick={handleTrain}
          disabled={!hasData || isTraining}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <Play className="w-4 h-4" />
          {isTraining ? 'Training...' : 'Train Model'}
        </button>

        {hasData && (
          <button
            onClick={onReset}
            className="mt-2 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
          >
            Reset All
          </button>
        )}
      </div>
    </div>
  );
}
