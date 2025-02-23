import { IntlErrorCode } from 'next-intl';
import { Pathnames } from 'next-intl/routing';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { fetchPageContent } from './lib/api';

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = 'en' as const;

export const localeNames: { [key: string]: string } = {
  en: 'English',
  fr: 'Français',
};

export type AppPathnames = Pathnames<typeof locales>;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  try {
    const messages = await fetchPageContent(locale);

    return {
      messages,
      onError(error) {
        console.error(error);
      },
      getMessageFallback({ namespace, key, error }) {
        const path = [namespace, key].filter((part) => part != null).join('.');
        if (error.code === IntlErrorCode.MISSING_MESSAGE) {
          return path + ' is not yet translated';
        } else {
          return 'Dear developer, please fix this message: ' + path;
        }
      },
    };
  } catch (error) {
    console.error('Failed to load messages:', error);
    return {
      messages: {},
      onError(error) {
        console.error(error);
      },
      getMessageFallback({ namespace, key, error }) {
        return `Error loading translation: ${namespace}.${key}`;
      },
    };
  }
});
