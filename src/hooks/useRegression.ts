import { useState, useCallback } from 'react';
import { SGDRegression, generateSampleData } from '../utils/sgdRegression';
import type { DataPoint, RegressionParams, RegressionResult, TrainingProgress } from '../types/regression';

export function useRegression() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [predictedData, setPredictedData] = useState<DataPoint[]>([]);
  const [result, setResult] = useState<RegressionResult | null>(null);
  const [trainingHistory, setTrainingHistory] = useState<TrainingProgress[]>([]);
  const [isTraining, setIsTraining] = useState(false);

  const generateData = useCallback((numPoints: number, slope: number, intercept: number, noise: number) => {
    const newData = generateSampleData(numPoints, slope, intercept, noise);
    setData(newData);
    setPredictedData([]);
    setResult(null);
    setTrainingHistory([]);
  }, []);

  const trainModel = useCallback((params: RegressionParams) => {
    if (data.length === 0) return;

    setIsTraining(true);

    setTimeout(() => {
      const model = new SGDRegression(params);
      const trainResult = model.fit(data);
      const predicted = model.predictDataPoints(data);

      setResult(trainResult);
      setPredictedData(predicted);
      setTrainingHistory(model.trainingHistory);
      setIsTraining(false);
    }, 100);
  }, [data]);

  const reset = useCallback(() => {
    setData([]);
    setPredictedData([]);
    setResult(null);
    setTrainingHistory([]);
  }, []);

  return {
    data,
    predictedData,
    result,
    trainingHistory,
    isTraining,
    generateData,
    trainModel,
    reset
  };
}
