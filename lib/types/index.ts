export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'contractor' | 'worker';
}

export interface AuthResponse {
  user: User;
  token: string;
} 