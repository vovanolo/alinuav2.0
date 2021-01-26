import { Suspense } from 'react';

import PageLoader from '../PageLoader';
import Navbar from '../Navbar';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className={styles.container}>
        <Navbar />
        {children}
      </div>
    </Suspense>
  );
};

export default Layout;
