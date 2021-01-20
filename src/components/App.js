import { BrowserRouter, Route } from 'react-router-dom';

import { routes } from '../routes';
import { languages } from '../i18next';

import Layout from './Layout';
import { LocalizedRouter, LocalizedSwitch } from '../i18next/components';

export const App = () => {
  return (
    <LocalizedRouter
      RouterComponent={BrowserRouter}
      defaultLanguage={languages.Ukrainian}
    >
      <Layout>
        <LocalizedSwitch>
          {routes.map(({ component: Component, ...otherProps }) => (
            <Route key={otherProps.path} {...otherProps}>
              <Component />
            </Route>
          ))}
        </LocalizedSwitch>
      </Layout>
    </LocalizedRouter>
  );
};
