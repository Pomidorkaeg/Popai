import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

interface TournamentTableProps {
  tournamentId: string;
  source: string;
}

interface Team {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

interface TournamentData {
  title: string;
  season: string;
  lastUpdated: string;
  teams: Team[];
}

// Временные данные для тестирования
const mockData: TournamentData = {
  title: "Тестовый турнир",
  season: "2023/2024",
  lastUpdated: new Date().toLocaleDateString(),
  teams: [
    {
      position: 1,
      name: "Команда 1",
      played: 10,
      won: 7,
      drawn: 2,
      lost: 1,
      goalsFor: 25,
      goalsAgainst: 8,
      goalDifference: 17,
      points: 23
    },
    {
      position: 2,
      name: "Команда 2",
      played: 10,
      won: 6,
      drawn: 3,
      lost: 1,
      goalsFor: 20,
      goalsAgainst: 10,
      goalDifference: 10,
      points: 21
    }
  ]
};

const TournamentTable: React.FC<TournamentTableProps> = ({ tournamentId, source }) => {
  const [data, setData] = useState<TournamentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Имитация задержки сети
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (isMounted) {
          setData(mockData);
        }
      } catch (err) {
        console.error('Error loading tournament data:', err);
        if (isMounted) {
          setError('Не удалось загрузить данные турнира');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [tournamentId, source]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-fc-green"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
        <AlertCircle className="w-5 h-5 text-red-500" />
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium text-gray-900">{data.title}</h3>
        <p className="mt-1 text-sm text-gray-500">Сезон {data.season}</p>
        <p className="mt-1 text-sm text-gray-500">Обновлено: {data.lastUpdated}</p>
      </div>
      <div className="border-t border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Поз</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Команда</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">И</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">В</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Н</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">П</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">М</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">РМ</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">О</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.teams.map((team) => (
              <tr key={team.position} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{team.position}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{team.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.played}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.won}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.drawn}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.lost}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.goalsFor}-{team.goalsAgainst}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.goalDifference}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-fc-green">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TournamentTable;
