import { lazy, Suspense } from 'react';

// Lazy load the actual TournamentTable component
const TournamentTable = lazy(() => import('./TournamentTable'));

// Improved loading placeholder with reduced animation
const TableLoading = () => (
  <div className="animate-pulse" style={{ animationDuration: '1.5s' }}>
    <div className="h-8 bg-gray-200 rounded mb-4 w-1/3"></div>
    <div className="space-y-2">
      <div className="h-10 bg-gray-200 rounded"></div>
      {[...Array(4)].map((_, index) => (
        <div key={index} className="h-12 bg-gray-100 rounded"></div>
      ))}
    </div>
  </div>
);

interface LazyTournamentTableProps {
  tournamentId: string;
  source: string;
}

export default function LazyTournamentTable({ tournamentId, source }: LazyTournamentTableProps) {
  return (
    <Suspense fallback={<TableLoading />}>
      <TournamentTable tournamentId={tournamentId} source={source} />
    </Suspense>
  );
}
