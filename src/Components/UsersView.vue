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

</script>
<template>
  <div class="text-black md:w-[60vw] w-[80vw] flex flex-col items-center">
    <input
      type="search"
      placeholder="Search for username or type eg. infp"
      class="md:w-[40%] w-[100%] mb-4 p-2 rounded bg-black text-white focus:outline-none"
      v-model="searchInput"
    />
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[100%]">
      <li v-for="user in filteredUsers" :key="user.name + user.age + user.gender" class="border-2 rounded p-4 w-[100%]">
        <p>{{ user.name }}</p>
        <p>{{ user.age }} years</p>
        <p>{{ user.gender }}</p>
        <p>{{ getPersonalityFromTraits(user.traitsCount) }}</p>
      </li>
    </ul>
    <p v-if="filteredUsers.length === 0" class="text-center w-full">No user found with name {{ `"${searchInput}"` }}</p>
  </div>
</template>
