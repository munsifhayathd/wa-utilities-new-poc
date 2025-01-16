import { Image as ImageIcon } from 'lucide-react';

export function ImagePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-100">
      <ImageIcon className="h-12 w-12 text-gray-400" />
    </div>
  );
} 