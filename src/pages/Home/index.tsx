import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './index.module.less';
const Home = memo(() => {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      首页<span>({t('home.title')})</span>
    </div>
  );
});

export default Home;
