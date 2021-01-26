import { lazy } from 'react';

// import Home from './views/Home';
// import AboutUs from './views/AboutUs';
// import NotFound from './views/NotFound';

export const urls = {
  notFound: '/404',
  home: '/',
  aboutUs: '/about-us',
};

export const routes = [
  {
    exact: true,
    path: urls.home,
    component: lazy(() =>
      import('./views/Home' /* webpackChunkName: 'Home' */),
    ),
  },
  {
    exact: true,
    path: urls.aboutUs,
    component: lazy(() =>
      import('./views/AboutUs' /* webpackChunkName: 'AboutUs' */),
    ),
  },
  {
    exact: true,
    path: urls.notFound,
    component: lazy(() =>
      import('./views/NotFound' /* webpackChunkName: 'NotFound' */),
    ),
  },
];
