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
      path: '/card1',
      name: 'card1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CardView1.vue')
    },
    {
      path:'/rat',
      name: 'rat',
      component: () => import('../views/DancingratView.vue')

    },
    {
      path:'/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path:'/cadastro',
      name: 'cadastro',
      component: () => import('../views/CadastroView.vue')
    }
    
  ]
})

export default router
