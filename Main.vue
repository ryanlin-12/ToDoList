<template>
    <div 
        :class="{
            'bg-white': !themeStore.isDarkMode, 
            'bg-gray-600': themeStore.isDarkMode,
            'text-black': !themeStore.isDarkMode,
            'text-white': themeStore.isDarkMode
        }" 
        class="shadow-lg rounded-xl p-6 w-1/2 mx-auto mt-8"
    >
        <!-- 添加任務的輸入框 -->
        <div>
            <input 
                type="text" 
                v-model="newTask" 
                @keyup.enter="addTask" 
                placeholder="Enter a new task"
                :class="{'bg-gray-200': !themeStore.isDarkMode, 'bg-gray-700 text-white placeholder-gray-400': themeStore.isDarkMode}"
                class="shadow-md p-2 mr-2 rounded-full focus:outline-none w-3/4"
            />
            <button 
                @click="addTask" 
                :class="{'bg-blue-500': !themeStore.isDarkMode, 'bg-blue-700': themeStore.isDarkMode}"
                class="shadow-md p-2 text-white rounded-full hover:bg-blue-700 w-1/5">
                Add Task
            </button>
        </div>

        <hr class="mt-4">

        <!-- 任務列表部分 -->
        <div v-if="tasks.length" class="mt-1">
            <Task 
                v-for="task in tasks" 
                :key="task.id" 
                :task="task" 
                @toggle-task="toggleTask"
                @remove-task="removeTask" 
            />
            <!-- 有已完成任務時，顯示清除按鈕 -->
            <button 
                v-if="hasCompletedTasks" 
                @click="removeCompletedTasks" 
                :class="{'bg-red-600': !themeStore.isDarkMode, 'bg-red-700': themeStore.isDarkMode}"
                class="mt-4 text-white py-2 px-4 rounded-full hover:bg-red-700 shadow-md">
                Clear Completed Tasks
            </button>
        </div>
        <p v-else 
            :class="{'text-black': !themeStore.isDarkMode, 'text-white': themeStore.isDarkMode}" 
            class="mt-4"
            >
            No tasks yet. Add one above!
        </p>
    </div>
</template>

<script>
import Task from "./Task.vue";
import { useThemeStore } from "@/stores/theme";

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
    setup() {
        const themeStore = useThemeStore();
        return {
            themeStore,
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
