import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import { routes, urls } from '../routes';
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

          <Route path="*">
            {({ match }) => {
              const params = match ? match.params : {};
              const lang = params.lang || languages.Ukrainian;

              return <Redirect to={`/${lang}${urls.notFound}`} />;
            }}
          </Route>
        </LocalizedSwitch>
      </Layout>
    </LocalizedRouter>
  );
};
