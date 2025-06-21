// frontend/src/pages/users.tsx

import Head from "next/head";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getSession } from "next-auth/react";
type User = {
  id: number;
  name: string;
  email: string;
  address?: string;
  gender?: string;
  phone?: string;
};

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  const res = await fetch(`${apiUrl}/users`, {
    headers: { Authorization: `Bearer ${(session as any).accessToken}` },
  });

  const users = res.ok ? await res.json() : [];
  return { props: { users } };
}

export default function UsersPage({ users }: { users: User[] }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const handleDelete = async (id: number) => {
    if (!confirm("Confirmar exclusão?")) return;
    await fetch(`${apiUrl}/users/${id}`, { method: "DELETE" });
    location.reload();
  };
  return (
    <div className="flex min-h-screen bg-dark-bg dark:bg-light-bg text-dark-text dark:text-light-text">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="p-6 flex-1 overflow-auto">
          <Head>
            <title>Usuários — AngloTech</title>
          </Head>

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-primary">
              Usuários Cadastrados
            </h1>
            <Link
              href="/users/create"
              className="bg-secondary text-white px-4 py-2 rounded"
            >
              Novo Usuário
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-dark-card dark:bg-light-card rounded-lg overflow-hidden">
              <thead className="bg-dark-border dark:bg-light-border">
                <tr>
                  <th className="px-4 py-2 text-left text-dark-subtext dark:text-light-subtext">
                    ID
                  </th>
                  <th className="px-4 py-2 text-left text-dark-subtext dark:text-light-subtext">
                    Nome
                  </th>
                  <th className="px-4 py-2 text-left text-dark-subtext dark:text-light-subtext">
                    E-mail
                  </th>
                  <th className="px-4 py-2 text-left text-dark-subtext dark:text-light-subtext">
                    Endereço
                  </th>
                  <th className="px-4 py-2 text-left text-dark-subtext dark:text-light-subtext">
                    Sexo
                  </th>
                  <th className="px-4 py-2 text-left text-dark-subtext dark:text-light-subtext">
                    Telefone
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr
                    key={u.id}
                    className="border-b border-dark-border dark:border-light-border hover:bg-dark-bg dark:hover:bg-light-bg transition"
                  >
                    <td className="px-4 py-3 text-dark-text dark:text-light-text">
                      {u.id}
                    </td>
                    <td className="px-4 py-3 text-dark-text dark:text-light-text">
                      {u.name}
                    </td>
                    <td className="px-4 py-3 text-dark-text dark:text-light-text">
                      {u.email}
                    </td>
                    <td className="px-4 py-3 text-dark-text dark:text-light-text">
                      {u.address}
                    </td>
                    <td className="px-4 py-3 text-dark-text dark:text-light-text">
                      {u.gender}
                    </td>
                    <td className="px-4 py-3 text-dark-text dark:text-light-text">
                      {u.phone}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/users/${u.id}/edit`}
                        className="text-secondary mr-2"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => handleDelete(u.id)}
                        className="text-error"
                      >
                        Excluir
                      </button>
                    </td>
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
