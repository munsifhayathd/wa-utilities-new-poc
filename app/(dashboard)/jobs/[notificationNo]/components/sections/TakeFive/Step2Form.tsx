'use client';

import { useState } from 'react';
import { TakeFiveStep2Question } from '@/app/(dashboard)/jobs/models/types';

interface Step2FormProps {
  data: {
    questions: TakeFiveStep2Question[];
    isComplete: boolean;
  };
  onUpdate: (data: Step2FormProps['data']) => void;
  onNext: () => void;
}

function validateStep2(data: Step2FormProps['data'], setErrors: (errors: string[]) => void) {
  const unansweredQuestions = data.questions.filter(q => !q.answer);
  
  if (unansweredQuestions.length > 0) {
    setErrors(unansweredQuestions.map(q => q.id));
    return false;
  }

  return true;
}

export function Step2Form({ data, onUpdate }: Step2FormProps) {
  const [errors, setErrors] = useState<string[]>([]);

  // Update static properties when component renders
  Step2Form.currentData = data;
  Step2Form.setErrors = setErrors;

  const handleAnswerChange = (questionId: string, answer: 'Yes' | 'No' | 'N/A') => {
    const updatedQuestions = data.questions.map(q => 
      q.id === questionId ? { ...q, answer } : q
    );
    onUpdate({ ...data, questions: updatedQuestions });
    setErrors([]); // Clear errors when user makes a selection
  };

  return (
    <div className="space-y-6">
      <h2 className="text-base font-semibold text-gray-900">
        REVIEW - Stop and review the "Take 5" if any conditions change
      </h2>

      <div className="space-y-4">
        {data.questions.map((question) => (
          <div 
            key={question.id} 
            className={`space-y-2 rounded-lg border p-4 ${
              errors.includes(question.id) 
                ? 'border-status-error/50 bg-status-error/5' 
                : 'border-gray-200'
            }`}
          >
            <p className="text-sm text-gray-700">{question.question}</p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  checked={question.answer === 'Yes'}
                  onChange={() => handleAnswerChange(question.id, 'Yes')}
                  className="h-4 w-4 border-gray-300 text-[#298f98] focus:ring-[#33b3bd]"
                />
                <span className="text-sm text-gray-700">Yes</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  checked={question.answer === 'No'}
                  onChange={() => handleAnswerChange(question.id, 'No')}
                  className="h-4 w-4 border-gray-300 text-[#298f98] focus:ring-[#33b3bd]"
                />
                <span className="text-sm text-gray-700">No</span>
              </label>

              {/* Only show N/A option for specific questions */}
              {(question.id === '1' || question.id === '6') && (
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    checked={question.answer === 'N/A'}
                    onChange={() => handleAnswerChange(question.id, 'N/A')}
                    className="h-4 w-4 border-gray-300 text-[#298f98] focus:ring-[#33b3bd]"
                  />
                  <span className="text-sm text-gray-700">N/A</span>
                </label>
              )}
            </div>
            {errors.includes(question.id) && (
              <p className="text-sm text-status-error">
                Please answer this question
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Add static handleSubmit method
Step2Form.handleSubmit = () => validateStep2(Step2Form.currentData, Step2Form.setErrors);

// Add static properties to store current data and setErrors function
Step2Form.currentData = {} as Step2FormProps['data'];
Step2Form.setErrors = () => {}; 