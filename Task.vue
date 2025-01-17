<template>
    <div class="m-2 p-2 rounded flex items-center">
        <UCheckbox :model-value="task.completed" @update:model-value="toggleTask"  :label="task.title" />
        <button @click="removeTask" class="px-2 py-1 bg-red-600 text-white rounded ml-2 hover:bg-red-900">Remove</button>
        <UButton>Button</UButton>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    methods: {
        toggleTask() {
            this.$emit('toggle-task', this.task);
        },
        removeTask() {
            this.$emit('remove-task', this.task);
        }
    }
}
</script>

<style scoped>
.completed {
    color: #aaaaaa;
}
</style>