import ariseImg from '@/assets/arise.jpg';
import foodImg from '@/assets/food.jpg';
import groundedImg from '@/assets/grounded.jpg';
import hammerImg from '@/assets/hammer.jpg';
import modernImg from '@/assets/modern.jpg';

import { Theme } from './types/enum';
import { AriseThemeStyle, ModernThemeStyle } from './types/section';
export const getThemeOrigin = () => {
  return isDev() ? 'http://localhost:5174' : 'https://lizuncong.github.io';
};

export const getIframeSrc = (theme: Theme) => {
  return isDev() ? 'http://localhost:5174/' : `https://lizuncong.github.io/${theme}/`;
};
export const getEditorSrc = () => {
  return isDev() ? 'http://localhost:5173/' : `https://lizuncong.github.io/web-editor/`;
};
export const isDev = () => {
  return !location.host.includes('lizuncong.github.io');
};
export const themes = [
  {
    title: 'Arise',
    theme: Theme.ARISE,
    styles: [
      {
        style: AriseThemeStyle.Default,
        img: ariseImg,
        title: 'theme.arise.default',
      },
      {
        style: AriseThemeStyle.Food,
        img: foodImg,
        title: 'theme.arise.food',
      },
      {
        style: AriseThemeStyle.Grounded,
        img: groundedImg,
        title: 'theme.arise.grounded',
      },
      {
        style: AriseThemeStyle.Hammer,
        img: hammerImg,
        title: 'theme.arise.hammer',
      },
    ],
  },
  {
    title: 'Modern',
    theme: Theme.MODERN,
    styles: [
      {
        style: ModernThemeStyle.Default,
        img: modernImg,
        title: 'theme.modern.default',
      },
    ],
  },
];
