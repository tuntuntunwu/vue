import { createRouter, createWebHistory } from 'vue-router'
import Video from '../views/Video.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Main.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    }
  ]
})

export default router
