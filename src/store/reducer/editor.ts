/**
 * editor编辑器页面状态。
 * **/
import type { PayloadAction } from '@reduxjs/toolkit';

import { PreviewTypeEnum, SideBarTypeEnum } from '@/types/editor';
import { Theme } from '@/types/enum';
import {
  AriseThemeType,
  CurrentEditingFormType,
  ModernThemeType,
  SectionConfigDataStruct,
  SectionSchemaStruct,
} from '@/types/section';

import { createAppSlice } from '../createAppSlice';
export interface EditorSliceState {
  previewType: PreviewTypeEnum;
  sideBarType: SideBarTypeEnum;
  allSectionSchema: Record<string, SectionSchemaStruct>;
  sectionConfigData: SectionConfigDataStruct;
  currentEditingForm?: CurrentEditingFormType;
  theme: Theme | undefined;
  themeType: AriseThemeType | ModernThemeType | undefined;
}

const initialState: EditorSliceState = {
  previewType: PreviewTypeEnum.pc,
  sideBarType: SideBarTypeEnum.comp,
  currentEditingForm: undefined,
  allSectionSchema: {},
  sectionConfigData: { order: [], sections: {} },
  theme: undefined,
  themeType: undefined,
};

export const editorSlice = createAppSlice({
  name: 'editor',
  initialState,
  reducers: (create) => ({
    // 也可以批量修改
    changeEditorState: create.reducer((state, action: PayloadAction<Partial<EditorSliceState>>) => {
      Object.assign(state, { ...action.payload });
    }),
    resetEditorState: create.reducer((state) => {
      Object.assign(state, { ...initialState });
    }),
    updateSectionConfigData: create.reducer((state, action: PayloadAction<SectionConfigDataStruct>) => {
      state.sectionConfigData = action.payload;
    }),
  }),
  selectors: {},
});

export const { changeEditorState, updateSectionConfigData, resetEditorState } = editorSlice.actions;
