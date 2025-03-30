import React from 'react';

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
  name: string;
  season: string;
  lastUpdated: string;
  teams: Team[];
}

// Временные данные для тестирования
const mockData: TournamentData = {
  name: 'Чемпионат России',
  season: '2023/2024',
  lastUpdated: '2024-03-20',
    teams: [
    {
      position: 1,
      name: 'Зенит',
      played: 20,
      won: 15,
      drawn: 3,
      lost: 2,
      goalsFor: 45,
      goalsAgainst: 15,
      goalDifference: 30,
      points: 48
    },
    {
      position: 2,
      name: 'ЦСКА',
      played: 20,
      won: 14,
      drawn: 4,
      lost: 2,
      goalsFor: 40,
      goalsAgainst: 18,
      goalDifference: 22,
      points: 46
    }
  ]
};

const TournamentTable: React.FC<TournamentTableProps> = ({ tournamentId, source }) => {
  const data = mockData;

  if (!data) {
    return null;
  }
  
  return (
        <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.name}</h2>
        <p className="text-gray-600">Сезон {data.season}</p>
        <p className="text-sm text-gray-500 mt-1">Последнее обновление: {new Date(data.lastUpdated).toLocaleDateString()}</p>
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
