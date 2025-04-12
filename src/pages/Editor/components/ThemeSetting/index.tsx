import { memo } from 'react';

import styles from './index.module.less';
const ThemeSetting = memo(() => {
  return <div className={styles.container}>主题设置</div>;
});

export default ThemeSetting;
