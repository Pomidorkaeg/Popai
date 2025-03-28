import { useState } from 'react';
import { ArrowRight, Search, Calendar, Clock, Eye } from 'lucide-react';

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
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Новости</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.content}</p>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{item.views}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
