import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'
const _import = require( "./_import_"+process.env.NODE_ENV)

Vue.use(VueRouter)
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
    component:Layout,
    children:[
      {
        path:'404',
        name:'err',
        component: () => import(/* webpackChunkName: "404" */ '../views/error/404.vue')
      }
    ]
  },
]

let router = new VueRouter({
  mode: 'history', //后端支持可开
  routes,
  scrollBehavior: () => ({ y: 0 })
})

const whiteList = ['/Login','/Error','/Error/404'] // 不重定向白名单

router.beforeEach((to, from, next) => {
  if( whiteList.indexOf(to.path) > -1 ){
    next()
    return // 避免跳转失败
  }
  global.openMenu = to.path
  if (!validMenu(to)) {
    next({ path: '/Error/404', query: { from: from.path }})
  }
  if(!getRouter){
    routerGo(to, next)
  }else{
    next()
  }
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
  
  let routerList =  JSON.parse(localStorage.getItem('router'))
  getRouter = filterAsyncRouter(routerList) //过滤路由
  router.addRoutes(getRouter) //动态添加路由
  global.antRouter = getRouter //将路由数据传递给全局变量，做侧边栏菜单渲染工作
  next({ ...to, replace: true })
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
  if ((to.path.indexOf('/Error/404') >= 0 || to.path === '/')) {
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
