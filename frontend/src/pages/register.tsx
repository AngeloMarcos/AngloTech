// frontend/src/pages/register.tsx
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RegisterPage() {
  // 1. Estados
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // 2. Envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

    try {
      const res = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // 3. Usando a forma completa para evitar ambiguidades
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Erro ao registrar usuário');
        return;
      }

      setSuccess(true);
      // limpa campos
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError('Falha na conexão com o servidor');
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1 items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm">
          <Head>
            <title>Registrar — AngloTech</title>
          </Head>

          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Criar conta na AngloTech
          </h2>

          {error && (
            <p className="text-red-500 mb-4 text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-400 mb-4 text-center">
              Usuário cadastrado com sucesso! <Link href="/login" className="underline">Faça login</Link>.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder="Seu nome completo"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="seu@exemplo.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-300 mb-1">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-secondary/90 transition"
            >
              Registrar
            </button>
          </form>

          <p className="mt-4 text-center text-gray-400">
            Já tem conta?{' '}
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
