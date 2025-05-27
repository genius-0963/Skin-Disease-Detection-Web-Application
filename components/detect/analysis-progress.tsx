import { Check, Upload, Search, FileText, Stethoscope } from 'lucide-react';

type Step = 'upload' | 'analyzing' | 'results' | 'questionnaire' | 'treatment';

interface AnalysisProgressProps {
  currentStep: Step;
}

interface StepItem {
  id: Step;
  label: string;
  icon: React.ReactNode;
}

export default function AnalysisProgress({ currentStep }: AnalysisProgressProps) {
  const steps: StepItem[] = [
    { id: 'upload', label: 'Upload', icon: <Upload className="h-5 w-5" /> },
    { id: 'analyzing', label: 'Analyzing', icon: <Search className="h-5 w-5" /> },
    { id: 'results', label: 'Results', icon: <Check className="h-5 w-5" /> },
    { id: 'questionnaire', label: 'Questionnaire', icon: <FileText className="h-5 w-5" /> },
    { id: 'treatment', label: 'Treatment', icon: <Stethoscope className="h-5 w-5" /> },
  ];

  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === currentStep);
  };

  const getStepStatus = (stepId: Step) => {
    const currentIndex = getCurrentStepIndex();
    const stepIndex = steps.findIndex(step => step.id === stepId);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'current';
    return 'upcoming';
  };

  return (
    <div className="w-full">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className="flex flex-col items-center relative"
          >
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                getStepStatus(step.id) === 'completed' 
                  ? 'bg-green-600 text-white' 
                  : getStepStatus(step.id) === 'current'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
              }`}
            >
              {step.icon}
            </div>
            
            <p className={`text-xs mt-2 font-medium ${
              getStepStatus(step.id) === 'current' 
                ? 'text-blue-600' 
                : getStepStatus(step.id) === 'completed'
                  ? 'text-green-600'
                  : 'text-gray-500 dark:text-gray-400'
            }`}>
              {step.label}
            </p>
            
            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div className="absolute top-5 left-10 w-[calc(100%-1.25rem)] h-0.5 bg-gray-200 dark:bg-gray-700 -z-10">
                <div 
                  className="h-full bg-green-600 transition-all duration-300" 
                  style={{ 
                    width: getStepStatus(step.id) === 'completed' ? '100%' : '0%'
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}