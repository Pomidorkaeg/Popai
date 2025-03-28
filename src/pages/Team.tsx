import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Shield, Award, Calendar, Flag } from 'lucide-react';

interface Team {
  id: string;
  name: string;
  description: string;
  logo: string;
  founded: string;
  location: string;
  achievements: string[];
}

export default function Team() {
  const { id } = useParams();
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Здесь будет логика загрузки данных команды
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!team) {
    return <div>Команда не найдена</div>;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-4">
        <img src={team.logo} alt={team.name} className="w-24 h-24 rounded-full" />
        <div>
          <h1 className="text-3xl font-bold">{team.name}</h1>
          <p className="text-gray-600">{team.description}</p>
                </div>
              </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Информация</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Основана: {team.founded}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Flag className="h-5 w-5" />
              <span>{team.location}</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Достижения</h2>
          <ul className="space-y-2">
            {team.achievements.map((achievement, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
