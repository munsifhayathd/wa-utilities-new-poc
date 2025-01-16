'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { JobsTable } from './components/JobsTable';
import { JobsFilters } from './components/JobsFilters';

export default function JobsPage() {
  const [filters, setFilters] = useState({
    search: '',
    area: '',
    type: '',
    status: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-full bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Jobs</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage and track all your jobs in one place
        </p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-sm">
        {/* Filters Section */}
        <div className="mb-6 flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input 
              type="search"
              placeholder="Search jobs..."
              className="h-10 w-full rounded-md border border-gray-200 bg-white pl-9 pr-4 text-sm focus:border-primary-light focus:outline-none focus:ring-1 focus:ring-primary-light"
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>
          <JobsFilters onFilterChange={handleFilterChange} />
        </div>

        {/* Table Section */}
        <JobsTable />
      </div>
    </div>
  );
} 