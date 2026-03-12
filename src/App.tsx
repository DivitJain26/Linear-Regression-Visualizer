import { Activity } from 'lucide-react';
import { useRegression } from './hooks/useRegression';
import { ControlPanel } from './components/ControlPanel';
import { RegressionChart } from './components/RegressionChart';
import { TrainingProgressChart } from './components/TrainingProgressChart';
import { ResultsDisplay } from './components/ResultsDisplay';

function App() {
  const {
    data,
    predictedData,
    result,
    trainingHistory,
    isTraining,
    generateData,
    trainModel,
    reset
  } = useRegression();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold text-gray-800">
              Linear Regression Visualizer
            </h1>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ControlPanel
              onGenerateData={generateData}
              onTrain={trainModel}
              onReset={reset}
              isTraining={isTraining}
              hasData={data.length > 0}
            />
          </div>

          <div className="lg:col-span-2 space-y-6">
            {data.length > 0 && (
              <>
                <RegressionChart
                  data={data}
                  predictedData={predictedData}
                  showPrediction={predictedData.length > 0}
                />

                <ResultsDisplay result={result} />

                <TrainingProgressChart history={trainingHistory} />
              </>
            )}

            {data.length === 0 && (
              <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-200 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No Data Yet
                </h3>
                <p className="text-gray-500">
                  Generate sample data to get started with SGD regression
                </p>
              </div>
            )}
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
