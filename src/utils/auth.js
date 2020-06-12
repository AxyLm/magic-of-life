import Cookies from 'js-cookie'

const TokenKey = 'brokercore-vue-basic_token'
const SSOKey = 'kunlunRiskSsoid'
const SSOToken = 'token'
const UMKey = 'UM_distinctid'

export function getToken() {
  return Cookies.get(TokenKey)
  // return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
  // return sessionStorage.setItem(TokenKey,token)
}

export function removeToken() {
  Cookies.remove(SSOKey, { path: '/', domain: 'kunlunrisk.com' })
  Cookies.remove(UMKey, { path: '/', domain: 'kunlunrisk.com' })
  return Cookies.remove(TokenKey)
  // return sessionStorage.removeItem(TokenKey)
}

export function removeTokenExcludeSSO() {
  Cookies.remove(UMKey, { path: '/', domain: 'kunlunrisk.com' })
  return Cookies.remove(TokenKey)
  // return sessionStorage.removeItem(TokenKey)
}

export function getSSO() {
  return Cookies.get(SSOKey)
}

export function getSSOUrl() {
  const href = window.location.href
  let pIndex = href.indexOf(SSOKey)
  if (pIndex === -1) {
    pIndex = href.indexOf(SSOToken)
  }
  if (pIndex > 0) {
    const param = href.substring(pIndex)
    const from = param.indexOf('=')
    const to = param.indexOf('#')
    const val = param.substring(from + 1, to)
    return val
  }
}

export function removeSSO() {
  return Cookies.remove(SSOKey)
}
