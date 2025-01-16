'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';
import { TakeFiveData } from '@/app/(dashboard)/jobs/models/types';

type TakeFiveAction = 
  | { type: 'UPDATE_STEP_1'; payload: TakeFiveData['steps']['step1'] }
  | { type: 'UPDATE_STEP_2'; payload: TakeFiveData['steps']['step2'] }
  | { type: 'UPDATE_STEP_3'; payload: TakeFiveData['steps']['step3'] }
  | { type: 'UPDATE_STEP_4'; payload: TakeFiveData['steps']['step4'] }
  | { type: 'UPDATE_STEP_5'; payload: TakeFiveData['steps']['step5'] }
  | { type: 'SET_CURRENT_STEP'; payload: number }
  | { type: 'MARK_STEP_COMPLETE'; payload: number };

interface TakeFiveContextType {
  data: TakeFiveData;
  currentStep: number;
  updateStep: (step: number, data: any) => void;
  goToStep: (step: number) => void;
  markStepComplete: (step: number) => void;
}

const TakeFiveContext = createContext<TakeFiveContextType | null>(null);

function takeFiveReducer(state: TakeFiveData, action: TakeFiveAction): TakeFiveData {
  switch (action.type) {
    case 'UPDATE_STEP_1':
      return {
        ...state,
        steps: {
          ...state.steps,
          step1: action.payload
        },
        lastUpdated: new Date().toISOString()
      };
    // ... other cases
    default:
      return state;
  }
}

export function TakeFiveProvider({ 
  children,
  initialData 
}: { 
  children: ReactNode;
  initialData: TakeFiveData;
}) {
  const [state, dispatch] = useReducer(takeFiveReducer, initialData);

  const value = {
    data: state,
    currentStep: state.currentStep,
    updateStep: (step: number, data: any) => {
      dispatch({ type: `UPDATE_STEP_${step}` as any, payload: data });
    },
    goToStep: (step: number) => {
      dispatch({ type: 'SET_CURRENT_STEP', payload: step });
    },
    markStepComplete: (step: number) => {
      dispatch({ type: 'MARK_STEP_COMPLETE', payload: step });
    }
  };

  return (
    <TakeFiveContext.Provider value={value}>
      {children}
    </TakeFiveContext.Provider>
  );
}

export const useTakeFive = () => {
  const context = useContext(TakeFiveContext);
  if (!context) {
    throw new Error('useTakeFive must be used within a TakeFiveProvider');
  }
  return context;
}; 