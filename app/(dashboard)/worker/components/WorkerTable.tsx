'use client';

import { Table } from '@/components/ui/table';
import { Worker } from '../models/types';

interface WorkerTableProps {
  data: Worker[];
}

export function WorkerTable({ data }: WorkerTableProps) {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>First Name</Table.Head>
          <Table.Head>Last Name</Table.Head>
          <Table.Head>Email</Table.Head>
          <Table.Head>Phone</Table.Head>
          <Table.Head>Company Name</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((worker) => (
          <Table.Row key={worker.id}>
            <Table.Cell>{worker.firstName}</Table.Cell>
            <Table.Cell>{worker.lastName}</Table.Cell>
            <Table.Cell>{worker.email}</Table.Cell>
            <Table.Cell>{worker.phone}</Table.Cell>
            <Table.Cell>{worker.companyName}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
} 