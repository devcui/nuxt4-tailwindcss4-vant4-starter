import type { CookieRef } from "#app"

export const useTheme = () => {
  const mode = useColorMode()
  const isDark = computed(() => mode.value === 'dark')

  const theme: CookieRef<'light' | 'dark'> = useCookie('theme', { sameSite: 'lax' })
  if (!theme.value) {
    theme.value = isDark.value ? 'dark' : 'light'
  }

  const toggleTheme = () => {
    mode.preference = isDark.value ? 'light' : 'dark'
    theme.value = isDark.value ? 'light' : 'dark'
  }

  return { theme, isDark, toggleTheme }
}
