// src/pages/login.tsx
import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar com NextAuth ou API custom
    console.log({ email, password });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1 items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Entrar na AngloTech
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="seu@exemplo.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-300 mb-1">
                Senha
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-secondary/90 transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
