import { Input } from 'antd';
import { memo } from 'react';

import ColumnWrap from '@/components/ColumnWrap';

import { WidgetProps } from '../types';
const Text = memo((props: WidgetProps) => {
  const { value, setting, onChange } = props;
  return (
    <ColumnWrap label={setting.label} info={setting.info}>
      <Input
        placeholder="请输入文案"
        value={value?.value as string}
        onChange={(e) => {
          onChange({ value: e.target.value });
        }}
      />
    </ColumnWrap>
  );
});

export default Text;
