'use client';

import { Link } from '@/navigation';
import useEmblaCarousel from 'embla-carousel-react';
import {
  ArrowRight,
  Earth,
  Facebook,
  Handshake,
  Instagram,
  ShieldCheck,
  Smile,
  User,
  Youtube,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '../ui/button';

const LandingPage = () => {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });
  const t = useTranslations();
  const SLIDES = [
    {
      image: '/images/carousel-1.png',
      category: t('bloc_3.cases.0.category'),
      title: t('bloc_3.cases.0.tagline'),
      description: t('bloc_3.cases.0.description'),
    },
    {
      image: '/images/carousel-2.png',
      category: t('bloc_3.cases.1.category'),
      title: t('bloc_3.cases.1.tagline'),
      description: t('bloc_3.cases.1.description'),
    },
    {
      image: '/images/carousel-3.png',
      category: t('bloc_3.cases.2.category'),
      title: t('bloc_3.cases.2.tagline'),
      description: t('bloc_3.cases.2.description'),
    },
    {
      image: '/images/carousel-4.png',
      category: t('bloc_3.cases.3.category'),
      title: t('bloc_3.cases.3.tagline'),
      description: t('bloc_3.cases.3.description'),
    },
  ];
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-12 md:px-0 md:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#ff6b4e]">
            {t('bloc_3.title')}
          </h2>
          <a
            href="#"
            className="hidden items-center text-sm text-gray-500 hover:text-gray-700 sm:flex"
          >
            {t('bloc_3.more_info')}
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-x-hidden">
          <div className="flex gap-14 pb-4 md:ml-20">
            {SLIDES.map((slide, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_60%] sm:flex-[0_0_33%] md:flex-[0_0_22%]"
              >
                <div className="flex flex-col gap-2 overflow-hidden bg-white">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={index === 0}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="line-clamp-2 text-sm font-medium text-[#ff6b4e] md:line-clamp-none">
                      {slide.category}
                    </p>
                    <h3 className="text-lg font-semibold text-black">
                      {slide.title}
                    </h3>
                    <p className="line-clamp-3 text-sm text-gray-500">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button className="w-full rounded-full bg-[#F2542D] py-6 text-base text-white hover:bg-[#ff6b4e]/90 sm:hidden">
          {t('bloc_3.more_info')}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </section>
      {/* Hero section */}
      <section className="relative flex p-4 md:p-0">
        <Image
          src="/images/ice-cream-experience.png"
          alt="Ice cream experience"
          fill
          priority
          className="-z-2 object-cover object-center md:hidden"
        />
        <div className="mx-auto max-w-5xl rounded-2xl bg-white/50 px-4 py-8 backdrop-blur-lg md:bg-none">
          <div className="grid md:grid-cols-[70%_30%] ">
            <div className="relative flex flex-col gap-6 py-12">
              <h1 className="z-10 text-2xl font-bold uppercase text-[#F2542D] md:text-3xl lg:text-4xl">
                {t('bloc_4.title')}{' '}
                <span className="text-[#F2542D99]">{t('bloc_4.subtitle')}</span>
              </h1>
              <div className="relative">
                <div className="absolute mt-4 hidden h-[1px] w-12 bg-black md:block" />
                <div className="gap-2 md:pl-20">
                  <h2 className="text-base font-semibold text-[#562C2C] md:text-2xl">
                    {t('bloc_4.text_title')}
                  </h2>
                  <p className="text-sm text-[#562C2CCC] md:text-xl">
                    {t('bloc_4.text')}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                src="/images/ice-cream-experience.png"
                alt="Ice cream experience"
                fill
                className="rounded-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="flex py-10">
        <div className="mx-auto max-w-5xl px-4 md:px-0">
          <div className="flex flex-wrap items-center justify-center gap-8 md:flex-nowrap">
            {[
              {
                value: t('bloc_4.pictos.0.title'),
                icon: <ShieldCheck />,
                description: t('bloc_4.pictos.0.description'),
              },
              {
                value: t('bloc_4.pictos.1.title'),
                icon: <Handshake />,
                description: t('bloc_4.pictos.1.description'),
              },
              {
                value: t('bloc_4.pictos.2.title'),
                icon: <Earth />,
                description: t('bloc_4.pictos.2.description'),
              },
              {
                value: t('bloc_4.pictos.3.title'),
                icon: <User />,
                description: t('bloc_4.pictos.3.description'),
              },
              {
                value: t('bloc_4.pictos.4.title'),
                icon: <Smile />,
                description: t('bloc_4.pictos.4.description'),
              },
            ].map((item, index) => (
              <div
                key={item.value}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E6F4F1]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4AA59B] text-white">
                    {item.icon}
                  </div>
                </div>
                <span className="text-base font-medium text-[#562C2C] md:text-xl">
                  {item.value}
                </span>
                <span className="text-sm text-[#562C2CCC] md:text-lg">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="h-full w-full bg-gradient-to-b from-[#EAFCFF] to-white py-12">
        <div className="mx-auto h-full w-full max-w-5xl gap-6 px-4 md:px-8">
          <div className="mb-8 grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="order-2 md:order-1">
              <p className="text-[#562C2C]/80">{t('bloc_5.text')}</p>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold uppercase text-[#562C2C] md:text-3xl ">
                {t('bloc_5.title')}
              </h2>
            </div>
          </div>
          <div className="flex h-full w-full flex-col gap-4 ">
            <div
              className="relative h-full w-full  overflow-hidden rounded-3xl p-6 md:p-14"
              style={{
                backgroundImage: 'url(/images/fruit-plate.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative  aspect-[16/9] h-full w-full overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'transparent',
                    border: '16px solid white',
                    borderRadius: '32px 32px 0px 0px',
                    clipPath: `
                polygon(
                  0% 0%,      /* Outer top-left */
                  100% 0%,    /* Outer top-right */
                  100% 100%,  /* Outer bottom-right */
                  0% 100%,    /* Outer bottom-left */
                  0% 0%,      /* Back to outer start */
                  8% 8%,      /* Inner top-left */
                  8% 92%,     /* Inner bottom-left */
                  92% 92%,    /* Inner bottom-right */
                  92% 8%,     /* Inner top-right */
                  8% 8%       /* Back to inner start */
                )
              `,
                  }}
                />
              </div>
              <div className=" flex -translate-y-4 flex-col rounded-b-3xl bg-white p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-black">
                    {t('bloc_5.reviews.0.author')}
                  </h3>
                  <div className="ml-10 rounded-full border border-[#6666661A] px-4 py-2 text-sm text-black">
                    {t('bloc_5.reviews.0.date')}
                  </div>
                </div>
                <p className="mt-2 text-[#666666]">
                  {t('bloc_5.reviews.0.review')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                {
                  bg: 'bg-[#F8E4E7]',
                  img: '/images/avocado.png',
                  alt: 'Avocado',
                },
                {
                  bg: 'bg-[#E6F4F1]',
                  img: '/images/cherry.png',
                  alt: 'Cherries',
                },
                {
                  bg: 'bg-[#99D5F3]',
                  img: '/images/orange-1.png',
                  alt: 'Orange with stem',
                },
                {
                  bg: 'bg-[#99D5F3]',
                  img: '/images/orange-2.png',
                  alt: 'Orange slice',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${item.bg} group relative aspect-square overflow-hidden rounded-2xl`}
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/20 p-3 text-white backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Instagram />
                      <span className="text-sm">
                        {t(`bloc_5.reviews.${index}.author`)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-[#666666]">{t(`bloc_5.footer`)}</p>
          </div>
        </div>
      </section>
      {/* Explore Section */}
      <section className="relative w-full bg-white">
        <div className="relative min-h-[500px] w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden">
            <Image
              src="/images/explore-bg.jpg"
              alt="Colorful fruits and flowers"
              className="h-full w-full object-cover object-[35%_75%]"
              fill
            />
          </div>

          {/* Content */}
          <div
            className="relative w-full px-6 pt-16 text-center md:px-2"
            style={{
              background:
                'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
          >
            <div className="mx-auto max-w-2xl">
              <h1 className="mb-2 text-3xl font-bold text-[#562C2C] md:text-4xl">
                {t('bloc_6.title')}
                <br />
                <span className="text-[#562C2C]/50">
                  {t('bloc_6.subtitle')}
                </span>
              </h1>
              <p className="mx-auto mb-8 text-[#562C2C]">{t('bloc_6.text')}</p>
              <Button className="rounded-full bg-[#F2542D] px-8 py-6 text-lg text-white hover:bg-[#ff6b4e]/90">
                {t('bloc_6.button')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4D2626] py-12 text-base text-white md:text-lg">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid gap-8 text-center md:grid-cols-4 md:text-left">
            <div className="space-y-2">
              <h3 className="font-bold">{t('footer.address.name')}</h3>
              <p className="text-white/80">{t('footer.address.phone')}</p>
              <p className="text-white/80">{t('footer.address.location')}</p>
            </div>
            <div className="space-y-4">
              <ul className="space-y-2 text-white/60">
                <li>
                  <Link
                    href={t('footer.links.0.url')}
                    className="hover:text-white"
                  >
                    {t('footer.links.0.name')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={t('footer.links.1.url')}
                    className="hover:text-white"
                  >
                    {t('footer.links.1.name')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={t('footer.links.2.url')}
                    className="hover:text-white"
                  >
                    {t('footer.links.2.name')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <ul className="space-y-2 text-white/60">
                <li>
                  <Link
                    href={t('footer.links.3.url')}
                    className="hover:text-white"
                  >
                    {t('footer.links.3.name')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={t('footer.links.4.url')}
                    className="hover:text-white"
                  >
                    {t('footer.links.4.name')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={t('footer.links.5.url')}
                    className="hover:text-white"
                  >
                    {t('footer.links.5.name')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <ul className="space-y-2 text-white/60">
                <li>
                  <Link href="#" className="hover:text-white">
                    {t('footer.links.6.name')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    {t('footer.links.7.name')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center gap-6 border-t border-white/10 pt-8 md:flex-row md:justify-between">
            <p className="uppercase">© {t('footer.address.name')}</p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="rounded-full bg-[#FF6B50] p-2 text-white hover:bg-[#FF6B50]/90"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#FF6B50] p-2 text-white hover:bg-[#FF6B50]/90"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#FF6B50] p-2 text-white hover:bg-[#FF6B50]/90"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
