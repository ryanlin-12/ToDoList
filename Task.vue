<template>
    <div class="task">
        <input type="checkbox" v-model="task.completed" @change="toggleTask" />
        <span :class="{ completed: task.completed }">{{ task.title }}</span>
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
template {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
    width: 50%;
    background-color: #444;
}
.completed {
    color: #aaaaaa;
}
.task {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
}
.task button {
    border: 0;
    background: 0;
}
</style>