/**
 * editor编辑器页面状态。
 * **/
import type { PayloadAction } from '@reduxjs/toolkit';

import { PreviewTypeEnum, SectionConfigDataStruct, SectionSchemaStruct, SideBarTypeEnum } from '@/types/editor';

import { createAppSlice } from '../createAppSlice';

export interface EditorSliceState {
  previewType: PreviewTypeEnum;
  sideBarType: SideBarTypeEnum;
  allSectionSchema: Record<string, SectionSchemaStruct>;
  sectionConfigData: SectionConfigDataStruct;
}

const initialState: EditorSliceState = {
  previewType: PreviewTypeEnum.pc,
  sideBarType: SideBarTypeEnum.comp,
  allSectionSchema: {},
  sectionConfigData: { order: [], sections: {} },
};

export const editorSlice = createAppSlice({
  name: 'editor',
  initialState,
  reducers: (create) => ({
    // 也可以批量修改
    changeEditorState: create.reducer((state, action: PayloadAction<Partial<EditorSliceState>>) => {
      Object.assign(state, { ...action.payload });
    }),
    updateSectionConfigData: create.reducer((state, action: PayloadAction<SectionConfigDataStruct>) => {
      state.sectionConfigData = action.payload;
    }),
  }),
  selectors: {},
});

export const { changeEditorState, updateSectionConfigData } = editorSlice.actions;
