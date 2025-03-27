import { useParams } from 'react-router-dom'
import { Trophy, Calendar, Users, MapPin, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

// Моковые данные для примера
const tournaments = [
  { 
    id: '1', 
    name: 'Чемпионат города', 
    date: '10 мая - 20 июня 2023', 
    location: 'Городской стадион',
    teams: 12, 
    status: 'active',
    description: 'Ежегодный чемпионат города по футболу среди любительских команд. Турнир проводится в формате круговой системы, где каждая команда играет с каждой.',
    matches: [
      { id: 1, team1: 'Локомотив', team2: 'Динамо', score: '2:1', date: '12 мая 2023' },
      { id: 2, team1: 'Спартак', team2: 'Зенит', score: '0:3', date: '13 мая 2023' },
      { id: 3, team1: 'ЦСКА', team2: 'Локомотив', score: '1:1', date: '15 мая 2023' },
    ],
    standings: [
      { position: 1, team: 'Зенит', played: 3, won: 3, drawn: 0, lost: 0, points: 9 },
      { position: 2, team: 'Локомотив', played: 3, won: 1, drawn: 1, lost: 1, points: 4 },
      { position: 3, team: 'ЦСКА', played: 3, won: 1, drawn: 1, lost: 1, points: 4 },
      { position: 4, team: 'Динамо', played: 3, won: 1, drawn: 0, lost: 2, points: 3 },
      { position: 5, team: 'Спартак', played: 3, won: 0, drawn: 0, lost: 3, points: 0 },
    ]
  },
  // Остальные турниры...
]

const TournamentDetails = () => {
  const { id } = useParams()
  const tournament = tournaments.find(t => t.id === id)

  if (!tournament) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-2">Турнир не найден</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Запрашиваемый турнир не существует или был удален.
        </p>
        <Link 
          to="/tournaments" 
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
        >
          <ArrowLeft className="h-4 w-4" /> Вернуться к списку турниров
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2 mb-6">
        <Link 
          to="/tournaments" 
          className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="h-3 w-3" /> Назад к турнирам
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 h-24 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
            <Trophy className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  tournament.status === 'active' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                    : 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300'
                }`}>
                  {tournament.status === 'active' ? 'Активный' : 'Предстоящий'}
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-4">{tournament.name}</h1>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-3xl">
                {tournament.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-slate-400" />
                  <span>{tournament.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-slate-400" />
                  <span>{tournament.teams} команд</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <span>{tournament.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Турнирная таблица */}
        <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-semibold">Турнирная таблица</h2>
          </div>
          <div className="overflow-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800">
                  <th className="text-left p-4 font-medium text-sm">#</th>
                  <th className="text-left p-4 font-medium text-sm">Команда</th>
                  <th className="text-center p-4 font-medium text-sm">И</th>
                  <th className="text-center p-4 font-medium text-sm">В</th>
                  <th className="text-center p-4 font-medium text-sm">Н</th>
                  <th className="text-center p-4 font-medium text-sm">П</th>
                  <th className="text-center p-4 font-medium text-sm">О</th>
                </tr>
              </thead>
              <tbody>
                {tournament.standings.map((row) => (
                  <tr key={row.position} className="border-t border-slate-200 dark:border-slate-800">
                    <td className="p-4">{row.position}</td>
                    <td className="p-4 font-medium">{row.team}</td>
                    <td className="p-4 text-center">{row.played}</td>
                    <td className="p-4 text-center">{row.won}</td>
                    <td className="p-4 text-center">{row.drawn}</td>
                    <td className="p-4 text-center">{row.lost}</td>
                    <td className="p-4 text-center font-bold">{row.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Последние матчи */}
        <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-semibold">Последние матчи</h2>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {tournament.matches.map((match) => (
              <div key={match.id} className="p-4">
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">{match.date}</div>
                <div className="flex justify-between items-center">
                  <div className="font-medium">{match.team1}</div>
                  <div className="font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md">
                    {match.score}
                  </div>
                  <div className="font-medium">{match.team2}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TournamentDetails 