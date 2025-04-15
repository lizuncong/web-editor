import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { WidgetProps } from '../types';
import styles from './index.module.less';
const GroupHeaderWidget = memo((props: WidgetProps) => {
  const { setting } = props;
  const { t } = useTranslation();

  return (
    <div className={styles.group}>
      <div className={styles.label}>{t(setting.label)}</div>
      {setting.info && <div className={styles.info}>{t(setting.info)}</div>}
    </div>
  );
});

export default GroupHeaderWidget;
