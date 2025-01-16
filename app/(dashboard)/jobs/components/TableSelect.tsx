'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils/cn';
import { ChevronDown } from 'lucide-react';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface TableSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  hasSearch?: boolean;
}

export function TableSelect({
  options,
  value,
  onChange,
  className,
  hasSearch = false,
}: TableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);
  const filteredOptions = hasSearch 
    ? options.filter(opt => opt.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : options;

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={cn(
          "flex cursor-pointer items-center justify-between gap-2 rounded-sm px-2 py-1.5",
          "hover:bg-gray-50",
          className
        )}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <span className={cn(
          "text-sm",
          !selectedOption?.value && "text-gray-500"
        )}>
          {selectedOption?.label || 'Select...'}
        </span>
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </div>

      {isOpen && (
        <div 
          className="absolute left-0 right-0 z-50 mt-1 min-w-[200px] overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {hasSearch && (
            <div className="border-b border-gray-100 p-2">
              <input
                type="text"
                className="w-full rounded-sm border border-gray-200 px-2 py-1 text-sm"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
          <div className="max-h-60 overflow-y-auto py-1">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className={cn(
                  "cursor-pointer px-3 py-1.5 text-sm",
                  "hover:bg-gray-50",
                  option.disabled && "cursor-default text-gray-400 hover:bg-transparent",
                  option.value === value && "bg-gray-50 font-medium"
                )}
                onClick={() => {
                  if (!option.disabled) {
                    onChange(option.value);
                    setIsOpen(false);
                    setSearchQuery('');
                  }
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 