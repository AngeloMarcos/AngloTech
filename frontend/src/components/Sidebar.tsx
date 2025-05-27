// frontend/src/components/Sidebar.tsx

import Link from 'next/link';
import { Home, Users, BarChart2, FileText, DownloadCloud } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-800 text-white flex-shrink-0">
      <nav className="flex flex-col p-4 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          <Home className="w-5 h-5 mr-2" />
          <span>Visão Geral</span>
        </Link>

        <Link
          href="/users"
          className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          <Users className="w-5 h-5 mr-2" />
          <span>Usuários</span>
        </Link>

        <Link
          href="/reports"
          className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          <BarChart2 className="w-5 h-5 mr-2" />
          <span>Relatórios</span>
        </Link>

        <Link
          href="/resources"
          className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          <FileText className="w-5 h-5 mr-2" />
          <span>Recursos</span>
        </Link>

        <Link
          href="/pitch"
          className="mt-6 flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition font-semibold"
        >
          <DownloadCloud className="w-5 h-5 mr-2" />
          <span>Pitch Deck</span>
        </Link>
      </nav>
    </aside>
);
}
