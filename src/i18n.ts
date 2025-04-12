import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation from './locales/zh-hans-cn.json';

i18next.use(initReactI18next).init({
  lng: 'zh',
  debug: true,
  resources: {
    zh: {
      translation,
    },
  },
});
