import React, { useState, useEffect } from 'react';
import { RefreshCw, AlertTriangle, Trophy, Calendar, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getTournamentTable, TournamentData } from '@/utils/api';
import { useToast } from '@/components/ui/use-toast';

interface TournamentTableProps {
  tournamentId: string;
  source: string;
}

const TournamentTable: React.FC<TournamentTableProps> = ({ 
  tournamentId,
  source
}) => {
  const [data, setData] = useState<TournamentData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('teams');
  const { toast } = useToast();
  
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getTournamentTable(tournamentId, source);
        setData(result);
      } catch (err) {
        setError('Не удалось загрузить данные турнирной таблицы');
        toast({
          variant: "destructive",
          title: "Ошибка загрузки",
          description: "Не удалось загрузить данные турнирной таблицы",
        });
      }
    };
    
    loadData();
  }, [tournamentId, source, toast]);
  
  if (error) {
    return (
      <div className="min-h-[200px] flex flex-col items-center justify-center p-6 rounded-xl border border-red-200 bg-red-50">
        <AlertTriangle size={32} className="text-fc-red mb-4" />
        <p className="text-fc-red font-medium mb-2">Ошибка загрузки данных</p>
        <p className="text-gray-500 mb-4 text-center">{error}</p>
      </div>
    );
  }
  
  if (!data) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 bg-white/50">
        <div className="animate-spin mb-4">
          <RefreshCw size={32} className="text-fc-green" />
        </div>
        <p className="text-gray-500">Загрузка турнирной таблицы...</p>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{data.title}</h2>
            <p className="text-gray-500 mt-1">Сезон {data.season}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar size={16} />
            <span>Обновлено: {data.lastUpdated}</span>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('teams')}
            className={cn(
              "px-6 py-3 text-sm font-medium border-b-2",
              activeTab === 'teams'
                ? "border-fc-green text-fc-green"
                : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            Турнирная таблица
          </button>
          <button
            onClick={() => setActiveTab('scorers')}
            className={cn(
              "px-6 py-3 text-sm font-medium border-b-2",
              activeTab === 'scorers'
                ? "border-fc-green text-fc-green"
                : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            Бомбардиры
          </button>
          <button
            onClick={() => setActiveTab('warnings')}
            className={cn(
              "px-6 py-3 text-sm font-medium border-b-2",
              activeTab === 'warnings'
                ? "border-fc-green text-fc-green"
                : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            Предупреждения
          </button>
          <button
            onClick={() => setActiveTab('expulsions')}
            className={cn(
              "px-6 py-3 text-sm font-medium border-b-2",
              activeTab === 'expulsions'
                ? "border-fc-green text-fc-green"
                : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            Удаления
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {activeTab === 'teams' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Поз</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Команда</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">И</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">В</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Н</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">П</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">М</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">РМ</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">О</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.teams.map((team) => (
                  <tr key={team.position} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{team.position}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{team.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.played}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.won}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.drawn}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.lost}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.goalsFor}-{team.goalsAgainst}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{team.goalDifference}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-fc-green">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {activeTab === 'scorers' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Поз</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Игрок</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Команда</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Голы</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.topScorers.map((scorer) => (
                  <tr key={scorer.position} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{scorer.position}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{scorer.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scorer.team}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-fc-green">{scorer.goals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {activeTab === 'warnings' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Поз</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Игрок</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Команда</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Предупреждения</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.warnings.map((warning) => (
                  <tr key={warning.position} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{warning.position}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{warning.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{warning.team}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-yellow-500">{warning.warnings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {activeTab === 'expulsions' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Поз</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Игрок</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Команда</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Удаления</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.expulsions.map((expulsion) => (
                  <tr key={expulsion.position} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{expulsion.position}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expulsion.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expulsion.team}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-red-500">{expulsion.expulsions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TournamentTable;
