'use client';

interface HeaderProps {
  isSidebarCollapsed: boolean;
  onMenuClick: () => void;
}

export function Header({ isSidebarCollapsed, onMenuClick }: HeaderProps) {
  return (
    <header className="h-header border-b border-gray-200 bg-white px-6">
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="mr-4 rounded-md p-2 hover:bg-gray-100 lg:hidden"
            aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            ☰
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Add notification, profile, etc. */}
          <button className="rounded-full bg-gray-200 p-2">
            👤
          </button>
        </div>
      </div>
    </header>
  );
} 