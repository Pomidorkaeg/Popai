import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TournamentCard from '@/components/TournamentCard';
import { ArrowRight, CalendarDays, NewspaperIcon, Trophy, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTournamentsList, Tournament } from '@/utils/api';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const data = await getTournamentsList();
        setTournaments(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
        setLoading(false);
      }
    };
    
    fetchTournaments();
  }, []);
  
  // Sample news for the homepage
  const recentNews = [
    {
      id: '1',
      title: 'ФК Гудаута одержал победу над Динамо в матче 3 лиги',
      excerpt: 'Футбольный клуб Гудаута выиграл со счетом 2:0 в домашнем матче против Динамо.',
      date: '15.05.2024',
      image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2574&auto=format&fit=crop'
    },
    {
      id: '2',
      title: 'Новый тренер присоединился к команде перед важным матчем',
      excerpt: 'Иван Петров назначен новым главным тренером ФК Гудаута. Он приступит к обязанностям со следующей недели.',
      date: '10.05.2024',
      image: 'https://images.unsplash.com/photo-1518164147695-36c13dd568f5?q=80&w=2670&auto=format&fit=crop'
    },
    {
      id: '3',
      title: 'Открыт набор в детскую футбольную школу ФК Гудаута',
      excerpt: 'Футбольный клуб Гудаута объявляет о наборе детей в возрасте от 5 до 12 лет в детскую футбольную школу.',
      date: '05.05.2024',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2574&auto=format&fit=crop'
    }
  ];
  
  // Sample upcoming matches
  const upcomingMatches = [
    {
      id: '1',
      tournament: '3 Лига ПФЛ',
      homeTeam: 'ФК Гудаута',
      awayTeam: 'Динамо',
      date: '15.05.2024',
      time: '19:00',
      stadium: 'Стадион имени А.П. Соколова',
      city: 'Гудаута'
    },
    {
      id: '2',
      tournament: 'Кубок Абхазии',
      homeTeam: 'ФК Гудаута',
      awayTeam: 'Рица',
      date: '20.05.2024',
      time: '17:00',
      stadium: 'Стадион имени А.П. Соколова',
      city: 'Гудаута'
    },
    {
      id: '3',
      tournament: 'Чемпионат Абхазии',
      homeTeam: 'ФК Гудаута',
      awayTeam: 'Нарт',
      date: '25.05.2024',
      time: '16:00',
      stadium: 'Стадион имени А.П. Соколова',
      city: 'Гудаута'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Верхний баннер */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.579 6.855c.14-.465 0-.806-.662-.806h-2.193c-.558 0-.813.295-.953.619 0 0-1.115 2.719-2.695 4.482-.51.513-.743.675-1.021.675-.139 0-.341-.162-.341-.627V6.855c0-.558-.161-.806-.626-.806H9.642c-.348 0-.558.258-.558.504 0 .528.79.65.871 2.138v3.228c0 .707-.127.836-.407.836-.743 0-2.551-2.729-3.624-5.853-.209-.607-.42-.807-.98-.807H2.752c-.627 0-.752.295-.752.619 0 .582.743 3.462 3.461 7.271 1.812 2.601 4.363 4.011 6.687 4.011 1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.133-.752.574-.752.324 0 .882.163 2.183 1.417 1.486 1.486 1.732 2.153 2.567 2.153h2.193c.627 0 .939-.313.759-.931-.197-.615-.907-1.51-1.849-2.569-.512-.604-1.277-1.254-1.51-1.579-.325-.419-.231-.604 0-.976.001 0 2.672-3.761 2.95-5.04z"/>
              </svg>
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2,4.4L2.9,10.7c-1.1,0.4-1.1,1.1-0.2,1.3l4.1,1.3l1.6,4.8c0.2,0.5,0.1,0.7,0.6,0.7c0.4,0,0.6-0.2,0.8-0.4 c0.1-0.1,1-1,2-2l4.2,3.1c0.8,0.4,1.3,0.2,1.5-0.7l2.8-13.1C20.6,4.6,19.9,4,19.2,4.4z M17.1,7.4l-7.8,7.1L9,17.8L7.4,13l9.2-5.8 C17,6.9,17.4,7.1,17.1,7.4z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          <Button asChild variant="outline" className="bg-transparent text-white hover:bg-blue-700">
            <Link to="/tickets">БИЛЕТЫ</Link>
          </Button>
        </div>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 py-8">
        {/* Матч дня */}
        <div className="relative mb-12 overflow-hidden rounded-xl bg-gradient-to-r from-blue-900 via-blue-800 to-red-900 p-8 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
          <div className="relative z-10">
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-3xl font-bold">БЛИЖАЙШИЙ МАТЧ</h2>
              <p className="text-xl font-semibold text-blue-200">ВТОРАЯ ЛИГА А (СЕРЕБРО)</p>
            </div>
            
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="text-center">
                <img src="/team1-logo.png" alt="Команда 1" className="mx-auto mb-4 h-32 w-32 rounded-full bg-white p-2" />
                <h3 className="text-2xl font-bold">СИБИРЬ</h3>
                <p className="text-blue-200">Новосибирск</p>
              </div>
              
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold">VS</div>
                <div className="rounded-lg bg-blue-700 px-6 py-2">
                  <p className="text-xl font-bold">29 МАРТА</p>
                  <p className="text-2xl font-bold">15:00</p>
                </div>
              </div>
              
              <div className="text-center">
                <img src="/team2-logo.png" alt="Команда 2" className="mx-auto mb-4 h-32 w-32 rounded-full bg-white p-2" />
                <h3 className="text-2xl font-bold">ТЕКСТИЛЬЩИК</h3>
                <p className="text-blue-200">Иваново</p>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/tickets">КУПИТЬ БИЛЕТ</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-blue-800">
                <Link to="/match">ТРАНСЛЯЦИЯ</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Спонсоры */}
        <div className="mt-12 rounded-lg bg-white/5 p-6">
          <h3 className="mb-6 text-center text-xl font-semibold text-gray-300">ПАРТНЕРЫ</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((sponsor) => (
              <div key={sponsor} className="flex h-20 items-center justify-center rounded-lg bg-white/10 p-4">
                <div className="h-12 w-24 bg-gray-400/20"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
