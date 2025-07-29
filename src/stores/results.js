import { defineStore } from "pinia"
import { ref } from "vue"

export const useAnswers = defineStore('results', () => {
  const traitsCount = ref({ I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 })
  const addSelectedOption = (trait) => {
  traitsCount.value[trait]++;
  }
  return {traitsCount, addSelectedOption}
})
