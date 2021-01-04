import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as localizations from './localizations';
import langs from './languages.json';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    lng: langs.ukrainian,
    resources: localizations,
    supportedLngs: Object.values(langs)
  });

export const languages = langs;

export default i18n;