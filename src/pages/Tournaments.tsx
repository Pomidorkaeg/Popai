import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TournamentTable from '@/components/TournamentTable';
import { Filter, Search, ChevronDown, Trophy, AlertCircle } from 'lucide-react';

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
  const [tournaments, setTournaments] = useState(mockTournaments);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleTournamentSelect = (tournament) => {
    setSelectedTournament(tournament);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const filteredTournaments = tournaments
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 page-transition">
        {/* Header */}
        <div className="relative bg-fc-green text-white py-16">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-fc-green/90 to-fc-darkGreen/80"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          ></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Trophy className="w-8 h-8" />
              </div>
              
              <h1 className="text-4xl font-bold mb-4">Турниры и соревнования</h1>
              <p className="max-w-2xl text-white/80 text-lg">
                Следите за актуальными турнирными таблицами и результатами всех соревнований с участием нашего клуба
              </p>
            </div>
          </div>
        </div>
        
        {/* Tournament List */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Все турниры</h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск турниров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fc-green focus:border-transparent"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              
              <div className="relative">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fc-green focus:border-transparent appearance-none"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTournaments.map((tournament) => (
              <div 
                key={tournament.id}
                onClick={() => handleTournamentSelect(tournament)}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{tournament.title}</h3>
                  {tournament.featured && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fc-green/10 text-fc-green">
                      Избранное
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Тип:</span> {tournament.type === 'championship' ? 'Чемпионат' : 'Кубок'}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Сезон:</span> {tournament.season}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Команд:</span> {tournament.teams}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Selected Tournament Table */}
        {selectedTournament && (
          <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <TournamentTable 
              tournamentId={selectedTournament.id} 
              source={selectedTournament.source} 
            />
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Tournaments;

