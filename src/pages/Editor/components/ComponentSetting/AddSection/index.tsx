import { Popover } from 'antd';
import { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useUpdateConfigData } from '@/pages/Editor/hooks/useUpdateConfigDataAndNotify';
import { useAppSelector } from '@/store/hooks';

import styles from './index.module.less';
const AddSection = memo(() => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const allSectionSchema = useAppSelector((state) => state.editor.allSectionSchema);
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const presetSections = useMemo(() => {
    const result: any = {};
    Object.values(allSectionSchema).forEach((sectionSchema) => {
      if (!sectionSchema.presets.length) return;
      sectionSchema.presets.forEach((preset) => {
        const category = t(preset.category);
        result[category] ??= [];
        result[category].push({
          preset,
          sectionType: sectionSchema.type,
        });
      });
    });
    return result;
  }, [allSectionSchema, t]);
  const { updateAllSectionConfigData } = useUpdateConfigData();
  const addSection = useCallback(
    (presetItem: any) => {
      setOpen(false);
      const sectionId = Math.random().toString().substring(2, 24);
      const sectionType = presetItem.sectionType;
      const sectionSchema = allSectionSchema[sectionType];
      const newSectionConfig: any = {
        sectionId: sectionId,
        type: sectionType,
        disabled: false,
        settingsData: {
          disabled: false,
          type: sectionType,
          settings: {},
          blocks: {},
          block_order: [],
        },
      };
      sectionSchema.settings.forEach((setting) => {
        if (!setting.id) return;
        const presetValue = presetItem.preset.settings[setting.id];
        newSectionConfig.settingsData.settings[setting.id] = {
          value: presetValue === undefined ? setting.default : presetValue,
        };
      });
      (presetItem.preset.blocks ?? []).forEach((block: any) => {
        const newBlockId = Math.random().toString().substring(2, 24);
        newSectionConfig.settingsData.block_order.push(newBlockId);
        const newBlock: any = {
          type: block.type,
          icon: block.icon,
          blockId: newBlockId,
          settings: {},
        };
        newSectionConfig.settingsData.blocks[newBlockId] = newBlock;
        const blockSettingSchema = sectionSchema.blocks!.find((b) => b.type === block.type);
        if (!blockSettingSchema) return;
        blockSettingSchema.settings.forEach((setting) => {
          if (!setting.id) return;
          const presetValue = block.settings[setting.id];

          newBlock.settings[setting.id] = {
            value: presetValue === undefined ? setting.default : presetValue,
          };
        });
      });

      updateAllSectionConfigData({
        order: [...sectionConfigData.order, sectionId],
        sections: {
          ...sectionConfigData.sections,
          [sectionId]: newSectionConfig,
        },
      });
    },
    [allSectionSchema, sectionConfigData.order, sectionConfigData.sections, updateAllSectionConfigData],
  );
  return (
    <div className={styles.container}>
      <Popover
        content={
          <div>
            {Object.keys(presetSections).map((key) => {
              const presetItems = presetSections[key];
              return (
                <div key={key}>
                  <div className={styles.category}>{key}</div>
                  {presetItems.map((presetItem: any) => (
                    <div
                      onClick={() => {
                        addSection(presetItem);
                      }}
                      className={styles.preset}
                      key={presetItem.preset.name}
                    >
                      {t(presetItem.preset.name)}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        }
        title={t('editor.selectSection')}
        trigger="click"
        open={open}
      >
        <span
          onClick={() => {
            setOpen(true);
          }}
        >
          {t('editor.addSection')}
        </span>
      </Popover>
    </div>
  );
});

export default AddSection;
