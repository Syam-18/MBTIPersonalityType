<script setup>
import { useAnswers } from '@/stores/results'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

const { usersList } = storeToRefs(useAnswers())
const searchInput = ref('')

const filteredUsers = computed(() =>
  usersList.value.filter(
    (user) =>
      user.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      getPersonalityFromTraits(user.traitsCount).toLowerCase().includes(searchInput.value.toLowerCase()),
  ),
)

function getPersonalityFromTraits(t) {
  return [
    t.I >= t.E ? 'I' : 'E',
    t.S >= t.N ? 'S' : 'N',
    t.T >= t.F ? 'T' : 'F',
    t.J >= t.P ? 'J' : 'P',
  ].join('')
}

const genderIcon = (gender) => {
  if (gender === 'Male') {
    return 'fa-solid fa-mars text-blue-400'
  }
  else {
    return 'fa-solid fa-venus text-pink-400'
  }
}

</script>
<template>
  <div class="text-black md:w-[60vw] w-[80vw] flex flex-col items-center" v-if="filteredUsers.length">
    <input
      type="search"
      placeholder="Search for username or type eg. infp"
      class="md:w-[40%] w-[100%] mb-4 p-2 px-4 bg-white text-black border-black border-1 rounded-4xl focus:outline-none"
      v-model="searchInput"
      v-if="filteredUsers.length"
    />
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[100%]">
      <li v-for="user in filteredUsers" :key="user.name + user.age + user.gender" class="border-t-3 shadow-xl border-[#4298b4] rounded p-4 w-[100%] bg-white relative">
        <p class="text-2xl font-medium">{{ user.name }}</p>
        <p class="text-lg">{{ user.age }} years</p>
        <i :class="genderIcon(user.gender)" class="text-xl absolute top-4 right-4"></i>
        <p class="text-xl text-black font-medium bg-[#ffdd33] size-min px-2 p-1 rounded mt-2">{{ getPersonalityFromTraits(user.traitsCount) }}</p>
      </li>
    </ul>
  </div>
  <div v-if="usersList.length === 0" class="flex flex-col items-center justify-center">
      <h1 class="mb-4 text-2xl">No past users found</h1>
      <p class="text-[#555a6a] mb-2">Get started with your first test </p>
      <router-link to="/" class="bg-black text-white rounded p-2 hover:bg-white hover:text-black border-2">
        Take test
      </router-link>
    </div>
    <p v-else-if="filteredUsers.length === 0" class="text-center w-full">Neither username nor type contains {{ `"${searchInput}"` }}</p>
</template>
