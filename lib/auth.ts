import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { eq } from 'drizzle-orm'
import { NextAuthOptions } from 'next-auth'
import type { User } from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import GithubProvider from 'next-auth/providers/github'

export const AuthOptions: NextAuthOptions = {
  debug: process.env.NODE_ENV === 'development',
  // adapter: 
}
