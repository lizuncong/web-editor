import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import LanguageSelect from '@/components/LanguageSelect';
import { themes } from '@/constant';
import { Theme } from '@/types/enum';

import styles from './index.module.less';
const Home = memo(() => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <span className={styles.title}> {t('home.title')}</span>
        <LanguageSelect />
      </div>
      <div className={styles.list}>
        {themes.map((theme) => {
          return (
            <div className={styles.item} key={theme.theme}>
              <div className={styles.imgWrapper}>
                <img className={styles.img} src={theme.img} alt="" />
              </div>
              <div className={styles.title}>
                <span>{theme.title}</span>
                <span
                  className={[styles.edit, theme.theme === Theme.MODERN && styles.disabled].join(' ')}
                  onClick={() => {
                    if (theme.theme === Theme.MODERN) {
                      // messageApi.warning(developing);
                      return;
                    }
                    navigate(`/editor?theme=${theme.theme}`);
                  }}
                >
                  {t('home.edit')}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Home;
