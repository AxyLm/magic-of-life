// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue';
import router from './router'
import store from './store'
import PerfectScrollBar from 'perfect-scrollbar'
import Antd from 'ant-design-vue';

import axios from '@/utils/request'

import 'ant-design-vue/dist/antd.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css'


Vue.use(Antd);
Vue.prototype.$axios = axios
const el_scrollBar = (el) =>{
  if(el._ps instanceof PerfectScrollBar) {
    el._ps.update()
  }else{
    el._ps_ = new PerfectScrollBar(el,{suppressScrollX: true})
  }
}
// 自定义指令
Vue.directive('scrollBar',{
  inserted(el,binding,vnode) {
    const rules = ['fixed','absolute','relative']
    if(!rules.includes(window.getComputedStyle(el,null).position)){
      console.error(`perfect-scroll所在的容器属性position错误`)
    }
    el_scrollBar(el)
  },
  componentUpdated(el,binding,vnode,oldVnode){
    try {
      vnode.context.$nextTick(
        ()=>{
          el_scrollBar(el)
        }
      )
    } catch (error) {
      console.error(error)
    }
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
