import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './index.module.less';
interface ColumnWrapProps {
  label: string;
  info?: string;
  children: any;
}
const ColumnWrap = memo((props: ColumnWrapProps) => {
  const { label, info, children } = props;
  const { t } = useTranslation();
  return (
    <div className={styles.wrap}>
      <div className={[styles.label, !info && styles.mb].join(' ')}>{t(label)}</div>
      {info && <div className={styles.info}>{t(info)}</div>}
      {children}
    </div>
  );
});

export default ColumnWrap;
