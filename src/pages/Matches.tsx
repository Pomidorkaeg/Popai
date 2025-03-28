import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface Match {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  score?: string;
}

export default function Matches() {
  const [matches] = useState<Match[]>([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Матчи</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <Card key={match.id} className="p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">{match.homeTeam}</span>
              <span className="text-gray-500">vs</span>
              <span className="font-semibold">{match.awayTeam}</span>
            </div>
            <div className="space-y-2 text-sm text-gray-500">
              <div>Дата: {match.date}</div>
              <div>Время: {match.time}</div>
              <div>Место: {match.venue}</div>
              {match.score && <div className="font-semibold text-lg">{match.score}</div>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
