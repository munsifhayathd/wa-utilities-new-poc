'use client';

import { TakeFiveData, TakeFiveHazardCategory } from '@/app/(dashboard)/jobs/models/types';

interface Step4FormProps {
  data: {
    hazardCategories: {
      vehicle: TakeFiveHazardCategory;
      vibration: TakeFiveHazardCategory;
      chemical: TakeFiveHazardCategory;
      mobilePlant: TakeFiveHazardCategory;
      physical: TakeFiveHazardCategory;
      fireHotWorks: TakeFiveHazardCategory;
      ergonomically: TakeFiveHazardCategory;
      biological: TakeFiveHazardCategory;
      environment: TakeFiveHazardCategory;
      mechanical: TakeFiveHazardCategory;
      weather: TakeFiveHazardCategory;
      other: TakeFiveHazardCategory;
    };
    isComplete: boolean;
  };
  onUpdate: (data: Step4FormProps['data']) => void;
  onNext: () => void;
}

export function Step4Form({ data, onUpdate, onNext }: Step4FormProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-base font-semibold text-gray-900">
        SPOT THE HAZARD - "Look Up / Down / Beside / Inside"
      </h2>
      
      {/* Implementation coming soon */}
      <p className="text-sm text-gray-500">Hazard selection form coming soon...</p>
    </div>
  );
} 