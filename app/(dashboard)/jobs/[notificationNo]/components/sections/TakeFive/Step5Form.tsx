'use client';

interface Step5FormProps {
  data: {
    hazardControls: Array<{
      id: string;
      hazard: string;
      description: string;
      implemented: boolean;
    }>;
    isComplete: boolean;
  };
  onUpdate: (data: Step5FormProps['data']) => void;
}

export function Step5Form({ data, onUpdate }: Step5FormProps) {
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