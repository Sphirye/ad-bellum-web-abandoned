import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', name: 'Inicio', component: () => import('../views/HomeView.vue') },
  { path: '/combats', name: 'Combates', component: () => import('../views/HomeView.vue') },
  { path: '/events', name: 'Eventos', component: () => import('../views/HomeView.vue') },
  { path: '/galery', name: 'Galería', component: () => import('../views/HomeView.vue') },
  { path: '/about', name: 'Acerca de', component: () => import('../views/AboutView.vue') },
  { path: '*', redirect: '/' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
