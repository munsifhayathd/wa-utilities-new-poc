'use client';

import { useState } from 'react';
import { MeterDetails } from '@/app/(dashboard)/jobs/models/types';
import { Pencil, Plus } from 'lucide-react';

interface MeterProps {
  data: MeterDetails;
}

export function Meter({ data }: MeterProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Meter Details</h3>
          <p className="text-sm text-gray-500">
            Meter Number: <span className="font-medium">{data.meterNumber}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
          >
            <Pencil className="h-4 w-4" />
            {isEditing ? 'Save Changes' : 'Edit Details'}
          </button>
          <button
            onClick={() => {
              // Handle adding new reading
            }}
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
          >
            <Plus className="h-4 w-4" />
            Add Reading
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <dt className="text-sm font-medium text-gray-500">Type</dt>
            {isEditing ? (
              <input
                type="text"
                defaultValue={data.type}
                className="w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm focus:border-primary-light focus:outline-none focus:ring-1 focus:ring-primary-light"
              />
            ) : (
              <dd className="text-sm text-gray-900">{data.type}</dd>
            )}
          </div>
          <div className="space-y-1">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            {isEditing ? (
              <input
                type="text"
                defaultValue={data.location}
                className="w-full rounded-md border border-gray-200 px-3 py-1.5 text-sm focus:border-primary-light focus:outline-none focus:ring-1 focus:ring-primary-light"
              />
            ) : (
              <dd className="text-sm text-gray-900">{data.location}</dd>
            )}
          </div>
        </div>

        <div className="rounded-lg border border-gray-200">
          <div className="border-b border-gray-200 px-4 py-3">
            <h4 className="text-sm font-medium text-gray-900">Meter Readings</h4>
          </div>
          <div className="divide-y divide-gray-200">
            {data.readings.map((reading) => (
              <div key={reading.id} className="flex items-center justify-between p-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">
                      {reading.value}
                    </span>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                      {reading.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{reading.date}</p>
                </div>
                {isEditing && (
                  <button
                    onClick={() => {
                      // Handle reading deletion
                    }}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="flex justify-end">
          <button
            onClick={() => setIsEditing(false)}
            className="rounded-md bg-primary-main px-4 py-2 text-sm font-medium text-white hover:bg-primary-main/90"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
} 