'use client';

import { TakeFivePermit } from '@/app/(dashboard)/jobs/models/types';

interface Step3FormProps {
  data: {
    permits: TakeFivePermit[];
    isComplete: boolean;
  };
  onUpdate: (data: Step3FormProps['data']) => void;
  onNext: () => void;
}

export function Step3Form({ data, onUpdate, onNext }: Step3FormProps) {
  const handlePermitChange = (permitId: string, obtained: boolean) => {
    const updatedPermits = data.permits.map(permit =>
      permit.id === permitId ? { ...permit, obtained } : permit
    );
    onUpdate({ ...data, permits: updatedPermits });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-base font-semibold text-gray-900">
        Think through the task - Does the task require?
      </h2>

      <div className="space-y-4">
        {data.permits.map((permit) => (
          <div 
            key={permit.id}
            className="flex items-start gap-4 rounded-lg border border-gray-200 p-4"
          >
            <div className="pt-1">
              <input
                type="checkbox"
                checked={permit.obtained}
                onChange={(e) => handlePermitChange(permit.id, e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-primary-main focus:ring-primary-light"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{permit.type}</p>
              <p className="mt-1 text-sm text-gray-500">{permit.question}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 