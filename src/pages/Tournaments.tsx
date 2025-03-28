import { useState, useEffect } from 'react';

interface Tournament {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  teams: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export default function Tournaments() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Здесь будет логика загрузки турниров
    setLoading(false);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Турниры</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament) => (
          <div key={tournament.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4">
              <h3 className="font-semibold mb-2">{tournament.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{tournament.description}</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>Дата начала: {tournament.startDate}</div>
                <div>Дата окончания: {tournament.endDate}</div>
                <div>Место проведения: {tournament.location}</div>
                <div>Количество команд: {tournament.teams}</div>
                <div className="mt-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tournament.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                    tournament.status === 'ongoing' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {tournament.status === 'upcoming' ? 'Предстоящий' :
                     tournament.status === 'ongoing' ? 'Текущий' :
                     'Завершенный'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
