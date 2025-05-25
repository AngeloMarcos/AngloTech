// frontend/src/pages/users.tsx
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

type User = { id: number; email: string; name?: string };

type UsersPageProps = {
  users: User[];
  error: string | null;
};

export default function UsersPage({ users, error }: UsersPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-900 text-white">
        <Head>
          <title>Usuários — AngloTech</title>
        </Head>
        <div className="max-w-4xl mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold mb-6 text-primary">Usuários Cadastrados</h1>

          {error ? (
            <p className="text-red-500 mb-4">{error}</p>
          ) : users.length === 0 ? (
            <p className="text-gray-400">Nenhum usuário encontrado.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left">ID</th>
                    <th className="px-4 py-2 text-left">Nome</th>
                    <th className="px-4 py-2 text-left">E-mail</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(({ id, name, email }) => (
                    <tr
                      key={id}
                      className="border-b border-gray-700 hover:bg-gray-700"
                    >
                      <td className="px-4 py-3">{id}</td>
                      <td className="px-4 py-3">{name ?? '—'}</td>
                      <td className="px-4 py-3">{email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-6">
            <Link href="/" className="text-secondary hover:underline">
              ← Voltar para o início
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  let users: User[] = [];
  let error: string | null = null;

  try {
    const res = await fetch(`${apiUrl}/users`);
    if (!res.ok) {
      error = `API retornou status ${res.status}`;
    } else {
      const data = await res.json();
      users = Array.isArray(data) ? data : data.users || [];
    }
  } catch (e: any) {
    error = 'Não foi possível conectar à API.';
    console.error('Fetch users error:', e);
  }

  return {
    props: {
      users,
      error
    },
  };
}
