import { Route, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { urls } from '../../routes';
import { Languages } from '../languages';

interface IProps {
  RouterComponent: React.ComponentType;
  defaultLanguage: Languages;
}

const LocalizedRouter: React.FC<IProps> = ({
  RouterComponent,
  defaultLanguage,
  children,
}) => {
  const { i18n } = useTranslation();

  return (
    <RouterComponent>
      <Route path="/:lang([a-z]{2})">
        {({ location }) => {
          const lang = i18n.language || defaultLanguage;

          const { pathname } = location;

          if (!pathname.includes(`/${lang}/`)) {
            return <Redirect to={`/${lang}${urls.notFound}`} />;
          }

          return children;
        }}
      </Route>
    </RouterComponent>
  );
};

export default LocalizedRouter;
