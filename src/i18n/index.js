import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import * as en from "./languages/en.json";
import * as bg from "./languages/bg.json";

let defaultLang = "en";

const selectedLang = localStorage.getItem("lang");
if (selectedLang) {
  defaultLang = selectedLang;
}

let customTranslations = localStorage.getItem("customTranslations");

if (customTranslations) {
  customTranslations = JSON.parse(customTranslations);

  for (const translation of customTranslations) {
    if (translation.value && translation.value !== "") {
      if (en.default.hasOwnProperty(translation.targetLabel)) {
        en.default[translation.targetLabel] = translation.value;
      }
      if (bg.default.hasOwnProperty(translation.targetLabel)) {
        bg.default[translation.targetLabel] = translation.value;
      }
    }
  }
}

i18n.use(LanguageDetector).init({
  lng: defaultLang,
  // we init with resources
  resources: {
    en: en,
    he: he,
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