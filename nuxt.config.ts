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
    '@pinia/nuxt'
  ],
  imports: {
    autoImport: true,
    dirs: ['~/stores', '~/composables', '~/components']
  },
  components: [{ path: '~/components', pathPrefix: false }],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/fonts.css',
  ],
  app: {
    baseURL: './',
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1.0,user-scalable=no,viewport-fit=cover' }
      ]
    }
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  i18n: {
    defaultLocale: 'zh_cn',
    strategy: "no_prefix",
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'zh_cn', name: '简体中文', file: 'zh_cn.json' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      redirectOn: 'all',
      alwaysRedirect: true,
      fallbackLocale: 'zh_cn'
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'cookie',
    storageKey: 'theme'
  },
  vant: {
    lazyload: {
      lazyComponent: true,
      lazyImage: true
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
