import { JSX, lazy, LazyExoticComponent, MemoExoticComponent } from 'react';

import { WidgetType } from '@/types/section';

import { WidgetProps } from './types';

const TextWidget = lazy(() => import(/* webpackChunkName: 'componentsetting' */ './Text'));

const Widgets: Record<WidgetType, LazyExoticComponent<MemoExoticComponent<(props: WidgetProps) => JSX.Element>>> = {
  [WidgetType.text]: TextWidget,
  [WidgetType.range]: TextWidget,
  [WidgetType.group_header]: TextWidget,
  [WidgetType.collection_picker]: TextWidget,
  [WidgetType.image_picker]: TextWidget,
  [WidgetType.product]: TextWidget,
  [WidgetType.product_picker]: TextWidget,
  [WidgetType.select]: TextWidget,
  [WidgetType.switch]: TextWidget,
  [WidgetType.url]: TextWidget,
  [WidgetType.video]: TextWidget,
  [WidgetType.video_url]: TextWidget,
};

export default Widgets;
