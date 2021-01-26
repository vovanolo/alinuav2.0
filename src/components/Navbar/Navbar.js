import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.css';

import logo from '../../assets/icons/alin-logo.svg';

import Button from '../Button';
import { LanguageSwitcher } from '../../i18next/components';
import Container from '../Container';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt="Alin logo" />
          </div>
          <div className={styles.menuContainer}>
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>tester</li>
              <li className={styles.menuItem}>tester</li>
              <li className={styles.menuItem}>tester</li>
            </ul>
          </div>
          <div className={styles.languageSwitcherContainer}>
            <LanguageSwitcher />
          </div>
          {/* <div className={styles.contactBtnContainer}>
            <Button variant="primary">{t('global:contact-us')}</Button>
          </div> */}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;