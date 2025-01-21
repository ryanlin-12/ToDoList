// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/ToDoList/', // 如果部署在子目錄，設置為子目錄名稱
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-01-17',
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
  ],
})