<template>
    <div>
        <h1 
            class="bg-blue-500 text-white p-4 transition-colors duration-300 ease-in-out"
            :class="{ 'bg-gray-700': themeStore.isDarkMode}">
            Welcome to Ryan Nuxt.js App
        </h1>
        <div>
            <DarkmodeSwitcher 
              class="absolute right-0 top-0.5 m-4"
            />
        </div>
    </div>
</template>

<script>
import DarkmodeSwitcher from "./Darkmode Switcher.vue"
import { useThemeStore } from '@/stores/theme'

export default {
    components: {
        DarkmodeSwitcher
    },
    setup() {
        const themeStore = useThemeStore()
        return {
            themeStore
        }
    }
}
</script>