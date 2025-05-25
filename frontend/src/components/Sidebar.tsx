import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
      <nav className="p-6 space-y-4">
        <Link href="/dashboard" className="block hover:text-primary">
          Dashboard
        </Link>
        <Link href="/users" className="block hover:text-primary">
          Usuários
        </Link>
        <Link href="/meus-cursos" className="block hover:text-primary">
          Meus Cursos
        </Link>
        <Link href="/ebooks" className="block hover:text-primary">
          Biblioteca
        </Link>
        <Link href="/activities" className="block hover:text-primary">
          Atividades
        </Link>
        <Link href="/profile" className="block hover:text-primary">
          Perfil
        </Link>
        <Link href="/logout" className="block hover:text-primary">
          Sair
        </Link>
      </nav>
    </aside>
  );
}
