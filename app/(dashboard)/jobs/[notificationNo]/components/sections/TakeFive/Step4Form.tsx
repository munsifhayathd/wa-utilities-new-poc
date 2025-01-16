'use client';

interface Step4FormProps {
  data: {
    hazardCategories: Record<string, {
      id: string;
      name: string;
      items: Array<{
        id: string;
        name: string;
        selected: boolean;
      }>;
    }>;
    isComplete: boolean;
  };
  onUpdate: (data: Step4FormProps['data']) => void;
}

export function Step4Form({ data, onUpdate }: Step4FormProps) {
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