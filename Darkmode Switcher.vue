<template>
  <div>
    <UToggle
      v-model="themeStore.isDarkMode"
      label="Dark Mode"
      active-text="On"
      inactive-text="Off"
    />
  </div>
</template>

<script>
import { useThemeStore } from '@/stores/theme'

export default {
  setup() {
    const themeStore = useThemeStore()
    return { themeStore }
  }
}
</script>