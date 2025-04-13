import { memo, useEffect, useRef } from 'react';

import { useAppSelector } from '@/store/hooks';

import iframeCommunicator from '../../IFrameCommunicator';
import styles from './index.module.less';
const Preview = memo(() => {
  const preview = useAppSelector((state) => state.editor.previewType);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const src = location.host.includes('localhost')
    ? 'http://localhost:5174/'
    : 'https://lizuncong.github.io/arise-theme/';
  useEffect(() => {
    const destroy = iframeCommunicator.initFrameWindow(iframeRef.current?.contentWindow);
    return destroy;
  }, [src]);
  return (
    <div className={styles.preview}>
      <iframe
        ref={iframeRef}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        className={[styles.iframe, styles[preview]].join(' ')}
        src={src}
      ></iframe>
    </div>
  );
});

export default Preview;
