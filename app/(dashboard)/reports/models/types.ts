export type ReportType = 'financial' | 'contractor' | 'job';
export type TimePeriod = 'weekly' | 'monthly' | 'quarterly' | 'yearly' | 'custom';

export interface ContractorReportData {
  companyName: string;
  completed: number;
  inProgress: number;
  archived: number;
  onHold: number;
  offHold: number;
  totalJobs: number;
  overdue: number;
  achieved: number;
}

export interface JobReportData {
  notificationNo: string;
  jobType: string;
  assignedTo: string;
  taskCompletionDate: string;
  total: number;
  subbyRate: number;
  waUtilitiesRate: number;
}

export interface ReportSummary {
  totalWAUtilities: number;
  totalContractor: number;
  grandTotal: number;
} 