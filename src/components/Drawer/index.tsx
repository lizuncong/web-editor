import { memo } from 'react';
import { createPortal } from 'react-dom';

import CloseIcon from '@/assets/close.svg?react';

import styles from './index.module.less';
interface DrawerProps {
  position?: 'left' | 'right';
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
const Drawer = memo((props: DrawerProps) => {
  const { position = 'right', open, onClose, title, children } = props;
  if (!open) return null;
  return createPortal(
    <div className={[styles.container, position === 'left' && styles.left, open && styles.open].join(' ')}>
      <div className={styles.header}>
        {title}
        <span className={styles.close} onClick={onClose}>
          <CloseIcon />
        </span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>,
    document.body,
  );
});

export default Drawer;
