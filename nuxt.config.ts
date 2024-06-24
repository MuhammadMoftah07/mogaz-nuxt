// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@sidebase/nuxt-auth",
    "@formkit/auto-animate/nuxt",
  ],
  auth: {
    baseURL: process.env.BASE_URL,
    provider: {
      type: "local",
      endpoints: {
        signIn: { path: "/admin/login", method: "post" },
        signOut: false,
        signUp: { path: "/admin/store", method: "post" },
        getSession: { path: "/admin", method: "get" },
        // refresh: { path: '/refresh', method: 'post' },
      },
      token: {
        signInResponseTokenPointer: "/response/token",
        maxAgeInSeconds: 34560000, // 400 days, the maximum allowed by the browser
      },
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "https://api.example.com/",
      envMode: process.env.envMode || "dev",
    },
  },
  css: ["assets/css/custom.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
