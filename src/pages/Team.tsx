import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, User, Trophy, ChevronDown, Shield, Award, Calendar, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Player } from '@/types/player';
import { Coach } from '@/types/coach';
import { Team as TeamType } from '@/types/team';
import { getTeamsData } from '@/utils/teamsData';
import TeamDetail from '@/components/TeamDetail';

// Моковые данные для примера
const teamMembers = [
  { id: 1, name: 'Алексей Смирнов', role: 'Нападающий', stats: '12 голов, 8 передач' },
  { id: 2, name: 'Дмитрий Иванов', role: 'Защитник', stats: '2 гола, 4 передачи' },
  { id: 3, name: 'Сергей Петров', role: 'Полузащитник', stats: '6 голов, 14 передач' },
  { id: 4, name: 'Михаил Сидоров', role: 'Вратарь', stats: '8 матчей "на ноль"' },
  { id: 5, name: 'Андрей Козлов', role: 'Нападающий', stats: '9 голов, 5 передач' },
  { id: 6, name: 'Виктор Николаев', role: 'Защитник', stats: '1 гол, 3 передачи' },
];

const Team = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [activePosition, setActivePosition] = useState('all');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [activeTeam, setActiveTeam] = useState<string>('gudauta');
  const [teams, setTeams] = useState<TeamType[]>([]);
  
  useEffect(() => {
    // Load teams data
    const teamsData = getTeamsData();
    setTeams(teamsData);
  }, []);
  
  // Sample player data
  const playersGudauta: Player[] = [
    {
      id: '1',
      name: 'Александр Иванов',
      position: 'Вратарь',
      number: 1,
      birthDate: '15.05.1992',
      height: 192,
      weight: 87,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      matches: 24,
      goals: 0,
      assists: 1,
      yellowCards: 1,
      redCards: 0,
      teamId: 'gudauta'
    },
    {
      id: '2',
      name: 'Дмитрий Петров',
      position: 'Защитник',
      number: 4,
      birthDate: '23.09.1994',
      height: 186,
      weight: 82,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      matches: 22,
      goals: 2,
      assists: 3,
      yellowCards: 4,
      redCards: 0,
      teamId: 'gudauta'
    },
    {
      id: '3',
      name: 'Артем Смирнов',
      position: 'Защитник',
      number: 6,
      birthDate: '07.12.1995',
      height: 184,
      weight: 78,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 26,
      goals: 0,
      assists: 1,
      yellowCards: 5,
      redCards: 1,
      teamId: 'gudauta'
    },
  ];
  
  // Sample player data for SSH Gudauta (School)
  const playersSchool: Player[] = [
    {
      id: '4',
      name: 'Игорь Соколов',
      position: 'Полузащитник',
      number: 8,
      birthDate: '18.03.1993',
      height: 177,
      weight: 72,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 28,
      goals: 5,
      assists: 7,
      yellowCards: 3,
      redCards: 0,
      teamId: 'gudauta-school'
    },
    {
      id: '5',
      name: 'Сергей Козлов',
      position: 'Полузащитник',
      number: 10,
      birthDate: '05.07.1996',
      height: 179,
      weight: 74,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 25,
      goals: 8,
      assists: 10,
      yellowCards: 2,
      redCards: 0,
      teamId: 'gudauta-school'
    },
    {
      id: '6',
      name: 'Андрей Попов',
      position: 'Нападающий',
      number: 9,
      birthDate: '12.02.1994',
      height: 183,
      weight: 78,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1584634731339-252e5223ee7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
      matches: 27,
      goals: 15,
      assists: 5,
      yellowCards: 2,
      redCards: 0,
      teamId: 'gudauta-school'
    },
  ];
  
  // Sample staff data
  const staffGudauta: Coach[] = [
    {
      id: '1',
      name: 'Сергей Павлович Иванов',
      role: 'Главный тренер',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      since: '2021',
      experience: 10,
      biography: 'Опытный тренер с многолетним опытом работы в профессиональных клубах.',
      teamId: 'gudauta'
    },
    {
      id: '2',
      name: 'Алексей Николаевич Петров',
      role: 'Ассистент тренера',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      since: '2022',
      experience: 5,
      biography: 'Бывший профессиональный игрок, перешедший на тренерскую работу.',
      teamId: 'gudauta'
    },
  ];
  
  const staffSchool: Coach[] = [
    {
      id: '3',
      name: 'Дмитрий Александрович Сидоров',
      role: 'Тренер вратарей',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      since: '2022',
      experience: 7,
      biography: 'Специализируется на подготовке молодых вратарей высокого уровня.',
      teamId: 'gudauta-school'
    },
    {
      id: '4',
      name: 'Игорь Владимирович Кузнецов',
      role: 'Физиотерапевт',
      image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      since: '2023',
      experience: 8,
      biography: 'Имеет большой опыт работы со спортсменами разных дисциплин.',
      teamId: 'gudauta-school'
    },
  ];
  
  // Determine active players and staff based on selected team
  const players = activeTeam === 'gudauta' ? playersGudauta : playersSchool;
  const staff = activeTeam === 'gudauta' ? staffGudauta : staffSchool;
  
  // Filter players by position
  const filteredPlayers = players.filter(player => {
    if (activePosition === 'all') return true;
    return player.position === activePosition;
  });
  
  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };

  // Find current team 
  const currentTeam = teams.find(team => team.id === activeTeam);
  
  // Default colors if team not found
  const primaryColor = currentTeam?.primaryColor || '#2e7d32';
  const secondaryColor = currentTeam?.secondaryColor || '#ffeb3b';
  
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
          Наша команда
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Познакомьтесь с нашими игроками, которые представляют клуб на различных турнирах и соревнованиях.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 h-24 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                <User className="h-8 w-8 text-slate-600 dark:text-slate-300" />
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-medium">Статистика:</span> {member.stats}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6">
        <h2 className="text-xl font-semibold mb-4">Тренерский штаб</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <User className="h-6 w-6 text-slate-600 dark:text-slate-300" />
            </div>
            <div>
              <h3 className="font-medium">Игорь Владимирович</h3>
              <p className="text-sm text-slate-500">Главный тренер</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <User className="h-6 w-6 text-slate-600 dark:text-slate-300" />
            </div>
            <div>
              <h3 className="font-medium">Павел Сергеевич</h3>
              <p className="text-sm text-slate-500">Ассистент тренера</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
