import { Link } from 'react-router-dom'
import { ChevronRight, Trophy, Calendar, Users } from 'lucide-react'

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-gray-600 text-transparent bg-clip-text">
          Tournament Tables Hub
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Добро пожаловать в приложение для управления турнирными таблицами. 
          Здесь вы можете просматривать и управлять турнирами, командами и результатами матчей.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/tournaments" 
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors"
          >
            Посмотреть турниры <ChevronRight className="h-4 w-4" />
          </Link>
          <Link 
            to="/team" 
            className="px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 font-medium rounded-lg transition-colors"
          >
            Наша команда
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
            <Trophy className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Управление турнирами</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Создавайте и управляйте различными типами турниров с разными форматами и правилами.
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-4">
            <Calendar className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Расписание матчей</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Удобное планирование и отслеживание всех предстоящих и прошедших матчей в одном месте.
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Управление командами</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Создавайте профили команд, управляйте составами и отслеживайте статистику игроков.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home 