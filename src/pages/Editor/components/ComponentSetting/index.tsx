import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/store/hooks';

import { useUpdateConfigData } from '../../hooks/useUpdateConfigDataAndNotify';
import AddSection from './AddSection';
import styles from './index.module.less';
import Section from './Section';
const ComponentSetting = memo(() => {
  const { t } = useTranslation();
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const { updateSectionConfigOrder } = useUpdateConfigData();
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

      updateSectionConfigOrder(arrayMove(items, oldIndex, newIndex));
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>{t('editor.compsetting')}</div>
      <div className={styles.list}>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={sectionConfigData.order} strategy={verticalListSortingStrategy}>
            {sectionConfigData.order.map((sectionId) => (
              <Section key={sectionId} id={sectionId} sectionId={sectionId}></Section>
            ))}
          </SortableContext>
        </DndContext>
        <AddSection />
      </div>
    </div>
  );
});

export default ComponentSetting;
