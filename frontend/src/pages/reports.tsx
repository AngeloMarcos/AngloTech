import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SummaryCard from "../components/SummaryCard";
import ProgressChart from "../components/ProgressChart";

export default function ReportsPage() {
  const summaryData = [
    { title: "Total de Usuários", value: "150" },
    { title: "Faturamento", value: "R$ 12K" },
    { title: "Cursos Vendidos", value: "30" },
  ];

  const progressData = [
    { name: "Jan", value: 20 },
    { name: "Fev", value: 40 },
    { name: "Mar", value: 60 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 flex-1 overflow-auto space-y-8">
          <Head>
            <title>Relatórios — AngloTech</title>
          </Head>
          <h1 className="text-3xl font-bold">Relatórios</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {summaryData.map(({ title, value }) => (
              <SummaryCard key={title} title={title} value={value} />
            ))}
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Progresso Mensal</h3>
            <ProgressChart data={progressData} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
