'use client';

import { useState } from 'react';
import { AttachmentDetails } from '@/app/(dashboard)/jobs/services/mockData';
import { Pencil, Plus, Download, Trash2, FileText } from 'lucide-react';

interface AttachmentsProps {
  data: AttachmentDetails;
}

export function Attachments({ data }: AttachmentsProps) {
  const [isEditing, setIsEditing] = useState(false);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Attachments</h3>
          <p className="text-sm text-gray-500">
            {data.files.length} file{data.files.length !== 1 ? 's' : ''} attached
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
          >
            <Pencil className="h-4 w-4" />
            {isEditing ? 'Done' : 'Manage Files'}
          </button>
          <button
            onClick={() => {
              // Handle file upload
            }}
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
          >
            <Plus className="h-4 w-4" />
            Upload File
          </button>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200">
        <div className="divide-y divide-gray-200">
          {data.files.map((file) => (
            <div 
              key={file.id} 
              className="flex items-center justify-between p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-900">
                    {file.name}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{formatFileSize(file.size)}</span>
                    <span>•</span>
                    <span>{new Date(file.uploadedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {isEditing ? (
                  <button
                    onClick={() => {
                      // Handle file deletion
                    }}
                    className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      // Handle file download
                    }}
                    className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {data.files.length === 0 && (
        <div className="rounded-lg border border-dashed border-gray-300 p-8">
          <div className="text-center">
            <FileText className="mx-auto h-8 w-8 text-gray-400" />
            <p className="mt-2 text-sm font-medium text-gray-900">No files attached</p>
            <p className="mt-1 text-sm text-gray-500">
              Upload files by clicking the button above
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 