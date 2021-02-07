import { Suspense } from 'react';

import PageLoader from '../PageLoader';
import Navbar from '../Navbar';

import styles from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
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
