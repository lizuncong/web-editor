import { JSX, lazy, LazyExoticComponent, MemoExoticComponent } from 'react';

import { WidgetType } from '@/types/section';

import { WidgetProps } from './types';

const TextWidget = lazy(() => import(/* webpackChunkName: 'textwidget' */ './Text'));
const RangeWidget = lazy(() => import(/* webpackChunkName: 'rangewidget' */ './Range'));
const switchWidget = lazy(() => import(/* webpackChunkName: 'switchwidget' */ './Switch'));

const Widgets: Record<WidgetType, LazyExoticComponent<MemoExoticComponent<(props: WidgetProps) => JSX.Element>>> = {
  [WidgetType.text]: TextWidget,
  [WidgetType.range]: RangeWidget,
  [WidgetType.group_header]: TextWidget,
  [WidgetType.collection_picker]: TextWidget,
  [WidgetType.image_picker]: TextWidget,
  [WidgetType.product]: TextWidget,
  [WidgetType.product_picker]: TextWidget,
  [WidgetType.select]: TextWidget,
  [WidgetType.switch]: switchWidget,
  [WidgetType.url]: TextWidget,
  [WidgetType.video]: TextWidget,
  [WidgetType.video_url]: TextWidget,
};

export default Widgets;
