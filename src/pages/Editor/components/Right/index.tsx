import { memo } from 'react';

import { useAppSelector } from '@/store/hooks';

import BlockSettingForm from './BlockSettingForm';
import styles from './index.module.less';
import SectionSettingForm from './SectionSettingForm';
const Right = memo(() => {
  const currentEditingForm = useAppSelector((state) => state.editor.currentEditingForm)!;

  if (!currentEditingForm) {
    return <div className={[styles.container, styles.nodata].join(' ')}>在左侧边栏点击选择一个组件进行编辑</div>;
  }
  if (currentEditingForm.sectionId && !currentEditingForm.blockId) {
    return <SectionSettingForm />;
  }

  if (currentEditingForm.sectionId && currentEditingForm.blockId) {
    return <BlockSettingForm />;
  }
});

export default Right;
