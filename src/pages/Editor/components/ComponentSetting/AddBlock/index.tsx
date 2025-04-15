import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './index.module.less';
interface AddBlock {
  currentNum: number;
  maxNum: number;
}
const AddBlock = memo((props: AddBlock) => {
  const { t } = useTranslation();
  const { currentNum, maxNum } = props;
  return (
    <div className={[styles.add, currentNum >= maxNum && styles.disabled].join(' ')}>
      {t('editor.addBlock')}
      {`(${currentNum}/${maxNum})`}
    </div>
  );
});

export default AddBlock;
