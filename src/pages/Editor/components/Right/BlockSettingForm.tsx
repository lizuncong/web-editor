import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/store/hooks';
import { SectionBlockConfigSchema, SettingsValue } from '@/types/section';

import { useUpdateConfigData } from '../../hooks/useUpdateConfigDataAndNotify';
import Form from '../Form';
const BlockSettingForm = memo(() => {
  const currentEditingForm = useAppSelector((state) => state.editor.currentEditingForm)!;
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const allSectionSchema = useAppSelector((state) => state.editor.allSectionSchema);
  const { t } = useTranslation();
  const { type, sectionId, blockId } = currentEditingForm;
  const sectionConfig = sectionConfigData.sections[sectionId]!;
  const blockConfig = sectionConfig.settingsData.blocks[blockId!];
  const sectionSchema = allSectionSchema[sectionConfig.type];
  const blockSchema = sectionSchema.blocks?.find((block) => block.type === type);
  const { updateBlockConfigData } = useUpdateConfigData();
  const onSettingValueChange = useCallback(
    (newSettingValue: SettingsValue) => {
      console.log('newSettingValue...', newSettingValue);
      const newBlock: SectionBlockConfigSchema = {
        ...blockConfig,
        settings: newSettingValue,
      };
      updateBlockConfigData(sectionId, blockId!, newBlock);
    },
    [blockConfig, blockId, sectionId, updateBlockConfigData],
  );
  if (!blockSchema) {
    return <div>not found</div>;
  }
  return (
    <Form
      title={t(blockSchema.name)}
      info={sectionSchema.block_info ? t(sectionSchema.block_info) : ''}
      settings={blockSchema.settings ?? []}
      settingValue={blockConfig.settings}
      onSettingValueChange={onSettingValueChange}
    />
  );
});

export default BlockSettingForm;
