import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/devtools',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@vant/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: './',
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1.0,user-scalable=no,viewport-fit=cover' }
      ]
    }
  },
  i18n: {
    defaultLocale: 'en',
    strategy: "no_prefix",
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'zh-CN', name: '简体中文', file: 'zh_cn.json' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'all',
      alwaysRedirect: true,
      fallbackLocale: 'zh-CN'
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
