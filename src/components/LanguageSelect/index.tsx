import { Select } from 'antd';
import { changeLanguage } from 'i18next';
import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeGlobalState } from '@/store/reducer/global';
import { LanguageEnum } from '@/types/enum';

const LanguageSelect = () => {
  const { language } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  const handleChange = useCallback(
    (value: string) => {
      console.log(`selected ${value}`);
      dispatch(changeGlobalState({ language: value as LanguageEnum }));
      changeLanguage(value as LanguageEnum);
    },
    [dispatch],
  );
  return (
    <Select
      value={language}
      style={{ width: 80 }}
      onChange={handleChange}
      options={[
        { value: LanguageEnum.ZH, label: '中文' },
        { value: LanguageEnum.EN, label: '英文' },
      ]}
    />
  );
};

export default LanguageSelect;
