import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { eq } from 'drizzle-orm'
import { NextAuthOptions } from 'next-auth'
import type { User } from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import GithubProvider from 'next-auth/providers/github'
import { db } from './db'

export const AuthOptions: NextAuthOptions = {
  debug: process.env.NODE_ENV === 'development',
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    })
  ],

  pages: {
    signIn: '/auth/signin',
  },

  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },
    async jwt({ token, user }) {
      const [dbUser] = await db
        .select()
        .from(users)
        .where(eq(users.email, token.email || ''))
        .limit(1)

      if (!dbUser) {
        if (user) {
          token.id = user?.id
        }
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
  }

}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: string
    }
  }
}
