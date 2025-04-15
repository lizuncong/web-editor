import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import ColumnWrap from '@/components/ColumnWrap';

import { WidgetProps } from '../types';
const CollectionPickerWidget = memo((props: WidgetProps) => {
  const { value, setting, onChange } = props;
  const { t } = useTranslation();

  return (
    <ColumnWrap label={setting.label} info={setting.info}>
      <div
        onClick={() => {
          onChange({ value });
        }}
      >
        {t('editor.collectionpicker')}
      </div>
    </ColumnWrap>
  );
});

export default CollectionPickerWidget;
