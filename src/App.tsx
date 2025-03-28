import { Suspense, lazy, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@/components/theme-provider'

// Улучшенный компонент загрузки
const PageLoading = () => {
  const [loadTime, setLoadTime] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadTime(prev => {
        if (prev >= 10) {
          setError(true);
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (error) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg font-bold text-red-500">Ошибка загрузки</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Обновить страницу
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-sm text-muted-foreground">Загрузка... ({loadTime}с)</p>
      </div>
    </div>
  );
};

// Импорты маршрутов
const Index = lazy(() => import("@/pages/Index"));
const Team = lazy(() => import("@/pages/Team"));
const Tournaments = lazy(() => import("@/pages/Tournaments"));
const TournamentDetails = lazy(() => import("@/pages/TournamentDetails"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Административные маршруты
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminHome = lazy(() => import("./pages/admin/AdminHome"));
const PlayersManagement = lazy(() => import("./pages/admin/PlayersManagement"));
const CoachesManagement = lazy(() => import("./pages/admin/CoachesManagement"));
const TeamsManagement = lazy(() => import("./pages/admin/TeamsManagement"));

// Настроенный клиент React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});

const App = () => {
  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <HashRouter>
            <div className="min-h-screen bg-background">
              <Suspense fallback={<PageLoading />}>
                <Routes>
                  {/* Публичные маршруты */}
                  <Route path="/" element={<Index />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/tournaments" element={<Tournaments />} />
                  <Route path="/tournaments/:id" element={<TournamentDetails />} />
                  
                  {/* Административные маршруты */}
                  <Route path="/admin" element={<AdminDashboard />}>
                    <Route index element={<AdminHome />} />
                    <Route path="players" element={<PlayersManagement />} />
                    <Route path="coaches" element={<CoachesManagement />} />
                    <Route path="teams" element={<TeamsManagement />} />
                    <Route path="tournaments" element={<AdminHome />} />
                  </Route>
                  
                  {/* 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </HashRouter>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
