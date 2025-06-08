// frontend/src/pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      credentials: { email: { type: 'text' }, password: { type: 'password' } },
      async authorize(creds) {
        const res = await fetch('http://localhost:3001/auth/login', {
          method: 'POST',
          headers: { 'Content-Type':'application/json' },
          body: JSON.stringify(creds),
        });
        const data = await res.json();
        if (res.ok && data.access_token) {
          return {
            id:          data.userId,
            name:        data.userId.toString(),
            email:       creds.email,
            accessToken: data.access_token,
          };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.accessToken = (user as any).accessToken;
      return token;
    },
    async session({ session, token }) {
      (session as any).accessToken = token.accessToken;
      return session;
    }
  }
});
