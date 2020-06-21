import Vue from 'vue'
import App from './App.vue';
import router from './router'
import store from './store'

import Antd from 'ant-design-vue';
import axios from './utils/request'
import api from './utils/api'
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

Vue.prototype.$axios = axios
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

