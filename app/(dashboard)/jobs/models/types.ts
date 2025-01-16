export interface Job {
  notificationNo: string;
  location: string;
  area: 'South' | 'North' | 'East' | 'West';
  type: 'SN1' | 'SN3';
  taskStatus: 'New' | 'In Progress' | 'Archived';
  plannedEndDate: string;
  assignedContractor: string;
  contractorStatus: 'Not Started' | 'Completed' | 'Done';
  
  // Additional details
  jobStatus?: string;
  taskCode?: string;
  workerStatus?: string;
  jobType?: string;
  mainsDetails?: string;
  dueDate?: string;
  address?: string;
  jobNotes?: string;
  assignedWorker?: string;
}

export type TaskStatus = 
  | 'New'
  | 'In Progress'
  | 'On Hold'
  | 'Off Hold'
  | 'Archived'
  | 'Completed';
export type ContractorStatus = 'Not Started' | 'Completed' | 'Done';
export type Area = 'South' | 'North' | 'East' | 'West';
export type JobType = 'SN1' | 'SN3';

// For the job details sections
export interface JobDetails {
  basic: Job;
  takeFive: TakeFiveData;
  activities: ActivityDetails;
  meter: MeterDetails;
  attachments: AttachmentDetails;
} 

export interface TakeFiveStep1 {
  name: string;
  date: string;
  time: string;
  address: string;
  task: string;
  notificationNo: string;
}

export interface TakeFiveStep2Question {
  id: string;
  question: string;
  answer: 'Yes' | 'No' | 'N/A';
}

export interface TakeFivePermit {
  id: string;
  type: string;
  question: string;
  obtained: boolean;
}

export interface TakeFiveHazardCategory {
  id: string;
  name: string;
  items: Array<{
    id: string;
    name: string;
    selected: boolean;
  }>;
}

export interface TakeFiveHazardControl {
  id: string;
  hazard: string;
  description: string;
  implemented: boolean;
}

export interface TakeFiveData {
  id: string;
  status: 'Incomplete' | 'Complete';
  currentStep: number;
  lastUpdated: string;
  steps: {
    step1: TakeFiveStep1;
    step2: {
      questions: TakeFiveStep2Question[];
      isComplete: boolean;
    };
    step3: {
      permits: TakeFivePermit[];
      isComplete: boolean;
    };
    step4: {
      hazardCategories: {
        vehicle: TakeFiveHazardCategory;
        vibration: TakeFiveHazardCategory;
        chemical: TakeFiveHazardCategory;
        mobilePlant: TakeFiveHazardCategory;
        physical: TakeFiveHazardCategory;
        fireHotWorks: TakeFiveHazardCategory;
        ergonomically: TakeFiveHazardCategory;
        biological: TakeFiveHazardCategory;
        environment: TakeFiveHazardCategory;
        mechanical: TakeFiveHazardCategory;
        weather: TakeFiveHazardCategory;
        other: TakeFiveHazardCategory;
      };
      isComplete: boolean;
    };
    step5: {
      hazardControls: TakeFiveHazardControl[];
      isComplete: boolean;
    };
  };
} 