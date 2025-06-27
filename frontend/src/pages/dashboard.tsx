import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Header  from '../components/Header';
import Footer  from '../components/Footer';
import DashboardHeader from '../components/DashboardHeader';
import SummaryCard     from '../components/SummaryCard';
import ProgressChart   from '../components/ProgressChart';
import ActivityList    from '../components/ActivityList';
import EbookCarousel   from '../components/EbookCarousel';
import NotificationFeed from '../components/NotificationFeed';

export default function Dashboard() {
  // Exemplo de métricas para investidores
  const investorMetrics = [
    { label: 'Usuários Registrados', value: '1.200+' },
    { label: 'Taxa de Retenção',     value: '78%'   },
    { label: 'Receita Mensal (MRR)',  value: '$5K'   },
  ];

  // Conteúdos de demo
  const summaryData = [
    { title: 'Cursos em andamento', value: '3' },
    { title: 'Progresso total',      value: '45%' },
    { title: 'Próxima aula',         value: 'React Avançado - 25/05/2025' },
  ];
  const progressData = [
    { curso: 'Semana 1', percentual: 10 },
    { curso: 'Semana 2', percentual: 25 },
    { curso: 'Semana 3', percentual: 40 },
    { curso: 'Semana 4', percentual: 45 },
  ];
  const activities = [
    { id: 1, title: 'Quiz de TypeScript', course: 'TypeScript', deadline: '30/05/2025' },
    { id: 2, title: 'Exercício de Hooks',  course: 'React',      deadline: '02/06/2025' },
    { id: 3, title: 'Projeto Final',       course: 'Next.js',    deadline: '10/06/2025' },
  ];
  const ebooks = [
    {
      id: 1,
      title: 'Guia React Avançado',
      coverUrl: '/ebooks/react-avancado.jpg',
    },
    {
      id: 2,
      title: 'TypeScript Essencial',
      coverUrl: '/ebooks/typescript.jpg',
    },
  ];
  const notifications = [
    {
      id: 1,
      message: 'Nova aula disponível: Next.js Auth',
      timestamp: '20/05/2025',
    },
    {
      id: 2,
      message: 'Quiz corrigido com sucesso!',
      timestamp: '18/05/2025',
    },
  ];

  return (
    <>
      <Head>
        <title>Dashboard — AngloTech</title>
      </Head>

      <div className="flex min-h-screen bg-gray-900 text-white">
        <Sidebar />

        <div className="flex flex-col flex-1">
          <Header />

          <main className="p-6 flex-1 overflow-auto space-y-8">
            {/* ====== Seção de Apelo ao Investidor ====== */}
            <section className="bg-gradient-to-r from-purple-800 to-blue-600 p-6 rounded-lg text-white">
              <h2 className="text-2xl font-bold mb-4">Apelo ao Investidor</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {investorMetrics.map((m) => (
                  <div key={m.label} className="bg-white/20 p-4 rounded-md">
                    <h3 className="text-xl font-semibold">{m.value}</h3>
                    <p className="text-gray-200">{m.label}</p>
                  </div>
                ))}
              </div>
              <button
                className="mt-6 px-6 py-2 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                📥 Download Pitch Deck
              </button>
            </section>

            {/* ====== Header do Dashboard ====== */}
            <DashboardHeader userEmail="guest@anglotech.com" />

            {/* ====== Cards de Resumo ====== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {summaryData.map(({ title, value }) => (
                <SummaryCard key={title} title={title} value={value} />
              ))}
            </div>

            {/* ====== Gráfico de Progresso ====== */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Progresso Semanal</h3>
              <ProgressChart data={progressData} />
            </div>

            {/* ====== Lista de Atividades e Ebooks ====== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ActivityList activities={activities} />
              <EbookCarousel ebooks={ebooks} />
            </div>

            {/* ====== Feed de Notificações ====== */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Notificações Recentes</h3>
              <NotificationFeed notifications={notifications} />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
