<script setup>
import { computed, ref } from 'vue'
import { personalityTypes } from '@/PersonalityTypes'


const searchInput = ref('')
const filteredTypes = computed(() => {
  return personalityTypes.filter(
    (type) => type.type.toLowerCase().includes(searchInput.value.toLowerCase()),
    // || type.nickname.toLowerCase().includes(searchInput.value.toLowerCase()) ||
    // type.description.toLowerCase().includes(searchInput.value.toLowerCase())
  )
})
</script>
<template>
  <div class="text-black md:w-[50vw] w-[80vw] flex flex-col items-center relative">
    <input
      type="search"
      placeholder="Search Personality Types eg.INFP"
      class="md:w-[50%] w-[100%] mb-4 p-2 px-4 bg-white text-black border-black border-1 rounded-4xl focus:outline-none"
      v-model="searchInput"
    />
    <h1 class="text-2xl mb-4 font-semibold text-left text-[#F54927]">Personality Types</h1>
    <table class="w-full">
      <tbody class="w-full bg-gray-800">
        <tr class="text-[#A3FFB2]">
          <td class="rounded-md md:rounded-xl">Type</td>
          <td class="rounded-md md:rounded-xl">Nickname</td>
          <td class="rounded-md md:rounded-xl">Description</td>
        </tr>
        <tr v-for="data in filteredTypes" :key="data.type" class="text-white">
          <td class="rounded-md md:rounded-xl">{{ data.type }}</td>
          <td class="rounded-md md:rounded-xl">{{ data.nickname }}</td>
          <td class="rounded-md md:rounded-xl">{{ data.description }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="filteredTypes.length === 0" class="text-center w-full mt-3">No types found with {{ `"${searchInput}"` }}</p>
    <a href="https://en.wikipedia.org/?curid=93566" target='blank'>
      <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@1.5x.png" alt="wiki logo" class="w-[20px] md:w-[40px] absolute top-15 md:top-4 right-4">
    </a>
  </div>
</template>
<style scoped>
tr {
  border-bottom: 1px solid white;
}
td {
  padding: 8px;
  word-wrap: break-word;
}
tbody > tr:first-child {
  font-size: 1.2em;
  font-weight: bold;
}
tr > td {
  border: 1px solid white;
  font-size: 1.2rem;
}
tr > td:first-child {
  width: 15%;
  text-align: center;
}
tr > td:nth-child(2) {
  width: 25%;
}
tr > td:nth-child(3) {
  width: 60%;
}
</style>
