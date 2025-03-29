import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
      {/* Фоновое изображение с наложением */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
          opacity: 0.1
        }}
      />
      
      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
      
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Турнирные таблицы
            <span className="block text-yellow-400 mt-2">для всех видов спорта</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Следите за результатами, статистикой и положением команд в реальном времени
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => navigate('/tournaments')}
              className="px-8 py-4 bg-white text-blue-900 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              Смотреть турниры
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => navigate('/teams')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              Команды
              <Users size={20} />
            </button>
          </div>
          
          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={24} className="text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-blue-100">Турниров</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Команд</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={24} className="text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-100">Матчей</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={24} className="text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Видов спорта</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
    </div>
  );
};
