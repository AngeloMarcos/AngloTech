// frontend/src/components/Header.tsx

import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function Header() {
  return (
    <header className="bg-primary px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-white text-xl font-bold">
        AngloTech
      </Link>

      <nav className="space-x-4 flex items-center">
        <Link href="/dashboard" className="text-white hover:underline">
          Dashboard
        </Link>
        <Link href="/login" className="text-white hover:underline">
          Login
        </Link>
        <button
          onClick={() => signOut()}
          className="ml-4 text-white hover:text-gray-300 transition flex items-center"
        >
          <LogOut className="w-5 h-5 mr-1" />
          Sair
        </button>
      </nav>
    </header>
);
}
