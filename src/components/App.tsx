import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import { routes, urls } from '../routes';
import { Languages } from '../i18next/languages';

import Layout from './Layout';
import { LocalizedRouter, LocalizedSwitch } from '../i18next/components';

export const App: React.FC = () => {
  return (
    <LocalizedRouter
      RouterComponent={BrowserRouter}
      defaultLanguage={Languages.Ukrainian}
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
              const lang = params.lang || Languages.Ukrainian;

              return <Redirect to={`/${lang}${urls.notFound}`} />;
            }}
          </Route>
        </LocalizedSwitch>
      </Layout>
    </LocalizedRouter>
  );
};
