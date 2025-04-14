export type SectionId = string;
export type BlockId = string;
export type SettingId = string;
export interface SectionConfigDataStruct {
  order: string[];
  sections: Record<SectionId, SectionConfigSchema | undefined>;
}
export interface SectionConfigSchema {
  sectionId: SectionId;
  type: SectionTypeEnum;
  disabled: boolean;
  settingsData: {
    disabled: boolean;
    type: SectionTypeEnum;
    settings: Record<SettingId, { value: SettingDefaultValueType; [propName: string]: any }>;
    blocks: Record<BlockId, SectionBlockConfigSchema>;
    block_order: BlockId[];
  };
}

export interface SectionBlockConfigSchema {
  type: BlockTypeEnum;
  settings: Record<SettingId, { value: SettingDefaultValueType; [propName: string]: any }>;
}

/** =================================== schema 类型 ================================================= **/

export enum SectionTypeEnum {
  SlideShow = 'featured-slideshow',
  Video = 'video',
  MultiMediaSplicing = 'multi-media-splicing',
}

// 控件类型
export enum WidgetType {
  range = 'range',
  switch = 'switch',
  group_header = 'group_header',
  select = 'select',
  image_picker = 'image_picker',
  video = 'video',
  video_url = 'video_url',
  text = 'text',
  product = 'product',
  product_picker = 'product_picker',
  collection_picker = 'collection_picker',
  url = 'url',
}
export enum BlockTypeEnum {
  image = 'image',
  video = 'video',
  product = 'product',
  collection = 'collection',
}

export enum BlockIconTypeEnum {
  image = 'image',
  normal = 'normal',
  video = 'video',
}

type SettingDefaultValueType = number | string | boolean | null | undefined | Record<string, any>;
interface SectionSettingSchemaStruct {
  type: WidgetType;
  id?: SettingId;
  label: string;
  info?: string;
  default?: SettingDefaultValueType;
  [propsName: string]: any;
}

interface SectionBlockSchemaStruct {
  type: BlockTypeEnum;
  icon: BlockIconTypeEnum;
  name: string;
  settings: SectionSettingSchemaStruct[];
}
export interface SectionPresetStruct {
  category_index: number;
  category: string;
  name: string;
  settings: Record<SettingId, SettingDefaultValueType>;
  blocks?: {
    type: BlockTypeEnum;
    settings: Record<SettingId, SettingDefaultValueType>;
  }[];
}
export interface SectionSchemaStruct {
  name: string;
  class?: string;
  icon?: BlockIconTypeEnum;
  block_info?: string;
  type: SectionTypeEnum;
  max_blocks?: number;
  settings?: SectionSettingSchemaStruct[];
  blocks?: SectionBlockSchemaStruct[];
  presets?: SectionPresetStruct[];
}

export interface CurrentEditingFormType {
  type: SectionTypeEnum | BlockTypeEnum;
  sectionId?: SectionId;
  blockId?: BlockId;
}
