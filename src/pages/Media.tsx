import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface MediaItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  date: string;
}

export default function Media() {
  const [mediaItems] = useState<MediaItem[]>([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Медиа</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="aspect-video relative">
              {item.type === 'image' ? (
                <img
                  src={item.thumbnail || item.url}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-2xl">▶</span>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
