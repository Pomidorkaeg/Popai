import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { LazyTournamentTable } from '@/components/LazyTournamentTable';
import { Card } from '@/components/ui/card';
import { Trophy, Users, Target, Medal, ArrowRight, Calendar, MapPin, Users2, CheckCircle2 } from 'lucide-react';
import { getTournamentsList } from '@/utils/api';
import { cn } from '@/lib/utils';

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [tournaments, setTournaments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchTournaments = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getTournamentsList();
        
        if (isMounted) {
          setTournaments(data || []);
        }
      } catch (err) {
        console.error('Error fetching tournaments:', err);
        if (isMounted) {
          setError('Не удалось загрузить турниры');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTournaments();

    return () => {
      isMounted = false;
    };
  }, []);

  const featuredTournament = tournaments[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        {/* Featured Tournament Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Trophy className="text-yellow-500" size={32} />
              Главный турнир
            </h2>
            <button 
              onClick={() => navigate('/tournaments')}
              className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg flex items-center gap-2 hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Все турниры
              <ArrowRight size={18} />
            </button>
          </div>
          
          {loading ? (
            <div className="min-h-[400px] flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent"></div>
            </div>
          ) : error ? (
            <div className="min-h-[200px] flex items-center justify-center bg-red-50 rounded-xl border border-red-200">
              <p className="text-red-600">{error}</p>
            </div>
          ) : featuredTournament ? (
            <Card className="overflow-hidden bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:border-green-200 transition-all duration-300">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredTournament.name}</h3>
                    <p className="text-gray-600 mb-6">{featuredTournament.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={20} className="text-green-600" />
                        <span>С {featuredTournament.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={20} className="text-green-600" />
                        <span>По {featuredTournament.endDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={20} className="text-green-600" />
                        <span>{featuredTournament.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users2 size={20} className="text-green-600" />
                        <span>{featuredTournament.teams} команд</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <span className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium",
                        featuredTournament.status === 'active' 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      )}>
                        {featuredTournament.status === 'active' ? 'Активный' : 'Завершен'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button 
                      onClick={() => navigate(`/tournaments/${featuredTournament.id}`)}
                      className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg flex items-center gap-2 hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Смотреть таблицу
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <div className="min-h-[200px] flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-gray-500">Нет доступных турниров</p>
            </div>
          )}
        </section>

        {/* Club Values Section */}
        <section className="mb-16 bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Спортивное мастерство</h3>
              <p className="text-green-100">Стремимся к совершенству в каждом матче</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Командный дух</h3>
              <p className="text-green-100">Вместе мы сильнее</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Стремление к победе</h3>
              <p className="text-green-100">Всегда идем к своей цели</p>
            </div>
          </div>
        </section>

        {/* Tournament Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Medal className="text-yellow-500" size={32} />
              Турнирные таблицы
            </h2>
            <button 
              onClick={() => navigate('/tournaments')}
              className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg flex items-center gap-2 hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Все турниры
              <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.slice(0, 6).map((tournament) => (
              <Card key={tournament.id} className="overflow-hidden bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:border-green-200 transition-all duration-300">
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
                    <Users2 size={16} className="text-green-600" />
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
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
