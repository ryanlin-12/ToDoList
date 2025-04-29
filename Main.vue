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
      <!-- 添加任務的輸入區 -->
      <div>
        <!-- 任務文字輸入 -->
        <input 
          type="text" 
          v-model="newTask" 
          @keyup.enter="addTask" 
          placeholder="Enter a new task"
          :class="{
            'bg-gray-200': !themeStore.isDarkMode, 
            'bg-gray-700 text-white placeholder-gray-400': themeStore.isDarkMode
          }"
          class="shadow-md p-5 mr-2 rounded-full focus:outline-none w-1/3 h-10"
        />
  
        <!-- 新增：設定時間按鈕 -->
        <button 
          @click="showDateTimePicker = true"
          :class="{
            'bg-yellow-400': !themeStore.isDarkMode,
            'bg-yellow-600': themeStore.isDarkMode
          }"
          class="shadow-md p-2 text-white rounded-full hover:bg-yellow-500 w-1/6 mr-2"
        >
          設定時間
        </button>
  
        <!-- 新增：新增任務按鈕 -->
        <button 
          @click="addTask" 
          :class="{
            'bg-blue-500': !themeStore.isDarkMode, 
            'bg-blue-700': themeStore.isDarkMode
          }"
          class="shadow-md p-2 text-white rounded-full hover:bg-blue-700 w-1/6"
        >
          Add Task
        </button>
      </div>
  
      <hr class="mt-4">
  
      <!-- 任務列表 -->
      <div v-if="tasks.length" class="mt-1">
        <Task 
          v-for="task in tasks" 
          :key="task.id" 
          :task="task" 
          @toggle-task="toggleTask"
          @remove-task="removeTask" 
        />
        <button 
          v-if="hasCompletedTasks" 
          @click="removeCompletedTasks" 
          :class="{'bg-red-600': !themeStore.isDarkMode, 'bg-red-700': themeStore.isDarkMode}"
          class="mt-4 text-white py-2 px-4 rounded-full hover:bg-red-700 shadow-md"
        >
          Clear Completed Tasks
        </button>
      </div>
      <p v-else 
        :class="{'text-black': !themeStore.isDarkMode, 'text-white': themeStore.isDarkMode}" 
        class="mt-4"
      >
        No tasks yet. Add one above!
      </p>
  
      <!-- 新增：時間選擇的小 Dialog -->
      <div v-if="showDateTimePicker" class="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
        <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg w-80">
          <h2 class="text-lg font-bold mb-4 text-center">選擇日期與時間 📅</h2>
  
          <input 
            type="date" 
            v-model="selectedDate" 
            class="mb-4 w-full p-2 rounded border"
          />
  
          <input 
            type="time" 
            v-model="selectedTime" 
            class="mb-4 w-full p-2 rounded border"
          />
  
          <div class="flex justify-between">
            <button @click="confirmDateTime" class="bg-green-500 text-white p-2 rounded hover:bg-green-600">
              確認
            </button>
            <button @click="showDateTimePicker = false" class="bg-red-400 text-white p-2 rounded hover:bg-red-500">
              取消
            </button>
          </div>
        </div>
      </div>
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
        tasks: [],
        newTask: "",
        newDueDate: "", // 這個保留
        showDateTimePicker: false, // 控制時間選擇器 Dialog
        selectedDate: "", // 選的日期
        selectedTime: "", // 選的時間
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
          dueDate: this.newDueDate || null,
        });
        this.newTask = "";
        this.newDueDate = "";
      },
      toggleTask(taskToToggle) {
        this.tasks = this.tasks.map((task) => {
          if (task.id === taskToToggle.id) {
            task.completed = !task.completed;
          }
          return task;
        });
        this.tasks = [
          ...this.tasks.filter((task) => !task.completed),
          ...this.tasks.filter((task) => task.completed),
        ];
      },
      removeTask(taskToRemove) {
        this.tasks = this.tasks.filter((task) => task.id !== taskToRemove.id);
      },
      removeCompletedTasks() {
        this.tasks = this.tasks.filter(task => !task.completed);
      },
      confirmDateTime() {
        if (this.selectedDate && this.selectedTime) {
          this.newDueDate = `${this.selectedDate} ${this.selectedTime}`;
        }
        this.showDateTimePicker = false;
      }
    }
  };
  </script>
  