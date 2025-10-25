import { type WebhookPayload } from '@/types/sanity/api.types';
import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req: NextRequest) {
  try {
    // Define sanity webhook secret key
    const secret = process.env.SANITY_WEBHOOK_KEY;
    if (!secret) {
      return new NextResponse('Missing environment variable for sanity revalidation', {
        status: 500,
      });
    }

    // Parse request body with built in tool from sanity
    const { isValidSignature, body } = await parseBody<WebhookPayload>(req, secret, true);

    // Error handling
    if (!isValidSignature) {
      return new Response(
        JSON.stringify({ message: 'Invalid signature', isValidSignature, body }),
        {
          status: 401,
        }
      );
    }

    // Development mode invalidates all content, regardless of path.
    const isDevelopmentMode = req.headers.get('Sandbox');
    if (isDevelopmentMode && isDevelopmentMode !== 'false') {
      // Revalidate all content.
      revalidateTag('all');

      // Return success state for logging in content-lake
      return NextResponse.json({ body, message: 'Updated all content' });
    }

    // Validate that tags has right syntax
    if (!Array.isArray(body?.tags) || !body.tags.length) {
      return new Response(JSON.stringify({ message: 'Bad Request', body }), { status: 400 });
    }

    // Invalidates data for a given tag, forcing it to be updated on next visit
    // https://nextjs.org/docs/app/api-reference/functions/revalidateTag
    body.tags.forEach((tag) => {
      console.log(`Cache invalidation requested for ${tag}`);
      revalidateTag(tag);
    });

    // Return success state for logging in content-lake
    return NextResponse.json({ body, message: `Updated route: ${body.tags}` });
  } catch (err) {
    // Return error state for logging in content-lake
    console.warn((err as Error).message);
    return new Response((err as Error).message, { status: 500 });
  }
}
