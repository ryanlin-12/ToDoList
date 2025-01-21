<template>
  <div 
    class="font-sans text-center text-gray-800 m-0 p-0 min-h-screen transition-all duration-300 ease"
    :class="{
      'bg-white': !themeStore.isDarkMode,
      'bg-gray-800': themeStore.isDarkMode,
      'text-black': !themeStore.isDarkMode,
      'text-white': themeStore.isDarkMode
    }">
    <header>
      <Header />
    </header>

    <main>
      <nuxt />
      <Main />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import { useThemeStore } from "@/stores/theme";
import Main from "./Main.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "App",
  components: {
    Main,
    Header,
    Footer,
  },
  setup() {
    const themeStore = useThemeStore();
    return {
      themeStore,
    };
  },
};
</script>

<style>
/* #app.dark-mode footer {
  background-color: #2c2c2c;
  color: #fff;
}
footer {
  background-color: #f8f9fa;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  transition: background-color 0.3s ease;
} */
</style>
