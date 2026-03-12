export interface DataPoint {
  x: number;
  y: number;
  predicted?: number;
}

export interface RegressionParams {
  learningRate: number;
  epochs: number;
  batchSize: number;
}

export interface RegressionResult {
  slope: number;
  intercept: number;
  mse: number;
  r2: number;
  iterations: number;
}

export interface TrainingProgress {
  epoch: number;
  mse: number;
  slope: number;
  intercept: number;
}
