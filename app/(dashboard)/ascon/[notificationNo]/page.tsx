'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ZoomIn, ZoomOut } from 'lucide-react';
import { mockNotifications } from '../services/mockData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import Image from 'next/image';

interface AsconDetailPageProps {
  params: {
    notificationNo: string;
  };
}

export default function AsconDetailPage({ params }: AsconDetailPageProps) {
  const router = useRouter();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  
  const notification = mockNotifications.find(n => n.notificationNo === params.notificationNo);

  if (!notification) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-gray-500">Notification not found</div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">
            Notification No.{notification.notificationNo}
          </h1>
        </div>
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="rounded-md bg-gray-100 p-2 text-gray-700 hover:bg-gray-200"
        >
          {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
        </button>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Location</h3>
            <p className="mt-1 text-sm text-gray-900">{notification.location}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
            <p className="mt-1 text-sm text-gray-900">{notification.dateTime}</p>
          </div>
        </div>

        <div 
          className={`relative overflow-hidden rounded-lg bg-gray-100 transition-all ${
            isZoomed ? 'aspect-auto h-[80vh]' : 'aspect-[16/9]'
          }`}
        >
          {!isImageLoaded && <ImagePlaceholder />}
          <Image
            src="/1Invoice.jpeg"
            alt={`Notification ${notification.notificationNo}`}
            fill
            className={`object-contain transition-opacity ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadingComplete={() => setIsImageLoaded(true)}
            priority
          />
        </div>
      </div>
    </div>
  );
} 