import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

const icons = [
  { id: 1, src: '/Mountains.svg', alt: 'Mountain', label: 'Mountain' },
  { id: 2, src: '/Fishing.svg', alt: 'Fish', label: 'Fishing' },
  { id: 3, src: '/Crosshair.svg', alt: 'Target', label: 'Target' },
  {
    id: 4,
    src: '/Chats_icon.svg',
    alt: 'Chats',
    label: 'Chats',
    isAction: true,
  },
];

export default function HeroBanner() {
  const [activeIcon, setActiveIcon] = useState<number | null>(null);
  const t = useTranslations();
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Banner Image */}
      <Image
        src="/Hero_banner.png"
        alt={t('banner_title.0')}
        fill
        className="object-cover"
        priority
      />
      {/* Nav bar */}
      <div className="absolute bottom-0 left-0 right-0 w-full bg-gradient-to-t from-black/50 to-transparent pb-9 md:px-8 lg:pb-28">
        {/* Icons Container */}
        <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center border-t py-5">
          {/* Regular Icons Container */}
          <div className="flex w-full items-center justify-around">
            {icons.slice(0, 3).map((icon) => (
              <button
                key={icon.id}
                onClick={() =>
                  setActiveIcon(activeIcon === icon.id ? null : icon.id)
                }
                className={cn(
                  'group relative flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-white/10',
                  activeIcon === icon.id && 'bg-white/10',
                )}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={40}
                  height={40}
                  className="transition-transform group-hover:scale-110"
                />
                <span className="sr-only">{icon.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Action Button - Positioned Absolutely */}
      <button
        className="absolute bottom-5 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 p-2.5 transition-all hover:bg-red-600 lg:bottom-20 lg:right-36"
        aria-label="Chat"
      >
        <div className="relative h-full w-full">
          <Image
            src="/Chats_icon.svg"
            alt="Chats"
            fill
            className="transition-transform"
          />
        </div>
      </button>
    </section>
  );
}
