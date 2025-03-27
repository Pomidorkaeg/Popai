import { useParams } from 'react-router-dom'

const TournamentDetails = () => {
  const { id } = useParams()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Детали турнира {id}</h1>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 space-y-2">
          <h3 className="text-lg font-semibold">Название турнира</h3>
          <p className="text-sm">Детальное описание турнира</p>
        </div>
      </div>
    </div>
  )
}

export default TournamentDetails 