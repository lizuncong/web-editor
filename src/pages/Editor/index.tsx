import { lazy, memo } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeEditorState } from '@/store/reducer/editor';
import { SideBarTypeEnum } from '@/types/editor';

import ComponentIcon from './assets/component.svg?react';
import ThemeIcon from './assets/theme.svg?react';
import Header from './components/Header';
import Preview from './components/Preview';
import { useGetAllSectionSchema } from './hooks/useGetAllSectionSchema';
import { useGetSchemaLanguage } from './hooks/useGetSchemaLanguage';
import { useGetSectionConfigData } from './hooks/useGetSectionConfigData';
import styles from './index.module.less';
const ComponentSetting = lazy(() => import(/* webpackChunkName: 'componentsetting' */ './components/ComponentSetting'));
const ThemeSetting = lazy(() => import(/* webpackChunkName: 'themesetting' */ './components/ThemeSetting'));

const sideBarIcons = [
  {
    type: SideBarTypeEnum.comp,
    icon: ComponentIcon,
  },
  {
    type: SideBarTypeEnum.theme,
    icon: ThemeIcon,
  },
];
const Editor = memo(() => {
  const sideBarType = useAppSelector((state) => state.editor.sideBarType);
  const dispatch = useAppDispatch();
  // 获取主题所有组件的schema配置信息
  useGetAllSectionSchema();
  // 初始化配置数据
  useGetSectionConfigData();
  useGetSchemaLanguage();
  return (
    <div className={styles.editor}>
      {/* 顶部栏 */}
      <Header />
      <div className={styles.main}>
        <div className={styles.sidebar}>
          {sideBarIcons.map((sideType) => {
            const SideIcon = sideType.icon;
            return (
              <span
                key={sideType.type}
                onClick={() => {
                  dispatch(
                    changeEditorState({
                      sideBarType: sideType.type,
                    }),
                  );
                }}
                className={[styles.iconwrap, sideBarType === sideType.type && styles.selected].join(' ')}
              >
                <SideIcon />
              </span>
            );
          })}
        </div>
        {/* 组件设置 */}
        {sideBarType === SideBarTypeEnum.comp && <ComponentSetting />}
        {/* 主题设置 */}
        {sideBarType === SideBarTypeEnum.theme && <ThemeSetting />}
        {/* 预览区 */}
        <Preview />
      </div>
    </div>
  );
});

export default Editor;
