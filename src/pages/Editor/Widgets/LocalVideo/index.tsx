import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ColumnWrap from '@/components/ColumnWrap';
import Drawer from '@/components/Drawer';
import { getEditorSrc } from '@/constant';
import CheckedIcon from '@/pages/Editor/assets/checked.svg?react';
import PlusIcon from '@/pages/Editor/assets/plus.svg?react';

import { WidgetProps } from '../types';
import styles from './index.module.less';
const videoList = Array.from({ length: 10 }, (_, index) => ({
  name: `video${index + 1}`,
  url: getEditorSrc() + `/${index + 1}.mp4`,
}));
const ImagePickerWidget = memo((props: WidgetProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { value, setting, onChange } = props;
  const { t } = useTranslation();
  const selectedUrl = (value?.value ?? '') as string;

  return (
    <ColumnWrap label={setting.label} info={setting.info}>
      <div
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
        className={[styles.container, selectedUrl && styles.hasvideo].join(' ')}
      >
        {selectedUrl ? (
          <video controls src={selectedUrl} className={styles.video} />
        ) : (
          <>
            <PlusIcon />
            {t('editor.selectvideo')}
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
          {videoList.map((video) => (
            <div
              onClick={() => {
                onChange({ value: video.url });
              }}
              key={video.name}
              className={[styles.imgwrap, selectedUrl === video.url && styles.selected].join(' ')}
            >
              <video controls src={video.url} className={styles.img} />
              {selectedUrl === video.url && <CheckedIcon />}
            </div>
          ))}
        </div>
      </Drawer>
    </ColumnWrap>
  );
});

export default ImagePickerWidget;
