import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TournamentCard from '@/components/TournamentCard';
import LazyTournamentTable from '@/components/LazyTournamentTable';
import { Filter, Search, ChevronDown, Trophy } from 'lucide-react';
import { getTournamentsList, Tournament } from '@/utils/api';

const Tournaments = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Турниры</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4].map((id) => (
          <div key={id} className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">Турнир {id}</h3>
              <p className="text-sm">Описание турнира</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tournaments;
