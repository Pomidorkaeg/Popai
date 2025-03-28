import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/80"></div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Турнирные таблицы и результаты
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Следите за актуальными результатами матчей и турнирными таблицами всех соревнований
          </p>
          <div className="flex gap-4">
            <Link
              to="/tournaments"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Смотреть турниры
            </Link>
            <Link
              to="/matches"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium"
            >
              Результаты матчей
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
