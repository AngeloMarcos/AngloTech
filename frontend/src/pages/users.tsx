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
  return (
    <div className="flex min-h-screen bg-dark-bg dark:bg-light-bg text-dark-text dark:text-light-text">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="p-6 flex-1 overflow-auto">
          <Head>
            <title>Usuários — AngloTech</title>
          </Head>

          <h1 className="text-3xl font-bold mb-6 text-primary">
            Usuários Cadastrados
          </h1>

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
