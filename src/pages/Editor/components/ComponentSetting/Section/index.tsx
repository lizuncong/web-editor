import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, useSortable } from '@dnd-kit/sortable';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { iconMap } from '@/pages/Editor/constant';
import { useUpdateConfigData } from '@/pages/Editor/hooks/useUpdateConfigDataAndNotify';
import { useAppSelector } from '@/store/hooks';
import { SectionId } from '@/types/section';

import DelIcon from '../../../assets/delete.svg?react';
import DragIcon from '../../../assets/drag.svg?react';
import ExpandIcon from '../../../assets/expand.svg?react';
import EyeIcon from '../../../assets/eye.svg?react';
import EyeCloseIcon from '../../../assets/eye_close.svg?react';
import defaultIcon from '../../../assets/image.svg?react';
import AddBlock from '../AddBlock';
import SectionBlock from '../SectionBlock';
import styles from './index.module.less';
interface SectionProps {
  sectionId: SectionId;
  id: SectionId;
}
const SectionCom = memo((props: SectionProps) => {
  const { sectionId } = props;
  const { t } = useTranslation();
  const currentEditingForm = useAppSelector((state) => state.editor.currentEditingForm);
  const allSectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const allSectionSchema = useAppSelector((state) => state.editor.allSectionSchema);
  const [isBlockShow, setIsBlockShow] = useState(false);
  const currentSectionConfigData = allSectionConfigData.sections[sectionId];
  const currentSectionSchema = currentSectionConfigData?.type ? allSectionSchema[currentSectionConfigData.type] : null;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });
  const {
    updateAllSectionConfigData,
    updateBlockOrderData,
    updateCurrentEditingForm,
    updateSectionConfigSectionBySectionId,
  } = useUpdateConfigData();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const blockOrder = currentSectionConfigData?.settingsData.block_order ?? [];

  function handleDragEnd(event: any) {
    const { active, over } = event;
    console.log('active', active.id, over.id);
    if (active.id !== over.id) {
      const oldIndex = blockOrder.indexOf(active.id);
      const newIndex = blockOrder.indexOf(over.id);

      updateBlockOrderData(sectionId, arrayMove(blockOrder, oldIndex, newIndex));
    }
  }
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  if (!currentSectionConfigData || !currentSectionSchema) {
    return <div className={styles.section}>{t('editor.notfound')}</div>;
  }
  const sectionIcon = currentSectionSchema.icon && iconMap[currentSectionSchema.icon];
  const Icon = sectionIcon ?? defaultIcon;

  const hasBlocks = currentSectionSchema.max_blocks && currentSectionSchema.blocks?.length;
  const isSelected = currentEditingForm?.sectionId === sectionId && !currentEditingForm?.blockId;
  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        className={[styles.section, isBlockShow && styles.expandsection, isSelected && styles.selected].join(' ')}
      >
        <span
          onClick={() => {
            setIsBlockShow(!isBlockShow);
          }}
          className={[styles.expand, hasBlocks && styles.hover].join(' ')}
        >
          {hasBlocks && <ExpandIcon />}
        </span>
        <span className={styles.dragwrap}>
          <span className={[styles.icon, styles.sicon].join(' ')}>
            <Icon />
          </span>
          <span {...listeners} className={[styles.icon, styles.dragicon].join(' ')}>
            <DragIcon />
          </span>
        </span>

        <span
          onClick={() => {
            if (isSelected) {
              updateCurrentEditingForm(undefined);
            } else {
              updateCurrentEditingForm({
                type: currentSectionSchema.type,
                sectionId: sectionId,
              });
            }
          }}
          className={styles.name}
        >
          {t(currentSectionSchema.name)}
        </span>
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
      {isBlockShow && (
        <div className={styles.blockList}>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={blockOrder} strategy={verticalListSortingStrategy}>
              {blockOrder.map((blockId) => {
                return <SectionBlock key={blockId} sectionId={sectionId} blockId={blockId} id={blockId} />;
              })}
            </SortableContext>
          </DndContext>

          <AddBlock
            sectionId={sectionId}
            sectionType={currentSectionConfigData.type}
            currentNum={blockOrder.length}
            maxNum={currentSectionSchema.max_blocks!}
          />
        </div>
      )}
    </>
  );
});

export default SectionCom;
