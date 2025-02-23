import { useTranslations } from 'next-intl';
import React from 'react';
import Case from '../case';

export default function FirstBloc() {
  const t = useTranslations();
  return (
    <section className="cotainer px-4 py-24 md:px-6">
      <div className="mb-16 flex flex-col items-center space-y-4 text-center">
        <div className="flex items-center gap-4">
          <div className="h-px w-20 bg-neutral-300" />
          <h2 className="text-3xl font-bold tracking-tight text-red-500">
            {t('bloc_1.title')}
          </h2>
          <div className="h-px w-20 bg-neutral-300" />
        </div>
        <p className="text-lg text-neutral-600">{t('bloc_1.subtitle')}</p>
      </div>

      <section className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Case
            imageSrc="/images/case-1.png"
            category={t('bloc_1.cases.0.category')}
            tagline={t('bloc_1.cases.0.tagline')}
            description={t('bloc_1.cases.0.description')}
            cta={t('bloc_1.cases.0.cta')}
            packageNum={1}
          />
          <Case
            imageSrc="/images/case-2.png"
            category={t('bloc_1.cases.1.category')}
            tagline={t('bloc_1.cases.1.tagline')}
            description={t('bloc_1.cases.1.description')}
            cta={t('bloc_1.cases.1.cta')}
            packageNum={2}
            isElevated={true}
          />
          <Case
            imageSrc="/images/case-3.png"
            category={t('bloc_1.cases.2.category')}
            tagline={t('bloc_1.cases.2.tagline')}
            description={t('bloc_1.cases.2.description')}
            cta={t('bloc_1.cases.2.cta')}
            packageNum={3}
          />
        </div>
      </section>
    </section>
  );
}
