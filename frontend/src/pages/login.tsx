// frontend/src/pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoginPage() {
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [error, setError]         = useState('');
  const router                    = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // chame o provider 'credentials'
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError('Credenciais inválidas');
    } else {
      // sucesso, vá para o dashboard
      router.push('/dashboard');
    }
  };

  return (
    <>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-900">
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow">
          <h1 className="text-2xl text-white mb-4">Entrar</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-3 p-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-primary rounded text-white hover:bg-primary/90"
          >
            Entrar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
