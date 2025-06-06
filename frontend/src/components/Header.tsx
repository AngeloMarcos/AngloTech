import Link from 'next/link';
import { LogOut }          from 'lucide-react';
import { signOut }         from 'next-auth/react';
import ThemeToggle         from './ThemeToggle';

export default function Header({
  theme,
  setTheme,
}: {
  theme?: 'dark' | 'light';
  setTheme?: (t: 'dark' | 'light') => void;
}) {
  return (
    <header className="bg-dark-bg dark:bg-light-bg px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-dark-text dark:text-light-text text-xl font-bold">
        AngloTech
      </Link>

      <nav className="space-x-4 flex items-center">
        <Link href="/dashboard" className="text-dark-text dark:text-light-text hover:underline">
          Dashboard
        </Link>
        <Link href="/users"     className="text-dark-text dark:text-light-text hover:underline">
          Usuários
        </Link>
        <Link href="/login"     className="text-dark-text dark:text-light-text hover:underline">
          Login
        </Link>
        <button
          onClick={() => signOut()}
          className="ml-4 text-dark-text dark:text-light-text hover:text-gray-400 transition flex items-center"
        >
          <LogOut className="w-5 h-5 mr-1" /> Sair
        </button>
        {theme && setTheme && (
          <div className="ml-4">
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        )}
      </nav>
    </header>
  );
}
