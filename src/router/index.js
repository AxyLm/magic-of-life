import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/login')
  },
  {
    redirect:'/',
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/login')
  },
  {
    path:'*',
    name:'404',
    component: () => import(/* webpackChunkName: "404" */ '../views/error/404.vue')
  }
]

let router = new VueRouter({
  mode: 'history', //后端支持可开
  routes,
  scrollBehavior: () => ({ y: 0 })
})

export default router
