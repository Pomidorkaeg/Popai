import React from 'react';
import { Trophy, Users, Calendar, MapPin } from 'lucide-react';
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
  featured = false
}) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-300",
        featured 
          ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white" 
          : "bg-white border-2 border-gray-100 hover:border-blue-200"
      )}
    >
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6">
        {/* Заголовок */}
        <div className="flex items-start justify-between mb-4">
          <h3 className={cn(
            "text-xl font-bold",
            featured ? "text-white" : "text-gray-900"
          )}>
            {title}
          </h3>
          {featured && (
            <div className="bg-yellow-400/20 rounded-full p-2">
              <Trophy size={20} className="text-yellow-400" />
            </div>
          )}
        </div>
        
        {/* Тип турнира */}
        <div className="flex items-center gap-2 mb-4">
          <span className={cn(
            "px-3 py-1 rounded-full text-sm font-medium",
            featured 
              ? "bg-white/20 text-white" 
              : "bg-blue-100 text-blue-800"
          )}>
            {type}
          </span>
        </div>
        
        {/* Информация */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Calendar size={16} className={cn(
              featured ? "text-blue-200" : "text-blue-600"
            )} />
            <span className={cn(
              featured ? "text-blue-100" : "text-gray-600"
            )}>
              Сезон {season}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users size={16} className={cn(
              featured ? "text-blue-200" : "text-blue-600"
            )} />
            <span className={cn(
              featured ? "text-blue-100" : "text-gray-600"
            )}>
              {teams} команд
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin size={16} className={cn(
              featured ? "text-blue-200" : "text-blue-600"
            )} />
            <span className={cn(
              featured ? "text-blue-100" : "text-gray-600"
            )}>
              {source}
            </span>
          </div>
        </div>
        
        {/* Кнопка */}
        <button 
          className={cn(
            "mt-6 w-full px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300",
            featured 
              ? "bg-white text-blue-900 hover:bg-blue-50" 
              : "bg-blue-600 text-white hover:bg-blue-700"
          )}
        >
          Смотреть таблицу
          <Trophy size={16} />
        </button>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default TournamentCard;

