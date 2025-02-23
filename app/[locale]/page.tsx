'use client';

import Header from '@/components/header';
import HeroBanner from '@/components/banner';
import FirstBloc from '@/components/bloc-1';
import SecondBloc from '@/components/bloc-2';
import ThirdBloc from '@/components/bloc-3';

export default function Home() {
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
