import { env } from '@/env.mjs';
import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'SOA',
  description: 'SOA',
  keywords: ['SOA'],
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/images/map.png?${new Date().getTime()}`,
};
