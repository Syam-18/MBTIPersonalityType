<script setup>
import { ref } from 'vue'
import IndividualDetails from './IndividualDetails.vue'
import { useAnswers } from '@/stores/results'
const isStarted = ref(false)
const handleClose = () => {
  isStarted.value = false
}
const userInstance = useAnswers()

const startTest = () => {
  isStarted.value = true
  userInstance.resetAnswers()
}

</script>

<template>
  <div class="w-[60vw] flex flex-col items-center justify-center text-center">
    <img src="https://i.pinimg.com/736x/bb/49/fd/bb49fd2503e1a9c1779fa54be5e423ea.jpg" class="w-80 h-80"/>
    <h1 class="md:text-4xl my-4 font-medium text-2xl">MBTI <br> personality test</h1>
    <p class="text-[#555a6a] md:text-lg text-sm">Get a idea about your personality type under 3mins!</p>
    <button
      class="bg-black text-white hover:bg-white hover:text-black border-2 rounded px-4 py-2 my-3 cursor-pointer"
      @click="startTest"
    >
      Start Test
    </button>
  </div>
  <div class="fixed inset-0 flex items-center justify-center bg-opacity-50" v-if="isStarted">
    <IndividualDetails class="z-10" @close-modal="handleClose"/>
    <div class="absolute inset-0 bg-[hsl(186,67%,46%)]/5 backdrop-blur-sm z-0" @click="handleClose"></div>
  </div>
</template>
