import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

type CaseProps = {
  imageSrc: string;
  category: string;
  tagline: string;
  description: string;
  cta: string;
  packageNum: number;
  isElevated?: boolean;
};

export default function Case({
  imageSrc,
  category,
  tagline,
  description,
  cta,
  packageNum,
  isElevated = false,
}: CaseProps) {
  return (
    <div className={cn('flex flex-col gap-4', isElevated && '-mt-8')}>
      <div className="aspect-square overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={description}
          width={397}
          height={397}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <p className="text-[#F2542D]">{category}</p>
        <h3 className="text-xl font-semibold text-neutral-800">{tagline}</h3>
        <p className="text-sm text-neutral-600">{description}</p>
        <Button
          variant="outline"
          className="mt-4 border-neutral-200 bg-white px-6 py-2 text-sm font-medium text-black hover:border-neutral-300 hover:bg-neutral-50 hover:text-black"
          aria-label={cta}
        >
          Package {packageNum}
          <Image src="vectors/ArrowUpRight.svg" alt={cta} width={24} height={24} />
        </Button>
      </div>
    </div>
  );
}
