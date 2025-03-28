import { useState } from 'react';
import { Image as ImageIcon, Search, Calendar, PlayCircle } from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  url: string;
  date: string;
  thumbnail?: string;
}

export default function Media() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Медиа</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative aspect-video">
              {item.type === 'video' ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
              ) : (
                <img
                  src={item.thumbnail || item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <div className="flex items-center text-gray-600 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
