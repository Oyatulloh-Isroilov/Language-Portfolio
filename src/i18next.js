import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./assets/locales/en.json";
import ru from "./assets/locales/ru.json";
import uz from "./assets/locales/uz.json";

export const languageResours = {
  en: { translation: en },
  ru: { translation: ru },
  uz: { translation: uz },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v4",
  lang: "en",
  fallbacking: "en",
  resources: languageResours,
});

export default i18next;
