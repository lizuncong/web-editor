import { memo } from 'react';

import { useAppSelector } from '@/store/hooks';

import styles from './index.module.less';
const Right = memo(() => {
  const currentEditingForm = useAppSelector((state) => state.editor.currentEditingForm);
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  return <div className={styles.container}>右侧</div>;
});

export default Right;
