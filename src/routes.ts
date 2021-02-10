import { lazy } from 'react';

// import Home from './views/Home';
// import AboutUs from './views/AboutUs';
// import NotFound from './views/NotFound';

interface IRoute {
  exact: boolean;
  path: string;
  component: React.ComponentType;
}

export const urls = {
  notFound: '/404',
  home: '/',
  aboutUs: '/about-us',
  rent: '/rent',
};

export const routes: IRoute[] = [
  {
    exact: true,
    path: urls.home,
    component: lazy(
      () => import('./views/Home' /* webpackChunkName: 'Home' */)
    ),
  },
  {
    exact: true,
    path: urls.aboutUs,
    component: lazy(
      () => import('./views/AboutUs' /* webpackChunkName: 'AboutUs' */)
    ),
  },
  {
    exact: true,
    path: urls.notFound,
    component: lazy(
      () => import('./views/NotFound' /* webpackChunkName: 'NotFound' */)
    ),
  },
  {
    exact: true,
    path: urls.rent,
    component: lazy(
      () => import('./views/Rent' /* webpackChunkName: 'Rent' */)
    ),
  },
];
