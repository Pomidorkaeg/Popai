import React from 'react';
import { Card } from '@/components/ui/card';
import { Trophy, Calendar, MapPin, Users } from 'lucide-react';
import { Tournament } from '@/utils/api';

interface TournamentCardProps {
  tournament: Tournament;
  onClick: () => void;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ tournament, onClick }) => {
  return (
    <Card 
      className="p-6 cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{tournament.name}</h3>
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-green-600 capitalize">
            {tournament.status === 'active' ? 'Активный' : 'Завершен'}
          </span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{tournament.description}</p>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">
            {tournament.startDate} - {tournament.endDate}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{tournament.location}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Users className="h-4 w-4" />
          <span className="text-sm">{tournament.teams} команд</span>
        </div>
      </div>
    </Card>
  );
};

export default TournamentCard;

