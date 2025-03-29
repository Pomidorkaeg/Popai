import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import { getTournamentsList } from '@/utils/api';
import { Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

const Index: React.FC = () => {
  const { data: tournaments, isLoading, error } = useQuery({
    queryKey: ['tournaments'],
    queryFn: getTournamentsList,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Последние турниры</h2>
          <p className="text-gray-600">Следите за результатами и статистикой ваших любимых турниров</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-full flex items-center justify-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-green-600" />
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-8">
              <p className="text-red-600 mb-4">Ошибка при загрузке списка турниров</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Повторить попытку
              </button>
            </div>
          ) : tournaments?.length === 0 ? (
            <div className="col-span-full text-center py-8 text-gray-600">
              Турниры не найдены
            </div>
          ) : (
            tournaments?.slice(0, 3).map((tournament) => (
              <div
                key={tournament.id}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tournament.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{tournament.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {tournament.startDate} - {tournament.endDate}
                  </span>
                  <Link
                    to={`/tournaments/${tournament.id}`}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Подробнее →
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
