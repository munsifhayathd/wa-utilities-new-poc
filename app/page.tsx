import { redirect } from 'next/navigation';
import { ROUTES } from '@/lib/constants/routes';

export default function RootPage() {
  // For now, redirect to login. Later we'll check auth state here
  redirect(ROUTES.LOGIN);
}
