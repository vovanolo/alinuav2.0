import { Suspense } from 'react';

import { LanguageSwitcher } from '../../i18next/components';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <Suspense fallback={() => <h1>Loading...</h1>}>
      <div className={styles.container}>
        <LanguageSwitcher />
        <hr />
        {children}
      </div>
    </Suspense>
  );
};

export default Layout;
