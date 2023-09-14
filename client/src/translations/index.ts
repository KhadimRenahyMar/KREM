import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import frTranslation from "./fr.json";
import enTranslation from "./en.json";

import LanguageDetector from 'i18next-browser-languagedetector';

enum ILanguage {
  fr = "fr",
  en = "en",
}

const resources = {
  fr: {
    translation: frTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

const lang = navigator.language;

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ns: ["translation"],
    resources,
    lng: lang,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export { ILanguage, i18n };
