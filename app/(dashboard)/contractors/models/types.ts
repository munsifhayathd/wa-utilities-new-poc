export interface Contractor {
  id: string;
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  rate: ContractorRate;
}

export type ContractorRate = 'Rate 1' | 'Rate 2' | 'Rate 3' | 'Rate 4';

export interface ContractorFormData extends Omit<Contractor, 'id'> {
  password: string;
} 