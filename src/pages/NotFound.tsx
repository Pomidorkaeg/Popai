import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">404 - Страница не найдена</h1>
      <Link to="/" className="text-blue-500 hover:underline">
        Вернуться на главную
      </Link>
    </div>
  );
}
