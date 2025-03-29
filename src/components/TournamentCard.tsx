import React from 'react';
import { Trophy, Users, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface TournamentCardProps {
  id: string;
  title: string;
  type: string;
  season: string;
  teams: number;
  source: string;
  featured?: boolean;
  tournament: {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    teams: number;
    status: string;
  };
}

const TournamentCard: React.FC<TournamentCardProps> = ({
  id,
  title,
  type,
  season,
  teams,
  source,
  featured = false,
  tournament
}) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:border-green-200 transition-all duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tournament.name}</h3>
        <p className="text-gray-600 mb-4">{tournament.description}</p>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Calendar size={16} className="text-green-600" />
          <span>{tournament.startDate} - {tournament.endDate}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin size={16} className="text-green-600" />
          <span>{tournament.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Users size={16} className="text-green-600" />
          <span>{tournament.teams} команд</span>
        </div>
        <div className="flex items-center justify-between">
          <span className={cn(
            "px-3 py-1 rounded-full text-sm font-medium",
            tournament.status === 'active' 
              ? "bg-green-100 text-green-800" 
              : "bg-yellow-100 text-yellow-800"
          )}>
            {tournament.status === 'active' ? 'Активный' : 'Завершен'}
          </span>
          <button 
            onClick={() => navigate(`/tournaments/${tournament.id}`)}
            className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg flex items-center gap-2 hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Смотреть
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TournamentCard;

