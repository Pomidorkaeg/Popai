import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface Team {
  id: string;
  name: string;
  description: string;
  foundedDate: string;
  location: string;
  achievements: string[];
}

export default function Team() {
  const [team] = useState<Team | null>(null);

  if (!team) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Команда не найдена</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{team.name}</h1>
            <p className="text-gray-600">{team.location}</p>
          </div>
        </div>
        
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">О команде</h2>
          <p className="text-gray-600 mb-4">{team.description}</p>
          <div className="text-sm text-gray-500">
            <p>Дата основания: {team.foundedDate}</p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Достижения</h2>
          <ul className="space-y-2">
            {team.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-600">• {achievement}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
