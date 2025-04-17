import { Switch } from 'antd';
import { memo } from 'react';

import RowWrap from '@/components/RowWrap';

import { WidgetProps } from '../types';
import styles from './index.module.less';
const SwitchWidget = memo((props: WidgetProps) => {
  const { value, setting, onChange } = props;

  return (
    <RowWrap label={setting.label} info={setting.info}>
      <div className={styles.row}>
        <Switch
          value={value?.value as boolean}
          onChange={(newv) => {
            onChange({ value: newv });
          }}
        />
      </div>
    </RowWrap>
  );
});

export default SwitchWidget;
