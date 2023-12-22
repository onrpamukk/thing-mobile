import keyMirror from '@app/utils/key-mirror';
import {getLocales} from 'react-native-localize';

export interface Language {
  de: string;
  en: string;
}

const languages: Record<string, string> = keyMirror({
  en: 'en',
  de: 'de',
});

const PRIMARY_LOCALE = 'de';
export const DEVICE_LOCALE = getLocales()[0].languageTag;

const loadTranslation = (locale?: string) => {
  let translations: Record<string, string>;

  switch (locale) {
    case 'de':
      translations = require('./de/de.json');
      break;
    case 'en':
      translations = require('./en/en.json');
      break;
    default:
      translations = require('./de/de.json');
      break;
  }

  return translations;
};

export const getLocaleFromLanguage = (lang: string) => {
  const languageCode = lang.split('-')[0];
  const locale = languages[lang] || languages[languageCode] || PRIMARY_LOCALE;
  return locale;
};

export const DEFAULT_LOCALE = getLocaleFromLanguage(DEVICE_LOCALE);

export const getTranslations = (language: string) => {
  const locale = getLocaleFromLanguage(language);
  return loadTranslation(locale);
};

export function getLocalizedMessage(
  lang: string,
  id: string,
  defaultMessage?: string,
) {
  const locale = getLocaleFromLanguage(lang);
  const translations = getTranslations(locale);

  return translations[id] || defaultMessage || '';
}
