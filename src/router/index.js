import HomeView from '@/Components/HomeView.vue'
import NotFound from '@/Components/NotFound.vue'
import PersonalityTypes from '@/Components/PersonalityTypes.vue'
import QuizOptionsCard from '@/Components/QuizOptionsCard.vue'
import QuizResults from '@/Components/QuizResults.vue'
import UsersView from '@/Components/UsersView.vue'
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
      path: '/types',
      name: 'PersonalityTypes',
      component: PersonalityTypes,
    },
    {
      path: '/quiz/question/:id',
      name: 'PersonalityQuestion',
      component: QuizOptionsCard,
    },
    {
      path: '/users',
      name: 'UsersList',
      component: UsersView,
    },
    {
      path: '/quiz/results',
      name: 'QuizResults',
      component: QuizResults,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'InvalidPage',
      component: NotFound,
    },
  ],
})

export default router
