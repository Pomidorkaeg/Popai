import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

// Pages
import Index from './pages/Index';
import Team from './pages/Team';
import Tournaments from './pages/Tournaments';
import NotFound from './pages/NotFound';

// Admin components
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminHome from './pages/admin/AdminHome';
import PlayersManagement from './pages/admin/PlayersManagement';
import CoachesManagement from './pages/admin/CoachesManagement';
import TeamsManagement from './pages/admin/TeamsManagement';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team/:id" element={<Team />} />
          <Route path="/tournaments" element={<Tournaments />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<AdminHome />} />
            <Route path="players" element={<PlayersManagement />} />
            <Route path="coaches" element={<CoachesManagement />} />
            <Route path="teams" element={<TeamsManagement />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
