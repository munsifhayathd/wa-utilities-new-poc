import { JobStatusData } from '../models/types';

// Mock data - will be replaced with real API call later
const mockData: JobStatusData = {
  completed: 45,
  inProgress: 30,
  allocated: 25,
};

export function useJobStatus() {
  // Later this will fetch real data
  return {
    data: mockData,
    isLoading: false,
    error: null,
  };
} 