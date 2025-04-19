import { lazy, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeEditorState } from '@/store/reducer/editor';
import { SideBarTypeEnum } from '@/types/editor';
import { Theme } from '@/types/enum';

import ComponentIcon from './assets/component.svg?react';
import ThemeIcon from './assets/theme.svg?react';
import Header from './components/Header';
import Preview from './components/Preview';
import { useListenerMsgFromIframe } from './hooks/useListenerMsgFromIframe';
import styles from './index.module.less';
const RightDrawer = lazy(() => import(/* webpackChunkName: 'rightDrawer' */ './components/Right'));

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
  const { t } = useTranslation();
  const sideBarType = useAppSelector((state) => state.editor.sideBarType);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const theme = searchParams.get('theme');
  useEffect(() => {
    if (theme) {
      dispatch(changeEditorState({ theme: theme as Theme }));
    }
  }, [dispatch, theme]);
  // 监听iframe的消息
  useListenerMsgFromIframe();
  if (!theme) {
    return (
      <div className={styles.notfound}>
        <span>{t('editor.notfoundtheme')}</span>
        <span
          className={styles.back}
          onClick={() => {
            navigate('/');
          }}
        >
          {t('editor.backhome')}
        </span>
      </div>
    );
  }
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
        {/* 组件设置表单 */}
        <RightDrawer />
      </div>
    </div>
  );
});

export default Editor;
