import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n';

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localeDetection: true,
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/', '/(fr|en)/:path*'],
};
