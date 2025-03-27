import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Suspense, lazy } from 'react'
import { Loader2 } from 'lucide-react'

// Ленивая загрузка компонентов
const Layout = lazy(() => import('@/components/layout/Layout'))
const Home = lazy(() => import('@/pages/Home'))
const Team = lazy(() => import('@/pages/Team'))
const Tournaments = lazy(() => import('@/pages/Tournaments'))
const TournamentDetails = lazy(() => import('@/pages/TournamentDetails'))
const NotFound = lazy(() => import('@/pages/NotFound'))

// Создаем клиент React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 минут
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TooltipProvider>
          <Router>
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="team" element={<Team />} />
                  <Route path="tournaments" element={<Tournaments />} />
                  <Route path="tournaments/:id" element={<TournamentDetails />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
            <Toaster />
            <Sonner />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
