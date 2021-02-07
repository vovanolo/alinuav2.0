import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as localizations from './localizations';
import { Languages } from './languages';

i18n.use(initReactI18next).init({
  debug: true,
  lng: Languages.Ukrainian,
  fallbackLng: Languages.Ukrainian,
  resources: localizations,
  supportedLngs: Object.values(Languages),
});

export default i18n;
