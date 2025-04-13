export enum PreviewTypeEnum {
  pc = 'pc',
  mb = 'mobile',
}

export enum SideBarTypeEnum {
  comp = 'component',
  theme = 'theme',
}

interface SettingSchema {
  type: string;
  id: string;
  label: string;
  default?: number | string;
}

interface BlockSchema {
  type: string;
  icon: string;
  name: string;
  settings: SettingSchema[];
}

interface PresetSchema {
  category: string;
  name: string;
  settings: Record<string, any>;
  blocks?: { type: string; icon: string; settings: Record<string, any> }[];
}
export interface SectionSchemaStruct {
  name: string;
  class?: string;
  block_info?: string;
  max_blocks?: number;
  settings: SettingSchema[];
  blocks?: BlockSchema[];
  presets: PresetSchema[];
  [propsName: string]: any;
}

interface SectionBlockConfigSchema {
  type: string;
  icon: string;
  blockId: string;
  settings: Record<string, { value: any }>;
}
export interface SectionConfigSchema {
  sectionId: string;
  type: string;
  disabled: boolean;
  settingsData: {
    disabled: boolean;
    type: string;
    block_order: string[];
    settings: Record<string, { value: any }>;
    blocks: Record<string, SectionBlockConfigSchema>;
  };
  [propsName: string]: any;
}
export interface SectionConfigDataStruct {
  order: string[];
  sections: Record<string, SectionConfigSchema | undefined>;
}
