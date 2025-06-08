import '../styles/globals.css';
import type { AppProps }      from 'next/app';
import { SessionProvider }    from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // carrega preferência do localStorage
  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (stored) setTheme(stored);
  }, []);

  // aplica/remova a classe "dark" no <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <SessionProvider session={session}>
      <div className="min-h-screen bg-dark-bg dark:bg-light-bg text-dark-text dark:text-light-text">
        <Component {...pageProps} theme={theme} setTheme={setTheme} />
      </div>
    </SessionProvider>
  );
}
