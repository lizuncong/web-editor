import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './locales/en-us.json';
import translation from './locales/zh-hans-cn.json';
import { LanguageEnum } from './types/enum';

export const defaultNs = 'translation';
i18next.use(initReactI18next).init({
  lng: LanguageEnum.ZH,
  debug: true,
  resources: {
    [LanguageEnum.ZH]: {
      translation,
    },
    [LanguageEnum.EN]: {
      translation: translationEn,
    },
  },
});
