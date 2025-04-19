import ariseImg from '@/assets/arise.jpg';
import foodImg from '@/assets/food.jpg';
import groundedImg from '@/assets/grounded.jpg';
import hammerImg from '@/assets/hammer.jpg';
import modernImg from '@/assets/modern.jpg';

import { Theme } from './types/enum';
import { AriseThemeType, ModernThemeType } from './types/section';
export const getThemeOrigin = () => {
  return isDev() ? 'http://localhost:5174' : 'https://lizuncong.github.io';
};

export const getIframeSrc = (theme: Theme) => {
  return isDev() ? 'http://localhost:5174/' : `https://lizuncong.github.io/${theme}/`;
};
export const isDev = () => {
  return !location.host.includes('lizuncong.github.io');
};
export const themes = [
  {
    title: 'Arise',
    theme: Theme.ARISE,
    types: [
      {
        type: AriseThemeType.Default,
        img: ariseImg,
        title: 'theme.arise.default',
      },
      {
        type: AriseThemeType.Food,
        img: foodImg,
        title: 'theme.arise.food',
      },
      {
        type: AriseThemeType.Grounded,
        img: groundedImg,
        title: 'theme.arise.grounded',
      },
      {
        type: AriseThemeType.Hammer,
        img: hammerImg,
        title: 'theme.arise.hammer',
      },
    ],
  },
  {
    title: 'Modern',
    theme: Theme.MODERN,
    types: [
      {
        type: ModernThemeType.Default,
        img: modernImg,
        title: 'theme.modern.default',
      },
    ],
  },
];
