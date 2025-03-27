import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem)] gap-6">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl">Страница не найдена</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Вернуться на главную
      </Link>
    </div>
  )
}

export default NotFound
