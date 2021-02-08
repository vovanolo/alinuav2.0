import { useTranslation } from 'react-i18next';
import { useLocation, useHistory } from 'react-router-dom';

import { Language } from '../../enum/language';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const history = useHistory();

  const changeLanguage = (lang: Language) => {
    const path = pathname.split(i18n.language)[1];

    i18n
      .changeLanguage(lang)
      .then(() => history.replace(`/${i18n.language}${path}`));
  };

  return (
    <div>
      <span>{i18n.language}</span>
      <ul>
        {Object.values(Language).map((lang: Language) => {
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
