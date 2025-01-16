import { Job, TaskStatus, ContractorStatus, Area, JobType } from '../models/types';

const generateJobId = () => Math.floor(Math.random() * 90000000) + 10000000;

const contractors = ['Alliance Gas', 'BKG', 'Portside'];
const locations = [
  'U10, 96 BORTOLO DR, GREENFIELDS',
  '6 YORK AVE, BNTLY',
  '22 PIRIE RD, BYFD',
  '12 TONBERT RD, HAYNES',
  '9 GOUDA VISTA, BYFD',
  '19 GALILEO LOOP, MNDRH'
];

const generateMockJob = (
  status: TaskStatus,
  contractorStatus: ContractorStatus,
  area: Area,
  type: JobType
): Job => ({
  notificationNo: generateJobId().toString(),
  location: locations[Math.floor(Math.random() * locations.length)],
  area,
  type,
  taskStatus: status,
  plannedEndDate: new Date(
    Date.now() + Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
  ).toISOString().split('T')[0],
  assignedContractor: contractors[Math.floor(Math.random() * contractors.length)],
  contractorStatus,
  
  // Additional details
  jobStatus: status,
  taskCode: 'ISAM',
  workerStatus: contractorStatus,
  jobType: type,
  mainsDetails: '65,PE,2015,MP-05',
  dueDate: new Date(
    Date.now() + Math.floor(Math.random() * 15) * 24 * 60 * 60 * 1000
  ).toISOString().split('T')[0],
  address: locations[Math.floor(Math.random() * locations.length)],
  jobNotes: 'Sample job notes for reference and testing purposes.',
  assignedWorker: 'John Doe'
});

// Generate a mix of jobs with different statuses
export const mockJobs: Job[] = [
  // New Jobs
  generateMockJob('New', 'Not Started', 'South', 'SN1'),
  generateMockJob('New', 'Not Started', 'South', 'SN3'),
  
  // In Progress Jobs
  generateMockJob('In Progress', 'Not Started', 'South', 'SN3'),
  generateMockJob('In Progress', 'Not Started', 'North', 'SN1'),
  generateMockJob('In Progress', 'In Progress', 'South', 'SN3'),
  
  // Completed Jobs
  generateMockJob('Archived', 'Completed', 'South', 'SN3'),
  generateMockJob('Archived', 'Completed', 'North', 'SN1'),
  generateMockJob('Archived', 'Done', 'South', 'SN3'),
];

export const getJobs = () => mockJobs;

export const getJobByNotificationNo = (notificationNo: string) => 
  mockJobs.find(job => job.notificationNo === notificationNo); 

export interface TakeFiveDetails {
  id: string;
  status: 'Pending' | 'Completed';
  items: Array<{
    id: string;
    question: string;
    checked: boolean;
    notes?: string;
  }>;
}

export interface ActivityDetails {
  activities: Array<{
    id: string;
    type: string;
    status: string;
    date: string;
    notes?: string;
  }>;
}

export interface MeterDetails {
  meterNumber: string;
  type: string;
  location: string;
  readings: Array<{
    id: string;
    date: string;
    value: number;
    type: string;
  }>;
}

export interface AttachmentDetails {
  files: Array<{
    id: string;
    name: string;
    type: string;
    size: number;
    uploadedAt: string;
    url: string;
  }>;
}

export function getJobDetails(notificationNo: string): JobDetails | null {
  const job = mockJobs.find(j => j.notificationNo === notificationNo);
  if (!job) return null;

  return {
    basic: job,
    takeFive: {
      id: '1',
      status: 'Incomplete',
      currentStep: 1,
      lastUpdated: new Date().toISOString(),
      steps: {
        step1: {
          name: '',
          date: '15/01/2025',
          time: '14:36',
          address: 'DS,BNTLY,YORK,AVE,6',
          task: 'ISAM',
          notificationNo: '302779960'
        },
        step2: {
          questions: [
            {
              id: '1',
              question: 'Has there been changes to:',
              answer: 'No'
            },
            {
              id: '2',
              question: 'Do you understand relevant SWIs?',
              answer: 'Yes'
            },
            {
              id: '3',
              question: 'Are you competent to undertake this task or under the guidance of someone who is?',
              answer: 'Yes'
            },
            {
              id: '4',
              question: 'Are you fit to perform the required task?',
              answer: 'Yes'
            },
            {
              id: '5',
              question: 'PPE, tools and equipment in a good working order?',
              answer: 'Yes'
            },
            {
              id: '6',
              question: 'Have you informed others in your area of the likely effects of the task?',
              answer: 'Yes'
            }
          ],
          isComplete: false
        },
        step3: {
          permits: [
            {
              id: '1',
              type: 'Major permit',
              question: 'Permit obtained?',
              obtained: true
            },
            {
              id: '2',
              type: 'Minor permit',
              question: 'Permit obtained?',
              obtained: true
            },
            {
              id: '3',
              type: 'Confined space work',
              question: 'Permit obtained?',
              obtained: false
            },
            {
              id: '4',
              type: 'Hot works',
              question: 'Permit obtained?',
              obtained: false
            },
            {
              id: '5',
              type: 'Verbal notification',
              question: 'Control Room contacted?',
              obtained: true
            }
          ]
        },
        step4: {
          hazards: {
            vehicle: ['Interaction with objects', 'Interaction with vehicles', 'Interaction with pedestrian'],
            vibration: ['Continuous', 'Arm/hand', 'Whole body'],
            chemical: ['Liquids', 'Vapour/Dust', 'Radiation'],
            mobilePlant: ['Struck by', 'Caught in-between', 'Mechanical lifting aids/HIAB'],
            physical: ['Obstructions', 'Fitness for work/fatigue', 'Fall from height/trip/slip'],
            fireHotWorks: ['Gaseous atmosphere', 'Ignition sources', 'Dry combustible materials'],
            ergonomically: ['Lifting/pulling/pushing', 'Repetitive task', 'Awkward position'],
            biological: ['Bites/sting', 'Sewerage', 'Sharps'],
            environment: ['Flora/fauna', 'Contaminated site', 'Poor lighting'],
            mechanical: ['Pinching', 'Crushing', 'Cutting'],
            weather: ['Rain/hail/storm', 'Hot/Cold', 'Lightning'],
            other: ['Confined space', 'Electrical hazards/RCD', 'Underground assets']
          }
        },
        step5: {
          hazardControls: []
        }
      }
    },
    activities: {
      activities: [
        {
          id: '1',
          type: 'Site Visit',
          status: 'Completed',
          date: '2024-03-10',
          notes: 'Initial site inspection completed',
        },
        {
          id: '2',
          type: 'Risk Assessment',
          status: 'In Progress',
          date: '2024-03-11',
          notes: 'Conducting detailed risk assessment of the work area',
        },
        {
          id: '3',
          type: 'Equipment Check',
          status: 'Completed',
          date: '2024-03-12',
          notes: 'All equipment verified and ready for use',
        },
        {
          id: '4',
          type: 'Team Briefing',
          status: 'Scheduled',
          date: '2024-03-13',
        },
      ],
    },
    meter: {
      meterNumber: 'M123456',
      type: 'Gas Meter',
      location: 'Front of property',
      readings: [
        {
          id: '1',
          date: '2024-03-10',
          value: 1234,
          type: 'Regular',
        },
        {
          id: '2',
          date: '2024-03-11',
          value: 1256,
          type: 'Regular',
        },
        {
          id: '3',
          date: '2024-03-12',
          value: 1278,
          type: 'Regular',
        },
        {
          id: '4',
          date: '2024-03-13',
          value: 1290,
          type: 'Final',
        },
      ],
    },
    attachments: {
      files: [
        {
          id: '1',
          name: 'site-photo.jpg',
          type: 'image/jpeg',
          size: 1024000,
          uploadedAt: '2024-03-10T10:00:00Z',
          url: '/mock-url/site-photo.jpg',
        },
        {
          id: '2',
          name: 'inspection-report.pdf',
          type: 'application/pdf',
          size: 2048576,
          uploadedAt: '2024-03-11T14:30:00Z',
          url: '/mock-url/inspection-report.pdf',
        },
        {
          id: '3',
          name: 'safety-checklist.docx',
          type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          size: 512000,
          uploadedAt: '2024-03-12T09:15:00Z',
          url: '/mock-url/safety-checklist.docx',
        },
      ],
    },
  };
} 