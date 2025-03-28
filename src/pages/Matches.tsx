import { useState } from 'react';
import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  location: string;
  score?: string;
}

export default function Matches() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Матчи</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <div key={match.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-semibold">{match.homeTeam}</div>
              <div className="text-lg font-semibold">{match.awayTeam}</div>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>{match.date}</span>
              <span>{match.time}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 mt-2">
              <MapPin className="h-4 w-4" />
              <span>{match.location}</span>
            </div>
            {match.score && (
              <div className="mt-4 text-xl font-bold text-center">
                {match.score}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
