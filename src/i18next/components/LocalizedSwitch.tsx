import React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteProps, Switch } from 'react-router-dom';

const LocalizedSwitch: React.FC = ({ children }) => {
  const { i18n } = useTranslation();

  const localizePath = (path: any) => {
    switch (typeof path) {
      case 'undefined':
        return undefined;
      case 'object':
        return path.map((key: string) => `/${i18n.language}${key}`);
      default:
        const isFallbackRoute = path === '*';
        return isFallbackRoute ? path : `/${i18n.language}${path}`;
    }
  };

  return (
    <Switch>
      {React.Children.map(children, (child) =>
        React.isValidElement<RouteProps>(child)
          ? React.cloneElement(child, {
              ...child.props,
              path: localizePath(child.props.path),
            })
          : child
      )}
    </Switch>
  );
};

export default LocalizedSwitch;
