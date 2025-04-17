import { InputNumber, InputNumberProps, Slider } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import ColumnWrap from '@/components/ColumnWrap';

import { WidgetProps } from '../types';
import styles from './index.module.less';
const Range = memo((props: WidgetProps) => {
  const { value, setting, onChange } = props;
  const { t } = useTranslation();
  const onChangeInner: InputNumberProps['onChange'] = (newValue) => {
    onChange({ value: newValue as number });
  };
  const min = setting.min;
  const max = setting.max;
  const step = setting.step ?? 1;
  return (
    <ColumnWrap label={setting.label} info={setting.info}>
      <div className={styles.row}>
        <Slider
          className={styles.slide}
          min={min}
          max={max}
          step={step}
          onChange={onChangeInner}
          value={value?.value as number}
        />
        <InputNumber
          className={styles.input}
          min={min}
          max={max}
          step={step}
          value={value?.value as number}
          onChange={onChangeInner}
          suffix={setting.unit?.includes('.') ? t(setting.unit) : setting.unit}
          controls={false}
        />
      </div>
    </ColumnWrap>
  );
});

export default Range;
