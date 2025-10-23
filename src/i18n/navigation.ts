import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Create wrapper around navigation API to avoid specifying locale in nav links
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
  };
});
