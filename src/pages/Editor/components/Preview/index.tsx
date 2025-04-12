import { memo } from 'react';

import { useAppSelector } from '@/store/hooks';

import styles from './index.module.less';
const Preview = memo(() => {
  const preview = useAppSelector((state) => state.editor.previewType);
  return (
    <div className={styles.preview}>
      <iframe sandbox="" className={[styles.iframe, styles[preview]].join(' ')} src="https://www.baidu.com/"></iframe>
    </div>
  );
});

export default Preview;
