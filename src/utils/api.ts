import { toast } from '@/components/ui/use-toast';

// Define interfaces for the API responses
export interface Team {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface TopScorer {
  position: number;
  name: string;
  team: string;
  goals: number;
}

export interface Warning {
  position: number;
  name: string;
  team: string;
  warnings: number;
}

export interface Expulsion {
  position: number;
  name: string;
  team: string;
  expulsions: number;
}

export interface TournamentData {
  title: string;
  season: string;
  lastUpdated: string;
  teams: Array<{
    position: number;
    name: string;
    played: number;
    won: number;
    drawn: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    points: number;
  }>;
  topScorers: Array<{
    position: number;
    name: string;
    team: string;
    goals: number;
  }>;
  warnings: Array<{
    position: number;
    name: string;
    team: string;
    warnings: number;
  }>;
  expulsions: Array<{
    position: number;
    name: string;
    team: string;
    expulsions: number;
  }>;
}

export interface Tournament {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  teams: number;
  status: string;
}

export const getTournamentsList = async (): Promise<Tournament[]> => {
  // Возвращаем тестовые данные без try-catch
  return [
    {
      id: '1',
      name: 'Чемпионат России 2024',
      description: 'Профессиональный футбольный турнир',
      startDate: '2024-03-01',
      endDate: '2024-11-30',
      status: 'active',
      location: 'Россия',
      teams: 16
    },
    {
      id: '2',
      name: 'Кубок России 2024',
      description: 'Кубковый турнир',
      startDate: '2024-04-01',
      endDate: '2024-12-31',
      status: 'active',
      location: 'Россия',
      teams: 32
    }
  ];
};

export const getTournamentTable = async (tournamentId: string): Promise<TournamentData> => {
  // Возвращаем тестовые данные без try-catch
  return {
    title: 'Чемпионат России 2024',
    season: '2024',
    lastUpdated: new Date().toLocaleDateString('ru-RU'),
    teams: [
      {
        position: 1,
        name: 'Зенит',
        played: 10,
        won: 8,
        drawn: 2,
        lost: 0,
        goalsFor: 25,
        goalsAgainst: 5,
        goalDifference: 20,
        points: 26
      },
      {
        position: 2,
        name: 'ЦСКА',
        played: 10,
        won: 7,
        drawn: 2,
        lost: 1,
        goalsFor: 20,
        goalsAgainst: 8,
        goalDifference: 12,
        points: 23
      }
    ],
    topScorers: [
      { position: 1, name: 'Иван Иванов', team: 'Зенит', goals: 10 },
      { position: 2, name: 'Петр Петров', team: 'ЦСКА', goals: 8 }
    ],
    warnings: [
      { position: 1, name: 'Алексей Сидоров', team: 'Зенит', warnings: 3 },
      { position: 2, name: 'Дмитрий Смирнов', team: 'ЦСКА', warnings: 2 }
    ],
    expulsions: [
      { position: 1, name: 'Сергей Кузнецов', team: 'Зенит', expulsions: 1 },
      { position: 2, name: 'Андрей Попов', team: 'ЦСКА', expulsions: 1 }
    ]
  };
};

export const fetchTournamentData = async (tournamentId: string): Promise<TournamentData> => {
  try {
    return await getTournamentTable(tournamentId);
  } catch (error) {
    console.error('Error in fetchTournamentData:', error);
    throw error;
  }
};
