export interface AsconNotification {
  id: string;
  notificationNo: string;
  location: string;
  dateTime: string;
  imageUrl: string;
}

export interface AsconTableState {
  page: number;
  pageSize: number;
  search: string;
} 