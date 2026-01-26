import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  const expectedPassword = process.env.PILOT_PASSWORD;

  if (!expectedPassword) {
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  if (password === expectedPassword) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('pilot-access', expectedPassword, {
      path: '/',
      maxAge: 43200,
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
    return response;
  }

  return NextResponse.json(
    { error: 'Feil passord' },
    { status: 401 }
  );
}
