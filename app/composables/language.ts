import { Locale } from 'vant';

const i18nMap = {
  zh_cn: 'zh-CN',
  en: 'en-US',
}

export const useLanguage = () => {
  const { locale, setLocale } = useI18n()

  const lang = useCookie('locale', { sameSite: 'lax' })
  if (!lang.value) {
    lang.value = locale.value
  }

  const changeLanguage = (lang: keyof typeof i18nMap) => {
    setLocale(lang)
    Locale.use(i18nMap[lang])
  }

  return {
    changeLanguage
  }

}
