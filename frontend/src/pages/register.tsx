// frontend/src/pages/register.tsx

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RegisterPage() {
  // 1. Estados
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // 2. Envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

    try {
      const res = await fetch(`${apiUrl}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          address,
          gender,
          phone,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError((data as any).message ?? "Erro ao registrar usuário");
        return;
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
      setGender("");
      setPhone("");
    } catch (err) {
      console.error("Error registering:", err);
      setError("Falha na conexão com o servidor");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1 items-center justify-center bg-dark-bg dark:bg-light-bg">
        <div className="bg-dark-card dark:bg-light-card p-8 rounded-xl shadow-lg w-full max-w-sm">
          <Head>
            <title>Registrar — AngloTech</title>
          </Head>

          <h2 className="text-2xl font-semibold text-dark-text dark:text-light-text mb-6 text-center">
            Criar conta na AngloTech
          </h2>

          {error && <p className="text-error mb-4 text-center">{error}</p>}
          {success && (
            <p className="text-primary mb-4 text-center">
              Usuário cadastrado com sucesso!{" "}
              <Link href="/login" className="underline">
                Faça login
              </Link>
              .
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-dark-subtext dark:text-light-subtext mb-1"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Seu nome completo"
                className="w-full px-4 py-2 rounded-lg bg-dark-bg dark:bg-light-bg text-dark-text dark:text-light-text placeholder-dark-subtext dark:placeholder-light-subtext focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-dark-subtext dark:text-light-subtext mb-1"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="seu@exemplo.com"
                className="w-full px-4 py-2 rounded-lg bg-dark-bg dark:bg-light-bg text-dark-text dark:text-light-text placeholder-dark-subtext dark:placeholder-light-subtext focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-dark-subtext dark:text-light-subtext mb-1"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-dark-bg dark:bg-light-bg text-dark-text dark:text-light-text placeholder-dark-subtext dark:placeholder-light-subtext focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-dark-subtext dark:text-light-subtext mb-1"
              >
                Endereço
              </label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-dark-bg dark:bg-light-bg text-dark-text dark:text-light-text placeholder-dark-subtext dark:placeholder-light-subtext focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-dark-subtext dark:text-light-subtext mb-1"
              >
                Sexo
              </label>
              <input
                id="gender"
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-dark-bg dark:bg-light-bg text-dark-text dark:text-light-text placeholder-dark-subtext dark:placeholder-light-subtext focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-dark-subtext dark:text-light-subtext mb-1"
              >
                Telefone
              </label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-dark-bg dark:bg-light-bg text-dark-text dark:text-light-text placeholder-dark-subtext dark:placeholder-light-subtext focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90 text-white py-2 rounded-lg transition"
            >
              Registrar
            </button>
          </form>

          <p className="mt-4 text-center text-dark-subtext dark:text-light-subtext">
            Já tem conta?{" "}
            <Link href="/login" className="text-secondary hover:underline">
              Entrar aqui
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
