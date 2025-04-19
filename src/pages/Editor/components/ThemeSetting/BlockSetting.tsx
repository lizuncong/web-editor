import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/store/hooks';
import { SettingValue, ThemeSchemaBlockStruct } from '@/types/section';

import ExpandIcon from '../../assets/expand.svg?react';
import { useUpdateConfigData } from '../../hooks/useUpdateConfigDataAndNotify';
import { getWidget } from '../../Widgets';
import styles from './index.module.less';
const BlockSetting = memo(({ block }: { block: ThemeSchemaBlockStruct }) => {
  const { settings, name } = block;
  const themeConfig = useAppSelector((state) => state.editor.themeConfig);
  const { t } = useTranslation();
  const [isExpand, setIsExpand] = useState(false);
  const { updateThemeConfig } = useUpdateConfigData();
  return (
    <>
      <div
        onClick={() => {
          setIsExpand(!isExpand);
        }}
        className={[styles.item, isExpand && styles.expand].join(' ')}
        key={t(name)}
      >
        <span className={styles.expandIcon}>
          <ExpandIcon />
        </span>
        {t(block.name)}
      </div>
      {isExpand && (
        <div className={styles.setting}>
          {settings.map((setting) => {
            const Widget = getWidget(setting.type);
            const v = themeConfig?.settings[setting.id!];
            const isString = typeof v === 'string';
            const value = isString ? { value: v } : { value: (v as unknown as SettingValue)?.value };
            return (
              <Widget
                key={setting.id ?? setting.label}
                setting={setting}
                onChange={(v) => {
                  console.log('onchange', v);
                  updateThemeConfig({
                    ...themeConfig!,
                    settings: {
                      ...themeConfig!.settings,
                      [setting.id!]: isString ? v.value : { ...v, value: v.value },
                    },
                  });
                }}
                value={value}
              />
            );
          })}
        </div>
      )}
    </>
  );
});

export default BlockSetting;
