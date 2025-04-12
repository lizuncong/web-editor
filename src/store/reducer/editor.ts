/**
 * editor编辑器页面状态。
 * **/
import type { PayloadAction } from '@reduxjs/toolkit';

import { PreviewTypeEnum, SideBarTypeEnum } from '@/types/editor';

import { createAppSlice } from '../createAppSlice';

export interface EditorSliceState {
  previewType: PreviewTypeEnum;
  sideBarType: SideBarTypeEnum;
}

const initialState: EditorSliceState = {
  previewType: PreviewTypeEnum.pc,
  sideBarType: SideBarTypeEnum.comp,
};

export const editorSlice = createAppSlice({
  name: 'editor',
  initialState,
  reducers: (create) => ({
    // 也可以批量修改
    changeEditorState: create.reducer((state, action: PayloadAction<Partial<EditorSliceState>>) => {
      Object.assign(state, { ...action.payload });
    }),
  }),
  selectors: {},
});

export const { changeEditorState } = editorSlice.actions;
