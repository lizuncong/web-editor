/**全局共享状态，
 *
 *
 * 多个页面共享的状态，需要放在global中托管
 * **/

import type { PayloadAction } from '@reduxjs/toolkit';

import { createAppSlice } from '../createAppSlice';

export interface GlobalSliceState {
  uid: string;
  userName: string;
}

const initialState: GlobalSliceState = {
  uid: '',
  userName: '张三',
};

export const globalSlice = createAppSlice({
  name: 'global',
  initialState,
  reducers: (create) => ({
    changeUid: create.reducer((state, action: PayloadAction<string>) => {
      state.uid = action.payload;
    }),
    // 也可以批量修改，就不用针对每个属性写一遍change方法。
    changeGlobalState: create.reducer((state, action: PayloadAction<Partial<GlobalSliceState>>) => {
      Object.assign(state, { ...action.payload });
    }),
  }),
  selectors: {
    selectUserName: (global) => global.userName,
  },
});

export const { changeUid, changeGlobalState } = globalSlice.actions;

export const { selectUserName } = globalSlice.selectors;
