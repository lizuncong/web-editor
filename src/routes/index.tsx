import { lazy } from 'react';
import { createHashRouter } from 'react-router';

import ROUTE_PATH from './constant';
const Home = lazy(() => import(/* webpackChunkName: 'home' */ '../pages/Home'));
const Editor = lazy(() => import(/* webpackChunkName: 'dashboard' */ '../pages/Editor'));

const router = createHashRouter([
  { index: true, Component: Home },
  {
    Component: Editor,
    path: ROUTE_PATH.editor,
    children: [],
  },
]);

export default router;
