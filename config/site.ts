import { env } from '@/env.mjs';
import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'SOA',
  description: 'A test web site for SOA',
  keywords: ['SOA'],
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/images/explore-bg.jpg?${new Date().getTime()}`,
};
