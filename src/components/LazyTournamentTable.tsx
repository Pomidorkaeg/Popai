import React, { useState, useEffect } from 'react';
import { fetchTournamentData, TournamentData } from '@/utils/api';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

interface LazyTournamentTableProps {
  tournamentId: string;
}

const LazyTournamentTable: React.FC<LazyTournamentTableProps> = ({ tournamentId }) => {
  const [data, setData] = useState<TournamentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const tournamentData = await fetchTournamentData(tournamentId);
        if (isMounted) {
          setData(tournamentData);
        }
      } catch (err) {
        if (isMounted) {
          setError('Ошибка при загрузке данных турнира');
          console.error('Error loading tournament data:', err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [tournamentId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-green-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Повторить попытку
        </button>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-8 text-gray-600">
        Нет данных для отображения
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Сезон: {data.season}</span>
        <span>Обновлено: {data.lastUpdated}</span>
      </div>
      
      <Tabs defaultValue="teams" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="teams">Команды</TabsTrigger>
          <TabsTrigger value="scorers">Бомбардиры</TabsTrigger>
          <TabsTrigger value="warnings">Предупреждения</TabsTrigger>
          <TabsTrigger value="expulsions">Удаления</TabsTrigger>
        </TabsList>

        <TabsContent value="teams">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Поз</TableHead>
                  <TableHead>Команда</TableHead>
                  <TableHead>И</TableHead>
                  <TableHead>В</TableHead>
                  <TableHead>Н</TableHead>
                  <TableHead>П</TableHead>
                  <TableHead>М</TableHead>
                  <TableHead>РМ</TableHead>
                  <TableHead>О</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.teams.map((team) => (
                  <TableRow key={team.name}>
                    <TableCell>{team.position}</TableCell>
                    <TableCell>{team.name}</TableCell>
                    <TableCell>{team.played}</TableCell>
                    <TableCell>{team.won}</TableCell>
                    <TableCell>{team.drawn}</TableCell>
                    <TableCell>{team.lost}</TableCell>
                    <TableCell>{team.goalsFor}-{team.goalsAgainst}</TableCell>
                    <TableCell>{team.goalDifference}</TableCell>
                    <TableCell>{team.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="scorers">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Поз</TableHead>
                  <TableHead>Игрок</TableHead>
                  <TableHead>Команда</TableHead>
                  <TableHead>Голы</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.topScorers.map((scorer) => (
                  <TableRow key={scorer.name}>
                    <TableCell>{scorer.position}</TableCell>
                    <TableCell>{scorer.name}</TableCell>
                    <TableCell>{scorer.team}</TableCell>
                    <TableCell>{scorer.goals}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="warnings">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Поз</TableHead>
                  <TableHead>Игрок</TableHead>
                  <TableHead>Команда</TableHead>
                  <TableHead>Предупреждения</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.warnings.map((warning) => (
                  <TableRow key={warning.name}>
                    <TableCell>{warning.position}</TableCell>
                    <TableCell>{warning.name}</TableCell>
                    <TableCell>{warning.team}</TableCell>
                    <TableCell>{warning.warnings}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="expulsions">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Поз</TableHead>
                  <TableHead>Игрок</TableHead>
                  <TableHead>Команда</TableHead>
                  <TableHead>Удаления</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.expulsions.map((expulsion) => (
                  <TableRow key={expulsion.name}>
                    <TableCell>{expulsion.position}</TableCell>
                    <TableCell>{expulsion.name}</TableCell>
                    <TableCell>{expulsion.team}</TableCell>
                    <TableCell>{expulsion.expulsions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LazyTournamentTable;
