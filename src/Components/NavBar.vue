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
  <ul class="p-4 fixed md:left-10 md:top-[36vh] top-3 z-10 flex md:flex-col md:gap-4 gap-2 bg-white rounded-xl">
    <RouterLink to="/" :class="{ 'bg-[#2795a2] text-white': currentPath === '/' }">
      <li class="hover:bg-[#DAEDEC] rounded p-1 px-3 hover:border-[#2795a2] hover:border-2 border-2 border-white">Home</li>
    </RouterLink>
    <RouterLink to="/types" :class="{ 'bg-[#2795a2] text-white': currentPath === '/types' }">
      <li class="hover:bg-[#DAEDEC] rounded p-1 px-3 hover:border-[#2795a2] hover:border-2 border-2 border-white">Types</li>
    </RouterLink>
    <RouterLink to="/users" :class="{ 'bg-[#2795a2] text-white': currentPath === '/users' }">
      <li class="hover:bg-[#DAEDEC] rounded p-1 px-3 hover:border-[#2795a2] hover:border-2 border-2 border-white">Users</li>
    </RouterLink>
    <RouterLink to="/quiz/results" :class="{ 'bg-[#2795a2] text-white': currentPath === '/quiz/results' }">
      <li class="hover:bg-[#DAEDEC] rounded p-1 px-3 hover:border-[#2795a2] hover:border-2 border-2 border-white">Results</li>
    </RouterLink>
  </ul>
</template>
<style scoped>
li:hover {
  color: #2795a2;
  box-sizing:border-box;
}
</style>
