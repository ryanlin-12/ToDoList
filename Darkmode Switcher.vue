<template>
  <div>
    <UToggle 
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
      label="Dark Mode" 
      active-text="On" 
      inactive-text="Off" 
    />
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>