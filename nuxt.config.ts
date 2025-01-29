// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "@nuxt/test-utils/module"],
  ssr: true,
  routeRules: {
    "/": { prerender: true },
    "/unauthorized": { prerender: true },
    "/login": { prerender: true },
  },
  // nitro: {
  //   prerender: {
  //     routes: ["/", "/unauthorized", "/login"]
  //   }
  // }
});
