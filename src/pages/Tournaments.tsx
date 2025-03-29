import React from 'react';
import { Link } from 'react-router-dom';
import { getTournamentsList } from '@/utils/api';

const Tournaments: React.FC = () => {
  const tournaments = getTournamentsList();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Все турниры</h1>
          <p className="text-gray-600">Выберите турнир для просмотра подробной информации</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
