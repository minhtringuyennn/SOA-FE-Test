'use client';

export const runtime = 'edge';

import HeroBanner from '@/components/banner';
import FirstBloc from '@/components/bloc-1';
import SecondBloc from '@/components/bloc-2';
import ThirdBloc from '@/components/bloc-3';
import Header from '@/components/header';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <main className="bg-white">
      <Header />
      <HeroBanner />
      <FirstBloc />
      <SecondBloc />
      <ThirdBloc />
    </main>
  );
}
