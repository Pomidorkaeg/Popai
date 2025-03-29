
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 page-transition">
        {/* Header */}
        <div className="relative text-white py-10" style={{ 
          backgroundColor: primaryColor,
          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
        }}>
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
              opacity: 0.3
            }}
          ></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Shield className="w-8 h-8" />
              </div>
              
              <h1 className="text-4xl font-bold mb-4">Наши команды</h1>
              
              {/* Team Selector */}
              <div className="mt-6 mb-8">
                <div className="inline-flex p-1 bg-white/10 backdrop-blur-sm rounded-full shadow-lg">
                  {teams.map(team => (
                    <button
                      key={team.id}
                      onClick={() => {
                        setActiveTeam(team.id);
                        setActiveTab('details'); // Reset to details tab when switching teams
                      }}
                      className={cn(
                        "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                        activeTeam === team.id 
                          ? `bg-white text-[${team.primaryColor}] shadow-md` 
                          : "text-white hover:bg-white/20"
                      )}
                      style={{ color: activeTeam === team.id ? team.primaryColor : '' }}
                    >
                      {team.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="bg-white shadow-md sticky top-16 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('details')}
                className={cn(
                  "px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                  activeTab === 'details' 
                    ? `border-[${primaryColor}] text-[${primaryColor}]` 
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                )}
                style={{ 
                  borderColor: activeTab === 'details' ? primaryColor : 'transparent',
                  color: activeTab === 'details' ? primaryColor : ''
                }}
              >
                О команде
              </button>
              
              <button
                onClick={() => setActiveTab('players')}
                className={cn(
                  "px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                  activeTab === 'players' 
                    ? `border-[${primaryColor}] text-[${primaryColor}]` 
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                )}
                style={{ 
                  borderColor: activeTab === 'players' ? primaryColor : 'transparent',
                  color: activeTab === 'players' ? primaryColor : ''
                }}
              >
                Игроки
              </button>
              
              <button
                onClick={() => setActiveTab('staff')}
                className={cn(
                  "px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                  activeTab === 'staff' 
                    ? `border-[${primaryColor}] text-[${primaryColor}]` 
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                )}
                style={{ 
                  borderColor: activeTab === 'staff' ? primaryColor : 'transparent',
                  color: activeTab === 'staff' ? primaryColor : ''
                }}
              >
                Тренерский штаб
              </button>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {activeTab === 'details' && currentTeam && (
            <TeamDetail team={currentTeam} />
          )}
          
          {activeTab === 'players' && (
            <>
              {/* Position filter */}
              <div className="mb-8 flex justify-center">
                <div className="inline-flex p-1 bg-gray-100 rounded-full">
                  <button
                    onClick={() => setActivePosition('all')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activePosition === 'all' 
                        ? "text-white" 
                        : "text-gray-700 hover:bg-gray-200"
                    )}
                    style={{ backgroundColor: activePosition === 'all' ? primaryColor : '' }}
                  >
                    Все
                  </button>
                  
                  <button
                    onClick={() => setActivePosition('Вратарь')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activePosition === 'Вратарь' 
                        ? "text-white" 
                        : "text-gray-700 hover:bg-gray-200"
                    )}
                    style={{ backgroundColor: activePosition === 'Вратарь' ? primaryColor : '' }}
                  >
                    Вратари
                  </button>
                  
                  <button
                    onClick={() => setActivePosition('Защитник')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activePosition === 'Защитник' 
                        ? "text-white" 
                        : "text-gray-700 hover:bg-gray-200"
                    )}
                    style={{ backgroundColor: activePosition === 'Защитник' ? primaryColor : '' }}
                  >
                    Защитники
                  </button>
                  
                  <button
                    onClick={() => setActivePosition('Полузащитник')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activePosition === 'Полузащитник' 
                        ? "text-white" 
                        : "text-gray-700 hover:bg-gray-200"
                    )}
                    style={{ backgroundColor: activePosition === 'Полузащитник' ? primaryColor : '' }}
                  >
                    Полузащитники
                  </button>
                  
                  <button
                    onClick={() => setActivePosition('Нападающий')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activePosition === 'Нападающий' 
                        ? "text-white" 
                        : "text-gray-700 hover:bg-gray-200"
                    )}
                    style={{ backgroundColor: activePosition === 'Нападающий' ? primaryColor : '' }}
                  >
                    Нападающие
                  </button>
                </div>
              </div>
              
              {/* Players grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlayers.map((player) => (
                  <div
                    key={player.id}
                    onClick={() => handlePlayerClick(player)}
                    className={cn(
                      "relative bg-white rounded-xl overflow-hidden shadow-sm border transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1",
                      selectedPlayer?.id === player.id 
                        ? `border-[${primaryColor}] ring-2 ring-[${primaryColor}]/20` 
                        : `border-gray-200 hover:border-[${primaryColor}]/50`
                    )}
                    style={{ 
                      borderColor: selectedPlayer?.id === player.id ? primaryColor : '',
                      boxShadow: selectedPlayer?.id === player.id ? `0 0 0 2px ${primaryColor}20` : ''
                    }}
                  >
                    <div className="flex">
                      <div className="w-1/3 relative">
                        <img 
                          src={player.image} 
                          alt={player.name} 
                          className="w-full h-full object-cover aspect-[3/4]"
                        />
                        <div 
                          className="absolute top-0 left-0 w-full h-full"
                          style={{ background: `linear-gradient(to right, ${primaryColor}80, transparent)` }}
                        ></div>
                        <div 
                          className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg text-white"
                          style={{ backgroundColor: primaryColor }}
                        >
                          {player.number}
                        </div>
                      </div>
                      
                      <div className="w-2/3 p-4">
                        <div className="flex flex-col h-full">
                          <div>
                            <div 
                              className="text-xs font-medium mb-1"
                              style={{ color: primaryColor }}
                            >
                              {player.position}
                            </div>
                            <h3 className="text-lg font-bold mb-3">{player.name}</h3>
                          </div>
                          
                          <div className="mt-auto grid grid-cols-3 gap-2 text-center">
                            <div className="bg-gray-50 p-2 rounded">
                              <div className="text-xs text-gray-500">Матчи</div>
                              <div className="font-bold">{player.matches}</div>
                            </div>
                            <div className="bg-gray-50 p-2 rounded">
                              <div className="text-xs text-gray-500">Голы</div>
                              <div className="font-bold">{player.goals}</div>
                            </div>
                            <div className="bg-gray-50 p-2 rounded">
                              <div className="text-xs text-gray-500">Передачи</div>
                              <div className="font-bold">{player.assists}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Selected player details */}
              {selectedPlayer && (
                <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-fade-in">
                  <div 
                    className="p-6 border-b"
                    style={{ borderColor: `${primaryColor}30` }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900">Информация об игроке</h2>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <img 
                        src={selectedPlayer.image} 
                        alt={selectedPlayer.name} 
                        className="w-full h-full object-cover aspect-square md:aspect-auto"
                      />
                      <div 
                        className="absolute top-4 left-4 w-16 h-16 flex items-center justify-center rounded-full font-bold text-3xl text-white shadow-lg"
                        style={{ 
                          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
                        }}
                      >
                        {selectedPlayer.number}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                          <div 
                            className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-2"
                            style={{ 
                              backgroundColor: `${primaryColor}10`,
                              color: primaryColor
                            }}
                          >
                            {selectedPlayer.position}
                          </div>
                          <h3 className="text-2xl font-bold mb-1">{selectedPlayer.name}</h3>
                          <div className="flex items-center text-gray-500">
                            <Flag size={16} className="mr-1" />
                            <span>{selectedPlayer.nationality}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Дата рождения</div>
                          <div className="font-medium flex items-center">
                            <Calendar size={16} className="mr-1" style={{ color: primaryColor }} />
                            {selectedPlayer.birthDate}
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Рост</div>
                          <div className="font-medium">{selectedPlayer.height} см</div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Вес</div>
                          <div className="font-medium">{selectedPlayer.weight} кг</div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Матчи</div>
                          <div className="font-medium">{selectedPlayer.matches}</div>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold mb-4">Статистика</h4>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="relative p-6 rounded-lg text-center overflow-hidden" style={{ 
                          background: `linear-gradient(135deg, ${primaryColor}20, ${primaryColor}05)`,
                          borderLeft: `4px solid ${primaryColor}`
                        }}>
                          <div className="relative z-10">
                            <div className="text-3xl font-bold mb-1" style={{ color: primaryColor }}>{selectedPlayer.goals}</div>
                            <div className="text-xs text-gray-500">Голы</div>
                          </div>
                        </div>
                        
                        <div className="relative p-6 rounded-lg text-center overflow-hidden" style={{ 
                          background: `linear-gradient(135deg, ${primaryColor}20, ${primaryColor}05)`,
                          borderLeft: `4px solid ${primaryColor}`
                        }}>
                          <div className="relative z-10">
                            <div className="text-3xl font-bold mb-1" style={{ color: primaryColor }}>{selectedPlayer.assists}</div>
                            <div className="text-xs text-gray-500">Передачи</div>
                          </div>
                        </div>
                        
                        <div className="relative p-6 rounded-lg text-center overflow-hidden" style={{ 
                          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.05))',
                          borderLeft: '4px solid #f59e0b'
                        }}>
                          <div className="relative z-10">
                            <div className="text-3xl font-bold mb-1 text-amber-500">{selectedPlayer.yellowCards}</div>
                            <div className="text-xs text-gray-500">Жёлтые карточки</div>
                          </div>
                        </div>
                        
                        <div className="relative p-6 rounded-lg text-center overflow-hidden" style={{ 
                          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.05))',
                          borderLeft: '4px solid #ef4444'
                        }}>
                          <div className="relative z-10">
                            <div className="text-3xl font-bold mb-1 text-red-500">{selectedPlayer.redCards}</div>
                            <div className="text-xs text-gray-500">Красные карточки</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'staff' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {staff.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 flex card-hover animate-fade-in"
                >
                  <div className="w-1/3 relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover aspect-square"
                    />
                    <div 
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to right, ${primaryColor}90, transparent)` }}
                    ></div>
                  </div>
                  
                  <div className="w-2/3 p-6">
                    <div 
                      className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-2"
                      style={{ 
                        backgroundColor: `${primaryColor}10`,
                        color: primaryColor
                      }}
                    >
                      {member.role}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{member.name}</h3>
                    
                    <p className="text-gray-600 mb-4 text-sm">{member.biography}</p>
                    
                    <div className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      <span>В клубе с {member.since} года</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;
