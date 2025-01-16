'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Mock login - we'll replace this with real authentication later
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/home');
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Email address"
        type="email"
        autoComplete="email"
        required
        placeholder="Enter your email"
      />

      <Input
        label="Password"
        type="password"
        autoComplete="current-password"
        required
        placeholder="Enter your password"
      />

      {error && (
        <div className="text-sm text-status-error">
          {error}
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        isLoading={isLoading}
      >
        Sign in
      </Button>
    </form>
  );
} 