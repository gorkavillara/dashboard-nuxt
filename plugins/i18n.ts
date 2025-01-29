import { createI18n } from "vue-i18n";
import es from "../locales/es.json";
import en from "../locales/en.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "es",
    messages: {
      es,
      en,
    },
  });

  vueApp.use(i18n);
});
