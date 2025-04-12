import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/store/hooks';

import CompBlock from './CompBlock';
import styles from './index.module.less';
const ComponentSetting = memo(() => {
  const { t } = useTranslation();
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  return (
    <div className={styles.container}>
      <div className={styles.header}>{t('editor.compsetting')}</div>
      <div className={styles.list}>
        {sectionConfigData.order.map((sectionId) => (
          <CompBlock key={sectionId} sectionId={sectionId}></CompBlock>
        ))}
      </div>
    </div>
  );
});

export default ComponentSetting;
