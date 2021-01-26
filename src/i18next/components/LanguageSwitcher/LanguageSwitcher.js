import { useTranslation } from 'react-i18next';
import { useLocation, useHistory } from 'react-router-dom';

import languages from '../../languages';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const history = useHistory();

  const changeLanguage = (lang) => {
    const path = pathname.split(i18n.language)[1];

    i18n
      .changeLanguage(languages[lang])
      .then(() => history.replace(`/${i18n.language}${path}`));
  };

  return (
    <div>
      <span>{i18n.language}</span>
      <ul>
        {Object.keys(languages).map((lang) => {
          return (
            <li key={lang}>
              <button onClick={() => changeLanguage(lang)}>{lang}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
