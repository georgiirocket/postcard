import styles from './page.module.css';
import Test from '@/common/components/test';
import { getDictionary } from '@/common/helpers/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { translation } = await getDictionary(lang);

  return (
    <main className={styles.main}>
      <p>Server component: {translation.title}</p>
      <Test />
    </main>
  );
}
