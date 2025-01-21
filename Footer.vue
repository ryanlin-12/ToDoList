<template>
    <p 
        class="text-center text-gray-800 m-0 p-0 py-4 absolute bottom-0 w-full" 
        :class="{
        'bg-gray-100': !themeStore.isDarkMode,
        'bg-gray-700': themeStore.isDarkMode,
        'text-black': !themeStore.isDarkMode,
        'text-white': themeStore.isDarkMode
        }"
        >
        &copy; 2023 ToDoList. All rights reserved.
    </p>
</template>

<script>
import { useThemeStore } from '@/stores/theme'
export default {
    name: 'Footer',
    setup() {
        const themeStore = useThemeStore()
        return { themeStore }
    }
}
</script>