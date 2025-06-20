type Notification = {
  id: number;
  message: string;
  date: string;
};

type NotificationFeedProps = {
  notifications: Notification[];
};

export default function NotificationFeed({
  notifications,
}: NotificationFeedProps) {
  if (notifications.length === 0) {
    return <p className="text-gray-400">Sem notificações recentes.</p>;
  }
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-white text-lg mb-2">Notificações</h3>
      <ul className="space-y-2">
        {notifications.map((n) => (
          <li key={n.id} className="text-gray-300 text-sm">
            {n.message} – <span className="text-gray-500">{n.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
