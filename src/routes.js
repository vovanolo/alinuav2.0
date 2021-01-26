import Home from './views/Home';
import AboutUs from './views/AboutUs';

export const urls = {
  notFound: '/404',
  home: '/',
  aboutUs: '/about-us',
};

export const routes = [
  {
    exact: true,
    path: urls.home,
    component: Home,
  },
  {
    exact: true,
    path: urls.aboutUs,
    component: AboutUs,
  },
  {
    exact: true,
    path: urls.notFound,
    component: () => <h1>Not found</h1>,
  },
];
