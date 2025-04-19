import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/store/hooks';

import BlockSettingForm from './BlockSettingForm';
import styles from './index.module.less';
import SectionSettingForm from './SectionSettingForm';
const Right = memo(() => {
  const currentEditingForm = useAppSelector((state) => state.editor.currentEditingForm)!;
  const { t } = useTranslation();
  if (!currentEditingForm) {
    return <div className={[styles.container, styles.nodata].join(' ')}>{t('editor.nosetting')}</div>;
  }
  if (currentEditingForm.sectionId && !currentEditingForm.blockId) {
    return <SectionSettingForm />;
  }

  if (currentEditingForm.sectionId && currentEditingForm.blockId) {
    return <BlockSettingForm />;
  }
});

export default Right;
