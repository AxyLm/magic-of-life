import { getSSO, getSSOUrl } from '@/utils/auth'
import store from '../store'
import router from '../router'
import SessionUtil from '@/utils/SessionUtil'
const SSO_SESSION_KEY = 'SSO_SESSION_CACHE_KEY'
/**
 * 单点登录类
 */
export function checkSSO() {
  const href = window.location.href
  // console.info('check sso . url:' + href)
  // 获取sso系统的cokie
  const ssoCookie = getSsoKey()
  // console.log("=============checkSSO===" + ssoCookie)
  // 判断是否进行单点登录 ， 如果配置单点登录，但cokie为空时，进入单点登录页面
  if (!ssoCookie && process.env.SSO_API) {
    // console.info('sso cokie is null , to sso url : ' + process.env.SSO_API)
    // process.env.BASE_API
    window.location.href = process.env.SSO_API
    return true
  } else if (ssoCookie) {
    // console.info('auto login !')
    // 自动去后台校验单点登录
    // console.log("cookie============" + ssoCookie)
    store.dispatch('Login', { ssoCokie: ssoCookie, username: '', password: '' }).then(() => {
      // 回显页面
      if (href.indexOf('login') > 0) {
        router.push({ path: '/' })
      } else if (href.indexOf('resource=activiti') > 0) {
        window.location.href = href
      } else {
        router.push({ path: '/' })
      }
    }).catch((e, d) => {
      // 失败，如果配置单点时，回单点登录页
      if (process.env.SSO_API) {
        // window.location.href = process.env.SSO_API
        // router.push({ path: '/ssoLogin' })
        //ssoLoginOut()
        router.push({ path: '/page/404', query: {ssoValid: 'failure'}})
      }
    })
    return true
  }
  return false
}

function getSsoKey() {
  let ssoCookie = getSSO() || SessionUtil.get(SSO_SESSION_KEY)
  // console.log("getSSo==============" +  getSSO())
  if (!ssoCookie) {
    ssoCookie = getSSOUrl()
    if (ssoCookie) {
      SessionUtil.set(SSO_SESSION_KEY, ssoCookie)
      const href = window.location.href
      const tourl = href.substring(0, href.indexOf('?'))
      window.location.href = tourl
    }
  }
  return ssoCookie
}

export function ssoLoginOut() {
  if (process.env.SSO_API) {
    SessionUtil.removeItem(SSO_SESSION_KEY)
    // const host = process.env.SSO_API.substring(0, process.env.SSO_API.indexOf('sso'))
    // const tourl = host + 'sso/logout'
    // console.info('sso logout:' + tourl)
    // window.location.href = tourl
    window.location.href = process.env.SSO_API
    return true
  }
  return false
}
