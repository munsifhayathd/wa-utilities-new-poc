'use client';

import { cn } from '@/lib/utils/cn';
import { Check } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  subtitle: string;
}

const steps: Step[] = [
  { 
    number: 1, 
    title: 'STOP', 
    subtitle: '"Take 5" minutes to review the task' 
  },
  { 
    number: 2, 
    title: 'REVIEW', 
    subtitle: 'Stop and review the "Take 5" if any conditions change' 
  },
  { 
    number: 3, 
    title: 'Think through the task', 
    subtitle: 'Does the task require?' 
  },
  { 
    number: 4, 
    title: 'SPOT THE HAZARD', 
    subtitle: '"Look Up / Down / Beside / Inside"' 
  },
  { 
    number: 5, 
    title: 'Hazard Controls', 
    subtitle: 'Implement control measures' 
  }
];

interface StepNavigationProps {
  currentStep: number;
  completedSteps: number[];
  onStepClick: (step: number) => void;
}

export function StepNavigation({ 
  currentStep, 
  completedSteps, 
  onStepClick 
}: StepNavigationProps) {
  return (
    <div className="relative mb-8">
      {/* Progress Bar */}
      <div className="absolute left-0 top-5 h-0.5 w-full bg-gray-200">
        <div 
          className="h-full bg-[#298f98] transition-all duration-300"
          style={{ 
            width: `${(Math.max(0, currentStep - 1) / (steps.length - 1)) * 100}%` 
          }}
        />
      </div>

      {/* Steps */}
      <div className="relative z-10 flex justify-between">
        {steps.map((step) => {
          const isCompleted = completedSteps.includes(step.number);
          const isCurrent = currentStep === step.number;

          return (
            <button
              key={step.number}
              onClick={() => onStepClick(step.number)}
              className="group flex flex-1 flex-col items-center"
            >
              {/* Step Circle */}
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors",
                  isCompleted && "border-[#298f98] bg-[#298f98] text-white",
                  isCurrent && "border-[#298f98] bg-white text-[#298f98]",
                  !isCompleted && !isCurrent && "border-gray-300 bg-white text-gray-500"
                )}
              >
                {isCompleted ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-medium">{step.number}</span>
                )}
              </div>

              {/* Step Title */}
              <div className="mt-2 text-center">
                <p 
                  className={cn(
                    "text-sm font-medium",
                    (isCompleted || isCurrent) ? "text-gray-900" : "text-gray-500"
                  )}
                >
                  {step.title}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {step.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
} 