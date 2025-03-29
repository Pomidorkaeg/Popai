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

// This would be a real API call in production
export const getTournamentTable = async (tournamentId: string): Promise<TournamentData> => {
  // В реальном приложении здесь будет API-запрос
  return {
    teams: [
      {
        position: 1,
        name: "Команда 1",
        played: 10,
        won: 7,
        drawn: 2,
        lost: 1,
        goalsFor: 25,
        goalsAgainst: 8,
        goalDifference: 17,
        points: 23
      },
      {
        position: 2,
        name: "Команда 2",
        played: 10,
        won: 6,
        drawn: 3,
        lost: 1,
        goalsFor: 20,
        goalsAgainst: 10,
        goalDifference: 10,
        points: 21
      }
    ],
    topScorers: [
      {
        position: 1,
        name: "Игрок 1",
        team: "Команда 1",
        goals: 12
      },
      {
        position: 2,
        name: "Игрок 2",
        team: "Команда 2",
        goals: 10
      }
    ],
    warnings: [
      {
        position: 1,
        name: "Игрок 3",
        team: "Команда 1",
        warnings: 3
      },
      {
        position: 2,
        name: "Игрок 4",
        team: "Команда 2",
        warnings: 2
      }
    ],
    expulsions: [
      {
        position: 1,
        name: "Игрок 5",
        team: "Команда 1",
        expulsions: 1
      },
      {
        position: 2,
        name: "Игрок 6",
        team: "Команда 2",
        expulsions: 1
      }
    ]
  };
};

export const getTournamentsList = async (): Promise<Tournament[]> => {
  // В реальном приложении здесь будет API-запрос
  return [
    {
      id: '1',
      name: "Кубок среди любительских команд МОО СФФ «Сибирь»",
      description: "Турнир среди любительских команд Сибирского федерального округа",
      startDate: "01.03.2024",
      endDate: "30.06.2024",
      location: "Сибирский федеральный округ",
      status: "active",
      teams: 8,
      source: "sff-siberia.ru"
    },
    {
      id: '2',
      name: "Чемпионат города по футболу",
      description: "Городской чемпионат по футболу среди любительских команд",
      startDate: "15.02.2024",
      endDate: "15.05.2024",
      location: "Москва",
      status: "active",
      teams: 12,
      source: "sff-siberia.ru"
    },
    {
      id: '3',
      name: "Кубок области",
      description: "Кубок области по футболу среди любительских команд",
      startDate: "01.01.2024",
      endDate: "28.02.2024",
      location: "Московская область",
      status: "completed",
      teams: 16,
      source: "sff-siberia.ru"
    }
  ];
};

// In a production application, this would be a real API call
// For now, it's just a placeholder function
export const fetchTournamentData = async (tournamentId: string): Promise<TournamentData> => {
  console.log(`Fetching data for tournament ID: ${tournamentId}`);
  
  // Determine the source based on the tournament ID
  let source = "sff-siberia.ru";
  if (["novosibirsk-championship", "victory-cup", "novosibirsk-region-cup"].includes(tournamentId)) {
    source = "ffnso.ru";
  }
  
  try {
    const data = await getTournamentTable(tournamentId);
    return data;
  } catch (error) {
    console.error("Error fetching tournament data:", error);
    toast({
      variant: "destructive",
      title: "Ошибка загрузки",
      description: "Не удалось загрузить данные турнира",
    });
    throw error;
  }
};
