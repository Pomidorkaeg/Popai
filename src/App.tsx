import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@/components/theme-provider'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Team from '@/pages/Team'
import Tournaments from '@/pages/Tournaments'
import TournamentDetails from '@/pages/TournamentDetails'
import NotFound from '@/pages/NotFound'

// Lazy-load all route components
const Index = lazy(() => import("./pages/Index"));
const News = lazy(() => import("./pages/News"));
const Matches = lazy(() => import("./pages/Matches"));
const Media = lazy(() => import("./pages/Media"));
const Contacts = lazy(() => import("./pages/Contacts"));

// Admin routes
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminHome = lazy(() => import("./pages/admin/AdminHome"));
const PlayersManagement = lazy(() => import("./pages/admin/PlayersManagement"));
const CoachesManagement = lazy(() => import("./pages/admin/CoachesManagement"));
const TeamsManagement = lazy(() => import("./pages/admin/TeamsManagement"));

// Fallback loading component
const PageLoading = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-fc-green border-t-transparent"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
    },
  },
});

// Always use HashRouter for compatibility with GitHub Pages
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router>
          <Layout>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/news" element={<News />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/tournaments" element={<Tournaments />} />
                <Route path="/tournaments/:id" element={<TournamentDetails />} />
                <Route path="/media" element={<Media />} />
                <Route path="/contacts" element={<Contacts />} />
                
                {/* Admin routes */}
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
            </TooltipProvider>
          </Layout>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
