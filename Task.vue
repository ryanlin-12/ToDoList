<template>
    <div class="list">
        <div class="task-content">
            <input type="checkbox" :checked="task.completed" @change="toggleTask" class="mr-2">
            <span :class="{ completed: task.completed }">{{ task.title }}</span>
        </div>
        <button @click="removeTask">X</button>
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
        color: #ccc;
    }
    button {
        padding: 0.5rem 1rem;
        width: 5rem;
        background-color: transparent; /*#007bff*/
        color: black;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }
    button:hover {
        background-color: #eee;
    }
    .list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid #eee;
    }
    .task-content {
        display: flex; /* 使用 flex 將子元素排成一行 */
        align-items: center; /* 垂直置中 */
    }
    span {
        font-size: 20px;
    }
    input[type="checkbox"] {
        width: 20px;
        height: 20px;
    }
</style>