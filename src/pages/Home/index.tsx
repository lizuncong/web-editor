import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import Github from '@/components/Github';
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
        <Github />
      </div>
      <div className={styles.list}>
        {themes.map((themeConfig) => {
          return themeConfig.styles.map((theme) => {
            return (
              <div className={styles.item} key={theme.style}>
                <div className={styles.imgWrapper}>
                  <img className={styles.img} src={theme.img} alt="" />
                </div>
                <div className={styles.title}>
                  <span>
                    {themeConfig.title}-{t(theme.title)}
                  </span>
                  <span
                    className={[styles.edit, themeConfig.theme === Theme.MODERN && styles.disabled].join(' ')}
                    onClick={() => {
                      if (themeConfig.theme === Theme.MODERN) {
                        // messageApi.warning(developing);
                        return;
                      }
                      navigate(`/editor?theme=${themeConfig.theme}&themestyle=${theme.style}`);
                    }}
                  >
                    {t('home.edit')}
                  </span>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
});

export default Home;
