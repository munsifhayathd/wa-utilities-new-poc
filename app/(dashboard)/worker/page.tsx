'use client';

import Link from 'next/link';
import { useWorkers } from './viewmodels/useWorkers';
import { WorkerTable } from './components/WorkerTable';

export default function WorkerPage() {
  const { workers, isLoading, error, tableState, setTableState } = useWorkers();

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Workers</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
            Active
          </div>
          <Link
            href="/worker/add"
            className="rounded-md bg-[#298f98] px-4 py-2 text-sm font-medium text-white hover:bg-[#1f6b72] transition-colors"
          >
            + Add Worker
          </Link>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white">
        <div className="p-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search workers..."
              value={tableState.search}
              onChange={(e) => 
                setTableState(prev => ({ ...prev, search: e.target.value, page: 1 }))
              }
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
            />
          </div>
          <WorkerTable data={workers} />
        </div>
      </div>
    </div>
  );
} 