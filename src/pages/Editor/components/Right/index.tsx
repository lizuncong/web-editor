import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/store/hooks';

import styles from './index.module.less';
const Right = memo(() => {
  const currentEditingForm = useAppSelector((state) => state.editor.currentEditingForm);
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const allSectionSchema = useAppSelector((state) => state.editor.allSectionSchema);
  const { t } = useTranslation();
  if (!currentEditingForm) return;
  const sectionSchema = allSectionSchema[currentEditingForm.type];
  const sectionConfig = sectionConfigData.sections[currentEditingForm.sectionId];
  console.log('config..', sectionConfig);
  return (
    <div className={styles.container}>
      <div className={styles.header}>{t(sectionSchema.name)}</div>
      <div className={styles.list}>
        {(sectionSchema.settings ?? []).map((setting) => {
          return (
            <div key={setting.id ?? t(setting.label)}>
              <div>
                {t(setting.label)}：{setting.id}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Right;
