import { BrowserRouter, Route } from 'react-router-dom';

import { routes } from '../routes';
import { languages } from '../i18next';

import { Layout } from './Layout';
import { LocalizedRouter, LocalizedSwitch } from '../i18next/components';

export const App = () => {
  return (
    <LocalizedRouter
      RouterComponent={BrowserRouter}
      defaultLanguage={languages.ukrainian}
    >
      <Layout>
        <LocalizedSwitch>
          {routes.map(({ exact, path, component: Component }) => (
            <Route key={path} exact={exact} path={path}>
              <Component />
            </Route>
          ))}
        </LocalizedSwitch>
      </Layout>
    </LocalizedRouter>
  );
};