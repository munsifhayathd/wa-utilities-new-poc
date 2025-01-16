'use client';

import { useState } from 'react';
import { 
  TakeFiveData, 
  TakeFiveStep1, 
  TakeFiveStep2Question, 
  TakeFivePermit,
  TakeFiveHazardCategory,
  TakeFiveHazardControl
} from '@/app/(dashboard)/jobs/models/types';
import { StepNavigation } from './StepNavigation';
import { Step1Form } from './Step1Form';
import { Step2Form } from './Step2Form';
import { Step3Form } from './Step3Form';
import { Step4Form } from './Step4Form';
import { Step5Form } from './Step5Form';
import { StepNavButtons } from './StepNavButtons';
import { Pencil } from 'lucide-react';

interface TakeFiveProps {
  data: TakeFiveData;
}

type StepKey = keyof TakeFiveData['steps'];

// Create a generic type for step components
type StepComponent<T> = {
  (props: { 
    data: T;
    onUpdate: (data: T) => void;
    onNext: () => void;
  }): JSX.Element;
  handleSubmit?: () => boolean;
};

type StepRefs = {
  [K in StepKey]: StepComponent<TakeFiveData['steps'][K]>
};

const stepRefs: StepRefs = {
  step1: Step1Form,
  step2: Step2Form,
  step3: Step3Form,
  step4: Step4Form,
  step5: Step5Form,
};

export function TakeFive({ data }: TakeFiveProps) {
  const [currentStep, setCurrentStep] = useState(data.currentStep);
  const [formData, setFormData] = useState(data.steps);

  const completedSteps = Object.entries(formData)
    .filter(([_, stepData]) => 'isComplete' in stepData && stepData.isComplete)
    .map(([step]) => parseInt(step.replace('step', '')));

  const handleStepClick = (step: number) => {
    if (completedSteps.includes(step) || step === currentStep || step === Math.min(...completedSteps) + 1) {
      setCurrentStep(step);
    }
  };

  const handleNext = () => {
    const currentStepKey = `step${currentStep}` as StepKey;
    setFormData(prev => ({
      ...prev,
      [currentStepKey]: {
        ...prev[currentStepKey],
        isComplete: true
      }
    }));
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const currentStepKey = `step${currentStep}` as StepKey;
  const CurrentStepComponent = stepRefs[currentStepKey];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium text-gray-900">Take Five Assessment</h2>
          <p className="text-sm text-gray-500">
            Status: <span className="font-medium">{data.status}</span>
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50">
          <Pencil className="h-4 w-4" />
          Edit Assessment
        </button>
      </div>

      {/* Step Navigation */}
      <StepNavigation
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepClick={handleStepClick}
      />

      {/* Step Content */}
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <div className="space-y-6">
          <CurrentStepComponent
            data={formData[currentStepKey]}
            onUpdate={(newData) => 
              setFormData(prev => ({ 
                ...prev, 
                [currentStepKey]: newData 
              }))
            }
            onNext={handleNext}
          />
          <StepNavButtons
            onNext={handleNext}
            onPrevious={handlePrevious}
            currentStep={currentStep}
            isFirstStep={currentStep === 1}
            isLastStep={currentStep === 5}
            onValidate={CurrentStepComponent.handleSubmit}
          />
        </div>
      </div>
    </div>
  );
} 