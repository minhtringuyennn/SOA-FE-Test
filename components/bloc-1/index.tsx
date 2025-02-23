import { useTranslations } from 'next-intl';
import Case from '../case';

export default function FirstBloc() {
  const t = useTranslations();
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-20 md:px-8">
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <div className="flex w-full items-center gap-10">
          <div className="h-[2px] w-full bg-neutral-300" />
          <h2 className="w-full text-2xl font-bold tracking-tight text-red-500 md:text-3xl">
            {t('bloc_1.title')}
          </h2>
          <div className="h-[2px] w-full bg-neutral-300" />
        </div>
        <p className="text-base text-neutral-600 md:text-lg">
          {t('bloc_1.subtitle')}
        </p>
      </div>

      <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Case
          imageSrc="/case_1.png"
          category={t('bloc_1.cases.0.category')}
          tagline={t('bloc_1.cases.0.tagline')}
          description={t('bloc_1.cases.0.description')}
          cta={t('bloc_1.cases.0.cta')}
          packageNum={1}
        />
        <Case
          imageSrc="/case_2.png"
          category={t('bloc_1.cases.1.category')}
          tagline={t('bloc_1.cases.1.tagline')}
          description={t('bloc_1.cases.1.description')}
          cta={t('bloc_1.cases.1.cta')}
          packageNum={2}
          isElevated={true}
        />
        <Case
          imageSrc="/case_3.png"
          category={t('bloc_1.cases.2.category')}
          tagline={t('bloc_1.cases.2.tagline')}
          description={t('bloc_1.cases.2.description')}
          cta={t('bloc_1.cases.2.cta')}
          packageNum={3}
        />
      </div>
    </section>
  );
}
