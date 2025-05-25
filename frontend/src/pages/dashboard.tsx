// frontend/src/pages/dashboard.tsx
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardHeader from '../components/DashboardHeader';
import SummaryCard from '../components/SummaryCard';
import ProgressChart from '../components/ProgressChart';
import ActivityList from '../components/ActivityList';
import EbookCarousel from '../components/EbookCarousel';
import NotificationFeed from '../components/NotificationFeed';

type DashboardProps = {
  session: Session;
};

export default function Dashboard({ session }: DashboardProps) {
  return (
    <>
      <Head>
        <title>Dashboard — AngloTech</title>
      </Head>

      <div className="flex min-h-screen bg-gray-900 text-white">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="p-6 flex-1 overflow-auto">
            <DashboardHeader />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <SummaryCard title="Cursos em andamento" value="3" />
              <SummaryCard title="Progresso total" value="45%" />
              <SummaryCard title="Próxima aula" value="Componentes React - 20/05/2025" />
            </div>
            <div className="my-6">
              <ProgressChart data={[]} />
            </div>
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ActivityList activities={[]} />
              <EbookCarousel ebooks={[]} />
            </div>
            <div className="my-6">
              <NotificationFeed notifications={[]} />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return { redirect: { destination: '/login', permanent: false } };
  }
  return {
    props: { session },
  };
}
