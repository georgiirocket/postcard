'use client';
import { i18n } from '@/i18n-config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Test = () => {
  const t = useTranslations('translation');
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';

    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div>
      <p>Client component: {t('title')}</p>
      <div>
        <p>Locale switcher:</p>
        <ul>
          {i18n.locales.map((locale) => {
            return (
              <li key={locale}>
                <Link href={redirectedPathName(locale)}>{locale}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Test;
