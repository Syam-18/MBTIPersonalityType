import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useAnswers = defineStore('results', () => {
  // Current user state
  const name = ref('')
  const age = ref('')
  const gender = ref('Male')
  const result = ref('')
  const traitsCount = ref({ I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 })

  // Users history (reactive)
  const usersList = ref(JSON.parse(localStorage.getItem('users')) || [])

  // Auto-sync usersList to localStorage
  watch(
    usersList,
    (newVal) => {
      localStorage.setItem('users', JSON.stringify(newVal))
    },
    { deep: true },
  )

  const addSelectedOption = (trait) => {
    traitsCount.value[trait]++
  }

  const addUser = () => {
    const newUser = {
      name: name.value,
      age: age.value,
      gender: gender.value,
      result: result.value,
      traitsCount: { ...traitsCount.value }, // clone so it's not reactive reference
    }
    usersList.value.push(newUser)
    resetAnswers()
  }

  const resetAnswers = () => {
    name.value = ''
    age.value = ''
    gender.value = 'Male'
    result.value = ''
    traitsCount.value = { I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
  }

  return {
    name,
    age,
    gender,
    result,
    traitsCount,
    usersList,
    addUser,
    resetAnswers,
    addSelectedOption,
  }
})
