import { lazy } from 'react';

import { IRoute } from './interfaces';

export const urls = {
  home: '/',
};

export const routes: IRoute[] = [
  {
    path: urls.home,
    exact: true,
    component: lazy(
      () => import('./views/Home' /* webpackChunkName: 'Home' */)
    ),
  },
];
