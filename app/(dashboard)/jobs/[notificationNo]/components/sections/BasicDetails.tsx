'use client';

import { useState } from 'react';
import { Job } from '@/app/(dashboard)/jobs/models/types';
import { Pencil } from 'lucide-react';

interface BasicDetailsProps {
  data: Job;
}

export function BasicDetails({ data }: BasicDetailsProps) {
  const [isEditing, setIsEditing] = useState(false);

  const details = [
    { label: 'Notification No', value: data.notificationNo },
    { label: 'Location', value: data.location },
    { label: 'Area', value: data.area },
    { label: 'Type', value: data.type },
    { label: 'Task Status', value: data.taskStatus },
    { label: 'Job Status', value: data.jobStatus },
    { label: 'Task Code', value: data.taskCode },
    { label: 'Worker Status', value: data.workerStatus },
    { label: 'Job Type', value: data.jobType },
    { label: 'Mains Details', value: data.mainsDetails },
    { label: 'Due Date', value: data.dueDate },
    { label: 'Address', value: data.address },
    { label: 'Assigned Worker', value: data.assignedWorker },
    { label: 'Job Notes', value: data.jobNotes },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Basic Details</h3>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
        >
          <Pencil className="h-4 w-4" />
          {isEditing ? 'Save Changes' : 'Edit Details'}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {details.map(({ label, value }) => (
          <div key={label} className="space-y-1">
            <dt className="text-sm font-medium text-gray-500">{label}</dt>
            {isEditing ? (
              <input
                type="text"
                defaultValue={value}
                className="w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm focus:border-primary-light focus:outline-none focus:ring-1 focus:ring-primary-light"
              />
            ) : (
              <dd className="text-sm text-gray-900">{value}</dd>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 