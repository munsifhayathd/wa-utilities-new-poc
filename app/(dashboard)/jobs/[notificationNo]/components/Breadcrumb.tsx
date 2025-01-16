'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function Breadcrumb() {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500">
      <Link 
        href="/jobs" 
        className="hover:text-gray-700"
      >
        Jobs
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span>Job Details</span>
    </nav>
  );
} 