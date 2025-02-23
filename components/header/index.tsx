'use client';
import { LangSwitcher } from '@/components/header/lang-switcher';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { MenuIcon, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const t = useTranslations();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setHasScrolled(latest > 20);
  });

  return (
    <div
      className={cn(
        'fixed top-0 z-50 w-full',
        hasScrolled
          ? 'bg-neutral-900/90 backdrop-blur-sm'
          : 'bg-gradient-to-r from-[#4a2b2b]/90 to-[#3d2424]/90 backdrop-blur-sm',
      )}
    >
      <nav className={'container relative mx-auto'}>
        <div
          className={
            'flex h-14 w-full items-center justify-between px-4 py-2 sm:px-6 lg:px-8'
          }
        >
          <Link
            href="/"
            aria-label={siteConfig.name}
            title={siteConfig.name}
            className="text-sm font-bold text-white"
          >
            LOGO SAMPLE
          </Link>

          <div className="hidden gap-x-8 md:flex">
            {t
              .raw('head_menu')
              .slice(0, 4)
              .map((item: string) => (
                <Link
                  key={item}
                  href={item}
                  className="text-sm font-medium text-white/80 transition hover:text-white"
                >
                  {item}
                </Link>
              ))}
          </div>

          <div className="hidden items-center gap-x-6 md:flex">
            <Image alt="Mountain" src="vectors/Mountains.svg" width={28} height={28} />
            <Image alt="Fish" src="vectors/Fishing.svg" width={28} height={28} />
            <Image
              alt="Crosshair"
              src="vectors/Crosshair.svg"
              width={28}
              height={28}
            />
            <Image alt="Book" src="vectors/Book.svg" width={64} height={40} />
            <LangSwitcher />
          </div>

          <button
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 top-14 z-50 bg-neutral-900/95 backdrop-blur-sm transition-all md:hidden">
            <div className="container mx-auto bg-neutral-900 p-4">
              <div className="mb-8 space-y-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Navigation
                </p>
                {t
                  .raw('head_menu')
                  .slice(0, 4)
                  .map((item: string) => (
                    <Link
                      key={item}
                      href={item}
                      className="block text-lg font-medium text-white/80 transition hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
              </div>

              <div className="mb-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Quick Actions
                </p>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      alt="Mountain"
                      src="vectors/Mountains.svg"
                      width={28}
                      height={28}
                    />
                    <span className="text-xs text-white/60">Mountain</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      alt="Fish"
                      src="vectors/Fishing.svg"
                      width={28}
                      height={28}
                    />
                    <span className="text-xs text-white/60">Fish</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      alt="Crosshair"
                      src="vectors/Crosshair.svg"
                      width={28}
                      height={28}
                    />
                    <span className="text-xs text-white/60">Target</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image alt="Book" src="vectors/Book.svg" width={40} height={28} />
                    <span className="text-xs text-white/60">Book</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Settings
                </p>
                <div className="flex items-center gap-4">
                  <LangSwitcher />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
