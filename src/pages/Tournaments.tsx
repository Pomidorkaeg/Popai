import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TournamentTable from '@/components/TournamentTable';
import { Search, ChevronDown, Trophy } from 'lucide-react';

// Временные данные для тестирования
const mockTournaments = [
  {
    id: '1',
    title: 'Чемпионат России',
    type: 'championship',
    season: '2023/2024',
    teams: 16,
    source: 'russia',
    featured: true
  },
  {
    id: '2',
    title: 'Кубок России',
    type: 'cup',
    season: '2023/2024',
    teams: 32,
    source: 'russia',
    featured: false
  }
];

const Tournaments = () => {
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  
  const handleTournamentSelect = (tournament) => {
    setSelectedTournament(tournament);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const filteredTournaments = mockTournaments
    .filter((tournament) => {
      if (searchQuery) {
        return tournament.title.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    })
    .filter((tournament) => {
      if (filter === 'all') return true;
      if (filter === 'featured') return tournament.featured;
      return tournament.type.toLowerCase().includes(filter.toLowerCase());
    });
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Header */}
        <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
          <div 
            className="absolute inset-0 bg-black/60"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          ></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-8 border-2 border-white/20">
                <Trophy className="w-10 h-10 text-yellow-400" />
              </div>
              
              <h1 className="text-5xl font-bold mb-6 tracking-tight">Турниры и соревнования</h1>
              <p className="max-w-2xl text-white/90 text-xl font-medium">
                Следите за актуальными турнирными таблицами и результатами всех соревнований с участием нашего клуба
              </p>
            </div>
          </div>
        </div>
        
        {/* Tournament List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Все турниры</h2>
              <p className="text-gray-600">Выберите турнир для просмотра подробной информации</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск турниров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white shadow-sm"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              
              <div className="relative">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full sm:w-48 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none bg-white shadow-sm"
                >
                  <option value="all">Все турниры</option>
                  <option value="featured">Избранные</option>
                  <option value="cup">Кубки</option>
                  <option value="championship">Чемпионаты</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTournaments.map((tournament) => (
              <div 
                key={tournament.id}
                onClick={() => handleTournamentSelect(tournament)}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:border-gray-900/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{tournament.title}</h3>
                  {tournament.featured && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                      Избранное
                    </span>
                  )}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Тип турнира</span>
                    <span className="font-medium text-gray-900">{tournament.type === 'championship' ? 'Чемпионат' : 'Кубок'}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Сезон</span>
                    <span className="font-medium text-gray-900">{tournament.season}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Количество команд</span>
                    <span className="font-medium text-gray-900">{tournament.teams}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Selected Tournament Table */}
        {selectedTournament && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <TournamentTable 
                tournamentId={selectedTournament.id} 
                source={selectedTournament.source} 
              />
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Tournaments;

