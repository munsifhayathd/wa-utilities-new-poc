'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants/routes';
import { cn } from '@/lib/utils/cn';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { name: 'Home', path: ROUTES.HOME, icon: '🏠' },
  { name: 'Jobs', path: ROUTES.JOBS, icon: '📋' },
  { name: 'Audit Log', path: ROUTES.AUDIT_LOG, icon: '📝' },
  { name: 'Reports', path: ROUTES.REPORTS, icon: '📊' },
  { name: 'Contract', path: ROUTES.CONTRACT, icon: '📄' },
  { name: 'Worker', path: ROUTES.WORKER, icon: '👤' },
  { name: 'ASCON', path: ROUTES.ASCON, icon: '🔔' }
];

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'bg-white shadow-sm transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-sidebar-collapsed' : 'w-sidebar-expanded'
      )}
    >
      <div className="flex h-header items-center justify-between border-b border-gray-200 px-4">
        <div className={cn('overflow-hidden', isCollapsed ? 'w-8' : 'w-32')}>
          {/* Logo */}
          <img src="/assets/Logo.png" alt="Logo" className="h-8 w-auto" />
        </div>
        <button
          onClick={onToggle}
          className="rounded-md p-2 hover:bg-gray-100"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="mt-4 space-y-1 px-2">
        {navigationItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
              {
                'bg-primary-main/10 text-primary-main': pathname === item.path,
                'text-gray-700 hover:bg-gray-100': pathname !== item.path,
                'justify-center': isCollapsed,
              }
            )}
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && <span className="ml-3">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
} 