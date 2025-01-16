import { Contractor } from '../models/types';

export const mockContractors: Contractor[] = [
  {
    id: '1',
    companyName: 'Unity Bunbury',
    firstName: 'William',
    lastName: 'Williams',
    email: 'benjamindforrest@mail.com',
    phone: '+61408964138',
    rate: 'Rate 4'
  },
  {
    id: '2',
    companyName: 'Unity Gas',
    firstName: 'Bill',
    lastName: 'Williams',
    email: 'unitygasptyltd@gmail.com',
    phone: '+61460350747',
    rate: 'Rate 3'
  },
  {
    id: '3',
    companyName: 'Alliance Gas',
    firstName: 'Dave',
    lastName: 'Tait',
    email: 'admin@alliancegroup.com.au',
    phone: '+61499003246',
    rate: 'Rate 3'
  },
  {
    id: '4',
    companyName: 'Portside',
    firstName: 'Glenn',
    lastName: 'Piggin',
    email: 'portside@iinet.net.au',
    phone: '+61418775114',
    rate: 'Rate 3'
  },
  {
    id: '5',
    companyName: 'WCU',
    firstName: 'Michael',
    lastName: 'Stevenson',
    email: 'westcoastutilities@outlook.com',
    phone: '+61457472382',
    rate: 'Rate 1'
  },
  {
    id: '6',
    companyName: 'Gasco',
    firstName: 'Justin',
    lastName: 'Geary',
    email: 'admin@gascowa.com.au',
    phone: '+61222556218',
    rate: 'Rate 1'
  },
  {
    id: '7',
    companyName: 'BKG',
    firstName: 'Ayesha',
    lastName: 'Muzaffar',
    email: 'contractor3@gmail.com',
    phone: '+61222556216',
    rate: 'Rate 3'
  },
  {
    id: '8',
    companyName: 'MK1',
    firstName: 'Mark',
    lastName: 'Dawson',
    email: 'mark@silveredgeholdings.com.au',
    phone: '+61419979899',
    rate: 'Rate 1'
  },
  {
    id: '9',
    companyName: 'GLS',
    firstName: 'Garrick',
    lastName: 'Soden',
    email: 'garricksoden@gmail.com',
    phone: '+61414932449',
    rate: 'Rate 1'
  }
];

export async function getContractors() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockContractors;
}

export async function addContractor(data: Omit<Contractor, 'id'>) {
  await new Promise(resolve => setTimeout(resolve, 500));
  const newContractor = {
    ...data,
    id: Math.random().toString(36).substr(2, 9)
  };
  mockContractors.push(newContractor);
  return newContractor;
} 