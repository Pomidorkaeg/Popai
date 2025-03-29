import React from 'react';
import { Trophy, Calendar, MapPin, Users } from 'lucide-react';
import { Tournament } from '@/utils/api';

interface TournamentCardProps {
  tournament: Tournament;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function TournamentCard({ tournament, isSelected, onClick }: TournamentCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-sm p-6 cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected ? 'ring-2 ring-green-500' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{tournament.name}</h3>
          <p className="text-sm text-gray-600">{tournament.description}</p>
        </div>
        <div className="flex items-center gap-1 text-green-600">
          <Trophy className="h-5 w-5" />
          <span className="text-sm font-medium">{tournament.status}</span>
        </div>
      </div>

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
    </div>
  );
}

