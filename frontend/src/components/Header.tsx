import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-primary text-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-xl font-bold">AngloTech</h1>
        <nav className="space-x-4">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/users" className="hover:underline">
            Usuários
          </Link>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
          <Link href="/register" className="hover:underline">
            Registrar
          </Link>
        </nav>
      </div>
    </header>
);
}
