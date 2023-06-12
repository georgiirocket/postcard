'use client';
import type { IDictionary } from '@/common/helpers/get-dictionary';
import { i18n } from '@/i18n-config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface ITest {
  dictionary: IDictionary;
}

const Test: FC<ITest> = ({ dictionary }) => {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';

    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div>
      <p>Client component:</p>
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
