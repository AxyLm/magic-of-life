import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:'',
    userRouter:[
      {
        path: '/user',
        route:'/user',
        component: 'Layout',
        title:'用户',
        icon:'user',
        children:[
            {
                path:'info',
                route:'/user/info',
                title:'用户信息',
                icon:'edit',
                component:'userInfo/index'
            }
        ]
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
