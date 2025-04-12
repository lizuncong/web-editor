/**home页面状态。
 *
 *
 * 不同页面之间的状态必须要相互隔离。即不能在home页面引用dashboard页面的状态，也不能在dashboard
 * 页面使用home页面的状态。如果多个页面需要共享状态，那么应该放在global托管
 * **/
import type { PayloadAction } from '@reduxjs/toolkit';

import { createAppSlice } from '../createAppSlice';

export interface HomeSliceState {
  homeCount: number;
}

const initialState: HomeSliceState = {
  homeCount: 0,
};

export const homeSlice = createAppSlice({
  name: 'home',
  initialState,
  reducers: (create) => ({
    // 也可以批量修改
    changeHomeState: create.reducer((state, action: PayloadAction<Partial<HomeSliceState>>) => {
      Object.assign(state, { ...action.payload });
    }),
  }),
  selectors: {},
});

export const { changeHomeState } = homeSlice.actions;
