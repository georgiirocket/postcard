import styles from './page.module.css';
import Theme from '@/common/components/client/theme';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

export default function Home() {
  const t = useTranslations('Translation');

  return (
    <main className={styles.main}>
      <p>Server component: {t('title')}</p>
      <Link href="/" locale="ru">
        Switch to Ru
      </Link>
      <Link href="/" locale="en">
        Switch to En
      </Link>
      <Theme />
    </main>
  );
}
