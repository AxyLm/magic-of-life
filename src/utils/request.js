import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken, getSSO } from '@/utils/auth'
import { showLoading, hideLoading } from '@/utils/RequestLoading'
import RequestUtil from '@/utils/RequestUtil'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 50000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Broker': 'bcs'

  },
  transformRequest: [function (data) {
    data = JSON.stringify(data)
    return data
  }]
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (getSSO()) {
      config.headers['SSOAuthorization'] = getSSO()
    }
    if (RequestUtil.isRepeat(config)) {
      return Promise.reject(new Error('REPETITIVE'))
    } else {
      showLoading(config)
      config = RequestUtil.configHandler(config)
      return config
    }
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    const url = response.config.url
    if (res.code !== 20000) {
      if (res.code !== 500000 && res.code !== 50014) {
        Message({
          showClose: true,
          message: res.msg,
          type: 'error',
          duration: 2.5 * 1000
        })
      }

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if ((res.code === 50008 || res.code === 50012 || res.code === 50014) && (url.search('/mess/getMsgList') === -1)) {
        MessageBox.confirm(
          '你登录已超时，可以取消继续留在该页面，或者重新登录',
          '提示',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          store.dispatch('Login').then(() => {
            this.$router.push({
              path: '@/views/login/index'
            });
            // location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      hideLoading(response.config)
      return Promise.reject('error')
    } else {
      hideLoading(response.config)
      return response.data
    }
  },
  error => {
    if (error.message === 'REPETITIVE') {
      Message({
        message: '重复操作',
        type: 'error',
        duration: 2.5 * 1000
      })
      throw new Error('REPETITIVE')
    }
    console.log('err' + error) // for debug
    if (error && error.config && error.config.url && (error.config.url.indexOf('logout') > 0 || error.config.url.indexOf('getMsgList') > 0)) {
      return
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 2.5 * 1000
    })
    hideLoading(error && error.response ? error.response.config : error.config)
    return Promise.reject(error)
  }
)

export default service
