export const runtime = 'edge';

import { TailwindIndicator } from '@/components/tailwind-indicator';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: 'white',
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'h-full min-h-screen w-full bg-background antialiased',
          inter.className,
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <TailwindIndicator />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
