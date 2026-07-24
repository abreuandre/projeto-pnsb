import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import pt from "./locales/pt/pt.json";
import en from "./locales/en/en.json";
import it from "./locales/it/it.json";

i18n
  .use(LanguageDetector) // detecta idioma do navegador automaticamente
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
      it: { translation: it },
    },
    fallbackLng: "pt", // idioma padrão se não detectar nenhum
    interpolation: {
      escapeValue: false, // React já escapa os valores
    },
  });

export default i18n;
