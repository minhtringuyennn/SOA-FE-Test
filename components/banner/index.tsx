import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

const icons = [
  { id: 1, src: 'vectors/Mountains.svg', alt: 'Mountain', label: 'Mountain' },
  { id: 2, src: 'vectors/Fishing.svg', alt: 'Fish', label: 'Fishing' },
  { id: 3, src: 'vectors/Crosshair.svg', alt: 'Target', label: 'Target' },
  {
    id: 4,
    src: 'vectors/Chats.svg',
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
      <Image
        src="/images/hero-banner.png"
        alt={t('banner_title.0')}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute bottom-0 left-0 right-0">
        <div className="absolute inset-0 h-48 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute bottom-28 left-1/2 right-0 mb-8 h-px w-full -translate-x-1/2 transform">
          <div className="mx-auto h-px w-[80%] bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
        </div>

        <div className="relative flex items-center justify-center pb-16">
          <div className="flex items-center gap-80">
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

          <button
            className="absolute right-8 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 p-2.5 transition-all hover:bg-red-600"
            aria-label="Chat"
          >
            <div className="relative h-full w-full">
              <Image
                src="vectors/Chats.svg"
                alt="Chats"
                fill
                className="transition-transform"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
