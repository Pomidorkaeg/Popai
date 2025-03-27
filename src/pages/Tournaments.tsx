import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TournamentCard from '@/components/TournamentCard';
import LazyTournamentTable from '@/components/LazyTournamentTable';
import { Filter, Search, ChevronDown, Trophy, Calendar, Users, ArrowRight } from 'lucide-react';
import { getTournamentsList, Tournament } from '@/utils/api';
import { Link } from 'react-router-dom';

// Моковые данные для примера
const tournaments = [
  { id: 1, name: 'Чемпионат города', date: '10 мая - 20 июня 2023', teams: 12, status: 'active' },
  { id: 2, name: 'Кубок области', date: '5 июля - 15 августа 2023', teams: 16, status: 'upcoming' },
  { id: 3, name: 'Международный турнир', date: '1 сентября - 10 октября 2023', teams: 8, status: 'active' },
  { id: 4, name: 'Зимний кубок', date: '15 декабря - 25 января 2024', teams: 10, status: 'upcoming' },
];

const Tournaments = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const data = await getTournamentsList();
        setTournaments(data);
        setSelectedTournament(data[0]); // Select the first tournament by default
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
        setLoading(false);
      }
    };
    
    fetchTournaments();
  }, []);
  
  const handleTournamentSelect = (tournament: Tournament) => {
    setSelectedTournament(tournament);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const filteredTournaments = tournaments
    .filter((tournament) => {
      // Apply search filter
      if (searchQuery) {
        return tournament.title.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    })
    .filter((tournament) => {
      // Apply category filter
      if (filter === 'all') return true;
      if (filter === 'featured') return tournament.featured;
      return tournament.type.toLowerCase().includes(filter.toLowerCase());
    });
  
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
          Турниры
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Актуальная информация о всех турнирах, в которых принимает участие наша команда.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tournaments.map((tournament) => (
          <div key={tournament.id} className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tournament.status === 'active' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300'
                    }`}>
                      {tournament.status === 'active' ? 'Активный' : 'Предстоящий'}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {tournament.name}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span>{tournament.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Users className="h-4 w-4 text-slate-400" />
                      <span>{tournament.teams} команд</span>
                    </div>
                  </div>
                </div>
                <div className="h-14 w-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <Trophy className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <Link 
                  to={`/tournaments/${tournament.id}`} 
                  className="text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-1 transition-colors"
                >
                  Подробнее <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Хотите организовать турнир?</h2>
            <p className="max-w-md opacity-90">
              Мы поможем вам организовать турнир любого масштаба с полной поддержкой от нашей команды.
            </p>
          </div>
          <Link 
            to="/contacts" 
            className="px-6 py-3 bg-white text-green-600 hover:bg-slate-100 font-medium rounded-lg transition-colors"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Tournaments;
