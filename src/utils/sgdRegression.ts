import randu from '@stdlib/random-base-randu';
import pow from '@stdlib/math-base-special-pow';
import ddot from '@stdlib/blas-base-ddot';
import daxpy from '@stdlib/blas-base-daxpy';
import dnrm2 from '@stdlib/blas-base-dnrm2';
import uniform from '@stdlib/random-base-uniform';

import type {
  DataPoint,
  RegressionParams,
  RegressionResult,
  TrainingProgress
} from '../types/regression';

export class SGDRegression {
  private weights: Float64Array; // [intercept, slope]
  private learningRate: number;
  private epochs: number;
  private batchSize: number;
  public trainingHistory: TrainingProgress[];

  constructor(params: RegressionParams) {
    this.weights = new Float64Array(2);
    this.weights[0] = uniform(-1, 1);
    this.weights[1] = uniform(-1, 1);

    this.learningRate = params.learningRate;
    this.epochs = params.epochs;
    this.batchSize = params.batchSize;
    this.trainingHistory = [];
  }

  private prepareFeatures(x: number): Float64Array {
    const features = new Float64Array(2);
    features[0] = 1.0;
    features[1] = x;
    return features;
  }

  private predict(x: number): number {
    const features = this.prepareFeatures(x);
    return ddot(2, features, 1, this.weights, 1);
  }

  private calculateMSE(data: DataPoint[]): number {
    const errors = new Float64Array(data.length);

    for (let i = 0; i < data.length; i++) {
      const predicted = this.predict(data[i].x);
      errors[i] = data[i].y - predicted;
    }

    const norm = dnrm2(data.length, errors, 1);
    return pow(norm, 2) / data.length;
  }

  private calculateR2(data: DataPoint[]): number {
    const meanY = data.reduce((s, p) => s + p.y, 0) / data.length;

    let ssTotal = 0;
    let ssResidual = 0;

    for (const point of data) {
      const predicted = this.predict(point.x);
      ssTotal += pow(point.y - meanY, 2);
      ssResidual += pow(point.y - predicted, 2);
    }

    return 1 - ssResidual / ssTotal;
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(randu() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }

  public fit(data: DataPoint[]): RegressionResult {
    this.trainingHistory = [];

    for (let epoch = 0; epoch < this.epochs; epoch++) {
      const shuffledData = this.shuffleArray(data);

      for (let i = 0; i < shuffledData.length; i += this.batchSize) {
        const batch = shuffledData.slice(i, i + this.batchSize);

        const gradient = new Float64Array(2);

        for (const point of batch) {
          const features = this.prepareFeatures(point.x);

          const prediction = ddot(2, features, 1, this.weights, 1);
          const error = prediction - point.y;

          daxpy(2, error, features, 1, gradient, 1);
        }

        gradient[0] /= batch.length;
        gradient[1] /= batch.length;

        gradient[0] *= -this.learningRate;
        gradient[1] *= -this.learningRate;

        daxpy(2, 1.0, gradient, 1, this.weights, 1);
      }

      const mse = this.calculateMSE(data);

      this.trainingHistory.push({
        epoch: epoch + 1,
        mse,
        slope: this.weights[1],
        intercept: this.weights[0]
      });
    }

    const finalMSE = this.calculateMSE(data);
    const r2 = this.calculateR2(data);

    return {
      slope: this.weights[1],
      intercept: this.weights[0],
      mse: finalMSE,
      r2,
      iterations: this.epochs
    };
  }

  public predictValue(x: number): number {
    return this.predict(x);
  }

  public predictDataPoints(data: DataPoint[]): DataPoint[] {
    return data.map(point => ({
      ...point,
      predicted: this.predict(point.x)
    }));
  }
}

export function generateSampleData(
  numPoints: number,
  trueSlope: number,
  trueIntercept: number,
  noise: number
): DataPoint[] {
  const data: DataPoint[] = [];

  for (let i = 0; i < numPoints; i++) {
    const x = randu() * 10;
    const y = trueSlope * x + trueIntercept + (randu() - 0.5) * 2 * noise;

    data.push({ x, y });
  }

  return data;
}