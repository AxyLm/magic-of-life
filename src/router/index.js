import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'
const _import = require( "./_import_development")

Vue.use(VueRouter)
let routerList =  JSON.parse(localStorage.getItem('router'))
let getRouter;
let menus = []
let routes = [
  {
    path: '/',
    redirect:'/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/login')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/login')
  },
  {
    path:'/Error',
    name: 'Error',
    children:[
      {
        path:'404',
        name:'err',
        component: () => import(/* webpackChunkName: "404" */ '../views/error/404.vue')
      }
    ]
  },
]

console.log(routes)
let router = new VueRouter({
  mode: 'history', //后端支持可开
  routes,
  scrollBehavior: () => ({ y: 0 })
})



router.beforeEach((to, from, next) => {
  console.log('to'+to.path,'   from'+from.path
  
  ,
  router.currentRoute
  )
  if(to.path == '/Login'){
    next()
    return
  }
  if(!getRouter){
    routerGo(to, next)
  }else{
    next()
  }
  // if(from.path.indexOf('/Magic') && to.name == '404'){
  //   next({ path: '/Error/404'})
  // }else{
  //   next()
  // }
  // ...
})
router.onError((err)=>{
  console.log(err)
  console.log('router on error')
  console.log(
    router.app,
    router.mode,
    router.currentRoute
  )
})
router.onReady(()=>{
  console.log('router on ready')
  console.log(
    (router.app)+'\n',
    router.mode+'\n',
    router.currentRoute
  )
})
function routerGo(to, next) {
  getRouter = filterAsyncRouter(routerList) //过滤路由
  router.addRoutes(getRouter) //动态添加路由
  global.antRouter = getRouter //将路由数据传递给全局变量，做侧边栏菜单渲染工作
  next({ ...to, replace: true })
}
export function filterAsyncRouter(asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    try {
      if (route.component) {
        console.log(route)
        if (route.component === 'Layout') {//Layout组件特殊处理
          route.component = Layout
          route.redirect =route.path +'/'+ route.children[0].path

        } else {
          route.component = _import(route.component)
        }
      }
    } catch (e) {
      console.error(e)
      // route.component = _import('404')
      // return route
    }
    if (route.children && route.children.length) {
      filterAsyncRouter(route.children)
    }
    return true
  })
  console.log(accessedRouters)
  return accessedRouters
}

export default router
