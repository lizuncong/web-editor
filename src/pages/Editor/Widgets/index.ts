import { JSX, lazy, LazyExoticComponent, MemoExoticComponent } from 'react';

import { WidgetType } from '@/types/section';

import { WidgetProps } from './types';

const TextWidget = lazy(() => import(/* webpackChunkName: 'textwidget' */ './Text'));
const RangeWidget = lazy(() => import(/* webpackChunkName: 'rangewidget' */ './Range'));
const switchWidget = lazy(() => import(/* webpackChunkName: 'switchwidget' */ './Switch'));
const selectWidget = lazy(() => import(/* webpackChunkName: 'selectwidget' */ './Select'));
const localVideoWidget = lazy(() => import(/* webpackChunkName: 'localVideoWidget' */ './LocalVideo'));
const ExternalVideoUrlWidget = lazy(
  () => import(/* webpackChunkName: 'externalvideoUrlwidget' */ './ExternalVideoUrl'),
);

const groupHeaderWidget = lazy(() => import(/* webpackChunkName: 'groupheaderwidget' */ './GroupHeader'));
const collectionPickerWidget = lazy(
  () => import(/* webpackChunkName: 'collectionPickerWidget' */ './CollectionPicker'),
);
const imagePickerWidget = lazy(() => import(/* webpackChunkName: 'imagePickerWidget' */ './ImagePicker'));

const Widgets: Record<WidgetType, LazyExoticComponent<MemoExoticComponent<(props: WidgetProps) => JSX.Element>>> = {
  [WidgetType.text]: TextWidget,
  [WidgetType.range]: RangeWidget,
  [WidgetType.select]: selectWidget,
  [WidgetType.switch]: switchWidget,
  [WidgetType.group_header]: groupHeaderWidget,
  [WidgetType.collection_picker]: collectionPickerWidget,
  [WidgetType.image_picker]: imagePickerWidget,
  [WidgetType.video]: localVideoWidget, // 选择本地视频
  [WidgetType.video_url]: ExternalVideoUrlWidget, // 输入外部视频链接
  // [WidgetType.product]: TextWidget,
  [WidgetType.product_picker]: TextWidget, // 选择商品
  [WidgetType.url]: TextWidget, // 跳转链接
};

export default Widgets;
