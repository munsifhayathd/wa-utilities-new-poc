'use client';

import { TakeFiveHazardControl } from '@/app/(dashboard)/jobs/models/types';

interface Step5FormProps {
  data: {
    hazardControls: TakeFiveHazardControl[];
    isComplete: boolean;
  };
  onUpdate: (data: Step5FormProps['data']) => void;
  onNext: () => void;
}

export function Step5Form({ data, onUpdate, onNext }: Step5FormProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-base font-semibold text-gray-900">
        Hazard Controls - Implement control measures
      </h2>
      
      {/* Implementation coming soon */}
      <p className="text-sm text-gray-500">Hazard controls form coming soon...</p>
    </div>
  );
} 