import { AsconNotification } from '../models/types';

export const mockNotifications: AsconNotification[] = [
  {
    id: '1',
    notificationNo: '302743693',
    location: 'DS,BRNS BCH,BEACHSIDE,DR,72',
    dateTime: 'Feb 11, 2023 01:26',
    imageUrl: '/1Invoice.jpeg'
  },
  {
    id: '2',
    notificationNo: '302739518',
    location: 'PR,HLRYS,COOK,AVE,71',
    dateTime: 'Feb 11, 2023 01:26',
    imageUrl: '/1Invoice.jpeg'
  },
  {
    id: '3',
    notificationNo: '302749802',
    location: 'PR,HLRYS,BOOTIE,PL,3,U3',
    dateTime: 'Mar 01, 2023 08:19',
    imageUrl: '/1Invoice.jpeg'
  },
  {
    id: '4',
    notificationNo: '302749764',
    location: 'DS,HLRYS,BOOTIE,PL,3,U3',
    dateTime: 'Mar 09, 2023 13:41',
    imageUrl: '/1Invoice.jpeg'
  },
  {
    id: '5',
    notificationNo: '302744993',
    location: 'CS,OCN REEF,MARINA,BVD,7,U1',
    dateTime: 'Mar 14, 2023 06:30',
    imageUrl: '/1Invoice.jpeg'
  },
  {
    id: '6',
    notificationNo: '302731247',
    location: 'PR,INLOO,BARNES,ST,73A',
    dateTime: 'Mar 16, 2023 10:44',
    imageUrl: '/1Invoice.jpeg'
  },
  {
    id: '7',
    notificationNo: '302749123',
    location: 'PR,HLRYS,OCEAN,ST,15',
    dateTime: 'Mar 18, 2023 09:15',
    imageUrl: '/1Invoice.jpeg'
  },
  {
    id: '8',
    notificationNo: '302749456',
    location: 'DS,NRTH,BEACH,RD,45',
    dateTime: 'Mar 19, 2023 14:30',
    imageUrl: '/1Invoice.jpeg'
  },
  {
    id: '9',
    notificationNo: '302749789',
    location: 'CS,SCAR,WEST,COAST,HWY,101',
    dateTime: 'Mar 20, 2023 11:20',
    imageUrl: '/1Invoice.jpeg'
  }
];

export async function getNotifications(
  page: number,
  pageSize: number,
  search?: string
) {
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredNotifications = [...mockNotifications];

  if (search) {
    const searchLower = search.toLowerCase();
    filteredNotifications = filteredNotifications.filter(notification => 
      notification.notificationNo.includes(searchLower) ||
      notification.location.toLowerCase().includes(searchLower)
    );
  }

  const totalItems = filteredNotifications.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const start = (page - 1) * pageSize;
  const paginatedNotifications = filteredNotifications.slice(start, start + pageSize);

  return {
    notifications: paginatedNotifications,
    totalItems,
    totalPages
  };
} 