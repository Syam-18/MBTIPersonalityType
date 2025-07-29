<script setup>
import { RouterLink } from 'vue-router'
const emit = defineEmits(['closeModal'])
</script>
<template>
  <div class="md:w-[50vw] xl:w-[30vw] w-[80vw] min-h-[50vh] bg-[#9D46E8] flex flex-col md:p-12 p-4 relative">
    <h1 class="text-white text-2xl tracking-wider mb-8 mt-8">
      <span class="font-medium text-3xl text-[#ffdd33] mr-0.5">I</span>ndividual
    </h1>
    <div class="flex items-center gap-4 w-[100%] my-2">
      <i class="fa-solid fa-user text-[#ffdd33] w-[5%]"></i>
      <input
        type="text"
        class="border-[#ffdd33] text-[#ffdd33] focus:border-3 font-medium border-2 rounded focus:outline-none px-4 py-2 grow"
        placeholder="name"
      />
    </div>
    <div class="flex items-center gap-4 w-[100%] my-2">
      <i class="fa-solid fa-battery-half text-[#ffdd33] w-[5%]"></i>
      <input
        type="number"
        min="1"
        class="border-[#ffdd33] text-[#ffdd33] focus:border-3 font-medium border-2 rounded focus:outline-none px-4 py-2 grow"
        placeholder="age"
      />
    </div>
    <div class="flex items-center gap-4 w-[100%] my-2">
      <i class="fa-solid fa-venus-mars text-[#ffdd33] w-[5%]"></i>
      <select
        class="border-[#ffdd33] text-[#ffdd33] focus:border-3 font-medium border-2 rounded focus:outline-none px-4 py-2 grow"
      >
        <option class="p-0 m-0">Male</option>
        <option class="p-0 m-0">Female</option>
      </select>
    </div>
    <RouterLink to="/quiz/question/1" class="self-center">
      <button
        class="flex justify-center items-center group text-[#97dafc] md:mt-16 mt-8 gap-2 border-[#97dafc] focus:outline-[#97dafc] border-2 rounded-2xl px-4 py-2 self-center cursor-pointer hover:bg-[#6DB6DE] hover:text-white transition-all duration-500"
      >
        <span class="font-semibold">Let's Go</span>
        <i
          class="fa-solid fa-rocket group-hover:rotate-45 group-hover:scale-125 transition-all duration-500"
        ></i>
      </button>
    </RouterLink>

    <div
      @click="emit('closeModal')"
      class="absolute top-4 right-4 flex items-center justify-center cursor-pointer border-[#ffdd33] text-[#ffdd33] hover:bg-[#ffdd33] hover:text-[#B56FED] border-3 w-8 h-8 p-1 rounded-full"
    >
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div>
</template>
<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
*::selection {
  background-color: white;
  color: #ffdd33;
  padding: 20px;
}
</style>
