import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTournamentTable } from '@/utils/api';
import { Loader2 } from 'lucide-react';

const TournamentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ['tournament', id],
    queryFn: () => getTournamentTable(id || ''),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-green-600" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Ошибка при загрузке данных турнира</p>
          <Link
            to="/tournaments"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors inline-block"
          >
            Вернуться к списку турниров
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <Link
            to="/tournaments"
            className="text-green-600 hover:text-green-700 mb-4 inline-block"
          >
            ← Назад к списку турниров
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.title}</h1>
          <p className="text-gray-600">Сезон: {data.season}</p>
          <p className="text-gray-600">Последнее обновление: {data.lastUpdated}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Турнирная таблица</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left">Поз</th>
                      <th className="px-4 py-2 text-left">Команда</th>
                      <th className="px-4 py-2 text-center">И</th>
                      <th className="px-4 py-2 text-center">В</th>
                      <th className="px-4 py-2 text-center">Н</th>
                      <th className="px-4 py-2 text-center">П</th>
                      <th className="px-4 py-2 text-center">М</th>
                      <th className="px-4 py-2 text-center">О</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.teams.map((team) => (
                      <tr key={team.position} className="border-t">
                        <td className="px-4 py-2">{team.position}</td>
                        <td className="px-4 py-2">{team.name}</td>
                        <td className="px-4 py-2 text-center">{team.played}</td>
                        <td className="px-4 py-2 text-center">{team.won}</td>
                        <td className="px-4 py-2 text-center">{team.drawn}</td>
                        <td className="px-4 py-2 text-center">{team.lost}</td>
                        <td className="px-4 py-2 text-center">{team.goalsFor}:{team.goalsAgainst}</td>
                        <td className="px-4 py-2 text-center font-bold">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Бомбардиры</h2>
              <div className="space-y-2">
                {data.topScorers.map((scorer) => (
                  <div key={scorer.position} className="flex justify-between items-center">
                    <span>{scorer.name} ({scorer.team})</span>
                    <span className="font-bold">{scorer.goals}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Предупреждения</h2>
              <div className="space-y-2">
                {data.warnings.map((warning) => (
                  <div key={warning.position} className="flex justify-between items-center">
                    <span>{warning.name} ({warning.team})</span>
                    <span className="font-bold">{warning.warnings}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Удаления</h2>
              <div className="space-y-2">
                {data.expulsions.map((expulsion) => (
                  <div key={expulsion.position} className="flex justify-between items-center">
                    <span>{expulsion.name} ({expulsion.team})</span>
                    <span className="font-bold">{expulsion.expulsions}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetails; 