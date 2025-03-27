import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Фоновый паттерн */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      
      {/* Основной контент */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Турнирные таблицы
          </span>
          <br />
          для спортивных соревнований
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Создавайте и управляйте турнирными таблицами легко и эффективно. 
          Отслеживайте результаты, статистику и прогресс команд в реальном времени.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tournaments">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Создать турнир
            </Button>
          </Link>
          <Link to="/team">
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg">
              Управление командой
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Декоративные линии */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
    </div>
  );
}
