import { defineStore } from "pinia"
import { ref } from "vue"

export const useAnswers = defineStore('results', () => {
  const selectedOptions = ref({})
  const addSelectedOption = ({id, value}) => {
    selectedOptions[id] = value
  }
  return {selectedOptions, addSelectedOption}
})
