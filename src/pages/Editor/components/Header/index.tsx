import { memo } from 'react';

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
  const dispatch = useAppDispatch();
  return (
    <header className={styles.header}>
      <div className={styles.left}>落地页低代码编辑器</div>
      <div className={styles.right}>
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
    </header>
  );
});

export default Header;
