'use client';

import Link from 'next/link';
import { useContractors } from './viewmodels/useContractors';
import { ContractorTable } from './components/ContractorTable';

export default function ContractorsPage() {
  const { contractors, isLoading, error } = useContractors();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Contractors</h1>
        <Link
          href="/contractors/add"
          className="rounded-md bg-[#298f98] px-4 py-2 text-sm font-medium text-white hover:bg-[#1f6b72] transition-colors"
        >
          + Add Contractor
        </Link>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white">
        <ContractorTable data={contractors} />
      </div>
    </div>
  );
} 