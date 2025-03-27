import { Outlet, Link } from 'react-router-dom'
import { Suspense } from 'react'
import { Loader2, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'

const Layout = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
              Tournament Tables Hub
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                Главная
              </Link>
              <Link to="/team" className="font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                Команда
              </Link>
              <Link to="/tournaments" className="font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                Турниры
              </Link>
            </nav>
          </div>
          <div>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Переключить тему"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>
      <main className="container py-8 flex-1">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
              <Loader2 className="h-8 w-8 animate-spin text-green-600" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <footer className="border-t border-slate-200 bg-white py-6 dark:border-slate-800 dark:bg-slate-950">
        <div className="container px-4 text-center text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Tournament Tables Hub. Все права защищены.
        </div>
      </footer>
    </div>
  )
}

export default Layout 