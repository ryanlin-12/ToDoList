<template>
  <div id="app" :class="{ 'dark-mode': darkMode }">
    <header>
      <Header v-model="darkMode" />
    </header>

    <main>
      <nuxt />
      <Main />
    </main>

    <footer>
      <p>&copy; 2025 My Nuxt.js App</p>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';
import Main from "./Main.vue";
import Header from "./Header.vue";

export default {
  name: "App",
  components: {
    Main,
    Header,
  },
  setup() {
    const darkMode = ref(false);
    return { 
      darkMode 
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  transition: all 0.3s ease;
}

/* 亮色模式（默認） */
#app {
  background-color: white;
  color: #333;
}

/* 深色模式 */
#app.dark-mode {
  background-color: #1a1a1a;
  color: #fff;
}

#app.dark-mode header {
  background-color: #2c2c2c;
}

#app.dark-mode footer {
  background-color: #2c2c2c;
  color: #fff;
}

#app.dark-mode main {
  background-color: #1a1a1a;
}

header {
  background-color: #007bff;
  color: white;
  padding: 1rem;
  transition: background-color 0.3s ease;
}

footer {
  background-color: #f8f9fa;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  transition: background-color 0.3s ease;
}

main {
  margin: 0 30%;
  padding: 1rem;
  transition: background-color 0.3s ease;
}
</style>
