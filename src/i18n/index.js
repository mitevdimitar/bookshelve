import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import * as en from "./languages/en.json";
import * as bg from "./languages/bg.json";

let defaultLang = "en";

const selectedLang = localStorage.getItem("lang");
if (selectedLang) {
  defaultLang = selectedLang;
}

i18n.use(LanguageDetector).init({
  lng: defaultLang,
  // we init with resources
  resources: {
    en: en,
    bg: bg,
  },
  fallbackLng: "en",
  debug: true,

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    // formatSeparator: ","
  },

  react: {
    wait: true,
  },
});

export default i18n;