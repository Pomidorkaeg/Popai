import React from 'react';
import TournamentTable from './TournamentTable';

const LazyTournamentTable = ({ 
  tournamentId, 
  source 
}: { 
  tournamentId: string; 
  source: string 
}) => {
  return <TournamentTable tournamentId={tournamentId} source={source} />;
};

export default LazyTournamentTable;
