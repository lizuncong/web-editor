import { SectionSettingSchemaStruct, SettingValue } from '@/types/section';

export interface WidgetProps {
  setting: SectionSettingSchemaStruct;
  value?: SettingValue;
  onChange: (newV: SettingValue) => void;
}
