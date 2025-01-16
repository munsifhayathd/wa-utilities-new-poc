import { useState, useEffect } from 'react';
import { Job } from '../models/types';
import { getJobs, getJobByNotificationNo } from '../services/mockData';

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Simulate API call
      setTimeout(() => {
        const data = getJobs();
        setJobs(data);
        setIsLoading(false);
      }, 500);
    } catch (err) {
      setError('Failed to fetch jobs');
      setIsLoading(false);
    }
  }, []);

  return {
    data: jobs,
    isLoading,
    error,
  };
}

export function useJob(notificationNo: string) {
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Simulate API call
      setTimeout(() => {
        const data = getJobByNotificationNo(notificationNo);
        setJob(data || null);
        setIsLoading(false);
      }, 500);
    } catch (err) {
      setError('Failed to fetch job details');
      setIsLoading(false);
    }
  }, [notificationNo]);

  return {
    data: job,
    isLoading,
    error,
  };
} 