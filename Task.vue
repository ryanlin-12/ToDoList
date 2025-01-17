<template>
    <div class="m-2 p-2 bg-gray-200 rounded flex items-center">
        <input type="checkbox" v-model="task.completed" @change="toggleTask" class="mr-2" />
        <span :class="{ completed: task.completed }" class="flex-grow break-words">{{ task.title }}</span>
        <button @click="removeTask" class="px-2 py-1 bg-red-600 text-white rounded ml-2 hover:bg-red-900">Remove</button>
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