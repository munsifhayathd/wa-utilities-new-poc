'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ContractorFormData, ContractorRate } from '../models/types';
import { addContractor } from '../services/mockData';
import { Eye, EyeOff } from 'lucide-react';

const rateOptions: ContractorRate[] = ['Rate 1', 'Rate 2', 'Rate 3', 'Rate 4'];

export default function AddContractorPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContractorFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    rate: 'Rate 1',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addContractor(formData);
      router.push('/contract');
    } catch (error) {
      console.error('Failed to add contractor:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Add Contractor</h1>
        <button
          onClick={() => router.push('/contract')}
          className="rounded-md bg-[#298f98] px-4 py-2 text-sm font-medium text-white hover:bg-[#1f6b72] transition-colors"
        >
          Back To Listing
        </button>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
                placeholder="First Name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
                placeholder="Last Name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
                placeholder="Email"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                  +61
                </span>
                <input
                  type="tel"
                  required
                  value={formData.phone.replace('+61', '')}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: '+61' + e.target.value }))}
                  className="block w-full rounded-none rounded-r-md border border-gray-300 px-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
                  placeholder="Phone"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
                placeholder="Company Name"
              />
            </div>

            {/* Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rate <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.rate}
                onChange={(e) => setFormData(prev => ({ ...prev, rate: e.target.value as ContractorRate }))}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
              >
                {rateOptions.map((rate) => (
                  <option key={rate} value={rate}>
                    {rate}
                  </option>
                ))}
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => router.push('/contract')}
              className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-[#298f98] px-4 py-2 text-sm font-medium text-white hover:bg-[#1f6b72] transition-colors disabled:opacity-50"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 