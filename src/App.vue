<script setup>
import { RouterView } from 'vue-router'
import NavBar from './Components/NavBar.vue'
</script>
<template>
  <div class="flex justify-center bg-[#fbf7ef] max-w-[100vw] min-h-screen p-8 pt-20 md:pt-8 relative">
    <NavBar />
    <!-- <RouterView /> -->
    <router-view />
  </div>
</template>
<style scoped>
* {
  font-family: 'Rubik', sans-serif;
  font-optical-sizing: auto;
  /* font-weight: ; */
  font-style: normal;
  box-sizing: border-box;
}
*::selection {
  color: white;
  background-color: #ffac8c;
  padding: 10px;
}
</style>
