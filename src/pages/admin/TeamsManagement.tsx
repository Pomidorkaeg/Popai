import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface Team {
  id: string;
  name: string;
  description: string;
  foundedDate: string;
  location: string;
}

export default function TeamsManagement() {
  const [teams] = useState<Team[]>([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Управление командами</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Card key={team.id} className="p-4">
            <h3 className="font-semibold mb-2">{team.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{team.description}</p>
            <div className="space-y-2 text-sm text-gray-500">
              <div>Дата основания: {team.foundedDate}</div>
              <div>Место: {team.location}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
