import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered';
}

export function Card({ 
  className, 
  variant = 'default', 
  ...props 
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg bg-white p-6 shadow-sm',
        {
          'border border-gray-200': variant === 'bordered',
        },
        className
      )}
      {...props}
    />
  );
}

Card.displayName = 'Card'; 