import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/store/hooks';
import { SectionConfigSchema, SettingsValue } from '@/types/section';

import { useUpdateConfigData } from '../../hooks/useUpdateConfigDataAndNotify';
import Form from '../Form';
import styles from './index.module.less';
const Right = memo(() => {
  const currentEditingForm = useAppSelector((state) => state.editor.currentEditingForm);
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const allSectionSchema = useAppSelector((state) => state.editor.allSectionSchema);
  const sectionSchema = allSectionSchema[currentEditingForm!.type];
  const sectionConfig = sectionConfigData.sections[currentEditingForm!.sectionId]!;
  const { updateSectionConfigSectionBySectionId } = useUpdateConfigData();
  const { t } = useTranslation();
  const onSettingValueChange = useCallback(
    (newSettingValue: SettingsValue) => {
      console.log('newSettingValue...', newSettingValue);
      const newSectionConfigData: SectionConfigSchema = {
        ...sectionConfig,
        settingsData: {
          ...sectionConfig.settingsData,
          settings: newSettingValue,
        },
      };
      updateSectionConfigSectionBySectionId(currentEditingForm!.sectionId, newSectionConfigData);
    },
    [currentEditingForm, sectionConfig, updateSectionConfigSectionBySectionId],
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>{t(sectionSchema.name)}</div>
      <div className={styles.list}>
        <Form
          settings={sectionSchema.settings ?? []}
          settingValue={sectionConfig.settingsData.settings ?? {}}
          onSettingValueChange={onSettingValueChange}
        />
      </div>
    </div>
  );
});

export default Right;
