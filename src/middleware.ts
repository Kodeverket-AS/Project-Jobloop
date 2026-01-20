import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('pilot-access');

  const normalizedPath = pathname.toLowerCase();
  const isLoginPage = normalizedPath.endsWith('/login') || normalizedPath === '/login';
  const isGjensidigePilot = normalizedPath.includes('gjensidige-pilot');

  if (isLoginPage) {
    return intlMiddleware(request);
  }

  if (isGjensidigePilot) {
    const expectedPassword = process.env.PILOT_PASSWORD;
    
    if (!expectedPassword) {
      const pathSegments = pathname.split('/').filter(Boolean);
      const firstSegment = pathSegments[0];
      const isLocale = ['nb', 'sv', 'en'].includes(firstSegment);
      const locale = isLocale ? firstSegment : routing.defaultLocale;
      const loginUrl = new URL(`/${locale}/login`, request.url);
      return NextResponse.redirect(loginUrl);
    }
    
    const hasValidToken = 
      token && 
      token.value && 
      token.value === expectedPassword;
    
    if (!hasValidToken) {
      const pathSegments = pathname.split('/').filter(Boolean);
      const firstSegment = pathSegments[0];
      const isLocale = ['nb', 'sv', 'en'].includes(firstSegment);
      const locale = isLocale ? firstSegment : routing.defaultLocale;
      const loginUrl = new URL(`/${locale}/login`, request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
    '/gjensidige-pilot/:path*',
    '/(nb|sv|en)/gjensidige-pilot/:path*',
  ],
};
