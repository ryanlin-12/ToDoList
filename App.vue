<template>
  <div id="app">

    <header>
      <h1>Welcome to Ryan Nuxt.js App</h1>
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
  import Main from "./Main.vue";
  export default {
    name: "App",
    components: {
      Main,
    },
  };
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
  margin: 0;
  padding: 0;
}

header {
  background-color: #007bff;
  color: white;
  padding: 1rem;
}

footer {
  background-color: #f8f9fa;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}

main {
  margin: 0 30%;
  padding: 1rem;
}

</style>
