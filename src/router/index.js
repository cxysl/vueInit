import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    components: {
      login: () => import(/* webpackChunkName: "login" */ '../pages/login')
    }
  },
  {
    path: '/',
    component: () => import('../pages/main'),
    children: []
  }
]

const router = new VueRouter({
  routes
})

export default router
