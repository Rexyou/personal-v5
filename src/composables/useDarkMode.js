import { ref, watchEffect } from 'vue'

export function useDarkMode() {
  const dark = ref(localStorage.getItem('theme') === 'dark')

  watchEffect(() => {
    document.documentElement.classList.toggle('dark', dark.value)
    localStorage.setItem('theme', dark.value ? 'dark' : 'light')
  })

  return { dark, toggle: () => (dark.value = !dark.value) }
}
