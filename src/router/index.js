import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import Layout from '../views/Layout'
import axios from '@/utils/request'
import OutSys from '@/utils/OutSys'
import store from '@/store'

import 'nprogress/nprogress.css'
const _import = require( "./_import_"+process.env.NODE_ENV)
NProgress.configure({ showSpinner: false }) // NProgress configuration

Vue.use(VueRouter)
let getRouter = false;
let menus = []
let routes = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/login')
  },
  {
    path:'/Error',
    name: 'Error',
    component:Layout,
    children:[
      {
        path:'404',
        name:'err',
        component: () => import(/* webpackChunkName: "404" */ '../views/error/404.vue')
      }
    ]
  },
  {
    path:'/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/error/404.vue')
  },
]

let router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior: () => ({ y: 0 })
})

const whiteList = ['/Login','/Error','/Error/404'] // 不重定向白名单

router.beforeEach((to, from, next) => {
  if (OutSys.checkOutSysUrl(to)) {
    console.info(to)
    console.log(from)
    return
  }
  if (!validMenu(to)) {
    next({ path: '/Error/404', query: { from: from.path }})
  }

  let token = store.state.user.token
  if(!token){
    token = localStorage.getItem('uToken')
  }
  NProgress.start()

  if (whiteList.indexOf(to.path) > -1) {
    next()
    NProgress.done()
    return
  } else {
    if(token){
      if(!getRouter){
        getRouter = true
        routerGo(to, next)
      } else {
        if (to.path == '/') {
          routerGo(to, next)
        } else {
          next()
        }
      }
    }else{
      next({path:'/Login'})
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})
async function routerGo(to){
  let userInfo = store.state.user.userInfo
  await axios.post('/users/getAuthRouter',{
    "role":userInfo.roles,
  })
  .then((res) => {
    if (res.code == 0) {
      let routerList =  res.data
      let getRouter = filterAsyncRouter(routerList) //过滤路由
      router.addRoutes(getRouter) //
      store.dispatch('SetRouter',res.data)
      if(to.path == '/'){
        router.replace({ path:getRouter[0].path, replace: true ,name:getRouter[0].name })
      }else{
        router.replace(to)
      }
    }else{
      router.replace({path:'/Login',replace: true ,})
    }
  }).catch(()=>{
    router.replace({path:'/Login',replace: true ,})
  })
}
export function filterAsyncRouter(asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    try {
      if (route.component) {
        if (route.component === 'Layout') {//Layout组件特殊处理
          route.component = Layout
          if( route.children && route.children.length >= 1 ){  //避免无子菜单时的生成失败
            route.redirect =route.path +'/'+ route.children[0].path
          }
        } else {
          route.component = _import(route.component)
        }
        route.name = route.title
        route.meta = {
          id:route.id,
          type:route.type
        }
      }
      menus.push(route)
    } catch (e) {
      route.component = _import('404')
    }
    if (route.children && route.children.length) {
      filterAsyncRouter(route.children)
    }
    return true
  })
  return accessedRouters
}
export function validMenu(to) {
  if ((whiteList.indexOf(to.path) > -1)) {
    return true
  }
  if (menus.length > 0 && (to.name || to.path)) {
    const toName = to.name
    const toPath = to.path
    for (let i = 0; i < menus.length; i++) {
      if (menus[i].name === toName || menus[i].path === toPath) {
        return true
      }
    }
    console.info('Not Find to Page Redirect to 404 page',to)
    return false
  }
  return true
}
export default router
