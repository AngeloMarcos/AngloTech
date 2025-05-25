import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UsersPage({ users, error }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-900 text-white">
        <Head><title>Usuários — AngloTech</title></Head>
        {/* ... existing layout */}
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return { redirect: { destination: '/login', permanent: false } };
  }
  const res = await fetch('http://localhost:3001/users');
  const users = await res.json();
  return { props: { users, error: null } };
}
