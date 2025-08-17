<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = ref(route.path)

watch(() => route.path, (newPath) => {
  currentPath.value = newPath
  console.log(currentPath.value)
})
</script>
<template>
  <ul class="bg-black md:p-4 top-4 w-[60vw] md:w-auto text-[#808082] rounded fixed md:left-3 md:top-3 md:bottom-3 z-10 flex md:flex-col md:gap-4 md:justify-center gap-2-xl">
    <RouterLink to="/" :class="{ 'bg-[#2795a2] text-white': currentPath === '/' }" class="flex items-center justify-center gap-1 hover:text-[#eeedf2] p-3 rounded hover:bg-[#272727] grow md:grow-0" title="home">
      <i class="fa-solid fa-home"></i>
    </RouterLink>
    <RouterLink to="/users" :class="{ 'bg-[#2795a2] text-white': currentPath === '/users' }" class="flex items-center justify-center gap-1 hover:text-[#eeedf2] p-3 rounded hover:bg-[#272727] grow md:grow-0" title="users">
      <i class="fa-solid fa-user"></i>
    </RouterLink>
    <RouterLink to="/quiz/results" :class="{ 'bg-[#2795a2] text-white': currentPath === '/quiz/results' }" class="flex items-center justify-center gap-1 hover:text-[#eeedf2] p-3 rounded hover:bg-[#272727] grow md:grow-0" title="results">
      <i class="fa-solid fa-square-poll-vertical"></i>
    </RouterLink>
    <RouterLink to="/types" :class="{ 'bg-[#2795a2] text-white': currentPath === '/types' }" class="flex items-center justify-center gap-1 hover:text-[#eeedf2] p-3 rounded hover:bg-[#272727] grow md:grow-0" title="types">
      <i class="fa-solid fa-circle-info"></i>
    </RouterLink>
    <!-- <RouterLink to="/types" :class="{ 'bg-[#2795a2] text-white': currentPath === '/types' }">
      <li class="hover:bg-[#DAEDEC] p-1 px-3">Types</li>
    </RouterLink>
    <RouterLink to="/users" :class="{ 'bg-[#2795a2] text-white': currentPath === '/users' }">
      <li class="hover:bg-[#DAEDEC] p-1 px-3">Users</li>
    </RouterLink>
    <RouterLink to="/quiz/results" :class="{ 'bg-[#2795a2] text-white': currentPath === '/quiz/results' }">
      <li class="hover:bg-[#DAEDEC] p-1 px-3">Results</li>
    </RouterLink> -->
  </ul>
</template>
<style scoped>
li:hover {
  color: #2795a2;
  box-sizing:border-box;
}
</style>
