import { memo, useCallback, useRef } from 'react';

import Widgets from '@/pages/Editor/Widgets';
import { SectionSettingSchemaStruct, SettingsValue, SettingValue } from '@/types/section';

import styles from './index.module.less';
interface FormProps {
  settings: SectionSettingSchemaStruct[];
  settingValue: SettingsValue;
  onSettingValueChange: (newSettingValue: SettingsValue) => void;
}
const Form = memo((props: FormProps) => {
  const { settings, settingValue, onSettingValueChange } = props;
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
  return (
    <div className={styles.form}>
      {settings.map((setting) => {
        const Widget = Widgets[setting.type];
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
  );
});

export default Form;
