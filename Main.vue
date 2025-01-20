<template>
    <div>
        <!-- 添加任務的輸入框 -->
        <div>
            <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Enter a new task" class="shadow-md" />
            <button @click="addTask" class="shadow-md">Add Task</button>
        </div>

        <!-- 任務列表部分 -->
        <div v-if="tasks.length" class="mt-4">            
            <Task 
                v-for="task in tasks" 
                :key="task.id" 
                :task="task" 
                @toggle-task="toggleTask" 
                @remove-task="removeTask" 
            />
            <!-- 新增：只在有已完成任務時顯示清除按鈕 -->
            <button 
                v-if="hasCompletedTasks" 
                @click="removeCompletedTasks"
                class="clear-completed-btn"
            >
                Clear Completed Tasks
            </button>
        </div>
        <p v-else class="mt-4">No tasks yet. Add one above!</p>
    </div>
</template>

<script>
import Task from "./Task.vue";

export default {
    name: "Main",
    components: {
        Task,
    },
    data() {
        return {
            tasks: [], // 初始化為空的任務列表
            newTask: "", // 存儲新任務的輸入內容
        };
    },

    computed: {
        hasCompletedTasks() {
            return this.tasks.some(task => task.completed);
        }
    },

    methods: {
        addTask() {
            if (this.newTask.trim() === "") return;
            this.tasks.push({
                id: Date.now(),
                title: this.newTask.trim(),
                completed: false,
            });
            this.newTask = "";
        },
        toggleTask(taskToToggle) {
            // 修改 this.tasks 中的任務完成狀態
            this.tasks = this.tasks.map((task) => {
                if (task.id === taskToToggle.id) {
                    if (!task.completed) {
                        task.completed = true;
                    } else {
                        task.completed = false;
                    }
                }
                return task;
            });
            // 將已完成的任務移到列表末尾
            this.tasks = [
                ...this.tasks.filter((task) => !task.completed),
                ...this.tasks.filter((task) => task.completed),
            ];
        },
        removeTask(taskToRemove) {
            this.tasks = this.tasks.filter((task) => task.id !== taskToRemove.id);
            console.log(this.tasks);
        },
        removeCompletedTasks() {
            this.tasks = this.tasks.filter(task => !task.completed);
        }
    }
};
</script>

<style scoped>
    input[type="text"] {
        padding: 0.5rem;
        width: 70%;
        margin-right: 0.5rem;
        background-color: #eee;
        border-radius: 20px;
    }
    input[type="text"]:focus {
        outline: none;
    }
    ::placeholder {
        color: #ccc;
    }
    button {
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
    .clear-completed-btn {
    margin: 1rem 0;
    background-color: #dc3545;
    }
    .clear-completed-btn:hover {
        background-color: #c82333;
    }
</style>
