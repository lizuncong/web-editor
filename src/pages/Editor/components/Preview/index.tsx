import { memo, useEffect, useRef } from 'react';

import { useAppSelector } from '@/store/hooks';

import styles from './index.module.less';
const Preview = memo(() => {
  const preview = useAppSelector((state) => state.editor.previewType);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const src = location.host.includes('localhost')
    ? 'http://localhost:5174/'
    : 'https://lizuncong.github.io/arise-theme/';
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    // 向 iframe 发送消息
    iframe.onload = function () {
      console.log('onload...', src);
      const message = { type: 'GREETING', text: '你好，iframe！' };
      iframe.contentWindow!.postMessage(message, src);
    };
    setTimeout(() => {
      console.log('onload time..', src);
      const message = { type: 'GREETING', text: '你好111，iframe！' };
      iframe.contentWindow!.postMessage(message, src);
    }, 5000);
    // 接收来自 iframe 的消息
    window.addEventListener('message', function (event) {
      console.log('iframe的消息....');
      // 验证消息来源
      if (event.origin !== src) {
        console.warn('来自未知来源的消息：', event.origin);
        return;
      }
      // 处理消息
      console.log('收到来自 iframe 的消息：', event.data);
    });
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
