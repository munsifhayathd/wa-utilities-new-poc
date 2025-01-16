import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { LoginForm } from './components/LoginForm';

export default function LoginPage() {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/Logo.png"
          alt="Logo"
          width={180}
          height={180}
          priority
          className="animate-fade-in"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <Card variant="bordered">
        <LoginForm />
      </Card>
    </div>
  );
} 