import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import frTranslation from "./fr.json";

import LanguageDetector from 'i18next-browser-languagedetector';

enum ILanguage {
  fr = "fr",
}

const resources = {
  fr: {
    translation: frTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ns: ["translation"],
    resources,
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export { ILanguage, i18n };
