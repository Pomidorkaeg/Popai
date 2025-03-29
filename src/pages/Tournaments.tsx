import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TournamentCard from '@/components/TournamentCard';
import { LazyTournamentTable } from '@/components/LazyTournamentTable';
import { Filter, Search, ChevronDown, Trophy } from 'lucide-react';
import { getTournamentsList, Tournament } from '@/utils/api';

export default function Tournaments() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getTournamentsList();
        setTournaments(data);
        if (data.length > 0) {
          setSelectedTournament(data[0]);
        }
      } catch (err) {
        setError('Ошибка при загрузке турниров');
        console.error('Error fetching tournaments:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesSearch = tournament.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || tournament.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Левая колонка с фильтрами и списком турниров */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Турниры</h2>
              
              {/* Поиск */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Поиск турниров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Фильтр по статусу */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                >
                  <option value="all">Все статусы</option>
                  <option value="active">Активные</option>
                  <option value="completed">Завершенные</option>
                  <option value="upcoming">Предстоящие</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
              </div>
            </div>

            {/* Список турниров */}
            <div className="space-y-4">
              {loading ? (
                <div className="flex items-center justify-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                </div>
              ) : error ? (
                <div className="text-center py-4">
                  <p className="text-red-600 mb-4">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Повторить попытку
                  </button>
                </div>
              ) : filteredTournaments.length === 0 ? (
                <div className="text-center py-4 text-gray-600">
                  Турниры не найдены
                </div>
              ) : (
                filteredTournaments.map((tournament) => (
                  <TournamentCard
                    key={tournament.id}
                    tournament={tournament}
                    isSelected={selectedTournament?.id === tournament.id}
                    onClick={() => setSelectedTournament(tournament)}
                  />
                ))
              )}
            </div>
          </div>

          {/* Правая колонка с таблицей турнира */}
          <div className="lg:w-2/3">
            {selectedTournament ? (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedTournament.name}</h2>
                    <p className="text-gray-600 mt-1">{selectedTournament.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Trophy className="h-6 w-6" />
                    <span className="font-semibold">{selectedTournament.status}</span>
                  </div>
                </div>
                <LazyTournamentTable tournamentId={selectedTournament.id} />
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-6 text-center text-gray-600">
                Выберите турнир для просмотра таблицы
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
