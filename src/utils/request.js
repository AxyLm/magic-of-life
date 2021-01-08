import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 30 * 1000, // 请求超时时间
  method:'post',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  transformRequest: [function (data) {
    data = JSON.stringify(data)
    return data
  }]
})

service.interceptors.request.use(
  function (config) {
    config.baseURL = process.env.BASE_API
    config.headers['broker'] = 'app'
    let uToken = localStorage.getItem('uToken')
    if (uToken) {
      config.headers['Authorization'] = uToken // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.timeout = 1000 * 30;
    return config;
  },
  function (error) {
    console.log(error)
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
service.interceptors.response.use(
  function (response) {
    // Do something with response data
    return Promise.resolve(response.data)
  },
  function (error) {
    console.log(error)
    // Do something with response error
    return Promise.reject(error);
  }
);


export default service
