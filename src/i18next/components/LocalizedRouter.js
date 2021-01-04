import { Route, Redirect } from 'react-router-dom';

export const LocalizedRouter = ({ RouterComponent, defaultLanguage, children }) => {
  return (
    <RouterComponent>
      <Route path="/:lang([a-z]{2})">
        {({ match, location }) => {
          const params = match ? match.params : {};
          const lang = params.lang || defaultLanguage;

          const { pathname } = location;

          if (!pathname.includes(`/${lang}/`)) {
            return <Redirect to={`/${lang}/`} />
          }

          return children;
        }}
      </Route>
    </RouterComponent>
  )
}