import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Tournament {
  id: string;
  title: string;
  type: string;
  season: string;
  teams: number;
  source: string;
  featured: boolean;
}

export default function Index() {
  const [tournaments] = useState<Tournament[]>([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Главная страница</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament) => (
          <Card key={tournament.id} className="p-4">
            <h3 className="font-semibold mb-2">{tournament.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{tournament.type}</p>
            <div className="space-y-2 text-sm text-gray-500">
              <div>Сезон: {tournament.season}</div>
              <div>Команд: {tournament.teams}</div>
            </div>
            <Link to={`/tournaments/${tournament.id}`}>
              <Button className="mt-4">Подробнее</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
