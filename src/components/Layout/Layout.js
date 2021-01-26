import { Suspense } from 'react';

import { LanguageSwitcher } from '../../i18next/components';
import PageLoader from '../PageLoader';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className={styles.container}>
        <LanguageSwitcher />
        <hr />
        {children}
      </div>
    </Suspense>
  );
};

export default Layout;
