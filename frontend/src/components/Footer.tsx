export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-400 mt-12">
      <div className="max-w-4xl mx-auto text-center py-6 px-4 text-sm">
        © {new Date().getFullYear()} AngloTech. Todos os direitos reservados.
      </div>
    </footer>
  );
}
