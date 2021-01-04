import { Suspense } from 'react';

import { LanguageSwitcher } from '../../i18next/components';

export const Layout = ({ children }) => {
  return (
    <Suspense fallback={() => <h1>Loading...</h1>}>
      <LanguageSwitcher />
      <hr />
      {children}
    </Suspense>
  );
};