import { memo } from 'react';

import { useAppSelector } from '@/store/hooks';

import styles from './index.module.less';
const Preview = memo(() => {
  const preview = useAppSelector((state) => state.editor.previewType);
  const src = location.host.includes('localhost')
    ? 'http://localhost:5174/'
    : 'https://lizuncong.github.io/arise-theme/';
  return (
    <div className={styles.preview}>
      <iframe sandbox="" className={[styles.iframe, styles[preview]].join(' ')} src={src}></iframe>
    </div>
  );
});

export default Preview;
