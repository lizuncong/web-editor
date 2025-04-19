import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ColumnWrap from '@/components/ColumnWrap';
import Drawer from '@/components/Drawer';
import { getThemeOrigin } from '@/constant';
import cat1 from '@/pages/Editor/assets/1.jpg';
import cat3 from '@/pages/Editor/assets/3.jpg';
import cat4 from '@/pages/Editor/assets/4.jpeg';
import cat5 from '@/pages/Editor/assets/5.jpeg';
import cat7 from '@/pages/Editor/assets/7.jpeg';
import cat11 from '@/pages/Editor/assets/11.jpeg';
import cat12 from '@/pages/Editor/assets/12.jpeg';
import CheckedIcon from '@/pages/Editor/assets/checked.svg?react';
import PlusIcon from '@/pages/Editor/assets/plus.svg?react';

import { WidgetProps } from '../types';
import styles from './index.module.less';
const cats = [cat1, cat3, cat4, cat5, cat7, cat11, cat12];
interface ImageValue {
  url: string;
  [propName: string]: any;
}
const ImagePickerWidget = memo((props: WidgetProps) => {
  const { value, setting, onChange } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedUrl = (value?.value ?? { url: '' }) as ImageValue;
  return (
    <ColumnWrap label={setting.label} info={setting.info}>
      <div
        className={styles.container}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {selectedUrl.url ? (
          <img className={styles.selectedimg} src={selectedUrl.url} alt="" />
        ) : (
          <>
            <PlusIcon />
            {t('editor.imagepicker')}
          </>
        )}
      </div>
      <Drawer
        onClose={() => {
          setIsModalOpen(false);
        }}
        title={t('editor.imagepicker')}
        open={isModalOpen}
      >
        <div className={styles.modal}>
          {cats.map((cat) => (
            <div
              onClick={() => {
                onChange({ value: { url: cat, origin: getThemeOrigin() } });
              }}
              key={cat}
              className={[styles.imgwrap, selectedUrl.url === cat && styles.selected].join(' ')}
            >
              <img src={cat} className={styles.img} />
              {selectedUrl.url === cat && <CheckedIcon />}
            </div>
          ))}
        </div>
      </Drawer>
    </ColumnWrap>
  );
});

export default ImagePickerWidget;
