import {initReactI18next} from 'react-i18next';
import {NativeModules, Platform} from 'react-native';
import Const from 'constants/common';
import i18n from 'i18next';

import en from './en';
import ja from './ja';

const resources = {
  en,
  ja,
};

const LANG_CODES = Object.keys(resources);

const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: async (callback: any) => {
    try {
      const deviceLanguage =
        Platform.OS === 'ios'
          ? NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
          : NativeModules.I18nManager.localeIdentifier;

      const lang = deviceLanguage.slice(0, 2);
      const currentLanguage = LANG_CODES.includes(lang)
        ? lang
        : Const.DEFAULT_LOCALE;

      return callback(currentLanguage);
    } catch (error) {
      callback(Const.DEFAULT_LOCALE);
    }
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
