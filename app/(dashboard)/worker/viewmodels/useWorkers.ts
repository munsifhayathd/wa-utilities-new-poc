'use client';

import { useState, useEffect } from 'react';
import { Worker, WorkerTableState } from '../models/types';
import { getWorkers } from '../services/mockData';

export function useWorkers() {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tableState, setTableState] = useState<WorkerTableState>({
    page: 1,
    pageSize: 10,
    sortBy: null,
    sortDirection: 'asc',
    search: ''
  });
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    async function fetchWorkers() {
      try {
        setIsLoading(true);
        const { workers: data, totalPages: pages, totalItems: items } = 
          await getWorkers(
            tableState.page,
            tableState.pageSize,
            tableState.sortBy,
            tableState.sortDirection,
            tableState.search
          );
        setWorkers(data);
        setTotalPages(pages);
        setTotalItems(items);
      } catch (err) {
        setError('Failed to fetch workers');
      } finally {
        setIsLoading(false);
      }
    }

    fetchWorkers();
  }, [tableState]);

  return {
    workers,
    isLoading,
    error,
    tableState,
    setTableState,
    totalPages,
    totalItems
  };
} 