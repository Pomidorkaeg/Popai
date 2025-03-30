import React from 'react';
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
  const data = mockData;

  if (!data) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">Данные турнира недоступны</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{data.title}</h2>
          <p className="text-gray-500">Сезон {data.season}</p>
        </div>
        <p className="text-sm text-gray-500">
          Последнее обновление: {data.lastUpdated}
        </p>
      </div>

      <div className="overflow-x-auto">
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TournamentTable;
