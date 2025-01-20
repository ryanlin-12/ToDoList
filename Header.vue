<template>
    <div style="display: flex;">
        <h1>Welcome to Ryan Nuxt.js App</h1>
        <DarkmodeSwitcher 
            :model-value="modelValue" 
            @update:model-value="$emit('update:modelValue', $event)" 
        />
    </div>
</template>

<script>
import DarkmodeSwitcher from "./Darkmode Switcher.vue";

export default {
    name: "Header",
    components: {
        DarkmodeSwitcher,
    },
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>