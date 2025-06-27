export default function DashboardHeader({
  userEmail,
}: {
  userEmail?: string;
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-white">
        Olá{userEmail ? `, ${userEmail}` : ', Usuário'}!
      </h2>
      <p className="text-gray-400">Bem-vindo de volta à sua área</p>
    </div>
  );
}
