import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TournamentCardProps {
  id: string;
  title: string;
  type: string;
  season: string;
  teams: number;
  source: string;
  featured?: boolean;
}

const TournamentCard: React.FC<TournamentCardProps> = ({
  id,
  title,
  type,
  season,
  teams,
  source,
  featured = false,
}) => {
  return (
    <Link
      to={`/tournaments/${id}`}
      className={cn(
        "block rounded-xl overflow-hidden card-hover border transition-all duration-300",
        featured 
          ? "bg-gradient-to-br from-gray-900/5 to-gray-900/20 border-gray-900" 
          : "bg-white border-gray-200 hover:border-gray-900/50"
      )}
    >
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className={cn(
            "flex items-center justify-center w-12 h-12 rounded-full",
            featured ? "bg-gray-900 text-white" : "bg-gray-900/10 text-gray-900"
          )}>
            <Trophy size={20} />
          </div>
          
          <span className={cn(
            "text-sm font-medium px-3 py-1 rounded-full",
            featured ? "bg-gray-900/20 text-gray-900" : "bg-gray-100 text-gray-600"
          )}>
            {season}
          </span>
        </div>
        
        <h3 className={cn(
          "text-xl font-bold mb-2 line-clamp-2",
          featured ? "text-gray-900" : "text-gray-800"
        )}>
          {title}
        </h3>
        
        <p className="text-gray-500 mb-4">
          {type}
        </p>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            {teams} команд
          </div>
          
          <div className={cn(
            "flex items-center text-sm font-medium",
            featured ? "text-gray-900" : "text-gray-600"
          )}>
            Источник: {source}
            <ChevronRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TournamentCard;
