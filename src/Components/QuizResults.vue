<script setup>
import { useAnswers } from '@/stores/results'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { personalityTypes } from '@/PersonalityTypes'

const answersSet = useAnswers()
const { traitsCount, usersList } = storeToRefs(answersSet)

const personality = computed(() => {
  const t = usersList.value.length > 0 ? usersList.value[usersList.value.length - 1].traitsCount : traitsCount.value
  return [
    t.I >= t.E ? 'I' : 'E',
    t.S >= t.N ? 'S' : 'N',
    t.T >= t.F ? 'T' : 'F',
    t.J >= t.P ? 'J' : 'P',
  ].join('')
})

const personalityType = personalityTypes.find((type) => type.type === personality.value)

const traitWord = {
  I: "Introversion",
  E: "Extroversion",
  S: "Sensing",
  N: "Intuition",
  T: "Thinking",
  F: "Feeling",
  J: "Judging",
  P: "Perceiving"
};

const traitPairs = [
  ['I', 'E'],
  ['S', 'N'],
  ['T', 'F'],
  ['J', 'P'],
]

const traitPercents = computed(() =>
  traitPairs.map(([left, right]) => {
    const t = usersList.value.length > 0
      ? usersList.value[usersList.value.length - 1].traitsCount
      : traitsCount.value
    const leftVal = t[left] || 0
    const rightVal = t[right] || 0
    const total = leftVal + rightVal

    return {
      left,
      right,
      leftPercent: total ? Math.round((leftVal / total) * 100) : 0,
      rightPercent: total ? Math.round((rightVal / total) * 100) : 0,
    }
  }),
)

const isShowInfo = ref(false)

const showInfo = () => {
  isShowInfo.value = !isShowInfo.value
  console.log('no')
}

</script>

<template>
  <div class="flex flex-col relative items-center justify-center p-4 md:p-8 text-black self-center " v-if="usersList.length !== 0">
    <div class="flex gap-2 md:gap-4 items-center mb-12">
      <h1 class="md:text-5xl text-3xl font-bold  grow">Personality Type</h1>
      <div @click="showInfo" class="text-black relative">
        <i class="fa-solid fa-circle-info cursor-pointer" :class="{'scale-150':isShowInfo}"></i>
        <div class="bg-black text-white absolute right-[-30px] p-1 px-2 md:px-4" v-if="isShowInfo">
          <p>{{usersList[usersList.length - 1].name}}</p>
          <p class="text-sm">{{ usersList[usersList.length - 1].age }}</p>
        </div>
      </div>
    </div>
    <div v-for="pair in traitPercents" :key="pair.left + pair.right" class="w-full max-w-xl mb-6 md:mb-8">
      <div class="flex justify-between text-sm md:text-base mb-1 font-medium text-gray-700">
        <span :class="pair.leftPercent > pair.rightPercent ? 'text-violet-700' : ''"
          >{{ traitWord[pair.left] }} ({{ pair.leftPercent }}%)</span
        >
        <span :class="pair.rightPercent > pair.leftPercent ? 'text-violet-700' : ''"
          >{{ traitWord[pair.right] }} ({{ pair.rightPercent }}%)</span
        >
      </div>
      <div
        class="w-full md:h-4 h-3 bg-gray-200 overflow-hidden flex"
        v-if="pair.leftPercent >= pair.rightPercent"
      >
        <div
          class="h-full bg-[#ffdd33] transition-all duration-500 flex items-center justify-end px-2"
          :style="{ width: pair.leftPercent + '%' }"
        >
        <i class="fa-solid fa-arrow-right text-xs text-violet-700 hidden md:inline"></i>
      </div>
      </div>
      <div class="w-full md:h-4 h-3 bg-[#ffdd33] overflow-hidden flex items-center" v-else>
        <div
          class="h-full bg-gray-200 transition-all duration-500 mr-2 flex items-center"
          :style="{ width: pair.leftPercent + '%' }"
        ></div>
        <i class="fa-solid fa-arrow-left text-xs text-violet-700"></i>
      </div>
    </div>
    <div class="md:text-5xl text-4xl font-extrabold text-violet-800 my-4 border-b-3 border-dotted">
      {{ personality }}
    </div>
    <p class="text-2xl fond-medium">{{ personalityType?.nickname }}</p>
    <p class="my-1 text-center italic">You are {{ personalityType?.description }}</p>
    <div class="flex items-center gap-2">
      <i class="fa-solid fa-lightbulb text-[#7be18c]"></i>
      <p class="text-sm text-center"> {{ personalityType?.funFact }}</p>
    </div>
  </div>
  <div v-else class="flex flex-col justify-center items-center">
    <h1 class="mb-4 text-2xl">No latest results</h1>
    <p class="text-[#555a6a] mb-2">Get started with your first test </p>
      <router-link to="/" class="bg-black text-white rounded p-2 hover:bg-white hover:text-black border-2">
        Take test
      </router-link>
  </div>
</template>
