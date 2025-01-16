'use client';

import { useState } from 'react';
import { TakeFiveStep1 } from '@/app/(dashboard)/jobs/models/types';
import { Calendar, Clock } from 'lucide-react';

interface Step1FormProps {
  data: TakeFiveStep1;
  onUpdate: (data: TakeFiveStep1) => void;
  onNext: () => void;
}

// Move validation function outside but keep it in the same file
function validateStep1(data: TakeFiveStep1): Partial<Record<keyof TakeFiveStep1, string>> {
  const newErrors: Partial<Record<keyof TakeFiveStep1, string>> = {};
  
  if (!data.name.trim()) {
    newErrors.name = 'Name is required';
  }
  if (!data.date.trim()) {
    newErrors.date = 'Date is required';
  }
  if (!data.time.trim()) {
    newErrors.time = 'Time is required';
  }
  if (!data.address.trim()) {
    newErrors.address = 'Address is required';
  }
  if (!data.task.trim()) {
    newErrors.task = 'Task is required';
  }
  if (!data.notificationNo.trim()) {
    newErrors.notificationNo = 'Notification number is required';
  }

  return newErrors;
}

export function Step1Form({ data, onUpdate, onNext }: Step1FormProps) {
  const [errors, setErrors] = useState<Partial<Record<keyof TakeFiveStep1, string>>>({});

  const handleChange = (field: keyof TakeFiveStep1, value: string) => {
    setErrors(prev => ({ ...prev, [field]: '' }));
    onUpdate({
      ...data,
      [field]: value
    });
  };

  // Move validation logic into a method within the component
  const handleSubmit = () => {
    const newErrors = validateStep1(data);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onNext();
      return true;
    }
    return false;
  };

  // Expose handleSubmit through a ref or prop if needed
  Step1Form.handleSubmit = handleSubmit;

  return (
    <div className="space-y-6">
      <h2 className="text-base font-semibold text-gray-900">
        STOP - "Take 5" minutes to review the task
      </h2>

      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm text-gray-700">
              Name:
            </label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-700">
              Time:
            </label>
            <div className="relative">
              <input
                type="time"
                value={data.time}
                onChange={(e) => handleChange('time', e.target.value)}
                className="block w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
              />
              <Clock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            {errors.time && (
              <p className="text-sm text-red-500">{errors.time}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-700">
              Address:
            </label>
            <input
              type="text"
              value={data.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
              placeholder="Enter address"
            />
            {errors.address && (
              <p className="text-sm text-red-500">{errors.address}</p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm text-gray-700">
              Date:
            </label>
            <div className="relative">
              <input
                type="date"
                value={data.date}
                onChange={(e) => handleChange('date', e.target.value)}
                className="block w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
              />
              <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            {errors.date && (
              <p className="text-sm text-red-500">{errors.date}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-700">
              Task:
            </label>
            <input
              type="text"
              value={data.task}
              onChange={(e) => handleChange('task', e.target.value)}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
              placeholder="Enter task"
            />
            {errors.task && (
              <p className="text-sm text-red-500">{errors.task}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-700">
              Notification No:
            </label>
            <input
              type="text"
              value={data.notificationNo}
              onChange={(e) => handleChange('notificationNo', e.target.value)}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
              placeholder="Enter notification number"
            />
            {errors.notificationNo && (
              <p className="text-sm text-red-500">{errors.notificationNo}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Type declaration for the static handleSubmit
declare module './Step1Form' {
  namespace Step1Form {
    let handleSubmit: () => boolean;
  }
} 