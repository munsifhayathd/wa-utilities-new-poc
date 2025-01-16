'use client';

import { useState } from 'react';
import { ReportType, TimePeriod } from './models/types';
import { Table } from '@/components/ui/table';

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<ReportType>('financial');
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('quarterly');

  const reportTypes: { type: ReportType; label: string }[] = [
    { type: 'financial', label: 'Financial Report' },
    { type: 'contractor', label: 'Contractor Report' },
    { type: 'job', label: 'Job Report' },
  ];

  const timePeriods: { value: TimePeriod; label: string }[] = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'yearly', label: 'Yearly' },
    { value: 'custom', label: 'Custom' },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Report Type Selection */}
      <div className="flex gap-4">
        {reportTypes.map(({ type, label }) => (
          <button
            key={type}
            onClick={() => setSelectedReport(type)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              selectedReport === type
                ? 'bg-primary-main text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Time Period Selection */}
      <div className="flex gap-2 rounded-lg border border-gray-200 bg-white p-1">
        {timePeriods.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setSelectedPeriod(value)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              selectedPeriod === value
                ? 'bg-[#298f98] text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-medium text-[#298f98]">Total WA Utilities</h3>
          <p className="mt-2 text-2xl font-semibold text-gray-900">$1468614.17</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-medium text-[#298f98]">Total Contractor</h3>
          <p className="mt-2 text-2xl font-semibold text-gray-900">$1155468.06</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-medium text-[#298f98]">Grand Total</h3>
          <p className="mt-2 text-2xl font-semibold text-gray-900">$286875.70</p>
        </div>
      </div>

      {/* Data Table */}
      <div className="rounded-lg border border-gray-200 bg-white">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>Notification No.</Table.Head>
              <Table.Head>Address</Table.Head>
              <Table.Head>Job Type</Table.Head>
              <Table.Head>Contractor Name</Table.Head>
              <Table.Head>Completion Date</Table.Head>
              <Table.Head>WA Utilities Rate</Table.Head>
              <Table.Head>Subby Rate</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>302968712</Table.Cell>
              <Table.Cell>20 GREVILLEA APP, YLYLUP</Table.Cell>
              <Table.Cell>SN3</Table.Cell>
              <Table.Cell>Unity Bunbury</Table.Cell>
              <Table.Cell>2024-11-19</Table.Cell>
              <Table.Cell>938.65</Table.Cell>
              <Table.Cell>752.81</Table.Cell>
            </Table.Row>
            {/* Add more rows from your mock data */}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
} 