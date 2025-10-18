import { type NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// NextJS configuration
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
};

// Next-intl settings
const withNextIntl = createNextIntlPlugin();

// Let Next-intl integrate with NextJS
export default withNextIntl(nextConfig);
