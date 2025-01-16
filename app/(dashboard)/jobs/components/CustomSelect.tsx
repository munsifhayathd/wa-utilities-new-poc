'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils/cn';
import { ChevronDown } from 'lucide-react';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function CustomSelect({ 
  options, 
  value, 
  onChange, 
  placeholder = 'Select option',
  className 
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={cn(
          "relative flex h-10 w-full cursor-pointer items-center justify-between rounded-md border border-gray-200 bg-white px-3 text-sm",
          "focus-within:border-primary-light focus-within:ring-1 focus-within:ring-primary-light",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={cn(
          "truncate pr-8",
          !selectedOption && "text-gray-500"
        )}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <ChevronDown 
            className={cn(
              "h-4 w-4 text-gray-500 transition-transform duration-200",
              isOpen && "rotate-180"
            )} 
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 z-50 mt-1 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
          <div className="max-h-60 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option.value}
                className={cn(
                  "cursor-pointer px-3 py-2 text-sm",
                  "hover:bg-gray-50",
                  option.disabled && "cursor-default text-gray-400 hover:bg-transparent",
                  option.value === value && "bg-gray-50 font-medium"
                )}
                onClick={() => {
                  if (!option.disabled) {
                    onChange(option.value);
                    setIsOpen(false);
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