<template>
  <!-- If you have one main page (like HomePage) -->
  <HomePage />
</template>

<script>
import HomePage from "./views/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
/* Global styles can go here, or you can use separate .css files. */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
</style>
