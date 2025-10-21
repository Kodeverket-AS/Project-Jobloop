import {notFound} from 'next/navigation';

/**
 * This page is used as a catch all to redirect to our own custom 404 page
 */
export default function CatchAllPage() {
  notFound();
}