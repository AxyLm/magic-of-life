import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import store from '../store'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  method: 'post',
  timeout: 150000, // 请求超时时间
  responseType: 'blob',
  transfromRequest: [function(data) {
    return qs.stringify({
      ...data
    })
  }]
})
// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)
// response 拦截器
service.interceptors.response.use(
  response => {
    // // 创建一个blob对象,file的一种
    const blob = new Blob([response.data], { type: 'application/octet-stream' })
    // for ie 10+
    const navigator = window.navigator
    const userAgent = window.navigator.userAgent
    if (navigator.msSaveBlob) {
      window.navigator.msSaveOrOpenBlob(blob, response.config.fileName + '.' + response.config.fileType)
      return
    }
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    // 配置下载的文件名
    let fileType = 'xlsx'
    if (response.config.fileType) {
      fileType = response.config.fileType
    }
    link.download = response.config.fileName + '.' + fileType
    if (userAgent.indexOf('Firefox') >= 0) {
      document.body.appendChild(link)
      link.style.display = 'none'
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }))
    } else {
      link.click()
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service

