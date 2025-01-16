'use client';

interface StepNavButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
  currentStep: number;
  isLastStep?: boolean;
  isFirstStep?: boolean;
  onValidate?: () => boolean;
}

export function StepNavButtons({ 
  onNext, 
  onPrevious, 
  currentStep,
  isLastStep = false,
  isFirstStep = false,
  onValidate
}: StepNavButtonsProps) {
  const handleNext = () => {
    if (onValidate) {
      const isValid = onValidate();
      if (!isValid) return;
    }
    onNext();
  };

  return (
    <div className="flex justify-between pt-6">
      {!isFirstStep && (
        <button
          onClick={onPrevious}
          className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Previous
        </button>
      )}
      <div className={!isFirstStep ? 'ml-auto' : ''}>
        <button
          onClick={handleNext}
          className="rounded-md bg-[#298f98] px-4 py-2 text-sm font-medium text-white hover:bg-[#1f6b72] transition-colors"
        >
          {isLastStep ? 'Complete' : 'Next Step'}
        </button>
      </div>
    </div>
  );
} 