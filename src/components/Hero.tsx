
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-900/90 z-10"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1508098682722-e99c643e7f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      ></div>
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="animate-slide-up max-w-5xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-fc-yellow mb-6 drop-shadow-lg tracking-tight leading-tight">
            ФК ГУДАУТА
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white max-w-3xl mx-auto mb-12 drop-shadow-md font-medium tracking-wide leading-relaxed">
            Футбольный клуб с богатой историей и традициями
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <Link 
              to="/tournaments" 
              className="btn-primary bg-fc-yellow hover:bg-fc-yellow/90 text-fc-darkGreen px-8 py-4 text-lg"
            >
              Турнирные таблицы
              <ArrowRight size={20} />
            </Link>
            
            <Link 
              to="/matches" 
              className="btn-secondary bg-fc-green text-white hover:bg-fc-darkGreen border-fc-green px-8 py-4 text-lg"
            >
              Расписание матчей
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-900 to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
