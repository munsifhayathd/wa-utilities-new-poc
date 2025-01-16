'use client';

import { useState, useEffect } from 'react';
import { Contractor } from '../models/types';
import { getContractors } from '../services/mockData';

export function useContractors() {
  const [contractors, setContractors] = useState<Contractor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContractors() {
      try {
        const data = await getContractors();
        setContractors(data);
      } catch (err) {
        setError('Failed to fetch contractors');
      } finally {
        setIsLoading(false);
      }
    }

    fetchContractors();
  }, []);

  return { contractors, isLoading, error };
} 