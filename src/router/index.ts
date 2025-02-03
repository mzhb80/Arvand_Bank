import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/index.vue'),
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/views/test.vue')
    }
  ],
})

export default router
