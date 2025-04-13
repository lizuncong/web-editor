import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useUpdateConfigData } from '@/pages/Editor/hooks/useUpdateConfigDataAndNotify';
import { useAppSelector } from '@/store/hooks';

import DelIcon from '../../../assets/delete.svg?react';
import DragIcon from '../../../assets/drag.svg?react';
import ExpandIcon from '../../../assets/expand.svg?react';
import EyeIcon from '../../../assets/eye.svg?react';
import EyeCloseIcon from '../../../assets/eye_close.svg?react';
import defaultIcon from '../../../assets/image.svg?react';
import pinIcon from '../../../assets/pin.svg?react';
import SlideShowIcon from '../../../assets/slideshow.svg?react';
import videoIcon from '../../../assets/video.svg?react';
import styles from './index.module.less';
const iconMap: any = {
  slideshow: SlideShowIcon,
  video: videoIcon,
  splicing: pinIcon,
};
interface CompBlockProps {
  sectionId: string;
  id: string;
}
const CompBlock = memo((props: CompBlockProps) => {
  const { sectionId } = props;
  const { t } = useTranslation();
  const allSectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const allSectionSchema = useAppSelector((state) => state.editor.allSectionSchema);
  const currentSectionConfigData = allSectionConfigData.sections[sectionId];
  const currentSectionSchema = currentSectionConfigData?.type ? allSectionSchema[currentSectionConfigData.type] : null;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });
  const { updateAllSectionConfigData, updateSectionConfigSectionBySectionId } = useUpdateConfigData();
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  if (!currentSectionConfigData || !currentSectionSchema) {
    return <div className={styles.section}>{t('editor.notfound')}</div>;
  }
  const Icon =
    currentSectionSchema.icon && iconMap[currentSectionSchema.icon] ? iconMap[currentSectionSchema.icon] : defaultIcon;

  const hasBlocks = currentSectionSchema.max_blocks && currentSectionSchema.blocks?.length;
  return (
    <div ref={setNodeRef} style={style} {...attributes} className={styles.section}>
      <span className={[styles.expand, hasBlocks && styles.hover].join(' ')}>{hasBlocks && <ExpandIcon />}</span>
      <span className={styles.dragwrap}>
        <span className={[styles.icon, styles.sicon].join(' ')}>
          <Icon />
        </span>
        <span {...listeners} className={[styles.icon, styles.dragicon].join(' ')}>
          <DragIcon />
        </span>
      </span>

      <span className={styles.name}>{t(currentSectionSchema.name)}</span>
      <span
        className={styles.opicon}
        onClick={() => {
          updateAllSectionConfigData({
            order: allSectionConfigData.order.filter((sid) => sid !== sectionId),
            sections: {
              ...allSectionConfigData.sections,
              [sectionId]: undefined,
            },
          });
        }}
      >
        <DelIcon />
      </span>
      <span
        className={styles.opicon}
        onClick={() => {
          updateSectionConfigSectionBySectionId(sectionId, {
            ...currentSectionConfigData,
            disabled: !currentSectionConfigData.disabled,
          });
        }}
      >
        {currentSectionConfigData.disabled ? <EyeCloseIcon /> : <EyeIcon />}
      </span>
    </div>
  );
});

export default CompBlock;
