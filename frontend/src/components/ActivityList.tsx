import Link from 'next/link';

type Activity = {
  id: number;
  title: string;
  status: string;
};

type ActivityListProps = {
  activities: Activity[];
};

export default function ActivityList({ activities }: ActivityListProps) {
  if (activities.length === 0) {
    return <p className="text-gray-400">Nenhuma atividade pendente.</p>;
  }
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-white text-lg mb-2">Próximas Atividades</h3>
      <ul className="space-y-2">
        {activities.map((act) => (
          <li key={act.id} className="flex justify-between items-center">
            <div>
              <p className="text-white">{act.title}</p>
              <p className="text-gray-400 text-sm">{act.status}</p>
            </div>
            <div>
              <Link href={`/activities/${act.id}`} className="text-primary hover:underline">
                Ir
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
