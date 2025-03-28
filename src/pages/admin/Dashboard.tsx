import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Панель управления</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/admin/teams">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Управление командами</h2>
            <p className="text-gray-600">Добавление и редактирование команд</p>
          </Card>
        </Link>
        <Link to="/admin/players">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Управление игроками</h2>
            <p className="text-gray-600">Добавление и редактирование игроков</p>
          </Card>
        </Link>
        <Link to="/admin/coaches">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Управление тренерами</h2>
            <p className="text-gray-600">Добавление и редактирование тренеров</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
