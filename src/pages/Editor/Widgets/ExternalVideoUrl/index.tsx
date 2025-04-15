import { Input } from 'antd';
import { memo } from 'react';

import ColumnWrap from '@/components/ColumnWrap';

import { WidgetProps } from '../types';
const ExternalVideoUrlWidget = memo((props: WidgetProps) => {
  const { value, setting, onChange } = props;
  return (
    <ColumnWrap label={setting.label} info={setting.info}>
      <Input
        placeholder="https://www.youtube.com/watch?v=V7BEzkRBp_g"
        value={value.value as string}
        onChange={(e) => {
          onChange({ value: e.target.value });
        }}
      />
    </ColumnWrap>
  );
});

export default ExternalVideoUrlWidget;
