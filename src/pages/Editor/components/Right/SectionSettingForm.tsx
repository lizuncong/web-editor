import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/store/hooks';
import { SectionConfigSchema, SettingsValue } from '@/types/section';

import { useUpdateConfigData } from '../../hooks/useUpdateConfigDataAndNotify';
import Form from '../Form';
const SectionSettingForm = memo(() => {
  const currentEditingForm = useAppSelector((state) => state.editor.currentEditingForm)!;
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const allSectionSchema = useAppSelector((state) => state.editor.allSectionSchema);
  const { t } = useTranslation();
  const sectionSchema = allSectionSchema[currentEditingForm.type];
  const sectionConfig = sectionConfigData.sections[currentEditingForm.sectionId]!;
  const { updateSectionConfigSectionBySectionId } = useUpdateConfigData();
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
      updateSectionConfigSectionBySectionId(currentEditingForm.sectionId, newSectionConfigData);
    },
    [currentEditingForm, sectionConfig, updateSectionConfigSectionBySectionId],
  );
  return (
    <Form
      title={t(sectionSchema.name)}
      settings={sectionSchema.settings ?? []}
      settingValue={sectionConfig.settingsData.settings}
      onSettingValueChange={onSettingValueChange}
    />
  );
});

export default SectionSettingForm;
