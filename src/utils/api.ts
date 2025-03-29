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
  try {
    // В реальном приложении здесь будет API-запрос
    const tournaments = [
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
    return tournaments;
  } catch (error) {
    console.error('Error fetching tournaments:', error);
    return [];
  }
};

export const getTournamentTable = async (tournamentId: string): Promise<TournamentData> => {
  try {
    // В реальном приложении здесь будет API-запрос
    const data = {
      title: "Кубок среди любительских команд МОО СФФ «Сибирь»",
      season: "2024",
      lastUpdated: new Date().toLocaleDateString('ru-RU'),
      teams: [
        {
          position: 1,
          name: "«Бурятия» (Улан-Удэ)",
          played: 7,
          won: 5,
          drawn: 2,
          lost: 0,
          goalsFor: 15,
          goalsAgainst: 6,
          goalDifference: 9,
          points: 17
        },
        {
          position: 2,
          name: "«Распадская» (Междуреченск)",
          played: 7,
          won: 4,
          drawn: 0,
          lost: 3,
          goalsFor: 9,
          goalsAgainst: 4,
          goalDifference: 5,
          points: 12
        }
      ],
      topScorers: [
        {
          position: 1,
          name: "Рыбованов Алексей",
          team: "Бурятия",
          goals: 5
        },
        {
          position: 2,
          name: "Бекеровский Андрей",
          team: "Темп",
          goals: 4
        }
      ],
      warnings: [
        {
          position: 1,
          name: "Рыбованов Алексей",
          team: "Бурятия",
          warnings: 4
        },
        {
          position: 2,
          name: "Голополобов Евгений",
          team: "Распадская",
          warnings: 4
        }
      ],
      expulsions: [
        {
          position: 1,
          name: "Абдуллаев Степан",
          team: "Енисей-М",
          expulsions: 1
        },
        {
          position: 2,
          name: "Воропаев Кирилл",
          team: "Распадская",
          expulsions: 1
        }
      ]
    };
    return data;
  } catch (error) {
    console.error('Error fetching tournament data:', error);
    throw error;
  }
};

export const fetchTournamentData = async (tournamentId: string): Promise<TournamentData> => {
  try {
    return await getTournamentTable(tournamentId);
  } catch (error) {
    console.error('Error in fetchTournamentData:', error);
    throw error;
  }
};
