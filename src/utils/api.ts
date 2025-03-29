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
  teams: Team[];
  topScorers: TopScorer[];
  warnings: Warning[];
  expulsions: Expulsion[];
}

export interface Tournament {
  id: string;
  title: string;
  type: string;
  season: string;
  teams: number;
  source: string;
  featured: boolean;
}

// This would be a real API call in production
export const getTournamentTable = async (tournamentId: string, source: string): Promise<TournamentData> => {
  // Возвращаем данные сразу без задержки
  return {
    title: "Кубок среди любительских команд МОО СФФ «Сибирь» сезона 2024 года",
    season: "2024",
    lastUpdated: new Date().toLocaleDateString('ru-RU'),
    teams: [
      { position: 1, name: "«Бурятия» (Улан-Удэ)", played: 7, won: 5, drawn: 2, lost: 0, goalsFor: 15, goalsAgainst: 6, goalDifference: 9, points: 17 },
      { position: 2, name: "«Распадская» (Междуреченск)", played: 7, won: 4, drawn: 0, lost: 3, goalsFor: 9, goalsAgainst: 4, goalDifference: 5, points: 12 },
      { position: 3, name: "«Темп» (Барнаул)", played: 6, won: 3, drawn: 2, lost: 1, goalsFor: 9, goalsAgainst: 4, goalDifference: 5, points: 11 },
      { position: 4, name: "«Рассвет» (Красноярск)", played: 4, won: 1, drawn: 3, lost: 0, goalsFor: 6, goalsAgainst: 3, goalDifference: 3, points: 6 },
      { position: 5, name: "«Енисей-М» (Красноярск)", played: 6, won: 1, drawn: 3, lost: 2, goalsFor: 7, goalsAgainst: 7, goalDifference: 0, points: 6 },
      { position: 6, name: "«Байкал» (Иркутск)", played: 4, won: 2, drawn: 0, lost: 2, goalsFor: 5, goalsAgainst: 6, goalDifference: -1, points: 6 },
      { position: 7, name: "«ТОЦ-Хайра» (Барнаул)", played: 4, won: 1, drawn: 2, lost: 1, goalsFor: 5, goalsAgainst: 6, goalDifference: -1, points: 5 },
      { position: 8, name: "«Восход» Ден-СРФ (Томск)", played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 3, goalDifference: -1, points: 3 },
    ],
    topScorers: [
      { position: 1, name: "Рыбованов Алексей", team: "Бурятия", goals: 5 },
      { position: 2, name: "Бекеровский Андрей", team: "Темп", goals: 4 },
      { position: 3, name: "Винтер Даниил", team: "Рассвет", goals: 3 },
      { position: 4, name: "Савченко Борис", team: "Енисей-М", goals: 3 },
      { position: 5, name: "Бенедиктов Владимир", team: "Байкал", goals: 2 },
    ],
    warnings: [
      { position: 1, name: "Рыбованов Алексей", team: "Бурятия", warnings: 4 },
      { position: 2, name: "Голополобов Евгений", team: "Распадская", warnings: 4 },
      { position: 3, name: "Чуриков Даниил", team: "Енисей-М", warnings: 3 },
      { position: 4, name: "Жариков Роман", team: "Темп", warnings: 2 },
    ],
    expulsions: [
      { position: 1, name: "Рыбованов Алексей", team: "Бурятия", expulsions: 1 },
      { position: 2, name: "Голополобов Евгений", team: "Распадская", expulsions: 1 },
      { position: 3, name: "Чуриков Даниил", team: "Енисей-М", expulsions: 1 },
    ]
  };
};

export const getTournamentsList = async (): Promise<Tournament[]> => {
  // Возвращаем список турниров сразу без задержки
  return [
    {
      id: "1",
      title: "Кубок среди любительских команд МОО СФФ «Сибирь» сезона 2024 года",
      type: "Кубок",
      season: "2024",
      teams: 8,
      source: "local",
      featured: true
    },
    {
      id: "2",
      title: "Чемпионат Сибири среди любителей 2024",
      type: "Чемпионат",
      season: "2024",
      teams: 12,
      source: "local",
      featured: false
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
    const data = await getTournamentTable(tournamentId, source);
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
