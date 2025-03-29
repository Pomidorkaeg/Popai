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

export const getTournamentsList = (): Tournament[] => {
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
      startDate: '2024-02-15',
      endDate: '2024-05-30',
      status: 'active',
      location: 'Россия',
      teams: 32
    }
  ];
};

export const getTournamentTable = (tournamentId: string): TournamentData => {
  return {
    title: 'Чемпионат России 2024',
    season: '2023/2024',
    lastUpdated: '2024-03-15',
    teams: [
      {
        position: 1,
        name: 'Зенит',
        played: 20,
        won: 15,
        drawn: 3,
        lost: 2,
        goalsFor: 45,
        goalsAgainst: 15,
        goalDifference: 30,
        points: 48
      },
      {
        position: 2,
        name: 'ЦСКА',
        played: 20,
        won: 14,
        drawn: 4,
        lost: 2,
        goalsFor: 40,
        goalsAgainst: 18,
        goalDifference: 22,
        points: 46
      }
    ],
    topScorers: [
      {
        position: 1,
        name: 'Иван Иванов',
        team: 'Зенит',
        goals: 15
      },
      {
        position: 2,
        name: 'Петр Петров',
        team: 'ЦСКА',
        goals: 12
      }
    ],
    warnings: [
      {
        position: 1,
        name: 'Алексей Сидоров',
        team: 'Зенит',
        warnings: 5
      },
      {
        position: 2,
        name: 'Дмитрий Кузнецов',
        team: 'ЦСКА',
        warnings: 4
      }
    ],
    expulsions: [
      {
        position: 1,
        name: 'Сергей Смирнов',
        team: 'Зенит',
        expulsions: 1
      },
      {
        position: 2,
        name: 'Андрей Попов',
        team: 'ЦСКА',
        expulsions: 1
      }
    ]
  };
};
