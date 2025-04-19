import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/store/hooks';

import BlockSetting from './BlockSetting';
import styles from './index.module.less';
const ThemeSetting = memo(() => {
  const { t } = useTranslation();
  const themeSchema = useAppSelector((state) => state.editor.themeSchema);
  return (
    <div className={styles.container}>
      <div className={styles.header}>{t('editor.themesetting')}</div>
      <div className={styles.list}>
        {themeSchema?.blocks?.map((block) => <BlockSetting key={block.name} block={block} />)}
      </div>
    </div>
  );
});

export default ThemeSetting;
