import { message } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import ColumnWrap from '@/components/ColumnWrap';
import PlusIcon from '@/pages/Editor/assets/plus.svg?react';

import { WidgetProps } from '../types';
import styles from './index.module.less';

const ImagePickerWidget = memo((props: WidgetProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const { setting } = props;
  const { t } = useTranslation();

  return (
    <ColumnWrap label={setting.label} info={setting.info}>
      {contextHolder}
      <div
        onClick={() => {
          messageApi.open({
            type: 'warning',
            content: '开发中，敬请期待！',
          });
        }}
        className={styles.container}
      >
        <PlusIcon />
        {t('editor.selectvideo')}
      </div>
    </ColumnWrap>
  );
});

export default ImagePickerWidget;
