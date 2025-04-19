import ariseImg from '@/assets/arise.jpg';
import modernImg from '@/assets/modern.jpg';

import { Theme } from './types/enum';
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
    img: ariseImg,
  },
  {
    title: 'Modern',
    theme: Theme.MODERN,
    img: modernImg,
  },
];
