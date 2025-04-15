import { BlockIconTypeEnum } from '@/types/section';

import pinIcon from './assets/pin.svg?react';
import SlideShowIcon from './assets/slideshow.svg?react';
import videoIcon from './assets/video.svg?react';
export const iconMap: Record<BlockIconTypeEnum, string> = {
  [BlockIconTypeEnum.image]: SlideShowIcon,
  [BlockIconTypeEnum.video]: videoIcon,
  [BlockIconTypeEnum.normal]: pinIcon,
};
