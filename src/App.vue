<script setup lang="ts">
import { RouterView } from 'vue-router';

// import HomeView from './Components/HomeView.vue';

// import IndividualDetails from './Components/IndividualDetails.vue';
// import PersonalityTypes from './Components/PersonalityTypes.vue'
// import QuizOptionsCard from './Components/QuizOptionsCard.vue'
</script>
<template>
  <div class="flex flex-col items-center justify-center bg-white w-[100vw] min-h-screen p-8">
    <!-- <QuizOptionsCard /> -->
    <!-- <PersonalityTypes/> -->
     <!-- <IndividualDetails/> -->
      <!-- <HomeView/> -->
       <RouterView/>
  </div>
</template>
<style scoped>
* {
  font-family: 'Rubik', sans-serif;
  font-optical-sizing: auto;
  /* font-weight: ; */
  font-style: normal;
}
*::selection{
  color: white;
  background-color: #FFAC8C;
  padding:10px;
}
</style>
