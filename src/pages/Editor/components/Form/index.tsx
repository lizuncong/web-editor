import { memo, useCallback, useRef } from 'react';

import { SectionSettingSchemaStruct, SettingsValue, SettingValue } from '@/types/section';

import { getWidget } from '../../Widgets';
import styles from './index.module.less';
interface FormProps {
  settings: SectionSettingSchemaStruct[];
  settingValue: SettingsValue;
  title: string;
  info?: string;
  onSettingValueChange: (newSettingValue: SettingsValue) => void;
}
const getInfo = (info: string) => {
  // 提取括号内的文字
  const bracketContent = /\[(.*?)\]/.exec(info)?.[1];

  // 提取括号外的URL
  const urlMatch = /\((.*?)\)/.exec(info);
  const urlContent = urlMatch ? urlMatch[1] : '';
  return {
    bracketContent,
    urlContent,
  };
};
const Form = memo((props: FormProps) => {
  const { settings, info, title, settingValue, onSettingValueChange } = props;
  const settingValueRef = useRef(settingValue);
  const onSettingValueChangeRef = useRef(onSettingValueChange);
  settingValueRef.current = settingValue;
  onSettingValueChangeRef.current = onSettingValueChange;
  const onSettingChange = useCallback((setting: SectionSettingSchemaStruct, newValue: SettingValue) => {
    const newSettingValue = {
      ...settingValueRef.current,
      [setting.id!]: newValue,
    };
    onSettingValueChangeRef.current(newSettingValue);
  }, []);
  const { bracketContent, urlContent } = getInfo(info ?? '');
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {title}

        {info && (
          <div>
            <a className={styles.info} href={urlContent} target="_blank" rel="noreferrer">
              {bracketContent}
            </a>
          </div>
        )}
      </div>
      <div className={styles.list}>
        {settings.map((setting) => {
          const Widget = getWidget(setting.type);
          const v = setting.id ? settingValue[setting.id] : { value: '' };
          return (
            <Widget
              key={setting.id ?? setting.label}
              setting={setting}
              value={v}
              onChange={(newValue) => {
                onSettingChange(setting, newValue);
              }}
            />
          );
        })}
      </div>
    </div>
  );
});

export default Form;
