import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-green-900 to-green-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-100">
            Турнирные таблицы
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8">
            Следите за результатами любимых турниров в реальном времени
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => navigate('/tournaments')}
              className="px-8 py-4 bg-white text-green-900 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Смотреть турниры
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => navigate('/about')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              О нас
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Актуальные результаты</h3>
              <p className="text-green-100">Следите за турнирной таблицей в реальном времени</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Все команды</h3>
              <p className="text-green-100">Информация о всех участниках турнира</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Статистика</h3>
              <p className="text-green-100">Подробная статистика матчей и игроков</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
