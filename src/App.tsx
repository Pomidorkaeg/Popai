import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@/components/theme-provider'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Team from '@/pages/Team'
import Tournaments from '@/pages/Tournaments'
import TournamentDetails from '@/pages/TournamentDetails'
import NotFound from '@/pages/NotFound'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/tournaments" element={<Tournaments />} />
              <Route path="/tournaments/:id" element={<TournamentDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </TooltipProvider>
  );
}

export default App;
