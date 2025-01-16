'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { JobDetails } from '../../models/types';
import { BasicDetails } from './sections/BasicDetails';
import { TakeFive } from './sections/TakeFive/index';
import { Activities } from './sections/Activities';
import { Meter } from './sections/Meter';
import { Attachments } from './sections/Attachments';

const tabs = [
  { id: 'basic', label: 'Basic Details' },
  { id: 'takeFive', label: 'Take Five' },
  { id: 'activities', label: 'Activities' },
  { id: 'meter', label: 'Meter' },
  { id: 'attachments', label: 'Attachments' },
] as const;

interface JobDetailsTabsProps {
  data: JobDetails;
}

export function JobDetailsTabs({ data }: JobDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]['id']>('basic');

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                activeTab === tab.id
                  ? 'border-primary-main text-primary-main'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        {activeTab === 'basic' && <BasicDetails data={data.basic} />}
        {activeTab === 'takeFive' && <TakeFive data={data.takeFive} />}
        {activeTab === 'activities' && <Activities data={data.activities} />}
        {activeTab === 'meter' && <Meter data={data.meter} />}
        {activeTab === 'attachments' && <Attachments data={data.attachments} />}
      </div>
    </div>
  );
} 