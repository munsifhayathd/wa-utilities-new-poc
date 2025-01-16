export interface Worker {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  isActive: boolean;
}

export interface WorkerFormData extends Omit<Worker, 'id'> {
  password: string;
}

export interface WorkerTableState {
  page: number;
  pageSize: number;
  sortBy: keyof Worker | null;
  sortDirection: 'asc' | 'desc';
  search: string;
} 