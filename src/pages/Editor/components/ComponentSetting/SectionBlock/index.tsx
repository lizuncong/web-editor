import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { iconMap } from '@/pages/Editor/constant';
import { useUpdateConfigData } from '@/pages/Editor/hooks/useUpdateConfigDataAndNotify';
import { useAppSelector } from '@/store/hooks';
import { BlockId, SectionBlockConfigSchema, SectionId } from '@/types/section';

import DelIcon from '../../../assets/delete.svg?react';
import DragIcon from '../../../assets/drag.svg?react';
import EyeIcon from '../../../assets/eye.svg?react';
import EyeCloseIcon from '../../../assets/eye_close.svg?react';
import defaultIcon from '../../../assets/image.svg?react';
import styles from './index.module.less';

interface SectionBlockProps {
  sectionId: SectionId;
  blockId: BlockId;
  id: BlockId;
}
const SectionBlock = memo((props: SectionBlockProps) => {
  const { sectionId, blockId } = props;
  const { t } = useTranslation();
  const currentEditingForm = useAppSelector((state) => state.editor.currentEditingForm);
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData).sections[sectionId]!;
  const allSectionSchema = useAppSelector((state) => state.editor.allSectionSchema);
  const { updateBlockConfigData } = useUpdateConfigData();
  const sectionType = sectionConfigData.type;
  const currentBlockConfigData = sectionConfigData.settingsData.blocks[blockId];

  const blockType = currentBlockConfigData.type;

  const currentBlockSchema = allSectionSchema[sectionType].blocks?.find((block) => block.type === blockType);
  if (!currentBlockSchema) return;
  const Icon = iconMap[currentBlockSchema.icon] || defaultIcon;
  return (
    <>
      <div className={[styles.section, currentEditingForm?.blockId === blockId && styles.selected].join(' ')}>
        <span className={styles.dragwrap}>
          <span className={[styles.icon, styles.sicon].join(' ')}>
            <Icon />
          </span>
          <span className={[styles.icon, styles.dragicon].join(' ')}>
            <DragIcon />
          </span>
        </span>

        <span className={styles.name}>{t(currentBlockSchema.name)}</span>
        <span
          className={styles.opicon}
          onClick={() => {
            updateBlockConfigData(sectionId, blockId, undefined);
          }}
        >
          <DelIcon />
        </span>
        <span
          className={styles.opicon}
          onClick={() => {
            const newBlock: SectionBlockConfigSchema = {
              ...currentBlockConfigData,
              disabled: !currentBlockConfigData.disabled,
            };
            updateBlockConfigData(sectionId, blockId, newBlock);
          }}
        >
          {currentBlockConfigData.disabled ? <EyeCloseIcon /> : <EyeIcon />}
        </span>
      </div>
    </>
  );
});

export default SectionBlock;
