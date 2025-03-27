import { Link } from 'react-router-dom'
import { HomeIcon, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] gap-6 text-center">
      <div className="h-24 w-24 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
        <span className="text-4xl font-bold text-red-600 dark:text-red-400">404</span>
      </div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text">
        Страница не найдена
      </h1>
      <p className="text-slate-600 dark:text-slate-400 max-w-md">
        Извините, но страница, которую вы пытаетесь найти, не существует или была перемещена.
      </p>
      <div className="flex gap-4 mt-4">
        <Link 
          to="/" 
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors"
        >
          <HomeIcon className="h-4 w-4" /> На главную
        </Link>
        <button 
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 font-medium rounded-lg flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Назад
        </button>
      </div>
    </div>
  )
}

export default NotFound
