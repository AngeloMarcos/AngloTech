import { useState } from "react";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return { redirect: { destination: "/login", permanent: false } };
  }
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  const res = await fetch(`${apiUrl}/users/${ctx.params.id}`, {
    headers: { Authorization: `Bearer ${(session as any).accessToken}` },
  });
  const user = res.ok ? await res.json() : null;
  return { props: { user } };
}

export default function EditUser({ user }) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState(user?.address || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [message, setMessage] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${apiUrl}/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, address, gender, phone }),
    });
    if (res.ok) setMessage("Salvo com sucesso");
    else setMessage("Erro ao salvar");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 items-center justify-center bg-dark-bg dark:bg-light-bg">
        <div className="bg-dark-card dark:bg-light-card p-8 rounded-xl shadow-lg w-full max-w-sm">
          <Head>
            <title>Editar Usuário</title>
          </Head>
          <h2 className="text-2xl font-semibold text-dark-text dark:text-light-text mb-6 text-center">
            Editar Usuário
          </h2>
          {message && <p className="mb-4 text-center">{message}</p>}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
              className="w-full px-4 py-2 rounded"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="w-full px-4 py-2 rounded"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              className="w-full px-4 py-2 rounded"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Endereço"
              className="w-full px-4 py-2 rounded"
            />
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="Sexo"
              className="w-full px-4 py-2 rounded"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Telefone"
              className="w-full px-4 py-2 rounded"
            />
            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 rounded"
            >
              Salvar
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/users" className="text-secondary hover:underline">
              Voltar
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
