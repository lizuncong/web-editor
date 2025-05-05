import { Button } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Github from '@/components/Github';
import LanguageSelect from '@/components/LanguageSelect';
import { getIframeSrc } from '@/constant';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeEditorState } from '@/store/reducer/editor';
import { PreviewTypeEnum } from '@/types/editor';

import mbIcon from '../../assets/mb.png';
import pcIcon from '../../assets/pc.png';
import styles from './index.module.less';
const previewTypeIcons = [
  {
    type: PreviewTypeEnum.pc,
    icon: pcIcon,
  },
  {
    type: PreviewTypeEnum.mb,
    icon: mbIcon,
  },
];
const Header = memo(() => {
  const previewType = useAppSelector((state) => state.editor.previewType);
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const themeConfig = useAppSelector((state) => state.editor.themeConfig);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { theme, themeStyle } = useAppSelector((state) => state.editor);
  const language = useAppSelector((state) => state.global.language);

  return (
    <header className={styles.header}>
      <div className={styles.left}>{t('editor.header')}</div>
      <div className={styles.middle}>
        {previewTypeIcons.map((typeIcon) => (
          <span
            key={typeIcon.type}
            className={[styles.icon, previewType === typeIcon.type && styles.selected].join(' ')}
            onClick={() => {
              dispatch(
                changeEditorState({
                  previewType: typeIcon.type,
                }),
              );
            }}
          >
            <img src={typeIcon.icon} alt="" />
          </span>
        ))}
      </div>
      <div className={styles.right}>
        <Button
          onClick={() => {
            const configData = {
              sectionConfigData,
              themeConfig,
            };
            localStorage.setItem('editorConfigData', JSON.stringify(configData));
            const src = getIframeSrc(theme!);
            const previewUrl = src + `?ispreview=1&themestyle=${themeStyle}&language=${language}`;
            window.open(previewUrl, '_blank');
          }}
          className={styles.previewBtn}
          type="primary"
        >
          预览
        </Button>
        <LanguageSelect />
        <Github />
      </div>
    </header>
  );
});

export default Header;
