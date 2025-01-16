'use client';

import { Area, JobType, TaskStatus } from '../models/types';
import { CustomSelect } from './CustomSelect';

interface FilterProps {
  onFilterChange: (key: string, value: string) => void;
}

const areaOptions = [
  { value: '', label: 'All Areas' },
  { value: 'South', label: 'South' },
  { value: 'North', label: 'North' },
  { value: 'East', label: 'East' },
  { value: 'West', label: 'West' },
];

const typeOptions = [
  { value: '', label: 'All Types' },
  { value: 'SN1', label: 'SN1' },
  { value: 'SN3', label: 'SN3' },
];

const taskStatusOptions = [
  { value: '', label: 'All Statuses' },
  { value: 'New', label: 'New' },
  { value: 'In Progress', label: 'In Progress' },
  { value: 'On Hold', label: 'On Hold', disabled: true },
  { value: 'Off Hold', label: 'Off Hold' },
  { value: 'Archived', label: 'Archived', disabled: true },
  { value: 'Completed', label: 'Completed' }
];

export function JobsFilters({ onFilterChange }: FilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <CustomSelect
        options={areaOptions}
        value=""
        onChange={(value) => onFilterChange('area', value)}
        className="min-w-[140px]"
        placeholder="All Areas"
      />

      <CustomSelect
        options={typeOptions}
        value=""
        onChange={(value) => onFilterChange('type', value)}
        className="min-w-[140px]"
        placeholder="All Types"
      />

      <CustomSelect
        options={taskStatusOptions}
        value=""
        onChange={(value) => onFilterChange('status', value)}
        className="min-w-[140px]"
        placeholder="All Statuses"
      />
    </div>
  );
} 