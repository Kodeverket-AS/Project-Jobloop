import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Regex for filtering out routes that doesn't need translations
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
