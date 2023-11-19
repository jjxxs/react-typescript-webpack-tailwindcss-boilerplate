import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import german from "./ger/translation.json";
import english from "./en/translation.json";
import log from "loglevel";

let _initialized = false;

export const languages = ["en", "ger"];

const resources = {
  en: {
    translation: english,
  },
  ger: {
    translation: german,
  },
};

export const initTranslations = () => {
  if (_initialized) return;

  const start = performance.now();

  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    })
    .then((_) => {
      document.title = i18n.t("appTitle");
      _initialized = true;
      log.info(`Translations initialized in ${performance.now() - start}ms`);
    });

  // Update document title on language change
  i18n.on("languageChanged", (lng) => {
    document.title = i18n.t("appTitle");
    log.info(`Language changed to ${lng}`);
  });
};
