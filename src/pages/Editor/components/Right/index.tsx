import { memo } from 'react';

import styles from './index.module.less';
const Right = memo(() => {
  return <div className={styles.container}>右侧</div>;
});

export default Right;
