import { memo } from 'react';

import styles from './index.module.less';
const ComponentSetting = memo(() => {
  return (
    <div className={styles.container}>
      <div>组件设置</div>
    </div>
  );
});

export default ComponentSetting;
