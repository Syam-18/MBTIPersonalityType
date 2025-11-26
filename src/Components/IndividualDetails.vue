<script setup>
import router from '@/router';
import { useAnswers } from '@/stores/results';
import { storeToRefs } from 'pinia';
  import { RouterLink } from 'vue-router'
const emit = defineEmits(['closeModal'])
  const { name, age, gender } = storeToRefs(useAnswers())
  const startQuiz = () => {
    router.replace("/quiz/question/1")
}
</script>
<template>
  <form class="md:w-[50vw] xl:w-[30vw] w-[80vw] min-h-[40vh] bg-[white] flex flex-col md:p-12 p-4 relative shadow-[0_0_8px_1px_black]" @submit="startQuiz">
    <h1 class="text-black text-2xl tracking-wider mb-8 mt-8">
      <span class="font-medium text-3xl text-[#2795a2] mr-0.5">I</span>ndividual
    </h1>
    <div class="flex items-center gap-4 w-[100%] my-2">
      <i class="fa-solid fa-user text-[#2795a2] w-[5%]"></i>
      <input
        type="text"
        class=" focus:border-3 font-medium border-2 rounded focus:outline-none px-4 py-2 grow"
        placeholder="name"
        v-model="name"
      />
    </div>
    <div class="flex items-center gap-4 w-[100%] my-2">
      <i class="fa-solid fa-battery-half text-[#2795a2] w-[5%]"></i>
      <input
        type="number"
        min="1"
        class="  focus:border-3 font-medium border-2 rounded focus:outline-none px-4 py-2 grow"
        placeholder="age starting from 1"
        v-model="age"
      />
    </div>
    <p :class="[age < 1 && age ? 'block' : 'hidden']" class="translate-x-1/6">* age must be above 1</p>
    <div class="flex items-center gap-4 w-[100%] my-2">
      <i class="fa-solid fa-venus-mars text-[#2795a2] w-[5%]"></i>
      <select
        class="  focus:border-3 font-medium border-2 rounded focus:outline-none px-4 py-2 grow"
        v-model="gender"
      >
        <option class="p-0 m-0">Male</option>
        <option class="p-0 m-0">Female</option>
      </select>
    </div>
    <RouterLink to="/quiz/question/1" class="self-center md:mt-16 mt-8 hover:scale-103 active:scale-97" v-if=" name && age > 0 && age < 100">
      <button
        class="flex justify-center items-center group text-[#2795a2] gap-2 border-[#2795a2] focus:outline-[#2795a2]  border-2 rounded-2xl px-4 py-2 self-center cursor-pointer transition-all duration-500"
      >
        <span class="font-semibold">Let's Go</span>
        <i
          class="fa-solid fa-rocket group-hover:rotate-45 group-hover:scale-125 transition-all duration-500"
        ></i>
      </button>
    </RouterLink>

    <div
      @click="emit('closeModal')"
      class="absolute top-4 right-4 flex items-center justify-center cursor-pointer border-[#2795a2] text-[#2795a2] hover:bg-[#2795a2] hover:text-[black] border-3 w-8 h-8 p-1 rounded-full"
    >
      <i class="fa-solid fa-xmark"></i>
    </div>
  </form>
</template>
<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
*::selection {
  background-color: white;
  color: #2795a2;
  padding: 20px;
}
</style>
