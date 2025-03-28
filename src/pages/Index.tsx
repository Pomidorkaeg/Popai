import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TournamentCard from '@/components/TournamentCard';
import LazyTournamentTable from '@/components/LazyTournamentTable';
import { ArrowRight, Trophy, Users, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTournamentsList, Tournament } from '@/utils/api';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Моковые данные для примера
const standings = [
  { position: 1, team: "Динамо", played: 28, won: 20, drawn: 5, lost: 3, points: 65 },
  { position: 2, team: "Спартак", played: 28, won: 18, drawn: 7, lost: 3, points: 61 },
  { position: 3, team: "ЦСКА", played: 28, won: 17, drawn: 6, lost: 5, points: 57 },
  { position: 4, team: "Зенит", played: 28, won: 16, drawn: 8, lost: 4, points: 56 },
  { position: 5, team: "Локомотив", played: 28, won: 15, drawn: 7, lost: 6, points: 52 },
];

const upcomingMatches = [
  { date: "2024-03-25", time: "19:00", home: "Динамо", away: "Спартак", venue: "ВТБ Арена" },
  { date: "2024-03-26", time: "20:00", home: "ЦСКА", away: "Зенит", venue: "ВЭБ Арена" },
  { date: "2024-03-27", time: "18:30", home: "Локомотив", away: "Ростов", venue: "РЖД Арена" },
];

export default function Index() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [featuredTournament, setFeaturedTournament] = useState<Tournament | null>(null);
  const [activeTab, setActiveTab] = useState("standings");
  
  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const data = await getTournamentsList();
        setTournaments(data);
        
        // Set featured tournament (first featured one or first in the list)
        const featured = data.find((t: any) => t.featured) || data[0];
        setFeaturedTournament(featured);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
        setLoading(false);
      }
    };
    
    fetchTournaments();
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Добро пожаловать</h1>
    </div>
  );
}
