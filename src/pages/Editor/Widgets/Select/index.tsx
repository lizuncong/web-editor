import { Select as AntdSelect } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import ColumnWrap from '@/components/ColumnWrap';

import { WidgetProps } from '../types';
const SelectWidget = memo((props: WidgetProps) => {
  const { value, setting, onChange } = props;
  const { t } = useTranslation();

  return (
    <ColumnWrap label={setting.label} info={setting.info}>
      <AntdSelect<string>
        value={value.value as string}
        style={{ width: '100%' }}
        onChange={(v) => {
          onChange({ value: v });
        }}
        options={(setting.options ?? []).map((op: any) => ({
          label: t(op.label),
          value: op.value,
        }))}
      />
    </ColumnWrap>
  );
});

export default SelectWidget;
