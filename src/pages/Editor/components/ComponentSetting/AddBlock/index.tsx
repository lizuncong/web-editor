import { Popover } from 'antd';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { iconMap } from '@/pages/Editor/constant';
import { useUpdateConfigData } from '@/pages/Editor/hooks/useUpdateConfigDataAndNotify';
import { useAppSelector } from '@/store/hooks';
import {
  SectionBlockSchemaStruct,
  SectionConfigSchema,
  SectionId,
  SectionTypeEnum,
  SettingsValue,
} from '@/types/section';

import defaultIcon from '../../../assets/image.svg?react';
import styles from './index.module.less';
interface AddBlock {
  currentNum: number;
  maxNum: number;
  sectionType: SectionTypeEnum;
  sectionId: SectionId;
}
const AddBlock = memo((props: AddBlock) => {
  const { currentNum, sectionId, maxNum, sectionType } = props;
  const { t } = useTranslation();
  const allSectionSchema = useAppSelector((state) => state.editor.allSectionSchema);
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const { updateSectionConfigSectionBySectionId } = useUpdateConfigData();
  const [open, setOpen] = useState(false);
  const blocks = allSectionSchema[sectionType].blocks ?? [];
  const addBlock = useCallback(
    (block: SectionBlockSchemaStruct) => {
      const newBlockId = `block_${Math.random().toString().substring(2, 10)}`;
      const sectionConfig = sectionConfigData.sections[sectionId]!;
      const newSetting: SettingsValue = {};
      const newSectionConfigData: SectionConfigSchema = {
        ...sectionConfig,
        settingsData: {
          ...sectionConfig.settingsData,
          blocks: {
            ...sectionConfig.settingsData.blocks,
            [newBlockId]: {
              type: block.type,
              settings: newSetting,
            },
          },
          block_order: [...sectionConfig.settingsData.block_order, newBlockId],
        },
      };
      block.settings.forEach((b) => {
        if (!b.id) return;
        newSetting[b.id] = {
          value: b.default,
        };
      });
      console.log('block....', block);
      updateSectionConfigSectionBySectionId(sectionId, newSectionConfigData);
    },
    [sectionConfigData.sections, sectionId, updateSectionConfigSectionBySectionId],
  );
  return (
    <Popover
      content={
        <div className={styles.blockwrap}>
          {blocks.map((block) => {
            const Icon = iconMap[block.icon] || defaultIcon;
            return (
              <div
                className={styles.row}
                key={block.type}
                onClick={() => {
                  addBlock(block);
                  setOpen(false);
                }}
              >
                <Icon />
                {t(block.name)}
              </div>
            );
          })}
        </div>
      }
      title={t('editor.selectBlock')}
      trigger="click"
      open={open}
    >
      <div
        onClick={() => {
          if (blocks.length > 1) {
            setOpen(!open);
          } else {
            addBlock(blocks[0]);
          }
        }}
        className={[styles.add, currentNum >= maxNum && styles.disabled].join(' ')}
      >
        {t('editor.addBlock')}
        {`(${currentNum}/${maxNum})`}
      </div>
    </Popover>
  );
});

export default AddBlock;
