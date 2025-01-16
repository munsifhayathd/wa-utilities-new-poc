'use client';

import { useRouter } from 'next/navigation';
import { Table } from '@/components/ui/table';
import { useJobs } from '../viewmodels/useJobs';
import { StatusBadge } from './StatusBadge';
import { Skeleton } from '@/components/ui/skeleton';
import { Copy } from 'lucide-react';
import { TableSelect } from './TableSelect';

const taskStatusOptions = [
  { value: 'New', label: 'New' },
  { value: 'In Progress', label: 'In Progress' },
  { value: 'On Hold', label: 'On Hold', disabled: true },
  { value: 'Off Hold', label: 'Off Hold' },
  { value: 'Archived', label: 'Archived', disabled: true },
  { value: 'Completed', label: 'Completed' }
];

const contractorOptions = [
  { value: 'Unity Bunbury', label: 'Unity Bunbury' },
  { value: 'Unity Gas', label: 'Unity Gas' },
  { value: 'Alliance Gas', label: 'Alliance Gas' },
  { value: 'Portside', label: 'Portside' },
  { value: 'WCU', label: 'WCU' },
  { value: 'Gasco', label: 'Gasco' },
  { value: 'BKG', label: 'BKG' },
  { value: 'MK1', label: 'MK1' },
];

export function JobsTable() {
  const router = useRouter();
  const { data: jobs, isLoading, error } = useJobs();

  const handleRowClick = (notificationNo: string) => {
    router.push(`/jobs/${notificationNo}`);
  };

  if (isLoading) {
    return <JobsTableSkeleton />;
  }

  if (error) {
    return (
      <div className="rounded-md bg-status-error/10 p-4 text-status-error">
        {error}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-gray-200">
      <Table>
        <Table.Header>
          <Table.Row className="bg-gray-50">
            <Table.Head className="py-4">Notification No</Table.Head>
            <Table.Head className="py-4">Location</Table.Head>
            <Table.Head className="py-4">Area</Table.Head>
            <Table.Head className="py-4">Type</Table.Head>
            <Table.Head className="py-4">Task Status</Table.Head>
            <Table.Head className="py-4">Planned End Date</Table.Head>
            <Table.Head className="py-4">Assigned Contractor</Table.Head>
            <Table.Head className="py-4">Contractor Status</Table.Head>
            <Table.Head className="w-[100px] py-4">Action</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {jobs.map((job) => (
            <Table.Row 
              key={job.notificationNo}
              className="group cursor-pointer border-b border-gray-100 transition-colors hover:bg-gray-50 last:border-0"
              onClick={() => handleRowClick(job.notificationNo)}
            >
              <Table.Cell className="font-medium text-primary-main">
                {job.notificationNo}
              </Table.Cell>
              <Table.Cell className="max-w-[200px] truncate">
                {job.location}
              </Table.Cell>
              <Table.Cell>{job.area}</Table.Cell>
              <Table.Cell>{job.type}</Table.Cell>
              <Table.Cell onClick={(e) => e.stopPropagation()}>
                <TableSelect
                  value={job.taskStatus}
                  options={taskStatusOptions}
                  onChange={(value) => {
                    // Handle status change
                  }}
                />
              </Table.Cell>
              <Table.Cell>{job.plannedEndDate}</Table.Cell>
              <Table.Cell onClick={(e) => e.stopPropagation()}>
                <TableSelect
                  value={job.assignedContractor}
                  options={contractorOptions}
                  onChange={(value) => {
                    // Handle contractor change
                  }}
                  hasSearch
                />
              </Table.Cell>
              <Table.Cell>
                <StatusBadge status={job.contractorStatus} />
              </Table.Cell>
              <Table.Cell>
                <button 
                  className="invisible rounded-md p-2 text-gray-500 hover:bg-gray-100 group-hover:visible"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(job.notificationNo);
                  }}
                  title="Copy notification number"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

function JobsTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
      <div className="p-6">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="flex items-center space-x-4 py-4 first:pt-0 last:pb-0"
          >
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        ))}
      </div>
    </div>
  );
} 