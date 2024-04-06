import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vee-validate',
      name: 'vee-validate',
      component: () => import('@/views/VeeValidateView.vue')
    }
  ]
})

export default router
