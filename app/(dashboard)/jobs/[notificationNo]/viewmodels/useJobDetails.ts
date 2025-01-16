'use client';

import { useState, useEffect } from 'react';
import { JobDetails } from '../../models/types';
import { getJobDetails } from '../../services/mockData';

export function useJobDetails(notificationNo: string) {
  const [data, setData] = useState<JobDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        // Get job details directly without throwing error
        const jobDetails = getJobDetails(notificationNo);
        if (jobDetails) {
          setData(jobDetails);
        } else {
          setError(new Error('Job not found'));
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch job details'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [notificationNo]);

  return { data, isLoading, error };
} 