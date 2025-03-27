import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative">
      {/* Верхняя панель с соцсетями */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-2">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
              ВКонтакте
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
              Telegram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
              YouTube
            </a>
          </div>
          <Button asChild variant="outline" className="bg-transparent text-white hover:bg-blue-800 border-white/20">
            <Link to="/tickets">БИЛЕТЫ</Link>
          </Button>
        </div>
      </div>

      {/* Основной баннер */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-red-900 py-16">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white">БЛИЖАЙШИЙ МАТЧ</h2>
              <p className="text-xl font-medium text-blue-200">ВТОРАЯ ЛИГА А (СЕРЕБРО)</p>
            </div>

            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="text-center">
                <div className="mb-4 h-32 w-32 rounded-full bg-white/10 p-4 mx-auto">
                  <img src="/team1-logo.png" alt="Сибирь" className="h-full w-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-white">СИБИРЬ</h3>
                <p className="text-blue-200">Новосибирск</p>
              </div>

              <div className="text-center">
                <div className="mb-4 text-5xl font-bold text-white">VS</div>
                <div className="rounded-lg bg-blue-800/50 px-8 py-3">
                  <p className="text-xl font-bold text-white">29 МАРТА</p>
                  <p className="text-3xl font-bold text-white">15:00</p>
                </div>
              </div>

              <div className="text-center">
                <div className="mb-4 h-32 w-32 rounded-full bg-white/10 p-4 mx-auto">
                  <img src="/team2-logo.png" alt="Текстильщик" className="h-full w-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-white">ТЕКСТИЛЬЩИК</h3>
                <p className="text-blue-200">Иваново</p>
              </div>
            </div>

            <div className="mt-10 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/tickets">КУПИТЬ БИЛЕТ</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-800">
                <Link to="/match">СМОТРЕТЬ МАТЧ</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
