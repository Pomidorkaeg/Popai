import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  time: string;
  views: number;
  image?: string;
}

export default function News() {
  const [newsItems] = useState<NewsItem[]>([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Новости</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.content}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{item.date} {item.time}</span>
                <span>{item.views} просмотров</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
