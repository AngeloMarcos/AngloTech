import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>AngloTech</title>
        <meta name="description" content="Plataforma AngloTech" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <Image src={logo} alt="AngloTech Logo" width={150} height={150} />
        <h1 className="mt-6 text-4xl font-bold text-primary">Bem-vindo à AngloTech</h1>
        <p className="mt-2 text-lg text-gray-300">Sua plataforma de cursos tecnológicos</p>
        <div className="mt-8 space-x-4">
          <Link href="/login" className="px-6 py-2 bg-primary rounded hover:bg-primary/90 transition inline-block">
            Login
          </Link>
          <Link href="/register" className="px-6 py-2 bg-secondary rounded hover:bg-secondary/90 transition inline-block">
            Registrar
          </Link>
          <Link href="/dashboard" className="px-6 py-2 bg-primary rounded hover:bg-primary/90 transition inline-block">
            Dashboard
          </Link>
          <Link href="/users" className="px-6 py-2 bg-secondary rounded hover:bg-secondary/90 transition inline-block">
            Usuários
          </Link>
        </div>
      </main>
    </>
}
