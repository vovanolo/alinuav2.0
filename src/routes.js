import Home from './views/Home';
import AboutUs from './views/AboutUs';

export const urls = {
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
];
