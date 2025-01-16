// Contractor Report Data
export const contractorReportData = [
  {
    companyName: 'Unity Bunbury',
    completed: 0,
    inProgress: 0,
    archived: 0,
    onHold: 0,
    offHold: 0,
    totalJobs: 0,
    overdue: 0,
    achieved: 0
  },
  {
    companyName: 'Unity Gas',
    completed: 0,
    inProgress: 0,
    archived: 0,
    onHold: 0,
    offHold: 0,
    totalJobs: 0,
    overdue: 0,
    achieved: 0
  },
  {
    companyName: 'Alliance Gas',
    completed: 0,
    inProgress: 0,
    archived: 0,
    onHold: 0,
    offHold: 0,
    totalJobs: 0,
    overdue: 0,
    achieved: 0
  },
  {
    companyName: 'Portside',
    completed: 0,
    inProgress: 0,
    archived: 0,
    onHold: 0,
    offHold: 0,
    totalJobs: 0,
    overdue: 0,
    achieved: 0
  },
  {
    companyName: 'WCU',
    completed: 0,
    inProgress: 0,
    archived: 0,
    onHold: 0,
    offHold: 0,
    totalJobs: 0,
    overdue: 0,
    achieved: 0
  },
  {
    companyName: 'Gasco',
    completed: 0,
    inProgress: 0,
    archived: 0,
    onHold: 0,
    offHold: 0,
    totalJobs: 0,
    overdue: 0,
    achieved: 0
  },
  {
    companyName: 'BKG',
    completed: 0,
    inProgress: 0,
    archived: 0,
    onHold: 0,
    offHold: 0,
    totalJobs: 0,
    overdue: 0,
    achieved: 0
  },
  {
    companyName: 'MK1',
    completed: 0,
    inProgress: 0,
    archived: 0,
    onHold: 0,
    offHold: 0,
    totalJobs: 0,
    overdue: 0,
    achieved: 0
  },
  {
    companyName: 'GLS',
    completed: 0,
    inProgress: 0,
    archived: 0,
    onHold: 0,
    offHold: 0,
    totalJobs: 0,
    overdue: 0,
    achieved: 0
  }
];

// Job Report Data
export const jobReportData = [
  {
    notificationNo: '302968712',
    jobType: 'SN3',
    assignedTo: 'Unity Bunbury',
    taskCompletionDate: '2024-11-19',
    total: 1691.46,
    subbyRate: 752.81,
    waUtilitiesRate: 938.65
  },
  {
    notificationNo: '302969015',
    jobType: 'SPU',
    assignedTo: 'Gasco',
    taskCompletionDate: '2024-11-20',
    total: 1581.17,
    subbyRate: 708.94,
    waUtilitiesRate: 872.23
  },
  {
    notificationNo: '302969014',
    jobType: 'SNB',
    assignedTo: 'Gasco',
    taskCompletionDate: '2024-11-20',
    total: 4420.9,
    subbyRate: 1743.3,
    waUtilitiesRate: 2677.6
  },
  {
    notificationNo: '302968652',
    jobType: 'SN3',
    assignedTo: 'BKG',
    taskCompletionDate: '2024-11-19',
    total: 1463.1,
    subbyRate: 660.51,
    waUtilitiesRate: 802.59
  },
  // ... add all other jobs from your reference image
];

// Helper function to get report data based on type
export const getReportData = (type: 'contractor' | 'job') => {
  return type === 'contractor' ? contractorReportData : jobReportData;
}; 