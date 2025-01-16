'use client';

import { useState } from 'react';
import { ActivityDetails } from '@/app/(dashboard)/jobs/services/mockData';
import { Pencil, Plus } from 'lucide-react';

interface ActivitiesProps {
  data: ActivityDetails;
}

export function Activities({ data }: ActivitiesProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Activities</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
          >
            <Pencil className="h-4 w-4" />
            {isEditing ? 'Save Changes' : 'Edit Activities'}
          </button>
          <button
            onClick={() => {
              // Handle adding new activity
            }}
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
          >
            <Plus className="h-4 w-4" />
            Add Activity
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {data.activities.map((activity) => (
          <div
            key={activity.id}
            className="rounded-lg border border-gray-200 p-4"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium text-gray-900">
                    {activity.type}
                  </h4>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                    {activity.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{activity.date}</p>
              </div>
              {isEditing && (
                <button
                  onClick={() => {
                    // Handle activity deletion
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Remove
                </button>
              )}
            </div>
            {isEditing ? (
              <textarea
                defaultValue={activity.notes}
                placeholder="Add notes..."
                rows={2}
                className="mt-2 w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm focus:border-primary-light focus:outline-none focus:ring-1 focus:ring-primary-light"
              />
            ) : activity.notes ? (
              <p className="mt-2 text-sm text-gray-600">{activity.notes}</p>
            ) : null}
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="flex justify-end">
          <button
            onClick={() => setIsEditing(false)}
            className="rounded-md bg-primary-main px-4 py-2 text-sm font-medium text-white hover:bg-primary-main/90"
          >
            Save Activities
          </button>
        </div>
      )}
    </div>
  );
} 