import { Worker } from '../models/types';

export const mockWorkers: Worker[] = [
  {
    id: '1',
    firstName: 'Raurke',
    lastName: 'George',
    email: 'raurke@hotmail.com',
    phone: '+61474114865',
    companyName: 'BKG',
    isActive: true
  },
  {
    id: '2',
    firstName: 'Harrison',
    lastName: 'Pallant',
    email: 'HarryP11ant@outlook.com',
    phone: '+61497111618',
    companyName: 'WCU',
    isActive: true
  },
  {
    id: '3',
    firstName: 'Dejan',
    lastName: 'Petrovic',
    email: 'ezbeats.productions.01@gmail.com',
    phone: '+61436295492',
    companyName: 'MK1',
    isActive: true
  },
  {
    id: '4',
    firstName: 'Cruz',
    lastName: 'Carpenter',
    email: 'carpentercruz777@gmail.com',
    phone: '+61461543835',
    companyName: 'MK1',
    isActive: true
  },
  {
    id: '5',
    firstName: 'Chad',
    lastName: 'Stanhope',
    email: 'chadstanhope@hotmail.com',
    phone: '+61474977615',
    companyName: 'MK1',
    isActive: true
  },
  {
    id: '6',
    firstName: 'Jack',
    lastName: 'Foster',
    email: 'jackkfoster@yahoo.com.au',
    phone: '+61416745935',
    companyName: 'WCU',
    isActive: true
  },
  {
    id: '7',
    firstName: 'Jarrad',
    lastName: 'Davies',
    email: 'jarraddavies21@gmail.com',
    phone: '+61456593833',
    companyName: 'Portside',
    isActive: true
  },
  {
    id: '8',
    firstName: 'Jack',
    lastName: 'Alden',
    email: 'jack.alden2@outlook.com',
    phone: '+61452567329',
    companyName: 'BKG',
    isActive: true
  },
  {
    id: '9',
    firstName: 'Blake',
    lastName: 'Wood',
    email: 'blakerjwood@gmail.com',
    phone: '+61401 280 452',
    companyName: 'BKG',
    isActive: true
  },
  {
    id: '10',
    firstName: 'Robert',
    lastName: 'Wood',
    email: 'Robert.wood@student.education.wa.edu.au',
    phone: '+61420 236 178',
    companyName: 'BKG',
    isActive: true
  },
  {
    id: '11',
    firstName: 'Lewis',
    lastName: 'Rowlands',
    email: 'lewisbkgas@icloud.com',
    phone: '+61544628900',
    companyName: 'BKG',
    isActive: true
  },
  {
    id: '12',
    firstName: 'Kevin',
    lastName: 'Villanova',
    email: 'kevinvallanova@outlook.com',
    phone: '+61411017056',
    companyName: 'MK1',
    isActive: true
  },
  {
    id: '13',
    firstName: 'James',
    lastName: 'Kattenberg',
    email: 'jaekatt@gmail.com',
    phone: '+61475694910',
    companyName: 'Portside',
    isActive: true
  },
  {
    id: '14',
    firstName: 'Tayne',
    lastName: 'Simmons',
    email: 'taynesimmons@gmail.com',
    phone: '+61406186533',
    companyName: 'Portside',
    isActive: true
  },
  {
    id: '15',
    firstName: 'Jack',
    lastName: 'Hudson - Bowe',
    email: 'j_hudsonbowe@yahoo.com',
    phone: '+61461435417',
    companyName: 'WCU',
    isActive: true
  },
  {
    id: '16',
    firstName: 'Jacob',
    lastName: 'Regan',
    email: 'jacob_reego@hotmail.com',
    phone: '+61424155804',
    companyName: 'WCU',
    isActive: true
  },
  {
    id: '17',
    firstName: 'Christian',
    lastName: 'Johnston - Dorain',
    email: 'Christianjd03@icloud.com',
    phone: '+61451 072 542',
    companyName: 'Alliance Gas',
    isActive: true
  }
];

export async function getWorkers(
  page: number,
  pageSize: number,
  sortBy?: keyof Worker,
  sortDirection?: 'asc' | 'desc',
  search?: string
) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredWorkers = [...mockWorkers];

  // Apply search
  if (search) {
    const searchLower = search.toLowerCase();
    filteredWorkers = filteredWorkers.filter(worker => 
      worker.firstName.toLowerCase().includes(searchLower) ||
      worker.lastName.toLowerCase().includes(searchLower) ||
      worker.email.toLowerCase().includes(searchLower) ||
      worker.companyName.toLowerCase().includes(searchLower)
    );
  }

  // Apply sorting
  if (sortBy) {
    filteredWorkers.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      const direction = sortDirection === 'desc' ? -1 : 1;
      return aValue > bValue ? direction : -direction;
    });
  }

  // Apply pagination
  const totalItems = filteredWorkers.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const start = (page - 1) * pageSize;
  const paginatedWorkers = filteredWorkers.slice(start, start + pageSize);

  return {
    workers: paginatedWorkers,
    totalItems,
    totalPages
  };
}

export async function addWorker(data: Omit<Worker, 'id'>) {
  await new Promise(resolve => setTimeout(resolve, 500));
  const newWorker = {
    ...data,
    id: Math.random().toString(36).substr(2, 9)
  };
  mockWorkers.push(newWorker);
  return newWorker;
} 