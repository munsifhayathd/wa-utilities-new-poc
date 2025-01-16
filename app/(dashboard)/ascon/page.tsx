'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye } from 'lucide-react';
import { mockNotifications } from './services/mockData';
import { ImagePlaceholder } from './components/ImagePlaceholder';

export default function AsconPage() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const filteredNotifications = mockNotifications.filter(notification =>
    notification.notificationNo.includes(search) ||
    notification.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleImageLoad = (notificationId: string) => {
    setLoadedImages(prev => ({ ...prev, [notificationId]: true }));
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">ASCON Notifications</h1>
        <input
          type="text"
          placeholder="Search notifications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#33b3bd] focus:outline-none focus:ring-1 focus:ring-[#33b3bd]"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
            onClick={() => router.push(`/ascon/${notification.notificationNo}`)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">
                Notification No.{notification.notificationNo}
              </h3>
              <Eye className="h-5 w-5 text-gray-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <p className="mt-2 text-sm text-gray-600">{notification.location}</p>
            <p className="mt-1 text-sm text-gray-500">{notification.dateTime}</p>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-md bg-gray-100">
              {!loadedImages[notification.id] && <ImagePlaceholder />}
              <img
                src={notification.imageUrl}
                alt={`Notification ${notification.notificationNo}`}
                className={`h-full w-full object-cover transition-opacity ${
                  loadedImages[notification.id] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(notification.id)}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 