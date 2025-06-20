// frontend/src/pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credenciais',
      credentials: {
        email:    { label: 'E-mail', type: 'text' },
        password: { label: 'Senha',  type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({
            email:    credentials!.email,
            password: credentials!.password,
          }),
        });
        const data = await res.json();
        if (res.ok && data.access_token) {
          // NextAuth espera pelo menos { name, email, id }
          return { id: data.userId, email: data.email, name: data.name, accessToken: data.access_token };
        }
        return null;
      }
    })
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.accessToken = (user as any).accessToken;
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    }
  }
});
