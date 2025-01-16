'use client';

import { Table } from '@/components/ui/table';
import { Contractor } from '../models/types';

interface ContractorTableProps {
  data: Contractor[];
}

export function ContractorTable({ data }: ContractorTableProps) {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Company Name</Table.Head>
          <Table.Head>First Name</Table.Head>
          <Table.Head>Last Name</Table.Head>
          <Table.Head>Email</Table.Head>
          <Table.Head>Phone</Table.Head>
          <Table.Head>Rate</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((contractor) => (
          <Table.Row key={contractor.id}>
            <Table.Cell>{contractor.companyName}</Table.Cell>
            <Table.Cell>{contractor.firstName}</Table.Cell>
            <Table.Cell>{contractor.lastName}</Table.Cell>
            <Table.Cell>{contractor.email}</Table.Cell>
            <Table.Cell>{contractor.phone}</Table.Cell>
            <Table.Cell>{contractor.rate}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
} 