import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/store/hooks';

import ExpandIcon from '../../../assets/expand.svg?react';
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
}
const CompBlock = memo((props: CompBlockProps) => {
  const { sectionId } = props;
  const { t } = useTranslation();
  const allSectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const allSectionSchema = useAppSelector((state) => state.editor.allSectionSchema);
  const currentSectionConfigData = allSectionConfigData.sections[sectionId];
  const currentSectionSchema = allSectionSchema[currentSectionConfigData.type];
  console.log('sche...', currentSectionSchema);
  const Icon = iconMap[currentSectionSchema.icon] ?? defaultIcon;
  return (
    <div className={styles.block}>
      <span className={styles.expand}>
        <ExpandIcon />
      </span>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.name}>{t(currentSectionSchema.name)}</span>
    </div>
  );
});

export default CompBlock;
