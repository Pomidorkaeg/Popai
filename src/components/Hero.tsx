import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Target } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Турнирные таблицы и статистика
          </h1>
          <p className="text-xl mb-8 text-green-100">
            Следите за результатами матчей, статистикой команд и турнирными таблицами в реальном времени
          </p>
          <Link
            to="/tournaments"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors duration-200"
          >
            Смотреть турниры
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
