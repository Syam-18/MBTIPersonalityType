<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { personalityQuestions } from '../PersonalityQuestions'
import { useAnswers } from '@/stores/results'
const answersSet = useAnswers()
const { addSelectedOption, addUser } = answersSet

const route = useRoute()
const router = useRouter()
const selected = ref('')
const attempted = ref(false)

const qNo = ref(parseInt(route.params.id))
const question = ref(personalityQuestions.find((q) => q.id === parseInt(route.params.id)))

watch(
  () => route.params.id,
  (newId) => {
    qNo.value = parseInt(newId)
    selected.value = ''
    question.value = personalityQuestions.find((q) => q.id === qNo.value)
  },
)

const goToNextQuestion = () => {
  if(!selected.value){
    attempted.value = true
  }
  if (selected.value) {
    addSelectedOption(selected.value)
    attempted.value = false
    if (qNo.value === 12) {
      addUser()
    }
    if (qNo.value <= 11) {
      router.replace(`/quiz/question/${qNo.value + 1}`)
    }
    else {
      router.replace('/quiz/results')
    }
  }
}

// const onClickLetsGo = () => {
//   const usersList = JSON.parse(localStorage.getItem('users')) || []
//   const newUser = { name: name, age: age, gender: gender, traitsCount: traitsCount }
//   usersList.push(newUser)
//   localStorage.setItem('users', JSON.stringify(usersList))
// }
</script>

<template>
  <div
    class="bg-[#FFAC8C] flex flex-col h-[70vh] w-[90vw] md:h-[80vh] md:w-[50vw] rounded items-center justify-center self-center"
    v-if="question"
  >
    <div class="w-[90%] text-black">
      <h1 class="text-center mb-2 md:text-3xl text-[1.3em] font-medium text-black">
        {{ question.question }}
      </h1>
      <label
        class="hover:bg-amber-50 md:p-2 md:px-4 p-1 pl-2 rounded w-full m-1 flex gap-4 items-center cursor-pointer text-sm md:text-lg"
        :class="selected === question.trait[0] ? 'bg-amber-50' : 'bg-white'"
      >
        <input
          type="radio"
          :name="'jp' + question.id"
          class="accent-black cursor-pointer"
          v-model="selected"
          :value="question.trait[0]"
        />
        <span class="cursor-pointer tracking-[0.1em]">
          {{ question.options[0].text }}
        </span>
      </label>

      <label
        class="hover:bg-amber-50 md:p-2 md:px-4 p-1 pl-2 rounded w-full m-1 flex gap-4 items-center cursor-pointer text-sm md:text-lg"
        :class="selected === question.trait[1] ? 'bg-amber-50' : 'bg-white'"
      >
        <input
          type="radio"
          :name="'jp' + question.id"
          class="accent-black cursor-pointer"
          v-model="selected"
          :value="question.trait[1]"
        />
        <span class="cursor-pointer tracking-[0.1em]">
          {{ question.options[1].text }}
        </span>
      </label>
    </div>
    <!-- <div class="flex justify-between w-[90%] m-4">
      <div
        class="flex gap-2 items-center bg-[#B56FED] hover:bg-[#A55EE0] text-white px-4 py-1 rounded cursor-pointer ml-1"
        @click="goToNextQuestion"
      >
        <button class="font-medium cursor-pointer tracking-wide">Skip</button>
        <i class="fa-solid fa-forward cursor-pointer font-[100]"></i>
      </div>

      <div
        class="flex gap-2 items-center bg-[#B56FED] hover:bg-[#A55EE0] text-white px-4 py-1 rounded cursor-pointer"
        @click="goToNextQuestion"
      >
        <button class="font-medium cursor-pointer tracking-wide">Submit</button>
        <i class="fa-solid fa-angles-up cursor-pointer"></i>
      </div>
    </div> -->
    <p :class="[!selected && attempted ? 'block' : 'hidden', 'text-left font-bold']"> * select an option</p>
    <div class="flex justify-center w-[90%] m-4">
      <div
        class="flex gap-2 items-center bg-[#B56FED] hover:bg-[#A55EE0] text-white px-4 py-1 rounded cursor-pointer ml-1 hover:scale-103 active:scale-97"
        @click="goToNextQuestion"
      >
        <button class="font-medium cursor-pointer tracking-wide md:text-lg">Next</button>
        <i class="fa-solid fa-forward cursor-pointer font-[100]"></i>
      </div>
    </div>
    <div class="border-[#78332c] border-1 w-[30vw] absolute  top-20 md:top-8 rounded-xl p-1">
      <div class="bg-[#e1958d] rounded-lg p-1" :style="{ width: (qNo-1)*(100/12) + '%'}"  >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
