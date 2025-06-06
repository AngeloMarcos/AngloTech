// frontend/src/pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [theme, setTheme] = useState<'dark'|'light'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark'|'light';
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <SessionProvider session={session}>
      {/* ===== 2. Wrapper de tema ===== */}
      <div className="min-h-screen bg-dark-bg dark:bg-light-bg text-dark-text dark:text-light-text">
        <Component {...pageProps} theme={theme} setTheme={setTheme} />
      </div>
    </SessionProvider>
  );
}
