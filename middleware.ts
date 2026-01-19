import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('pilot-access');
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/locale/gjensidige-pilot')) {
    if (!token || token.value !== process.env.PILOT_PASSWORD) {
      return NextResponse.redirect(new URL('/locale/login', request.url));
    }
  }

  return NextResponse.next();
}
