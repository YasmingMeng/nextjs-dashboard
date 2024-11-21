/*
 * @Description: 
 * @Date: 2024-11-20 11:00:29
 * @LastEditTime: 2024-11-20 11:00:40
 */
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};