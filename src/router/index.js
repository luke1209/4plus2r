import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/basic-info',
    name: 'BasicInfo',
    component: () => import('../views/BasicInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
