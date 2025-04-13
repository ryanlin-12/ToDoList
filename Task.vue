<template>
    <div class="list flex justify-between items-center p-4 border-b" 
         :class="{ 
           'border-gray-200 bg-white': !themeStore.isDarkMode,
           'border-gray-700 bg-gray-600': themeStore.isDarkMode
         }">
        <div class="flex items-center">
            <input 
                type="checkbox" 
                :checked="task.completed" 
                @change="toggleTask" 
                class="mr-2 w-5 h-5 cursor-pointer"
            >
            <div>
                <span 
                    class="text-lg flex items-center"
                    :class="{ 
                        'text-gray-400': task.completed && !themeStore.isDarkMode,
                        'text-gray-500': task.completed && themeStore.isDarkMode,
                        'text-black': !task.completed && !themeStore.isDarkMode,
                        'text-white': !task.completed && themeStore.isDarkMode
                    }" 
                    >
                    {{ task.title }}
                </span>
                <!-- 顯示到期時間 -->
                <div v-if="task.dueDate" class="text-sm mt-1 text-left"
                    :class="{
                        'text-gray-500': !themeStore.isDarkMode,
                        'text-gray-300': themeStore.isDarkMode
                    }">
                    Due: {{ formatDate(task.dueDate) }}
                </div>
            </div>
        </div>
        <button 
            @click="removeTask" 
            class="px-4 py-2 w-10 bg-transparent border-none rounded-full cursor-pointer text-center"
            :class="{
                'text-black hover:bg-gray-200': !themeStore.isDarkMode,
                'text-white hover:bg-gray-700': themeStore.isDarkMode
            }"
            >
            X
        </button>
    </div>
</template>

<script>
import { useThemeStore } from './stores/theme';

export default {
    name: 'Task',
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    setup() {
        const themeStore = useThemeStore();
        return { 
            themeStore 
        };
    },
    methods: {
        toggleTask() {
            this.$emit('toggle-task', this.task);
        },
        removeTask() {
            this.$emit('remove-task', this.task);
        },
        formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleString(); // 你也可以客製化格式，例如 toLocaleDateString()
        }
    }
}
</script>