import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeEditorState } from '@/store/reducer/editor';

import CompBlock from './CompBlock';
import styles from './index.module.less';
const ComponentSetting = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const items = sectionConfigData.order;
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);

      const newItems = arrayMove(items, oldIndex, newIndex);
      dispatch(
        changeEditorState({
          sectionConfigData: {
            ...sectionConfigData,
            order: newItems,
          },
        }),
      );
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>{t('editor.compsetting')}</div>
      <div className={styles.list}>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={sectionConfigData.order} strategy={verticalListSortingStrategy}>
            {sectionConfigData.order.map((sectionId) => (
              <CompBlock key={sectionId} id={sectionId} sectionId={sectionId}></CompBlock>
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
});

export default ComponentSetting;
