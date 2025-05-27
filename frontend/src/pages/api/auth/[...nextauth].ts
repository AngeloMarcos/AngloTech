// frontend/src/pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credenciais',
      credentials: { email: {type:'text'}, password: {type:'password'} },
      async authorize(creds) {
        if (!creds) return null
        const res = await fetch('http://localhost:3001/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: creds.email, password: creds.password }),
        })
        const data = await res.json()
        if (res.ok && data.access_token) {
          // devolva estes campos mínimos que o NextAuth requer:
          return {
            id:    data.userId,            // seu controller deve retornar userId
            name:  creds.email,
            email: creds.email,
            // guardamos o token só nos callbacks jwt/session
            // @ts-ignore
            accessToken: data.access_token
          }
        }
        return null
      }
    })
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.accessToken = (user as any).accessToken
      return token
    },
    async session({ session, token }) {
      ;(session as any).accessToken = token.accessToken as string
      return session
    }
  }
})
