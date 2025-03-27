import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import TournamentCard from '@/components/TournamentCard';
import { ArrowRight, CalendarDays, NewspaperIcon } from 'lucide-react';

const upcomingMatches = [
  {
    id: 1,
    tournament: 'Вторая лига А',
    date: '29 марта',
    time: '15:00',
    homeTeam: 'Сибирь',
    awayTeam: 'Текстильщик',
    stadium: 'Манеж "Заря"',
    city: 'Новосибирск'
  },
  // Добавьте больше матчей при необходимости
];

const recentNews = [
  {
    id: 1,
    title: 'Важная победа в домашнем матче',
    excerpt: 'Наша команда одержала уверенную победу в матче против принципиального соперника...',
    date: '25 марта 2024',
    image: 'https://source.unsplash.com/random/800x600/?soccer,football'
  },
  // Добавьте больше новостей при необходимости
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        
        {/* Upcoming Matches Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Ближайшие матчи</h2>
                <p className="text-gray-600 max-w-2xl">
                  Не пропустите важные игры нашей команды
                </p>
              </div>
              
              <Link to="/matches" className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Все матчи
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingMatches.map((match) => (
                <div key={match.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{match.tournament}</span>
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{match.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-center flex-1">
                        <div className="font-bold text-xl mb-1">{match.homeTeam}</div>
                        <div className="text-sm text-gray-500">Хозяева</div>
                      </div>
                      
                      <div className="flex-shrink-0 px-4">
                        <div className="text-2xl font-bold text-blue-600">VS</div>
                      </div>
                      
                      <div className="text-center flex-1">
                        <div className="font-bold text-xl mb-1">{match.awayTeam}</div>
                        <div className="text-sm text-gray-500">Гости</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div>
                        <div className="font-semibold text-gray-700">{match.time}</div>
                        <div>{match.stadium}</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-semibold text-gray-700">г. {match.city}</div>
                        <Link to={`/matches/${match.id}`} className="text-blue-600 hover:underline font-medium">
                          Подробнее
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Latest News Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Последние новости</h2>
                <p className="text-gray-600 max-w-2xl">
                  Будьте в курсе последних событий из жизни клуба
                </p>
              </div>
              
              <Link to="/news" className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Все новости
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentNews.map((news) => (
                <Link
                  key={news.id}
                  to={`/news/${news.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white/90 text-sm mb-1">
                        <NewspaperIcon className="h-4 w-4 mr-2" />
                        <span>{news.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-3 group-hover:text-blue-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium text-sm">
                      Читать далее
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
