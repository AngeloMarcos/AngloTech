import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions, Session } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credenciais',
      credentials: {
        email:    { label: 'Email', type: 'text' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        // 1) faz login e recebe token + userId
        const res = await fetch('http://localhost:3001/auth/login', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({
            email:    credentials.email,
            password: credentials.password,
          }),
        });
        const data = await res.json();

        if (!res.ok || !data.access_token) {
          return null;
        }

        // 2) retorna um objeto compatível com DefaultUser
        return {
          id:    data.userId ?? 0,           // NextAuth espera esse campo
          name:  credentials.email,
          email: credentials.email,
          // guardamos o token no JWT callback, não aqui
          // @ts-ignore
          accessToken: data.access_token,
        };
      },
    }),
  ],

  session: { strategy: 'jwt' },

  callbacks: {
    // Armazena o accessToken no próprio token JWT
    async jwt({ token, user }): Promise<JWT> {
      if (user) {
        // @ts-ignore
        token.accessToken = (user as any).accessToken;
      }
      return token;
    },

    // Exibe o accessToken na session do front
    async session({ session, token }): Promise<Session> {
      // @ts-ignore
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
};

export default NextAuth(authOptions);
