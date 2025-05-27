// frontend/src/pages/users.tsx
import Head from 'next/head';
import Link from 'next/link';         // <- importe o Link
import Sidebar from '../components/Sidebar';
import Header  from '../components/Header';
import Footer  from '../components/Footer';

type User = { id: number; name: string; email: string };

export default function UsersPage() {
  // === Exemplo de dados estáticos ===
  const users: User[] = [
    { id: 1, name: 'Administrador', email: 'admin@anglotech.com' },
    { id: 2, name: 'Alice Dev',     email: 'alice@anglotech.com' },
    { id: 3, name: 'Bob Coder',     email: 'bob@anglotech.com' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 flex-1 overflow-auto">
          <Head>
            <title>Usuários — AngloTech</title>
          </Head>

          <h1 className="text-3xl font-bold mb-6 text-primary">Usuários Cadastrados</h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 rounded-lg">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Nome</th>
                  <th className="px-4 py-2 text-left">E-mail</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b border-gray-700 hover:bg-gray-700">
                    <td className="px-4 py-3">{u.id}</td>
                    <td className="px-4 py-3">{u.name}</td>
                    <td className="px-4 py-3">{u.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <Link href="/" className="text-secondary hover:underline">
              ← Voltar para o início
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
