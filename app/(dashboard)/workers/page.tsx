'use client';

import Link from 'next/link';

export default function WorkersPage() {
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
            href="/workers/add"
            className="rounded-md bg-[#298f98] px-4 py-2 text-sm font-medium text-white hover:bg-[#1f6b72] transition-colors"
          >
            + Add Worker
          </Link>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white">
        <div className="p-6">Worker listing coming soon...</div>
      </div>
    </div>
  );
} 