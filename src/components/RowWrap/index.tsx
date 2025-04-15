import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './index.module.less';
interface RowWrapProps {
  label: string;
  info?: string;
  children: any;
}
const RowWrap = memo((props: RowWrapProps) => {
  const { label, info, children } = props;
  const { t } = useTranslation();
  return (
    <div className={styles.wrap}>
      <div className={[styles.label].join(' ')}>
        <span className={styles.title}>{t(label)}</span>
        {children}
      </div>
      {info && <div className={styles.info}>{t(info)}</div>}
    </div>
  );
});

export default RowWrap;
