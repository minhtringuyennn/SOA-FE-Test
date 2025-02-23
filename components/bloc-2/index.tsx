import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ZoomableMap from '@/components/zoomable-map';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function SecondBloc() {
  const t = useTranslations();

  return (
    <>
      <div className="relative h-full w-full bg-[#FFF6F4] px-4 md:px-8 ">
        <Image
          src="/images/zoomable-map-bg.png"
          alt={t('bloc_2.title')}
          fill
          className="-z-1 object-fill opacity-[0.03]"
        />
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 py-8 md:py-14">
          <div className="flex w-full items-center gap-4">
            <div className="h-[2px] w-full bg-neutral-300" />
            <h2 className="w-full text-center text-3xl font-bold tracking-tight text-red-500">
              {t('bloc_2.title')}
            </h2>
            <div className="h-[2px] w-full bg-neutral-300" />
          </div>
          <div className="flex w-full flex-wrap justify-center gap-5">
            <Button variant="outline" className="px-4 py-2">
              <Image
                src="/Mountains_vector.svg"
                alt={t('bloc_2.cases.0')}
                width={28}
                height={28}
              />
              {t('bloc_2.cases.0')}
            </Button>
            <Button variant="outline" className="px-4 py-2">
              <Image
                src="/Fishing_vector.svg"
                alt={t('bloc_2.cases.0')}
                width={28}
                height={28}
              />
              {t('bloc_2.cases.1')}
            </Button>
            <Button variant="outline" className="px-4 py-2">
              <Image
                src="/Crosshair_vector.svg"
                alt={t('bloc_2.cases.0')}
                width={28}
                height={28}
              />
              {t('bloc_2.cases.2')}
            </Button>
          </div>
          <ZoomableMap />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-12 px-4 py-12 md:px-4">
        <div className="flex w-full items-center gap-4 ">
          <div className="h-[2px] w-full bg-neutral-300" />
          <h2 className="w-full text-center text-3xl font-bold tracking-tight text-red-500">
            {t('bloc_2_2.title')}
          </h2>
          <div className="h-[2px] w-full bg-neutral-300" />
        </div>
        <Calendar
          occupiedDays={[
            new Date('2025-01-28'),
            new Date('2025-01-29'),
            new Date('2025-02-04'),
          ]}
        />
        <div className="flex w-full flex-col gap-4">
          <div className="flex gap-2">
            <div className="w-24">{t('bloc_2_2.btn_1.0')}</div>
            <Input
              className="w-full shadow-md"
              placeholder={t('bloc_2_2.btn_1.1')}
            />
          </div>
          <div className="flex gap-2">
            <div className="w-24">{t('bloc_2_2.btn_2.0')}</div>
            <Input
              className="w-full shadow-md"
              placeholder={t('bloc_2_2.btn_2.1')}
            />
          </div>
          <div className="flex gap-2">
            <div className="w-24">{t('bloc_2_2.btn_3')}</div>
            <Textarea
              className="w-full shadow-md"
              placeholder={t('bloc_2_2.btn_3')}
            />
          </div>
          <div className="flex gap-2">
            <div className="w-24">{t('bloc_2_2.btn_4.0')}</div>
            <Input type="file" className="w-full" />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">{t('bloc_2_2.btn_5')}</Button>
            <Button>{t('bloc_2_2.btn_6')}</Button>
          </div>
        </div>
      </div>
    </>
  );
}
