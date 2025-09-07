import { createRouter, createWebHistory } from 'vue-router'
import {createRouterGuard} from './guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/index/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    }
  ],
})

createRouterGuard(router)

export default router
