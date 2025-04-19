import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeSchemaBlockStruct } from '@/types/section';

import ExpandIcon from '../../assets/expand.svg?react';
import styles from './index.module.less';
const BlockSetting = memo(({ block }: { block: ThemeSchemaBlockStruct }) => {
  const { t } = useTranslation();
  const [isExpand, setIsExpand] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setIsExpand(!isExpand);
        }}
        className={[styles.item, isExpand && styles.expand].join(' ')}
        key={t(block.name)}
      >
        <span className={styles.expandIcon}>
          <ExpandIcon />
        </span>
        {t(block.name)}
      </div>
      {isExpand && <div>setting</div>}
    </>
  );
});

export default BlockSetting;
