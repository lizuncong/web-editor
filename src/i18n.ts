import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation from './locales/zh-hans-cn.json';

export const defaultNs = 'translation';
export const zhKey = 'zh';
i18next.use(initReactI18next).init({
  lng: zhKey,
  debug: true,
  resources: {
    [zhKey]: {
      translation,
    },
  },
});
