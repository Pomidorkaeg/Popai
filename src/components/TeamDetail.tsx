import React from 'react';
import { Team } from '@/types/team';
import { Trophy, MapPin, Calendar, Globe, Instagram, Facebook, Twitter, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamDetailProps {
  team: Team;
}

const TeamDetail: React.FC<TeamDetailProps> = ({ team }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Banner */}
      <div 
        className="relative h-72 md:h-96 bg-cover bg-center rounded-xl overflow-hidden mb-8"
        style={{ 
          backgroundImage: `url('${team.backgroundImage}')`,
        }}
      >
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: `${team.primaryColor}AA`,
            backgroundImage: `linear-gradient(135deg, ${team.primaryColor}DD, ${team.secondaryColor}99)`
          }}
        ></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
          <img src={team.logo} alt={team.name} className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover border-4 border-white shadow-lg mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md mb-2">{team.name}</h1>
          <p className="text-lg md:text-xl opacity-85 max-w-2xl drop-shadow-sm">
            Основан в {team.foundedYear} году
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Details */}
        <div className="md:col-span-2 space-y-6">
          <div 
            className="bg-white p-6 rounded-xl shadow-md border-t-4"
            style={{ borderTopColor: team.primaryColor }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: team.primaryColor }}>О команде</h2>
            <p className="text-gray-700 leading-relaxed">{team.description}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4" style={{ color: team.primaryColor }}>Достижения</h2>
            <ul className="space-y-3">
              {team.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <Trophy className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: team.primaryColor }} />
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Right Column - Info Cards */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4" style={{ color: team.primaryColor }}>Информация</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div 
                  className="p-2 rounded-full mr-3"
                  style={{ backgroundColor: `${team.primaryColor}15` }}
                >
                  <Calendar className="h-5 w-5" style={{ color: team.primaryColor }} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Год основания</p>
                  <p className="font-medium">{team.foundedYear}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div 
                  className="p-2 rounded-full mr-3"
                  style={{ backgroundColor: `${team.primaryColor}15` }}
                >
                  <Trophy className="h-5 w-5" style={{ color: team.primaryColor }} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Стадион</p>
                  <p className="font-medium">{team.stadium}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div 
                  className="p-2 rounded-full mr-3"
                  style={{ backgroundColor: `${team.primaryColor}15` }}
                >
                  <MapPin className="h-5 w-5" style={{ color: team.primaryColor }} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Адрес</p>
                  <p className="font-medium">{team.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div 
                  className="p-2 rounded-full mr-3"
                  style={{ backgroundColor: `${team.primaryColor}15` }}
                >
                  <User className="h-5 w-5" style={{ color: team.primaryColor }} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Главный тренер</p>
                  <p className="font-medium">{team.coach}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Социальные сети</h3>
              <div className="flex space-x-3">
                {team.socialLinks.website && (
                  <a 
                    href={team.socialLinks.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "p-2 rounded-full transition-colors duration-200",
                      "bg-gray-100 hover:bg-gray-200"
                    )}
                  >
                    <Globe className="h-5 w-5 text-gray-700" />
                  </a>
                )}
                
                {team.socialLinks.instagram && (
                  <a 
                    href={team.socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "p-2 rounded-full transition-colors duration-200",
                      "bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                    )}
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                )}
                
                {team.socialLinks.facebook && (
                  <a 
                    href={team.socialLinks.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "p-2 rounded-full transition-colors duration-200",
                      "bg-gray-600 hover:bg-gray-700"
                    )}
                  >
                    <Facebook className="h-5 w-5 text-white" />
                  </a>
                )}
                
                {team.socialLinks.twitter && (
                  <a 
                    href={team.socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "p-2 rounded-full transition-colors duration-200",
                      "bg-gray-400 hover:bg-gray-500"
                    )}
                  >
                    <Twitter className="h-5 w-5 text-white" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
