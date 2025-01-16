import { cn } from '@/lib/utils/cn';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const statusStyles = {
  'New': 'bg-primary-main/10 text-primary-main',
  'In Progress': 'bg-warning/10 text-warning',
  'On Hold': 'bg-gray-400/10 text-gray-400',
  'Off Hold': 'bg-warning/10 text-warning',
  'Archived': 'bg-gray-500/10 text-gray-500',
  'Completed': 'bg-success/10 text-success',
  'Not Started': 'bg-gray-500/10 text-gray-500',
  'Done': 'bg-success/10 text-success',
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium',
        statusStyles[status as keyof typeof statusStyles],
        className
      )}
    >
      {status}
    </span>
  );
} 