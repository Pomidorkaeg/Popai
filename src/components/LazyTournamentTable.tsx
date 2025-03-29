import React, { lazy, Suspense } from 'react';
import { Card } from '@/components/ui/card';

// Lazy load the actual TournamentTable component
const TournamentTable = lazy(() => import('./TournamentTable'));

// Improved loading placeholder with reduced animation
const TableLoading = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent"></div>
  </div>
);

interface LazyTournamentTableProps {
  tournamentId: string;
  source: string;
}

// Lightweight wrapper that handles the lazy loading
export const LazyTournamentTable: React.FC<LazyTournamentTableProps> = ({ tournamentId, source }) => {
  return (
    <div className="p-6">
      <Suspense fallback={<TableLoading />}>
        <TournamentTable tournamentId={tournamentId} source={source} />
      </Suspense>
    </div>
  );
};
