import HomeView from '@/Components/HomeView.vue'
import QuizOptionsCard from '@/Components/QuizOptionsCard.vue'
import QuizResults from '@/Components/QuizResults.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/quiz/question/:id',
      name: 'PersonalityQuestion',
      component: QuizOptionsCard,
    },
    {
      path: '/quiz/results',
      name: 'QuizResults',
      component: QuizResults
    }
  ],
})

export default router
