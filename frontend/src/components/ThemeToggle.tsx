import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
}) {
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun   className="w-5 h-5 text-yellow-300" />
      ) : (
        <Moon  className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
}
