import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as localizations from './localizations';
import { Language } from './enum/language';

i18n.use(initReactI18next).init({
  debug: true,
  lng: Language.Ukrainian,
  fallbackLng: Language.Ukrainian,
  resources: localizations,
  supportedLngs: Object.values(Language),
});

export default i18n;
