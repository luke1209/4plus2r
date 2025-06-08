import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: () => import('../features/signUp/SignUp.vue')
  },
  {
    path: '/basic-info',
    name: 'BasicInfo',
    component: () => import('../features/BasicInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
