import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Error from '@/views/ErrorView.vue'
import CoinDetail from '@/views/CoinDetailView.vue'

const history = createWebHistory()

export default createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/coin/:id',
      name: 'coin-detail',
      component: CoinDetail,
    },
    {
      path: '/:catchAll(.*)',
      name: 'error',
      component: Error,
    },
  ],
})
