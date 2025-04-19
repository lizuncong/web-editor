import { memo, useEffect, useRef } from 'react';

import { getIframeSrc } from '@/constant';
import { useAppSelector } from '@/store/hooks';

import iframeCommunicator from '../../IFrameCommunicator';
import styles from './index.module.less';
const Preview = memo(() => {
  const preview = useAppSelector((state) => state.editor.previewType);
  const { theme, themeStyle } = useAppSelector((state) => state.editor);
  const language = useAppSelector((state) => state.editor.language);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const src = getIframeSrc(theme!);
  useEffect(() => {
    const destroy = iframeCommunicator.initFrameWindow(iframeRef.current);
    return destroy;
  }, [src]);
  return (
    <div className={styles.preview}>
      <iframe
        ref={iframeRef}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        className={[styles.iframe, styles[preview]].join(' ')}
        src={src + `?iseditor=1&themestyle=${themeStyle}&language=${language}`}
      ></iframe>
    </div>
  );
});

export default Preview;
